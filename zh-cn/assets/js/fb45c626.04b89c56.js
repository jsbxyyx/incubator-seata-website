"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[45795],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>v});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,v=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(v,s(s({ref:n},c),{},{components:t})):r.createElement(v,s({ref:n},c))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[d]="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},47555:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const o={hidden:!0,title:"\u9ad8\u53ef\u7528\u90e8\u7f72",keywords:["kubernetes","ops"],description:"Seata \u9ad8\u53ef\u7528\u90e8\u7f72",author:"helloworlde",date:new Date("2020-04-10T00:00:00.000Z")},s="Seata \u9ad8\u53ef\u7528\u90e8\u7f72",l={unversionedId:"ops/deploy-ha",id:"version-v1.7/ops/deploy-ha",title:"\u9ad8\u53ef\u7528\u90e8\u7f72",description:"Seata \u9ad8\u53ef\u7528\u90e8\u7f72",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.7/ops/deploy-ha.md",sourceDirName:"ops",slug:"/ops/deploy-ha",permalink:"/zh-cn/docs/v1.7/ops/deploy-ha",draft:!1,tags:[],version:"v1.7",frontMatter:{hidden:!0,title:"\u9ad8\u53ef\u7528\u90e8\u7f72",keywords:["kubernetes","ops"],description:"Seata \u9ad8\u53ef\u7528\u90e8\u7f72",author:"helloworlde",date:"2020-04-10T00:00:00.000Z"},sidebar:"docs",previous:{title:"Helm\u90e8\u7f72",permalink:"/zh-cn/docs/v1.7/ops/deploy-by-helm"}},i={},p=[{value:"Seata-Server",id:"seata-server",level:2}],c={toc:p},d="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"seata-\u9ad8\u53ef\u7528\u90e8\u7f72"},"Seata \u9ad8\u53ef\u7528\u90e8\u7f72"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Seata \u7684\u9ad8\u53ef\u7528\u4f9d\u8d56\u4e8e\u6ce8\u518c\u4e2d\u5fc3\u3001\u914d\u7f6e\u4e2d\u5fc3\u548c\u6570\u636e\u5e93\u6765\u5b9e\u73b0")),(0,a.kt)("h2",{id:"seata-server"},"Seata-Server"),(0,a.kt)("p",null,"Seata-Server \u9700\u8981\u4f7f\u7528\u6ce8\u518c\u4e2d\u5fc3\uff0c\u5e76\u628a\u4e8b\u52a1\u6570\u636e\u4fdd\u5b58\u5230\u6570\u636e\u5e93\u4e2d\uff0c\u4ee5 Nacos \u4e3a\u4f8b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4fee\u6539",(0,a.kt)("inlineCode",{parentName:"li"},"registry.conf"),"\u7684\u6ce8\u518c\u4e2d\u5fc3\u914d\u7f6e")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'registry {\n  type = "nacos"\n\n  nacos {\n    application = "seata-server"\n    serverAddr = "192.168.199.2"\n    namespace = ""\n    cluster = "default"\n    username = ""\n    password = ""\n  }\n}\n\nconfig {\n  type = "nacos"\n  \n  nacos {\n    serverAddr = "192.168.199.2"\n    namespace = ""\n    group = "SEATA_GROUP"\n    username = ""\n    password = ""\n  }\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9700\u8981\u4fee\u6539\u914d\u7f6e\u4e2d\u5fc3\u7684\u4ee5\u4e0b\u51e0\u4e2a\u914d\u7f6e(\u542bdb\u4e0eredis,\u4e8c\u8005\u9009\u5176\u4e00 \u6ce8:redis\u9700seata-server 1.3\u7248\u672c\u53ca\u4ee5\u4e0a)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"service.vgroupMapping.my_test_tx_group=default\nstore.mode=db|redis\n-----db-----\nstore.db.datasource=druid\nstore.db.dbType=mysql\nstore.db.driverClassName=com.mysql.jdbc.Driver\nstore.db.url=jdbc:mysql://127.0.0.1:3306/seata?useUnicode=true\nstore.db.user=root\nstore.db.password=123456\n----redis----\nstore.redis.host=127.0.0.1\nstore.redis.port=6379\nstore.redis.maxConn=10\nstore.redis.minConn=1\nstore.redis.database=0\nstore.redis.password=null\nstore.redis.queryLimit=100\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"db\u6a21\u5f0f\u9700\u8981\u5728\u6570\u636e\u5e93\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"li"},"global_table"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"branch_table"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"lock_table"),"\u8868")),(0,a.kt)("p",null,"\u76f8\u5e94\u7684\u811a\u672c\u5728GitHub \u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/tree/develop/script/server/db"},"/script/server/db/")," \u76ee\u5f55\u4e0b"),(0,a.kt)("p",null,"\u8fd9\u6837\uff0c\u542f\u52a8\u591a\u4e2aseata-server\uff0c\u5373\u53ef\u5b9e\u73b0\u5176\u9ad8\u53ef\u7528"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\u4ee5 Kubernetes \u4e3a\u4f8b\uff0c\u90e8\u7f72\u6587\u4ef6\u53c2\u8003:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Service\nmetadata:\n  name: seata-ha-server\n  namespace: default\n  labels:\n    app.kubernetes.io/name: seata-ha-server\nspec:\n  type: ClusterIP\n  ports:\n    - port: 8091\n      protocol: TCP\n      name: http\n  selector:\n    app.kubernetes.io/name: seata-ha-server\n\n---\n\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: seata-ha-server\n  namespace: default\n  labels:\n    app.kubernetes.io/name: seata-ha-server\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app.kubernetes.io/name: seata-ha-server\n  template:\n    metadata:\n      labels:\n        app.kubernetes.io/name: seata-ha-server\n    spec:\n      containers:\n        - name: seata-ha-server\n          image: docker.io/seataio/seata-server:latest\n          imagePullPolicy: IfNotPresent\n          env:\n            - name: SEATA_CONFIG_NAME\n              value: file:/root/seata-config/registry\n          ports:\n            - name: http\n              containerPort: 8091\n              protocol: TCP\n          volumeMounts:\n            - name: seata-config\n              mountPath: /root/seata-config\n      volumes:\n        - name: seata-config\n          configMap:\n            name: seata-ha-server-config\n\n\n---\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: seata-ha-server-config\ndata:\n  registry.conf: |\n    registry {\n        type = "nacos"\n        nacos {\n          application = "seata-server"\n          serverAddr = "192.168.199.2"\n        }\n    }\n    config {\n      type = "nacos"\n      nacos {\n        serverAddr = "192.168.199.2"\n        group = "SEATA_GROUP"\n      }\n    }\n')))}u.isMDXComponent=!0}}]);