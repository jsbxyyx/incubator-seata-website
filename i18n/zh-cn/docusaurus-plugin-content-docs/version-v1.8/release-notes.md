---
title: 发布说明
keywords: [Seata, 发布说明, 1.8.x]
description: 1.8.x 发布说明
---


# 发布说明

## Seata

> GitHub: <https://github.com/seata/seata>
>
> 发布说明: <https://github.com/seata/seata/releases>

### 1.8.0 (2023-11-05)

[source](https://github.com/seata/seata/archive/v1.8.0.zip) |
[binary](https://github.com/seata/seata/releases/download/v1.8.0/seata-server-1.8.0.zip)

<details>
  <summary><mark>Release notes</mark></summary>

### Seata 1.8.0

Seata 1.8.0 发布

Seata 是一款开源的分布式事务解决方案，提供高性能和简单易用的分布式事务服务。

此版本更新如下：

### feature

- [[#3672](https://github.com/seata/seata/pull/3672)] AT模式支持Dameng数据库
- [[#5892](https://github.com/seata/seata/pull/5892)] AT模式支持PolarDB-X 2.0数据库

### bugfix

- [[#5833](https://github.com/seata/seata/pull/5833)] 修复 XA 事务失败回滚后，TC 继续重试回滚的问题
- [[#5884](https://github.com/seata/seata/pull/5884)] 修复达梦前后镜像查询列名都加了引号导致sql异常的问题
- [[#5931](https://github.com/seata/seata/pull/5931)] 修复存储redis哨兵模式下哨兵密码缺失的问题
- [[#5970](https://github.com/seata/seata/pull/5970)] 修复某些未弃用的配置显示"已弃用"

### optimize

- [[#5866](https://github.com/seata/seata/pull/5866)] 一些小的语法优化
- [[#5889](https://github.com/seata/seata/pull/5889)] 移除无license组件
- [[#5890](https://github.com/seata/seata/pull/5890)] 移除7z压缩支持
- [[#5891](https://github.com/seata/seata/pull/5891)] 移除 mariadb.jdbc 依赖
- [[#5828](https://github.com/seata/seata/pull/5828)] 修正 `codecov chart` 不展示的问题
- [[#5927](https://github.com/seata/seata/pull/5927)] 优化一些与 Apollo 相关的脚本
- [[#5918](https://github.com/seata/seata/pull/5918)] 修正codecov.yml不标准属性
- [[#5939](https://github.com/seata/seata/pull/5939)] 支持 jmx 监控配置

### security

- [[#5867](https://github.com/seata/seata/pull/5867)] 修复npm package漏洞
- [[#5898](https://github.com/seata/seata/pull/5898)] 修复npm package漏洞

### test

- [[#5888](https://github.com/seata/seata/pull/5888)] 移除 sofa 测试用例
- [[#5831](https://github.com/seata/seata/pull/5831)] 升级 `druid` 版本，并添加 `test-druid.yml` 用于测试seata与druid各版本的兼容性。
- [[#5862](https://github.com/seata/seata/pull/5862)] 修复单元测试在Java21下无法正常运行的问题。
- [[#5914](https://github.com/seata/seata/pull/5914)] 升级 native-lib-loader 版本
- [[#5960](https://github.com/seata/seata/pull/5960)] 修复 zookeeper 单测失败问题
- [[#5981](https://github.com/seata/seata/pull/5981)] 固定 `seata-server` 所使用有 jedis 版本

非常感谢以下 contributors 的代码贡献。若有无意遗漏，请报告。

<!-- 请确保您的 GitHub ID 在以下列表中 -->
- [slievrly](https://github.com/slievrly)
- [capthua](https://github.com/capthua)
- [funky-eyes](https://github.com/funky-eyes)
- [iquanzhan](https://github.com/iquanzhan)
- [leizhiyuan](https://github.com/leizhiyuan)
- [l81893521](https://github.com/l81893521)
- [PeppaO](https://github.com/PeppaO)
- [wangliang181230](https://github.com/wangliang181230)
- [hsien999](https://github.com/hsien999)

同时，我们收到了社区反馈的很多有价值的issue和建议，非常感谢大家。

#### 常用链接

- **Seata:** <https://github.com/seata/seata>
- **Seata-Samples:** <https://github.com/seata/seata-samples>
- **Release:** <https://github.com/seata/seata/releases>
- **WebSite:** <https://seata.io>

</details>
