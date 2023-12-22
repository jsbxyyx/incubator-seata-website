"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[46117],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),h=n,g=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return r?a.createElement(g,o(o({ref:t},p),{},{components:r})):a.createElement(g,o({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},37364:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const i={title:"Transaction Group and High Availability",keywords:["Seata group"],description:"Seata transaction group and high availability best practice"},o="Transaction Grouping and High Availability",c={unversionedId:"user/txgroup/transaction-group-and-ha",id:"version-v1.4/user/txgroup/transaction-group-and-ha",title:"Transaction Group and High Availability",description:"Seata transaction group and high availability best practice",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.4/user/txgroup/transaction-group-and-ha.md",sourceDirName:"user/txgroup",slug:"/user/txgroup/transaction-group-and-ha",permalink:"/docs/v1.4/user/txgroup/transaction-group-and-ha",draft:!1,tags:[],version:"v1.4",frontMatter:{title:"Transaction Group and High Availability",keywords:["Seata group"],description:"Seata transaction group and high availability best practice"},sidebar:"docs",previous:{title:"Transaction Group Introduction",permalink:"/docs/v1.4/user/txgroup/transaction-group"},next:{title:"Introduction",permalink:"/docs/v1.4/user/configuration/"}},s={},l=[{value:"Best Practice 1: TC&#39;s Cross-Data Center Disaster Recovery",id:"best-practice-1-tcs-cross-data-center-disaster-recovery",level:2},{value:"Best Practice 2: Multiple Applications Access in a Single Environment",id:"best-practice-2-multiple-applications-access-in-a-single-environment",level:2},{value:"Best Practice 3: Fine-grained Control of the Client",id:"best-practice-3-fine-grained-control-of-the-client",level:2},{value:"Best Practice 4: Seata&#39;s Pre-production and Production Isolation",id:"best-practice-4-seatas-pre-production-and-production-isolation",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...i}=e;return(0,n.kt)(u,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"transaction-grouping-and-high-availability"},"Transaction Grouping and High Availability"),(0,n.kt)("h2",{id:"best-practice-1-tcs-cross-data-center-disaster-recovery"},"Best Practice 1: TC's Cross-Data Center Disaster Recovery"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Assume that the TC cluster is deployed in two data centers: guangzhou (primary) and shanghai (backup), each with two instances."),(0,n.kt)("li",{parentName:"ul"},"A complete microservices architecture project: projectA."),(0,n.kt)("li",{parentName:"ul"},"projectA contains microservices: serviceA, serviceB, serviceC, and serviceD.")),(0,n.kt)("p",null,"Among them, the transaction grouping tx-service-group of all microservices in projectA is set to: projectA. Under normal circumstances, projectA uses the TC cluster in guangzhou (primary)."),(0,n.kt)("p",null,"So under normal circumstances, the client-side configuration is as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"seata.tx-service-group=projectA\nseata.service.vgroup-mapping.projectA=Guangzhou\n")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Cross-Data Center Disaster Recovery Normal Diagram",src:r(85503).Z,width:"812",height:"453"})),(0,n.kt)("p",null,"If at this time the guangzhou cluster group is completely down or projectA is temporarily unable to communicate with the Guangzhou data center due to network issues, then we can change the Guangzhou cluster group in the configuration center to Shanghai, as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"seata.service.vgroup-mapping.projectA=Shanghai\n")),(0,n.kt)("p",null,"And push it to each microservice, completing the dynamic switch of the TC cluster for the entire projectA."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Cross-Data Center Disaster Recovery Backup Cluster",src:r(22199).Z,width:"812",height:"453"})),(0,n.kt)("h2",{id:"best-practice-2-multiple-applications-access-in-a-single-environment"},"Best Practice 2: Multiple Applications Access in a Single Environment"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Assume that there is a complete seata cluster in the development environment (or staging/production)."),(0,n.kt)("li",{parentName:"ul"},"The seata cluster serves different microservices architecture projects: projectA, projectB, projectC."),(0,n.kt)("li",{parentName:"ul"},"projectA, projectB, and projectC are relatively independent of each other.")),(0,n.kt)("p",null,"We group the six instances in the seata cluster in pairs to serve projectA, projectB, and projectC respectively. At this time, the configuration of the seata-server side is as follows (taking nacos registry as an example):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'registry {\n  type = "nacos"\n  loadBalance = "RandomLoadBalance"\n  loadBalanceVirtualNodes = 10\n\n  nacos {\n    application = "seata-server"\n    serverAddr = "127.0.0.1:8848"\n    group = "DEFAULT_GROUP"\n    namespace = "8f11aeb1-5042-461b-b88b-d47a7f7e01c0"\n    # Similarly, configure seata-server instances in other groups: project-b-group / project-c-group\n    cluster = "project-a-group"\n    username = "username"\n    password = "password"\n  }\n}\n')),(0,n.kt)("p",null,"The client-side configuration is as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"seata.tx-service-group=projectA\n# Similarly, configure projectB and projectC: project-b-group / project-c-group\nseata.service.vgroup-mapping.projectA=project-a-group\n")),(0,n.kt)("p",null,"After completing the configuration and starting, the TC dedicated to the corresponding transaction group serves its application. The overall deployment diagram is as follows:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Multiple Applications Access in a Single Environment",src:r(18760).Z,width:"1360",height:"455"})),(0,n.kt)("h2",{id:"best-practice-3-fine-grained-control-of-the-client"},"Best Practice 3: Fine-grained Control of the Client"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Assume that there is a seata cluster, with the Guangzhou data center instances running on high-performance machines and the Shanghai cluster running on lower-performance machines."),(0,n.kt)("li",{parentName:"ul"},"There is an existing microservices architecture project projectA, which includes microservices ServiceA, ServiceB, ServiceC, and ServiceD."),(0,n.kt)("li",{parentName:"ul"},"ServiceD has lower traffic, while the other microservices have higher traffic.")),(0,n.kt)("p",null,"So at this point, we can divert the ServiceD microservice to the Shanghai cluster and allocate high-performance servers to other microservices with higher traffic (conversely, if there is a microservice with particularly high traffic, we can also allocate a higher-performance cluster specifically for this microservice and direct the client's virtual group to that cluster, with the ultimate goal of ensuring availability during peak traffic)."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Fine-grained control of clients",src:r(39682).Z,width:"812",height:"453"})),(0,n.kt)("h2",{id:"best-practice-4-seatas-pre-production-and-production-isolation"},"Best Practice 4: Seata's Pre-production and Production Isolation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"In most cases, the pre-production environment and the production environment will use the same set of databases. Based on this condition, the pre-production TC cluster and the production TC cluster must use the same database to ensure the effectiveness of global transactions (i.e., the production TC cluster and the pre-production TC cluster use the same lock table, but have different branch_table and global_table)"),(0,n.kt)("li",{parentName:"ul"},"We will refer to the branch table and global table used in production as: global_table and branch_table; and in pre-production as: global_table_pre and branch_table_pre"),(0,n.kt)("li",{parentName:"ul"},"The lock_table is shared between pre-production and production")),(0,n.kt)("p",null,"At this point, the file.conf configuration of the seata-server is as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'store {\n  mode = "db"\n\n  db {\n    datasource = "druid"\n    dbType = "mysql"\n    driverClassName = "com.mysql.jdbc.Driver"\n    url = "jdbc:mysql://127.0.0.1:3306/seata"\n    user = "username"\n    password = "password"\n    minConn = 5\n    maxConn = 100\n    globalTable = "global_table"  ----\x3e pre-production is "global_table_pre"\n    branchTable = "branch_table"  ----\x3e pre-production is "branch_table_pre"\n    lockTable = "lock_table"\n    queryLimit = 100\n    maxWait = 5000\n  }\n}\n')),(0,n.kt)("p",null,"The registry.conf configuration of the seata-server is as follows (using nacos as an example):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'registry {\n  type = "nacos"\n  loadBalance = "RandomLoadBalance"\n  loadBalanceVirtualNodes = 10\n\n  nacos {\n    application = "seata-server"\n    serverAddr = "127.0.0.1:8848"\n    group = "DEFAULT_GROUP"\n    namespace = "8f11aeb1-5042-461b-b88b-d47a7f7e01c0"\n    cluster = "pre-product"  --\x3e similarly, production is "product"\n    username = "username"\n    password = "password"\n  }\n}\n')),(0,n.kt)("p",null,"The deployment diagram is as follows:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Pre-production and production isolation",src:r(75583).Z,width:"907",height:"596"})),(0,n.kt)("p",null,"Furthermore, you can combine and use the above four best practices according to your actual production situation."))}d.isMDXComponent=!0},39682:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/txgroup-client-controll-77862cb1429597eb3ec1d69608679ba4.png"},18760:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/txgroup-multiApplication-501b8688ae442af2ce6a4db7abb3520d.png"},85503:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/txgroup-normal-698f00d26b96414c46c7c27729e61134.png"},75583:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/txgroup-segregation-of-pre-and-product-892ff6085c837f3283b0e702deb96d7c.png"},22199:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/txgroup-switch-to-sh-fbe3bf2c89a16e158fef5d582655c3f9.png"}}]);