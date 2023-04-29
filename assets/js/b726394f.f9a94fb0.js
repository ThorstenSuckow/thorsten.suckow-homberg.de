"use strict";(self.webpackChunkthorsten_suckow_homberg_de=self.webpackChunkthorsten_suckow_homberg_de||[]).push([[8236],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>u});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(o),f=r,u=m["".concat(s,".").concat(f)]||m[f]||p[f]||a;return o?n.createElement(u,i(i({ref:t},c),{},{components:o})):n.createElement(u,i({ref:t},c))}));function u(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<a;d++)i[d]=o[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}f.displayName="MDXCreateElement"},4461:(e,t,o)=>{o.d(t,{x:()=>r});var n=o(7294);function r(){return n.createElement("div",{style:{width:"100%",textAlign:"right"}},n.createElement("a",{style:{textDecoration:"underline"},onClick:()=>history.go(-1),href:"#"},"Back"))}},6739:(e,t,o)=>{o.d(t,{A:()=>a,E:()=>r});var n=o(7294);function r(e){let{name:t,pp:o}=e;const r=`/docs/bibliography#${t.toLowerCase()}`;return n.createElement("a",{href:r},"[",n.createElement("span",{className:"bibRef"},"\ud83d\udcd6",t.toUpperCase()),o?`, ${o.includes("-")?"pp":"p"}. ${o}`:"","]")}function a(e){let{name:t,file:o}=e;Object.entries({sd:"softwaredesign",sa:"softwarearchitecture",cs:"computerscience"}).some((e=>{let[t,n]=e;if(o.startsWith(`${t}.`))return o=o.replace(`${t}.`,`${n}.`),!0}));const r=`/docs/toolbox/${o}`;return n.createElement("a",{href:r,className:"glosRef"},t)}},4581:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var n=o(7462),r=(o(7294),o(3905)),a=o(4461),i=o(6739);const l={title:"Domain Model"},s="Domain Model (DDD)",d={unversionedId:"toolbox/ddd.domainmodel",id:"toolbox/ddd.domainmodel",title:"Domain Model",description:"A Domain Model is an abstraction of a (part of a)  in a software system.",source:"@site/docs/toolbox/ddd.domainmodel.mdx",sourceDirName:"toolbox",slug:"/toolbox/ddd.domainmodel",permalink:"/docs/toolbox/ddd.domainmodel",draft:!1,editUrl:"https://github.com/thorstensuckow/thorsten.suckow-homberg.de/tree/main/docs/toolbox/ddd.domainmodel.mdx",tags:[],version:"current",lastUpdatedBy:"Thorsten Suckow-Homberg",lastUpdatedAt:1682794262,formattedLastUpdatedAt:"Apr 29, 2023",frontMatter:{title:"Domain Model"},sidebar:"toolbox",previous:{title:"Domain Layer",permalink:"/docs/toolbox/ddd.domainlayer"},next:{title:"Entity",permalink:"/docs/toolbox/softwaredesign.entity"}},c={},m=[],p={toc:m},f="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(f,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"domain-model-ddd"},"Domain Model (DDD)"),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"Domain Model")," is an abstraction of a (part of a) ",(0,r.kt)(i.A,{name:"Domain",file:"sd.domain",mdxType:"GlosRef"})," in a software system."),(0,r.kt)("p",null,"Its implementation targets the realization of (complex) use cases inherent to the given ",(0,r.kt)("strong",{parentName:"p"},"Domain"),", by incorporating processes,\nworkflows, actors and data specific to the ",(0,r.kt)("strong",{parentName:"p"},"Domain"),"."),(0,r.kt)("p",null,"Often, planning and designing a ",(0,r.kt)("strong",{parentName:"p"},"Domain Model")," focuses on a ",(0,r.kt)(i.A,{name:"Core Domain",file:"ddd.coredomain",mdxType:"GlosRef"})," that was exposed with the help of  ",(0,r.kt)(i.A,{name:"Domain Driven Design",file:"ddd.domaindrivendesign",mdxType:"GlosRef"}),"."),(0,r.kt)("p",null,"When designing ",(0,r.kt)("strong",{parentName:"p"},"Domain Models"),", it is suggested to align logic, constraints and invariants close to the implementation of such a ",(0,r.kt)("strong",{parentName:"p"},"Domain Model"),": This is what ",(0,r.kt)("em",{parentName:"p"},"Fowler at. al.")," call a ",(0,r.kt)("strong",{parentName:"p"},"Rich Domain Model"),", that is ",(0,r.kt)("em",{parentName:"p"},'"better for complex logic"')," ",(0,r.kt)(i.E,{name:"PPOEA",pp:"117",mdxType:"BibRef"}),".\nConversely, ",(0,r.kt)("strong",{parentName:"p"},"Domain Models")," that contain little or no domain logic have a risk to become ",(0,r.kt)(i.A,{name:"Anemic Domain Models",file:"ddd.anemicdomainmodel",mdxType:"GlosRef"}),", e.g. models that serve mainly as OO-representations for relational database models."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},'"A Domain Model creates a web of interconnected objects, where each object represents some meaningful individual, ',"[...]",'".')," ",(0,r.kt)(i.E,{name:"PPOEA",pp:"116",mdxType:"BibRef"}))),(0,r.kt)(a.x,{mdxType:"BackButton"}))}u.isMDXComponent=!0}}]);