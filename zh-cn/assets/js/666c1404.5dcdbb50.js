"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[616],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>T});var a=n(67294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",C={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,c=e.mdxType,r=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),p=c,T=d["".concat(i,".").concat(p)]||d[p]||C[p]||r;return n?a.createElement(T,o(o({ref:t},u),{},{components:n})):a.createElement(T,o({ref:t},u))}));function T(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:c,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},91247:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>C,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(87462),c=(n(67294),n(3905));const r={title:"\u963f\u91cc Seata \u65b0\u7248\u672c\u7ec8\u4e8e\u89e3\u51b3\u4e86 TCC \u6a21\u5f0f\u7684\u5e42\u7b49\u3001\u60ac\u6302\u548c\u7a7a\u56de\u6eda\u95ee\u9898",author:"\u6731\u664b\u541b",keywords:["Seata\u3001TCC\u3001\u5e42\u7b49\u3001\u60ac\u6302\u3001\u7a7a\u56de\u6eda"],description:"Seata \u5728 1.5.1 \u7248\u672c\u89e3\u51b3\u4e86 TCC \u6a21\u5f0f\u7684\u5e42\u7b49\u3001\u60ac\u6302\u548c\u7a7a\u56de\u6eda\u95ee\u9898\uff0c\u8fd9\u7bc7\u6587\u7ae0\u4e3b\u8981\u8bb2\u89e3 Seata \u662f\u600e\u4e48\u89e3\u51b3\u7684\u3002",date:"2022/06/25"},o=void 0,l={permalink:"/zh-cn/blog/seata-tcc-fence",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/seata-tcc-fence.md",title:"\u963f\u91cc Seata \u65b0\u7248\u672c\u7ec8\u4e8e\u89e3\u51b3\u4e86 TCC \u6a21\u5f0f\u7684\u5e42\u7b49\u3001\u60ac\u6302\u548c\u7a7a\u56de\u6eda\u95ee\u9898",description:"Seata \u5728 1.5.1 \u7248\u672c\u89e3\u51b3\u4e86 TCC \u6a21\u5f0f\u7684\u5e42\u7b49\u3001\u60ac\u6302\u548c\u7a7a\u56de\u6eda\u95ee\u9898\uff0c\u8fd9\u7bc7\u6587\u7ae0\u4e3b\u8981\u8bb2\u89e3 Seata \u662f\u600e\u4e48\u89e3\u51b3\u7684\u3002",date:"2022-06-25T00:00:00.000Z",formattedDate:"2022\u5e746\u670825\u65e5",tags:[],readingTime:13.21,hasTruncateMarker:!1,authors:[{name:"\u6731\u664b\u541b"}],frontMatter:{title:"\u963f\u91cc Seata \u65b0\u7248\u672c\u7ec8\u4e8e\u89e3\u51b3\u4e86 TCC \u6a21\u5f0f\u7684\u5e42\u7b49\u3001\u60ac\u6302\u548c\u7a7a\u56de\u6eda\u95ee\u9898",author:"\u6731\u664b\u541b",keywords:["Seata\u3001TCC\u3001\u5e42\u7b49\u3001\u60ac\u6302\u3001\u7a7a\u56de\u6eda"],description:"Seata \u5728 1.5.1 \u7248\u672c\u89e3\u51b3\u4e86 TCC \u6a21\u5f0f\u7684\u5e42\u7b49\u3001\u60ac\u6302\u548c\u7a7a\u56de\u6eda\u95ee\u9898\uff0c\u8fd9\u7bc7\u6587\u7ae0\u4e3b\u8981\u8bb2\u89e3 Seata \u662f\u600e\u4e48\u89e3\u51b3\u7684\u3002",date:"2022/06/25"},prevItem:{title:"Seata 1.5.2 \u91cd\u78c5\u53d1\u5e03\uff0c\u652f\u6301xid\u8d1f\u8f7d\u5747\u8861",permalink:"/zh-cn/blog/seata-1.5.2"},nextItem:{title:"\u6df1\u5ea6\u5256\u6790 Seata TCC \u6a21\u5f0f\uff08\u4e00\uff09",permalink:"/zh-cn/blog/seata-tcc"}},i={authorsImageUrls:[void 0]},s=[{value:"1 TCC \u56de\u987e",id:"1-tcc-\u56de\u987e",level:2},{value:"1.1 try-commit",id:"11-try-commit",level:3},{value:"1.2 try-cancel",id:"12-try-cancel",level:3},{value:"2 TCC \u4f18\u52bf",id:"2-tcc-\u4f18\u52bf",level:2},{value:"2.1 \u5f02\u6b65\u63d0\u4ea4",id:"21-\u5f02\u6b65\u63d0\u4ea4",level:3},{value:"2.2 \u540c\u5e93\u6a21\u5f0f",id:"22-\u540c\u5e93\u6a21\u5f0f",level:3},{value:"3 RM \u4ee3\u7801\u793a\u4f8b",id:"3-rm-\u4ee3\u7801\u793a\u4f8b",level:2},{value:"4 TCC \u5b58\u5728\u95ee\u9898",id:"4-tcc-\u5b58\u5728\u95ee\u9898",level:2},{value:"4.1 \u5e42\u7b49",id:"41-\u5e42\u7b49",level:3},{value:"4.2 \u7a7a\u56de\u6eda",id:"42-\u7a7a\u56de\u6eda",level:3},{value:"4.3 \u60ac\u6302",id:"43-\u60ac\u6302",level:3},{value:"5 \u603b\u7ed3",id:"5-\u603b\u7ed3",level:2}],u={toc:s},d="wrapper";function C(e){let{components:t,...r}=e;return(0,c.kt)(d,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"\u4eca\u5929\u6765\u804a\u4e00\u804a\u963f\u91cc\u5df4\u5df4 Seata \u65b0\u7248\u672c\uff081.5.1\uff09\u662f\u600e\u4e48\u89e3\u51b3 TCC \u6a21\u5f0f\u4e0b\u7684\u5e42\u7b49\u3001\u60ac\u6302\u548c\u7a7a\u56de\u6eda\u95ee\u9898\u7684\u3002"),(0,c.kt)("h2",{id:"1-tcc-\u56de\u987e"},"1 TCC \u56de\u987e"),(0,c.kt)("p",null,"TCC \u6a21\u5f0f\u662f\u6700\u7ecf\u5178\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u89e3\u51b3\u65b9\u6848\uff0c\u5b83\u5c06\u5206\u5e03\u5f0f\u4e8b\u52a1\u5206\u4e3a\u4e24\u4e2a\u9636\u6bb5\u6765\u6267\u884c\uff0ctry \u9636\u6bb5\u5bf9\u6bcf\u4e2a\u5206\u652f\u4e8b\u52a1\u8fdb\u884c\u9884\u7559\u8d44\u6e90\uff0c\u5982\u679c\u6240\u6709\u5206\u652f\u4e8b\u52a1\u90fd\u9884\u7559\u8d44\u6e90\u6210\u529f\uff0c\u5219\u8fdb\u5165 commit \u9636\u6bb5\u63d0\u4ea4\u5168\u5c40\u4e8b\u52a1\uff0c\u5982\u679c\u6709\u4e00\u4e2a\u8282\u70b9\u9884\u7559\u8d44\u6e90\u5931\u8d25\u5219\u8fdb\u5165 cancel \u9636\u6bb5\u56de\u6eda\u5168\u5c40\u4e8b\u52a1\u3002"),(0,c.kt)("p",null,"\u4ee5\u4f20\u7edf\u7684\u8ba2\u5355\u3001\u5e93\u5b58\u3001\u8d26\u6237\u670d\u52a1\u4e3a\u4f8b\uff0c\u5728 try \u9636\u6bb5\u5c1d\u8bd5\u9884\u7559\u8d44\u6e90\uff0c\u63d2\u5165\u8ba2\u5355\u3001\u6263\u51cf\u5e93\u5b58\u3001\u6263\u51cf\u91d1\u989d\uff0c\u8fd9\u4e09\u4e2a\u670d\u52a1\u90fd\u662f\u8981\u63d0\u4ea4\u672c\u5730\u4e8b\u52a1\u7684\uff0c\u8fd9\u91cc\u53ef\u4ee5\u628a\u8d44\u6e90\u8f6c\u5165\u4e2d\u95f4\u8868\u3002\u5728 commit \u9636\u6bb5\uff0c\u518d\u628a try \u9636\u6bb5\u9884\u7559\u7684\u8d44\u6e90\u8f6c\u5165\u6700\u7ec8\u8868\u3002\u800c\u5728 cancel \u9636\u6bb5\uff0c\u628a try \u9636\u6bb5\u9884\u7559\u7684\u8d44\u6e90\u8fdb\u884c\u91ca\u653e\uff0c\u6bd4\u5982\u628a\u8d26\u6237\u91d1\u989d\u8fd4\u56de\u7ed9\u5ba2\u6237\u7684\u8d26\u6237\u3002"),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1atry \u9636\u6bb5\u5fc5\u987b\u662f\u8981\u63d0\u4ea4\u672c\u5730\u4e8b\u52a1\u7684\uff0c\u6bd4\u5982\u6263\u51cf\u8ba2\u5355\u91d1\u989d\uff0c\u5fc5\u987b\u628a\u94b1\u4ece\u5ba2\u6237\u8d26\u6237\u6263\u6389\uff0c\u5982\u679c\u4e0d\u6263\u6389\uff0c\u5728 commit \u9636\u6bb5\u5ba2\u6237\u8d26\u6237\u94b1\u4e0d\u591f\u4e86\uff0c\u5c31\u4f1a\u51fa\u95ee\u9898\u3002")),(0,c.kt)("h3",{id:"11-try-commit"},"1.1 try-commit"),(0,c.kt)("p",null,"try \u9636\u6bb5\u9996\u5148\u8fdb\u884c\u9884\u7559\u8d44\u6e90\uff0c\u7136\u540e\u5728 commit \u9636\u6bb5\u6263\u9664\u8d44\u6e90\u3002\u5982\u4e0b\u56fe\uff1a"),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"fence-try-commit",src:n(73754).Z,width:"501",height:"681"})),(0,c.kt)("h3",{id:"12-try-cancel"},"1.2 try-cancel"),(0,c.kt)("p",null,"try \u9636\u6bb5\u9996\u5148\u8fdb\u884c\u9884\u7559\u8d44\u6e90\uff0c\u9884\u7559\u8d44\u6e90\u65f6\u6263\u51cf\u5e93\u5b58\u5931\u8d25\u5bfc\u81f4\u5168\u5c40\u4e8b\u52a1\u56de\u6eda\uff0c\u5728 cancel \u9636\u6bb5\u91ca\u653e\u8d44\u6e90\u3002\u5982\u4e0b\u56fe\uff1a"),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"fence-try-cancel",src:n(35840).Z,width:"501",height:"681"})),(0,c.kt)("h2",{id:"2-tcc-\u4f18\u52bf"},"2 TCC \u4f18\u52bf"),(0,c.kt)("p",null,"TCC \u6a21\u5f0f\u6700\u5927\u7684\u4f18\u52bf\u662f\u6548\u7387\u9ad8\u3002TCC \u6a21\u5f0f\u5728 try \u9636\u6bb5\u7684\u9501\u5b9a\u8d44\u6e90\u5e76\u4e0d\u662f\u771f\u6b63\u610f\u4e49\u4e0a\u7684\u9501\u5b9a\uff0c\u800c\u662f\u771f\u5b9e\u63d0\u4ea4\u4e86\u672c\u5730\u4e8b\u52a1\uff0c\u5c06\u8d44\u6e90\u9884\u7559\u5230\u4e2d\u95f4\u6001\uff0c\u5e76\u4e0d\u9700\u8981\u963b\u585e\u7b49\u5f85\uff0c\u56e0\u6b64\u6548\u7387\u6bd4\u5176\u4ed6\u6a21\u5f0f\u8981\u9ad8\u3002"),(0,c.kt)("p",null,"\u540c\u65f6 TCC \u6a21\u5f0f\u8fd8\u53ef\u4ee5\u8fdb\u884c\u5982\u4e0b\u4f18\u5316\uff1a"),(0,c.kt)("h3",{id:"21-\u5f02\u6b65\u63d0\u4ea4"},"2.1 \u5f02\u6b65\u63d0\u4ea4"),(0,c.kt)("p",null,"try \u9636\u6bb5\u6210\u529f\u540e\uff0c\u4e0d\u7acb\u5373\u8fdb\u5165 confirm/cancel \u9636\u6bb5\uff0c\u800c\u662f\u8ba4\u4e3a\u5168\u5c40\u4e8b\u52a1\u5df2\u7ecf\u7ed3\u675f\u4e86\uff0c\u542f\u52a8\u5b9a\u65f6\u4efb\u52a1\u6765\u5f02\u6b65\u6267\u884c confirm/cancel\uff0c\u6263\u51cf\u6216\u91ca\u653e\u8d44\u6e90\uff0c\u8fd9\u6837\u4f1a\u6709\u5f88\u5927\u7684\u6027\u80fd\u63d0\u5347\u3002"),(0,c.kt)("h3",{id:"22-\u540c\u5e93\u6a21\u5f0f"},"2.2 \u540c\u5e93\u6a21\u5f0f"),(0,c.kt)("p",null,"TCC \u6a21\u5f0f\u4e2d\u6709\u4e09\u4e2a\u89d2\u8272\uff1a"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"TM\uff1a\u7ba1\u7406\u5168\u5c40\u4e8b\u52a1\uff0c\u5305\u62ec\u5f00\u542f\u5168\u5c40\u4e8b\u52a1\uff0c\u63d0\u4ea4/\u56de\u6eda\u5168\u5c40\u4e8b\u52a1\uff1b"),(0,c.kt)("li",{parentName:"ul"},"RM\uff1a\u7ba1\u7406\u5206\u652f\u4e8b\u52a1\uff1b"),(0,c.kt)("li",{parentName:"ul"},"TC: \u7ba1\u7406\u5168\u5c40\u4e8b\u52a1\u548c\u5206\u652f\u4e8b\u52a1\u7684\u72b6\u6001\u3002")),(0,c.kt)("p",null,"\u4e0b\u56fe\u6765\u81ea Seata \u5b98\u7f51\uff1a"),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"fence-fiffrent-db",src:n(65228).Z,width:"853",height:"482"})),(0,c.kt)("p",null,"TM \u5f00\u542f\u5168\u5c40\u4e8b\u52a1\u65f6\uff0cRM \u9700\u8981\u5411 TC \u53d1\u9001\u6ce8\u518c\u6d88\u606f\uff0cTC \u4fdd\u5b58\u5206\u652f\u4e8b\u52a1\u7684\u72b6\u6001\u3002TM \u8bf7\u6c42\u63d0\u4ea4\u6216\u56de\u6eda\u65f6\uff0cTC \u9700\u8981\u5411 RM \u53d1\u9001\u63d0\u4ea4\u6216\u56de\u6eda\u6d88\u606f\u3002\u8fd9\u6837\u5305\u542b\u4e24\u4e2a\u4e2a\u5206\u652f\u4e8b\u52a1\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u4e2d\uff0cTC \u548c RM \u4e4b\u95f4\u6709\u56db\u6b21 RPC\u3002"),(0,c.kt)("p",null,"\u4f18\u5316\u540e\u7684\u6d41\u7a0b\u5982\u4e0b\u56fe\uff1a"),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"fence-same-db",src:n(7655).Z,width:"943",height:"442"})),(0,c.kt)("p",null,"TC \u4fdd\u5b58\u5168\u5c40\u4e8b\u52a1\u7684\u72b6\u6001\u3002TM \u5f00\u542f\u5168\u5c40\u4e8b\u52a1\u65f6\uff0cRM \u4e0d\u518d\u9700\u8981\u5411 TC \u53d1\u9001\u6ce8\u518c\u6d88\u606f\uff0c\u800c\u662f\u628a\u5206\u652f\u4e8b\u52a1\u72b6\u6001\u4fdd\u5b58\u5728\u4e86\u672c\u5730\u3002TM \u5411 TC \u53d1\u9001\u63d0\u4ea4\u6216\u56de\u6eda\u6d88\u606f\u540e\uff0cRM \u5f02\u6b65\u7ebf\u7a0b\u9996\u5148\u67e5\u51fa\u672c\u5730\u4fdd\u5b58\u7684\u672a\u63d0\u4ea4\u5206\u652f\u4e8b\u52a1\uff0c\u7136\u540e\u5411 TC \u53d1\u9001\u6d88\u606f\u83b7\u53d6\uff08\u672c\u5730\u5206\u652f\u4e8b\u52a1\uff09\u6240\u5728\u7684\u5168\u5c40\u4e8b\u52a1\u72b6\u6001\uff0c\u4ee5\u51b3\u5b9a\u662f\u63d0\u4ea4\u8fd8\u662f\u56de\u6eda\u672c\u5730\u4e8b\u52a1\u3002"),(0,c.kt)("p",null,"\u8fd9\u6837\u4f18\u5316\u540e\uff0cRPC \u6b21\u6570\u51cf\u5c11\u4e86 50%\uff0c\u6027\u80fd\u5927\u5e45\u63d0\u5347\u3002"),(0,c.kt)("h2",{id:"3-rm-\u4ee3\u7801\u793a\u4f8b"},"3 RM \u4ee3\u7801\u793a\u4f8b"),(0,c.kt)("p",null,"\u4ee5\u5e93\u5b58\u670d\u52a1\u4e3a\u4f8b\uff0cRM \u5e93\u5b58\u670d\u52a1\u63a5\u53e3\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-Java"},'@LocalTCC\npublic interface StorageService {\n\n    /**\n     * \u6263\u51cf\u5e93\u5b58\n     * @param xid \u5168\u5c40xid\n     * @param productId \u4ea7\u54c1id\n     * @param count \u6570\u91cf\n     * @return\n     */\n    @TwoPhaseBusinessAction(name = "storageApi", commitMethod = "commit", rollbackMethod = "rollback", useTCCFence = true)\n    boolean decrease(String xid, Long productId, Integer count);\n\n    /**\n     * \u63d0\u4ea4\u4e8b\u52a1\n     * @param actionContext\n     * @return\n     */\n    boolean commit(BusinessActionContext actionContext);\n\n    /**\n     * \u56de\u6eda\u4e8b\u52a1\n     * @param actionContext\n     * @return\n     */\n    boolean rollback(BusinessActionContext actionContext);\n}\n')),(0,c.kt)("p",null,"\u901a\u8fc7 @LocalTCC \u8fd9\u4e2a\u6ce8\u89e3\uff0cRM \u521d\u59cb\u5316\u7684\u65f6\u5019\u4f1a\u5411 TC \u6ce8\u518c\u4e00\u4e2a\u5206\u652f\u4e8b\u52a1\u3002\u5728 try \u9636\u6bb5\u7684\u65b9\u6cd5\uff08decrease\u65b9\u6cd5\uff09\u4e0a\u6709\u4e00\u4e2a @TwoPhaseBusinessAction \u6ce8\u89e3\uff0c\u8fd9\u91cc\u5b9a\u4e49\u4e86\u5206\u652f\u4e8b\u52a1\u7684 resourceId\uff0ccommit \u65b9\u6cd5\u548c cancel \u65b9\u6cd5\uff0cuseTCCFence \u8fd9\u4e2a\u5c5e\u6027\u4e0b\u4e00\u8282\u518d\u8bb2\u3002"),(0,c.kt)("h2",{id:"4-tcc-\u5b58\u5728\u95ee\u9898"},"4 TCC \u5b58\u5728\u95ee\u9898"),(0,c.kt)("p",null,"TCC \u6a21\u5f0f\u4e2d\u5b58\u5728\u7684\u4e09\u5927\u95ee\u9898\u662f\u5e42\u7b49\u3001\u60ac\u6302\u548c\u7a7a\u56de\u6eda\u3002\u5728 Seata1.5.1 \u7248\u672c\u4e2d\uff0c\u589e\u52a0\u4e86\u4e00\u5f20\u4e8b\u52a1\u63a7\u5236\u8868\uff0c\u8868\u540d\u662f tcc_fence_log \u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u3002\u800c\u5728\u4e0a\u4e00\u8282 @TwoPhaseBusinessAction \u6ce8\u89e3\u4e2d\u63d0\u5230\u7684\u5c5e\u6027 useTCCFence \u5c31\u662f\u6765\u6307\u5b9a\u662f\u5426\u5f00\u542f\u8fd9\u4e2a\u673a\u5236\uff0c\u8fd9\u4e2a\u5c5e\u6027\u503c\u9ed8\u8ba4\u662f false\u3002"),(0,c.kt)("p",null,"tcc_fence_log \u5efa\u8868\u8bed\u53e5\u5982\u4e0b\uff08MySQL \u8bed\u6cd5\uff09\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-SQL"},"CREATE TABLE IF NOT EXISTS `tcc_fence_log`\n(\n    `xid`           VARCHAR(128)  NOT NULL COMMENT 'global id',\n    `branch_id`     BIGINT        NOT NULL COMMENT 'branch id',\n    `action_name`   VARCHAR(64)   NOT NULL COMMENT 'action name',\n    `status`        TINYINT       NOT NULL COMMENT 'status(tried:1;committed:2;rollbacked:3;suspended:4)',\n    `gmt_create`    DATETIME(3)   NOT NULL COMMENT 'create time',\n    `gmt_modified`  DATETIME(3)   NOT NULL COMMENT 'update time',\n    PRIMARY KEY (`xid`, `branch_id`),\n    KEY `idx_gmt_modified` (`gmt_modified`),\n    KEY `idx_status` (`status`)\n) ENGINE = InnoDB\nDEFAULT CHARSET = utf8mb4;\n")),(0,c.kt)("h3",{id:"41-\u5e42\u7b49"},"4.1 \u5e42\u7b49"),(0,c.kt)("p",null,"\u5728 commit/cancel \u9636\u6bb5\uff0c\u56e0\u4e3a TC \u6ca1\u6709\u6536\u5230\u5206\u652f\u4e8b\u52a1\u7684\u54cd\u5e94\uff0c\u9700\u8981\u8fdb\u884c\u91cd\u8bd5\uff0c\u8fd9\u5c31\u8981\u5206\u652f\u4e8b\u52a1\u652f\u6301\u5e42\u7b49\u3002"),(0,c.kt)("p",null,"\u6211\u4eec\u770b\u4e00\u4e0b\u65b0\u7248\u672c\u662f\u600e\u4e48\u89e3\u51b3\u7684\u3002\u4e0b\u9762\u7684\u4ee3\u7801\u5728 TCCResourceManager \u7c7b\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-Java"},'@Override\npublic BranchStatus branchCommit(BranchType branchType, String xid, long branchId, String resourceId,\n                                 String applicationData) throws TransactionException {\n    TCCResource tccResource = (TCCResource)tccResourceCache.get(resourceId);\n    //\u7701\u7565\u5224\u65ad\n    Object targetTCCBean = tccResource.getTargetBean();\n    Method commitMethod = tccResource.getCommitMethod();\n    //\u7701\u7565\u5224\u65ad\n    try {\n        //BusinessActionContext\n        BusinessActionContext businessActionContext = getBusinessActionContext(xid, branchId, resourceId,\n            applicationData);\n        Object[] args = this.getTwoPhaseCommitArgs(tccResource, businessActionContext);\n        Object ret;\n        boolean result;\n        //\u6ce8\u89e3 useTCCFence \u5c5e\u6027\u662f\u5426\u8bbe\u7f6e\u4e3a true\n        if (Boolean.TRUE.equals(businessActionContext.getActionContext(Constants.USE_TCC_FENCE))) {\n            try {\n                result = TCCFenceHandler.commitFence(commitMethod, targetTCCBean, xid, branchId, args);\n            } catch (SkipCallbackWrapperException | UndeclaredThrowableException e) {\n                throw e.getCause();\n            }\n        } else {\n            //\u7701\u7565\u903b\u8f91\n        }\n        LOGGER.info("TCC resource commit result : {}, xid: {}, branchId: {}, resourceId: {}", result, xid, branchId, resourceId);\n        return result ? BranchStatus.PhaseTwo_Committed : BranchStatus.PhaseTwo_CommitFailed_Retryable;\n    } catch (Throwable t) {\n        //\u7701\u7565\n        return BranchStatus.PhaseTwo_CommitFailed_Retryable;\n    }\n}\n')),(0,c.kt)("p",null,"\u4e0a\u9762\u7684\u4ee3\u7801\u53ef\u4ee5\u770b\u5230\uff0c\u6267\u884c\u5206\u652f\u4e8b\u52a1\u63d0\u4ea4\u65b9\u6cd5\u65f6\uff0c\u9996\u5148\u5224\u65ad useTCCFence \u5c5e\u6027\u662f\u5426\u4e3a true\uff0c\u5982\u679c\u4e3a true\uff0c\u5219\u8d70 TCCFenceHandler \u7c7b\u4e2d\u7684 commitFence \u903b\u8f91\uff0c\u5426\u5219\u8d70\u666e\u901a\u63d0\u4ea4\u903b\u8f91\u3002"),(0,c.kt)("p",null,"TCCFenceHandler \u7c7b\u4e2d\u7684 commitFence \u65b9\u6cd5\u8c03\u7528\u4e86 TCCFenceHandler \u7c7b\u7684 commitFence \u65b9\u6cd5\uff0c\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-Java"},'public static boolean commitFence(Method commitMethod, Object targetTCCBean,\n                                  String xid, Long branchId, Object[] args) {\n    return transactionTemplate.execute(status -> {\n        try {\n            Connection conn = DataSourceUtils.getConnection(dataSource);\n            TCCFenceDO tccFenceDO = TCC_FENCE_DAO.queryTCCFenceDO(conn, xid, branchId);\n            if (tccFenceDO == null) {\n                throw new TCCFenceException(String.format("TCC fence record not exists, commit fence method failed. xid= %s, branchId= %s", xid, branchId),\n                        FrameworkErrorCode.RecordAlreadyExists);\n            }\n            if (TCCFenceConstant.STATUS_COMMITTED == tccFenceDO.getStatus()) {\n                LOGGER.info("Branch transaction has already committed before. idempotency rejected. xid: {}, branchId: {}, status: {}", xid, branchId, tccFenceDO.getStatus());\n                return true;\n            }\n            if (TCCFenceConstant.STATUS_ROLLBACKED == tccFenceDO.getStatus() || TCCFenceConstant.STATUS_SUSPENDED == tccFenceDO.getStatus()) {\n                if (LOGGER.isWarnEnabled()) {\n                    LOGGER.warn("Branch transaction status is unexpected. xid: {}, branchId: {}, status: {}", xid, branchId, tccFenceDO.getStatus());\n                }\n                return false;\n            }\n            return updateStatusAndInvokeTargetMethod(conn, commitMethod, targetTCCBean, xid, branchId, TCCFenceConstant.STATUS_COMMITTED, status, args);\n        } catch (Throwable t) {\n            status.setRollbackOnly();\n            throw new SkipCallbackWrapperException(t);\n        }\n    });\n}\n')),(0,c.kt)("p",null,"\u4ece\u4ee3\u7801\u4e2d\u53ef\u4ee5\u770b\u5230\uff0c\u63d0\u4ea4\u4e8b\u52a1\u65f6\u9996\u5148\u4f1a\u5224\u65ad tcc_fence_log \u8868\u4e2d\u662f\u5426\u5df2\u7ecf\u6709\u8bb0\u5f55\uff0c\u5982\u679c\u6709\u8bb0\u5f55\uff0c\u5219\u5224\u65ad\u4e8b\u52a1\u6267\u884c\u72b6\u6001\u5e76\u8fd4\u56de\u3002\u8fd9\u6837\u5982\u679c\u5224\u65ad\u5230\u4e8b\u52a1\u7684\u72b6\u6001\u5df2\u7ecf\u662f STATUS_COMMITTED\uff0c\u5c31\u4e0d\u4f1a\u518d\u6b21\u63d0\u4ea4\uff0c\u4fdd\u8bc1\u4e86\u5e42\u7b49\u3002\u5982\u679c tcc_fence_log \u8868\u4e2d\u6ca1\u6709\u8bb0\u5f55\uff0c\u5219\u63d2\u5165\u4e00\u6761\u8bb0\u5f55\uff0c\u4f9b\u540e\u9762\u91cd\u8bd5\u65f6\u5224\u65ad\u3002"),(0,c.kt)("p",null,"Rollback \u7684\u903b\u8f91\u8ddf commit \u7c7b\u4f3c\uff0c\u903b\u8f91\u5728\u7c7b TCCFenceHandler \u7684 rollbackFence \u65b9\u6cd5\u3002"),(0,c.kt)("h3",{id:"42-\u7a7a\u56de\u6eda"},"4.2 \u7a7a\u56de\u6eda"),(0,c.kt)("p",null,"\u5982\u4e0b\u56fe\uff0c\u8d26\u6237\u670d\u52a1\u662f\u4e24\u4e2a\u8282\u70b9\u7684\u96c6\u7fa4\uff0c\u5728 try \u9636\u6bb5\u8d26\u6237\u670d\u52a1 1 \u8fd9\u4e2a\u8282\u70b9\u53d1\u751f\u4e86\u6545\u969c\uff0ctry \u9636\u6bb5\u5728\u4e0d\u8003\u8651\u91cd\u8bd5\u7684\u60c5\u51b5\u4e0b\uff0c\u5168\u5c40\u4e8b\u52a1\u5fc5\u987b\u8981\u8d70\u5411\u7ed3\u675f\u72b6\u6001\uff0c\u8fd9\u6837\u5c31\u9700\u8981\u5728\u8d26\u6237\u670d\u52a1\u4e0a\u6267\u884c\u4e00\u6b21 cancel \u64cd\u4f5c\u3002"),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"fence-empty-rollback",src:n(79460).Z,width:"591",height:"681"})),(0,c.kt)("p",null,"Seata \u7684\u89e3\u51b3\u65b9\u6848\u662f\u5728 try \u9636\u6bb5 \u5f80 tcc_fence_log  \u8868\u63d2\u5165\u4e00\u6761\u8bb0\u5f55\uff0cstatus \u5b57\u6bb5\u503c\u662f STATUS_TRIED\uff0c\u5728 Rollback \u9636\u6bb5\u5224\u65ad\u8bb0\u5f55\u662f\u5426\u5b58\u5728\uff0c\u5982\u679c\u4e0d\u5b58\u5728\uff0c\u5219\u4e0d\u6267\u884c\u56de\u6eda\u64cd\u4f5c\u3002\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-Java"},'//TCCFenceHandler \u7c7b\npublic static Object prepareFence(String xid, Long branchId, String actionName, Callback<Object> targetCallback) {\n    return transactionTemplate.execute(status -> {\n        try {\n            Connection conn = DataSourceUtils.getConnection(dataSource);\n            boolean result = insertTCCFenceLog(conn, xid, branchId, actionName, TCCFenceConstant.STATUS_TRIED);\n            LOGGER.info("TCC fence prepare result: {}. xid: {}, branchId: {}", result, xid, branchId);\n            if (result) {\n                return targetCallback.execute();\n            } else {\n                throw new TCCFenceException(String.format("Insert tcc fence record error, prepare fence failed. xid= %s, branchId= %s", xid, branchId),\n                        FrameworkErrorCode.InsertRecordError);\n            }\n        } catch (TCCFenceException e) {\n            //\u7701\u7565\n        } catch (Throwable t) {\n            //\u7701\u7565\n        }\n    });\n}\n')),(0,c.kt)("p",null,"\u5728 Rollback \u9636\u6bb5\u7684\u5904\u7406\u903b\u8f91\u5982\u4e0b:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-Java"},'//TCCFenceHandler \u7c7b\npublic static boolean rollbackFence(Method rollbackMethod, Object targetTCCBean,\n                                    String xid, Long branchId, Object[] args, String actionName) {\n    return transactionTemplate.execute(status -> {\n        try {\n            Connection conn = DataSourceUtils.getConnection(dataSource);\n            TCCFenceDO tccFenceDO = TCC_FENCE_DAO.queryTCCFenceDO(conn, xid, branchId);\n            // non_rollback\n            if (tccFenceDO == null) {\n                //\u4e0d\u6267\u884c\u56de\u6eda\u903b\u8f91\n                return true;\n            } else {\n                if (TCCFenceConstant.STATUS_ROLLBACKED == tccFenceDO.getStatus() || TCCFenceConstant.STATUS_SUSPENDED == tccFenceDO.getStatus()) {\n                    LOGGER.info("Branch transaction had already rollbacked before, idempotency rejected. xid: {}, branchId: {}, status: {}", xid, branchId, tccFenceDO.getStatus());\n                    return true;\n                }\n                if (TCCFenceConstant.STATUS_COMMITTED == tccFenceDO.getStatus()) {\n                    if (LOGGER.isWarnEnabled()) {\n                        LOGGER.warn("Branch transaction status is unexpected. xid: {}, branchId: {}, status: {}", xid, branchId, tccFenceDO.getStatus());\n                    }\n                    return false;\n                }\n            }\n            return updateStatusAndInvokeTargetMethod(conn, rollbackMethod, targetTCCBean, xid, branchId, TCCFenceConstant.STATUS_ROLLBACKED, status, args);\n        } catch (Throwable t) {\n            status.setRollbackOnly();\n            throw new SkipCallbackWrapperException(t);\n        }\n    });\n}\n')),(0,c.kt)("p",null,"updateStatusAndInvokeTargetMethod \u65b9\u6cd5\u6267\u884c\u7684 sql \u5982\u4e0b\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-sql"},"update tcc_fence_log set status = ?, gmt_modified = ?\n    where xid = ? and  branch_id = ? and status = ? ;\n")),(0,c.kt)("p",null,"\u53ef\u89c1\u5c31\u662f\u628a tcc_fence_log \u8868\u8bb0\u5f55\u7684  status  \u5b57\u6bb5\u503c\u4ece STATUS_TRIED \u6539\u4e3a STATUS_ROLLBACKED\uff0c\u5982\u679c\u66f4\u65b0\u6210\u529f\uff0c\u5c31\u6267\u884c\u56de\u6eda\u903b\u8f91\u3002"),(0,c.kt)("h3",{id:"43-\u60ac\u6302"},"4.3 \u60ac\u6302"),(0,c.kt)("p",null,"\u60ac\u6302\u662f\u6307\u56e0\u4e3a\u7f51\u7edc\u95ee\u9898\uff0cRM \u5f00\u59cb\u6ca1\u6709\u6536\u5230 try \u6307\u4ee4\uff0c\u4f46\u662f\u6267\u884c\u4e86 Rollback \u540e RM \u53c8\u6536\u5230\u4e86 try \u6307\u4ee4\u5e76\u4e14\u9884\u7559\u8d44\u6e90\u6210\u529f\uff0c\u8fd9\u65f6\u5168\u5c40\u4e8b\u52a1\u5df2\u7ecf\u7ed3\u675f\uff0c\u6700\u7ec8\u5bfc\u81f4\u9884\u7559\u7684\u8d44\u6e90\u4e0d\u80fd\u91ca\u653e\u3002\u5982\u4e0b\u56fe\uff1a"),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"fence-suspend",src:n(57915).Z,width:"451",height:"193"})),(0,c.kt)("p",null,"Seata \u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u7684\u65b9\u6cd5\u662f\u6267\u884c Rollback \u65b9\u6cd5\u65f6\u5148\u5224\u65ad tcc_fence_log \u662f\u5426\u5b58\u5728\u5f53\u524d xid \u7684\u8bb0\u5f55\uff0c\u5982\u679c\u6ca1\u6709\u5219\u5411 tcc_fence_log \u8868\u63d2\u5165\u4e00\u6761\u8bb0\u5f55\uff0c\u72b6\u6001\u662f STATUS_SUSPENDED\uff0c\u5e76\u4e14\u4e0d\u518d\u6267\u884c\u56de\u6eda\u64cd\u4f5c\u3002\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-Java"},"public static boolean rollbackFence(Method rollbackMethod, Object targetTCCBean,\n                                    String xid, Long branchId, Object[] args, String actionName) {\n    return transactionTemplate.execute(status -> {\n        try {\n            Connection conn = DataSourceUtils.getConnection(dataSource);\n            TCCFenceDO tccFenceDO = TCC_FENCE_DAO.queryTCCFenceDO(conn, xid, branchId);\n            // non_rollback\n            if (tccFenceDO == null) {\n                //\u63d2\u5165\u9632\u60ac\u6302\u8bb0\u5f55\n                boolean result = insertTCCFenceLog(conn, xid, branchId, actionName, TCCFenceConstant.STATUS_SUSPENDED);\n                //\u7701\u7565\u903b\u8f91\n                return true;\n            } else {\n                //\u7701\u7565\u903b\u8f91\n            }\n            return updateStatusAndInvokeTargetMethod(conn, rollbackMethod, targetTCCBean, xid, branchId, TCCFenceConstant.STATUS_ROLLBACKED, status, args);\n        } catch (Throwable t) {\n            //\u7701\u7565\u903b\u8f91\n        }\n    });\n}\n")),(0,c.kt)("p",null,"\u800c\u540e\u9762\u6267\u884c try \u9636\u6bb5\u65b9\u6cd5\u65f6\u9996\u5148\u4f1a\u5411 tcc_fence_log \u8868\u63d2\u5165\u4e00\u6761\u5f53\u524d xid \u7684\u8bb0\u5f55\uff0c\u8fd9\u6837\u5c31\u9020\u6210\u4e86\u4e3b\u952e\u51b2\u7a81\u3002\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-Java"},'//TCCFenceHandler \u7c7b\npublic static Object prepareFence(String xid, Long branchId, String actionName, Callback<Object> targetCallback) {\n    return transactionTemplate.execute(status -> {\n        try {\n            Connection conn = DataSourceUtils.getConnection(dataSource);\n            boolean result = insertTCCFenceLog(conn, xid, branchId, actionName, TCCFenceConstant.STATUS_TRIED);\n            //\u7701\u7565\u903b\u8f91\n        } catch (TCCFenceException e) {\n            if (e.getErrcode() == FrameworkErrorCode.DuplicateKeyException) {\n                LOGGER.error("Branch transaction has already rollbacked before,prepare fence failed. xid= {},branchId = {}", xid, branchId);\n                addToLogCleanQueue(xid, branchId);\n            }\n            status.setRollbackOnly();\n            throw new SkipCallbackWrapperException(e);\n        } catch (Throwable t) {\n            //\u7701\u7565\n        }\n    });\n}\n')),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1aqueryTCCFenceDO \u65b9\u6cd5 sql \u4e2d\u4f7f\u7528\u4e86 for update\uff0c\u8fd9\u6837\u5c31\u4e0d\u7528\u62c5\u5fc3 Rollback \u65b9\u6cd5\u4e2d\u83b7\u53d6\u4e0d\u5230 tcc_fence_log \u8868\u8bb0\u5f55\u800c\u65e0\u6cd5\u5224\u65ad try \u9636\u6bb5\u672c\u5730\u4e8b\u52a1\u7684\u6267\u884c\u7ed3\u679c\u4e86\u3002")),(0,c.kt)("h2",{id:"5-\u603b\u7ed3"},"5 \u603b\u7ed3"),(0,c.kt)("p",null,"TCC \u6a21\u5f0f\u662f\u5206\u5e03\u5f0f\u4e8b\u52a1\u4e2d\u975e\u5e38\u91cd\u8981\u7684\u4e8b\u52a1\u6a21\u5f0f\uff0c\u4f46\u662f\u5e42\u7b49\u3001\u60ac\u6302\u548c\u7a7a\u56de\u6eda\u4e00\u76f4\u662f TCC \u6a21\u5f0f\u9700\u8981\u8003\u8651\u7684\u95ee\u9898\uff0cSeata \u6846\u67b6\u5728 1.5.1 \u7248\u672c\u5b8c\u7f8e\u89e3\u51b3\u4e86\u8fd9\u4e9b\u95ee\u9898\u3002"),(0,c.kt)("p",null,"\u5bf9 tcc_fence_log \u8868\u7684\u64cd\u4f5c\u4e5f\u9700\u8981\u8003\u8651\u4e8b\u52a1\u7684\u63a7\u5236\uff0cSeata \u4f7f\u7528\u4e86\u4ee3\u7406\u6570\u636e\u6e90\uff0c\u4f7f tcc_fence_log \u8868\u64cd\u4f5c\u548c RM \u4e1a\u52a1\u64cd\u4f5c\u5728\u540c\u4e00\u4e2a\u672c\u5730\u4e8b\u52a1\u4e2d\u6267\u884c\uff0c\u8fd9\u6837\u5c31\u80fd\u4fdd\u8bc1\u672c\u5730\u64cd\u4f5c\u548c\u5bf9 tcc_fence_log \u7684\u64cd\u4f5c\u540c\u65f6\u6210\u529f\u6216\u5931\u8d25\u3002"))}C.isMDXComponent=!0},79460:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/fence-empty-rollback-55e0c44f8e67d5df91c0f930860baa1f.png"},65228:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/fence-fiffrent-db-1f7a834639aa755d73fa2af435c4f042.png"},7655:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/fence-same-db-e6de622d66afae78fd17082782192b72.png"},57915:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/fence-suspend-054f87611ab16153c07bd28495c6902c.png"},35840:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/fence-try-cancel-eafbbb62134fe4e3ed61bdc2a47461b9.png"},73754:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/fence-try-commit-453b9a1e280200057448436ecd7eef27.png"}}]);