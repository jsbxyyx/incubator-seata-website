"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[96170],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),f=o,m=u["".concat(s,".").concat(f)]||u[f]||y[f]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},61136:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={hidden:!0,title:"Deploy Seata Server By Helm",keywords:["kubernetes","helm","ops"],description:"Deploy Seata Server By Helm",author:"helloworlde",date:new Date("2019-12-01T00:00:00.000Z")},i="Deploy Seata Server By Helm",l={unversionedId:"ops/deploy-by-helm",id:"version-v1.2/ops/deploy-by-helm",title:"Deploy Seata Server By Helm",description:"Deploy Seata Server By Helm",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.2/ops/deploy-by-helm.md",sourceDirName:"ops",slug:"/ops/deploy-by-helm",permalink:"/docs/v1.2/ops/deploy-by-helm",draft:!1,tags:[],version:"v1.2",frontMatter:{hidden:!0,title:"Deploy Seata Server By Helm",keywords:["kubernetes","helm","ops"],description:"Deploy Seata Server By Helm",author:"helloworlde",date:"2019-12-01T00:00:00.000Z"},sidebar:"docs",previous:{title:"Deploy Seata Server By Kubernetes",permalink:"/docs/v1.2/ops/deploy-by-kubernetes"},next:{title:"High Available Usage Deployment",permalink:"/docs/v1.2/ops/deploy-ha"}},s={},p=[{value:"Quick start",id:"quick-start",level:3},{value:"Custom configuration",id:"custom-configuration",level:2},{value:"Environment",id:"environment",level:3},{value:"Use specify configuration file",id:"use-specify-configuration-file",level:3}],c={toc:p},u="wrapper";function y(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploy-seata-server-by-helm"},"Deploy Seata Server By Helm"),(0,o.kt)("h3",{id:"quick-start"},"Quick start"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd ./script/server/helm/seata-server\n$ helm install seata-server ./seata-server\n")),(0,o.kt)("h2",{id:"custom-configuration"},"Custom configuration"),(0,o.kt)("h3",{id:"environment"},"Environment"),(0,o.kt)("p",null,"The environment is same with Docker, can reference ",(0,o.kt)("a",{parentName:"p",href:"./deploy-by-docker"},"Deploy Seata Server By Docker")),(0,o.kt)("h3",{id:"use-specify-configuration-file"},"Use specify configuration file"),(0,o.kt)("p",null,"Can specify configuration file by mount files, like mount files under ",(0,o.kt)("inlineCode",{parentName:"p"},"/root/workspace/seata/seata-config/file")," to pod. And need specify environment ",(0,o.kt)("inlineCode",{parentName:"p"},"SEATA_CONFIG_NAME")," also, the value need start with ",(0,o.kt)("inlineCode",{parentName:"p"},"file:"),", like ",(0,o.kt)("inlineCode",{parentName:"p"},"file:/root/seata-config/registry")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Values.yaml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'replicaCount: 1\n\nnamespace: default\n\nimage:\n  repository: seataio/seata-server\n  tag: latest\n  pullPolicy: IfNotPresent\n\nservice:\n  type: NodePort\n  port: 30091\n\nenv:\n  seataPort: "8091"\n  storeMode: "file"\n  seataIp: "127.0.0.1"\n  seataConfigName: "file:/root/seata-config/registry"\n\nvolume:\n  - name: seata-config\n    mountPath: /root/seata-config\n    hostPath: /root/workspace/seata/seata-config/file\n')))}y.isMDXComponent=!0}}]);