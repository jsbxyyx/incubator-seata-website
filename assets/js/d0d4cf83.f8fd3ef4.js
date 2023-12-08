"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[67746],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=o.createContext({}),u=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=u(e.components);return o.createElement(s.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),m=i,g=p["".concat(s,".").concat(m)]||p[m]||f[m]||r;return t?o.createElement(g,a(a({ref:n},c),{},{components:t})):o.createElement(g,a({ref:n},c))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var u=2;u<r;u++)a[u]=t[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},76193:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var o=t(87462),i=(t(67294),t(3905));const r={title:"Multi-configuration Isolation",keywords:["Seata"],description:"Seata supports Multi-configuration Isolation since 0.6.1,You can configure it in the following steps."},a="Multi-configuration Isolation",l={unversionedId:"ops/multi-configuration-isolation",id:"version-v2.0/ops/multi-configuration-isolation",title:"Multi-configuration Isolation",description:"Seata supports Multi-configuration Isolation since 0.6.1,You can configure it in the following steps.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v2.0/ops/multi-configuration-isolation.md",sourceDirName:"ops",slug:"/ops/multi-configuration-isolation",permalink:"/docs/ops/multi-configuration-isolation",draft:!1,tags:[],version:"v2.0",frontMatter:{title:"Multi-configuration Isolation",keywords:["Seata"],description:"Seata supports Multi-configuration Isolation since 0.6.1,You can configure it in the following steps."},sidebar:"docs",previous:{title:"Version Upgrade Guide",permalink:"/docs/ops/upgrade"},next:{title:"Beginner Deployment Guide",permalink:"/docs/ops/deploy-guide-beginner"}},s={},u=[{value:"use case",id:"use-case",level:2},{value:"1.Environment Configuration",id:"1environment-configuration",level:3},{value:"2.Name the new configuration file",id:"2name-the-new-configuration-file",level:3}],c={toc:u},p="wrapper";function f(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"multi-configuration-isolation"},"Multi-configuration Isolation"),(0,i.kt)("p",null,"Seata supports Multi-configuration Isolation since 0.6.1,You can configure it in the following steps."),(0,i.kt)("h2",{id:"use-case"},"use case"),(0,i.kt)("p",null,"Suppose we now have a test environment in which we want to read only the configuration items corresponding to the test environment."),(0,i.kt)("h3",{id:"1environment-configuration"},"1.Environment Configuration"),(0,i.kt)("p",null,"Seata provides two ways to set up different environments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"-e test"),",where test is the name of the environment.(",(0,i.kt)("strong",{parentName:"li"},"This can be only used for server side"),")")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\ne.g.(Linux)\n\nsh seata-server.sh -e test\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("strong",{parentName:"li"},"SEATA_ENV")," as the key of environment variable,and it's value will be the name of the environment.(",(0,i.kt)("strong",{parentName:"li"},"This can be only used for client side"),")","[",(0,i.kt)("strong",{parentName:"li"},"recommended"),"]")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\ne.g.(Linux)\n\n#vi /etc/profile \n\nexport SEATA_ENV=test\n\n:wq\n\n#source /etc/profile\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("strong",{parentName:"li"},"seataEnv")," as the key of jvm options,and it's value will be the name of the environment.(",(0,i.kt)("strong",{parentName:"li"},"This can be only used for client side"),")","[",(0,i.kt)("strong",{parentName:"li"},"recommended"),"]")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"-DseataEnv=test\n")),(0,i.kt)("h3",{id:"2name-the-new-configuration-file"},"2.Name the new configuration file"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Copy and rename file.conf to file-env.conf,where env is the name of the environment. e.g. ",(0,i.kt)("strong",{parentName:"li"},"file-test.conf")),(0,i.kt)("li",{parentName:"ul"},"Copy and rename registry.conf to registry-env.conf,where env is the name of the environment. e.g. ",(0,i.kt)("strong",{parentName:"li"},"registry-test.conf")),(0,i.kt)("li",{parentName:"ul"},"In the registry-test.conf file, modify as follows:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'registry {\n...\nfile {\n    name = "file-test.conf"\n  }\n\nconfig {\n...\nfile {\n    name = "file-test.conf"\n  }\n\n')),(0,i.kt)("p",null,"After all the steps have been set up, you can start using Seata configuration isolation."))}f.isMDXComponent=!0}}]);