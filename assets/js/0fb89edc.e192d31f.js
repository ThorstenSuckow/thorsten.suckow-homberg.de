"use strict";(self.webpackChunkthorsten_suckow_homberg_de=self.webpackChunkthorsten_suckow_homberg_de||[]).push([[3036],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),f=a,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4461:(e,t,r)=>{r.d(t,{x:()=>a});var n=r(7294);function a(){return n.createElement("div",{style:{width:"100%",textAlign:"right"}},n.createElement("a",{style:{textDecoration:"underline"},onClick:()=>history.go(-1),href:"#"},"Back"))}},6739:(e,t,r)=>{r.d(t,{A:()=>o,E:()=>a});var n=r(7294);function a(e){let{name:t,pp:r}=e;const a=`/docs/bibliography#${t.toLowerCase()}`;return n.createElement("a",{href:a},"[",n.createElement("span",{className:"bibRef"},"\ud83d\udcd6",t.toUpperCase()),r?`, ${r.includes("-")?"pp":"p"}. ${r}`:"","]")}function o(e){let{name:t,file:r}=e;Object.entries({sd:"softwaredesign",sa:"softwarearchitecture",cs:"computerscience"}).some((e=>{let[t,n]=e;if(r.startsWith(`${t}.`))return r=r.replace(`${t}.`,`${n}.`),!0}));const a=`/docs/toolbox/${r}`;return n.createElement("a",{href:a,className:"glosRef"},t)}},9599:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(7462),a=(r(7294),r(3905)),o=r(6739);r(4461);const i={title:"First-Class Citizen"},s="First-Class Citizen (Computer Science)",c={unversionedId:"toolbox/computerscience.firstclasscitizen",id:"toolbox/computerscience.firstclasscitizen",title:"First-Class Citizen",description:"In programming, an entity is called First-Class Citizen if all of the following apply:",source:"@site/docs/toolbox/computerscience.firstclasscitizen.mdx",sourceDirName:"toolbox",slug:"/toolbox/computerscience.firstclasscitizen",permalink:"/docs/toolbox/computerscience.firstclasscitizen",draft:!1,editUrl:"https://github.com/thorstensuckow/thorsten.suckow-homberg.de/tree/main/docs/toolbox/computerscience.firstclasscitizen.mdx",tags:[],version:"current",lastUpdatedBy:"Thorsten Suckow-Homberg",lastUpdatedAt:1682957584,formattedLastUpdatedAt:"May 1, 2023",frontMatter:{title:"First-Class Citizen"},sidebar:"toolbox",previous:{title:"Factory Method",permalink:"/docs/toolbox/softwaredesign.factorymethod"},next:{title:"Higher-Order Function",permalink:"/docs/toolbox/computerscience.higherorderfunction"}},l={},p=[{value:"JavaScript Example",id:"javascript-example",level:2}],u={toc:p},m="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"first-class-citizen-computer-science"},"First-Class Citizen (Computer Science)"),(0,a.kt)("p",null,"In programming, an ",(0,a.kt)("strong",{parentName:"p"},"entity")," is called ",(0,a.kt)("strong",{parentName:"p"},"First-Class Citizen")," if all of the following apply:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"it can be passed as an argument to another function"),(0,a.kt)("li",{parentName:"ol"},"it can be returned as a value"),(0,a.kt)("li",{parentName:"ol"},"it can be assigned as a value")),(0,a.kt)("h2",{id:"javascript-example"},"JavaScript Example"),(0,a.kt)("p",null,"In ",(0,a.kt)("strong",{parentName:"p"},"JavaScript"),", functions are treated as ",(0,a.kt)("strong",{parentName:"p"},"First-Class Citizens"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"\nconst f = x => x + 1;\n\nconst g = f => f;\n\n// 1. argument: g(f)\n// 2. return value: return f\n// 3. assignment: h = g(f)\nconst h = g(f);\n\nh(1); // 2\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"g()")," serves as a ",(0,a.kt)(o.A,{name:"Higher-Order Function",file:"cs.higherorderfunction",mdxType:"GlosRef"})," as it takes a function as an\nargument."),(0,a.kt)("hr",null),(0,a.kt)("p",null,"see also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function"},"MDN, First-class Function"))))}f.isMDXComponent=!0}}]);