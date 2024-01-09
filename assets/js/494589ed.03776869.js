"use strict";(self.webpackChunkthorsten_suckow_homberg_de=self.webpackChunkthorsten_suckow_homberg_de||[]).push([[7649],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),i=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},o=function(e){var t=i(e.components);return n.createElement(m.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},N=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,p=e.originalType,m=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),c=i(a),N=r,h=c["".concat(m,".").concat(N)]||c[N]||k[N]||p;return a?n.createElement(h,s(s({ref:t},o),{},{components:a})):n.createElement(h,s({ref:t},o))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=a.length,s=new Array(p);s[0]=N;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[c]="string"==typeof e?e:r,s[1]=l;for(var i=2;i<p;i++)s[i]=a[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},4461:(e,t,a)=>{a.d(t,{x:()=>r});var n=a(7294);function r(){return n.createElement("div",{style:{width:"100%",textAlign:"right"}},n.createElement("a",{style:{textDecoration:"underline"},onClick:()=>history.go(-1),href:"#"},"Back"))}},6739:(e,t,a)=>{a.d(t,{A:()=>p,E:()=>r});var n=a(7294);function r(e){let{name:t,pp:a}=e;const r=`/docs/bibliography#${t.toLowerCase()}`;return n.createElement("a",{href:r},"[",n.createElement("span",{className:"bibRef"},"\ud83d\udcd6",t),a?`, ${a.includes("-")?"pp":"p"}. ${a}`:"","]")}function p(e){let{name:t,file:a}=e;Object.entries({sd:"softwaredesign",sa:"softwarearchitecture",cs:"computerscience"}).some((e=>{let[t,n]=e;if(a.startsWith(`${t}.`))return a=a.replace(`${t}.`,`${n}.`),!0}));const r=`/docs/toolbox/${a}`;return n.createElement("a",{href:r,className:"glosRef"},t)}},5789:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>N,frontMatter:()=>s,metadata:()=>m,toc:()=>o});var n=a(7462),r=(a(7294),a(3905)),p=a(6739);a(4461);const s={title:"Perceptron Function Plotting with Python",authors:["thorstensuckow"],tags:["machine learning","ai","perceptron","neural network"],enableComments:!0},l=void 0,m={permalink:"/blog/2023/07/11/perceptron-function-plotting-in-python",editUrl:"https://github.com/thorstensuckow/thorsten.suckow-homberg.de/tree/main/blog/2023-07-11-perceptron-function-plotting-in-python/index.md",source:"@site/blog/2023-07-11-perceptron-function-plotting-in-python/index.md",title:"Perceptron Function Plotting with Python",description:"I have updated my Perceptron-implementation with",date:"2023-07-11T00:00:00.000Z",formattedDate:"July 11, 2023",tags:[{label:"machine learning",permalink:"/blog/tags/machine-learning"},{label:"ai",permalink:"/blog/tags/ai"},{label:"perceptron",permalink:"/blog/tags/perceptron"},{label:"neural network",permalink:"/blog/tags/neural-network"}],readingTime:2.835,hasTruncateMarker:!1,authors:[{name:"Thorsten Suckow-Homberg",url:"https://thorsten.suckow-homberg.de",imageURL:"https://avatars.githubusercontent.com/u/823135",key:"thorstensuckow"}],frontMatter:{title:"Perceptron Function Plotting with Python",authors:["thorstensuckow"],tags:["machine learning","ai","perceptron","neural network"],enableComments:!0},prevItem:{title:"[DE] Zulassungsarbeit M.Sc. Informatik",permalink:"/blog/2023-12-31-zulassungsarbeit-master-of-computer-science"},nextItem:{title:'[DE] "Beweisen lernen" - Errata',permalink:"/blog/2023/05/01/errata-beweisen-lernen"}},i={authorsImageUrls:[void 0]},o=[{value:"Usage",id:"usage",level:2},{value:"Examples",id:"examples",level:2},{value:"<code>and</code>",id:"and",level:3},{value:"<code>or</code>",id:"or",level:3},{value:"<code>xor</code>",id:"xor",level:3},{value:"Cluster Example",id:"cluster-example",level:3}],c={toc:o},k="wrapper";function N(e){let{components:t,...s}=e;return(0,r.kt)(k,(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"I have updated my ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://en.wikipedia.org/wiki/perceptron"},"Perceptron")),"-implementation with\na plotting function that allows for visualizing the adjustments of the Perceptron's weight-vector through the epochs."),(0,r.kt)("p",null,"The source-code can be found at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ThorstenSuckow/pylabs"},"https://github.com/ThorstenSuckow/pylabs"),"."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Create input data and the associated output values. As an example, the following represents the logical ",(0,r.kt)("strong",{parentName:"p"},"AND"),"-function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import numpy as np\nfrom Perceptron import Perceptron\n\n# input\nX = np.array([\n    [0, 0], [0, 1], [1, 0], [1, 1]\n])\n\n# output\ny = np.array([0, 0, 0, 1])\n")),(0,r.kt)("p",null,"In the next step, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Perceptron")," is created."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"p = Perceptron(50, 0.3)\n")),(0,r.kt)("p",null,"Once a ",(0,r.kt)("inlineCode",{parentName:"p"},"Perceptron"),"-instance is available, you can pass the input- and output-values to ",(0,r.kt)("inlineCode",{parentName:"p"},"learn()"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"p.learn(X, y)\n")),(0,r.kt)("p",null,"and test data with"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"result = p.test([0, 0])\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"result")," holds the computed weight vector if the training data could be separated within the ",(0,r.kt)("inlineCode",{parentName:"p"},"epochs"),". If that failed,\n",(0,r.kt)("inlineCode",{parentName:"p"},"None")," is returned."),(0,r.kt)("p",null,"Note: The ",(0,r.kt)("inlineCode",{parentName:"p"},"bias")," is available with ",(0,r.kt)("inlineCode",{parentName:"p"},"p.bias")),(0,r.kt)("p",null,"A log is available for all steps processed by ",(0,r.kt)("inlineCode",{parentName:"p"},"learn()"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"for step in p.log:\n    print(step)\n")),(0,r.kt)("p",null,"You can pass the log to the ",(0,r.kt)("inlineCode",{parentName:"p"},"PerceptronPlotter")," which will recreate the computation visually."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"and"},(0,r.kt)("inlineCode",{parentName:"h3"},"and")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"and"),"-function with a Perceptron."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("span",{parentName:"th",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"A")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"A")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"A")))))),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("span",{parentName:"th",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"B")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"B")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05017em"}},"B")))))),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("span",{parentName:"th",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"A"),(0,r.kt)("mo",{parentName:"mrow"},"\u2227"),(0,r.kt)("mi",{parentName:"mrow"},"B")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"A \\land B")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"A"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\u2227"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05017em"}},"B")))))))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"0")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'X = np.array([\n    [0, 0], [0, 1], [1, 0], [1, 1]\n])\n\ntitle= "\\"AND\\""\ny = np.array([0, 0, 0, 1])\n\np = Perceptron(50)\np.learn(X, y)\n\nplotter = PerceptronPlotter(p.log, X, y, title)\nanim = plotter.animate(500)\n')),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(4439).Z,width:"619",height:"435"})),(0,r.kt)("h3",{id:"or"},(0,r.kt)("inlineCode",{parentName:"h3"},"or")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"or"),"-function with a Perceptron."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("span",{parentName:"th",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"A")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"A")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"A")))))),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("span",{parentName:"th",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"B")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"B")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05017em"}},"B")))))),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("span",{parentName:"th",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"A"),(0,r.kt)("mo",{parentName:"mrow"},"\u2228"),(0,r.kt)("mi",{parentName:"mrow"},"B")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"A \\lor B")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"A"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\u2228"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05017em"}},"B")))))))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"0")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'X = np.array([\n    [0, 0], [0, 1], [1, 0], [1, 1]\n])\n\ntitle= "\\"OR\\""\ny = np.array([0, 1, 1, 1])\n\np = Perceptron(50)\np.learn(X, y)\n\nplotter = PerceptronPlotter(p.log, X, y, title)\nanim = plotter.animate(500)\n')),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(7109).Z,width:"619",height:"435"})),(0,r.kt)("h3",{id:"xor"},(0,r.kt)("inlineCode",{parentName:"h3"},"xor")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"xor"),"-function with a Perceptron."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("span",{parentName:"th",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"A")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"A")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"A")))))),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("span",{parentName:"th",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"B")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"B")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05017em"}},"B")))))),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("span",{parentName:"th",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"A"),(0,r.kt)("mo",{parentName:"mrow"},"\u2295"),(0,r.kt)("mi",{parentName:"mrow"},"B")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"A \\oplus B")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7667em",verticalAlign:"-0.0833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"A"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\u2295"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05017em"}},"B")))))))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"0")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'X = np.array([\n    [0, 0], [0, 1], [1, 0], [1, 1]\n])\n\ntitle= "\\"OR\\""\ny = np.array([0, 1, 1, 0])\n\np = Perceptron(50)\np.learn(X, y)\n\nplotter = PerceptronPlotter(p.log, X, y, title)\nanim = plotter.animate(500)\n')),(0,r.kt)("p",null,"With the Perceptron as a linear discriminant function, the algorithm can not properly create a separator for ",(0,r.kt)("inlineCode",{parentName:"p"},"XOR")," ",(0,r.kt)(p.E,{name:"MIN69",mdxType:"BibRef"}),".\nThe Plotter shows the ",(0,r.kt)("inlineCode",{parentName:"p"},"Epoch"),"-label marked as red, which tells that the algorithm was not able to find a separator in 50 epochs."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(74).Z,width:"619",height:"435"})),(0,r.kt)("h3",{id:"cluster-example"},"Cluster Example"),(0,r.kt)("p",null,"The following uses isotropic Gaussian blobs generated by ",(0,r.kt)("a",{parentName:"p",href:"https://scikit-learn.org/stable/datasets/sample_generators.html#sample-generators"},(0,r.kt)("inlineCode",{parentName:"a"},"sklearn.datasets.make_blobs")),".\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"animate"),"-method is called with an ",(0,r.kt)("inlineCode",{parentName:"p"},"interval")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"100")," to speed up epoch-runs. The interplay of a larger set of data and the re-adjusting of the separator if accuracy does not reach ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," for a full epoch can be observed nicely."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'title = "Clusters"\nX, y = make_blobs(n_samples=50, n_features=2, centers=2, cluster_std=2.5)\n\n\np = Perceptron(50)\np.learn(X, y)\n\nplotter = PerceptronPlotter(p.log, X, y, title)\n\nanim = plotter.animate(100)\n')),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(2232).Z,width:"619",height:"435"})),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ThorstenSuckow/pylabs"},"https://github.com/ThorstenSuckow/pylabs"))))}N.isMDXComponent=!0},4439:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/and_perceptron-a7bebbf844a2a39c9b907a8457d9c90e.gif"},2232:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cluster_perceptron-6c6e8efc7c0a551a716fc9bf4eebef22.gif"},7109:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/or_perceptron-e2dfc5ec67faa24c57d2b54cb37e2460.gif"},74:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/xor_perceptron-4efb9818b86b656ddafff788a1d78574.gif"}}]);