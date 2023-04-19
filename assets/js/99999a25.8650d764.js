"use strict";(self.webpackChunkthorsten_suckow_homberg_de=self.webpackChunkthorsten_suckow_homberg_de||[]).push([[7809],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>d});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=c(a),m=n,d=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return a?o.createElement(d,i(i({ref:t},h),{},{components:a})):o.createElement(d,i({ref:t},h))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4461:(e,t,a)=>{a.d(t,{x:()=>n});var o=a(7294);function n(){return o.createElement("div",{style:{width:"100%",textAlign:"right"}},o.createElement("a",{style:{textDecoration:"underline"},onClick:()=>history.go(-1),href:"#"},"Back"))}},6739:(e,t,a)=>{a.d(t,{A:()=>r,E:()=>n});var o=a(7294);function n(e){let{name:t,pp:a}=e;const n=`/docs/bibliography#${t.toLowerCase()}`;return o.createElement("a",{href:n},"[",o.createElement("span",{className:"bibRef"},"\ud83d\udcd6",t.toUpperCase()),a?`, ${a.includes("-")?"pp":"p"}. ${a}`:"","]")}function r(e){let{name:t,file:a}=e;Object.entries({sd:"softwaredesign",sa:"softwarearchitecture",cs:"computerscience"}).some((e=>{let[t,o]=e;if(a.startsWith(`${t}.`))return a=a.replace(`${t}.`,`${o}.`),!0}));const n=`/docs/toolbox/${a}`;return o.createElement("a",{href:n,className:"glosRef"},t)}},4998:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var o=a(7462),n=(a(7294),a(3905)),r=a(6739);a(4461);const i={title:"Does a big ball of mud decay?",authors:["thorstensuckow"],tags:["Software Architecture","Comment","Personal"],unlisted:!0},s=void 0,l={permalink:"/blog/2023/04/14/big-ball-of-mud-decay/index_en",editUrl:"https://github.com/thorstensuckow/thorsten.suckow-homberg.de/tree/main/blog/2023-04-14-big-ball-of-mud-decay/index_en.mdx",source:"@site/blog/2023-04-14-big-ball-of-mud-decay/index_en.mdx",title:"Does a big ball of mud decay?",description:"A comment on a comment to Eberhard Wolff's recent episode 159 of Software-Architektur im Stream - Big Ball of Mud. This is a translation of this article, which was originally published in german language.",date:"2023-04-14T00:00:00.000Z",formattedDate:"April 14, 2023",tags:[{label:"Software Architecture",permalink:"/blog/tags/software-architecture"},{label:"Comment",permalink:"/blog/tags/comment"},{label:"Personal",permalink:"/blog/tags/personal"}],readingTime:7.015,hasTruncateMarker:!1,authors:[{name:"Thorsten Suckow-Homberg",url:"https://thorsten.suckow-homberg.de",imageURL:"https://avatars.githubusercontent.com/u/823135",key:"thorstensuckow"}],frontMatter:{title:"Does a big ball of mud decay?",authors:["thorstensuckow"],tags:["Software Architecture","Comment","Personal"],unlisted:!0},prevItem:{title:"[DE] Verf\xe4llt ein Big Ball of Mud?",permalink:"/blog/2023/04/14/big-ball-of-mud-decay"},nextItem:{title:"bcc-header issues with Horde_Mime_Mail",permalink:"/blog/2023/03/20/horde-mail-ignores-bcc"}},c={authorsImageUrls:[void 0]},h=[],p={toc:h},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("em",{parentName:"p"},"A comment on a comment to ",(0,n.kt)("a",{parentName:"em",href:"https://ewolff.com/"},"Eberhard Wolff's")," recent episode 159 of ",(0,n.kt)("a",{parentName:"em",href:"https://software-architektur.tv/2023/03/31/folge159.html"},"Software-Architektur im Stream - Big Ball of Mud")),". This is a translation of ",(0,n.kt)("a",{parentName:"p",href:"/blog/2023/04/14/big-ball-of-mud-decay"},"this article"),", which was originally published in german language.")),(0,n.kt)("p",null,"While the pioneers of computer science had to program computer systems close to the infrastructure, as technology progressed and thanks to the tireless work of people like  ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Fred_Brooks"},"Brooks"),", ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Pattern-Oriented_Software_Architecture"},"Buschmann")," and ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Grady_Booch"},"Booch"),", we found the way from the microscopic to the macroscopic. ",(0,n.kt)("br",null),"\nHowever, if you read the Mythical Man Month ",(0,n.kt)(r.E,{name:"MMM",mdxType:"BibRef"})," today and smile about the technology that was available at the time, you will quickly be thrown back to our present time, where problems regarding the organization and planning of projects persist. A raised finger suddenly calls for reflection: The problems of that time are still relevant today. Obviously, the development of technology has been much faster than that of planning, organization and realization of projects."),(0,n.kt)("p",null,"The motivation and knowledge of how to use templates to create objects and classes, and how to use all of our experience for cutting and assembling them into abstractions of a technicality, has gained momentum since the Gang of Four ",(0,n.kt)(r.E,{name:"Gof",mdxType:"BibRef"})," sparked an interest in software design in a generation of programmers. But although the carpenter may be able to carve a set of window frames to match the exterior of the house, the prettiest window is of no use if nobody knows how to install it, let alone open and close it."),(0,n.kt)("p",null,"In our domain, such elements become problematic when their combination is supposed to be functional, and if it should resemble a maintainable structure as a whole. Experience and proven blueprints help to ensure that developers do not lose themselves in a jungle of tangled responsibilities and associations when integrating such elements."),(0,n.kt)("p",null,"Unfortunately, that doesn't always work out so well. When we catch ourselves breaking layers by adding a ",(0,n.kt)("inlineCode",{parentName:"p"},"new")," in front of a lower-level class in a high-level class, we are one step closer to the notorious ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)(r.A,{name:"Big Ball of Mud",file:"sd.bigballofmud",mdxType:"GlosRef"}))," (",(0,n.kt)("strong",{parentName:"p"},"BBOM"),"), which ",(0,n.kt)("a",{parentName:"p",href:"https://ewolff.com"},"Eberhard Wolff")," presented and analyzed in episode 159 of his series ",(0,n.kt)("a",{parentName:"p",href:"https://software-architektur.tv/2023/03/31/folge159.html"},'"Software Architecture im Stream"')," with his usual precision."),(0,n.kt)("p",null,"In this episode, he also refers to the paper of ",(0,n.kt)("a",{parentName:"p",href:"http://www.laputan.org/mud/"},"Foote and Yoder"),", in which - more than 20 years ago - the question was asked to what extent such a ",(0,n.kt)("strong",{parentName:"p"},"Big Ball of Mud")," is an anti-pattern: That this negation of a structure is so often found in systems should actually lead to the conclusion that this is not an anti-pattern at all, but rather a tried and tested concept in software development, namely that of ",(0,n.kt)("strong",{parentName:"p"},"least resistance"),". This is characterized here by the avoidance of up-front architecture. Instead, the focus is directly on the implementation of features and functionality, also, but not exclusively, if architecture is understood as a cost factor to be avoided:"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("em",{parentName:"p"},'"Therefore, focus first on features and functionality, then focus on architecture and performance."')," ",(0,n.kt)("a",{parentName:"p",href:"#bbompaper"},(0,n.kt)("sup",null,"[1]")))),(0,n.kt)("p",null,"A conclusion could be that we should show more understanding for the developer who chooses or must choose to develop like this. Even if such an approach prevents or dissolves a solid fundament for a software system due to the lack of best practices that are generally considered to be valuable for business. ",(0,n.kt)("em",{parentName:"p"},"Foote and Yoder")," were probably also concerned with the question:"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("em",{parentName:"p"},'"',"[\u2026]",' we seek not to cast blame upon those who must wallow in these mires. In part, our attitude is to \u2018hate the sin, but love the sinner\u2018"'),". ",(0,n.kt)("a",{parentName:"p",href:"#bbompaper"},(0,n.kt)("sup",null,"[1]")))),(0,n.kt)("p",null,"If the ",(0,n.kt)("strong",{parentName:"p"},"Big Ball of Mud")," is ultimately itself a structure that contains no structure, similar to how the empty set is itself a set, then we can ex falso quodlibet accept any statement as valid if we assume that such a system has an inherent structure: And so a ",(0,n.kt)("strong",{parentName:"p"},"Big Ball of Mud")," is a design pattern."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"But!")," A structure like this can be done quite easily with no experience, just as a carpenter will probably be able to stack bricks around his window without any knowledge of how to mix mortar."),(0,n.kt)("p",null,"Under certain circumstances, however, consciously allowing entropy to take over in a software system can also help to identify contexts and understand the technicalities in order to carve out layers and cut boundaries. In any case, ",(0,n.kt)("a",{parentName:"p",href:"https://www.domainlanguage.com/"},"Evans"),", ",(0,n.kt)("a",{parentName:"p",href:"https://martinfowler.com"},"Fowler")," and also ",(0,n.kt)("em",{parentName:"p"},"Foote and Yoder")," are sure of one thing: refactoring must be done constantly in order not to lose control."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("em",{parentName:"p"},'"The way to arrest entropy in software is to refactor it."')," ",(0,n.kt)("a",{parentName:"p",href:"#bbompaper"},(0,n.kt)("sup",null,"[1]")))),(0,n.kt)("p",null,"However, one is also aware of the second law of thermodynamics: entropy cannot decrease, it can remain the same, or it can increase. If you want to prevent the latter, Evans advises to create a boundary around the ",(0,n.kt)("strong",{parentName:"p"},"BBOM"),":"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("em",{parentName:"p"},'"Draw a boundary around the entire mess and designate it a big ball of mud. Do not try to apply sophisticated modeling within this context. Be alert to the tendency for such systems to sprawl into other contexts."')," ",(0,n.kt)(r.E,{name:"DDDR",pp:"38",mdxType:"BibRef"}))),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Foote and Yoder")," have a similar recommendation, which they more eloquently call ",(0,n.kt)("a",{parentName:"p",href:"http://www.laputan.org/mud/mud.html#SweepingItUnderTheRug"},(0,n.kt)("em",{parentName:"a"},'"Sweeping it under the rug"'))," in their paper:"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("em",{parentName:"p"},'"Therefore, if you can\u2019t easily make a mess go away, at least cordon it off. This restricts the disorder to a fixed area, keeps it out of sight, and can set the stage for additional refactoring."')," ",(0,n.kt)("a",{parentName:"p",href:"#bbompaper"},(0,n.kt)("sup",null,"[1]")))),(0,n.kt)("p",null,"It doesn't matter whether the ",(0,n.kt)("strong",{parentName:"p"},"BBOM")," is shoveled under the carpet or safe boundaries are created: It allows us to get selected functionality via coarse-grained interfaces out of the ",(0,n.kt)("strong",{parentName:"p"},"BBOM"),", and at the same time we don't allow the viscous mass to drip into our system."),(0,n.kt)("p",null,"Consequently, ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Robert_C._Martin"},"Robert C. Martin")," also cataloged ",(0,n.kt)("strong",{parentName:"p"},"Viscosity")," in the category ",(0,n.kt)("strong",{parentName:"p"},"Design Smell")," ",(0,n.kt)(r.E,{name:"ASD",pp:"88",mdxType:"BibRef"}),"."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://youtu.be/Gqs8zLXei7Q?t=2200"},"My comment during the episode")," was that, given all of this, communicating the value of testing to management can be an added complication. I gathered from Eberhard Wolff's answer that in the scenarios he described, tests are understood to be useful a priori and are therefore part of the development process: It is mandatory to verify functionality due to the lack of architectural planning, resulting in diffuse modular boundaries."),(0,n.kt)("p",null,"I did not assume this implication in my comment. What I meant was: If architecture is seen as a cost factor or other conditions prevail that prevent architecture, and thus leads to a ",(0,n.kt)("strong",{parentName:"p"},"BBOM"),", then this can also lead to the ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Broken_windows_theory"},"Broken Window Effect"),'. Hunt and Thomas have already advised: "Don\'t live with broken Windows." ',(0,n.kt)(r.E,{name:"PP",pp:"7",mdxType:"BibRef"}),", and Foote and Yoder conclude from similar experiences:"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("em",{parentName:"p"},'"If such sprawl continues unabated, the structure of the system can become so badly compromised that it must be abandoned. As with a decaying neighborhood, a downward spiral ensues."')," ",(0,n.kt)("a",{parentName:"p",href:"#bbompaper"},(0,n.kt)("sup",null,"[1]")))),(0,n.kt)("p",null,"If money and time are tight in a project and the architecture is not understood to be of value, then there is a probability that testing the software - I understand this as the kind of tests that the developer writes for verifying his code - is also seen as a negative cost factor. If the opposite is true, then the missing architecture and the resulting ",(0,n.kt)("strong",{parentName:"p"},"BBOM")," could be the broken window in the neighborhood, causing even more windows to be smashed. The developer who consciously does not move within the layers, but in between, feels compelled not to document his code through tests because he may fail to see any value of his work in the end. Those involved in the project are more likely to accept a broken window if there is already one next to it."),(0,n.kt)("p",null,"If everyone involved in the project agrees that limits and technicalities can also be recognized through unstructured, organic growth, and the system only emerges later, structures can added later: Ultimately, mud is a mass that is malleable, and the dynamic of our craftsmanship is in the name ",(0,n.kt)("strong",{parentName:"p"},"soft"),"ware. If the foundation does not consist of a ",(0,n.kt)("strong",{parentName:"p"},"Throw Away"),", then all those involved in the project should be aware that testing is required: the rationale of all those responsible prevents the first window being thrown in, and it is up to the technical experts and programmers to ensure that there won't ever be any."),(0,n.kt)("hr",null),(0,n.kt)("p",null,"References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://www.laputan.org/mud/mud.html#SweepingItUnderTheRug"},(0,n.kt)("sup",null,"[1]"),' Foote, Yoder: "Big Ball of Mud"; University of Illinois, 1999')," ",(0,n.kt)("a",{name:"bbompaper"})),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://software-architektur.tv/2023/03/31/folge159.html"},'Eberhard Wolff: "Software-Architektur im Stream, Folge 159: Big Ball of Mud"'))))}m.isMDXComponent=!0}}]);