(self.webpackChunkthorsten_suckow_homberg_de=self.webpackChunkthorsten_suckow_homberg_de||[]).push([[5978],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>p,kt:()=>A});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,A=u["".concat(o,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(A,i(i({ref:t},p),{},{components:n})):r.createElement(A,i({ref:t},p))}));function A(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4461:(e,t,n)=>{"use strict";n.d(t,{x:()=>a});var r=n(7294);function a(){return r.createElement("div",{style:{width:"100%",textAlign:"right"}},r.createElement("a",{style:{textDecoration:"underline"},onClick:()=>history.go(-1),href:"#"},"Back"))}},2490:(e,t,n)=>{"use strict";n.d(t,{$o:()=>p,_b:()=>m,cx:()=>c,e2:()=>u,in:()=>A,t2:()=>d});var r=n(7294),a=n(5075),l=n(9943),i=n(814),s=n(4098),o=n.n(s);function c(e){let{width:t,children:n,title:l,figure:i,modeAware:s}=e;return r.createElement("div",{style:{width:t,textAlign:"center",margin:20}},r.createElement("div",{className:!1!==s?"umlImg":""},n),r.createElement("div",{style:{textAlign:"center"}},r.createElement("sup",null,r.createElement("b",null,a.Z.isString(i)?i:`Figure ${i??1}`)," ",r.createElement("span",{dangerouslySetInnerHTML:{__html:l}}))))}function p(e){let{id:t,source:n,title:a}=e;return r.createElement(c,{modeAware:!1,title:a,figure:`Source ${n}`},r.createElement(l.Z,{id:t}))}function u(e){let{url:t,figure:n,title:a}=e;return r.createElement(c,{modeAware:!1,figure:n,title:a},r.createElement("img",{alt:"{title}",src:t}))}function m(e){let{children:t,figure:n,title:a}=e;return r.createElement(c,{modeAware:!0,figure:n,title:a,children:t})}function d(e){let{when:t,where:n}=e;const[a,l]=n;return r.createElement("div",null,"This article was originally published in ",t," at ",r.createElement("a",{target:"_blank",href:l},a),". Some formatting might have get lost during the migration to this site: If you think you spotted an issue caused by malformed formatting, feel free to open a ",r.createElement("a",{href:"https://github.com/ThorstenSuckow/thorsten.suckow-homberg.de"},"Pull Request")," or ",r.createElement("a",{href:"mailto:thorsten@suckow-homberg.de"},"send me an Email"),".")}function A(e){let{url:t}=e;const[n,a]=r.useState("");return o()(t).then((e=>{e.text().then((e=>a(e)))})),r.createElement(i.Z,{language:"php"},n)}},6739:(e,t,n)=>{"use strict";n.d(t,{A:()=>l,E:()=>a});var r=n(7294);function a(e){let{name:t,pp:n}=e;const a=`/docs/bibliography#${t.toLowerCase()}`;return r.createElement("a",{href:a},"[",r.createElement("span",{className:"bibRef"},"\ud83d\udcd6",t),n?`, ${n.includes("-")?"pp":"p"}. ${n}`:"","]")}function l(e){let{name:t,file:n}=e;Object.entries({sd:"softwaredesign",sa:"softwarearchitecture",cs:"computerscience"}).some((e=>{let[t,r]=e;if(n.startsWith(`${t}.`))return n=n.replace(`${t}.`,`${r}.`),!0}));const a=`/docs/toolbox/${n}`;return r.createElement("a",{href:a,className:"glosRef"},t)}},4781:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>A,default:()=>g,frontMatter:()=>d,metadata:()=>f,toc:()=>h});var r,a=n(7462),l=n(7294),i=n(3905),s=n(6739),o=n(4461),c=n(2490);function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}const u=e=>{let{title:t,titleId:n,...a}=e;return l.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:405,height:352,"aria-labelledby":n},a),t?l.createElement("title",{id:n},t):null,r||(r=l.createElement("g",{transform:"translate(-95)"},l.createElement("path",{d:"M120 26a6 6 0 0 1 6-6h348a6 6 0 0 1 6 6v88a6 6 0 0 1-6 6H126a6 6 0 0 1-6-6zM120 57.6h360",stroke:"#000",fill:"none"}),l.createElement("use",{xlinkHref:"#a",transform:"translate(267.05 42.6)"}),l.createElement("use",{xlinkHref:"#b",transform:"translate(320 42.6)"}),l.createElement("use",{xlinkHref:"#c",transform:"translate(132 93.544)"}),l.createElement("use",{xlinkHref:"#d",transform:"translate(151.136 93.544)"}),l.createElement("use",{xlinkHref:"#e",transform:"translate(256.383 93.544)"}),l.createElement("path",{d:"M115 238a6 6 0 0 1 6-6h348a6 6 0 0 1 6 6v88a6 6 0 0 1-6 6H121a6 6 0 0 1-6-6zM115 269.6h360",stroke:"#000",fill:"none"}),l.createElement("use",{xlinkHref:"#a",transform:"translate(262.05 254.6)"}),l.createElement("use",{xlinkHref:"#f",transform:"translate(315 254.6)"}),l.createElement("use",{xlinkHref:"#c",transform:"translate(127 305.544)"}),l.createElement("use",{xlinkHref:"#g",transform:"translate(146.136 305.544)"}),l.createElement("use",{xlinkHref:"#h",transform:"translate(226.321 305.544)"}),l.createElement("use",{xlinkHref:"#e",transform:"translate(252.926 305.544)"}),l.createElement("path",{d:"M300 143.5V231",stroke:"#000",fill:"none"}),l.createElement("path",{d:"M300 121.48 312.73 143h-25.46z",stroke:"#000",fill:"#fff"}),l.createElement("path",{d:"M300.5 231.5h-1v-.5h1z",stroke:"#000",strokeWidth:.05}),l.createElement("g",{className:"lucid-layer",display:"block",stroke:"#000"},l.createElement("path",{d:"M240 257V100.5",fill:"none"}),l.createElement("path",{d:"m240 279.02-12.73-21.52h25.46z",fill:"#fff"}),l.createElement("path",{d:"M240 100.5v-.5",fill:"none"})),l.createElement("defs",null,l.createElement("path",{d:"M67-125c0 53 21 87 73 88 37 1 54-22 65-47l45 17C233-25 199 4 140 4 58 4 20-42 15-125 8-235 124-281 211-232c18 10 29 29 36 50l-46 12c-8-25-30-41-62-41-52 0-71 34-72 86",id:"i"}),l.createElement("path",{d:"M25 0v-261h50V0H25",id:"j"}),l.createElement("path",{d:"M133-34C117-15 103 5 69 4 32 3 11-16 11-54c-1-60 55-63 116-61 1-26-3-47-28-47-18 1-26 9-28 27l-52-2c7-38 36-58 82-57s74 22 75 68l1 82c-1 14 12 18 25 15v27c-30 8-71 5-69-32zm-48 3c29 0 43-24 42-57-32 0-66-3-65 30 0 17 8 27 23 27",id:"k"}),l.createElement("path",{d:"M137-138c1-29-70-34-71-4 15 46 118 7 119 86 1 83-164 76-172 9l43-7c4 19 20 25 44 25 33 8 57-30 24-41C81-84 22-81 20-136c-2-80 154-74 161-7",id:"l"}),l.createElement("path",{d:"m199 0-22-63H83L61 0H9l90-248h61L250 0h-51zm-33-102-36-108c-10 38-24 72-36 108h72",id:"m"}),l.createElement("path",{fill:"#000",d:"M118-107v75H92v-75H18v-26h74v-75h26v75h74v26h-74",id:"n"}),l.createElement("path",{fill:"#000",d:"M210-169c-67 3-38 105-44 169h-31v-121c0-29-5-50-35-48C34-165 62-65 56 0H25l-1-190h30c1 10-1 24 2 32 10-44 99-50 107 0 11-21 27-35 58-36 85-2 47 119 55 194h-31v-121c0-29-5-49-35-48",id:"o"}),l.createElement("path",{fill:"#000",d:"M100-194c63 0 86 42 84 106H49c0 40 14 67 53 68 26 1 43-12 49-29l28 8c-11 28-37 45-77 45C44 4 14-33 15-96c1-61 26-98 85-98zm52 81c6-60-76-77-97-28-3 7-6 17-6 28h103",id:"p"}),l.createElement("path",{fill:"#000",d:"M59-47c-2 24 18 29 38 22v24C64 9 27 4 27-40v-127H5v-23h24l9-43h21v43h35v23H59v120",id:"q"}),l.createElement("path",{fill:"#000",d:"M106-169C34-169 62-67 57 0H25v-261h32l-1 103c12-21 28-36 61-36 89 0 53 116 60 194h-32v-121c2-32-8-49-39-48",id:"r"}),l.createElement("path",{fill:"#000",d:"M100-194c62-1 85 37 85 99 1 63-27 99-86 99S16-35 15-95c0-66 28-99 85-99zM99-20c44 1 53-31 53-75 0-43-8-75-51-75s-53 32-53 75 10 74 51 75",id:"s"}),l.createElement("path",{fill:"#000",d:"M85-194c31 0 48 13 60 33l-1-100h32l1 261h-30c-2-10 0-23-3-31C134-8 116 4 85 4 32 4 16-35 15-94c0-66 23-100 70-100zm9 24c-40 0-46 34-46 75 0 40 6 74 45 74 42 0 51-32 51-76 0-42-9-74-50-73",id:"t"}),l.createElement("path",{fill:"#000",d:"M87 75C49 33 22-17 22-94c0-76 28-126 65-167h31c-38 41-64 92-64 168S80 34 118 75H87",id:"u"}),l.createElement("path",{fill:"#000",d:"M127-220V0H93v-220H8v-28h204v28h-85",id:"v"}),l.createElement("path",{fill:"#000",d:"M47-170H22l-4-78h33",id:"w"}),l.createElement("path",{fill:"#000",d:"M141-36C126-15 110 5 73 4 37 3 15-17 15-53c-1-64 63-63 125-63 3-35-9-54-41-54-24 1-41 7-42 31l-33-3c5-37 33-52 76-52 45 0 72 20 72 64v82c-1 20 7 32 28 27v20c-31 9-61-2-59-35zM48-53c0 20 12 33 32 33 41-3 63-29 60-74-43 2-92-5-92 41",id:"x"}),l.createElement("path",{fill:"#000",d:"M33-261c38 41 65 92 65 168S71 34 33 75H2C39 34 66-17 66-93S39-220 2-261h31",id:"y"}),l.createElement("path",{d:"M182-130c37 4 62 22 62 59C244 23 116-4 24 0v-248c84 5 203-23 205 63 0 31-19 50-47 55zM76-148c40-3 101 13 101-30 0-44-60-28-101-31v61zm0 110c48-3 116 14 116-37 0-48-69-32-116-35v72",id:"z"}),l.createElement("g",{id:"a"},l.createElement("use",{transform:"scale(.05)",xlinkHref:"#i"}),l.createElement("use",{transform:"translate(12.95) scale(.05)",xlinkHref:"#j"}),l.createElement("use",{transform:"translate(17.95) scale(.05)",xlinkHref:"#k"}),l.createElement("use",{transform:"translate(27.95) scale(.05)",xlinkHref:"#l"}),l.createElement("use",{transform:"translate(37.95) scale(.05)",xlinkHref:"#l"})),l.createElement("g",{id:"d"},l.createElement("use",{transform:"rotate(.413) scale(.06173)",xlinkHref:"#o"}),l.createElement("use",{transform:"matrix(.06173 0 0 .06173 18.457 0)",xlinkHref:"#p"}),l.createElement("use",{transform:"matrix(.06173 0 0 .06173 30.802 0)",xlinkHref:"#q"}),l.createElement("use",{transform:"matrix(.06173 0 0 .06173 36.975 0)",xlinkHref:"#r"}),l.createElement("use",{transform:"matrix(.06173 0 0 .06173 49.321 0)",xlinkHref:"#s"}),l.createElement("use",{transform:"matrix(.06173 0 0 .06173 61.667 0)",xlinkHref:"#t"}),l.createElement("use",{transform:"matrix(.06173 0 0 .06173 74.012 0)",xlinkHref:"#u"}),l.createElement("use",{transform:"matrix(.06173 0 0 .06173 81.358 0)",xlinkHref:"#v"}),l.createElement("use",{transform:"matrix(.06173 0 0 .06173 94.877 0)",xlinkHref:"#w"})),l.createElement("g",{id:"e"},l.createElement("use",{transform:"rotate(.413) scale(.06173)",xlinkHref:"#x"}),l.createElement("use",{transform:"matrix(.06173 0 0 .06173 12.346 0)",xlinkHref:"#y"})),l.createElement("g",{id:"g"},l.createElement("use",{transform:"rotate(.413) scale(.06173)",xlinkHref:"#o"}),l.createElement("use",{transform:"matrix(.06173 0 0 .06173 18.457 0)",xlinkHref:"#p"}),l.createElement("use",{transform:"matrix(.06173 0 0 .06173 30.802 0)",xlinkHref:"#q"}),l.createElement("use",{transform:"matrix(.06173 0 0 .06173 36.975 0)",xlinkHref:"#r"}),l.createElement("use",{transform:"matrix(.06173 0 0 .06173 49.321 0)",xlinkHref:"#s"}),l.createElement("use",{transform:"matrix(.06173 0 0 .06173 61.667 0)",xlinkHref:"#t"})),l.createElement("g",{id:"h"},l.createElement("use",{transform:"rotate(.413) scale(.06173)",xlinkHref:"#u"}),l.createElement("use",{transform:"matrix(.06173 0 0 .06173 7.346 0)",xlinkHref:"#v"})),l.createElement("use",{transform:"scale(.05)",xlinkHref:"#m",id:"b"}),l.createElement("use",{transform:"rotate(.413) scale(.06173)",xlinkHref:"#n",id:"c"}),l.createElement("use",{transform:"scale(.05)",xlinkHref:"#z",id:"f"})))))},m="data:image/png;base64,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",d={title:"Liskov Substitution Principle"},A="The Liskov Substitution Principle (Software Design)",f={unversionedId:"toolbox/softwaredesign.liskovsubstitutionprinciple",id:"toolbox/softwaredesign.liskovsubstitutionprinciple",title:"Liskov Substitution Principle",description:'The Liskov Substitution Principle (LSP) governs design rules for object oriented languages and states that "subtypes must be substitutable for their base types." :',source:"@site/docs/toolbox/softwaredesign.liskovsubstitutionprinciple.mdx",sourceDirName:"toolbox",slug:"/toolbox/softwaredesign.liskovsubstitutionprinciple",permalink:"/docs/toolbox/softwaredesign.liskovsubstitutionprinciple",draft:!1,editUrl:"https://github.com/thorstensuckow/thorsten.suckow-homberg.de/tree/main/docs/toolbox/softwaredesign.liskovsubstitutionprinciple.mdx",tags:[],version:"current",lastUpdatedBy:"Thorsten Suckow-Homberg",lastUpdatedAt:1697801349,formattedLastUpdatedAt:"Oct 20, 2023",frontMatter:{title:"Liskov Substitution Principle"},sidebar:"toolbox",previous:{title:"Layered Architecture",permalink:"/docs/toolbox/softwarearchitecture.layeredarchitecture"},next:{title:"Metaclass",permalink:"/docs/toolbox/computerscience.metaclass"}},k={},h=[{value:"Example",id:"example",level:2},{value:"Implications",id:"implications",level:3}],v={toc:h},b="wrapper";function g(e){let{components:t,...n}=e;return(0,i.kt)(b,(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"the-liskov-substitution-principle-software-design"},"The Liskov Substitution Principle (Software Design)"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Liskov Substitution Principle")," (",(0,i.kt)("strong",{parentName:"p"},"LSP"),") governs design rules for object oriented languages and states that ",(0,i.kt)("em",{parentName:"p"},'"subtypes must be substitutable for their base types."')," ",(0,i.kt)(s.E,{name:"ASD",pp:"111",mdxType:"BibRef"}),":"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},'If for each object o1 of type S there is an object o2 of type T such that for all programs P defined in terms of T, the behavior of P is unchanged when o1 is substituted for o2, then S is a subtype of T."')," ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Barbara_Liskov"},"Barbara Liskov"),", ",(0,i.kt)("a",{parentName:"p",href:"https://dl.acm.org/doi/pdf/10.1145/62139.62141"},"Data Abstraction and Hierarchy"))),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Liskov Substitution Principle")," is one of the ",(0,i.kt)(s.A,{name:"SOLID",file:"sd.solid",mdxType:"GlosRef"}),"-principles."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"In languages that conform to the ",(0,i.kt)("strong",{parentName:"p"},"LSP"),", the effects of this principle can easily be reproduced:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"    class A\n    {\n        public function itsName()\n        {\n            echo static::class;\n        }\n    }\n\n    class B extends A{}\n\n    class C extends B {}\n\n    class Client\n    {\n        public function process(A $a): B\n        {\n            $a->itsName();\n            return new B();\n        }\n    }\n")),(0,i.kt)("p",null,"Here, the ",(0,i.kt)("inlineCode",{parentName:"p"},"process"),"-function of ",(0,i.kt)("strong",{parentName:"p"},"Client")," digests an instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"A"),", calls a method on it and returns ",(0,i.kt)("inlineCode",{parentName:"p"},"B"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"    $client = new Client();\n    $client->process(new A()); // A\n")),(0,i.kt)("p",null,"According to the ",(0,i.kt)("strong",{parentName:"p"},"LSP"),", the code must also work if we pass any subtype of ",(0,i.kt)("inlineCode",{parentName:"p"},"A"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"    $client = new Client();\n    $client->process(new A()); // A\n    $client->process(new B()); // B\n    $client->process(new C()); // C\n")),(0,i.kt)("p",null,"Once we create a specification of ",(0,i.kt)("strong",{parentName:"p"},"Client"),", let's say ",(0,i.kt)("strong",{parentName:"p"},"ConcreteClient"),", we must be careful when overwriting ",(0,i.kt)("inlineCode",{parentName:"p"},"process()"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"class ConcreteClient extends Client\n{\n    public function process(A $a): B {}\n}\n")),(0,i.kt)("p",null,"Here, the argument type and the return type do not change. Any ",(0,i.kt)("strong",{parentName:"p"},"ConcreteClient")," can be used as a substitute for\n",(0,i.kt)("strong",{parentName:"p"},"Client"),". However, if we narrow the type of the argument down to ",(0,i.kt)("inlineCode",{parentName:"p"},"B"),", PHP quits with an error message befoe running the\nscript:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"class ConcreteClient extends Client\n{\n    public function process(B $a): B {}\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Fatal error: Declaration of ConcreteClient::process(B $a): B must be compatible with Client::process(A $a): B\n")),(0,i.kt)("h3",{id:"implications"},"Implications"),(0,i.kt)("p",null,"The implications are as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Argument-Types may be widened, and must not be narrowed down (",(0,i.kt)("em",{parentName:"strong"},"Contravariance"),")")),(0,i.kt)("p",{parentName:"li"}," ",(0,i.kt)("strong",{parentName:"p"},"Contravariance"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"B < A (B subtype A), A:T, B:T argument types; if A:T < B:T, then T is Contravariant")),(0,i.kt)("p",{parentName:"li"}," At this point, we are not allowed to narrow the argument-type passed to ",(0,i.kt)("inlineCode",{parentName:"p"},"process()")," down. This is because the\nparent implementation ",(0,i.kt)("inlineCode",{parentName:"p"},"Client::process()")," sets up an interface all subtypes have to conform to: It seems logical at first\nto be allowed to pass an ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," for an ",(0,i.kt)("inlineCode",{parentName:"p"},"A"),", since ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," is an ",(0,i.kt)("inlineCode",{parentName:"p"},"A"),", but any program doing so would break as soon as\n",(0,i.kt)("inlineCode",{parentName:"p"},"ConcreteClient::process()")," accesses a field only known to ",(0,i.kt)("inlineCode",{parentName:"p"},"B"),", and an ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," is passed instead. Thus, narrowing down\nis not allowed with the given example."))),(0,i.kt)(c._b,{figure:1,title:"With Contravariance, the inheritance hierarchy of argument types must be in opposite direction to the inheritance of the method's classes they're used in.",mdxType:"UmlEmbed"},(0,i.kt)(u,{mdxType:"Contravariance"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Return-Types may be narrowed down, and must not be widened (",(0,i.kt)("em",{parentName:"strong"},"Covariance"),")")),(0,i.kt)("p",{parentName:"li"}," ",(0,i.kt)("strong",{parentName:"p"},"Covariance"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"B < A (B subtype A), B:T, A:T return types; if B:T < A:T, then T is Covariant")),(0,i.kt)("p",{parentName:"li"}," Conversely, return types must not be widened. Given our example, any program querying ",(0,i.kt)("inlineCode",{parentName:"p"},"Client::process()")," expects an\n",(0,i.kt)("inlineCode",{parentName:"p"},"B"),". If that return type would be widened to ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"ConcreteClient::process()"),", any program that tries to access a field\nspecific to ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," would break if ",(0,i.kt)("inlineCode",{parentName:"p"},"ConcreteClient::process()")," instead returns an ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," - which is in fact unaware of ",(0,i.kt)("inlineCode",{parentName:"p"},"B"),"."))),(0,i.kt)(c.cx,{figure:2,modeAware:!0,title:"With Covariance, the inheritance hierarchy of return types must be in the same direction to the inheritance of the method's classes they're used for.",mdxType:"Embed"},(0,i.kt)("img",{src:m})),(0,i.kt)(o.x,{mdxType:"BackButton"}))}g.isMDXComponent=!0},2480:()=>{}}]);