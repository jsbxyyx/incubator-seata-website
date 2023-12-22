"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[2333],{3905:(n,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>g});var a=t(67294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function r(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,a,o=function(n,e){if(null==n)return{};var t,a,o={},i=Object.keys(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var c=a.createContext({}),s=function(n){var e=a.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):r(r({},e),n)),t},u=function(n){var e=s(n.components);return a.createElement(c.Provider,{value:e},n.children)},p="mdxType",b={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(n,e){var t=n.components,o=n.mdxType,i=n.originalType,c=n.parentName,u=l(n,["components","mdxType","originalType","parentName"]),p=s(t),d=o,g=p["".concat(c,".").concat(d)]||p[d]||b[d]||i;return t?a.createElement(g,r(r({ref:e},u),{},{components:t})):a.createElement(g,r({ref:e},u))}));function g(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var i=t.length,r=new Array(i);r[0]=d;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=n,l[p]="string"==typeof n?n:o,r[1]=l;for(var s=2;s<i;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},59603:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>b,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=t(87462),o=(t(67294),t(3905));const i={title:"Api Guide",keywords:["Seata"],description:"Api Guide."},r="1. Overview",l={unversionedId:"user/api",id:"version-v1.8/user/api",title:"Api Guide",description:"Api Guide.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.8/user/api.md",sourceDirName:"user",slug:"/user/api",permalink:"/docs/v1.8/user/api",draft:!1,tags:[],version:"v1.8",frontMatter:{title:"Api Guide",keywords:["Seata"],description:"Api Guide."},sidebar:"docs",previous:{title:"Zookeeper Registry Center",permalink:"/docs/v1.8/user/registry/zookeeper"},next:{title:"Microservice Framework Guide",permalink:"/docs/v1.8/user/microservice"}},c={},s=[{value:"2.1 GlobalTransaction",id:"21-globaltransaction",level:2},{value:"2.2 GlobalTransactionContext",id:"22-globaltransactioncontext",level:2},{value:"2.3 TransactionalTemplate",id:"23-transactionaltemplate",level:2},{value:"3.1 RootContext",id:"31-rootcontext",level:2},{value:"1. The propagation of transaction context by remote invoke",id:"1-the-propagation-of-transaction-context-by-remote-invoke",level:3},{value:"2. Pause and recover of transaction",id:"2-pause-and-recover-of-transaction",level:3}],u={toc:s},p="wrapper";function b(n){let{components:e,...t}=n;return(0,o.kt)(p,(0,a.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"1-overview"},"1. Overview"),(0,o.kt)("p",null,"Seata API is devided into 2 categories: High-Level API and Low-Level API"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"High-Level API")," : Used for defining and controlling transaction boundary, and querying transaction status."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Low-Level API")," : Used for controlling the propagation of transaction context. ")),(0,o.kt)("h1",{id:"2-high-level-api"},"2. High-Level API"),(0,o.kt)("h2",{id:"21-globaltransaction"},"2.1 GlobalTransaction"),(0,o.kt)("p",null,"GlobalTransaction class contains methods about begin transaction, commit transaction, rollback transaction and get status of transaction and so on."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public interface GlobalTransaction {\n\n    /**\n     * Begin a global transaction(Use default transaction name and timeout)\n     */\n    void begin() throws TransactionException;\n\n    /**\n     * Begin a global transaction, and point out the timeout(use default transaction name)\n     */\n    void begin(int timeout) throws TransactionException;\n\n    /**\n     * Begin a global transaction, and point out the transaction name and timeout.\n     */\n    void begin(int timeout, String name) throws TransactionException;\n\n    /**\n     * Commit globally\n     */\n    void commit() throws TransactionException;\n\n    /**\n     * Rollback globally\n     */\n    void rollback() throws TransactionException;\n\n    /**\n     * Get the status of transaction\n     */\n    GlobalStatus getStatus() throws TransactionException;\n\n    /**\n     * Get the XID of transaction\n     */\n    String getXid();\n\n}\n")),(0,o.kt)("h2",{id:"22-globaltransactioncontext"},"2.2 GlobalTransactionContext"),(0,o.kt)("p",null,"GlobalTransaction instance can be retrieved from GlobalTransactionContext:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"\n    /**\n     * Retrieve current global transaction instance, if it doesn't exist, create a new one.\n     */\n    public static GlobalTransaction getCurrentOrCreate() {\n        GlobalTransaction tx = getCurrent();\n        if (tx == null) {\n            return createNew();\n        }\n        return tx;\n    }\n\n    /**\n     * Reload the global transaction identified by XID, the instance aren't allowed to begin transaction.\n     * This API is usually used for centralized handling of failed transaction later.\n     * For example, if it's time out to commit globally, the subsequent centralized processing steps are like this: reload the instance, from which retrieve the status, then recommit the transaction globally or not depends on the status value.\n     */\n    public static GlobalTransaction reload(String xid) throws TransactionException {\n        GlobalTransaction tx = new DefaultGlobalTransaction(xid, GlobalStatus.UnKnown, GlobalTransactionRole.Launcher) {\n            @Override\n            public void begin(int timeout, String name) throws TransactionException {\n                throw new IllegalStateException(\"Never BEGIN on a RELOADED GlobalTransaction. \");\n            }\n        };\n        return tx;\n    }\n")),(0,o.kt)("h2",{id:"23-transactionaltemplate"},"2.3 TransactionalTemplate"),(0,o.kt)("p",null,"TransactionalTemplate: Wrap a business service invoke into  a distributed transaction supported  service with preceding GlobalTransaction and GlobalTransactionContext API."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public class TransactionalTemplate {\n\n    public Object execute(TransactionalExecutor business) throws TransactionalExecutor.ExecutionException {\n\n        // 1. Get current global transaction instance or create a new one\n        GlobalTransaction tx = GlobalTransactionContext.getCurrentOrCreate();\n\n        // 2. Begin the global transaction\n        try {\n            tx.begin(business.timeout(), business.name());\n\n        } catch (TransactionException txe) {\n            // 2.1 Fail to begin\n            throw new TransactionalExecutor.ExecutionException(tx, txe,\n                TransactionalExecutor.Code.BeginFailure);\n\n        }\n\n        Object rs = null;\n        try {\n            // 3. invoke service\n            rs = business.execute();\n\n        } catch (Throwable ex) {\n\n            // Exception from business service invoke\n            try {\n                // Rollback globally\n                tx.rollback();\n\n                // 3.1 Global rollback success, throw original business exception\n                throw new TransactionalExecutor.ExecutionException(tx, TransactionalExecutor.Code.RollbackDone, ex);\n\n            } catch (TransactionException txe) {\n                // 3.2 Global rollback failed\n                throw new TransactionalExecutor.ExecutionException(tx, txe,\n                    TransactionalExecutor.Code.RollbackFailure, ex);\n\n            }\n\n        }\n\n        // 4. Commit globally\n        try {\n            tx.commit();\n\n        } catch (TransactionException txe) {\n            // 4.1 Global commit failed\n            throw new TransactionalExecutor.ExecutionException(tx, txe,\n                TransactionalExecutor.Code.CommitFailure);\n\n        }\n        return rs;\n    }\n\n}\n")),(0,o.kt)("p",null,"The exception of template method: ExecutionException"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    class ExecutionException extends Exception {\n\n        // Transaction instance threw exception\n        private GlobalTransaction transaction;\n\n        // Exception code:\n        // BeginFailure(Fail to begin transaction)\n        // CommitFailure(Fail to commit globally)\n        // RollbackFailure(Fail to rollback globally)\n        // RollbackDone(Global rollback success)\n        private Code code;\n\n        // Original exception triggered by rollback\n        private Throwable originalException;\n")),(0,o.kt)("p",null,"Outer calling logic try-catch the exception, and do something based on the exception code:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"BeginFailure")," (Fail to begin transaction): getCause() gets the framework exception of begin transaction, getOriginalException() is null."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"CommitFailure"),"(Fail to commit globally):  getCause() gets the framework exception of commit transaction, getOriginalException() is null."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"RollbackFailure")," (Fail to rollback globally)\uff1agetCause() gets the framework exception of rollback transaction\uff0cgetOriginalException() gets the original exception of business invoke."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"RollbackDone"),"(Global rollback success): getCause()  is null, getOriginalException() gets the original exception of business invoke.")),(0,o.kt)("h1",{id:"3-low-level-api"},"3. Low-Level API"),(0,o.kt)("h2",{id:"31-rootcontext"},"3.1 RootContext"),(0,o.kt)("p",null,"RootContext: It's responsible for maintaining XID during runtime of application."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'    /**\n     * Get the global XID of the current running application\n     */\n    public static String getXID() {\n        return CONTEXT_HOLDER.get(KEY_XID);\n    }\n\n    /**\n     * Bind the global XID to the current application runtime\n     */\n    public static void bind(String xid) {\n        if (LOGGER.isDebugEnabled()) {\n            LOGGER.debug("bind " + xid);\n        }\n        CONTEXT_HOLDER.put(KEY_XID, xid);\n    }\n\n    /**\n     * Unbind the global XID from the current application runtime, and return XID\n     */\n    public static String unbind() {\n        String xid = CONTEXT_HOLDER.remove(KEY_XID);\n        if (LOGGER.isDebugEnabled()) {\n            LOGGER.debug("unbind " + xid);\n        }\n        return xid;\n    }\n\n    /**\n     * Check if the current application runtime is in the global transaction context\n     */\n    public static boolean inGlobalTransaction() {\n        return CONTEXT_HOLDER.get(KEY_XID) != null;\n    }\n')),(0,o.kt)("p",null,"The implementation of High-Level API is based on maintaining XID in the RootContext."),(0,o.kt)("p",null,"Whether or not the operation of the current running application is in a global transaction context, just check if there is an XID in the RootContext."),(0,o.kt)("p",null,"The default implementation of RootContext is based on ThreadLocal, which is the XID is in the context of current thread."),(0,o.kt)("p",null,"Two classic scenes of Low-Level API :"),(0,o.kt)("h3",{id:"1-the-propagation-of-transaction-context-by-remote-invoke"},"1. The propagation of transaction context by remote invoke"),(0,o.kt)("p",null,"Retrieve current XID by remote invoke:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"String xid = RootContext.getXID();\n")),(0,o.kt)("p",null,"Propagating the XID to the provider of service by RPC, bind the XID to current RootContext before executing the business logic of provider."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"RootContext.bind(rpcXid);\n")),(0,o.kt)("h3",{id:"2-pause-and-recover-of-transaction"},"2. Pause and recover of transaction"),(0,o.kt)("p",null,"In a global transaction, if some business logic shouldn't be in the scope of the global transaction, unbind XID before invoke it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"String unbindXid = RootContext.unbind();\n")),(0,o.kt)("p",null,"Rebind the XID back after the execution of related business logic to achieve recovering the global transaction."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"RootContext.bind(unbindXid);\n")))}b.isMDXComponent=!0}}]);