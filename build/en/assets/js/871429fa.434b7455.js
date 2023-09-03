"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[7211],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(r),d=a,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},987:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const l={title:"Label an Issue",keywords:["Seata"],description:"Label an Issue."},i="Label an Issue",o={unversionedId:"developers/committer-guide/label-an-issue-guide_dev",id:"developers/committer-guide/label-an-issue-guide_dev",title:"Label an Issue",description:"Label an Issue.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/developers/committer-guide/label-an-issue-guide_dev.md",sourceDirName:"developers/committer-guide",slug:"/developers/committer-guide/label-an-issue-guide_dev",permalink:"/en/docs/developers/committer-guide/label-an-issue-guide_dev",draft:!1,tags:[],version:"current",frontMatter:{title:"Label an Issue",keywords:["Seata"],description:"Label an Issue."},sidebar:"developers",previous:{title:"Contributing to Seata",permalink:"/en/docs/developers/guide_dev"},next:{title:"Website Guide",permalink:"/en/docs/developers/committer-guide/website-guide_dev"}},s={},u=[],p={toc:u},c="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"label-an-issue"},"Label an Issue"),(0,a.kt)("p",null,"If you are handling an issue, remember to ",(0,a.kt)("strong",{parentName:"p"},"mark the issue cearly with one or more labels")," whenever you think it's meaningful. With labels on, other developers can easily recognize problems, classify them or track progress. "),(0,a.kt)("p",null,"For issues or pull requests that need coding and further version release to fix, you should always ",(0,a.kt)("strong",{parentName:"p"},"mark it with a ",(0,a.kt)("a",{parentName:"strong",href:"https://github.com/seata/seata/milestones"},"milestone")),". "),(0,a.kt)("p",null,"Some frequently used labels:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Help Wanted"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"help wanted"),(0,a.kt)("li",{parentName:"ul"},"good first issue"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Prority"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"priority/blocker"),(0,a.kt)("li",{parentName:"ul"},"priority/high"),(0,a.kt)("li",{parentName:"ul"},"priority/low"),(0,a.kt)("li",{parentName:"ul"},"priority/normal"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Status"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"status/need-triage"),(0,a.kt)("li",{parentName:"ul"},"status/DO-NOT-MERGE"),(0,a.kt)("li",{parentName:"ul"},"status/READY-TO-MERGE"),(0,a.kt)("li",{parentName:"ul"},"status/invalid "),(0,a.kt)("li",{parentName:"ul"},"status/wontfix"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Type"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"type/bug"),(0,a.kt)("li",{parentName:"ul"},"type/documentation"),(0,a.kt)("li",{parentName:"ul"},"type/enhancement"),(0,a.kt)("li",{parentName:"ul"},"type/feature")))))}m.isMDXComponent=!0}}]);