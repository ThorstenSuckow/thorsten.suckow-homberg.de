(self.webpackChunkthorsten_suckow_homberg_de=self.webpackChunkthorsten_suckow_homberg_de||[]).push([[7247],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),h=n,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||i;return r?a.createElement(m,o(o({ref:t},p),{},{components:r})):a.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},2490:(e,t,r)=>{"use strict";r.d(t,{$o:()=>p,_b:()=>d,cx:()=>l,e2:()=>u,in:()=>m,t2:()=>h});var a=r(7294),n=r(5075),i=r(9943),o=r(814),s=r(4098),c=r.n(s);function l(e){let{width:t,children:r,title:i,figure:o,modeAware:s}=e;return a.createElement("div",{style:{width:t,textAlign:"center",margin:20}},a.createElement("div",{className:!1!==s?"umlImg":""},r),a.createElement("div",{style:{textAlign:"center"}},a.createElement("sup",null,a.createElement("b",null,n.Z.isString(o)?o:`Figure ${o??1}`)," ",a.createElement("span",{dangerouslySetInnerHTML:{__html:i}}))))}function p(e){let{id:t,source:r,title:n}=e;return a.createElement(l,{modeAware:!1,title:n,figure:`Source ${r}`},a.createElement(i.Z,{id:t}))}function u(e){let{url:t,figure:r,title:n}=e;return a.createElement(l,{modeAware:!1,figure:r,title:n},a.createElement("img",{alt:"{title}",src:t}))}function d(e){let{children:t,figure:r,title:n}=e;return a.createElement(l,{modeAware:!0,figure:r,title:n,children:t})}function h(e){let{when:t,where:r}=e;const[n,i]=r;return a.createElement("div",null,"This article was originally published in ",t," at ",a.createElement("a",{target:"_blank",href:i},n),". Some formatting might have get lost during the migration to this site: If you think you spotted an issue caused by malformed formatting, feel free to open a ",a.createElement("a",{href:"https://github.com/ThorstenSuckow/thorsten.suckow-homberg.de"},"Pull Request")," or ",a.createElement("a",{href:"mailto:thorsten@suckow-homberg.de"},"send me an Email"),".")}function m(e){let{url:t}=e;const[r,n]=a.useState("");return c()(t).then((e=>{e.text().then((e=>n(e)))})),a.createElement(o.Z,{language:"php"},r)}},1145:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var a=r(7462),n=(r(7294),r(3905)),i=r(2490);const o={title:"Part 4: Registering services and using the Service Locator",description:"Defining Services for Ext JS Applications"},s=void 0,c={unversionedId:"articles/creating-extjs-applications-with-coon-js/registering-services-and-using-the-service-locator",id:"articles/creating-extjs-applications-with-coon-js/registering-services-and-using-the-service-locator",title:"Part 4: Registering services and using the Service Locator",description:"Defining Services for Ext JS Applications",source:"@site/docs/articles/creating-extjs-applications-with-coon-js/4-registering-services-and-using-the-service-locator.mdx",sourceDirName:"articles/creating-extjs-applications-with-coon-js",slug:"/articles/creating-extjs-applications-with-coon-js/registering-services-and-using-the-service-locator",permalink:"/docs/articles/creating-extjs-applications-with-coon-js/registering-services-and-using-the-service-locator",draft:!1,editUrl:"https://github.com/thorstensuckow/thorsten.suckow-homberg.de/tree/main/docs/articles/creating-extjs-applications-with-coon-js/4-registering-services-and-using-the-service-locator.mdx",tags:[],version:"current",lastUpdatedBy:"Thorsten Suckow-Homberg",lastUpdatedAt:1707861981,formattedLastUpdatedAt:"Feb 13, 2024",sidebarPosition:4,frontMatter:{title:"Part 4: Registering services and using the Service Locator",description:"Defining Services for Ext JS Applications"},sidebar:"docs",previous:{title:"Part 3: Configuration Details and defining Plugins",permalink:"/docs/articles/creating-extjs-applications-with-coon-js/configuration-details-and-plugins"},next:{title:"JavaScript Promises \u2014 Return Values and Error Handlers",permalink:"/docs/articles/javascript-promises-return-values-and-error-handlers/"}},l={},p=[{value:"What is a Service Locator (and why)",id:"what-is-a-service-locator-and-why",level:3},{value:"Simple use case \u2014 An Image Service",id:"simple-use-case--an-image-service",level:3},{value:"Configuring Services",id:"configuring-services",level:2},{value:"Disadvantages of using Service Locators",id:"disadvantages-of-using-service-locators",level:2},{value:"Update 05 March 2023",id:"update-05-march-2023",level:3}],u={toc:p},d="wrapper";function h(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)(i.t2,{when:"May 2022",where:["medium.com","https://medium.com/@thorstensuckow/creating-ext-js-applications-with-coon-js-part-4-using-the-service-locator-ce6bc2548352"],mdxType:"MigrationNotice"})),(0,n.kt)("p",null,"This part of the article series focuses on details of the configuration options available when using coon.core.app.Application from the ",(0,n.kt)("em",{parentName:"p"},"coon.js"),"-package; namely the services-configuration option that lets you define services that can be queried using coon.core.ServiceLocator, providing a central registry for concrete classes mapped to abstracts."),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"/docs/articles/creating-extjs-applications-with-coon-js/configuration-details-and-plugins"},"previous part")," of this article series provided an extended look at the various configuration options of a ",(0,n.kt)("em",{parentName:"p"},"coon.js"),"-application. This article assumes that you are familiar with the topics covered therein."),(0,n.kt)("h3",{id:"what-is-a-service-locator-and-why"},"What is a Service Locator (and why)"),(0,n.kt)("p",null,"If you\u2019re not familiar with the concept of Service Locators, ",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/martinfowler"},"Martin Fowler")," has a very good introduction to this design pattern over at his blog:"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://martinfowler.com/articles/injection.html"},(0,n.kt)("strong",{parentName:"a"},"Inversion of Control Containers and the Dependency Injection pattern"))),(0,n.kt)("p",null,"In Short, a Service Locator allows for separating large sections of a software. It represents a central registry that is known by every section in the software. Decoupled and unaware of each other, those sections are still able to use one and the same functionality during runtime by querying the Service Locator for concrete implementations of abstracts which describe their required functionality."),(0,n.kt)(i.e2,{title:"The functionality of a Service Locator in a nutshell: Modules in a software that share no links in between them, can still use the same functionality by using a Service Locator: A central registry providing concrete instances of abstracts.",url:"https://cdn-images-1.medium.com/max/3882/1*vdzilmvH5g5BPHhxq6MBbQ.png",figure:1,mdxType:"ImgEmbed"}),(0,n.kt)("h3",{id:"simple-use-case--an-image-service"},"Simple use case \u2014 An Image Service"),(0,n.kt)("p",null,"Let\u2019s assume that we have various modules in our application: An ",(0,n.kt)("strong",{parentName:"p"},"email module"),", an ",(0,n.kt)("strong",{parentName:"p"},"address book")," and a ",(0,n.kt)("strong",{parentName:"p"},"SignIn-Manager"),". Each module has the functionality to show an image that is associated with a person \u2014 a profile picture. Now, each module understands the entity \u201cperson\u201d in a different way:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"For the ",(0,n.kt)("strong",{parentName:"p"},"email module"),", persons are identified by the information found in the from-header")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The ",(0,n.kt)("strong",{parentName:"p"},"address book")," identifies a person by contact-information stored in various fields: firstname, lastname, address and so on. Of course, an address book\u2019s user-entry also has an email address.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The ",(0,n.kt)("strong",{parentName:"p"},"SignIn-Manager")," identifies a person (a \u201cuser\u201d) by an username and a password. For our use-case, the username must be the user\u2019s email-address"))),(0,n.kt)("p",null,"So while all modules are aware of an entity representing a \u201cperson\u201d, each module models this entity in a different way. However, each module requires the functionality to show a profile picture associated with a person."),(0,n.kt)("p",null,"Of help is a common identifier that is usually unique for a person \u2014 the ",(0,n.kt)("strong",{parentName:"p"},"email address"),"."),(0,n.kt)("p",null,"The modules do not know where a profile picture for a person comes from. What they do know is"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"a profile picture can be uniquely associated with an email-address (1:1)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"how to render a profile picture on the screen")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"that a Service Locator exists for querying services"))),(0,n.kt)("p",null,"The common functionality for retrieving image data associated with an email address is given by the following interface:"),(0,n.kt)(i.e2,{title:"The interface ImageService provides a contract for retrieving image data: The public method getImage() returns an object providing arbitrary key/value-pairs representing image-information (src, various attributes such as height, width\u2026) when fed with resolvable search criteria.",url:"https://cdn-images-1.medium.com/max/2000/1*00C7YHORdIUpE0VIdsyY3g.png",figure:2,mdxType:"ImgEmbed"}),(0,n.kt)("p",null,"Using JavaScript and ",(0,n.kt)("em",{parentName:"p"},"coon.js"),", the implementation of a Service Locator is toned down compared to strongly typed languages, such as Java. It follows the same purpose however, and implementing APIs can add or remove abstractions and type checking as they like."),(0,n.kt)("p",null,"For our purpose, the final implementation in each module would look like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'    const criteria = {emailAddress: "user@domain.com"};\n\n    return coon.core.ServiceLocator\n                    .resolve("ImageService")\n                    .getImage(criteria);\n')),(0,n.kt)("p",null,"Our ",(0,n.kt)("strong",{parentName:"p"},"search criteria")," is an object the ImageService understands, and we expect the coon.core.ServiceLocator to correctly resolve from ImageService to a concrete instance implementing this ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"interface")),", properly responding to our API-calls when requesting image data."),(0,n.kt)("p",null,"The question that remains is: How do we configure the Service Locator so that it resolves to a concrete instance for a given abstract \u2014 in our case, a concrete of ImageService?"),(0,n.kt)("h2",{id:"configuring-services"},"Configuring Services"),(0,n.kt)("p",null,"Without the help of a DI Container, the scaffolding of services is done in the application configuration file \u2014 mapping class names of abstracts to their concrete representants; building up on the previous article about configuration of application instances, you might remember similar approaches regarding ",(0,n.kt)("em",{parentName:"p"},"plugins, "),"where class names of plugins are specified that get later on created during runtime. Thus, we are now introducing the services property for the application configuration file."),(0,n.kt)("p",null,"The following code block is part of an application configuration. The services-key denotes the section where abstracts are mapped to concretes \u2014 along with additional arguments that will be passed to the constructor of the service. Each service defined in here is treated as a ",(0,n.kt)("strong",{parentName:"p"},"shared instance "),"\u2014 that means, for all modules across the application, the ",(0,n.kt)("strong",{parentName:"p"},"ServiceLocator")," will return one and the same instance of ",(0,n.kt)("strong",{parentName:"p"},"this")," class."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'    "services": {\n        "coon.core.service.UserImageService": {\n            "xclass": "coon.core.service.GravatarService",\n            "args":   [{\n                "parameters" :  {"d":  "blank"}\n            }]\n        }\n    }\n')),(0,n.kt)("p",null,'In the given example, the application registers coon.core.service.GravatarService \u2014 a specific of coon.core.service.Service for abstracts of the type coon.core.service.UserImageService. Whenever the ServiceLocator needs to resolve coon.core.service.UserImageService , one and the same instance of coon.core.service.GravatarService is returned \u2014 which was initially created with the constructor arguments {parameters:{d:"blank"}} :'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'    // registering the GravatarService with the ServiceLocator\n    coon.service.ServiceLocator.register(\n        "coon.core.service.UserImageService",\n        Ext.create(\n            "coon.core.service.GravatarService",\n            {parameters:{d:"blank"}}\n        )\n    );\n\n    // later on, the GravatarService is returned for calls to:\n    const imgService = coon.core.ServiceLocator.resolve(\n        "coon.core.service.UserImageService"\n    );\n')),(0,n.kt)("h2",{id:"disadvantages-of-using-service-locators"},"Disadvantages of using Service Locators"),(0,n.kt)("p",null,"The service locator is ",(0,n.kt)("a",{parentName:"p",href:"https://blog.ploeh.dk/2010/02/03/ServiceLocatorisanAnti-Pattern"},"considered to be an anti-pattern"),". Mark\u2019s arguments are definitely valid. I would not go so far and say that he is wrong \u2014 in a world without DI Containers, but with good source code documentation, I\u2019d say it\u2019s an okayish tool for the job, if you can live with the side effects global registries are prone to cause:"),(0,n.kt)("p",null,"Our code must consider the fact that a service is missing. As a possible solution, the ServiceLocator could provide a concrete default (a \u201c",(0,n.kt)("a",{parentName:"p",href:"https://martinfowler.com/eaaCatalog/specialCase.html"},"Special Case"),"\u201d) of the abstract, where applicabable. On another note, while we can guarantee that services resolved to specific abstracts are of the ",(0,n.kt)("strong",{parentName:"p"},"type "),"of ",(0,n.kt)("strong",{parentName:"p"},"this abstract"),", the API of those services might not respond to our queries in a way the requesting API can handle the responses properly: Services might become very fine granular with their responses. This could lead to over engineering those services when considering various use cases (our ImageService, for example, might have to provide various binary formats for requested images, or none at all \u2014 the src-attribute of an HTML img-tag accepts an URL-string as well as base64-encoded data urls in the form of data:",(0,n.kt)("inlineCode",{parentName:"p"},"[<mediatype>][;base64],<data>"),")."),(0,n.kt)("h3",{id:"update-05-march-2023"},"Update 05 March 2023"),(0,n.kt)("p",null,"If you feel the Service Locator is too clumsy, you can use an DI-Container for Ext JS, which I've written shortly after I have\nfinished this article: ",(0,n.kt)("a",{parentName:"p",href:"/docs/articles/dependency-injection-in-javascript/"},(0,n.kt)("strong",{parentName:"a"},"Dependency Injection in JavaScript"))))}h.isMDXComponent=!0},2480:()=>{}}]);