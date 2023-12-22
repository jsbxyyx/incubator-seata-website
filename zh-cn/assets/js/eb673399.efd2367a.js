"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[13178],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>v});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),i=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=i(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=i(t),m=a,v=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(v,s(s({ref:n},c),{},{components:t})):r.createElement(v,s({ref:n},c))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[u]="string"==typeof e?e:a,s[1]=l;for(var i=2;i<o;i++)s[i]=t[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},77513:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var r=t(87462),a=(t(67294),t(3905));const o={hidden:!0,title:"Kubernetes\u90e8\u7f72",keywords:["kubernetes","ops"],description:"\u4f7f\u7528 Kubernetes \u90e8\u7f72 Seata Server",author:"helloworlde",date:new Date("2019-12-01T00:00:00.000Z")},s="\u4f7f\u7528 Kubernetes \u90e8\u7f72 Seata Server",l={unversionedId:"ops/deploy-by-kubernetes",id:"version-v1.3/ops/deploy-by-kubernetes",title:"Kubernetes\u90e8\u7f72",description:"\u4f7f\u7528 Kubernetes \u90e8\u7f72 Seata Server",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.3/ops/deploy-by-kubernetes.md",sourceDirName:"ops",slug:"/ops/deploy-by-kubernetes",permalink:"/zh-cn/docs/v1.3/ops/deploy-by-kubernetes",draft:!1,tags:[],version:"v1.3",frontMatter:{hidden:!0,title:"Kubernetes\u90e8\u7f72",keywords:["kubernetes","ops"],description:"\u4f7f\u7528 Kubernetes \u90e8\u7f72 Seata Server",author:"helloworlde",date:"2019-12-01T00:00:00.000Z"},sidebar:"docs",previous:{title:"\u4f7f\u7528 Docker compose \u5feb\u901f\u90e8\u7f72 Seata Server",permalink:"/zh-cn/docs/v1.3/ops/deploy-by-docker-compose-142"},next:{title:"Helm\u90e8\u7f72",permalink:"/zh-cn/docs/v1.3/ops/deploy-by-helm"}},p={},i=[{value:"\u5feb\u901f\u542f\u52a8",id:"\u5feb\u901f\u542f\u52a8",level:3},{value:"\u81ea\u5b9a\u4e49\u914d\u7f6e",id:"\u81ea\u5b9a\u4e49\u914d\u7f6e",level:2},{value:"\u73af\u5883\u53d8\u91cf",id:"\u73af\u5883\u53d8\u91cf",level:3},{value:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6",id:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6",level:3}],c={toc:i},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4f7f\u7528-kubernetes-\u90e8\u7f72-seata-server"},"\u4f7f\u7528 Kubernetes \u90e8\u7f72 Seata Server"),(0,a.kt)("h3",{id:"\u5feb\u901f\u542f\u52a8"},"\u5feb\u901f\u542f\u52a8"),(0,a.kt)("p",null,"\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},"seata-server.yaml")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Service\nmetadata:\n  name: seata-server\n  namespace: default\n  labels:\n    k8s-app: seata-server\nspec:\n  type: NodePort\n  ports:\n    - port: 8091\n      nodePort: 30091\n      protocol: TCP\n      name: http\n  selector:\n    k8s-app: seata-server\n\n---\n\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: seata-server\n  namespace: default\n  labels:\n    k8s-app: seata-server\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      k8s-app: seata-server\n  template:\n    metadata:\n      labels:\n        k8s-app: seata-server\n    spec:\n      containers:\n        - name: seata-server\n          image: docker.io/seataio/seata-server:latest\n          imagePullPolicy: IfNotPresent\n          env:\n            - name: SEATA_PORT\n              value: "8091"\n            - name: STORE_MODE\n              value: file\n          ports:\n            - name: http\n              containerPort: 8091\n              protocol: TCP\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl apply -f seata-server.yaml\n")),(0,a.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u914d\u7f6e"},"\u81ea\u5b9a\u4e49\u914d\u7f6e"),(0,a.kt)("h3",{id:"\u73af\u5883\u53d8\u91cf"},"\u73af\u5883\u53d8\u91cf"),(0,a.kt)("p",null,"\u652f\u6301\u7684\u73af\u5883\u53d8\u91cf\u548c Docker \u76f8\u540c\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"./deploy-by-docker"},"\u4f7f\u7528 Docker \u90e8\u7f72 Seata Server")),(0,a.kt)("h3",{id:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6"},"\u4f7f\u7528\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6"),(0,a.kt)("p",null,"\u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\u53ef\u4ee5\u901a\u8fc7\u6302\u8f7d\u6587\u4ef6\u6216\u4f7f\u7528 ConfigMap \u7684\u65b9\u5f0f\u5b9e\u73b0\uff0c\u6302\u8f7d\u540e\u9700\u8981\u901a\u8fc7\u6307\u5b9a ",(0,a.kt)("inlineCode",{parentName:"p"},"SEATA_CONFIG_NAME")," \u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\u4f4d\u7f6e\uff0c\u5e76\u4e14\u73af\u5883\u53d8\u91cf\u7684\u503c\u9700\u8981\u4ee5",(0,a.kt)("inlineCode",{parentName:"p"},"file:"),"\u5f00\u59cb, \u5982: ",(0,a.kt)("inlineCode",{parentName:"p"},"file:/root/seata-config/registry")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Deployment")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: seata-server\n  namespace: default\n  labels:\n    k8s-app: seata-server\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      k8s-app: seata-server\n  template:\n    metadata:\n      labels:\n        k8s-app: seata-server\n    spec:\n      containers:\n        - name: seata-server\n          image: docker.io/seataio/seata-server:latest\n          imagePullPolicy: IfNotPresent\n          env:\n            - name: SEATA_CONFIG_NAME\n              value: file:/root/seata-config/registry\n          ports:\n            - name: http\n              containerPort: 8091\n              protocol: TCP\n          volumeMounts:\n            - name: seata-config\n              mountPath: /root/seata-config\n      volumes:\n        - name: seata-config\n          configMap:\n            name: seata-server-config\n\n---\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: seata-server-config\ndata:\n  registry.conf: |\n    registry {\n        type = "nacos"\n        nacos {\n          application = "seata-server"\n          serverAddr = "192.168.199.2"\n        }\n    }\n    config {\n      type = "nacos"\n      nacos {\n        serverAddr = "192.168.199.2"\n        group = "SEATA_GROUP"\n      }\n    }\n')))}d.isMDXComponent=!0}}]);