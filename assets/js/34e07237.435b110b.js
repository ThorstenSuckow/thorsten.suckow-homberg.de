"use strict";(self.webpackChunkthorsten_suckow_homberg_de=self.webpackChunkthorsten_suckow_homberg_de||[]).push([[3453],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(r),d=n,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return r?a.createElement(f,i(i({ref:t},l),{},{components:r})):a.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:n,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4461:(e,t,r)=>{r.d(t,{x:()=>n});var a=r(7294);function n(){return a.createElement("div",{style:{width:"100%",textAlign:"right"}},a.createElement("a",{style:{textDecoration:"underline"},onClick:()=>history.go(-1),href:"#"},"Back"))}},6739:(e,t,r)=>{r.d(t,{A:()=>o,E:()=>n});var a=r(7294);function n(e){let{name:t,pp:r}=e;const n=`/docs/bibliography#${t.toLowerCase()}`;return a.createElement("a",{href:n},"[",a.createElement("span",{className:"bibRef"},"\ud83d\udcd6",t),r?`, ${r.includes("-")?"pp":"p"}. ${r}`:"","]")}function o(e){let{name:t,file:r}=e;Object.entries({sd:"softwaredesign",sa:"softwarearchitecture",cs:"computerscience"}).some((e=>{let[t,a]=e;if(r.startsWith(`${t}.`))return r=r.replace(`${t}.`,`${a}.`),!0}));const n=`/docs/toolbox/${r}`;return a.createElement("a",{href:n,className:"glosRef"},t)}},8206:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>p,metadata:()=>c,toc:()=>m});var a=r(7462),n=(r(7294),r(3905)),o=r(4461),i=r(6739);const p={title:"Application Layer"},s="Application Layer (Software Architecture)",c={unversionedId:"toolbox/softwarearchitecture.applicationlayer",id:"toolbox/softwarearchitecture.applicationlayer",title:"Application Layer",description:"The Application Layer is an abstract functional division in a  that serves as the interface between the client and layers beneath the Application Layer, primarily the software system's Domain and Infrastructure Layer.",source:"@site/docs/toolbox/softwarearchitecture.applicationlayer.mdx",sourceDirName:"toolbox",slug:"/toolbox/softwarearchitecture.applicationlayer",permalink:"/docs/toolbox/softwarearchitecture.applicationlayer",draft:!1,editUrl:"https://github.com/thorstensuckow/thorsten.suckow-homberg.de/tree/main/docs/toolbox/softwarearchitecture.applicationlayer.mdx",tags:[],version:"current",lastUpdatedBy:"Thorsten Suckow-Homberg",lastUpdatedAt:1706003039,formattedLastUpdatedAt:"Jan 23, 2024",frontMatter:{title:"Application Layer"},sidebar:"toolbox",previous:{title:"Anemic Domain Model",permalink:"/docs/toolbox/ddd.anemicdomainmodel"},next:{title:"Association",permalink:"/docs/toolbox/uml.association"}},l={},m=[{value:"Example",id:"example",level:3}],u={toc:m},d="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"application-layer-software-architecture"},"Application Layer (Software Architecture)"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Application Layer")," is an abstract functional division in a ",(0,n.kt)(i.A,{name:"Layered Architecture",file:"sa.layeredarchitecture",mdxType:"GlosRef"})," that serves as the interface between the client and layers beneath the ",(0,n.kt)("strong",{parentName:"p"},"Application Layer"),", primarily the software system's ",(0,n.kt)("strong",{parentName:"p"},"Domain")," and ",(0,n.kt)("strong",{parentName:"p"},"Infrastructure Layer"),"."),(0,n.kt)("p",null,"An ",(0,n.kt)("strong",{parentName:"p"},"Application Layer")," mainly digests and validates the client's input, then carries the input out as commands to the\n",(0,n.kt)("strong",{parentName:"p"},"sub-systems")," and ",(0,n.kt)("strong",{parentName:"p"},"Services")," existing in the lower layers of the system, such as the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)(i.A,{name:"Domain Layer",file:"ddd.domainlayer",mdxType:"GlosRef"}))," often supported by an ",(0,n.kt)("strong",{parentName:"p"},"Infrastructure Layer"),"."),(0,n.kt)("p",null,"If the results of a particular operation are returned to the client, the ",(0,n.kt)("strong",{parentName:"p"},"Application Layer")," can apply additional\ntransformation to it, into a format the client understands."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The ",(0,n.kt)("strong",{parentName:"p"},"Application Layer")," is not to be confused with the ",(0,n.kt)("strong",{parentName:"p"},"User Interface"),": Well designed\n",(0,n.kt)("strong",{parentName:"p"},"Application Layer"),"s are agnostic of the interface that is used for generating inputs, e.g. an application server\nimplementing a ",(0,n.kt)("strong",{parentName:"p"},"REST Api")," is unaware of the client's nature as long as the client conforms to the required protocol."),(0,n.kt)("p",{parentName:"admonition"},"In a ",(0,n.kt)("strong",{parentName:"p"},"Layered Architecture"),", the user interface would be part of the ",(0,n.kt)("strong",{parentName:"p"},"Client Layer"),".")),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("p",null,"In a client-server application, the ",(0,n.kt)("strong",{parentName:"p"},"Application Layer")," would consist of ",(0,n.kt)("strong",{parentName:"p"},"Controllers")," that receive input (",(0,n.kt)("inlineCode",{parentName:"p"},"HTTP methods")," / ",(0,n.kt)("inlineCode",{parentName:"p"},"GET"),"-, ",(0,n.kt)("inlineCode",{parentName:"p"},"POST"),"-parameters) and delegate to various services in the layer beneath. Responses are then transformed into ",(0,n.kt)("em",{parentName:"p"},"Views")," that are returned to the client. Here, ",(0,n.kt)("em",{parentName:"p"},"View")," is an abstract notion: A ",(0,n.kt)("em",{parentName:"p"},"View")," is data formatted to a particular structure, such as ",(0,n.kt)("inlineCode",{parentName:"p"},"HTML")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"JSON"),"."),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Application Layer")," is often the thinnest layer in a ",(0,n.kt)("strong",{parentName:"p"},"Layered Architecture"),"."),(0,n.kt)(o.x,{mdxType:"BackButton"}))}f.isMDXComponent=!0}}]);