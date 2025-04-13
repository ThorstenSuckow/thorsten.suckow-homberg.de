(self.webpackChunkthorsten_suckow_homberg_de=self.webpackChunkthorsten_suckow_homberg_de||[]).push([[2143],{477:()=>{},1779:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>g,frontMatter:()=>c,metadata:()=>s,toc:()=>m});const s=JSON.parse('{"id":"toolbox/ddd.domainlayer","title":"Domain Layer","description":"The Domain Layer is a layer in  a  and holds all implementation related to the business of the software, such as rules and concepts, manifesting in , expressed through a  and bounded by .","source":"@site/docs/toolbox/ddd.domainlayer.mdx","sourceDirName":"toolbox","slug":"/toolbox/ddd.domainlayer","permalink":"/docs/toolbox/ddd.domainlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/thorstensuckow/thorsten.suckow-homberg.de/tree/main/docs/toolbox/ddd.domainlayer.mdx","tags":[],"version":"current","lastUpdatedBy":"Thorsten Suckow-Homberg","lastUpdatedAt":1744575815000,"frontMatter":{"title":"Domain Layer"},"sidebar":"toolbox","previous":{"title":"Domain Driven Design","permalink":"/docs/toolbox/ddd.domaindrivendesign"},"next":{"title":"Domain Model","permalink":"/docs/toolbox/ddd.domainmodel"}}');var o=n(4848),r=n(8453),i=n(5142),a=n(4843),d=n(2172);const l=n.p+"assets/images/layer.svg-10d4f597cb30fc462a9ef47418226e7d.png",c={title:"Domain Layer"},u="Domain Layer (DDD)",h={},m=[];function x(e){const t={blockquote:"blockquote",em:"em",h1:"h1",header:"header",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"domain-layer-ddd",children:"Domain Layer (DDD)"})}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.strong,{children:"Domain Layer"})," is a ",(0,o.jsx)(t.em,{children:"layer"})," in  a ",(0,o.jsx)(a.l,{name:"Layered Architecture",file:"sa.layeredarchitecture"})," and holds all implementation related to the business of the software, such as rules and concepts, manifesting in ",(0,o.jsx)(a.l,{name:"Domain Models",file:"ddd.domainmodel"}),", expressed through a ",(0,o.jsx)(a.l,{name:"Ubiquitous Language",file:"ddd.ubiquitouslanguage"})," and bounded by ",(0,o.jsx)(a.l,{name:"Contexts",file:"ddd.boundedcontext"}),"."]}),"\n","\n",(0,o.jsx)(d.C9,{figure:1,title:"A domain with multiple Bounded Contexts",children:(0,o.jsx)("img",{src:l})}),"\n",(0,o.jsxs)(t.p,{children:["In ",(0,o.jsx)(t.strong,{children:"Figure 1"}),", a ",(0,o.jsx)(t.strong,{children:"Domain Layer"})," is depicted with multiple ",(0,o.jsx)(t.strong,{children:"Bounded Contexts"}),". Each ",(0,o.jsx)(t.strong,{children:"Bounded Context"})," is semantically defined through its ",(0,o.jsx)(t.strong,{children:"Ubiquitous Language"}),". The vocabulary of an ",(0,o.jsx)(t.strong,{children:"Ubiquitous Language"})," does not exclusively belong to one ",(0,o.jsx)(t.strong,{children:"Bounded Context"}),", words an meanings might be (re-)used across boundaries. Each ",(0,o.jsx)(t.strong,{children:"Bounded Context"})," has a ",(0,o.jsx)(t.strong,{children:"Domain Model"})," that in turn consists of ",(0,o.jsx)(t.strong,{children:"Domain Objects"}),", such as ",(0,o.jsx)(a.l,{name:"Aggregates",file:"ddd.aggregate"})," (with ",(0,o.jsx)(a.l,{name:"Value Objects",file:"sd.valueobject"})," and ",(0,o.jsx)(a.l,{name:"Entities",file:"sd.Entity"}),") and ",(0,o.jsx)(a.l,{name:"Repositories",file:"sd.repository"}),", amongst others."]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.em,{children:'"This layer is the heart of business software."'})," ",(0,o.jsx)(a.R,{name:"DDD",pp:"70"})]}),"\n"]}),"\n",(0,o.jsx)(i.o,{})]})}function g(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(x,{...e})}):x(e)}},2172:(e,t,n)=>{"use strict";n.d(t,{$z:()=>h,C9:()=>c,IX:()=>g,ZX:()=>x,eJ:()=>u,uR:()=>m});var s=n(6540),o=n(4882),r=n(8069),i=n(4945),a=n.n(i),d=n(2897),l=n(4848);function c(e){let{width:t,children:n,title:s,figure:r,modeAware:i}=e;return(0,l.jsxs)("div",{style:{width:t,textAlign:"center",margin:20},children:[(0,l.jsx)("div",{className:!1!==i?"umlImg":"",children:n}),(0,l.jsx)("div",{style:{textAlign:"center"},children:(0,l.jsxs)("sup",{children:[(0,l.jsx)("b",{children:o.A.isString(r)?r:`Figure ${r??1}`})," ",(0,l.jsx)("span",{dangerouslySetInnerHTML:{__html:s}})]})})]})}function u(e){let{id:t,source:n,title:s}=e;return(0,l.jsx)(c,{modeAware:!1,title:s,figure:`Source ${n}`,children:(0,l.jsx)(d.A,{id:t})})}function h(e){let{url:t,figure:n,title:s}=e;return(0,l.jsx)(c,{modeAware:!1,figure:n,title:s,children:(0,l.jsx)("img",{alt:"{title}",src:t})})}function m(e){let{children:t,figure:n,title:s}=e;return(0,l.jsx)(c,{modeAware:!0,figure:n,title:s,children:t})}function x(e){let{when:t,where:n}=e;const[s,o]=n;return(0,l.jsxs)("div",{children:["This article was originally published in ",t," at ",(0,l.jsx)("a",{target:"_blank",href:o,children:s}),". Some formatting might have get lost during the migration to this site: If you think you spotted an issue caused by malformed formatting, feel free to open a ",(0,l.jsx)("a",{href:"https://github.com/ThorstenSuckow/thorsten.suckow-homberg.de",children:"Pull Request"})," or ",(0,l.jsx)("a",{href:"mailto:thorsten@suckow-homberg.de",children:"send me an Email"}),"."]})}function g(e){let{url:t}=e;const[n,o]=s.useState("");return a()(t).then((e=>{e.text().then((e=>o(e)))})),(0,l.jsx)(r.A,{language:"php",children:n})}},4843:(e,t,n)=>{"use strict";n.d(t,{R:()=>o,l:()=>r});n(6540);var s=n(4848);function o(e){let{name:t,pp:n}=e;const o=`/docs/bibliography#${t.toLowerCase()}`;return(0,s.jsxs)("a",{href:o,children:["[",(0,s.jsxs)("span",{className:"bibRef",children:["\ud83d\udcd6",t]}),n?`, ${n.includes("-")?"pp":"p"}. ${n}`:"","]"]})}function r(e){let{name:t,file:n}=e;Object.entries({sd:"softwaredesign",sa:"softwarearchitecture",cs:"computerscience"}).some((e=>{let[t,s]=e;if(n.startsWith(`${t}.`))return n=n.replace(`${t}.`,`${s}.`),!0}));const o=`/docs/toolbox/${n}`;return(0,s.jsx)("a",{href:o,className:"glosRef",children:t})}},5142:(e,t,n)=>{"use strict";n.d(t,{o:()=>o});n(6540);var s=n(4848);function o(){return(0,s.jsx)("div",{style:{width:"100%",textAlign:"right"},children:(0,s.jsx)("a",{style:{textDecoration:"underline"},onClick:()=>history.go(-1),href:"#",children:"Back"})})}},8453:(e,t,n)=>{"use strict";n.d(t,{R:()=>i,x:()=>a});var s=n(6540);const o={},r=s.createContext(o);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);