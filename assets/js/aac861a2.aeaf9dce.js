(self.webpackChunkthorsten_suckow_homberg_de=self.webpackChunkthorsten_suckow_homberg_de||[]).push([[7942],{33:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"articles/creating-extjs-applications-with-coon-js/introduction","title":"Part 1: Introduction","description":"An introduction to the coon.js-Framework","source":"@site/docs/articles/creating-extjs-applications-with-coon-js/1-introduction.mdx","sourceDirName":"articles/creating-extjs-applications-with-coon-js","slug":"/articles/creating-extjs-applications-with-coon-js/introduction","permalink":"/docs/articles/creating-extjs-applications-with-coon-js/introduction","draft":false,"unlisted":false,"editUrl":"https://github.com/thorstensuckow/thorsten.suckow-homberg.de/tree/main/docs/articles/creating-extjs-applications-with-coon-js/1-introduction.mdx","tags":[],"version":"current","lastUpdatedBy":"Thorsten Suckow-Homberg","lastUpdatedAt":1744575815000,"sidebarPosition":1,"frontMatter":{"title":"Part 1: Introduction","description":"An introduction to the coon.js-Framework"},"sidebar":"docs","previous":{"title":"Creating Ext JS Applications with coon.js","permalink":"/docs/articles/creating-extjs-applications-with-coon-js/"},"next":{"title":"Part 2: Packages and Configuration Options","permalink":"/docs/articles/creating-extjs-applications-with-coon-js/packages-and-configuration-options"}}');var o=n(4848),s=n(8453),a=n(2172);const r=n.p+"assets/images/bufferedstoreslides-66b9e9e29eea00fd09f23a06d60cb795.png",c={title:"Part 1: Introduction",description:"An introduction to the coon.js-Framework"},l=void 0,h={},d=[{value:"Core Packages",id:"core-packages",level:2},{value:"extjs-lib-core",id:"extjs-lib-core",level:3},{value:"extjs-lib-comp",id:"extjs-lib-comp",level:3},{value:"extjs-comp-navport",id:"extjs-comp-navport",level:3}];function p(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsx)(a.ZX,{when:"October 2021",where:["medium.com","https://medium.com/@thorstensuckow/creating-extjs-applications-with-coon-js-part-1-52c820d0b27c"]})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.em,{children:"Rapid Sencha Ext JS application building"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://github.com/coon-js",children:"coon.js"})," introduces itself with \u201c",(0,o.jsxs)(t.em,{children:["Toolset for rapid ",(0,o.jsx)(t.a,{href:"http://sencha.com",children:"Sencha Ext JS"})," application building\u201d"]}),", and I\u2019m using it for a few years now in various projects, including ",(0,o.jsx)(t.a,{href:"http://conjoon.org",children:"conjoon"}),", a webmail suite handcrafted with JavaScript and built for the web."]}),"\n",(0,o.jsxs)(t.p,{children:["In this article series, I want to give insights on how to use the (",(0,o.jsx)(t.a,{href:"http://npmjs.org",children:"NPM"}),") packages which are part of coon.js, and how to create configurable and extensible ExtJS applications with their help."]}),"\n",(0,o.jsx)(t.p,{children:"The introduction to this series gives a quick overview of the core packages of the project, and what they are used for."}),"\n",(0,o.jsx)(a.$z,{title:'The user interface of <a target="_blank" href="https://conjoon.org">conjoon</a>',url:"https://cdn-images-1.medium.com/max/3306/1*HFuOVv5rDQzfC4JilRXhhQ.png",figure:1}),"\n",(0,o.jsx)(t.h2,{id:"core-packages",children:"Core Packages"}),"\n",(0,o.jsxs)(t.p,{children:["coon.js consists of various packages which are maintained over at ",(0,o.jsx)(t.a,{href:"https://github.com/orgs/coon-js/repositories",children:"github.com"}),". The most notable packages \u2014 for application development, that is \u2014 are:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"extjs-lib-core"})}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"extjs-lib-comp"})}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"extjs-comp-navport"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"From top to bottom (as listed), the packages depend on each other \u2014 extjs-lib-comp depends on extjs-lib-core, and extjs-comp-navport on extjs-lib-comp. Here\u2019s how and why:"}),"\n",(0,o.jsx)(t.h3,{id:"extjs-lib-core",children:"extjs-lib-core"}),"\n",(0,o.jsx)(t.p,{children:"extjs-lib-core is a core package that provides basic functionality and utility methods for building ExtJS applications. The core-package provides non-view related implementations."}),"\n",(0,o.jsxs)(t.p,{children:["While it implements one of the most important core features that allow developers to quickly tailor ExtJS applications, it is home of ",(0,o.jsx)(t.a,{href:"https://docs.sencha.com/extjs/7.4.0/classic/Ext.data.PageMap.html",children:"PageMap"})," extensions that allow for dynamically adding and removing data from a ",(0,o.jsx)(t.a,{href:"https://docs.sencha.com/extjs/7.4.0/classic/Ext.data.BufferedStore.html",children:"BufferedStore"}),"."]}),"\n","\n",(0,o.jsx)(a.$z,{url:r,figure:2,title:'A presentation I gave about BufferedStores and the hurdles developers face when implementing add/remove-operations given a virtual data set <a href="https://speakerdeck.com/thorstensuckow/extjs-buffered-store-internals" target="_blank">(SpeakerDeck)</a>'}),"\n",(0,o.jsxs)(t.p,{children:["The fundament, however, is ",(0,o.jsx)(t.a,{href:"https://github.com/coon-js/extjs-lib-core/blob/main/src/app/Application.js",children:"coon.core.app.Application"})," \u2014 a specification of Ext.app.Application which provides (almost) automated routing and advanced launch hooks."]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"Fine tune your applications and the modules they expose with the help of agnostic packages"}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["The automated launch hooks make it possible to plug into the application\u2019s setup and all the processes involved during launch, to add plugins and packages \u2014 not during build-time, but ",(0,o.jsx)(t.strong,{children:"during runtime"})," of an ExtJS application. This lets you fine tune your applications and the modules they expose with the help of agnostic packages which can be developed completely independent from each other, and independent from the application they\u2019re later used in. This functionality is abstracted to a larger degree in this package, and to make more sense of it in an UI-environment, extjs-lib-comp comes into play."]}),"\n",(0,o.jsx)(a.$z,{title:'The logo for the coon.js project. Shoutout to <a target="_blank" href="https://kevineschweiler.de">Kevin</a>',url:"https://cdn-images-1.medium.com/max/2000/0*87gGgf8nvtX90dMd",figure:3}),"\n",(0,o.jsx)(t.h3,{id:"extjs-lib-comp",children:"extjs-lib-comp"}),"\n",(0,o.jsx)(t.p,{children:"extjs-lib-comp builds upon extjs-lib-core and goes more into the direction we\u2019d expect from a library that enhances ones ExtJS experience \u2014 it provides a collection of extended view functionality to be used with ExtJS, among other things:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://github.com/coon-js/extjs-lib-comp/blob/main/classic/src/grid/feature/Livegrid.js",children:"Livegrid-plugin"})," for ExtJS grids that implement the PageMap extensions from extjs-lib-core"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"A Viewport specification providing easy access to routing options, routes and fallbacks, if routes won\u2019t match"}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["a ",(0,o.jsx)(t.a,{href:"https://github.com/coon-js/extjs-lib-comp/blob/main/src/app/Application.js",children:"view-specific application"})," implementation for processing launch hooks"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"bug fixes and improvements to existing ExtJS components"}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"\u2026 and of course (beautiful) out-of-the-box components"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"extjs-comp-navport",children:"extjs-comp-navport"}),"\n",(0,o.jsx)(t.p,{children:"It all culminates in extjs-comp-navport which represents the backplate for an application built with coon.js \u2014 a viewport template that is easily configurable with packages that serve as module representatives, allowing routing, navigation and managing views (e.g. navigation trees, module specific toolbars) with ease."}),"\n",(0,o.jsx)(t.p,{children:"The next part in this article series will shed some light on the configuration options that come with an application built with extjs-lib-core, before we take a deep dive and build an application from scratch using NPM and coon.js."})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},477:()=>{},2172:(e,t,n)=>{"use strict";n.d(t,{$z:()=>p,C9:()=>h,IX:()=>x,ZX:()=>m,eJ:()=>d,uR:()=>u});var i=n(6540),o=n(4882),s=n(8069),a=n(4945),r=n.n(a),c=n(2897),l=n(4848);function h(e){let{width:t,children:n,title:i,figure:s,modeAware:a}=e;return(0,l.jsxs)("div",{style:{width:t,textAlign:"center",margin:20},children:[(0,l.jsx)("div",{className:!1!==a?"umlImg":"",children:n}),(0,l.jsx)("div",{style:{textAlign:"center"},children:(0,l.jsxs)("sup",{children:[(0,l.jsx)("b",{children:o.A.isString(s)?s:`Figure ${s??1}`})," ",(0,l.jsx)("span",{dangerouslySetInnerHTML:{__html:i}})]})})]})}function d(e){let{id:t,source:n,title:i}=e;return(0,l.jsx)(h,{modeAware:!1,title:i,figure:`Source ${n}`,children:(0,l.jsx)(c.A,{id:t})})}function p(e){let{url:t,figure:n,title:i}=e;return(0,l.jsx)(h,{modeAware:!1,figure:n,title:i,children:(0,l.jsx)("img",{alt:"{title}",src:t})})}function u(e){let{children:t,figure:n,title:i}=e;return(0,l.jsx)(h,{modeAware:!0,figure:n,title:i,children:t})}function m(e){let{when:t,where:n}=e;const[i,o]=n;return(0,l.jsxs)("div",{children:["This article was originally published in ",t," at ",(0,l.jsx)("a",{target:"_blank",href:o,children:i}),". Some formatting might have get lost during the migration to this site: If you think you spotted an issue caused by malformed formatting, feel free to open a ",(0,l.jsx)("a",{href:"https://github.com/ThorstenSuckow/thorsten.suckow-homberg.de",children:"Pull Request"})," or ",(0,l.jsx)("a",{href:"mailto:thorsten@suckow-homberg.de",children:"send me an Email"}),"."]})}function x(e){let{url:t}=e;const[n,o]=i.useState("");return r()(t).then((e=>{e.text().then((e=>o(e)))})),(0,l.jsx)(s.A,{language:"php",children:n})}},8453:(e,t,n)=>{"use strict";n.d(t,{R:()=>a,x:()=>r});var i=n(6540);const o={},s=i.createContext(o);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);