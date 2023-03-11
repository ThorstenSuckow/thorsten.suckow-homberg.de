"use strict";(self.webpackChunkthorsten_suckow_homberg_de=self.webpackChunkthorsten_suckow_homberg_de||[]).push([[6808],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>y});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(t),f=i,y=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return t?r.createElement(y,a(a({ref:n},l),{},{components:t})):r.createElement(y,a({ref:n},l))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4461:(e,n,t)=>{t.d(n,{x:()=>i});var r=t(7294);function i(){return r.createElement("div",{style:{width:"100%",textAlign:"right"}},r.createElement("a",{style:{textDecoration:"underline"},onClick:()=>history.go(-1),href:"#"},"Back"))}},6739:(e,n,t)=>{t.d(n,{A:()=>o,E:()=>i});var r=t(7294);function i(e){let{name:n,pp:t}=e;const i=`/docs/bibliography#${n.toLowerCase()}`;return r.createElement("a",{href:i},"[",r.createElement("span",{className:"bibRef"},"\ud83d\udcd6",n.toUpperCase()),t?`, pp.${t}`:"","]")}function o(e){let{name:n,file:t}=e;t=t.startsWith("sd.")?t.replace("sd.","softwaredesign."):t;const i=`/docs/Glossary/${t}`;return r.createElement("a",{href:i,className:"glosRef"},n)}},5140:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>y,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var r=t(7462),i=(t(7294),t(3905)),o=t(4461),a=t(6739);const s={title:"Dependency Injection"},c="Dependency Injection (Software Design)",p={unversionedId:"Glossary/softwaredesign.dependencyinjection",id:"Glossary/softwaredesign.dependencyinjection",title:"Dependency Injection",description:"Dependency Injection (DI) is a design pattern that helps with decoupling dependencies.",source:"@site/docs/Glossary/softwaredesign.dependencyinjection.mdx",sourceDirName:"Glossary",slug:"/Glossary/softwaredesign.dependencyinjection",permalink:"/docs/Glossary/softwaredesign.dependencyinjection",draft:!1,editUrl:"https://github.com/thorstensuckow/thorsten.suckow-homberg.de/tree/main/docs/Glossary/softwaredesign.dependencyinjection.mdx",tags:[],version:"current",lastUpdatedBy:"ThorstenSuckow",lastUpdatedAt:1678534547,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{title:"Dependency Injection"},sidebar:"addendum",previous:{title:"Core Domain",permalink:"/docs/Glossary/ddd.coredomain"},next:{title:"Dependency Inversion Principle",permalink:"/docs/Glossary/softwaredesign.dependencyinversionprinciple"}},l={},d=[],u={toc:d},f="wrapper";function y(e){let{components:n,...t}=e;return(0,i.kt)(f,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dependency-injection-software-design"},"Dependency Injection (Software Design)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Dependency Injection")," (",(0,i.kt)("strong",{parentName:"p"},"DI"),") is a design pattern that helps with decoupling dependencies."),(0,i.kt)("p",null,"With ",(0,i.kt)("strong",{parentName:"p"},"DI"),", clients which depend on a given type do not know that a specific instance of this type exists, instead\nthis information is provided by configuring the client with a specific instance of this type. This instance is usually\ndetermined during runtime (or during compile time)."),(0,i.kt)("p",null,"Clients are only aware of the type and the available operations of this given type, i.e. its interface."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"DI")," serves as a realization for the ",(0,i.kt)(a.A,{name:"Dependency Inversion Principle",file:"sd.dependencyinversionprinciple",mdxType:"GlosRef"}),"."),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/articles/dependency-injection-in-javascript/"},"Dependency Injection in JavaScript"))),(0,i.kt)(o.x,{mdxType:"BackButton"}))}y.isMDXComponent=!0}}]);