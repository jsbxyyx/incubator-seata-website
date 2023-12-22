"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[97949],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),f=o,g=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return r?n.createElement(g,a(a({ref:t},c),{},{components:r})):n.createElement(g,a({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},99516:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const i={title:"Zookeeper Registry Center",keywords:["Seata","Zookeeper","Registry Center"],description:"Zookeeper Registry Center."},a="ZooKeeper Registry Center",s={unversionedId:"user/registry/zookeeper",id:"version-v1.1/user/registry/zookeeper",title:"Zookeeper Registry Center",description:"Zookeeper Registry Center.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.1/user/registry/zookeeper.md",sourceDirName:"user/registry",slug:"/user/registry/zookeeper",permalink:"/docs/v1.1/user/registry/zookeeper",draft:!1,tags:[],version:"v1.1",frontMatter:{title:"Zookeeper Registry Center",keywords:["Seata","Zookeeper","Registry Center"],description:"Zookeeper Registry Center."},sidebar:"docs",previous:{title:"Consul Registry Center",permalink:"/docs/v1.1/user/registry/consul"},next:{title:"Api Guide",permalink:"/docs/v1.1/user/api"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Server-side Registry Center Configuration",id:"server-side-registry-center-configuration",level:3},{value:"Client-side Configuration",id:"client-side-configuration",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"zookeeper-registry-center"},"ZooKeeper Registry Center"),(0,o.kt)("p",null,"ZooKeeper serves as a critical registry center implementation within the Seata component."),(0,o.kt)("p",null,"This document is based on Seata 1.1.0, demonstrating how to register Seata with ZooKeeper using a file as the configuration center."),(0,o.kt)("p",null,"It is recommended to use ZooKeeper version 3.4.13 or above. The following example uses ZooKeeper version 3.4.14."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before registering ",(0,o.kt)("strong",{parentName:"p"},"Seata")," with ZooKeeper, ensure that the ZooKeeper service is running. If you are unfamiliar with basic ZooKeeper usage, you can refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://zookeeper.apache.org/doc/r3.4.14/index.html"},"ZooKeeper official documentation"),"."),(0,o.kt)("h2",{id:"quick-start"},"Quick Start"),(0,o.kt)("p",null,'Integrating Seata with ZooKeeper involves simple steps, roughly categorized as "Adding Maven Dependencies" and "Configuring the Registry Center."'),(0,o.kt)("h3",{id:"server-side-registry-center-configuration"},"Server-side Registry Center Configuration"),(0,o.kt)("p",null,"Download ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/releases/tag/v1.1.0"},"Seata 1.1.0 release")," and extract the files."),(0,o.kt)("p",null,"Modify the corresponding configuration in ",(0,o.kt)("inlineCode",{parentName:"p"},"/conf/registry.conf"),". For other configuration options, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/blob/develop/script/client/conf/registry.conf"},"Seata configuration reference"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'registry {\n  type = "zk"\n\n  zk {\n    # Cluster name registered on ZooKeeper, default is "default"\n    cluster = "default"\n    serverAddr = "127.0.0.1:2181"\n    sessionTimeout = 6000\n    connectTimeout = 2000\n  }\n}\n')),(0,o.kt)("p",null,"Execute ",(0,o.kt)("inlineCode",{parentName:"p"},"/bin/seata-server.bat")," (Windows) or ",(0,o.kt)("inlineCode",{parentName:"p"},"/bin/seata-server.sh")," (Unix) to start Seata. The service will run on the local port 8091. Open the ZooKeeper command-line client and enter ",(0,o.kt)("inlineCode",{parentName:"p"},"ls /registry/zk/default"),", check if the node address is listed, indicating successful registration (as shown below)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[zk: localhost:2181(CONNECTED) 1] ls /registry/zk/default\n[127.0.0.1:8091]\n")),(0,o.kt)("h3",{id:"client-side-configuration"},"Client-side Configuration"),(0,o.kt)("p",null,"If you are using the ",(0,o.kt)("inlineCode",{parentName:"p"},"io.seata:seata-spring-boot-starter")," dependency, you need to add the following ZooKeeper configuration in the application.yml file. For additional configurations, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/blob/1.1.0/script/client/spring/application.yml"},"configuration reference"),"\n:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"seata:\n  registry:\n    type: zk\n    zk:\n      server-addr: 127.0.0.1:2181\n      session-timeout: 6000\n      connect-timeout: 2000\n      username:\n      password:\n\n")),(0,o.kt)("p",null,"Alternatively, if you are using the ",(0,o.kt)("inlineCode",{parentName:"p"},"io.seata:seata-all")," dependency, add the ZooKeeper configuration in the registry.conf file. For additional configurations, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/tree/1.1.0/script/client/conf"},"configuration reference"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  zk {\n    serverAddr = "127.0.0.1:2181"\n    session.timeout = 6000\n    connect.timeout = 2000\n    username = ""\n    password = ""\n  }\n')),(0,o.kt)("p",null,"After configuring the client, start the application and wait for a moment, the Seata service will be operational soon."))}d.isMDXComponent=!0}}]);