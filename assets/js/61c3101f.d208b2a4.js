"use strict";(self.webpackChunkthorsten_suckow_homberg_de=self.webpackChunkthorsten_suckow_homberg_de||[]).push([[2884],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||o;return n?a.createElement(m,s(s({ref:t},u),{},{components:n})):a.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8407:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={title:"Fix: Ext JS Simlets and omitting the status code",authors:["thorstensuckow"],tags:["javascript","sencha","extjs"],enableComments:!0},s=void 0,i={permalink:"/blog/2022/04/15/extjs-simlets-and-omitting-the-status-code",editUrl:"https://github.com/thorstensuckow/thorsten.suckow-homberg.de/tree/main/blog/2022-04-15-extjs-simlets-and-omitting-the-status-code/index.md",source:"@site/blog/2022-04-15-extjs-simlets-and-omitting-the-status-code/index.md",title:"Fix: Ext JS Simlets and omitting the status code",description:"Fix: Ext JS Simlets and omitting the status code",date:"2022-04-15T00:00:00.000Z",formattedDate:"April 15, 2022",tags:[{label:"javascript",permalink:"/blog/tags/javascript"},{label:"sencha",permalink:"/blog/tags/sencha"},{label:"extjs",permalink:"/blog/tags/extjs"}],readingTime:2.505,hasTruncateMarker:!1,authors:[{name:"Thorsten Suckow-Homberg",url:"https://thorsten.suckow-homberg.de",imageURL:"https://avatars.githubusercontent.com/u/823135",key:"thorstensuckow"}],frontMatter:{title:"Fix: Ext JS Simlets and omitting the status code",authors:["thorstensuckow"],tags:["javascript","sencha","extjs"],enableComments:!0},prevItem:{title:"Releasing conjoon 1.0.0-beta.0",permalink:"/blog/2022/06/07/releasing-conjoon-1-0-0-beta"}},l={authorsImageUrls:[void 0]},c=[{value:"Fix: Ext JS Simlets and omitting the status code",id:"fix-ext-js-simlets-and-omitting-the-status-code",level:2},{value:"The issue",id:"the-issue",level:3},{value:"The fix",id:"the-fix",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"fix-ext-js-simlets-and-omitting-the-status-code"},"Fix: Ext JS Simlets and omitting the status code"),(0,r.kt)("p",null,"I recently stumbled upon a mean error that was hard to track down. Luckily, the issue was caused by a simple carelessness regarding fully configured response-objects of Simlets used in the dev-environment of the conjoon-project and did not require any large refactoring."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"The original issue is tracked here: ",(0,r.kt)("a",{parentName:"em",href:"https://github.com/conjoon/extjs-app-webmail/issues/196"},"https://github.com/conjoon/extjs-app-webmail/issues/196"))),(0,r.kt)("h3",{id:"the-issue"},"The issue"),(0,r.kt)("p",null,"The problem was related to batch-operations in Ext JS: When any operation of the batch fails, the pauseonexception-setting is considered and further processing of any remaining operation is halted. The user then has the option to retry the last failed operation, continuing with the remaining operations if this was finally successful.\nHowever, retrying some of the failed operations gave the following error:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/2000/0*_Lq8JlNRBBEutuGY.png",alt:null})),(0,r.kt)("p",null,"The operation that failed \u2014 and which is now about to be retried \u2014 was already destroyed by Ext JS internal garbage-collector."),(0,r.kt)("h3",{id:"the-fix"},"The fix"),(0,r.kt)("p",null,"It took some time to find out that the operation was destroyed and that some of the properties required for re-running it were already de-referenced. This took me to the internals of response-handling of XMLHttpRequests of Ext JS and finally to the code where the HTTP status of a request was inspected. Take note that I\u2019m mainly developing with Simlets to avoid costly network roundtrips to any backend."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"It is mandatory for the Simlets to properly treat mocked backend-errors by also providing the appropriate status-code."))),(0,r.kt)("p",null,"It was assumed that simply setting the success-property in any of the delete/put/...-methods of a simlet treating the request would later on be parsed internally; setting the status-code of the response automatically to anything other than 200. That is not the case. It is mandatory for the Simlets to properly treat mocked backend-errors by also providing the appropriate status-code."),(0,r.kt)("p",null,"The flaw was too often overseen since the status-field was ",(0,r.kt)("strong",{parentName:"p"},"not set,")," as the following code examples show (examples represent code in any of the delete/post/put/...-methods of a Json-Simlet; see Ext.ux.ajax.Simlet):"),(0,r.kt)("p",null,"The following leaves the ret.status-property undefined:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"    //....\n    const ret = {};\n    ret.responseText = Ext.JSON.encode({\n        success: false\n    });\n    return ret;\n")),(0,r.kt)("p",null,"\u2026 while the following re-uses the predefined value of 200 for the status, even if success=false should indicate that the request could not be processed as expected:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"    const \n        me = this,\n        ret = {};\n\n    Ext.Array.forEach(me.responseProps, function (prop) {\n        if (prop in me) {\n            ret[prop] = me[prop];\n        }\n    });\n\n    ret.responseText = Ext.JSON.encode({\n        success: false\n    });\n\n    return ret;\n")),(0,r.kt)("p",null,"In both cases, Ext.data.request.Ajax would parse the response and its status in the onComplete-method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"    result = Ext.data.request.Ajax.parseStatus(xhr.status, xhr);\n")),(0,r.kt)("p",null,"An undefined status would cause the response to be treated as ",(0,r.kt)("strong",{parentName:"p"},"not successful")," (example 1), while anything other than undefined would be parsed and interpreted according to its HTTP-status representative (successful: 200; failure: 404, 500 etc.)."),(0,r.kt)("p",null,"ExtJS would assume that a successful operation is not needed anymore; it is automatically destroyed then. This was unexpected behavior in this case, since the code marked the operation as a failure, but not via the status-code, which was required."))}d.isMDXComponent=!0}}]);