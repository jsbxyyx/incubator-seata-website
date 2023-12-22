"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[43698],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=s,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function f(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,a=new Array(o);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:s,a[1]=i;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9047:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(87462),s=(r(67294),r(3905));const o={title:"SQL Restrictions",keywords:["Seata"],description:"Seata SQL restrictions"},a="SQL Restrictions",i={unversionedId:"user/sqlreference/sql-restrictions",id:"version-v1.6/user/sqlreference/sql-restrictions",title:"SQL Restrictions",description:"Seata SQL restrictions",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.6/user/sqlreference/sql-restrictions.md",sourceDirName:"user/sqlreference",slug:"/user/sqlreference/sql-restrictions",permalink:"/docs/v1.6/user/sqlreference/sql-restrictions",draft:!1,tags:[],version:"v1.6",frontMatter:{title:"SQL Restrictions",keywords:["Seata"],description:"Seata SQL restrictions"},sidebar:"docs",previous:{title:"Data Source support",permalink:"/docs/v1.6/user/datasource"},next:{title:"DML",permalink:"/docs/v1.6/user/sqlreference/dml"}},c={},u=[{value:"Usage restrictions",id:"usage-restrictions",level:3}],l={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,s.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"sql-restrictions"},"SQL Restrictions"),(0,s.kt)("p",null,"Seata transactions currently support some functions of the DML syntax of INSERT, UPDATE, and DELETE. These types have been verified by the Seata open source community. The scope of SQL support is still expanding, and it is recommended to use it within the limits of this article. If you are interested in helping the community support more types of SQL, please submit a PR."),(0,s.kt)("h3",{id:"usage-restrictions"},"Usage restrictions"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"SQL nesting is not supported"),(0,s.kt)("li",{parentName:"ul"},"Does not support multi-table complex SQL (Since version 1.6.0, MySQL supports UPDATE JOIN statement, ",(0,s.kt)("a",{href:"./dml"},"Please see details"),")"),(0,s.kt)("li",{parentName:"ul"},"Stored procedures and triggers are not supported"),(0,s.kt)("li",{parentName:"ul"},"Some databases do not support batch update, but support batch when using MySQL, Mariadb, PostgreSQL9.6+ as the database, the batch update method is as follows, taking Java as an example")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'    // use JdbcTemplate\n    public void batchUpdate() {\n        jdbcTemplate.batchUpdate(\n            "update storage_tbl set count = count -1 where id = 1",\n            "update storage_tbl set count = count -1 where id = 2"\n        );\n    }\n\n    // use Statement\n    public void batchUpdateTwo() {\n        statement.addBatch("update storage_tbl set count = count -1 where id = 1");\n        statement.addBatch("update storage_tbl set count = count -1 where id = 2");\n        statement.executeBatch();\n    }\n')))}d.isMDXComponent=!0}}]);