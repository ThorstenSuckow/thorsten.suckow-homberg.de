(self.webpackChunkthorsten_suckow_homberg_de=self.webpackChunkthorsten_suckow_homberg_de||[]).push([[509],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>c,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),g=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=g(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=g(a),m=r,u=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(u,s(s({ref:t},c),{},{components:a})):n.createElement(u,s({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var g=2;g<o;g++)s[g]=a[g];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4461:(e,t,a)=>{"use strict";a.d(t,{x:()=>r});var n=a(7294);function r(){return n.createElement("div",{style:{width:"100%",textAlign:"right"}},n.createElement("a",{style:{textDecoration:"underline"},onClick:()=>history.go(-1),href:"#"},"Back"))}},2490:(e,t,a)=>{"use strict";a.d(t,{$o:()=>c,_b:()=>d,cx:()=>g,e2:()=>p,in:()=>u,t2:()=>m});var n=a(7294),r=a(5075),o=a(9943),s=a(814),i=a(4098),l=a.n(i);function g(e){let{width:t,children:a,title:o,figure:s,modeAware:i}=e;return n.createElement("div",{style:{width:t,textAlign:"center",margin:20}},n.createElement("div",{className:!1!==i?"umlImg":""},a),n.createElement("div",{style:{textAlign:"center"}},n.createElement("sup",null,n.createElement("b",null,r.Z.isString(s)?s:`Figure ${s??1}`)," ",n.createElement("span",{dangerouslySetInnerHTML:{__html:o}}))))}function c(e){let{id:t,source:a,title:r}=e;return n.createElement(g,{modeAware:!1,title:r,figure:`Source ${a}`},n.createElement(o.Z,{id:t}))}function p(e){let{url:t,figure:a,title:r}=e;return n.createElement(g,{modeAware:!1,figure:a,title:r},n.createElement("img",{alt:"{title}",src:t}))}function d(e){let{children:t,figure:a,title:r}=e;return n.createElement(g,{modeAware:!0,figure:a,title:r,children:t})}function m(e){let{when:t,where:a}=e;const[r,o]=a;return n.createElement("div",null,"This article was originally published in ",t," at ",n.createElement("a",{target:"_blank",href:o},r),". Some formatting might have get lost during the migration to this site: If you think you spotted an issue caused by malformed formatting, feel free to open a ",n.createElement("a",{href:"https://github.com/ThorstenSuckow/thorsten.suckow-homberg.de"},"Pull Request")," or ",n.createElement("a",{href:"mailto:thorsten@suckow-homberg.de"},"send me an Email"),".")}function u(e){let{url:t}=e;const[a,r]=n.useState("");return l()(t).then((e=>{e.text().then((e=>r(e)))})),n.createElement(s.Z,{language:"php"},a)}},6739:(e,t,a)=>{"use strict";a.d(t,{A:()=>o,E:()=>r});var n=a(7294);function r(e){let{name:t,pp:a}=e;const r=`/docs/bibliography#${t.toLowerCase()}`;return n.createElement("a",{href:r},"[",n.createElement("span",{className:"bibRef"},"\ud83d\udcd6",t),a?`, ${a.includes("-")?"pp":"p"}. ${a}`:"","]")}function o(e){let{name:t,file:a}=e;Object.entries({sd:"softwaredesign",sa:"softwarearchitecture",cs:"computerscience"}).some((e=>{let[t,n]=e;if(a.startsWith(`${t}.`))return a=a.replace(`${t}.`,`${n}.`),!0}));const r=`/docs/toolbox/${a}`;return n.createElement("a",{href:r,className:"glosRef"},t)}},9677:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>g,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=a(7462),r=(a(7294),a(3905)),o=(a(4461),a(6739)),s=a(2490);const i=a.p+"assets/images/email-aggregate.svg-8218524dbdc754f0f9945b6a6b81c1ce.png",l={title:"Aggregate"},g="Aggregate (DDD)",c={unversionedId:"toolbox/ddd.aggregate",id:"toolbox/ddd.aggregate",title:"Aggregate",description:'An Aggregate is an abstraction for an object that is important and of value to the business of its domain. It is often referred to as a "cluster" of objects, because it is modelled as a whole/parts-relationship holding  between  and .',source:"@site/docs/toolbox/ddd.aggregate.mdx",sourceDirName:"toolbox",slug:"/toolbox/ddd.aggregate",permalink:"/docs/toolbox/ddd.aggregate",draft:!1,editUrl:"https://github.com/thorstensuckow/thorsten.suckow-homberg.de/tree/main/docs/toolbox/ddd.aggregate.mdx",tags:[],version:"current",lastUpdatedBy:"Thorsten Suckow-Homberg",lastUpdatedAt:1704027986,formattedLastUpdatedAt:"Dec 31, 2023",frontMatter:{title:"Aggregate"},sidebar:"toolbox",previous:{title:"Actor",permalink:"/docs/toolbox/uml.actor"},next:{title:"Aggregation",permalink:"/docs/toolbox/uml.aggregation"}},p={},d=[{value:"Aggregate Root",id:"aggregate-root",level:2},{value:"Invariants",id:"invariants",level:2},{value:"Transactional Consistency",id:"transactional-consistency",level:2}],m={toc:d},u="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"aggregate-ddd"},"Aggregate (DDD)"),(0,r.kt)("p",null,"An ",(0,r.kt)("strong",{parentName:"p"},"Aggregate"),' is an abstraction for an object that is important and of value to the business of its domain. It is often referred to as a "cluster" of objects, because it is modelled as a ',(0,r.kt)("strong",{parentName:"p"},"whole/parts"),"-relationship holding ",(0,r.kt)(o.A,{name:"Associations",file:"uml.association",mdxType:"GlosRef"})," between ",(0,r.kt)(o.A,{name:"Entities",file:"sd.entity",mdxType:"GlosRef"})," and ",(0,r.kt)(o.A,{name:"Value Objects",file:"sd.valueobject",mdxType:"GlosRef"}),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Aggregates")," are not to be understood as data-structures: They have particularly responsibility for carrying out and applying logic and behavior characteristic to the ",(0,r.kt)(o.A,{name:"Bounded Context",file:"ddd.boundedcontext",mdxType:"GlosRef"})," they belong to."),(0,r.kt)("p",null,"An ",(0,r.kt)("strong",{parentName:"p"},"Aggregate")," is uniquely identifiable given high-level code semantics, e.g. through (one of) its attributes."),(0,r.kt)(s.cx,{figure:1,title:"An Email modeled as an Aggregate",mdxType:"Embed"},(0,r.kt)("img",{src:i})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Figure 1")," depicts the ",(0,r.kt)("strong",{parentName:"p"},"Aggregate"),"-model of an ",(0,r.kt)("strong",{parentName:"p"},"Email"),". This model suggests a simpification of an ",(0,r.kt)("strong",{parentName:"p"},"Email"),"-message in a way that clients do not have to be aware of the intricate structure ",(0,r.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc2822"},"[RFC2822]")," of an Email, but rather can add and remove attachments, edit its message body and update header fields given the interface provided by the ",(0,r.kt)("strong",{parentName:"p"},"Aggregate Root"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Email"),"."),(0,r.kt)("p",null,"Another ",(0,r.kt)("strong",{parentName:"p"},"Aggregate")," in form of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Mailbox")," (i.e. the folder that owns the ",(0,r.kt)("inlineCode",{parentName:"p"},"Email"),") can provide access to its ",(0,r.kt)("inlineCode",{parentName:"p"},"Emails"),"."),(0,r.kt)("h2",{id:"aggregate-root"},"Aggregate Root"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"root")," of the ",(0,r.kt)("strong",{parentName:"p"},"Aggregate")," ",(0,r.kt)("em",{parentName:"p"},"guards the objects")," of the ",(0,r.kt)("strong",{parentName:"p"},"Aggregate")," and is the only object that grants access to its elements. It is also responsible for making sure that any ",(0,r.kt)("strong",{parentName:"p"},"Aggregate"),"-defining ",(0,r.kt)("strong",{parentName:"p"},"invariants")," are not violated when business logic is applied, or during creation or reconstitution from a persistent state."),(0,r.kt)("p",null,"Identities of such embedded objects are often only of importance ",(0,r.kt)("em",{parentName:"p"},"within and to the Aggregate"),". Thus, an ",(0,r.kt)("strong",{parentName:"p"},"Aggegrate")," also designates a ",(0,r.kt)("strong",{parentName:"p"},"consistency boundary")," so that parts of the ",(0,r.kt)("strong",{parentName:"p"},"Aggregate")," may not be accessed from outside to ",(0,r.kt)("em",{parentName:"p"},"prevent violating")," the consistency. Control must only be given by the ",(0,r.kt)("strong",{parentName:"p"},"Aggregate Root"),".\nIn such cases, it is preferable to satisfy interested clients with transient references, often in the form of ",(0,r.kt)(o.A,{name:"Value Objects",file:"sd.valueobject",mdxType:"GlosRef"})," so any state of the ",(0,r.kt)("strong",{parentName:"p"},"Aggregate")," does not get accidentally changed, e.g. through ",(0,r.kt)(o.A,{name:"Aliasing Bugs",file:"cs.aliasing#aliasing-bugs",mdxType:"GlosRef"}),"."),(0,r.kt)("h2",{id:"invariants"},"Invariants"),(0,r.kt)("p",null,"Invariants for the ",(0,r.kt)("strong",{parentName:"p"},"Aggregate")," are rules that apply to the ",(0,r.kt)("strong",{parentName:"p"},"whole")," and are validated against its ",(0,r.kt)("strong",{parentName:"p"},"parts"),". The state of the ",(0,r.kt)("strong",{parentName:"p"},"Aggregate")," is only valid if no ",(0,r.kt)("strong",{parentName:"p"},"invariant")," is violated. ",(0,r.kt)("strong",{parentName:"p"},"Invariants")," can be simple checks which make sure that the format of field-values is valid, or more complex ones where specifications encapsulate business rules."),(0,r.kt)("h2",{id:"transactional-consistency"},"Transactional Consistency"),(0,r.kt)("p",null,"When the state of an ",(0,r.kt)("strong",{parentName:"p"},"Aggregate")," is persisted, the whole ",(0,r.kt)("strong",{parentName:"p"},"Aggregate")," must be committed, including any changes made to the state of its ",(0,r.kt)("strong",{parentName:"p"},"parts"),". The implementation has to make sure that affected ",(0,r.kt)("strong",{parentName:"p"},"Aggregates")," are updated using appropriate methodologies, such as ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(o.A,{name:"Eventual Consistency",file:"sd.eventualconsistency",mdxType:"GlosRef"})),". The design of the **Aggregate should make sure that the boundaries of such conceptual related abstractions are meaningful to the model as well as the system, where non-functional requirements such as scalability and performance also apply."),(0,r.kt)("admonition",{title:"Aggregates are not Object Graphs",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"It is suggested to design ",(0,r.kt)("strong",{parentName:"p"},"Aggregates")," small: They should ",(0,r.kt)("em",{parentName:"p"},"not")," become ",(0,r.kt)("strong",{parentName:"p"},"object graphs")," of (large) relational models, but it should also be taken care of meaningful ",(0,r.kt)("strong",{parentName:"p"},"transactional boundaries"),": Committing changes of an ",(0,r.kt)("strong",{parentName:"p"},"Aggregate")," should not require the update a large number of fine-granular conceptual related ",(0,r.kt)("strong",{parentName:"p"},"Aggregates"),". The existence of such aggregates should be questioned and reconciled with the model that triggered the state-change in the first place. On the other hand, such a transaction should not lock the data-model down so that concurrent operations on related ",(0,r.kt)("strong",{parentName:"p"},"Aggregates")," are not put to an hold."),(0,r.kt)("p",{parentName:"admonition"},"Questions that can help with designing ",(0,r.kt)("strong",{parentName:"p"},"Aggregates")," are, amongst others:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"How many transactions are required to successfully commit changes to the ",(0,r.kt)("strong",{parentName:"li"},"Aggregate"),"?"),(0,r.kt)("li",{parentName:"ul"},"What are the transactional boundaries?"),(0,r.kt)("li",{parentName:"ul"},"Are there any invariants redundant to invariants of other conceptual related ",(0,r.kt)("strong",{parentName:"li"},"Aggregates"),"?")),(0,r.kt)("p",{parentName:"admonition"},"A detailed discussion on designing ",(0,r.kt)("strong",{parentName:"p"},"Aggregates")," is given with ",(0,r.kt)(o.E,{name:"IDDD",pp:"347-388",mdxType:"BibRef"}),"."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("em",{parentName:"p"},'"(Therefore,) Aggregates are (chiefly) about consistency boundaries and not\ndriven by a desire to design object graphs."')," ",(0,r.kt)(o.E,{name:"IDDD",pp:"355",mdxType:"BibRef"}))),(0,r.kt)("hr",null),(0,r.kt)("p",null,"references"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/domain-model-layer-validations"},'"Design validations in the domain model layer", Microsoft.com'))))}h.isMDXComponent=!0},2480:()=>{}}]);