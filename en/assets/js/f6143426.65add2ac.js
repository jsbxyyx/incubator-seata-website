"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[37715],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),g=o,b=u["".concat(l,".").concat(g)]||u[g]||d[g]||i;return n?r.createElement(b,a(a({ref:t},p),{},{components:n})):r.createElement(b,a({ref:t},p))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},60273:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const i={title:"Microservice Framework Guide",keywords:["Seata"],description:"Microservice Framework Guide."},a="Transaction Context",c={unversionedId:"user/microservice",id:"version-v1.6/user/microservice",title:"Microservice Framework Guide",description:"Microservice Framework Guide.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.6/user/microservice.md",sourceDirName:"user",slug:"/user/microservice",permalink:"/en/docs/v1.6/user/microservice",draft:!1,tags:[],version:"v1.6",frontMatter:{title:"Microservice Framework Guide",keywords:["Seata"],description:"Microservice Framework Guide."},sidebar:"docs",previous:{title:"Api Guide",permalink:"/en/docs/v1.6/user/api"},next:{title:"ORM Framework Support",permalink:"/en/docs/v1.6/user/ormframework"}},l={},s=[],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"transaction-context"},"Transaction Context"),(0,o.kt)("p",null,"Transaction context of Seata is managed by RootContext."),(0,o.kt)("p",null,"When application begins a global transaction, RootContext will bind the XID of the transaction automatically, at the end of transaction(commit or rollback), RootContext will unbind the XID automatically."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// Bind XID\nRootContext.bind(xid);\n\n// Unbind XID\nString xid = RootContext.unbind();\n")),(0,o.kt)("p",null,"Application retrieve the global transaction XID through the API of RootContext."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// Retrieve XID\nString xid = RootContext.getXID();\n")),(0,o.kt)("p",null,"Whether application is running a global transaction, just check if an XID bound to RootContext."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"    public static boolean inGlobalTransaction() {\n        return CONTEXT_HOLDER.get(KEY_XID) != null;\n    }\n")),(0,o.kt)("h1",{id:"transaction-propagation"},"Transaction propagation"),(0,o.kt)("p",null,"The mechanism of the global transaction of Seata is the propagation of transaction context,  primarily, it's the propagation way of XID in runtime."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"1. The propagation of transaction in the service")),(0,o.kt)("p",null,"By default, RootContext is based on ThreadLocal, which is the XID is bound in the context of thread."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public class ThreadLocalContextCore implements ContextCore {\n\n    private ThreadLocal<Map<String, String>> threadLocal = new ThreadLocal<Map<String, String>>() {\n        @Override\n        protected Map<String, String> initialValue() {\n            return new HashMap<String, String>();\n        }\n\n    };\n\n    @Override\n    public String put(String key, String value) {\n        return threadLocal.get().put(key, value);\n    }\n\n    @Override\n    public String get(String key) {\n        return threadLocal.get().get(key);\n    }\n\n    @Override\n    public String remove(String key) {\n        return threadLocal.get().remove(key);\n    }\n}\n")),(0,o.kt)("p",null,"So the inner XID of service is tracing by the same thread naturally, do nothing to propagate the transaction by default."),(0,o.kt)("p",null,"If it hopes to hung up the transaction context, implement it by the API of RootContext:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// Hung up(pause)\nString xid = RootContext.unbind();\n\n// TODO: Logic running out of the global transaction scope\n\n// recover the global transaction\nRootContext.bind(xid);\n\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"2. Transactional propagation across service calls")),(0,o.kt)("p",null,"It's easy to know by the basic idea preceding:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The transaction propagation across service calls, essentially, propagate the XID via service call to service provider, and bind it to RootContext.")),(0,o.kt)("p",null,"As long as it can be done, Seata can support any microservice framework in theory."),(0,o.kt)("h1",{id:"interpretation-of-supporting-dubbo"},"Interpretation of supporting Dubbo"),(0,o.kt)("p",null,"Let's interpret the inner support for Dubbo RPC to illustrate how Seata supports a specific microservice framework in follows:"),(0,o.kt)("p",null,"We use the org.apache.dubbo.rpc.Filter of Dubbo to support propagation of transaction."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'/**\n * The type Transaction propagation filter.\n */\n@Activate(group = { Constants.PROVIDER, Constants.CONSUMER }, order = 100)\npublic class TransactionPropagationFilter implements Filter {\n\n    private static final Logger LOGGER = LoggerFactory.getLogger(TransactionPropagationFilter.class);\n\n    @Override\n    public Result invoke(Invoker<?> invoker, Invocation invocation) throws RpcException {\n        String xid = RootContext.getXID(); // Get XID of current transaction\n        String rpcXid = RpcContext.getContext().getAttachment(RootContext.KEY_XID); // Acquire the XID from RPC invoke\n        if (LOGGER.isDebugEnabled()) {\n            LOGGER.debug("xid in RootContext[" + xid + "] xid in RpcContext[" + rpcXid + "]");\n        }\n        boolean bind = false;\n        if (xid != null) { // Consumer\uff1aPut XID into the attachment of RPC\n            RpcContext.getContext().setAttachment(RootContext.KEY_XID, xid);\n        } else {\n            if (rpcXid != null) { // Provider\uff1aBind the XID propagated by RPC to current runtime\n                RootContext.bind(rpcXid);\n                bind = true;\n                if (LOGGER.isDebugEnabled()) {\n                    LOGGER.debug("bind[" + rpcXid + "] to RootContext");\n                }\n            }\n        }\n        try {\n            return invoker.invoke(invocation); // Business method invoke\n\n        } finally {\n            if (bind) { // Provider\uff1aClean up XID after invoke\n                String unbindXid = RootContext.unbind();\n                if (LOGGER.isDebugEnabled()) {\n                    LOGGER.debug("unbind[" + unbindXid + "] from RootContext");\n                }\n                if (!rpcXid.equalsIgnoreCase(unbindXid)) {\n                    LOGGER.warn("xid in change during RPC from " + rpcXid + " to " + unbindXid);\n                    if (unbindXid != null) { // if there is new transaction begin, can\'t do clean up\n                        RootContext.bind(unbindXid);\n                        LOGGER.warn("bind [" + unbindXid + "] back to RootContext");\n                    }\n                }\n            }\n        }\n    }\n}\n')))}d.isMDXComponent=!0}}]);