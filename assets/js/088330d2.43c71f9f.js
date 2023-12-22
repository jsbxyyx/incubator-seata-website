"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[94332],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),u=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=u(e.components);return o.createElement(s.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,g=p["".concat(s,".").concat(m)]||p[m]||f[m]||i;return t?o.createElement(g,a(a({ref:n},c),{},{components:t})):o.createElement(g,a({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=t[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},55547:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=t(87462),r=(t(67294),t(3905));const i={title:"Multi-configuration Isolation",keywords:["Seata"],description:"Seata supports Multi-configuration Isolation since 0.6.1,You can configure it in the following steps."},a="Multi-configuration Isolation",l={unversionedId:"ops/multi-configuration-isolation",id:"ops/multi-configuration-isolation",title:"Multi-configuration Isolation",description:"Seata supports Multi-configuration Isolation since 0.6.1,You can configure it in the following steps.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/ops/multi-configuration-isolation.md",sourceDirName:"ops",slug:"/ops/multi-configuration-isolation",permalink:"/docs/next/ops/multi-configuration-isolation",draft:!1,tags:[],version:"current",frontMatter:{title:"Multi-configuration Isolation",keywords:["Seata"],description:"Seata supports Multi-configuration Isolation since 0.6.1,You can configure it in the following steps."},sidebar:"docs",previous:{title:"Version Upgrade Guide",permalink:"/docs/next/ops/upgrade"},next:{title:"Beginner Deployment Guide",permalink:"/docs/next/ops/deploy-guide-beginner"}},s={},u=[{value:"use case",id:"use-case",level:2},{value:"1.Environment Configuration",id:"1environment-configuration",level:3},{value:"2.Name the new configuration file",id:"2name-the-new-configuration-file",level:3}],c={toc:u},p="wrapper";function f(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"multi-configuration-isolation"},"Multi-configuration Isolation"),(0,r.kt)("p",null,"Seata supports Multi-configuration Isolation since 0.6.1,You can configure it in the following steps."),(0,r.kt)("h2",{id:"use-case"},"use case"),(0,r.kt)("p",null,"Suppose we now have a test environment in which we want to read only the configuration items corresponding to the test environment."),(0,r.kt)("h3",{id:"1environment-configuration"},"1.Environment Configuration"),(0,r.kt)("p",null,"Seata provides two ways to set up different environments:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"-e test"),",where test is the name of the environment.(",(0,r.kt)("strong",{parentName:"li"},"This can be only used for server side"),")")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\ne.g.(Linux)\n\nsh seata-server.sh -e test\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("strong",{parentName:"li"},"SEATA_ENV")," as the key of environment variable,and it's value will be the name of the environment.(",(0,r.kt)("strong",{parentName:"li"},"This can be only used for client side"),")","[",(0,r.kt)("strong",{parentName:"li"},"recommended"),"]")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\ne.g.(Linux)\n\n#vi /etc/profile \n\nexport SEATA_ENV=test\n\n:wq\n\n#source /etc/profile\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("strong",{parentName:"li"},"seataEnv")," as the key of jvm options,and it's value will be the name of the environment.(",(0,r.kt)("strong",{parentName:"li"},"This can be only used for client side"),")","[",(0,r.kt)("strong",{parentName:"li"},"recommended"),"]")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"-DseataEnv=test\n")),(0,r.kt)("h3",{id:"2name-the-new-configuration-file"},"2.Name the new configuration file"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Copy and rename file.conf to file-env.conf,where env is the name of the environment. e.g. ",(0,r.kt)("strong",{parentName:"li"},"file-test.conf")),(0,r.kt)("li",{parentName:"ul"},"Copy and rename registry.conf to registry-env.conf,where env is the name of the environment. e.g. ",(0,r.kt)("strong",{parentName:"li"},"registry-test.conf")),(0,r.kt)("li",{parentName:"ul"},"In the registry-test.conf file, modify as follows:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'registry {\n...\nfile {\n    name = "file-test.conf"\n  }\n\nconfig {\n...\nfile {\n    name = "file-test.conf"\n  }\n\n')),(0,r.kt)("p",null,"After all the steps have been set up, you can start using Seata configuration isolation."))}f.isMDXComponent=!0}}]);