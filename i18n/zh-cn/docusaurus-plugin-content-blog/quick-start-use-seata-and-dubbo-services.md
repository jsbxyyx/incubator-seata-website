---
title: 如何使用Seata保证Dubbo微服务间的一致性
keywords: [Dubbo,Seata,一致性]
description: 本文主要介绍如何使用Seata保证Dubbo微服务间的一致性
author: slievrly
date: 2019-03-07
---
# 如何使用Seata保证Dubbo微服务间的一致性

## 案例

用户采购商品业务，整个业务包含3个微服务:

- 库存服务: 扣减给定商品的库存数量。
- 订单服务: 根据采购请求生成订单。
- 账户服务: 用户账户金额扣减。

### 业务结构图

![Architecture](/img/blog/seata/seata-1.png) 


### StorageService

```java
public interface StorageService {

    /**
     * deduct storage count
     */
    void deduct(String commodityCode, int count);
}
```

### OrderService

```java
public interface OrderService {

    /**
     * create order
     */
    Order create(String userId, String commodityCode, int orderCount);
}
```

### AccountService

```java
public interface AccountService {

    /**
     * debit balance of user's account
     */
    void debit(String userId, int money);
}
```

### 主要的业务逻辑：

```java
public class BusinessServiceImpl implements BusinessService {

    private StorageService storageService;

    private OrderService orderService;

    /**
     * purchase
     */
    public void purchase(String userId, String commodityCode, int orderCount) {

        storageService.deduct(commodityCode, orderCount);

        orderService.create(userId, commodityCode, orderCount);
    }
}
```

```java
public class StorageServiceImpl implements StorageService {

  private StorageDAO storageDAO;
  
    @Override
    public void deduct(String commodityCode, int count) {
        Storage storage = new Storage();
        storage.setCount(count);
        storage.setCommodityCode(commodityCode);
        storageDAO.update(storage);
    }
}
```

```java
public class OrderServiceImpl implements OrderService {

    private OrderDAO orderDAO;

    private AccountService accountService;

    public Order create(String userId, String commodityCode, int orderCount) {

        int orderMoney = calculate(commodityCode, orderCount);

        accountService.debit(userId, orderMoney);

        Order order = new Order();
        order.userId = userId;
        order.commodityCode = commodityCode;
        order.count = orderCount;
        order.money = orderMoney;

        return orderDAO.insert(order);
    }
}
```

## Seata 分布式事务解决方案

![undefined](/img/blog/seata/seata-2.png) 

此处仅仅需要一行注解 `@GlobalTransactional` 写在业务发起方的方法上: 

```java

    @GlobalTransactional
    public void purchase(String userId, String commodityCode, int orderCount) {
        ......
    }
```

##  Dubbo 与 Seata 结合的例子

### Step 1: 安装数据库

- 要求: MySQL (InnoDB 存储引擎)。

**提示:** 事实上例子中3个微服务需要3个独立的数据库，但为了方便我们使用同一物理库并配置3个逻辑连接串。 

更改以下xml文件中的数据库url、username和password

dubbo-account-service.xml
dubbo-order-service.xml
dubbo-storage-service.xml

```xml
    <property name="url" value="jdbc:mysql://x.x.x.x:3306/xxx" />
    <property name="username" value="xxx" />
    <property name="password" value="xxx" />
```
### Step 2: 为 Seata 创建 UNDO_LOG 表

`UNDO_LOG` 此表用于 Seata 的AT模式。

```sql
CREATE TABLE `undo_log` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `branch_id` bigint(20) NOT NULL,
  `xid` varchar(100) NOT NULL,
  `rollback_info` longblob NOT NULL,
  `log_status` int(11) NOT NULL,
  `log_created` datetime NOT NULL,
  `log_modified` datetime NOT NULL,
  `ext` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_unionkey` (`xid`,`branch_id`)
) ENGINE=InnoDB AUTO_INCREMENT=159 DEFAULT CHARSET=utf8
```

### Step 3: 创建相关业务表

```sql

DROP TABLE IF EXISTS `storage_tbl`;
CREATE TABLE `storage_tbl` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `commodity_code` varchar(255) DEFAULT NULL,
  `count` int(11) DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE KEY (`commodity_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `order_tbl`;
CREATE TABLE `order_tbl` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(255) DEFAULT NULL,
  `commodity_code` varchar(255) DEFAULT NULL,
  `count` int(11) DEFAULT 0,
  `money` int(11) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `account_tbl`;
CREATE TABLE `account_tbl` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(255) DEFAULT NULL,
  `money` int(11) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```
### Step 4: 启动 Seata-Server 服务

- 下载Server [package](https://github.com/seata/seata/releases), 并解压。
- 运行bin目录下的启动脚本。

```shell
sh seata-server.sh $LISTEN_PORT $PATH_FOR_PERSISTENT_DATA

e.g.

sh seata-server.sh 8091 /home/admin/seata/data/
```

### Step 5: 运行例子

- 启动账户服务 ([DubboAccountServiceStarter](https://github.com/seata/seata-samples/blob/master/dubbo/src/main/java/com/seata/seata/samples/dubbo/starter/DubboAccountServiceStarter.java))。
- 启动库存服务 ([DubboStorageServiceStarter](https://github.com/seata/seata-samples/blob/master/dubbo/src/main/java/com/seata/seata/samples/dubbo/starter/DubboStorageServiceStarter.java))。
- 启动订单服务 ([DubboOrderServiceStarter](https://github.com/seata/seata-samples/blob/master/dubbo/src/main/java/com/seata/seata/samples/dubbo/starter/DubboOrderServiceStarter.java))。
- 运行BusinessService入口 ([DubboBusinessTester](https://github.com/seata/seata-samples/blob/master/dubbo/src/main/java/com/seata/seata/samples/dubbo/starter/DubboBusinessTester.java))。

### 相关项目
* seata:          https://github.com/seata/seata/
* seata-samples : https://github.com/seata/seata-samples  
