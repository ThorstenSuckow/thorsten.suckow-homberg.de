"use strict";(self.webpackChunkthorsten_suckow_homberg_de=self.webpackChunkthorsten_suckow_homberg_de||[]).push([[1834],{3905:(e,a,t)=>{t.d(a,{Zo:()=>l,kt:()=>k});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),o=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):m(m({},a),e)),t},l=function(e){var a=o(e.components);return n.createElement(i.Provider,{value:a},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},N=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=o(t),N=r,k=c["".concat(i,".").concat(N)]||c[N]||u[N]||s;return t?n.createElement(k,m(m({ref:a},l),{},{components:t})):n.createElement(k,m({ref:a},l))}));function k(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,m=new Array(s);m[0]=N;var p={};for(var i in a)hasOwnProperty.call(a,i)&&(p[i]=a[i]);p.originalType=e,p[c]="string"==typeof e?e:r,m[1]=p;for(var o=2;o<s;o++)m[o]=t[o];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}N.displayName="MDXCreateElement"},4461:(e,a,t)=>{t.d(a,{x:()=>r});var n=t(7294);function r(){return n.createElement("div",{style:{width:"100%",textAlign:"right"}},n.createElement("a",{style:{textDecoration:"underline"},onClick:()=>history.go(-1),href:"#"},"Back"))}},6739:(e,a,t)=>{t.d(a,{A:()=>s,E:()=>r});var n=t(7294);function r(e){let{name:a,pp:t}=e;const r=`/docs/bibliography#${a.toLowerCase()}`;return n.createElement("a",{href:r},"[",n.createElement("span",{className:"bibRef"},"\ud83d\udcd6",a.toUpperCase()),t?`, ${t.includes("-")?"pp":"p"}. ${t}`:"","]")}function s(e){let{name:a,file:t}=e;Object.entries({sd:"softwaredesign",sa:"softwarearchitecture",cs:"computerscience"}).some((e=>{let[a,n]=e;if(t.startsWith(`${a}.`))return t=t.replace(`${a}.`,`${n}.`),!0}));const r=`/docs/toolbox/${t}`;return n.createElement("a",{href:r,className:"glosRef"},a)}},8202:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>k,frontMatter:()=>p,metadata:()=>o,toc:()=>c});var n=t(7462),r=(t(7294),t(3905)),s=t(4461),m=t(6739);const p={title:"Pure Function"},i="Pure Function (Computer Science)",o={unversionedId:"toolbox/computerscience.purefunction",id:"toolbox/computerscience.purefunction",title:"Pure Function",description:"A function is considered a Pure Function if",source:"@site/docs/toolbox/computerscience.purefunction.mdx",sourceDirName:"toolbox",slug:"/toolbox/computerscience.purefunction",permalink:"/docs/toolbox/computerscience.purefunction",draft:!1,editUrl:"https://github.com/thorstensuckow/thorsten.suckow-homberg.de/tree/main/docs/toolbox/computerscience.purefunction.mdx",tags:[],version:"current",lastUpdatedBy:"Thorsten Suckow-Homberg",lastUpdatedAt:1684688187,formattedLastUpdatedAt:"May 21, 2023",frontMatter:{title:"Pure Function"},sidebar:"toolbox",previous:{title:"Metaclass",permalink:"/docs/toolbox/computerscience.metaclass"},next:{title:"Referential Transparency",permalink:"/docs/toolbox/computerscience.referentialtransparency"}},l={},c=[{value:"Example",id:"example",level:2},{value:"Pure Function",id:"pure-function",level:3},{value:"Impure Function",id:"impure-function",level:3}],u={toc:c},N="wrapper";function k(e){let{components:a,...t}=e;return(0,r.kt)(N,(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pure-function-computer-science"},"Pure Function (Computer Science)"),(0,r.kt)("p",null,"A function is considered a ",(0,r.kt)("strong",{parentName:"p"},"Pure Function")," if"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"for identical arguments, it produces identical return values"),(0,r.kt)("li",{parentName:"ol"},"it is ",(0,r.kt)(m.A,{name:"side effect free",file:"refactoring.separatequeryfrommodifier",mdxType:"GlosRef"}))),(0,r.kt)("p",null,"In this context, a ",(0,r.kt)("strong",{parentName:"p"},"Pure Function")," is similiar to a mathematical function."),(0,r.kt)("admonition",{title:"Referential Transparency",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If a function is ",(0,r.kt)("strong",{parentName:"p"},"pure"),", it is ",(0,r.kt)(m.A,{name:"referential transparent",file:"computerscience.referentialtransparency",mdxType:"GlosRef"}))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("h3",{id:"pure-function"},"Pure Function"),(0,r.kt)("p",null,"The following function ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"f")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"f")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f")))))),(0,r.kt)("p",null," ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"f"),(0,r.kt)("mspace",{parentName:"mrow"}),(0,r.kt)("mspace",{parentName:"mrow",width:"0.1111em"}),(0,r.kt)("mo",{parentName:"mrow",lspace:"0em",rspace:"0.17em"}),(0,r.kt)("mtext",{parentName:"mrow"},"\u2009\u2063"),(0,r.kt)("mo",{parentName:"mrow",lspace:"0em",rspace:"0em"},":"),(0,r.kt)("mspace",{parentName:"mrow",width:"0.3333em"}),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"double-struck"},"R"),(0,r.kt)("mo",{parentName:"mrow"},"\u2192"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"double-struck"},"R"),(0,r.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,r.kt)("mi",{parentName:"mrow"},"x"),(0,r.kt)("mo",{parentName:"mrow"},"\u21a6"),(0,r.kt)("mi",{parentName:"mrow"},"x"),(0,r.kt)("mo",{parentName:"mrow"},"\u2217"),(0,r.kt)("mi",{parentName:"mrow"},"x")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"f\\colon\\R \\rightarrow \\R, x \\mapsto x*x")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,r.kt)("span",{parentName:"span",className:"mspace nobreak"}),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1111em"}}),(0,r.kt)("span",{parentName:"span",className:"mpunct"}),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.1667em"}}),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mrel"},":")),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.3333em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathbb"},"R"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"\u2192"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8833em",verticalAlign:"-0.1944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathbb"},"R"),(0,r.kt)("span",{parentName:"span",className:"mpunct"},","),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"\u21a6"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4653em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")))))),(0,r.kt)("p",null,"translates to JavaScript"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"    const f = x => x * x;\n")),(0,r.kt)("p",null,"The function conforms to the definition of a ",(0,r.kt)("strong",{parentName:"p"},"Pure Function"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"for each input ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"x")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")))))," it ",(0,r.kt)("strong",{parentName:"li"},"always")," returns ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"x"),(0,r.kt)("mo",{parentName:"mrow"},"\u2217"),(0,r.kt)("mi",{parentName:"mrow"},"x")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x*x")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4653em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"))))),"."),(0,r.kt)("li",{parentName:"ol"},"It is side effect free (i.e. it does not change the state of any other variable)")),(0,r.kt)("h3",{id:"impure-function"},"Impure Function"),(0,r.kt)("p",null,"Whereas the following functions are considered ",(0,r.kt)("strong",{parentName:"p"},"impure"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"    function f (x) {\n        return this.x * x;\n    }\n")),(0,r.kt)("p",null,"The method violates ",(0,r.kt)("inlineCode",{parentName:"p"},"1.")," of the above definition for a ",(0,r.kt)("strong",{parentName:"p"},"Pure Function"),": It produces variants because of the non-local-variable\n",(0,r.kt)("inlineCode",{parentName:"p"},"this.x"),". The state of ",(0,r.kt)("inlineCode",{parentName:"p"},"this.x")," is unclear to ",(0,r.kt)("inlineCode",{parentName:"p"},"f"),", the result is ",(0,r.kt)("em",{parentName:"p"},"nondeterministic"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"    function f (x) {\n        this.x = x;\n    }\n\n")),(0,r.kt)("p",null,"The method violates ",(0,r.kt)("inlineCode",{parentName:"p"},"2.")," of the above definition for a ",(0,r.kt)("strong",{parentName:"p"},"Pure Function"),": Although it always produces ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," for the\ngiven input ",(0,r.kt)("inlineCode",{parentName:"p"},"x"),", it is not side effect free since it changes the non-local variable ",(0,r.kt)("inlineCode",{parentName:"p"},"this.x"),"."),(0,r.kt)(s.x,{mdxType:"BackButton"}),(0,r.kt)("hr",null),(0,r.kt)("p",null,"see also"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Pure_function"},"Pure Function (Wikipedia)"))))}k.isMDXComponent=!0}}]);