"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[17127],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,f=s["".concat(c,".").concat(m)]||s[m]||d[m]||o;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},32980:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"Seata AT \u6a21\u5f0f",keywords:["Seata","AT"],description:"Seata AT \u6a21\u5f0f\u7528\u6237\u6587\u6863"},l="Seata AT \u6a21\u5f0f",i={unversionedId:"user/mode/at",id:"version-v1.5/user/mode/at",title:"Seata AT \u6a21\u5f0f",description:"Seata AT \u6a21\u5f0f\u7528\u6237\u6587\u6863",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.5/user/mode/at.md",sourceDirName:"user/mode",slug:"/user/mode/at",permalink:"/zh-cn/docs/v1.5/user/mode/at",draft:!1,tags:[],version:"v1.5",frontMatter:{title:"Seata AT \u6a21\u5f0f",keywords:["Seata","AT"],description:"Seata AT \u6a21\u5f0f\u7528\u6237\u6587\u6863"},sidebar:"docs",previous:{title:"\u53c2\u6570\u914d\u7f6e",permalink:"/zh-cn/docs/v1.5/user/configurations"},next:{title:"Seata TCC \u6a21\u5f0f",permalink:"/zh-cn/docs/v1.5/user/mode/tcc"}},c={},p=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u6574\u4f53\u673a\u5236",id:"\u6574\u4f53\u673a\u5236",level:3},{value:"\u57fa\u672c\u4f7f\u7528",id:"\u57fa\u672c\u4f7f\u7528",level:2},{value:"\u5feb\u901f\u5f00\u59cb",id:"\u5feb\u901f\u5f00\u59cb",level:2}],u={toc:p},s="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"seata-at-\u6a21\u5f0f"},"Seata AT \u6a21\u5f0f"),(0,r.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,r.kt)("p",null,"AT \u6a21\u5f0f\u662f Seata \u521b\u65b0\u7684\u4e00\u79cd\u975e\u4fb5\u5165\u5f0f\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u89e3\u51b3\u65b9\u6848\uff0cSeata \u5728\u5185\u90e8\u505a\u4e86\u5bf9\u6570\u636e\u5e93\u64cd\u4f5c\u7684\u4ee3\u7406\u5c42\uff0c\u6211\u4eec\u4f7f\u7528 Seata AT \u6a21\u5f0f\u65f6\uff0c\u5b9e\u9645\u4e0a\u7528\u7684\u662f Seata \u81ea\u5e26\u7684\u6570\u636e\u6e90\u4ee3\u7406 DataSourceProxy\uff0cSeata \u5728\u8fd9\u5c42\u4ee3\u7406\u4e2d\u52a0\u5165\u4e86\u5f88\u591a\u903b\u8f91\uff0c\u6bd4\u5982\u63d2\u5165\u56de\u6eda undo_log \u65e5\u5fd7\uff0c\u68c0\u67e5\u5168\u5c40\u9501\u7b49\u3002"),(0,r.kt)("p",null,"\u672c\u6587\u4e2d\uff0c\u6211\u4eec\u5c06\u91cd\u70b9\u4ecb\u7ecd Seata AT \u6a21\u5f0f\u7684\u4f7f\u7528\uff0c\u5982\u679c\u60a8\u5bf9\u4e8e AT \u6a21\u5f0f\u539f\u7406\u611f\u5174\u8da3\uff0c\u8fd8\u8bf7\u9605\u8bfb\u5bf9\u5e94\u4e8e\u672c\u7bc7\u6587\u7ae0\u7684",(0,r.kt)("a",{parentName:"p",href:"../../dev/mode/at-mode"},"\u5f00\u53d1\u8005\u6307\u5357"),"\u3002"),(0,r.kt)("h3",{id:"\u6574\u4f53\u673a\u5236"},"\u6574\u4f53\u673a\u5236"),(0,r.kt)("p",null,"\u4e24\u9636\u6bb5\u63d0\u4ea4\u534f\u8bae\u7684\u6f14\u53d8\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e00\u9636\u6bb5\uff1a\u4e1a\u52a1\u6570\u636e\u548c\u56de\u6eda\u65e5\u5fd7\u8bb0\u5f55\u5728\u540c\u4e00\u4e2a\u672c\u5730\u4e8b\u52a1\u4e2d\u63d0\u4ea4\uff0c\u91ca\u653e\u672c\u5730\u9501\u548c\u8fde\u63a5\u8d44\u6e90\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4e8c\u9636\u6bb5\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63d0\u4ea4\u5f02\u6b65\u5316\uff0c\u975e\u5e38\u5feb\u901f\u5730\u5b8c\u6210\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u56de\u6eda\u901a\u8fc7\u4e00\u9636\u6bb5\u7684\u56de\u6eda\u65e5\u5fd7\u8fdb\u884c\u53cd\u5411\u8865\u507f\u3002")))),(0,r.kt)("h2",{id:"\u57fa\u672c\u4f7f\u7528"},"\u57fa\u672c\u4f7f\u7528"),(0,r.kt)("p",null,"\u6211\u4eec\u9996\u5148\u62bd\u8c61\u4e00\u4e2a\u4f7f\u7528\u573a\u666f\uff0c\u5728\u7528\u6237\u8d2d\u4e70\u884c\u4e3a\u7684\u65f6\u5019\u9700\u8981\u51cf\u5c11\u5e93\u5b58\u5e76\u51cf\u5c11\u8d26\u6237\u4f59\u989d\uff0c\u5f53\u5e93\u5b58\u8868 ",(0,r.kt)("inlineCode",{parentName:"p"},"stock_tbl")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"account_tbl")," \u5728\u540c\u4e00\u4e2a\u6570\u636e\u5e93\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u5173\u7cfb\u6570\u636e\u5e93\u81ea\u8eab\u63d0\u4f9b\u7684\u80fd\u529b\u975e\u5e38\u5bb9\u6613\u5b9e\u73b0\u4e8b\u52a1\u3002\u4f46\u5982\u679c\u8fd9\u4e24\u4e2a\u8868\u5206\u5c5e\u4e8e\u4e0d\u540c\u7684\u6570\u636e\u6e90\uff0c\u6211\u4eec\u5c31\u8981\u4f7f\u7528 Seata \u63d0\u4f9b\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u80fd\u529b\u4e86\u3002"),(0,r.kt)("p",null,"\u89c2\u5bdf\u4e0b\u65b9\u7684\u793a\u4f8b\u4ee3\u7801\uff0c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@GlobalTransactional\npublic void purchase(String userId, String commodityCode, int count, int money) {\n    jdbcTemplateA.update("update stock_tbl set count = count - ? where commodity_code = ?", new Object[] {count, commodityCode});\n    jdbcTemplateB.update("update account_tbl set money = money - ? where user_id = ?", new Object[] {money, userId});\n}\n')),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u66fe\u4f7f\u7528\u8fc7 Spring \u6846\u67b6 ",(0,r.kt)("inlineCode",{parentName:"p"},"@Transactional")," \u6ce8\u89e3\u7684\u8bdd\uff0c\u4e5f\u53ef\u4ee5\u6839\u636e\u547d\u540d\u7c7b\u6bd4\u7406\u89e3 ",(0,r.kt)("inlineCode",{parentName:"p"},"@GlobalTransactional")," \u7684\u529f\u80fd\u3002\u662f\u7684\uff0c\u8fd9\u91cc\u53ea\u662f\u5f15\u5165\u4e86\u4e00\u4e2a\u6ce8\u89e3\u5c31\u8f7b\u677e\u5b9e\u73b0\u4e86\u5206\u5e03\u5f0f\u4e8b\u52a1\u80fd\u529b\uff0c\u4f7f\u7528 AT \u6a21\u5f0f\u53ef\u4ee5\u6700\u5c0f\u7a0b\u5ea6\u51cf\u5c11\u4e1a\u52a1\u6539\u9020\u6210\u672c\u3002"),(0,r.kt)("p",null,"\u540c\u65f6\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"jdbcTemplateA")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"jdbcTemplateB")," \u4f7f\u7528\u4e86\u4e0d\u540c\u7684\u6570\u636e\u6e90\u8fdb\u884c\u6784\u9020\uff0c\u800c\u8fd9\u4e24\u4e2a\u4e0d\u540c\u7684\u6570\u636e\u6e90\u90fd\u9700\u8981\u4f7f\u7528 Seata \u63d0\u4f9b\u7684 AT \u6570\u636e\u6e90\u4ee3\u7406\u7c7b ",(0,r.kt)("inlineCode",{parentName:"p"},"DataSourceProxy")," \u8fdb\u884c\u5305\u88c5\u3002\u6709\u5173\u6570\u636e\u6e90\u4ee3\u7406\u5e2e\u52a9\u6211\u4eec\u505a\u4e86\u4ec0\u4e48\uff0c\u8bf7\u9605\u8bfb\u9644\u5f55\u4e2d\u7684",(0,r.kt)("a",{parentName:"p",href:"../appendix/isolation#%E4%BB%8E%E4%BB%A3%E7%90%86%E6%95%B0%E6%8D%AE%E6%BA%90%E8%AF%B4%E8%B5%B7"},"\u4e8b\u52a1\u9694\u79bb"),"\u3002"),(0,r.kt)("h2",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,r.kt)("p",null,"\u8bf7\u8ddf\u968f ",(0,r.kt)("a",{parentName:"p",href:"../quickstart"},"\u5feb\u901f\u542f\u52a8")," \u7ae0\u8282\u4e0a\u624b\u4e00\u4e2a\u5b8c\u6574\u7684\u793a\u4f8b\u3002"))}d.isMDXComponent=!0}}]);