"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[18490],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(n),m=l,d=s["".concat(i,".").concat(m)]||s[m]||k[m]||o;return n?a.createElement(d,r(r({ref:t},u),{},{components:n})):a.createElement(d,r({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[s]="string"==typeof e?e:l,r[1]=c;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},54376:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>k,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var a=n(87462),l=(n(67294),n(3905));const o={title:"\u8be6\u89e3 Seata AT \u6a21\u5f0f\u4e8b\u52a1\u9694\u79bb\u7ea7\u522b\u4e0e\u5168\u5c40\u9501\u8bbe\u8ba1",author:"\u5f20\u4e58\u8f89",keywords:["Seata\u3001\u5206\u5e03\u5f0f\u4e8b\u52a1\u3001AT\u6a21\u5f0f\u3001Transaction\u3001GlobalLock"],description:"Seata AT \u6a21\u5f0f\u7684\u4e8b\u52a1\u9694\u79bb\u662f\u5efa\u7acb\u5728\u652f\u4e8b\u52a1\u7684\u672c\u5730\u9694\u79bb\u7ea7\u522b\u57fa\u7840\u4e4b\u4e0a\u7684\uff0c\u5728\u6570\u636e\u5e93\u672c\u5730\u9694\u79bb\u7ea7\u522b\u8bfb\u5df2\u63d0\u4ea4\u6216\u4ee5\u4e0a\u7684\u524d\u63d0\u4e0b\uff0cSeata \u8bbe\u8ba1\u4e86\u7531\u4e8b\u52a1\u534f\u8c03\u5668\u7ef4\u62a4\u7684\u5168\u5c40\u5199\u6392\u4ed6\u9501\uff0c\u6765\u4fdd\u8bc1\u4e8b\u52a1\u95f4\u7684\u5199\u9694\u79bb\uff0c\u540c\u65f6\uff0c\u5c06\u5168\u5c40\u4e8b\u52a1\u9ed8\u8ba4\u5b9a\u4e49\u5728\u8bfb\u672a\u63d0\u4ea4\u7684\u9694\u79bb\u7ea7\u522b\u4e0a\u3002",date:"2022/01/12"},r="\u524d\u8a00",c={permalink:"/zh-cn/blog/seata-at-lock",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/seata-at-lock.md",title:"\u8be6\u89e3 Seata AT \u6a21\u5f0f\u4e8b\u52a1\u9694\u79bb\u7ea7\u522b\u4e0e\u5168\u5c40\u9501\u8bbe\u8ba1",description:"Seata AT \u6a21\u5f0f\u7684\u4e8b\u52a1\u9694\u79bb\u662f\u5efa\u7acb\u5728\u652f\u4e8b\u52a1\u7684\u672c\u5730\u9694\u79bb\u7ea7\u522b\u57fa\u7840\u4e4b\u4e0a\u7684\uff0c\u5728\u6570\u636e\u5e93\u672c\u5730\u9694\u79bb\u7ea7\u522b\u8bfb\u5df2\u63d0\u4ea4\u6216\u4ee5\u4e0a\u7684\u524d\u63d0\u4e0b\uff0cSeata \u8bbe\u8ba1\u4e86\u7531\u4e8b\u52a1\u534f\u8c03\u5668\u7ef4\u62a4\u7684\u5168\u5c40\u5199\u6392\u4ed6\u9501\uff0c\u6765\u4fdd\u8bc1\u4e8b\u52a1\u95f4\u7684\u5199\u9694\u79bb\uff0c\u540c\u65f6\uff0c\u5c06\u5168\u5c40\u4e8b\u52a1\u9ed8\u8ba4\u5b9a\u4e49\u5728\u8bfb\u672a\u63d0\u4ea4\u7684\u9694\u79bb\u7ea7\u522b\u4e0a\u3002",date:"2022-01-12T00:00:00.000Z",formattedDate:"2022\u5e741\u670812\u65e5",tags:[],readingTime:9.82,hasTruncateMarker:!1,authors:[{name:"\u5f20\u4e58\u8f89"}],frontMatter:{title:"\u8be6\u89e3 Seata AT \u6a21\u5f0f\u4e8b\u52a1\u9694\u79bb\u7ea7\u522b\u4e0e\u5168\u5c40\u9501\u8bbe\u8ba1",author:"\u5f20\u4e58\u8f89",keywords:["Seata\u3001\u5206\u5e03\u5f0f\u4e8b\u52a1\u3001AT\u6a21\u5f0f\u3001Transaction\u3001GlobalLock"],description:"Seata AT \u6a21\u5f0f\u7684\u4e8b\u52a1\u9694\u79bb\u662f\u5efa\u7acb\u5728\u652f\u4e8b\u52a1\u7684\u672c\u5730\u9694\u79bb\u7ea7\u522b\u57fa\u7840\u4e4b\u4e0a\u7684\uff0c\u5728\u6570\u636e\u5e93\u672c\u5730\u9694\u79bb\u7ea7\u522b\u8bfb\u5df2\u63d0\u4ea4\u6216\u4ee5\u4e0a\u7684\u524d\u63d0\u4e0b\uff0cSeata \u8bbe\u8ba1\u4e86\u7531\u4e8b\u52a1\u534f\u8c03\u5668\u7ef4\u62a4\u7684\u5168\u5c40\u5199\u6392\u4ed6\u9501\uff0c\u6765\u4fdd\u8bc1\u4e8b\u52a1\u95f4\u7684\u5199\u9694\u79bb\uff0c\u540c\u65f6\uff0c\u5c06\u5168\u5c40\u4e8b\u52a1\u9ed8\u8ba4\u5b9a\u4e49\u5728\u8bfb\u672a\u63d0\u4ea4\u7684\u9694\u79bb\u7ea7\u522b\u4e0a\u3002",date:"2022/01/12"},prevItem:{title:"\u6df1\u5ea6\u5256\u6790 Seata TCC \u6a21\u5f0f\uff08\u4e00\uff09",permalink:"/zh-cn/blog/seata-tcc"},nextItem:{title:"\u5173\u4e8e\u65b0\u7248\u96ea\u82b1\u7b97\u6cd5\u7684\u7b54\u7591",permalink:"/zh-cn/blog/seata-snowflake-explain"}},i={authorsImageUrls:[void 0]},p=[{value:"1\u3001\u6267\u884c\u8fc7\u7a0b",id:"1\u6267\u884c\u8fc7\u7a0b",level:2},{value:"2\u3001\u63d0\u4ea4\u8fc7\u7a0b",id:"2\u63d0\u4ea4\u8fc7\u7a0b",level:2},{value:"GlobalLock \u6ce8\u89e3\u8bf4\u660e",id:"globallock-\u6ce8\u89e3\u8bf4\u660e",level:2}],u={toc:p},s="wrapper";function k(e){let{components:t,...n}=e;return(0,l.kt)(s,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Seata AT \u6a21\u5f0f\u662f\u4e00\u79cd\u975e\u4fb5\u5165\u5f0f\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u89e3\u51b3\u65b9\u6848\uff0cSeata \u5728\u5185\u90e8\u505a\u4e86\u5bf9\u6570\u636e\u5e93\u64cd\u4f5c\u7684\u4ee3\u7406\u5c42\uff0c\u6211\u4eec\u4f7f\u7528 Seata AT \u6a21\u5f0f\u65f6\uff0c\u5b9e\u9645\u4e0a\u7528\u7684\u662f Seata \u81ea\u5e26\u7684\u6570\u636e\u6e90\u4ee3\u7406 DataSourceProxy\uff0cSeata \u5728\u8fd9\u5c42\u4ee3\u7406\u4e2d\u52a0\u5165\u4e86\u5f88\u591a\u903b\u8f91\uff0c\u6bd4\u5982\u63d2\u5165\u56de\u6eda undo_log \u65e5\u5fd7\uff0c\u68c0\u67e5\u5168\u5c40\u9501\u7b49\u3002"),(0,l.kt)("p",null,"\u4e3a\u4ec0\u4e48\u8981\u68c0\u67e5\u5168\u5c40\u9501\u5462\uff0c\u8fd9\u662f\u7531\u4e8e Seata AT \u6a21\u5f0f\u7684\u4e8b\u52a1\u9694\u79bb\u662f\u5efa\u7acb\u5728\u652f\u4e8b\u52a1\u7684\u672c\u5730\u9694\u79bb\u7ea7\u522b\u57fa\u7840\u4e4b\u4e0a\u7684\uff0c\u5728\u6570\u636e\u5e93\u672c\u5730\u9694\u79bb\u7ea7\u522b\u8bfb\u5df2\u63d0\u4ea4\u6216\u4ee5\u4e0a\u7684\u524d\u63d0\u4e0b\uff0cSeata \u8bbe\u8ba1\u4e86\u7531\u4e8b\u52a1\u534f\u8c03\u5668\u7ef4\u62a4\u7684\u5168\u5c40\u5199\u6392\u4ed6\u9501\uff0c\u6765\u4fdd\u8bc1\u4e8b\u52a1\u95f4\u7684\u5199\u9694\u79bb\uff0c\u540c\u65f6\uff0c\u5c06\u5168\u5c40\u4e8b\u52a1\u9ed8\u8ba4\u5b9a\u4e49\u5728\u8bfb\u672a\u63d0\u4ea4\u7684\u9694\u79bb\u7ea7\u522b\u4e0a\u3002"),(0,l.kt)("h1",{id:"seata-\u4e8b\u52a1\u9694\u79bb\u7ea7\u522b\u89e3\u8bfb"},"Seata \u4e8b\u52a1\u9694\u79bb\u7ea7\u522b\u89e3\u8bfb"),(0,l.kt)("p",null,"\u5728\u8bb2 Seata \u4e8b\u52a1\u9694\u79bb\u7ea7\u4e4b\u524d\uff0c\u6211\u4eec\u5148\u6765\u56de\u987e\u4e00\u4e0b\u6570\u636e\u5e93\u4e8b\u52a1\u7684\u9694\u79bb\u7ea7\u522b\uff0c\u76ee\u524d\u6570\u636e\u5e93\u4e8b\u52a1\u7684\u9694\u79bb\u7ea7\u522b\u4e00\u5171\u6709 4 \u79cd\uff0c\u7531\u4f4e\u5230\u9ad8\u5206\u522b\u4e3a\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Read uncommitted\uff1a\u8bfb\u672a\u63d0\u4ea4"),(0,l.kt)("li",{parentName:"ol"},"Read committed\uff1a\u8bfb\u5df2\u63d0\u4ea4"),(0,l.kt)("li",{parentName:"ol"},"Repeatable read\uff1a\u53ef\u91cd\u590d\u8bfb"),(0,l.kt)("li",{parentName:"ol"},"Serializable\uff1a\u5e8f\u5217\u5316")),(0,l.kt)("p",null,"\u6570\u636e\u5e93\u4e00\u822c\u9ed8\u8ba4\u7684\u9694\u79bb\u7ea7\u522b\u4e3a\u8bfb\u5df2\u63d0\u4ea4\uff0c\u6bd4\u5982 Oracle\uff0c\u4e5f\u6709\u4e00\u4e9b\u6570\u636e\u7684\u9ed8\u8ba4\u9694\u79bb\u7ea7\u522b\u4e3a\u53ef\u91cd\u590d\u8bfb\uff0c\u6bd4\u5982 Mysql\uff0c\u4e00\u822c\u800c\u8a00\uff0c\u6570\u636e\u5e93\u7684\u8bfb\u5df2\u63d0\u4ea4\u80fd\u591f\u6ee1\u8db3\u4e1a\u52a1\u7edd\u5927\u90e8\u5206\u573a\u666f\u4e86\u3002"),(0,l.kt)("p",null,"\u6211\u4eec\u77e5\u9053 Seata \u7684\u4e8b\u52a1\u662f\u4e00\u4e2a\u5168\u5c40\u4e8b\u52a1\uff0c\u5b83\u5305\u542b\u4e86\u82e5\u5e72\u4e2a\u5206\u652f\u672c\u5730\u4e8b\u52a1\uff0c\u5728\u5168\u5c40\u4e8b\u52a1\u6267\u884c\u8fc7\u7a0b\u4e2d\uff08\u5168\u5c40\u4e8b\u52a1\u8fd8\u6ca1\u6267\u884c\u5b8c\uff09\uff0c\u67d0\u4e2a\u672c\u5730\u4e8b\u52a1\u63d0\u4ea4\u4e86\uff0c\u5982\u679c Seata \u6ca1\u6709\u91c7\u53d6\u4efb\u52a1\u63aa\u65bd\uff0c\u5219\u4f1a\u5bfc\u81f4\u5df2\u63d0\u4ea4\u7684\u672c\u5730\u4e8b\u52a1\u88ab\u8bfb\u53d6\uff0c\u9020\u6210\u810f\u8bfb\uff0c\u5982\u679c\u6570\u636e\u5728\u5168\u5c40\u4e8b\u52a1\u63d0\u4ea4\u524d\u5df2\u63d0\u4ea4\u7684\u672c\u5730\u4e8b\u52a1\u88ab\u4fee\u6539\uff0c\u5219\u4f1a\u9020\u6210\u810f\u5199\u3002"),(0,l.kt)("p",null,"\u7531\u6b64\u53ef\u4ee5\u770b\u51fa\uff0c\u4f20\u7edf\u610f\u4e49\u7684\u810f\u8bfb\u662f\u8bfb\u5230\u4e86\u672a\u63d0\u4ea4\u7684\u6570\u636e\uff0cSeata \u810f\u8bfb\u662f\u8bfb\u5230\u4e86\u5168\u5c40\u4e8b\u52a1\u4e0b\u672a\u63d0\u4ea4\u7684\u6570\u636e\uff0c\u5168\u5c40\u4e8b\u52a1\u53ef\u80fd\u5305\u542b\u591a\u4e2a\u672c\u5730\u4e8b\u52a1\uff0c\u67d0\u4e2a\u672c\u5730\u4e8b\u52a1\u63d0\u4ea4\u4e86\u4e0d\u4ee3\u8868\u5168\u5c40\u4e8b\u52a1\u63d0\u4ea4\u4e86\u3002"),(0,l.kt)("p",null,"\u5728\u7edd\u5927\u90e8\u5206\u5e94\u7528\u5728\u8bfb\u5df2\u63d0\u4ea4\u7684\u9694\u79bb\u7ea7\u522b\u4e0b\u5de5\u4f5c\u662f\u6ca1\u6709\u95ee\u9898\u7684\uff0c\u800c\u5b9e\u9645\u4e0a\uff0c\u8fd9\u5f53\u4e2d\u53c8\u6709\u7edd\u5927\u591a\u6570\u7684\u5e94\u7528\u573a\u666f\uff0c\u5b9e\u9645\u4e0a\u5de5\u4f5c\u5728\u8bfb\u672a\u63d0\u4ea4\u7684\u9694\u79bb\u7ea7\u522b\u4e0b\u540c\u6837\u6ca1\u6709\u95ee\u9898\u3002"),(0,l.kt)("p",null,"\u5728\u6781\u7aef\u573a\u666f\u4e0b\uff0c\u5e94\u7528\u5982\u679c\u9700\u8981\u8fbe\u5230\u5168\u5c40\u7684\u8bfb\u5df2\u63d0\u4ea4\uff0cSeata \u4e5f\u63d0\u4f9b\u4e86\u5168\u5c40\u9501\u673a\u5236\u5b9e\u73b0\u5168\u5c40\u4e8b\u52a1\u8bfb\u5df2\u63d0\u4ea4\u3002\u4f46\u662f\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cSeata \u7684\u5168\u5c40\u4e8b\u52a1\u662f\u5de5\u4f5c\u5728\u8bfb\u672a\u63d0\u4ea4\u9694\u79bb\u7ea7\u522b\u7684\uff0c\u4fdd\u8bc1\u7edd\u5927\u591a\u6570\u573a\u666f\u7684\u9ad8\u6548\u6027\u3002"),(0,l.kt)("h1",{id:"\u5168\u5c40\u9501\u5b9e\u73b0"},"\u5168\u5c40\u9501\u5b9e\u73b0"),(0,l.kt)("p",null,"AT \u6a21\u5f0f\u4e0b\uff0c\u4f1a\u4f7f\u7528 Seata \u5185\u90e8\u6570\u636e\u6e90\u4ee3\u7406 DataSourceProxy\uff0c\u5168\u5c40\u9501\u7684\u5b9e\u73b0\u5c31\u662f\u9690\u85cf\u5728\u8fd9\u4e2a\u4ee3\u7406\u4e2d\u3002\u6211\u4eec\u5206\u522b\u5728\u6267\u884c\u3001\u63d0\u4ea4\u7684\u8fc7\u7a0b\u90fd\u505a\u4e86\u4ec0\u4e48\u3002"),(0,l.kt)("h2",{id:"1\u6267\u884c\u8fc7\u7a0b"},"1\u3001\u6267\u884c\u8fc7\u7a0b"),(0,l.kt)("p",null,"\u6267\u884c\u8fc7\u7a0b\u5728 StatementProxy \u7c7b\uff0c\u5728\u6267\u884c\u8fc7\u7a0b\u4e2d\uff0c\u5982\u679c\u6267\u884c SQL \u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"select for update"),"\uff0c\u5219\u4f1a\u4f7f\u7528 SelectForUpdateExecutor \u7c7b\uff0c\u5982\u679c\u6267\u884c\u65b9\u6cd5\u4e2d\u5e26\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"@GlobalTransactional")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"@GlobalLock"),"\u6ce8\u89e3\uff0c\u5219\u4f1a\u68c0\u67e5\u662f\u5426\u6709\u5168\u5c40\u9501\uff0c\u5982\u679c\u5f53\u524d\u5b58\u5728\u5168\u5c40\u9501\uff0c\u5219\u4f1a\u56de\u6eda\u672c\u5730\u4e8b\u52a1\uff0c\u901a\u8fc7 while \u5faa\u73af\u4e0d\u65ad\u5730\u91cd\u65b0\u7ade\u4e89\u83b7\u53d6\u672c\u5730\u9501\u548c\u5168\u5c40\u9501\u3002"),(0,l.kt)("p",null,"io.seata.rm.datasource.exec.SelectForUpdateExecutor#doExecute"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'public T doExecute(Object... args) throws Throwable {\n    Connection conn = statementProxy.getConnection();\n    // ... ...\n    try {\n        // ... ...\n        while (true) {\n            try {\n                // ... ...\n                if (RootContext.inGlobalTransaction() || RootContext.requireGlobalLock()) {\n                    // Do the same thing under either @GlobalTransactional or @GlobalLock, \n                    // that only check the global lock  here.\n                    statementProxy.getConnectionProxy().checkLock(lockKeys);\n                } else {\n                    throw new RuntimeException("Unknown situation!");\n                }\n                break;\n            } catch (LockConflictException lce) {\n                if (sp != null) {\n                    conn.rollback(sp);\n                } else {\n                    conn.rollback();\n                }\n                // trigger retry\n                lockRetryController.sleep(lce);\n            }\n        }\n    } finally {\n        // ...\n    }\n')),(0,l.kt)("h2",{id:"2\u63d0\u4ea4\u8fc7\u7a0b"},"2\u3001\u63d0\u4ea4\u8fc7\u7a0b"),(0,l.kt)("p",null,"\u63d0\u4ea4\u8fc7\u7a0b\u5728 ConnectionProxy#doCommit\u65b9\u6cd5\u4e2d\u3002"),(0,l.kt)("p",null,"1\uff09\u5982\u679c\u6267\u884c\u65b9\u6cd5\u4e2d\u5e26\u6709",(0,l.kt)("inlineCode",{parentName:"p"},"@GlobalTransactional"),"\u6ce8\u89e3\uff0c\u5219\u4f1a\u5728\u6ce8\u518c\u5206\u652f\u65f6\u5019\u83b7\u53d6\u5168\u5c40\u9501\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8bf7\u6c42 TC \u6ce8\u518c\u5206\u652f")),(0,l.kt)("p",null,"io.seata.rm.datasource.ConnectionProxy#register"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"private void register() throws TransactionException {\n    if (!context.hasUndoLog() || !context.hasLockKey()) {\n        return;\n    }\n    Long branchId = DefaultResourceManager.get().branchRegister(BranchType.AT, getDataSourceProxy().getResourceId(),\n                                                                null, context.getXid(), null, context.buildLockKeys());\n    context.setBranchId(branchId);\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"TC \u6ce8\u518c\u5206\u652f\u7684\u65f6\u5019\uff0c\u83b7\u53d6\u5168\u5c40\u9501")),(0,l.kt)("p",null,"io.seata.server.transaction.at.ATCore#branchSessionLock"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'protected void branchSessionLock(GlobalSession globalSession, BranchSession branchSession) throws TransactionException {\n    if (!branchSession.lock()) {\n        throw new BranchTransactionException(LockKeyConflict, String\n                                             .format("Global lock acquire failed xid = %s branchId = %s", globalSession.getXid(),\n                                                     branchSession.getBranchId()));\n    }\n}\n')),(0,l.kt)("p",null,"2\uff09\u5982\u679c\u6267\u884c\u65b9\u6cd5\u4e2d\u5e26\u6709",(0,l.kt)("inlineCode",{parentName:"p"},"@GlobalLock"),"\u6ce8\u89e3\uff0c\u5728\u63d0\u4ea4\u524d\u4f1a\u67e5\u8be2\u5168\u5c40\u9501\u662f\u5426\u5b58\u5728\uff0c\u5982\u679c\u5b58\u5728\u5219\u629b\u5f02\u5e38\uff1a"),(0,l.kt)("p",null,"io.seata.rm.datasource.ConnectionProxy#processLocalCommitWithGlobalLocks"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"private void processLocalCommitWithGlobalLocks() throws SQLException {\n    checkLock(context.buildLockKeys());\n    try {\n        targetConnection.commit();\n    } catch (Throwable ex) {\n        throw new SQLException(ex);\n    }\n    context.reset();\n}\n")),(0,l.kt)("h2",{id:"globallock-\u6ce8\u89e3\u8bf4\u660e"},"GlobalLock \u6ce8\u89e3\u8bf4\u660e"),(0,l.kt)("p",null,"\u4ece\u6267\u884c\u8fc7\u7a0b\u548c\u63d0\u4ea4\u8fc7\u7a0b\u53ef\u4ee5\u770b\u51fa\uff0c\u65e2\u7136\u5f00\u542f\u5168\u5c40\u4e8b\u52a1 ",(0,l.kt)("inlineCode",{parentName:"p"},"@GlobalTransactional"),"\u6ce8\u89e3\u53ef\u4ee5\u5728\u4e8b\u52a1\u63d0\u4ea4\u524d\uff0c\u67e5\u8be2\u5168\u5c40\u9501\u662f\u5426\u5b58\u5728\uff0c\u90a3\u4e3a\u4ec0\u4e48 Seata \u8fd8\u8981\u8bbe\u8ba1\u591a\u5904\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"@GlobalLock"),"\u6ce8\u89e3\u5462\uff1f"),(0,l.kt)("p",null,"\u56e0\u4e3a\u5e76\u4e0d\u662f\u6240\u6709\u7684\u6570\u636e\u5e93\u64cd\u4f5c\u90fd\u9700\u8981\u5f00\u542f\u5168\u5c40\u4e8b\u52a1\uff0c\u800c\u5f00\u542f\u5168\u5c40\u4e8b\u52a1\u662f\u4e00\u4e2a\u6bd4\u8f83\u91cd\u7684\u64cd\u4f5c\uff0c\u9700\u8981\u5411 TC \u53d1\u8d77\u5f00\u542f\u5168\u5c40\u4e8b\u52a1\u7b49 RPC \u8fc7\u7a0b\uff0c\u800c",(0,l.kt)("inlineCode",{parentName:"p"},"@GlobalLock"),"\u6ce8\u89e3\u53ea\u4f1a\u5728\u6267\u884c\u8fc7\u7a0b\u4e2d\u67e5\u8be2\u5168\u5c40\u9501\u662f\u5426\u5b58\u5728\uff0c\u4e0d\u4f1a\u53bb\u5f00\u542f\u5168\u5c40\u4e8b\u52a1\uff0c\u56e0\u6b64\u5728\u4e0d\u9700\u8981\u5168\u5c40\u4e8b\u52a1\uff0c\u800c\u53c8\u9700\u8981\u68c0\u67e5\u5168\u5c40\u9501\u907f\u514d\u810f\u8bfb\u810f\u5199\u65f6\uff0c\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"@GlobalLock"),"\u6ce8\u89e3\u662f\u4e00\u4e2a\u66f4\u52a0\u8f7b\u91cf\u7684\u64cd\u4f5c\u3002"),(0,l.kt)("h1",{id:"\u5982\u4f55\u9632\u6b62\u810f\u5199"},"\u5982\u4f55\u9632\u6b62\u810f\u5199"),(0,l.kt)("p",null,"\u5148\u6765\u770b\u4e00\u4e0b\u4f7f\u7528 Seata AT \u6a21\u5f0f\u662f\u600e\u4e48\u4ea7\u751f\u810f\u5199\u7684\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://gitee.com/objcoding/md-picture/raw/master/img/20211226164628.png",alt:null})),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"\u6ce8\uff1a\u5206\u652f\u4e8b\u52a1\u6267\u884c\u8fc7\u7a0b\u7701\u7565\u5176\u5b83\u8fc7\u7a0b\u3002")),(0,l.kt)("p",null,"\u4e1a\u52a1\u4e00\u5f00\u542f\u5168\u5c40\u4e8b\u52a1\uff0c\u5176\u4e2d\u5305\u542b\u5206\u652f\u4e8b\u52a1A\uff08\u4fee\u6539 A\uff09\u548c\u5206\u652f\u4e8b\u52a1 B\uff08\u4fee\u6539 B\uff09\uff0c\u4e1a\u52a1\u4e8c\u4fee\u6539 A\uff0c\u5176\u4e2d\u4e1a\u52a1\u4e00\u6267\u884c\u5206\u652f\u4e8b\u52a1 A \u5148\u83b7\u53d6\u672c\u5730\u9501\uff0c\u4e1a\u52a1\u4e8c\u5219\u7b49\u5f85\u4e1a\u52a1\u4e00\u6267\u884c\u5b8c\u5206\u652f\u4e8b\u52a1 A \u4e4b\u540e\uff0c\u83b7\u5f97\u672c\u5730\u9501\u4fee\u6539 A \u5e76\u5165\u5e93\uff0c\u4e1a\u52a1\u4e00\u5728\u6267\u884c\u5206\u652f\u4e8b\u52a1\u65f6\u53d1\u751f\u5f02\u5e38\u4e86\uff0c\u7531\u4e8e\u5206\u652f\u4e8b\u52a1 A \u7684\u6570\u636e\u88ab\u4e1a\u52a1\u4e8c\u4fee\u6539\uff0c\u5bfc\u81f4\u4e1a\u52a1\u4e00\u7684\u5168\u5c40\u4e8b\u52a1\u65e0\u6cd5\u56de\u6eda\u3002"),(0,l.kt)("p",null,"\u5982\u4f55\u9632\u6b62\u810f\u5199\uff1f"),(0,l.kt)("p",null,"1\u3001\u4e1a\u52a1\u4e8c\u6267\u884c\u65f6\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"@GlobalTransactional"),"\u6ce8\u89e3\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://gitee.com/objcoding/md-picture/raw/master/img/20211226210337.png",alt:null})),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"\u6ce8\uff1a\u5206\u652f\u4e8b\u52a1\u6267\u884c\u8fc7\u7a0b\u7701\u7565\u5176\u5b83\u8fc7\u7a0b\u3002")),(0,l.kt)("p",null,"\u4e1a\u52a1\u4e8c\u5728\u6267\u884c\u5168\u5c40\u4e8b\u52a1\u8fc7\u7a0b\u4e2d\uff0c\u5206\u652f\u4e8b\u52a1 A \u63d0\u4ea4\u524d\u6ce8\u518c\u5206\u652f\u4e8b\u52a1\u83b7\u53d6\u5168\u5c40\u9501\u65f6\uff0c\u53d1\u73b0\u4e1a\u52a1\u4e1a\u52a1\u4e00\u5168\u5c40\u9501\u8fd8\u6ca1\u6267\u884c\u5b8c\uff0c\u56e0\u6b64\u4e1a\u52a1\u4e8c\u63d0\u4ea4\u4e0d\u4e86\uff0c\u629b\u5f02\u5e38\u56de\u6eda\uff0c\u6240\u4ee5\u4e0d\u4f1a\u53d1\u751f\u810f\u5199\u3002"),(0,l.kt)("p",null,"2\u3001\u4e1a\u52a1\u4e8c\u6267\u884c\u65f6\u52a0  ",(0,l.kt)("inlineCode",{parentName:"p"},"@GlobalLock"),"\u6ce8\u89e3\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://gitee.com/objcoding/md-picture/raw/master/img/20211226210502.png",alt:null})),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"\u6ce8\uff1a\u5206\u652f\u4e8b\u52a1\u6267\u884c\u8fc7\u7a0b\u7701\u7565\u5176\u5b83\u8fc7\u7a0b\u3002")),(0,l.kt)("p",null,"\u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"@GlobalTransactional"),"\u6ce8\u89e3\u6548\u679c\u7c7b\u4f3c\uff0c\u53ea\u4e0d\u8fc7\u4e0d\u9700\u8981\u5f00\u542f\u5168\u5c40\u4e8b\u52a1\uff0c\u53ea\u5728\u672c\u5730\u4e8b\u52a1\u63d0\u4ea4\u524d\uff0c\u68c0\u67e5\u5168\u5c40\u9501\u662f\u5426\u5b58\u5728\u3002"),(0,l.kt)("p",null,"2\u3001\u4e1a\u52a1\u4e8c\u6267\u884c\u65f6\u52a0  ",(0,l.kt)("inlineCode",{parentName:"p"},"@GlobalLock")," \u6ce8\u89e3 +  ",(0,l.kt)("inlineCode",{parentName:"p"},"select for update"),"\u8bed\u53e5\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://gitee.com/objcoding/md-picture/raw/master/img/20211226172358.png",alt:null})),(0,l.kt)("p",null,"\u5982\u679c\u52a0\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"select for update"),"\u8bed\u53e5\uff0c\u5219\u4f1a\u5728 update \u524d\u68c0\u67e5\u5168\u5c40\u9501\u662f\u5426\u5b58\u5728\uff0c\u53ea\u6709\u5f53\u5168\u5c40\u9501\u91ca\u653e\u4e4b\u540e\uff0c\u4e1a\u52a1\u4e8c\u624d\u80fd\u5f00\u59cb\u6267\u884c updateA \u64cd\u4f5c\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u5355\u5355\u662f transactional\uff0c\u90a3\u4e48\u5c31\u6709\u53ef\u80fd\u4f1a\u51fa\u73b0\u810f\u5199\uff0c\u6839\u672c\u539f\u56e0\u662f\u6ca1\u6709 Globallock \u6ce8\u89e3\u65f6\uff0c\u4e0d\u4f1a\u68c0\u67e5\u5168\u5c40\u9501\uff0c\u8fd9\u53ef\u80fd\u4f1a\u5bfc\u81f4\u53e6\u5916\u4e00\u4e2a\u5168\u5c40\u4e8b\u52a1\u56de\u6eda\u65f6\uff0c\u53d1\u73b0\u67d0\u4e2a\u5206\u652f\u4e8b\u52a1\u88ab\u810f\u5199\u4e86\u3002\u6240\u4ee5\u52a0 select for update \u4e5f\u6709\u4e2a\u597d\u5904\uff0c\u5c31\u662f\u53ef\u4ee5\u91cd\u8bd5\u3002"),(0,l.kt)("h1",{id:"\u5982\u4f55\u9632\u6b62\u810f\u8bfb"},"\u5982\u4f55\u9632\u6b62\u810f\u8bfb"),(0,l.kt)("p",null,"Seata AT \u6a21\u5f0f\u7684\u810f\u8bfb\u662f\u6307\u5728\u5168\u5c40\u4e8b\u52a1\u672a\u63d0\u4ea4\u524d\uff0c\u88ab\u5176\u5b83\u4e1a\u52a1\u8bfb\u5230\u5df2\u63d0\u4ea4\u7684\u5206\u652f\u4e8b\u52a1\u7684\u6570\u636e\uff0c\u672c\u8d28\u4e0a\u662fSeata\u9ed8\u8ba4\u7684\u5168\u5c40\u4e8b\u52a1\u662f\u8bfb\u672a\u63d0\u4ea4\u3002"),(0,l.kt)("p",null,"\u90a3\u4e48\u600e\u4e48\u907f\u514d\u810f\u8bfb\u73b0\u8c61\u5462\uff1f"),(0,l.kt)("p",null,"\u4e1a\u52a1\u4e8c\u67e5\u8be2 A \u65f6\u52a0  ",(0,l.kt)("inlineCode",{parentName:"p"},"@GlobalLock")," \u6ce8\u89e3 +  ",(0,l.kt)("inlineCode",{parentName:"p"},"select for update"),"\u8bed\u53e5\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://gitee.com/objcoding/md-picture/raw/master/img/20211226210633.png",alt:null})),(0,l.kt)("p",null,"\u52a0",(0,l.kt)("inlineCode",{parentName:"p"},"select for update"),"\u8bed\u53e5\u4f1a\u5728\u6267\u884c SQL \u524d\u68c0\u67e5\u5168\u5c40\u9501\u662f\u5426\u5b58\u5728\uff0c\u53ea\u6709\u5f53\u5168\u5c40\u9501\u5b8c\u6210\u4e4b\u540e\uff0c\u624d\u80fd\u7ee7\u7eed\u6267\u884c SQL\uff0c\u8fd9\u6837\u5c31\u9632\u6b62\u4e86\u810f\u8bfb\u3002"),(0,l.kt)("h1",{id:"\u4f5c\u8005\u7b80\u4ecb"},"\u4f5c\u8005\u7b80\u4ecb\uff1a"),(0,l.kt)("p",null,"\u5f20\u4e58\u8f89\uff0c\u76ee\u524d\u5c31\u804c\u4e8e\u8682\u8681\u96c6\u56e2\uff0c\u70ed\u7231\u5206\u4eab\u6280\u672f\uff0c\u5fae\u4fe1\u516c\u4f17\u53f7\u300c\u540e\u7aef\u8fdb\u9636\u300d\u4f5c\u8005\uff0c\u6280\u672f\u535a\u5ba2\uff08",(0,l.kt)("a",{parentName:"p",href:"https://objcoding.com/"},"https://objcoding.com/"),"\uff09\u535a\u4e3b\uff0cSeata Contributor\uff0cGitHub ID\uff1aobjcoding\u3002"))}k.isMDXComponent=!0}}]);