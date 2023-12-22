"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[92259],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),k=o,m=u["".concat(i,".").concat(k)]||u[k]||d[k]||a;return r?n.createElement(m,p(p({ref:t},c),{},{components:r})):n.createElement(m,p({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=k;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:o,p[1]=s;for(var l=2;l<a;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},56660:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={title:"Zookeeper \u6ce8\u518c\u4e2d\u5fc3",keywords:["Seata","Zookeeper"],description:"Zookeeper \u6ce8\u518c\u4e2d\u5fc3\u3002"},p="ZooKeeper \u6ce8\u518c\u4e2d\u5fc3",s={unversionedId:"user/registry/zookeeper",id:"version-v1.4/user/registry/zookeeper",title:"Zookeeper \u6ce8\u518c\u4e2d\u5fc3",description:"Zookeeper \u6ce8\u518c\u4e2d\u5fc3\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.4/user/registry/zookeeper.md",sourceDirName:"user/registry",slug:"/user/registry/zookeeper",permalink:"/zh-cn/docs/v1.4/user/registry/zookeeper",draft:!1,tags:[],version:"v1.4",frontMatter:{title:"Zookeeper \u6ce8\u518c\u4e2d\u5fc3",keywords:["Seata","Zookeeper"],description:"Zookeeper \u6ce8\u518c\u4e2d\u5fc3\u3002"},sidebar:"docs",previous:{title:"Consul \u6ce8\u518c\u4e2d\u5fc3",permalink:"/zh-cn/docs/v1.4/user/registry/consul"},next:{title:"API \u652f\u6301",permalink:"/zh-cn/docs/v1.4/user/api"}},i={},l=[{value:"\u9884\u5907\u5de5\u4f5c",id:"\u9884\u5907\u5de5\u4f5c",level:2},{value:"\u5feb\u901f\u4e0a\u624b",id:"\u5feb\u901f\u4e0a\u624b",level:2},{value:"Server\u7aef\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3",id:"server\u7aef\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3",level:3},{value:"Client\u7aef\u914d\u7f6e",id:"client\u7aef\u914d\u7f6e",level:3}],c={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"zookeeper-\u6ce8\u518c\u4e2d\u5fc3"},"ZooKeeper \u6ce8\u518c\u4e2d\u5fc3"),(0,o.kt)("p",null,"ZooKeeper\u662f Seata \u7ec4\u4ef6\u4e2d\u91cd\u8981\u7684\u6ce8\u518c\u4e2d\u5fc3\u5b9e\u73b0"),(0,o.kt)("p",null,"\u672c\u6587\u4ee5ZooKeeper\u4f5c\u4e3a\u6ce8\u518c\u4e2d\u5fc3\uff0c\u4ee5 file \u4f5c\u4e3a\u914d\u7f6e\u4e2d\u5fc3"),(0,o.kt)("p",null,"ZooKeeper\u7248\u672c\u5efa\u8bae 3.4.13\u53ca\u4ee5\u4e0a\uff0c\u4e0b\u6587\u4ee5 ZooKeeper 3.4.14\u7248\u672c\u4e3a\u4f8b"),(0,o.kt)("h2",{id:"\u9884\u5907\u5de5\u4f5c"},"\u9884\u5907\u5de5\u4f5c"),(0,o.kt)("p",null,"\u5f53\u60a8\u51c6\u5907\u5c06 ",(0,o.kt)("strong",{parentName:"p"},"Seata")," \u6ce8\u518c\u5230 ZooKeeper \u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u5df2\u7ecf\u542f\u52a8 ZooKeeper \u670d\u52a1\u3002\u5982\u679c\u60a8\u5c1a\u4e14\u4e0d\u719f\u6089 ZooKeeper \u7684\u57fa\u672c\u4f7f\u7528\u7684\u8bdd\uff0c\u53ef\u5148\u884c\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"https://zookeeper.apache.org/doc/r3.4.14/index.html"},"ZooKeeper\u5b98\u65b9\u6587\u6863")),(0,o.kt)("h2",{id:"\u5feb\u901f\u4e0a\u624b"},"\u5feb\u901f\u4e0a\u624b"),(0,o.kt)("p",null,"Seata \u878d\u5408 ZooKeeper \u6ce8\u518c\u4e2d\u5fc3\u7684\u64cd\u4f5c\u6b65\u9aa4\u975e\u5e38\u7b80\u5355\uff0c\u5927\u81f4\u6b65\u9aa4\u53ef\u5206\u4e3a\u201c\u589e\u52a0 Maven \u4f9d\u8d56\u201d\u4ee5\u53ca\u201c\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3\u201c\u3002"),(0,o.kt)("h3",{id:"server\u7aef\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3"},"Server\u7aef\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3"),(0,o.kt)("p",null,"\u4e0b\u8f7d ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/releases/tag/v1.4.2"},"Seata 1.4.2 release")," \u5e76\u89e3\u538b"),(0,o.kt)("p",null,"\u5728 /conf/registry.conf \u4e2d\u4fee\u6539\u5bf9\u5e94\u914d\u7f6e\u4e2d\u5fc3\uff0c\u5176\u4f59",(0,o.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/blob/develop/script/client/conf/registry.conf"},"\u914d\u7f6e\u53c2\u8003")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'registry {\n  type = "zk"\n\n  zk {\n    # \u6ce8\u518c\u5230 zk \u4e0a\u7684\u96c6\u7fa4\u540d\u79f0\uff0c\u9ed8\u8ba4\u662f default\n    cluster = "default"\n    serverAddr = "127.0.0.1:2181"\n    sessionTimeout = 6000\n    connectTimeout = 2000\n    username = ""\n    password = ""\n  }\n}\n')),(0,o.kt)("p",null,"\u6267\u884c /bin/seata-server.bat (Windows) \u6216 /bin/seata-server.sh (Unix) \u542f\u52a8 Seata\uff0c\u670d\u52a1\u5c06\u8fd0\u884c\u5728\u672c\u5730 8091 \u7aef\u53e3\u4e0a\uff0c\u6253\u5f00ZooKeeper\u5ba2\u6237\u7aef\u547d\u4ee4\u884c\uff0c\u8f93\u5165",(0,o.kt)("inlineCode",{parentName:"p"}," ls /registry/zk/default"),"\uff0c\u67e5\u770b\u5230\u8282\u70b9\u5730\u5740\u5373\u6ce8\u518c\u6210\u529f\uff08\u5982\u4e0b\uff09"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"[zk: localhost:2181(CONNECTED) 1] ls /registry/zk/default\n[127.0.0.1:8091]\n")),(0,o.kt)("h3",{id:"client\u7aef\u914d\u7f6e"},"Client\u7aef\u914d\u7f6e"),(0,o.kt)("p",null,"\u5982\u679c\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"io.seata:seata-spring-boot-starter"),"\u4f9d\u8d56\uff0c\u9700\u8981\u5728 application.yml \u4e2d\u52a0\u5165\u5982\u4e0bzookeeper\u7684\u914d\u7f6e\u9879\uff0c\u5176\u4f59",(0,o.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/blob/1.4.2/script/client/spring/application.yml"},"\u914d\u7f6e\u53c2\u8003")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"seata:\n  registry:\n    type: zk\n    zk:\n      server-addr: 127.0.0.1:2181\n      # \u4e8b\u52a1\u5206\u7ec4\u914d\u7f6e\uff0c1.4.2 \u9ed8\u8ba4\u540d\u79f0\u4e3a my_test_tx_group \uff0c1.5\u7248\u672c\u5c06\u6539\u4e3a default_tx_group\n      # \u6709\u5173\u4e8b\u52a1\u5206\u7ec4\uff0c\u8bf7\u53c2\u8003 https://seata.io/zh-cn/docs/user/txgroup/transaction-group\n      session-timeout: 6000\n      connect-timeout: 2000\n      username:\n      password:\n  tx-service-group: my_test_tx_group\n  service:\n    # \u4e8b\u52a1\u5206\u7ec4\u4e0e\u96c6\u7fa4\u6620\u5c04\u5173\u7cfb\n    vgroup-mapping:\n      my_test_tx_group: default\n")),(0,o.kt)("p",null,"\u6216\u8005\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"io.seata:seata-all"),"\u4f9d\u8d56\uff0c\u5219\u9700\u8981\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"file.conf"),"\u4e2d\u52a0\u5165\u4e8b\u52a1\u5206\u7ec4\u4e0e\u96c6\u7fa4\u6620\u5c04\u5173\u7cfb\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  vgroupMapping.my_test_tx_group = "default"\n')),(0,o.kt)("p",null,"\u5e76\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"registry.conf"),"\u6587\u4ef6\u4e2d\u52a0\u5165zookeeper\u7684\u914d\u7f6e\u9879\uff0c\u5176\u4f59",(0,o.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/tree/1.4.2/script/client/conf"},"\u914d\u7f6e\u53c2\u8003")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  zk {\n    serverAddr = "127.0.0.1:2181"\n    sessionTimeout = 6000\n    connectTimeout = 2000\n    username = ""\n    password = ""\n  }\n')),(0,o.kt)("p",null,"Client \u914d\u7f6e\u5b8c\u6210\u540e\u542f\u52a8\u5e94\u7528\u5e76\u7a0d\u5f85\u7247\u523b\uff0c\u5373\u53ef\u6b63\u5f0f\u4f53\u9a8c Seata \u670d\u52a1"))}d.isMDXComponent=!0}}]);