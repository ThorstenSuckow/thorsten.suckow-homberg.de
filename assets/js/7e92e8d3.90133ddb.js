"use strict";(self.webpackChunkthorsten_suckow_homberg_de=self.webpackChunkthorsten_suckow_homberg_de||[]).push([[7420],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),m=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=m(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=m(n),h=a,u=d["".concat(l,".").concat(h)]||d[h]||p[h]||r;return n?o.createElement(u,i(i({ref:t},c),{},{components:n})):o.createElement(u,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var m=2;m<r;m++)i[m]=n[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4461:(e,t,n)=>{n.d(t,{x:()=>a});var o=n(7294);function a(){return o.createElement("div",{style:{width:"100%",textAlign:"right"}},o.createElement("a",{style:{textDecoration:"underline"},onClick:()=>history.go(-1),href:"#"},"Back"))}},6739:(e,t,n)=>{n.d(t,{A:()=>r,E:()=>a});var o=n(7294);function a(e){let{name:t,pp:n}=e;const a=`/docs/bibliography#${t.toLowerCase()}`;return o.createElement("a",{href:a},"[",o.createElement("span",{className:"bibRef"},"\ud83d\udcd6",t),n?`, ${n.includes("-")?"pp":"p"}. ${n}`:"","]")}function r(e){let{name:t,file:n}=e;Object.entries({sd:"softwaredesign",sa:"softwarearchitecture",cs:"computerscience"}).some((e=>{let[t,o]=e;if(n.startsWith(`${t}.`))return n=n.replace(`${t}.`,`${o}.`),!0}));const a=`/docs/toolbox/${n}`;return o.createElement("a",{href:a,className:"glosRef"},t)}},7492:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>m,toc:()=>d});var o=n(7462),a=(n(7294),n(3905)),r=n(4461),i=n(6739);const s={title:"Anemic Domain Model"},l="Anemic Domain Model (DDD)",m={unversionedId:"toolbox/ddd.anemicdomainmodel",id:"toolbox/ddd.anemicdomainmodel",title:"Anemic Domain Model",description:"An Anemic Domain Model is a domain model that contains little or no business logic, and whose  mainly consists of getters and setters. Specification and invariants regarding the domain logic are controlled through layers and upstream components.",source:"@site/docs/toolbox/ddd.anemicdomainmodel.mdx",sourceDirName:"toolbox",slug:"/toolbox/ddd.anemicdomainmodel",permalink:"/docs/toolbox/ddd.anemicdomainmodel",draft:!1,editUrl:"https://github.com/thorstensuckow/thorsten.suckow-homberg.de/tree/main/docs/toolbox/ddd.anemicdomainmodel.mdx",tags:[],version:"current",lastUpdatedBy:"Thorsten Suckow-Homberg",lastUpdatedAt:1726076420,formattedLastUpdatedAt:"Sep 11, 2024",frontMatter:{title:"Anemic Domain Model"},sidebar:"toolbox",previous:{title:"Aliasing",permalink:"/docs/toolbox/computerscience.aliasing"},next:{title:"Application Layer",permalink:"/docs/toolbox/softwarearchitecture.applicationlayer"}},c={},d=[],p={toc:d},h="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"anemic-domain-model-ddd"},"Anemic Domain Model (DDD)"),(0,a.kt)("p",null,"An ",(0,a.kt)("strong",{parentName:"p"},"Anemic Domain Model")," is a domain model that contains little or no business logic, and whose ",(0,a.kt)(i.A,{name:"Aggregates",file:"ddd.aggregate",mdxType:"GlosRef"})," mainly consists of getters and setters. Specification and invariants regarding the domain logic are controlled through layers and upstream components."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Anemic Domain Model")," is considered to be an ",(0,a.kt)("em",{parentName:"p"},"Anti Pattern")," to ",(0,a.kt)(i.A,{name:"Domain Model",file:"ddd.domainmodel",mdxType:"GlosRef"}),"."),(0,a.kt)("p",null,"In ",(0,a.kt)(i.A,{name:"DDD",file:"ddd.domaindrivendesign",mdxType:"GlosRef"}),", the ",(0,a.kt)("strong",{parentName:"p"},"Domain Layer")," has ",(0,a.kt)("strong",{parentName:"p"},"Domain models")," that contain ",(0,a.kt)(i.A,{name:"Aggregates",file:"ddd.aggregate",mdxType:"GlosRef"}),", which represent conceptual whole objects of the context of a domain. They should also contain behavior and logic intrinsic to the concept they abstract, within their applicable boundaries. Without this, the meaning and the role of such domain models is diluted, since ",(0,a.kt)("strong",{parentName:"p"},"Domain Logic")," is then often to be found in the various layers that ",(0,a.kt)("em",{parentName:"p"},"access")," or ",(0,a.kt)("em",{parentName:"p"},"control")," such ",(0,a.kt)("strong",{parentName:"p"},"Anemic Domain Models"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},'"',"[...]","you realize that there is hardly any behavior on these objects, making them little more than bags of getters and setters. ","[...]",' Instead there are a set of service objects which capture all the domain logic, carrying out all the computation and updating the model objects with the results. These services live on top of the domain model and use the domain model for data."')," ",(0,a.kt)("a",{parentName:"p",href:"https://martinfowler.com/bliki/AnemicDomainModel.html"},"Martin Fowler, Anemic Domain Model"))),(0,a.kt)("admonition",{title:"What causes Anemic Domain Models",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Anemic Domain Models")," happen when there is high technical and little domain knowledge. Designing a ",(0,a.kt)("strong",{parentName:"p"},"Domain Model")," closely with ",(0,a.kt)("strong",{parentName:"p"},"Doman Experts")," can help with identifying ",(0,a.kt)("strong",{parentName:"p"},"Domain Logic")," that should be made available within the ",(0,a.kt)("strong",{parentName:"p"},"Domain Model"),", and that should be part of ",(0,a.kt)("strong",{parentName:"p"},"Aggregates"),"."),(0,a.kt)("p",{parentName:"admonition"},"In ",(0,a.kt)(i.E,{name:"IDDD",pp:"14-19",mdxType:"BibRef"}),", Vaughn Vernon gives a brief overview why ",(0,a.kt)("strong",{parentName:"p"},"Anemic Domain Models")," happen, and why they are seldomly recognized as a problem, by arguing that developers are mainly used to implement data structures upfront, then behavior. He also mentions historic reasons why ",(0,a.kt)("strong",{parentName:"p"},"Anemic Domain Models")," are not identified as problematic: Due to the popularity of shared systems in the late 1990's, serializing data for communication  became an important aspect of software design. Often, systems where designed with a strong focus on the portability of data, rather than its behavior given the domain context it should exist in.")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"references"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://martinfowler.com/bliki/AnemicDomainModel.html"},"Martin Fowler: Anemic Domain Model"))),(0,a.kt)(r.x,{mdxType:"BackButton"}))}u.isMDXComponent=!0}}]);