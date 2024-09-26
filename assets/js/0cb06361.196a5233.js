(self.webpackChunkthorsten_suckow_homberg_de=self.webpackChunkthorsten_suckow_homberg_de||[]).push([[7455],{3905:(a,e,t)=>{"use strict";t.d(e,{Zo:()=>i,kt:()=>k});var n=t(7294);function m(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function s(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function r(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){m(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,n,m=function(a,e){if(null==a)return{};var t,n,m={},s=Object.keys(a);for(n=0;n<s.length;n++)t=s[n],e.indexOf(t)>=0||(m[t]=a[t]);return m}(a,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);for(n=0;n<s.length;n++)t=s[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(m[t]=a[t])}return m}var l=n.createContext({}),o=function(a){var e=n.useContext(l),t=e;return a&&(t="function"==typeof a?a(e):r(r({},e),a)),t},i=function(a){var e=o(a.components);return n.createElement(l.Provider,{value:e},a.children)},c="mdxType",N={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(a,e){var t=a.components,m=a.mdxType,s=a.originalType,l=a.parentName,i=p(a,["components","mdxType","originalType","parentName"]),c=o(t),h=m,k=c["".concat(l,".").concat(h)]||c[h]||N[h]||s;return t?n.createElement(k,r(r({ref:e},i),{},{components:t})):n.createElement(k,r({ref:e},i))}));function k(a,e){var t=arguments,m=e&&e.mdxType;if("string"==typeof a||m){var s=t.length,r=new Array(s);r[0]=h;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=a,p[c]="string"==typeof a?a:m,r[1]=p;for(var o=2;o<s;o++)r[o]=t[o];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},2490:(a,e,t)=>{"use strict";t.d(e,{$o:()=>i,_b:()=>N,cx:()=>o,e2:()=>c,in:()=>k,t2:()=>h});var n=t(7294),m=t(5075),s=t(9943),r=t(814),p=t(4098),l=t.n(p);function o(a){let{width:e,children:t,title:s,figure:r,modeAware:p}=a;return n.createElement("div",{style:{width:e,textAlign:"center",margin:20}},n.createElement("div",{className:!1!==p?"umlImg":""},t),n.createElement("div",{style:{textAlign:"center"}},n.createElement("sup",null,n.createElement("b",null,m.Z.isString(r)?r:`Figure ${r??1}`)," ",n.createElement("span",{dangerouslySetInnerHTML:{__html:s}}))))}function i(a){let{id:e,source:t,title:m}=a;return n.createElement(o,{modeAware:!1,title:m,figure:`Source ${t}`},n.createElement(s.Z,{id:e}))}function c(a){let{url:e,figure:t,title:m}=a;return n.createElement(o,{modeAware:!1,figure:t,title:m},n.createElement("img",{alt:"{title}",src:e}))}function N(a){let{children:e,figure:t,title:m}=a;return n.createElement(o,{modeAware:!0,figure:t,title:m,children:e})}function h(a){let{when:e,where:t}=a;const[m,s]=t;return n.createElement("div",null,"This article was originally published in ",e," at ",n.createElement("a",{target:"_blank",href:s},m),". Some formatting might have get lost during the migration to this site: If you think you spotted an issue caused by malformed formatting, feel free to open a ",n.createElement("a",{href:"https://github.com/ThorstenSuckow/thorsten.suckow-homberg.de"},"Pull Request")," or ",n.createElement("a",{href:"mailto:thorsten@suckow-homberg.de"},"send me an Email"),".")}function k(a){let{url:e}=a;const[t,m]=n.useState("");return l()(e).then((a=>{a.text().then((a=>m(a)))})),n.createElement(r.Z,{language:"php"},t)}},495:(a,e,t)=>{"use strict";t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>N});var n=t(7462),m=(t(7294),t(3905)),s=t(2490);const r=t.p+"assets/images/graph.svg-5264ac1f6c58340efce154726ba293cf.png",p=t.p+"assets/images/spanningtree.svg-470d2b29d9c407fefe7cd6cf596aa405.png",l={title:"Spanning Tree"},o="Spanning Tree (Graph Theory)",i={unversionedId:"toolbox/graphtheory.spanningtree",id:"toolbox/graphtheory.spanningtree",title:"Spanning Tree",description:"If $G$ is a connected graph, then the Spanning Tree $T \\sube G$  is a minimal connected graph with $V(T) = V(G)$.",source:"@site/docs/toolbox/graphtheory.spanningtree.mdx",sourceDirName:"toolbox",slug:"/toolbox/graphtheory.spanningtree",permalink:"/docs/toolbox/graphtheory.spanningtree",draft:!1,editUrl:"https://github.com/thorstensuckow/thorsten.suckow-homberg.de/tree/main/docs/toolbox/graphtheory.spanningtree.mdx",tags:[],version:"current",lastUpdatedBy:"Thorsten Suckow-Homberg",lastUpdatedAt:1727374252,formattedLastUpdatedAt:"Sep 26, 2024",frontMatter:{title:"Spanning Tree"},sidebar:"toolbox",previous:{title:"SOLID",permalink:"/docs/toolbox/softwaredesign.solid"},next:{title:"Symptoms of Poor Design",permalink:"/docs/toolbox/softwaredesign.symptomsofpoordesign"}},c={},N=[{value:"Example",id:"example",level:2}],h=(k="BackButton",function(a){return console.warn("Component "+k+" was not imported, exported, or provided by MDXProvider as global scope"),(0,m.kt)("div",a)});var k;const g={toc:N},d="wrapper";function u(a){let{components:e,...t}=a;return(0,m.kt)(d,(0,n.Z)({},g,t,{components:e,mdxType:"MDXLayout"}),(0,m.kt)("h1",{id:"spanning-tree-graph-theory"},"Spanning Tree (Graph Theory)"),(0,m.kt)("p",null,"If ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"G")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"G")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"G")))))," is a ",(0,m.kt)("em",{parentName:"p"},"connected graph"),", then the ",(0,m.kt)("strong",{parentName:"p"},"Spanning Tree")," ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"T"),(0,m.kt)("mo",{parentName:"mrow"},"\u2286"),(0,m.kt)("mi",{parentName:"mrow"},"G")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"T \\sube G")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8193em",verticalAlign:"-0.136em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"T"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"\u2286"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"G"))))),"  is a ",(0,m.kt)("em",{parentName:"p"},"minimal connected")," graph with ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"V"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"T"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mi",{parentName:"mrow"},"V"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"G"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"V(T) = V(G)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.22222em"}},"V"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"T"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.22222em"}},"V"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"G"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"))))),"."),(0,m.kt)("p",null,"The edges ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"E"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"G"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,m.kt)("mo",{parentName:"mrow"},"\u2216"),(0,m.kt)("mi",{parentName:"mrow"},"E"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"T"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"E(G) \\setminus E(T)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"E"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"G"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\u2216"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"E"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"T"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")")))))," are called the ",(0,m.kt)("em",{parentName:"p"},"chords")," of ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"T")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"T")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"T")))))," in ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"G")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"G")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"G"))))),"."),(0,m.kt)("h2",{id:"example"},"Example"),(0,m.kt)("p",null,(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"G")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"G")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"G")))))," is a ",(0,m.kt)("em",{parentName:"p"},"connected graph")," with ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2223"),(0,m.kt)("mi",{parentName:"mrow"},"G"),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2223"),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mn",{parentName:"mrow"},"7")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"|G| = 7")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"\u2223"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"G"),(0,m.kt)("span",{parentName:"span",className:"mord"},"\u2223"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"7")))))," and ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2223"),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2223"),(0,m.kt)("mi",{parentName:"mrow"},"G"),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2223"),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2223"),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mn",{parentName:"mrow"},"10")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"||G|| = 10")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"\u2223\u2223"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"G"),(0,m.kt)("span",{parentName:"span",className:"mord"},"\u2223\u2223"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"10"))))),"."),(0,m.kt)(s.cx,{figure:1,title:"Graph G",mdxType:"Embed"},(0,m.kt)("img",{src:r})),(0,m.kt)("p",null,"Removing edges so that ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"G")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"G")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"G")))))," becomes a ",(0,m.kt)("em",{parentName:"p"},"minimal connected")," graph. The ",(0,m.kt)("em",{parentName:"p"},"chords")," ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"E"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"G"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,m.kt)("mo",{parentName:"mrow"},"\u2216"),(0,m.kt)("mi",{parentName:"mrow"},"E"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"T"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"E(G) \\setminus E(T)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"E"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"G"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\u2216"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"E"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"T"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"))))),"  are depicted as curved lines."),(0,m.kt)(s.cx,{figure:2,title:"Spanning Tree T of G. The curved edges are the chords of T in G.",mdxType:"Embed"},(0,m.kt)("img",{src:p})),(0,m.kt)(h,{mdxType:"BackButton"}))}u.isMDXComponent=!0},2480:()=>{}}]);