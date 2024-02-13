"use strict";(self.webpackChunkthorsten_suckow_homberg_de=self.webpackChunkthorsten_suckow_homberg_de||[]).push([[700],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(a),h=r,d=m["".concat(p,".").concat(h)]||m[h]||f[h]||o;return a?n.createElement(d,i(i({ref:t},l),{},{components:a})):n.createElement(d,i({ref:t},l))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6739:(e,t,a)=>{a.d(t,{A:()=>o,E:()=>r});var n=a(7294);function r(e){let{name:t,pp:a}=e;const r=`/docs/bibliography#${t.toLowerCase()}`;return n.createElement("a",{href:r},"[",n.createElement("span",{className:"bibRef"},"\ud83d\udcd6",t),a?`, ${a.includes("-")?"pp":"p"}. ${a}`:"","]")}function o(e){let{name:t,file:a}=e;Object.entries({sd:"softwaredesign",sa:"softwarearchitecture",cs:"computerscience"}).some((e=>{let[t,n]=e;if(a.startsWith(`${t}.`))return a=a.replace(`${t}.`,`${n}.`),!0}));const r=`/docs/toolbox/${a}`;return n.createElement("a",{href:r,className:"glosRef"},t)}},8473:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var n=a(7462),r=(a(7294),a(3905)),o=a(6739);const i={title:"On Software Craftsmanship"},s="On Software Craftsmanship",p={unversionedId:"articles/software-craftsmanship/index",id:"articles/software-craftsmanship/index",title:"On Software Craftsmanship",description:"Reflecting on the role and meaning of software development as **craftsmanship**.",source:"@site/docs/articles/software-craftsmanship/index.mdx",sourceDirName:"articles/software-craftsmanship",slug:"/articles/software-craftsmanship/",permalink:"/docs/articles/software-craftsmanship/",draft:!1,editUrl:"https://github.com/thorstensuckow/thorsten.suckow-homberg.de/tree/main/docs/articles/software-craftsmanship/index.mdx",tags:[],version:"current",lastUpdatedBy:"Thorsten Suckow-Homberg",lastUpdatedAt:1707861981,formattedLastUpdatedAt:"Feb 13, 2024",frontMatter:{title:"On Software Craftsmanship"},sidebar:"docs",previous:{title:"Articles",permalink:"/docs/articles/"},next:{title:"Accessor Automation with PHP Attributes",permalink:"/docs/articles/getter-setter-automation-with-php-attributes/"}},c={},l=[],m={toc:l},f="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(f,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"on-software-craftsmanship"},"On Software Craftsmanship"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Reflecting on the role and meaning of software development as ",(0,r.kt)("strong",{parentName:"em"},"craftsmanship"),".")),(0,r.kt)("p",null,"Seeing software development as handiwork implies the revaluation of certain inherent aspects formerly considered as important\nand those traditionally given less importance, and how this revaluation impacts the individual developer, a software\ndevelopment team, and the process of developing software as a whole."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'"',(0,r.kt)("em",{parentName:"p"},"The programmer, like the poet, works only slightly removed from pure thought-stuff. He builds his castles in the air, from air, creating by the exertion of the imagination."),'" ',(0,r.kt)(o.E,{name:"MM",pp:"7",mdxType:"BibRef"}))),(0,r.kt)("p",null,"Due to the close connection of computer programs with automatism and technology, the role of software developers is merely\nconsidered supportive. As an example, a written program may exist as a runtime executable or as a utility function in computer\nmemory and is as such not tangible for the user. The ease of work for a problem domain is appreciated by the computer's user,\nbut the creator(s) behind the product is just a means to an end: Software supporting complex technicalities often obscures\nthe fact that behind the written code a person or/and a team exists that successfully applied their expertise and skills\ngathered through years of practical and theoretical experience. As an implication of the lack of appreciation, developers\nlose the connection to their creation and tend to view their code as a commodity that's of a short lifetime, not of much\nworth, and easily replaceable."),(0,r.kt)("admonition",{title:"Software Development as Craftsmanship in Literature",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Experts in the fields of software development - such as ",(0,r.kt)("a",{parentName:"p",href:"https://www.improvingwetware.com"},"Pete McBreen")," ",(0,r.kt)(o.E,{name:"SCS",mdxType:"BibRef"}),', the "Pragmatic Programmers" Andrew Hunt and David Thomas ',(0,r.kt)(o.E,{name:"PP",mdxType:"BibRef"})," and Robert C. Martin ",(0,r.kt)(o.E,{name:"CC",mdxType:"BibRef"}),' consciously connect writing software with the notion of "crafting":'),(0,r.kt)("blockquote",{parentName:"admonition"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},'"You must gain the knowledge of principles, patterns, practices, and heuristics that a craftsman knows, ',"[...]",'"')," ",(0,r.kt)(o.E,{name:"CC",pp:"xxvi",mdxType:"BibRef"}))),(0,r.kt)("p",{parentName:"admonition"},"Thomas and Hunt state in the Preface to the first edition of the ",(0,r.kt)("strong",{parentName:"p"},"Pragmatic Programmer"),", that ",(0,r.kt)("em",{parentName:"p"},'"Programming is a craft"')," ",(0,r.kt)(o.E,{name:"PP",pp:"xix",mdxType:"BibRef"}),"\nbut also acknowledge that software development is usually connotated with the task of engineering:"),(0,r.kt)("blockquote",{parentName:"admonition"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},'"There should be engineering in software construction. However, this doesn\'t preclude individual craftsmanship."')," ",(0,r.kt)(o.E,{name:"PP",pp:"xxii",mdxType:"BibRef"})))),(0,r.kt)("p",null,"In ",(0,r.kt)("strong",{parentName:"p"},"Software Craftsmanship"),", ",(0,r.kt)("strong",{parentName:"p"},"crafting software")," facilitated with technical tools and agile methodologies which support diligence and discipline\nis seen as a creative process whereas ",(0,r.kt)("strong",{parentName:"p"},"engineering software")," emphasizes technical aspects of the discipline.\nOf course, neither the creative process nor the engineering process is less valuable than the other. However, weighing in on\nthe ",(0,r.kt)("strong",{parentName:"p"},"creativity")," involved in ",(0,r.kt)("strong",{parentName:"p"},"writing")," software allows the developer to forge a closer bond with the product that emerges\nout of this process - closer than one would probably expect from an intangible product."),(0,r.kt)("p",null,"The idea of ",(0,r.kt)("strong",{parentName:"p"},"Software Craftsmanship")," is also reflected in the ",(0,r.kt)("a",{parentName:"p",href:"https://manifesto.softwarecraftsmanship.org/"},"Manifesto for Software Craftsmanship"),", published in 2009, expanding on the ",(0,r.kt)("a",{parentName:"p",href:"https://agilemanifesto.org/"},"Manifesto for Agile Software Development"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'   "',(0,r.kt)("em",{parentName:"p"},"Not only working software,\nbut also well-crafted software.")),(0,r.kt)("p",{parentName:"blockquote"},"   ",(0,r.kt)("em",{parentName:"p"},"Not only responding to change,\nbut also steadily adding value.")),(0,r.kt)("p",{parentName:"blockquote"},"   ",(0,r.kt)("em",{parentName:"p"},"Not only individuals and interactions,\nbut also a community of professionals.")),(0,r.kt)("p",{parentName:"blockquote"},"   ",(0,r.kt)("em",{parentName:"p"},"Not only customer collaboration,\nbut also productive partnerships."),'"')))}h.isMDXComponent=!0}}]);