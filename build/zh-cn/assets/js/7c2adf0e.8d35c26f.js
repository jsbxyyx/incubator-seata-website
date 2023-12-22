"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[23754],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>v});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,v=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(v,s(s({ref:t},l),{},{components:n})):r.createElement(v,s({ref:t},l))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},29998:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"Nacos \u6ce8\u518c\u4e2d\u5fc3",keywords:["Seata","Nacos"],description:"Nacos \u6ce8\u518c\u4e2d\u5fc3\u3002"},s="Nacos \u6ce8\u518c\u4e2d\u5fc3",i={unversionedId:"user/registry/nacos",id:"version-v1.7/user/registry/nacos",title:"Nacos \u6ce8\u518c\u4e2d\u5fc3",description:"Nacos \u6ce8\u518c\u4e2d\u5fc3\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.7/user/registry/nacos.md",sourceDirName:"user/registry",slug:"/user/registry/nacos",permalink:"/zh-cn/docs/v1.7/user/registry/nacos",draft:!1,tags:[],version:"v1.7",frontMatter:{title:"Nacos \u6ce8\u518c\u4e2d\u5fc3",keywords:["Seata","Nacos"],description:"Nacos \u6ce8\u518c\u4e2d\u5fc3\u3002"},sidebar:"docs",previous:{title:"\u7b80\u4ecb",permalink:"/zh-cn/docs/v1.7/user/registry/"},next:{title:"Eureka \u6ce8\u518c\u4e2d\u5fc3",permalink:"/zh-cn/docs/v1.7/user/registry/eureka"}},c={},p=[{value:"\u9884\u5907\u5de5\u4f5c",id:"\u9884\u5907\u5de5\u4f5c",level:2},{value:"\u5feb\u901f\u4e0a\u624b",id:"\u5feb\u901f\u4e0a\u624b",level:2},{value:"\u589e\u52a0 Maven \u4f9d\u8d56",id:"\u589e\u52a0-maven-\u4f9d\u8d56",level:3},{value:"Client\u7aef\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3",id:"client\u7aef\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3",level:3},{value:"Server\u7aef\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3",id:"server\u7aef\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3",level:3}],l={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nacos-\u6ce8\u518c\u4e2d\u5fc3"},"Nacos \u6ce8\u518c\u4e2d\u5fc3"),(0,a.kt)("p",null,"Nacos \u662f Seata \u7ec4\u4ef6\u4e2d\u91cd\u8981\u7684\u6ce8\u518c\u4e2d\u5fc3\u5b9e\u73b0."),(0,a.kt)("h2",{id:"\u9884\u5907\u5de5\u4f5c"},"\u9884\u5907\u5de5\u4f5c"),(0,a.kt)("p",null,"\u5f53\u60a8\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"nacos-client"),"\u6574\u5408\u5230\u60a8\u7684 Seata\u5de5\u7a0b\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u540e\u53f0\u5df2\u7ecf\u542f\u52a8 Nacos \u670d\u52a1\u3002\u5982\u679c\u60a8\u5c1a\u4e14\u4e0d\u719f\u6089 Nacos \u7684\u57fa\u672c\u4f7f\u7528\u7684\u8bdd\uff0c\u53ef\u5148\u884c\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"https://nacos.io/zh-cn/docs/quick-start.html"},"Nacos \u5feb\u901f\u5165\u95e8"),"\u3002\u5efa\u8bae\u4f7f\u7528 Nacos ",(0,a.kt)("inlineCode",{parentName:"p"},"1.2.0")," \u53ca\u4ee5\u4e0a\u7684\u7248\u672c\u3002"),(0,a.kt)("h2",{id:"\u5feb\u901f\u4e0a\u624b"},"\u5feb\u901f\u4e0a\u624b"),(0,a.kt)("p",null,"Seata \u878d\u5408 Nacos \u6ce8\u518c\u4e2d\u5fc3\u7684\u64cd\u4f5c\u6b65\u9aa4\u975e\u5e38\u7b80\u5355\uff0c\u5927\u81f4\u6b65\u9aa4\u53ef\u5206\u4e3a\u201c\u589e\u52a0 Maven \u4f9d\u8d56\u201d\u4ee5\u53ca\u201c\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3\u201c\u3002"),(0,a.kt)("h3",{id:"\u589e\u52a0-maven-\u4f9d\u8d56"},"\u589e\u52a0 Maven \u4f9d\u8d56"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u60a8\u9700\u8981\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"nacos-client")," \u7684 Maven \u4f9d\u8d56\u6dfb\u52a0\u5230\u60a8\u7684\u9879\u76ee ",(0,a.kt)("inlineCode",{parentName:"p"},"pom.xml")," \u6587\u4ef6\u4e2d\uff0c\u5efa\u8bae\u4f7f\u7528 Seata ",(0,a.kt)("inlineCode",{parentName:"p"},"1.4.0+"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>io.seata</groupId>\n    <artifactId>seata-spring-boot-starter</artifactId>\n    <version>\u6700\u65b0\u7248</version>\n</dependency>\n<dependency>\n    <groupId>com.alibaba.nacos</groupId>\n    <artifactId>nacos-client</artifactId>\n    <version>1.2.0\u53ca\u4ee5\u4e0a\u7248\u672c</version>\n</dependency>\n")),(0,a.kt)("h3",{id:"client\u7aef\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3"},"Client\u7aef\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/blob/develop/script/client/spring/application.yml"},(0,a.kt)("strong",{parentName:"a"},"application.yml"))," \u4e2d\u52a0\u5165\u5bf9\u5e94\u7684\u914d\u7f6e\u4e2d\u5fc3,\u5176\u4f59",(0,a.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/tree/develop/script/client"},"\u914d\u7f6e\u53c2\u8003")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'seata:\n  registry:\n    type: nacos\n    nacos:\n      application: seata-server\n      server-addr: 127.0.0.1:8848\n      group : "SEATA_GROUP"\n      namespace: ""\n      username: ""\n      password: ""\n      context-path: ""\n  tx-service-group: default_tx_group\n  service:\n    vgroup-mapping:\n      default_tx_group: default\n\n')),(0,a.kt)("h3",{id:"server\u7aef\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3"},"Server\u7aef\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/application.yaml"),"\u52a0\u5165\u4ee5\u4e0b\u914d\u7f6e, \u5176\u4f59\u914d\u7f6e\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/blob/develop/script/client/spring/application.yml"},"configuration options"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"seata:\n  registry:\n    type: nacos\n    nacos:\n      application: seata-server\n      server-addr: 127.0.0.1:8848\n      group: SEATA_GROUP\n      namespace:\n      cluster: default\n      username:\n      password:\n")),(0,a.kt)("p",null,"\u968f\u540e,\u542f\u52a8 Seata-Server \u540e\uff0c\u4f1a\u53d1\u73b0Server\u7aef\u7684\u670d\u52a1\u51fa\u73b0\u5728 Nacos \u63a7\u5236\u53f0\u4e2d\u7684\u6ce8\u518c\u4e2d\u5fc3\u5217\u8868\u4e2d. Client \u914d\u7f6e\u5b8c\u6210\u540e\u542f\u52a8\u5e94\u7528\u5c31\u53ef\u4ee5\u6b63\u5f0f\u4f53\u9a8c Seata \u670d\u52a1\u3002"),(0,a.kt)("p",null,"Tips\uff1a\u8bf7\u786e\u4fddclient\u4e0eserver\u7684\u6ce8\u518c\u5904\u4e8e\u540c\u4e00\u4e2anamespace\u548cgroup\uff0c\u4e0d\u7136\u4f1a\u627e\u4e0d\u5230\u670d\u52a1\u3002"))}d.isMDXComponent=!0}}]);