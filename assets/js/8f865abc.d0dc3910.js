(self.webpackChunkthorsten_suckow_homberg_de=self.webpackChunkthorsten_suckow_homberg_de||[]).push([[9437],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=o,h=m["".concat(c,".").concat(u)]||m[u]||d[u]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2490:(e,t,n)=>{"use strict";n.d(t,{$o:()=>p,_b:()=>d,cx:()=>l,e2:()=>m,in:()=>h,t2:()=>u});var r=n(7294),o=n(5075),a=n(9943),i=n(814),s=n(4098),c=n.n(s);function l(e){let{width:t,children:n,title:a,figure:i,modeAware:s}=e;return r.createElement("div",{style:{width:t,textAlign:"center",margin:20}},r.createElement("div",{className:!1!==s?"umlImg":""},n),r.createElement("div",{style:{textAlign:"center"}},r.createElement("sup",null,r.createElement("b",null,o.Z.isString(i)?i:`Figure ${i??1}`)," ",r.createElement("span",{dangerouslySetInnerHTML:{__html:a}}))))}function p(e){let{id:t,source:n,title:o}=e;return r.createElement(l,{modeAware:!1,title:o,figure:`Source ${n}`},r.createElement(a.Z,{id:t}))}function m(e){let{url:t,figure:n,title:o}=e;return r.createElement(l,{modeAware:!1,figure:n,title:o},r.createElement("img",{alt:"{title}",src:t}))}function d(e){let{children:t,figure:n,title:o}=e;return r.createElement(l,{modeAware:!0,figure:n,title:o,children:t})}function u(e){let{when:t,where:n}=e;const[o,a]=n;return r.createElement("div",null,"This article was originally published in ",t," at ",r.createElement("a",{target:"_blank",href:a},o),". Some formatting might have get lost during the migration to this site: If you think you spotted an issue caused by malformed formatting, feel free to open a ",r.createElement("a",{href:"https://github.com/ThorstenSuckow/thorsten.suckow-homberg.de"},"Pull Request")," or ",r.createElement("a",{href:"mailto:thorsten@suckow-homberg.de"},"send me an Email"),".")}function h(e){let{url:t}=e;const[n,o]=r.useState("");return c()(t).then((e=>{e.text().then((e=>o(e)))})),r.createElement(i.Z,{language:"php"},n)}},6739:(e,t,n)=>{"use strict";n.d(t,{A:()=>a,E:()=>o});var r=n(7294);function o(e){let{name:t,pp:n}=e;const o=`/docs/bibliography#${t.toLowerCase()}`;return r.createElement("a",{href:o},"[",r.createElement("span",{className:"bibRef"},"\ud83d\udcd6",t),n?`, ${n.includes("-")?"pp":"p"}. ${n}`:"","]")}function a(e){let{name:t,file:n}=e;Object.entries({sd:"softwaredesign",sa:"softwarearchitecture",cs:"computerscience"}).some((e=>{let[t,r]=e;if(n.startsWith(`${t}.`))return n=n.replace(`${t}.`,`${r}.`),!0}));const o=`/docs/toolbox/${n}`;return r.createElement("a",{href:o,className:"glosRef"},t)}},4506:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(7462),o=(n(7294),n(3905)),a=n(6739);n(2490);const i={title:"Factory Method"},s="Factory Method (Software Design)",c={unversionedId:"toolbox/softwaredesign.factorymethod",id:"toolbox/softwaredesign.factorymethod",title:"Factory Method",description:"A Factory Method is a method for creating a new object for a given type.",source:"@site/docs/toolbox/softwaredesign.factorymethod.mdx",sourceDirName:"toolbox",slug:"/toolbox/softwaredesign.factorymethod",permalink:"/docs/toolbox/softwaredesign.factorymethod",draft:!1,editUrl:"https://github.com/thorstensuckow/thorsten.suckow-homberg.de/tree/main/docs/toolbox/softwaredesign.factorymethod.mdx",tags:[],version:"current",lastUpdatedBy:"Thorsten Suckow-Homberg",lastUpdatedAt:1704306250,formattedLastUpdatedAt:"Jan 3, 2024",frontMatter:{title:"Factory Method"},sidebar:"toolbox",previous:{title:"Facade",permalink:"/docs/toolbox/softwaredesign.facade"},next:{title:"First-Class Citizen",permalink:"/docs/toolbox/computerscience.firstclasscitizen"}},l={},p=[{value:"Example",id:"example",level:2}],m={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"factory-method-software-design"},"Factory Method (Software Design)"),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"Factory Method")," is a method for creating a new object for a given type."),(0,o.kt)("p",null,"By using a method call for object instantiation, the method can further implement checks for constraints, invariants and dependencies that need to be configured with the object of the target class."),(0,o.kt)("p",null,"This has the advantage that a constructor can solely focus on initializing the fields of the object with the information that were applied from outside, and can be kept free from additional logic. The client can more easily recover from any errors the factory may produce."),(0,o.kt)("admonition",{title:"The GOF-factory method",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("strong",{parentName:"p"},"Factory Method"),"-pattern belongs to the ",(0,o.kt)("strong",{parentName:"p"},"Creational Patterns"),(0,o.kt)(a.E,{name:"GOF",pp:"88-ff.",mdxType:"BibRef"})," and is described in ",(0,o.kt)(a.E,{name:"GOF",pp:"107-116",mdxType:"BibRef"}),"."),(0,o.kt)("p",{parentName:"admonition"},"The pattern described by GoF narrows the applicability to a very specific problem down:"),(0,o.kt)("blockquote",{parentName:"admonition"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},'"Define an interface for creating an object, but let subclasses decide which class to\ninstantiate. Factory Method lets a class defer instantiation to subclasses."')," ",(0,o.kt)(a.E,{name:"GOF",pp:"107",mdxType:"BibRef"}))),(0,o.kt)("p",{parentName:"admonition"},"I treat the meaning of ",(0,o.kt)("strong",{parentName:"p"},"Factory Method")," with the main intent described in this Toolbox-entry not as an exclusive-or regarding the ",(0,o.kt)("strong",{parentName:"p"},"GoF"),"-definition, but as a union.")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"In the following example, a ",(0,o.kt)("inlineCode",{parentName:"p"},"Route"),"-object can only be created if ",(0,o.kt)("inlineCode",{parentName:"p"},"$legs")," has at least one entry. The example uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"__constructor()"),"\nwhich requires the class to implement the specification in this method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Logic in constructor"',title:'"Logic',in:!0,'constructor"':!0},'class Route\n{\n    private ?Legs $legs = null;\n\n    public function __construct(Legs $legs)\n    {\n        if ($legs->entries() === 0) {\n            throw new RouteException("Route needs at least one leg");\n        }\n\n        $this->legs = legs;\n    }\n}\n')),(0,o.kt)("p",null,"The constructor should not be aware of such details, more so, shouldn't be aware that such a specification exists, as this would require the constructor to be able to make a decision whether it may exists as an instance or not."),(0,o.kt)("p",null,"By placing the specification on class-level as a meta-information with a factory-method, the responsibility for meeting the constraints and whether instances are allowed are then delegated to the factory method, serving as a mediator between the client and the target instance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Logic in factory method"',title:'"Logic',in:!0,factory:!0,'method"':!0},'class Route\n{\n    private ?Legs $legs = null;\n\n    public static function create(Legs $legs): Route\n    {\n        if ($legs->entries() === 0) {\n            throw new RouteException("Route needs at least one leg");\n        }\n    }\n\n    private function __construct(Legs $legs)\n    {\n        $this->legs = legs;\n    }\n}\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"In the example above, the whole process of ",(0,o.kt)("inlineCode",{parentName:"p"},"Route"),"-creation is placed into the factory-method. This might be problematic if ",(0,o.kt)("strong",{parentName:"p"},"IoC")," is applied and injecting dependencies relies on the existence of a ",(0,o.kt)("em",{parentName:"p"},"public")," available ",(0,o.kt)("em",{parentName:"p"},"constructor"),". ",(0,o.kt)("a",{parentName:"p",href:"https://spring.io/"},"Spring")," allows for ",(0,o.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#beans-factory-class-static-factory-method"},"registering factory methods,")," so they can be considered when ",(0,o.kt)(a.A,{name:"Dependency Injection",file:"sd.dependencyinjection",mdxType:"GlosRef"})," is used:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<bean id="routeBean" class="tracking.RouteBean" factory-method="createInstance" />\n')),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public class RouteBean {\n\n    private Route()\n    {\n    }\n\n    public static RouteBean createInstance ()\n    {\n        RouteBean rb = new RouteBean ();\n        return rb;\n    }\n}\n"))))}u.isMDXComponent=!0},2480:()=>{}}]);