"use strict";(self.webpackChunkthorsten_suckow_homberg_de=self.webpackChunkthorsten_suckow_homberg_de||[]).push([[1069],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(r),u=a,d=m["".concat(l,".").concat(u)]||m[u]||f[u]||o;return r?n.createElement(d,s(s({ref:t},c),{},{components:r})):n.createElement(d,s({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4461:(e,t,r)=>{r.d(t,{x:()=>a});var n=r(7294);function a(){return n.createElement("div",{style:{width:"100%",textAlign:"right"}},n.createElement("a",{style:{textDecoration:"underline"},onClick:()=>history.go(-1),href:"#"},"Back"))}},6739:(e,t,r)=>{r.d(t,{A:()=>o,E:()=>a});var n=r(7294);function a(e){let{name:t,pp:r}=e;const a=`/docs/bibliography#${t.toLowerCase()}`;return n.createElement("a",{href:a},"[",n.createElement("span",{className:"bibRef"},"\ud83d\udcd6",t.toUpperCase()),r?`, pp.${r}`:"","]")}function o(e){let{name:t,file:r}=e;r=r.startsWith("sd.")?r.replace("sd.","softwaredesign."):r;const a=`/docs/Glossary/${r}`;return n.createElement("a",{href:a,className:"glosRef"},t)}},6228:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var n=r(7462),a=(r(7294),r(3905)),o=r(4461),s=r(6739);const i={title:"Software Craftsmanship"},l="Software Craftsmanship",p={unversionedId:"Glossary/development.softwarecraftsmanship",id:"Glossary/development.softwarecraftsmanship",title:"Software Craftsmanship",description:"An idea that reflects on the role and meaning of software development as craftsmanship.",source:"@site/docs/Glossary/development.softwarecraftsmanship.mdx",sourceDirName:"Glossary",slug:"/Glossary/development.softwarecraftsmanship",permalink:"/docs/Glossary/development.softwarecraftsmanship",draft:!1,editUrl:"https://github.com/thorstensuckow/thorsten.suckow-homberg.de/tree/main/docs/Glossary/development.softwarecraftsmanship.mdx",tags:[],version:"current",lastUpdatedBy:"ThorstenSuckow",lastUpdatedAt:1678536847,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{title:"Software Craftsmanship"},sidebar:"addendum",previous:{title:"Separation of Concerns",permalink:"/docs/Glossary/softwaredesign.separationofconcerns"},next:{title:"Ubiquitous Language",permalink:"/docs/Glossary/ddd.ubiquitouslanguage"}},c={},m=[],f={toc:m},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"software-craftsmanship"},"Software Craftsmanship"),(0,a.kt)("p",null,"An idea that reflects on the role and meaning of software development as ",(0,a.kt)("strong",{parentName:"p"},"craftsmanship"),"."),(0,a.kt)("p",null,"As a result, certain aspects of software development are given more weight, such as the relationship between the individual\ndeveloper and her/his code, and the methods and tools used for writing, maintaining and enhancing it."),(0,a.kt)("p",null,"Due to the close connection of computer programs with automatism and technology, the role of software developers are\nmerely considered supportive. As an example, the written program exists as a runtime executable or a utility function\nin computer memory and is as such not tangible for the user. The ease of work for a problem domain is appreciated by the\ncomputer's user, but the creator(s) behind the product are just a means to an end: Complex technicalities that a software\nsupports often obscure the fact that behind the written code a person or/and a team exists that successfully applied\ntheir expertise and skills gathered through years of practical and theoretical experience. As an implication to the lack\nof appreciation, developers lose the connection to their creation and tend to view their code as a commodity that's\nof short lifetime, not of much worth and easily replaceable."),(0,a.kt)("p",null,"To make the developer reflect on his role with more care, experts in the fields of software development - such as ",(0,a.kt)("a",{parentName:"p",href:"https://www.improvingwetware.com"},"Pete McBreen")," ",(0,a.kt)(s.E,{name:"SCS",mdxType:"BibRef"}),', the "Pragmatic Programmers" Andrew Hunt and David Thomas ',(0,a.kt)(s.E,{name:"PP",mdxType:"BibRef"})," and Robert C. Martin ",(0,a.kt)(s.E,{name:"CC",mdxType:"BibRef"}),' consciously connect writing software with the notion of "crafting":'),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'"You must gain the knowledge of principles, patterns, practices, and heuristics that a ',(0,a.kt)("em",{parentName:"p"},"craftsman")," knows, ","[...]",'" ',(0,a.kt)(s.E,{name:"CC",mdxType:"BibRef"}))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'"There should be engineering in software construction. However, this doesn\'t preclude individual craftsmanship." ',(0,a.kt)(s.E,{name:"PP",mdxType:"BibRef"}))),(0,a.kt)("p",null,"Crafting software with technical tools and agile methodologies supporting diligence and discipline is seen as a creative,\nvaluable process. Out of this process emerges a product a developer shares a close bond with - closer than one would probably\nexpect from an intangible product."),(0,a.kt)("p",null,"These views are reflected in the ",(0,a.kt)("a",{parentName:"p",href:"https://manifesto.softwarecraftsmanship.org/"},"Manifesto for Software Craftsmanship"),", published in 2009,\nexpanding on the ",(0,a.kt)("a",{parentName:"p",href:"https://agilemanifesto.org/"},"Manifesto for Agile Software Development"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'   "',(0,a.kt)("em",{parentName:"p"},"Not only working software,\nbut also well-crafted software.")),(0,a.kt)("p",{parentName:"blockquote"},"   ",(0,a.kt)("em",{parentName:"p"},"Not only responding to change,\nbut also steadily adding value.")),(0,a.kt)("p",{parentName:"blockquote"},"   ",(0,a.kt)("em",{parentName:"p"},"Not only individuals and interactions,\nbut also a community of professionals.")),(0,a.kt)("p",{parentName:"blockquote"},"   ",(0,a.kt)("em",{parentName:"p"},"Not only customer collaboration,\nbut also productive partnerships."),'"')),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'"',(0,a.kt)("em",{parentName:"p"},"The programmer, like the poet, works only slightly removed from pure thought-stuff. He builds his castles in the air, from air, creating by the exertion of the imagination."),'" ',(0,a.kt)(s.E,{name:"MM",mdxType:"BibRef"}))),(0,a.kt)(o.x,{mdxType:"BackButton"}))}d.isMDXComponent=!0}}]);