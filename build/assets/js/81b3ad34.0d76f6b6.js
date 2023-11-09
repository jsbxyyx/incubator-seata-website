"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[5655],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(n),g=l,k=u["".concat(p,".").concat(g)]||u[g]||m[g]||r;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=g;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},20747:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(87462),l=(n(67294),n(3905));const r={layout:"post",comments:!0,title:"Seata\u5e94\u7528\u4fa7\u542f\u52a8\u8fc7\u7a0b\u5256\u6790\u2014\u2014RM & TM\u5982\u4f55\u4e0eTC\u5efa\u7acb\u8fde\u63a5",date:new Date("2021-02-28T21:08:00.000Z"),author:"booogu",catalog:!0,tags:["Seata"]},i=void 0,o={permalink:"/blog/seata-client-start-analysis-01",source:"@site/blog/seata-client-start-analysis-01.md",title:"Seata\u5e94\u7528\u4fa7\u542f\u52a8\u8fc7\u7a0b\u5256\u6790\u2014\u2014RM & TM\u5982\u4f55\u4e0eTC\u5efa\u7acb\u8fde\u63a5",description:"\u201c\u521a\u4e0a\u624bSeata\uff0c\u5bf9\u5176\u5404\u4e2a\u6a21\u5757\u4e86\u89e3\u8fd8\u4e0d\u591f\u6df1\u5165\uff1f",date:"2021-02-28T21:08:00.000Z",formattedDate:"February 28, 2021",tags:[{label:"Seata",permalink:"/blog/tags/seata"}],readingTime:11.15,hasTruncateMarker:!1,authors:[{name:"booogu"}],frontMatter:{layout:"post",comments:!0,title:"Seata\u5e94\u7528\u4fa7\u542f\u52a8\u8fc7\u7a0b\u5256\u6790\u2014\u2014RM & TM\u5982\u4f55\u4e0eTC\u5efa\u7acb\u8fde\u63a5",date:"2021-02-28T21:08:00.000Z",author:"booogu",catalog:!0,tags:["Seata"]},prevItem:{title:"Seata\u5e94\u7528\u4fa7\u542f\u52a8\u8fc7\u7a0b\u5256\u6790\u2014\u2014\u6ce8\u518c\u4e2d\u5fc3\u4e0e\u914d\u7f6e\u4e2d\u5fc3\u6a21\u5757",permalink:"/blog/seata-client-start-analysis-02"},nextItem:{title:"Spring Cloud\u96c6\u6210Seata\u5206\u5e03\u5f0f\u4e8b\u52a1-TCC\u6a21\u5f0f",permalink:"/blog/integrate-seata-tcc-mode-with-spring-cloud"}},p={authorsImageUrls:[void 0]},c=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u4eceGlobalTransactionScanner\u8bf4\u8d77",id:"\u4eceglobaltransactionscanner\u8bf4\u8d77",level:2},{value:"RM &amp; TM \u7684\u521d\u59cb\u5316\u4e0e\u8fde\u63a5\u8fc7\u7a0b",id:"rm--tm-\u7684\u521d\u59cb\u5316\u4e0e\u8fde\u63a5\u8fc7\u7a0b",level:2},{value:"\u7c7b\u5173\u7cfb\u7684\u8bbe\u8ba1",id:"\u7c7b\u5173\u7cfb\u7684\u8bbe\u8ba1",level:3},{value:"\u521d\u59cb\u5316\u7684\u5b8c\u6574\u6d41\u7a0b",id:"\u521d\u59cb\u5316\u7684\u5b8c\u6574\u6d41\u7a0b",level:3},{value:"\u6293\u4f4f\u6838\u5fc3\u2014\u2014Channel\u7684\u521b\u5efa",id:"\u6293\u4f4f\u6838\u5fc3channel\u7684\u521b\u5efa",level:3},{value:"\u5efa\u7acb\u8fde\u63a5\u7684\u65f6\u673a\u4e0e\u6d41\u7a0b",id:"\u5efa\u7acb\u8fde\u63a5\u7684\u65f6\u673a\u4e0e\u6d41\u7a0b",level:3}],s={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u201c\u521a\u4e0a\u624bSeata\uff0c\u5bf9\u5176\u5404\u4e2a\u6a21\u5757\u4e86\u89e3\u8fd8\u4e0d\u591f\u6df1\u5165\uff1f ",(0,l.kt)("br",null),"\n\u60f3\u6df1\u5165\u7814\u7a76Seata\u6e90\u7801\uff0c\u5374\u8fd8\u672a\u4ed8\u8bf8\u5b9e\u8df5\uff1f",(0,l.kt)("br",null),"\n\u60f3\u63a2\u7a76\u4e0b\u5728\u96c6\u6210Seata\u540e\uff0c\u81ea\u5df1\u7684\u5e94\u7528\u5728\u542f\u52a8\u8fc7\u7a0b\u4e2d\u201c\u5077\u5077\u201d\u5e72\u4e86\u4e9b\u5565\uff1f",(0,l.kt)("br",null),"\n\u60f3\u5b66\u4e60Seata\u4f5c\u4e3a\u4e00\u6b3e\u4f18\u79c0\u5f00\u6e90\u6846\u67b6\u8574\u542b\u7684\u8bbe\u8ba1\u7406\u5ff5\u548c\u6700\u4f73\u5b9e\u8df5\uff1f",(0,l.kt)("br",null),"\n\u5982\u679c\u4f60\u6709\u4e0a\u8ff0\u4efb\u4f55\u60f3\u6cd5\u4e4b\u4e00\uff0c\u90a3\u4e48\u4eca\u5929\u8fd9\u7bc7\u6587\u7ae0\uff0c\u5c31\u662f\u4e3a\u4f60\u91cf\u8eab\u6253\u9020\u7684~")),(0,l.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,l.kt)("p",null,"\u770b\u8fc7\u5b98\u7f51README\u7684\u7b2c\u4e00\u5f20\u56fe\u7247\u7684\u540c\u5b66\u90fd\u5e94\u8be5\u6e05\u695a\uff0cSeata\u534f\u8c03\u5206\u5e03\u5f0f\u4e8b\u52a1\u7684\u539f\u7406\u4fbf\u5728\u4e8e\u901a\u8fc7\u5176",(0,l.kt)("strong",{parentName:"p"},"\u534f\u8c03\u5668\u4fa7"),"\u7684TC\uff0c\u6765\u4e0e",(0,l.kt)("strong",{parentName:"p"},"\u5e94\u7528\u4fa7"),"\u7684TM\u3001RM\u8fdb\u884c\u5404\u79cd\u901a\u4fe1\u4e0e\u4ea4\u4e92\uff0c\u6765\u4fdd\u8bc1\u5206\u5e03\u5f0f\u4e8b\u52a1\u4e2d\uff0c\u591a\u4e2a\u4e8b\u52a1\u53c2\u4e0e\u8005\u7684\u6570\u636e\u4e00\u81f4\u6027\u3002\u90a3\u4e48Seata\u7684\u534f\u8c03\u5668\u4fa7\u4e0e\u5e94\u7528\u4fa7\u4e4b\u95f4\uff0c\u662f\u5982\u4f55\u5efa\u7acb\u8fde\u63a5\u5e76\u8fdb\u884c\u901a\u4fe1\u7684\u5462\uff1f"),(0,l.kt)("p",null,"\u6ca1\u9519\uff0c\u7b54\u6848\u5c31\u662fNetty\uff0cNetty\u4f5c\u4e3a\u4e00\u6b3e\u9ad8\u6027\u80fd\u7684RPC\u901a\u4fe1\u6846\u67b6\uff0c\u4fdd\u8bc1\u4e86TC\u4e0eRM\u4e4b\u95f4\u7684\u9ad8\u6548\u901a\u4fe1\uff0c\u5173\u4e8eNetty\u7684\u8be6\u7ec6\u4ecb\u7ecd\uff0c\u672c\u6587\u4e0d\u518d\u5c55\u5f00\uff0c\u4eca\u5929\u6211\u4eec\u63a2\u7a76\u7684\u91cd\u70b9\uff0c\u5728\u4e8e",(0,l.kt)("strong",{parentName:"p"},"\u5e94\u7528\u4fa7\u5728\u542f\u52a8\u8fc7\u7a0b\u4e2d\uff0c\u5982\u4f55\u901a\u8fc7\u4e00\u7cfb\u5217Seata\u5173\u952e\u6a21\u5757\u4e4b\u95f4\u7684\u534f\u4f5c\uff08\u5982RPC\u3001Config/Registry Center\u7b49\uff09\uff0c\u6765\u5efa\u7acb\u4e0e\u534f\u8c03\u5668\u4fa7\u4e4b\u95f4\u7684\u901a\u4fe1")),(0,l.kt)("h2",{id:"\u4eceglobaltransactionscanner\u8bf4\u8d77"},"\u4eceGlobalTransactionScanner\u8bf4\u8d77"),(0,l.kt)("p",null,"\u6211\u4eec\u77e5\u9053Seata\u63d0\u4f9b\u4e86\u591a\u4e2a\u5f00\u53d1\u671f\u6ce8\u89e3\uff0c\u6bd4\u5982\u7528\u4e8e\u5f00\u542f\u5206\u5e03\u5f0f\u4e8b\u52a1\u7684@GlobalTransactional\u3001\u7528\u4e8e\u58f0\u660eTCC\u4e24\u9636\u6bb5\u670d\u52a1\u7684@TwoPhraseBusinessAction\u7b49\uff0c\u5b83\u4eec\u90fd\u662f\u57fa\u4e8eSpring AOP\u673a\u5236\uff0c\u5bf9\u4f7f\u7528\u4e86\u6ce8\u89e3\u7684Bean\u65b9\u6cd5\u5206\u914d\u5bf9\u5e94\u7684\u62e6\u622a\u5668\u8fdb\u884c\u589e\u5f3a\uff0c\u6765\u5b8c\u6210\u5bf9\u5e94\u7684\u5904\u7406\u903b\u8f91\u3002\u800cGlobalTransactionScanner\u8fd9\u4e2aSpring Bean\uff0c\u5c31\u627f\u8f7d\u7740\u4e3a\u5404\u4e2a\u6ce8\u89e3\u5206\u914d\u5bf9\u5e94\u7684\u62e6\u622a\u5668\u7684\u804c\u8d23\uff0c\u4ece\u5176Scanner\u7684\u547d\u540d\uff0c\u6211\u4eec\u4e5f\u4e0d\u96be\u63a8\u65ad\u51fa\uff0c\u5b83\u662f\u4e3a\u4e86\u5728Spring\u5e94\u7528\u542f\u52a8\u8fc7\u7a0b\u4e2d\uff0c\u5bf9\u4e0e\u5168\u5c40\u4e8b\u52a1\uff08GlobalTransactionScanner\uff09\u76f8\u5173\u7684Bean\u8fdb\u884c\u626b\u63cf\u3001\u5904\u7406\u7684\u3002"),(0,l.kt)("p",null,"\u9664\u6b64\u4e4b\u5916\uff0c\u5e94\u7528\u4fa7RPC\u5ba2\u6237\u7aef\uff08TMClient\u3001RMClient\uff09\u521d\u59cb\u5316\u3001\u4e0eTC\u5efa\u7acb\u8fde\u63a5\u7684\u6d41\u7a0b\uff0c\u4e5f\u662f\u5728GlobalTransactionScanner#afterPropertiesSet()\u4e2d\u53d1\u8d77\u7684\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'    /**\n     * package\uff1aio.seata.spring.annotation\n     * class\uff1aGlobalTransactionScanner\n     */\n    @Override\n    public void afterPropertiesSet() {\n        if (disableGlobalTransaction) {\n            if (LOGGER.isInfoEnabled()) {\n                LOGGER.info("Global transaction is disabled.");\n            }\n            return;\n        }\n        //\u5728Bean\u5c5e\u6027\u521d\u59cb\u5316\u4e4b\u540e\uff0c\u6267\u884cTM\u3001RM\u7684\u521d\u59cb\u5316\n        initClient();\n\n    }\n')),(0,l.kt)("h2",{id:"rm--tm-\u7684\u521d\u59cb\u5316\u4e0e\u8fde\u63a5\u8fc7\u7a0b"},"RM & TM \u7684\u521d\u59cb\u5316\u4e0e\u8fde\u63a5\u8fc7\u7a0b"),(0,l.kt)("p",null,"\u8fd9\u91cc\uff0c\u6211\u4eec\u4ee5RMClient.init()\u4e3a\u4f8b\u8bf4\u660e\uff0cTMClient\u7684\u521d\u59cb\u5316\u8fc7\u7a0b\u4ea6\u540c\u7406\u3002"),(0,l.kt)("h3",{id:"\u7c7b\u5173\u7cfb\u7684\u8bbe\u8ba1"},"\u7c7b\u5173\u7cfb\u7684\u8bbe\u8ba1"),(0,l.kt)("p",null,"\u67e5\u770bRMClient#init()\u7684\u6e90\u7801\uff0c\u6211\u4eec\u53d1\u73b0\uff0cRMClient\u5148",(0,l.kt)("strong",{parentName:"p"},"\u6784\u9020"),"\u4e86\u4e00\u4e2aRmNettyRemotingClient\uff0c\u7136\u540e\u6267\u884c\u5176",(0,l.kt)("strong",{parentName:"p"},"\u521d\u59cb\u5316"),"init()\u65b9\u6cd5\u3002\u800cRmNettyRemotingClient\u7684",(0,l.kt)("strong",{parentName:"p"},"\u6784\u9020\u5668"),"\u548c",(0,l.kt)("strong",{parentName:"p"},"\u521d\u59cb\u5316"),"\u65b9\u6cd5\uff0c\u90fd\u4f1a\u9010\u5c42\u8c03\u7528\u7236\u7c7b\u7684\u6784\u9020\u5668\u4e0e\u521d\u59cb\u5316\u65b9\u6cd5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"    /**\n     * RMClient\u7684\u521d\u59cb\u5316\u903b\u8f91\n     * package\uff1aio.seata.rm\n     * class\uff1aRMClient\n     */\n    public static void init(String applicationId, String transactionServiceGroup) {\n        //\u2460 \u9996\u5148\u4eceRmNettyRemotingClient\u7c7b\u5f00\u59cb\uff0c\u4f9d\u6b21\u8c03\u7528\u7236\u7c7b\u7684\u6784\u9020\u5668        \n        RmNettyRemotingClient rmNettyRemotingClient = RmNettyRemotingClient.getInstance(applicationId, transactionServiceGroup);\n        rmNettyRemotingClient.setResourceManager(DefaultResourceManager.get());\n        rmNettyRemotingClient.setTransactionMessageHandler(DefaultRMHandler.get());\n        //\u2461 \u7136\u540e\u4eceRmNettyRemotingClient\u7c7b\u5f00\u59cb\uff0c\u4f9d\u6b21\u8c03\u7528\u7236\u7c7b\u7684init()\n        rmNettyRemotingClient.init();\n    }\n")),(0,l.kt)("p",null,"\u4e0a\u8ff0RMClient\u7cfb\u5217\u5404\u7c7b\u4e4b\u95f4\u7684\u5173\u7cfb\u4ee5\u53ca\u8c03\u7528\u6784\u9020\u5668\u548cinit()\u521d\u59cb\u5316\u65b9\u6cd5\u7684\u8fc7\u7a0b\u5982\u4e0b\u56fe\u793a\u610f\uff1a\n",(0,l.kt)("img",{parentName:"p",src:"http://booogu.top/img/in-post/rmclient_relation.jpg",alt:"RMClient.init\u7b80\u5316\u7248\u6d41\u7a0b\u4e0e\u4e3b\u8981\u7c7b\u4e4b\u95f4\u7684\u5173\u7cfb"})),(0,l.kt)("p",null,"\u90a3\u4e48\u4e3a\u4f55\u8981\u5c06RMClient\u8bbe\u8ba1\u6210\u8fd9\u6837\u8f83\u4e3a\u590d\u6742\u7684\u7ee7\u627f\u5173\u7cfb\u5462\uff1f\u5176\u5b9e\u662f\u4e3a\u4e86\u5c06\u5404\u5c42\u7684\u804c\u8d23\u3001\u8fb9\u754c\u5212\u5206\u6e05\u695a\uff0c\u4f7f\u5f97\u5404\u5c42\u53ef\u4ee5\u4e13\u6ce8\u4e8e\u7279\u5b9a\u903b\u8f91\u5904\u7406\uff0c\u5b9e\u73b0\u66f4\u597d\u7684\u6269\u5c55\u6027\uff0c\u8fd9\u90e8\u5206\u7684\u8be6\u7ec6\u8bbe\u8ba1\u601d\u8def\uff0c\u53ef\u53c2\u8003Seata RPC\u6a21\u5757\u91cd\u6784PR\u7684\u64cd\u5200\u8005\u4e58\u8f89\u5144\u7684\u6587\u7ae0",(0,l.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/PCSZ4a8cgmyZNhbUrO-BZQ"},"Seata-RPC\u91cd\u6784\u4e4b\u8def"),"\uff09"),(0,l.kt)("h3",{id:"\u521d\u59cb\u5316\u7684\u5b8c\u6574\u6d41\u7a0b"},"\u521d\u59cb\u5316\u7684\u5b8c\u6574\u6d41\u7a0b"),(0,l.kt)("p",null,"\u5404\u7c7b\u7684\u6784\u9020\u5668\u4e0e\u521d\u59cb\u5316\u65b9\u6cd5\u4e2d\u7684\u4e3b\u8981\u903b\u8f91\uff0c\u5927\u5bb6\u53ef\u4ee5\u501f\u52a9\u4e0b\u9762\u8fd9\u4e2a\u80fd\u8868\u610f\u7684\u5e8f\u5217\u56fe\u6765\u68b3\u7406\u4e0b\uff0c\u6b64\u56fe\u5927\u5bb6\u4e5f\u53ef\u5148\u8df3\u8fc7\u4e0d\u770b\uff0c\u5728\u4e0b\u9762\u6211\u4eec\u5206\u6790\u8fc7\u51e0\u4e2a\u91cd\u70b9\u7c7b\u540e\uff0c\u518d\u56de\u5934\u6765\u770b\u8fd9\u4e9b\u7c7b\u662f\u4f55\u65f6\u767b\u573a\u3001\u5982\u4f55\u4ea4\u4e92\u7684\u534f\u4f5c\u7684\u3002\n",(0,l.kt)("img",{parentName:"p",src:"http://booogu.top/img/in-post/rmclient_initialization.png",alt:"RMClient\u7684\u521d\u59cb\u5316\u6d41\u7a0b"})),(0,l.kt)("h3",{id:"\u6293\u4f4f\u6838\u5fc3channel\u7684\u521b\u5efa"},"\u6293\u4f4f\u6838\u5fc3\u2014\u2014Channel\u7684\u521b\u5efa"),(0,l.kt)("p",null,"\u9996\u5148\u6211\u4eec\u9700\u8981\u77e5\u9053\uff0c\u5e94\u7528\u4fa7\u4e0e\u534f\u8c03\u5668\u4fa7\u7684\u901a\u4fe1\u662f\u501f\u52a9Netty\u7684Channel\uff08\u7f51\u7edc\u901a\u9053\uff09\u6765\u5b8c\u6210\u7684\uff0c\u56e0\u6b64",(0,l.kt)("strong",{parentName:"p"},"\u901a\u4fe1\u8fc7\u7a0b\u7684\u5173\u952e\u5728\u4e8eChannel\u7684\u521b\u5efa"),"\uff0c\u5728Seata\u4e2d\uff0c\u901a\u8fc7\u6c60\u5316\u7684\u65b9\u5f0f\uff08\u501f\u52a9\u4e86common-pool\u4e2d\u7684\u5bf9\u8c61\u6c60\uff09\u65b9\u5f0f\u6765\u521b\u5efa\u3001\u7ba1\u7406Channel\u3002"),(0,l.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u6709\u5fc5\u8981\u7b80\u8981\u4ecb\u7ecd\u4e0b\u5bf9\u8c61\u6c60\u7684\u7b80\u5355\u6982\u5ff5\u53ca\u5176\u5728Seata\u4e2d\u7684\u5b9e\u73b0\uff1a\n\u6d89\u53ca\u5230\u7684common-pool\u4e2d\u7684\u4e3b\u8981\u7c7b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"GenericKeydObjectPool<K, V>"),"\uff1aKV\u6cdb\u578b\u5bf9\u8c61\u6c60\uff0c\u63d0\u4f9b\u5bf9\u6240\u6709\u5bf9\u8c61\u7684\u5b58\u53d6\u7ba1\u7406\uff0c\u800c\u5bf9\u8c61\u7684\u521b\u5efa\u7531\u5176\u5185\u90e8\u7684\u5de5\u5382\u7c7b\u6765\u5b8c\u6210"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"KeyedPoolableObjectFactory<K, V>"),"\uff1aKV\u6cdb\u578b\u5bf9\u8c61\u5de5\u5382\uff0c\u8d1f\u8d23\u6c60\u5316\u5bf9\u8c61\u7684\u521b\u5efa\uff0c\u88ab\u5bf9\u8c61\u6c60\u6301\u6709")),(0,l.kt)("p",null,"\u6d89\u53ca\u5230\u7684Seata\u4e2d\u5bf9\u8c61\u6c60\u5b9e\u73b0\u76f8\u5173\u7684\u4e3b\u8981\u7c7b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9996\u5148\uff0c\u88ab\u6c60\u5316\u7ba1\u7406\u7684\u5bf9\u8c61\u5c31\u662f",(0,l.kt)("strong",{parentName:"li"},"Channel"),"\uff0c\u5bf9\u5e94common-pool\u4e2d\u7684\u6cdb\u578bV"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"NettyPoolKey"),"\uff1aChannel\u5bf9\u5e94\u7684Key\uff0c\u5bf9\u5e94common-pool\u4e2d\u7684\u6cdb\u578bK\uff0cNettyPoolKey\u4e3b\u8981\u5305\u542b\u4e24\u4e2a\u4fe1\u606f\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"address"),":\u521b\u5efaChannel\u65f6\uff0c\u5bf9\u5e94\u7684TC Server\u5730\u5740"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"message"),":\u521b\u5efaChannel\u65f6\uff0c\u5411TC Server\u53d1\u9001\u7684RPC\u6d88\u606f\u4f53"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"GenericKeydObjectPool<NettyPoolKey,Channel>"),"\uff1aChannel\u5bf9\u8c61\u6c60"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"NettyPoolableFactory"),"\uff1a\u521b\u5efaChannel\u7684\u5de5\u5382\u7c7b")),(0,l.kt)("p",null,"\u8ba4\u8bc6\u4e86\u4e0a\u8ff0\u5bf9\u8c61\u6c60\u76f8\u5173\u7684\u4e3b\u8981\u7c7b\u4e4b\u540e\uff0c\u6211\u4eec\u518d\u6765\u770b\u770bSeata\u4e2d\u6d89\u53caChannel\u7ba1\u7406\u4ee5\u53ca\u4e0eRPC\u76f8\u5173\u7684\u51e0\u4e2a\u4e3b\u8981\u7c7b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"NettyClientChannelManager\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6301\u6709Channel\u5bf9\u8c61\u6c60"),(0,l.kt)("li",{parentName:"ul"},"\u4e0eChannel\u5bf9\u8c61\u6c60\u4ea4\u4e92\uff0c\u5bf9\u5e94\u7528\u4fa7Channel\u8fdb\u884c\u7ba1\u7406\uff08\u83b7\u53d6\u3001\u91ca\u653e\u3001\u9500\u6bc1\u3001\u7f13\u5b58\u7b49\uff09"))),(0,l.kt)("li",{parentName:"ul"},"RpcClientBootstrap\uff1aRPC\u5ba2\u6237\u7aef\u6838\u5fc3\u5f15\u5bfc\u7c7b\uff0c\u6301\u6709Netty\u6846\u67b6\u7684Bootstrap\u5bf9\u8c61\uff0c\u5177\u5907\u542f\u505c\u80fd\u529b\uff1b\u5177\u6709\u6839\u636e\u8fde\u63a5\u5730\u5740\u6765\u83b7\u53d6\u65b0Channel\u7684\u80fd\u529b\uff0c\u4f9bChannel\u5de5\u5382\u7c7b\u8c03\u7528"),(0,l.kt)("li",{parentName:"ul"},"AbstractNettyRemotingClient\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u521d\u59cb\u5316\u5e76\u6301\u6709RpcClientBootstrap"),(0,l.kt)("li",{parentName:"ul"},"\u5e94\u7528\u4fa7Netty\u5ba2\u6237\u7aef\u7684\u9876\u5c42\u62bd\u8c61\uff0c\u62bd\u8c61\u4e86\u5e94\u7528\u4fa7RM/TM\u53d6\u5f97\u5404\u81eaChannel\u5bf9\u5e94\u7684NettyPoolKey\u7684\u80fd\u529b\uff0c\u4f9bNettyClientChannelManager\u8c03\u7528"),(0,l.kt)("li",{parentName:"ul"},"\u521d\u59cb\u5316NettyPoolableFactory")))),(0,l.kt)("p",null,"\u4e86\u89e3\u4e0a\u8ff0\u6982\u5ff5\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u628aSeata\u4e2d\u521b\u5efaChannel\u7684\u8fc7\u7a0b\u7b80\u5316\u5982\u4e0b\uff1a\n",(0,l.kt)("img",{parentName:"p",src:"http://booogu.top/img/in-post/create_channel.jpg",alt:"\u521b\u5efaChannel\u5bf9\u8c61\u8fc7\u7a0b"})),(0,l.kt)("p",null,"\u770b\u5230\u8fd9\u91cc\uff0c\u5927\u5bb6\u53ef\u4ee5\u56de\u8fc7\u5934\u518d\u770b\u770b\u4e0a\u9762\u7684",(0,l.kt)("strong",{parentName:"p"},"RMClient\u7684\u521d\u59cb\u5316\u5e8f\u5217\u56fe"),"\uff0c\u5e94\u8be5\u4f1a\u5bf9\u56fe\u4e2d\u5404\u7c7b\u7684\u804c\u8d23\u3001\u5173\u7cfb\uff0c\u4ee5\u53ca\u6574\u4e2a\u521d\u59cb\u5316\u8fc7\u7a0b\u7684\u610f\u56fe\u6709\u4e00\u4e2a\u6bd4\u8f83\u6e05\u6670\u7684\u7406\u89e3\u4e86\u3002"),(0,l.kt)("h3",{id:"\u5efa\u7acb\u8fde\u63a5\u7684\u65f6\u673a\u4e0e\u6d41\u7a0b"},"\u5efa\u7acb\u8fde\u63a5\u7684\u65f6\u673a\u4e0e\u6d41\u7a0b"),(0,l.kt)("p",null,"\u90a3\u4e48\uff0cRMClient\u662f\u4f55\u65f6\u4e0eServer\u5efa\u7acb\u8fde\u63a5\u7684\u5462\uff1f"),(0,l.kt)("p",null,"\u5728RMClient\u521d\u59cb\u5316\u7684\u8fc7\u7a0b\u4e2d\uff0c\u5927\u5bb6\u4f1a\u53d1\u73b0\uff0c\u5f88\u591ainit()\u65b9\u6cd5\u90fd\u8bbe\u5b9a\u4e86\u4e00\u4e9b\u5b9a\u65f6\u4efb\u52a1\uff0c\u800cSeata\u5e94\u7528\u4fa7\u4e0e\u534f\u8c03\u5668\u7684\u91cd\u8fde\uff08\u8fde\u63a5\uff09\u673a\u5236\uff0c\u5c31\u662f\u901a\u8fc7\u5b9a\u65f6\u4efb\u52a1\u6765\u5b9e\u73b0\u7684\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"    /**\n     * package\uff1aio.seata.core.rpcn.netty\n     * class\uff1aAbstractNettyRemotingClient\n     */\n    public void init() {\n        //\u8bbe\u7f6e\u5b9a\u65f6\u5668\uff0c\u5b9a\u65f6\u91cd\u8fdeTC Server\n        timerExecutor.scheduleAtFixedRate(new Runnable() {\n            @Override\n            public void run() {\n                clientChannelManager.reconnect(getTransactionServiceGroup());\n            }\n        }, SCHEDULE_DELAY_MILLS, SCHEDULE_INTERVAL_MILLS, TimeUnit.MILLISECONDS);\n        if (NettyClientConfig.isEnableClientBatchSendRequest()) {\n            mergeSendExecutorService = new ThreadPoolExecutor(MAX_MERGE_SEND_THREAD,\n                MAX_MERGE_SEND_THREAD,\n                KEEP_ALIVE_TIME, TimeUnit.MILLISECONDS,\n                new LinkedBlockingQueue<>(),\n                new NamedThreadFactory(getThreadPrefix(), MAX_MERGE_SEND_THREAD));\n            mergeSendExecutorService.submit(new MergedSendRunnable());\n        }\n        super.init();\n        clientBootstrap.start();\n    }\n")),(0,l.kt)("p",null,"\u6211\u4eec\u901a\u8fc7\u8ddf\u8e2a\u4e00\u6b21reconnect\u7684\u6267\u884c\uff0c\u770b\u770b\u4e0a\u9762\u63a2\u7a76\u7684\u51e0\u4e2a\u7c7b\u4e4b\u95f4\u662f\u5982\u4f55\u534f\u4f5c\uff0c\u5b8c\u6210RMClient\u4e0eTC\u7684\u8fde\u63a5\u7684\uff08\u5b9e\u9645\u4e0a\u9996\u6b21\u8fde\u63a5\u53ef\u80fd\u53d1\u751f\u5728registerResource\u7684\u8fc7\u7a0b\u4e2d\uff0c\u4f46\u6d41\u7a0b\u4e00\u81f4\uff09\n",(0,l.kt)("img",{parentName:"p",src:"http://booogu.top/img/in-post/rmclient_connect_tcserver.png",alt:"RMClient\u4e0eTC Server\u8fde\u63a5\u8fc7\u7a0b"})),(0,l.kt)("p",null,"\u8fd9\u4e2a\u56fe\u4e2d\uff0c\u5927\u5bb6\u53ef\u4ee5\u91cd\u70b9\u5173\u6ce8\u8fd9\u51e0\u4e2a\u70b9\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"NettyClientChannelManager\u6267\u884c\u5177\u4f53AbstractNettyRemotingClient\u4e2d\uff0c\u83b7\u53d6NettyPoolKey\u7684\u56de\u8c03\u51fd\u6570\uff08getPoolKeyFunction()\uff09\uff1a\u5e94\u7528\u4fa7\u7684\u4e0d\u540cClient\uff08RMClient\u4e0eTMClient\uff09\uff0c\u5728\u521b\u5efaChannel\u65f6\u4f7f\u7528\u7684Key\u4e0d\u540c\uff0c\u4f7f",(0,l.kt)("strong",{parentName:"li"},"\u4e24\u8005\u5728\u91cd\u8fdeTC Server\u65f6\uff0c\u53d1\u9001\u7684\u6ce8\u518c\u6d88\u606f\u4e0d\u540c"),"\uff0c\u8fd9\u4e5f\u662f\u7531\u4e24\u8005\u5728Seata\u4e2d\u626e\u6f14\u7684\u89d2\u8272\u4e0d\u540c\u800c\u51b3\u5b9a\u7684\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"TMClient\uff1a\u626e\u6f14\u4e8b\u52a1\u7ba1\u7406\u5668\u89d2\u8272\uff0c\u521b\u5efaChannel\u65f6\uff0c\u4ec5\u5411TC\u53d1\u9001TM\u6ce8\u518c\u8bf7\u6c42\uff08RegisterTMRequest\uff09\u5373\u53ef"),(0,l.kt)("li",{parentName:"ul"},"RMClient\uff1a\u626e\u6f14\u8d44\u6e90\u7ba1\u7406\u5668\u89d2\u8272\uff0c\u9700\u8981\u7ba1\u7406\u5e94\u7528\u4fa7\u6240\u6709\u7684\u4e8b\u52a1\u8d44\u6e90\uff0c\u56e0\u6b64\u5728\u521b\u5efaChannel\u65f6\uff0c\u9700\u8981\u5728\u53d1\u9001RM\u6ce8\u518c\u8bf7\u6c42\uff08RegesterRMRequest\uff09\u524d\uff0c\u83b7\u53d6\u5e94\u7528\u4fa7\u6240\u6709\u4e8b\u52a1\u8d44\u6e90\uff08Resource\uff09\u4fe1\u606f\uff0c\u6ce8\u518c\u81f3TC Server"))),(0,l.kt)("li",{parentName:"ul"},"\u5728Channel\u5bf9\u8c61\u5de5\u5382NettyPoolableFactory\u7684makeObject\uff08\u5236\u9020Channel\uff09\u65b9\u6cd5\u4e2d\uff0c\u4f7f\u7528NettyPoolKey\u4e2d\u7684\u4e24\u9879\u4fe1\u606f\uff0c\u5b8c\u6210\u4e86\u4e24\u9879\u4efb\u52a1\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528NettyPoolKey\u7684address\u521b\u5efa\u65b0\u7684Channel"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528NettyPoolKey\u7684message\u4ee5\u53ca\u65b0\u7684Channel\u5411TC Server\u53d1\u9001\u6ce8\u518c\u8bf7\u6c42\uff0c\u8fd9\u5c31\u662fClient\u5411TC Server\u7684\u8fde\u63a5\uff08\u9996\u6b21\u6267\u884c\uff09\u6216\u91cd\u8fde\uff08\u975e\u9996\u6b21\uff0c\u7531\u5b9a\u65f6\u4efb\u52a1\u9a71\u52a8\u6267\u884c\uff09\u8bf7\u6c42")))),(0,l.kt)("p",null,"\u4ee5\u4e0a\u5185\u5bb9\uff0c\u5c31\u662f\u5173\u4e8eSeata\u5e94\u7528\u4fa7\u7684\u521d\u59cb\u5316\u53ca\u5176\u4e0eTC Server\u534f\u8c03\u5668\u4fa7\u5efa\u7acb\u8fde\u63a5\u7684\u5168\u8fc7\u7a0b\u5206\u6790\u3002"),(0,l.kt)("p",null,"\u66f4\u6df1\u5c42\u6b21\u7684\u7ec6\u8282\uff0c\u5efa\u8bae\u5927\u5bb6\u518d\u6839\u636e\u672c\u6587\u68b3\u7406\u7684\u8109\u7edc\u548c\u63d0\u5230\u7684\u51e0\u4e2a\u91cd\u70b9\uff0c\u7ec6\u81f4\u5730\u9605\u8bfb\u4e0b\u6e90\u7801\uff0c\u76f8\u4fe1\u5b9a\u4f1a\u6709\u66f4\u6df1\u5c42\u6b21\u7684\u7406\u89e3\u548c\u5168\u65b0\u7684\u6536\u83b7\uff01"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u540e\u8bb0\uff1a\u8003\u8651\u5230\u7bc7\u5e45\u4ee5\u53ca\u4fdd\u6301\u4e00\u7bc7\u6e90\u7801\u5206\u6790\u6587\u7ae0\u8f83\u4e3a\u5408\u9002\u7684\u4fe1\u606f\u91cf\uff0c\u672c\u6587\u524d\u8a00\u4e2d\u6240\u8bf4\u7684",(0,l.kt)("strong",{parentName:"p"},"\u914d\u7f6e\u3001\u6ce8\u518c\u7b49\u6a21\u5757\u534f\u4f5c\u914d\u5408"),"\u5e76\u6ca1\u6709\u5728\u6587\u7ae0\u4e2d\u5c55\u5f00\u548c\u4f53\u73b0\u3002",(0,l.kt)("br",null),"\n\u5728\u4e0b\u7bc7\u6e90\u7801\u5256\u6790\u4e2d\uff0c\u6211\u4f1a\u4ee5",(0,l.kt)("strong",{parentName:"p"},"\u914d\u7f6e\u4e2d\u5fc3"),"\u548c",(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u518c\u4e2d\u5fc3"),"\u4e3a\u91cd\u70b9\uff0c\u4e3a\u5927\u5bb6\u5206\u6790\uff0c\u5728RMClient/TM Client\u4e0eTC Server\u5efa\u7acb\u8fde\u63a5\u4e4b\u524d\uff0cSeata\u5e94\u7528\u4fa7\u662f",(0,l.kt)("strong",{parentName:"p"},"\u5982\u4f55\u901a\u8fc7\u670d\u52a1\u53d1\u73b0"),"\u627e\u5230TC Server\u3001\u5982\u4f55",(0,l.kt)("strong",{parentName:"p"},"\u4ece\u914d\u7f6e\u6a21\u5757\u83b7\u53d6\u5404\u79cd\u4fe1\u606f"),"\u7684\u3002")))}m.isMDXComponent=!0}}]);