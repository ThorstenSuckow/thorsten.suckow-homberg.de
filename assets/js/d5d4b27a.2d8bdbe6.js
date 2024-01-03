"use strict";(self.webpackChunkthorsten_suckow_homberg_de=self.webpackChunkthorsten_suckow_homberg_de||[]).push([[9768],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,g=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4461:(e,t,n)=>{n.d(t,{x:()=>a});var r=n(7294);function a(){return r.createElement("div",{style:{width:"100%",textAlign:"right"}},r.createElement("a",{style:{textDecoration:"underline"},onClick:()=>history.go(-1),href:"#"},"Back"))}},552:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var r=n(7462),a=(n(7294),n(3905)),o=n(4461);const i={title:"Ubiquitous Language"},s="Ubiquitous Language (DDD)",u={unversionedId:"toolbox/ddd.ubiquitouslanguage",id:"toolbox/ddd.ubiquitouslanguage",title:"Ubiquitous Language",description:"A Ubiquitous Language is a vocabulary established by (software development) teams that provides semantic contexts",source:"@site/docs/toolbox/ddd.ubiquitouslanguage.mdx",sourceDirName:"toolbox",slug:"/toolbox/ddd.ubiquitouslanguage",permalink:"/docs/toolbox/ddd.ubiquitouslanguage",draft:!1,editUrl:"https://github.com/thorstensuckow/thorsten.suckow-homberg.de/tree/main/docs/toolbox/ddd.ubiquitouslanguage.mdx",tags:[],version:"current",lastUpdatedBy:"Thorsten Suckow-Homberg",lastUpdatedAt:1704306250,formattedLastUpdatedAt:"Jan 3, 2024",frontMatter:{title:"Ubiquitous Language"},sidebar:"toolbox",previous:{title:"Table Data Gateway",permalink:"/docs/toolbox/softwaredesign.tabledatagateway"},next:{title:"Use Case",permalink:"/docs/toolbox/uml.usecase"}},l={},c=[],p={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ubiquitous-language-ddd"},"Ubiquitous Language (DDD)"),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"Ubiquitous Language")," is a vocabulary established by (software development) teams that provides semantic contexts\nof the ",(0,a.kt)("a",{parentName:"p",href:"softwaredesign.domain"},(0,a.kt)("strong",{parentName:"a"},"Domain"))," a software system represents (or parts of represents)."),(0,a.kt)("p",null,"Establishing such a language helps with aligning the development to a ",(0,a.kt)("a",{parentName:"p",href:"ddd.domaindrivendesign"},"model of the ",(0,a.kt)("strong",{parentName:"a"},"Domain")),"\nwith a vocabulary specific to this ",(0,a.kt)("strong",{parentName:"p"},"Domain"),", in such a way that all participants of the development process\n(stakeholders, developers, domain experts) have the same understanding of this vocabulary (thus, the ",(0,a.kt)("strong",{parentName:"p"},"Domain"),").\nOnce established, the ",(0,a.kt)("strong",{parentName:"p"},"Ubiquitous Language")," is constantly used throughout the project by all participants."),(0,a.kt)("p",null,"It is used for eliminating communication errors and misunderstandings due to the (often complex)\nterms of the targeted ",(0,a.kt)("strong",{parentName:"p"},"Domain")," and ease the transition of such a ",(0,a.kt)("strong",{parentName:"p"},"Domain")," into a software system."),(0,a.kt)(o.x,{mdxType:"BackButton"}))}m.isMDXComponent=!0}}]);