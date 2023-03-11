"use strict";(self.webpackChunkthorsten_suckow_homberg_de=self.webpackChunkthorsten_suckow_homberg_de||[]).push([[9470],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4461:(e,t,r)=>{r.d(t,{x:()=>o});var n=r(7294);function o(){return n.createElement("div",{style:{width:"100%",textAlign:"right"}},n.createElement("a",{style:{textDecoration:"underline"},onClick:()=>history.go(-1),href:"#"},"Back"))}},7174:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var n=r(7462),o=(r(7294),r(3905)),a=r(4461);const i={title:"Repository"},s="Repository (Software Design)",p={unversionedId:"Glossary/softwaredesign.repository",id:"Glossary/softwaredesign.repository",title:"Repository",description:"A Repository provides an interface for persisting and retrieving data, while hiding the implementation details of",source:"@site/docs/Glossary/softwaredesign.repository.mdx",sourceDirName:"Glossary",slug:"/Glossary/softwaredesign.repository",permalink:"/docs/Glossary/softwaredesign.repository",draft:!1,editUrl:"https://github.com/thorstensuckow/thorsten.suckow-homberg.de/tree/main/docs/Glossary/softwaredesign.repository.mdx",tags:[],version:"current",lastUpdatedBy:"ThorstenSuckow",lastUpdatedAt:1678536847,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{title:"Repository"},sidebar:"addendum",previous:{title:"Liskov Substitution Principle",permalink:"/docs/Glossary/softwaredesign.liskovsubstitutionprinciple"},next:{title:"Separation of Concerns",permalink:"/docs/Glossary/softwaredesign.separationofconcerns"}},c={},l=[],d={toc:l},u="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"repository-software-design"},"Repository (Software Design)"),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"Repository")," provides an interface for persisting and retrieving data, while hiding the implementation details of\nthe underlying infrastructure responsible for carrying out such operations, e.g. database access mechanisms."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Repositories")," are considered particularly important in ",(0,o.kt)("a",{parentName:"p",href:"ddd.domaindrivendesign"},(0,o.kt)("strong",{parentName:"a"},"Domain Driven Design")),", where the interface of a ",(0,o.kt)("strong",{parentName:"p"},"Repository"),'\n"communicate(s) design decisions about object access" and "decouple(s) application and domain design from persistence technology".\n',(0,o.kt)("a",{parentName:"p",href:"/docs/bibliography#ddd"},(0,o.kt)("strong",{parentName:"a"},"[DDD]"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'"A ',(0,o.kt)("strong",{parentName:"p"},"Repository"),' mediates between the domain and data mapping layers, acting like an in-memory domain object collection." ',(0,o.kt)("a",{parentName:"p",href:"/docs/bibliography#poeaa"},(0,o.kt)("strong",{parentName:"a"},"[PoEAA]")))),(0,o.kt)(a.x,{mdxType:"BackButton"}))}f.isMDXComponent=!0}}]);