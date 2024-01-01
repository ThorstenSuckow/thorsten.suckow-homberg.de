"use strict";(self.webpackChunkthorsten_suckow_homberg_de=self.webpackChunkthorsten_suckow_homberg_de||[]).push([[3036],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=a,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4461:(e,t,n)=>{n.d(t,{x:()=>a});var r=n(7294);function a(){return r.createElement("div",{style:{width:"100%",textAlign:"right"}},r.createElement("a",{style:{textDecoration:"underline"},onClick:()=>history.go(-1),href:"#"},"Back"))}},6739:(e,t,n)=>{n.d(t,{A:()=>o,E:()=>a});var r=n(7294);function a(e){let{name:t,pp:n}=e;const a=`/docs/bibliography#${t.toLowerCase()}`;return r.createElement("a",{href:a},"[",r.createElement("span",{className:"bibRef"},"\ud83d\udcd6",t),n?`, ${n.includes("-")?"pp":"p"}. ${n}`:"","]")}function o(e){let{name:t,file:n}=e;Object.entries({sd:"softwaredesign",sa:"softwarearchitecture",cs:"computerscience"}).some((e=>{let[t,r]=e;if(n.startsWith(`${t}.`))return n=n.replace(`${t}.`,`${r}.`),!0}));const a=`/docs/toolbox/${n}`;return r.createElement("a",{href:a,className:"glosRef"},t)}},9599:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(7462),a=(n(7294),n(3905)),o=n(6739);n(4461);const i={title:"First-Class Citizen"},s="First-Class Citizen (Computer Science)",c={unversionedId:"toolbox/computerscience.firstclasscitizen",id:"toolbox/computerscience.firstclasscitizen",title:"First-Class Citizen",description:"In programming, an entity is called First-Class Citizen if all of the following apply:",source:"@site/docs/toolbox/computerscience.firstclasscitizen.mdx",sourceDirName:"toolbox",slug:"/toolbox/computerscience.firstclasscitizen",permalink:"/docs/toolbox/computerscience.firstclasscitizen",draft:!1,editUrl:"https://github.com/thorstensuckow/thorsten.suckow-homberg.de/tree/main/docs/toolbox/computerscience.firstclasscitizen.mdx",tags:[],version:"current",lastUpdatedBy:"ThorstenSuckow",lastUpdatedAt:1704119805,formattedLastUpdatedAt:"Jan 1, 2024",frontMatter:{title:"First-Class Citizen"},sidebar:"toolbox",previous:{title:"Factory Method",permalink:"/docs/toolbox/softwaredesign.factorymethod"},next:{title:"Higher-Order Function",permalink:"/docs/toolbox/computerscience.higherorderfunction"}},l={},p=[{value:"JavaScript Example",id:"javascript-example",level:2}],u={toc:p},m="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"first-class-citizen-computer-science"},"First-Class Citizen (Computer Science)"),(0,a.kt)("p",null,"In programming, an ",(0,a.kt)("strong",{parentName:"p"},"entity")," is called ",(0,a.kt)("strong",{parentName:"p"},"First-Class Citizen")," if all of the following apply:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"it can be passed as an argument to another function"),(0,a.kt)("li",{parentName:"ol"},"it can be returned as a value"),(0,a.kt)("li",{parentName:"ol"},"it can be assigned as a value")),(0,a.kt)("h2",{id:"javascript-example"},"JavaScript Example"),(0,a.kt)("p",null,"In ",(0,a.kt)("strong",{parentName:"p"},"JavaScript"),", functions are treated as ",(0,a.kt)("strong",{parentName:"p"},"First-Class Citizens"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"\nconst f = x => x + 1;\n\nconst g = f => f;\n\n// 1. argument: g(f)\n// 2. return value: return f\n// 3. assignment: h = g(f)\nconst h = g(f);\n\nh(1); // 2\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"g()")," serves as a ",(0,a.kt)(o.A,{name:"Higher-Order Function",file:"cs.higherorderfunction",mdxType:"GlosRef"})," as it takes a function as an\nargument."),(0,a.kt)("hr",null),(0,a.kt)("p",null,"see also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function"},"MDN, First-class Function"))))}f.isMDXComponent=!0}}]);