(self.webpackChunkthorsten_suckow_homberg_de=self.webpackChunkthorsten_suckow_homberg_de||[]).push([[6604],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>A,kt:()=>P});var r=n(7294);function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,f=function(e,t){if(null==e)return{};var n,r,f={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(f[n]=e[n]);return f}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(f[n]=e[n])}return f}var i=r.createContext({}),o=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},A=function(e){var t=o(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,f=e.mdxType,l=e.originalType,i=e.parentName,A=p(e,["components","mdxType","originalType","parentName"]),d=o(n),m=f,P=d["".concat(i,".").concat(m)]||d[m]||s[m]||l;return n?r.createElement(P,a(a({ref:t},A),{},{components:n})):r.createElement(P,a({ref:t},A))}));function P(e,t){var n=arguments,f=t&&t.mdxType;if("string"==typeof e||f){var l=n.length,a=new Array(l);a[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[d]="string"==typeof e?e:f,a[1]=p;for(var o=2;o<l;o++)a[o]=n[o];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4461:(e,t,n)=>{"use strict";n.d(t,{x:()=>f});var r=n(7294);function f(){return r.createElement("div",{style:{width:"100%",textAlign:"right"}},r.createElement("a",{style:{textDecoration:"underline"},onClick:()=>history.go(-1),href:"#"},"Back"))}},2490:(e,t,n)=>{"use strict";n.d(t,{$o:()=>A,_b:()=>s,cx:()=>o,e2:()=>d,in:()=>P,t2:()=>m});var r=n(7294),f=n(5075),l=n(9943),a=n(814),p=n(4098),i=n.n(p);function o(e){let{width:t,children:n,title:l,figure:a,modeAware:p}=e;return r.createElement("div",{style:{width:t,textAlign:"center",margin:20}},r.createElement("div",{className:!1!==p?"umlImg":""},n),r.createElement("div",{style:{textAlign:"center"}},r.createElement("sup",null,r.createElement("b",null,f.Z.isString(a)?a:`Figure ${a??1}`)," ",r.createElement("span",{dangerouslySetInnerHTML:{__html:l}}))))}function A(e){let{id:t,source:n,title:f}=e;return r.createElement(o,{modeAware:!1,title:f,figure:`Source ${n}`},r.createElement(l.Z,{id:t}))}function d(e){let{url:t,figure:n,title:f}=e;return r.createElement(o,{modeAware:!1,figure:n,title:f},r.createElement("img",{alt:"{title}",src:t}))}function s(e){let{children:t,figure:n,title:f}=e;return r.createElement(o,{modeAware:!0,figure:n,title:f,children:t})}function m(e){let{when:t,where:n}=e;const[f,l]=n;return r.createElement("div",null,"This article was originally published in ",t," at ",r.createElement("a",{target:"_blank",href:l},f),". Some formatting might have get lost during the migration to this site: If you think you spotted an issue caused by malformed formatting, feel free to open a ",r.createElement("a",{href:"https://github.com/ThorstenSuckow/thorsten.suckow-homberg.de"},"Pull Request")," or ",r.createElement("a",{href:"mailto:thorsten@suckow-homberg.de"},"send me an Email"),".")}function P(e){let{url:t}=e;const[n,f]=r.useState("");return i()(t).then((e=>{e.text().then((e=>f(e)))})),r.createElement(a.Z,{language:"php"},n)}},6739:(e,t,n)=>{"use strict";n.d(t,{A:()=>l,E:()=>f});var r=n(7294);function f(e){let{name:t,pp:n}=e;const f=`/docs/bibliography#${t.toLowerCase()}`;return r.createElement("a",{href:f},"[",r.createElement("span",{className:"bibRef"},"\ud83d\udcd6",t.toUpperCase()),n?`, ${n.includes("-")?"pp":"p"}. ${n}`:"","]")}function l(e){let{name:t,file:n}=e;Object.entries({sd:"softwaredesign",sa:"softwarearchitecture",cs:"computerscience"}).some((e=>{let[t,r]=e;if(n.startsWith(`${t}.`))return n=n.replace(`${t}.`,`${r}.`),!0}));const f=`/docs/toolbox/${n}`;return r.createElement("a",{href:f,className:"glosRef"},t)}},7538:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>P,contentTitle:()=>s,default:()=>k,frontMatter:()=>d,metadata:()=>m,toc:()=>v});var r=n(7462),f=(n(7294),n(3905)),l=n(4461),a=n(6739),p=n(2490);const i="data:image/png;base64,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",o="data:image/png;base64,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",A="data:image/png;base64,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",d={title:"Keyword"},s="Keyword (UML)",m={unversionedId:"toolbox/uml.keyword",id:"toolbox/uml.keyword",title:"Keyword",description:"A Keyword in UML is a predefined and reserved word available with the meta-model of UML.",source:"@site/docs/toolbox/uml.keyword.mdx",sourceDirName:"toolbox",slug:"/toolbox/uml.keyword",permalink:"/docs/toolbox/uml.keyword",draft:!1,editUrl:"https://github.com/thorstensuckow/thorsten.suckow-homberg.de/tree/main/docs/toolbox/uml.keyword.mdx",tags:[],version:"current",lastUpdatedBy:"Thorsten Suckow-Homberg",lastUpdatedAt:1684938644,formattedLastUpdatedAt:"May 24, 2023",frontMatter:{title:"Keyword"},sidebar:"toolbox",previous:{title:"Higher-Order Function",permalink:"/docs/toolbox/computerscience.higherorderfunction"},next:{title:"\u03bb Calculus",permalink:"/docs/toolbox/computerscience.lambdacalculus"}},P={},v=[{value:"Notation",id:"notation",level:2},{value:"Keyword vs. Stereotype",id:"keyword-vs-stereotype",level:2},{value:"Example",id:"example",level:2}],u={toc:v},c="wrapper";function k(e){let{components:t,...n}=e;return(0,f.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,f.kt)("h1",{id:"keyword-uml"},"Keyword (UML)"),(0,f.kt)("p",null,"A ",(0,f.kt)("strong",{parentName:"p"},"Keyword")," in ",(0,f.kt)("strong",{parentName:"p"},"UML")," is a predefined and reserved word available with the meta-model of ",(0,f.kt)("strong",{parentName:"p"},"UML"),"."),(0,f.kt)("h2",{id:"notation"},"Notation"),(0,f.kt)("p",null,"Some keywords are wrapped in an opening and a closing ",(0,f.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Guillemet"},"guillemet"),"\n(",(0,f.kt)("inlineCode",{parentName:"p"},"U+00AB LEFT-POINTING DOUBLE ANGLE QUOTATION MARK, \u201c\xab\u201d"),", ",(0,f.kt)("inlineCode",{parentName:"p"},"U+00BB RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK, \u201c\xbb\u201d"),").\nA guillemet is often confused with a duplicate ",(0,f.kt)("inlineCode",{parentName:"p"},"U+003C LESS-THAN SIGN, \u201c<\u201d")," (",(0,f.kt)("inlineCode",{parentName:"p"},"<<"),") and ",(0,f.kt)("inlineCode",{parentName:"p"},"U+003E GREATER-THAN SIGN, \u201c>\u201d")," (",(0,f.kt)("inlineCode",{parentName:"p"},">>"),")"),(0,f.kt)("p",null,(0,f.kt)("strong",{parentName:"p"},"wrong"),": ",(0,f.kt)("inlineCode",{parentName:"p"},"<<create>>")),(0,f.kt)("p",null,(0,f.kt)("strong",{parentName:"p"},"correct"),": ",(0,f.kt)("inlineCode",{parentName:"p"},"\xabcreate\xbb")),(0,f.kt)("h2",{id:"keyword-vs-stereotype"},"Keyword vs. Stereotype"),(0,f.kt)("p",null,"While the notation for some ",(0,f.kt)("strong",{parentName:"p"},"Keywords")," is the same as for ",(0,f.kt)("strong",{parentName:"p"},"Stereotypes"),", they do not necessarily refer to the same:"),(0,f.kt)("blockquote",null,(0,f.kt)("p",{parentName:"blockquote"},(0,f.kt)("em",{parentName:"p"},'"',"[...]"," many use the term ",(0,f.kt)("strong",{parentName:"em"},"stereotype")," to mean the same as ",(0,f.kt)("strong",{parentName:"em"},"keyword"),', although that is no longer correct."')," ",(0,f.kt)(a.E,{name:"UML",pp:"66",mdxType:"BibRef"}))),(0,f.kt)("p",null,"Martin Fowler refers in this quote to the differences between ",(0,f.kt)("strong",{parentName:"p"},"UML 1")," and ",(0,f.kt)("strong",{parentName:"p"},"UML 2"),", whereas in ",(0,f.kt)("strong",{parentName:"p"},"UML 1")," the ",(0,f.kt)("em",{parentName:"p"},'"guillemets where\nused mainly for ',(0,f.kt)("strong",{parentName:"em"},"stereotypes"),'."')," ",(0,f.kt)(a.E,{name:"UML",pp:"66",mdxType:"BibRef"}),": While a ",(0,f.kt)("strong",{parentName:"p"},"Keyword")," is pre-defined in the\nmeta-model of ",(0,f.kt)("strong",{parentName:"p"},"UML"),", a ",(0,f.kt)("strong",{parentName:"p"},"Stereotype")," can be a custom defined model extending an element from the ",(0,f.kt)("strong",{parentName:"p"},"UML")," meta-model.\nStereotypes can be used for providing additional or specifying functional and semantic context in an otherwise ambiguous situation."),(0,f.kt)("h2",{id:"example"},"Example"),(0,f.kt)("p",null,"Keywords such as ",(0,f.kt)("inlineCode",{parentName:"p"},"\xabcreate\xbb"),", ",(0,f.kt)("inlineCode",{parentName:"p"},"\xabuse\xbb")," or ",(0,f.kt)("inlineCode",{parentName:"p"},"\xabcall\xbb")," are used to further specify a ",(0,f.kt)(a.A,{name:"Dependency",file:"uml.dependency",mdxType:"GlosRef"}),"\nbetween two elements and provide the context of the ",(0,f.kt)("strong",{parentName:"p"},"Relationship Type")," of this ",(0,f.kt)("strong",{parentName:"p"},"Dependency"),"."),(0,f.kt)("p",null,"In the following example, a ",(0,f.kt)(a.A,{name:"Dependency",file:"uml.dependency",mdxType:"GlosRef"}),"\nbetween ",(0,f.kt)("strong",{parentName:"p"},"Client")," and ",(0,f.kt)("strong",{parentName:"p"},"Supplier")," exists. Specifying the ",(0,f.kt)("strong",{parentName:"p"},"Relationship")," can dramatically change the understanding\nof the diagram."),(0,f.kt)(p.cx,{modeAware:!0,width:640,figure:1,title:"The context of the dependency is not further specified.",mdxType:"Embed"},(0,f.kt)("img",{src:i})),(0,f.kt)(p.cx,{modeAware:!0,width:640,figure:2,title:'The context of the dependency is specified with the keyword \xabcreate\xbb, the relationship is of type "Usage"',mdxType:"Embed"},(0,f.kt)("img",{src:o})),(0,f.kt)(p.cx,{modeAware:!0,width:640,figure:3,title:'Client is now substitutable for Supplier. The relationship is now of type "Substitution"',mdxType:"Embed"},(0,f.kt)("img",{src:A})),(0,f.kt)("hr",null),(0,f.kt)("p",null,"see also"),(0,f.kt)("ul",null,(0,f.kt)("li",{parentName:"ul"},(0,f.kt)("a",{parentName:"li",href:"/docs/toolbox/uml.dependency#dependency-relationship-keywords"},"list of available ",(0,f.kt)("strong",{parentName:"a"},"keywords")," for a ",(0,f.kt)("strong",{parentName:"a"},"Dependency")))),(0,f.kt)(l.x,{mdxType:"BackButton"}))}k.isMDXComponent=!0},2480:()=>{}}]);