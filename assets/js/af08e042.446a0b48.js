(self.webpackChunkthorsten_suckow_homberg_de=self.webpackChunkthorsten_suckow_homberg_de||[]).push([[2946],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>p,kt:()=>g});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),h=o,g=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return a?n.createElement(g,r(r({ref:t},p),{},{components:a})):n.createElement(g,r({ref:t},p))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},2490:(e,t,a)=>{"use strict";a.d(t,{$o:()=>p,_b:()=>u,cx:()=>c,e2:()=>d,in:()=>g,t2:()=>h});var n=a(7294),o=a(5075),i=a(9943),r=a(814),s=a(4098),l=a.n(s);function c(e){let{width:t,children:a,title:i,figure:r,modeAware:s}=e;return n.createElement("div",{style:{width:t,textAlign:"center",margin:20}},n.createElement("div",{className:!1!==s?"umlImg":""},a),n.createElement("div",{style:{textAlign:"center"}},n.createElement("sup",null,n.createElement("b",null,o.Z.isString(r)?r:`Figure ${r??1}`)," ",n.createElement("span",{dangerouslySetInnerHTML:{__html:i}}))))}function p(e){let{id:t,source:a,title:o}=e;return n.createElement(c,{modeAware:!1,title:o,figure:`Source ${a}`},n.createElement(i.Z,{id:t}))}function d(e){let{url:t,figure:a,title:o}=e;return n.createElement(c,{modeAware:!1,figure:a,title:o},n.createElement("img",{alt:"{title}",src:t}))}function u(e){let{children:t,figure:a,title:o}=e;return n.createElement(c,{modeAware:!0,figure:a,title:o,children:t})}function h(e){let{when:t,where:a}=e;const[o,i]=a;return n.createElement("div",null,"This article was originally published in ",t," at ",n.createElement("a",{target:"_blank",href:i},o),". Some formatting might have get lost during the migration to this site: If you think you spotted an issue caused by malformed formatting, feel free to open a ",n.createElement("a",{href:"https://github.com/ThorstenSuckow/thorsten.suckow-homberg.de"},"Pull Request")," or ",n.createElement("a",{href:"mailto:thorsten@suckow-homberg.de"},"send me an Email"),".")}function g(e){let{url:t}=e;const[a,o]=n.useState("");return l()(t).then((e=>{e.text().then((e=>o(e)))})),n.createElement(r.Z,{language:"php"},a)}},6739:(e,t,a)=>{"use strict";a.d(t,{A:()=>i,E:()=>o});var n=a(7294);function o(e){let{name:t,pp:a}=e;const o=`/docs/bibliography#${t.toLowerCase()}`;return n.createElement("a",{href:o},"[",n.createElement("span",{className:"bibRef"},"\ud83d\udcd6",t.toUpperCase()),a?`, ${a.includes("-")?"pp":"p"}. ${a}`:"","]")}function i(e){let{name:t,file:a}=e;Object.entries({sd:"softwaredesign",sa:"softwarearchitecture",cs:"computerscience"}).some((e=>{let[t,n]=e;if(a.startsWith(`${t}.`))return a=a.replace(`${t}.`,`${n}.`),!0}));const o=`/docs/toolbox/${a}`;return n.createElement("a",{href:o,className:"glosRef"},t)}},7838:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>k,frontMatter:()=>p,metadata:()=>u,toc:()=>g});var n=a(7462),o=(a(7294),a(3905)),i=a(2490),r=a(6739);const s=a.p+"assets/images/presentation-8316c049d5df485abd56b3336d7b2b21.png",l=a.p+"assets/images/youtubenpm-458b7240cca42c8043d22cc0668c683e.png",c=a.p+"assets/images/bootup-acdf27434d565e8490d397a5ab21f94a.png",p={title:"Part 2: Packages and Configuration Options",description:"Managing and loading packages"},d=void 0,u={unversionedId:"articles/creating-extjs-applications-with-coon-js/packages-and-configuration-options",id:"articles/creating-extjs-applications-with-coon-js/packages-and-configuration-options",title:"Part 2: Packages and Configuration Options",description:"Managing and loading packages",source:"@site/docs/articles/creating-extjs-applications-with-coon-js/2-packages-and-configuration-options.mdx",sourceDirName:"articles/creating-extjs-applications-with-coon-js",slug:"/articles/creating-extjs-applications-with-coon-js/packages-and-configuration-options",permalink:"/docs/articles/creating-extjs-applications-with-coon-js/packages-and-configuration-options",draft:!1,editUrl:"https://github.com/thorstensuckow/thorsten.suckow-homberg.de/tree/main/docs/articles/creating-extjs-applications-with-coon-js/2-packages-and-configuration-options.mdx",tags:[],version:"current",lastUpdatedBy:"Thorsten Suckow-Homberg",lastUpdatedAt:1685654580,formattedLastUpdatedAt:"Jun 1, 2023",sidebarPosition:2,frontMatter:{title:"Part 2: Packages and Configuration Options",description:"Managing and loading packages"},sidebar:"docs",previous:{title:"Part 1: Introduction",permalink:"/docs/articles/creating-extjs-applications-with-coon-js/introduction"},next:{title:"Part 3: Configuration Details and defining Plugins",permalink:"/docs/articles/creating-extjs-applications-with-coon-js/configuration-details-and-plugins"}},h={},g=[{value:"Hardwiring is so 2001",id:"hardwiring-is-so-2001",level:2},{value:"Sencha applications and dynamic packages",id:"sencha-applications-and-dynamic-packages",level:3},{value:"coon.core.app.Application",id:"cooncoreappapplication",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Application configuration files",id:"application-configuration-files",level:3},{value:"Package configuration files",id:"package-configuration-files",level:3},{value:"Loading Packages",id:"loading-packages",level:2},{value:"Simple use cases",id:"simple-use-cases",level:2},{value:"Different Packages for dev and prod environment",id:"different-packages-for-dev-and-prod-environment",level:3},{value:"Enabling/disabling Packages for different Builds",id:"enablingdisabling-packages-for-different-builds",level:3},{value:"Hot-swapping functionality",id:"hot-swapping-functionality",level:3}],m={toc:g},f="wrapper";function k(e){let{components:t,...a}=e;return(0,o.kt)(f,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)(i.t2,{when:"April 2022",where:["medium.com","https://medium.com/@thorstensuckow/creating-extjs-applications-with-coon-js-part-2-packages-and-configuration-options-ee23e96d0b13"],mdxType:"MigrationNotice"})),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"/docs/articles/creating-extjs-applications-with-coon-js/introduction"},"previous part")," of this article series I gave a brief introduction to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/coon-js"},"coon.js")," framework \u2014 a \u201cToolset for rapid ",(0,o.kt)("a",{parentName:"p",href:"http://sencha.com"},"Sencha ExtJS")," application building\u201d."),(0,o.kt)("p",null,"Now it\u2019s time to present the general idea behind the framework and shed some light on the features it provides. In this ",(0,o.kt)("strong",{parentName:"p"},"Part 2"),", we\u2019ll take a look at package management- and with coon.js, this means dynamic package loading and providing configuration options for packages."),(0,o.kt)("h2",{id:"hardwiring-is-so-2001"},"Hardwiring is so 2001"),(0,o.kt)("p",null,"Resolving application dependencies became more convenient with the introduction of package managers, such as ",(0,o.kt)("a",{parentName:"p",href:"https://getcomposer.org"},"Composer "),"(PHP) and ",(0,o.kt)("a",{parentName:"p",href:"https://npmjs.org"},"NPM")," (mainly JavaScript)."),(0,o.kt)("p",null,"If you remember the early days of Sencha ExtJS, you might think of the \u201cpackage manager\u201d that was introduced with ",(0,o.kt)("a",{parentName:"p",href:"https://www.sencha.com/blog/understanding-sencha-cmd-packages/"},"ExtJS 4 .2 and Sencha CMD 3.1"),"\u2014 which was never really successful when you look at it from the external- dependency-managagement-and-centralized-repository-for-3rd-party-code-point of view (",(0,o.kt)("em",{parentName:"p"},"phew!"),"). Sencha ExtJS Packages have always been a tool for organizing your code into smaller, ",(0,o.kt)("em",{parentName:"p"},"more")," deliverable, reusable chunks and might have been a good way to maintain company code for various projects, but it was never flexible enough for providing dependency management of 3rd party code we have been looking for many, many years, and where Sencha obviously missed to jump the bandwagon once the time was right."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"}," ",(0,o.kt)("em",{parentName:"p"},"Sencha CMD packages were never flexible enough for providing real dependency management with Sencha projects."))),(0,o.kt)("p",null,"JavaScript development got a lot more easy with NPM. However, Sencha is still locked deep in the basement together with Java and Ant, and getting things to work with Sencha CMD (on which ExtJS obviously still depends on) rather than Babel (for transpiling) and NPM can be quiet troublesome. The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sencha/package-loader"},"Sencha PackageLoader")," makes it all more bearable, but if you\u2019re looking for a solution for dynamic package management with Sencha ExtJS, you have to add a few workarounds and be patient when wrapping your head around error messages that basically give no hint about what really went wrong when sencha app build fails with cryptic console output."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"A brief introduction to Sencha Ext JS and NPM can be found here:")),(0,o.kt)(i.e2,{url:s,title:'<a href="https://www.brighttalk.com/webcast/11505/536082" target="_blank">SenchaCon 2022: Sencha Ext JS & Modern Tooling</a>',figure:1,mdxType:"ImgEmbed"}),(0,o.kt)(i.e2,{url:l,title:'Alternatively, the eyeworkers Youtube-Channel has a video with german audio dealing with the topic: <a href="https://www.youtube.com/watch?v=YpfzV_F2yZs" target="_blank">Ext JS und NPM</a>',figure:2,mdxType:"ImgEmbed"}),(0,o.kt)("h3",{id:"sencha-applications-and-dynamic-packages"},"Sencha applications and dynamic packages"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://docs.sencha.com/cmd/7.5.0/guides/dynamic_package_loading.html"},"Sencha Package Loader")," allows for dynamic package loading (hence the name), although these packages have to be linked against the application: ",(0,o.kt)("strong",{parentName:"p"},"exposing information about the requirements of an application comes with the expense of more configuration"),". Not only has the ",(0,o.kt)("em",{parentName:"p"},"app.json")," to know what packages might(!) be used with your software \u2014 which contradicts the use case of over-the-air drop-ins of additional functionality\u2014you also have to adjust your build process with specific flags so that the packages get properly build: sencha app build production --uses"),(0,o.kt)("p",null,"However, combining the Package Loader with NPM and some customizing leverages ExtJS application building. Here comes coon.js into play."),(0,o.kt)("h3",{id:"cooncoreappapplication"},"coon.core.app.Application"),(0,o.kt)("p",null,"To reduce bloat and make it possible to dynamically opt for ",(0,o.kt)("em",{parentName:"p"},"eventually")," used packages, I wrote a specific of Ext.app.Application that is capable to read out package configuration during the startup of an application, making it easy to hook into the startup process of an app and decide what kind of packages have to be registered with the software, and \u2014 additionally \u2014 load package information from external files, providing runtime contexts to make sure various environments and their respective configurations can be considered."),(0,o.kt)("p",null,"This all might sound overwhelming at first, but it follows a very straightforward scheme: Read out information about registered packages, decide whether they should be loaded and apply their configuration from an (external) resource."),(0,o.kt)("p",null,"The payload for using this approach is that the developer needs to adopt a rethinking of how to set up an ExtJS app: With coon.js, it now largely consists of \u2014 often context-agnostic and self-contained \u2014 packages (you can also call them ",(0,o.kt)("em",{parentName:"p"},"modules"),"); except for core-functionality and themes, of course: Those are still hardwired to the application."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"Lets start on the very top and have a look at the configuration available with ",(0,o.kt)("em",{parentName:"p"},"coon.js"),". Notable, the app.json allows for an additional configuration that will be considered for the configuration of underlying packages \u2014 the ",(0,o.kt)("strong",{parentName:"p"},"coon-js"),"-configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'    ...\n\n    "name": "conjoon",\n    "production": {\n        "coon-js": {\n            "env": "prod",\n            "resourcePath": "coon-js"\n        }\n    },\n    "development": {\n        "coon-js": {\n            "env": "dev",\n            "resourcePath": "coon-js"\n        }\n    }\n    ...\n')),(0,o.kt)("p",null,"In both the production- and the development-section of the ",(0,o.kt)("em",{parentName:"p"},"app.json"),", we have added a new property named coon-js, which allows for specifying coon.js-relevant application-configuration; we can read this later out of the Ext.manifest-object available during runtime of our Ext JS-application."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/2000/1*ukZTzkgezzQ6hxG3ti0LTg.png",alt:"The Ext.manifest object provides the configuration added to the app.json-file."})),(0,o.kt)("p",null,"So, what will this be later used for? coon.js will look up the environment the application is built for (we are utilizing ",(0,o.kt)("em",{parentName:"p"},"development"),"/",(0,o.kt)("em",{parentName:"p"},"production")," build options of ExtJS here) and consider further configuration-loading given the env-value, making it possible to load configuration files specific for the ",(0,o.kt)("em",{parentName:"p"},"development"),"- or ",(0,o.kt)("em",{parentName:"p"},"production"),"-environment. For example, the development-environment can hold additional configuration options for ",(0,o.kt)("a",{parentName:"p",href:"https://docs-devel.sencha.com/extjs/7.5.1/classic/Ext.ux.ajax.SimManager.html"},"Simlets")," used with the dev-build (mainly for mocking a backend API), while the production-configuration holds REST-endpoints and the like for \u2014 well, exposing environmental information of the application in production mode. More use-cases at the end of this article."),(0,o.kt)("p",null,"The resourcePath denotes the name of the folder in which ",(0,o.kt)("em",{parentName:"p"},"coon.js")," should look up configuration files \u2014 this is the folder that should be made available in the resources-directory found in the base installation of an ExtJS-application: Further Sencha specific configuration options for this folder can be found in the resources-section of the ",(0,o.kt)("em",{parentName:"p"},"app.json"),"."),(0,o.kt)(i.e2,{url:"https://cdn-images-1.medium.com/max/2000/1*sxPRDsKLuEI4SyF0yIca7w.png",title:"The directory layout of an ExtJS application. The resources-folder contains the coon-js-folder, providing an application(!) configuration file explicitly for development (conjoon.**dev**.conf.json) and conjoon.conf.json for any other environment (e.g. production).",figure:3,mdxType:"ImgEmbed"}),(0,o.kt)("p",null,"But what files are considered as configuration files? Somehow the application must now which files to load, and this is realized using a specific naming pattern coon.js will look up."),(0,o.kt)("h3",{id:"application-configuration-files"},"Application configuration files"),(0,o.kt)("p",null,"First off, you have a ",(0,o.kt)("strong",{parentName:"p"},"global"),", ",(0,o.kt)("strong",{parentName:"p"},"application specific")," configuration file. This file must be named after the application coon.js is configured for, followed by a postfix that denotes the environment for which it was created, and the usual ",(0,o.kt)("em",{parentName:"p"},".json")," file-ending so that code-editors and the like know how to parse and syntax-highlight its contents. The pattern is:"),(0,o.kt)("p",null,"[application_name]",".","[environment]",".",(0,o.kt)("em",{parentName:"p"},"conf.json")),(0,o.kt)("p",null,"In the above example for the ",(0,o.kt)("em",{parentName:"p"},"app.json"),", we have specified that the shorthand for the production-environment is ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"prod")),", while the shorthand for the development-environment is ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"dev")),". The name of the application is ",(0,o.kt)("a",{parentName:"p",href:"https://conjoon.org"},"conjoon"),". The configuration files must therefore be saved under any of the following names in order for coon.js to recognize them:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},'"env": \u201cdev"conjoon'),".",(0,o.kt)("strong",{parentName:"p"},"dev"),".conf.json - configuration loaded for development builds")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},'"env\u201d: \u201cprod" conjoon'),".",(0,o.kt)("strong",{parentName:"p"},"prod"),".conf.json \u2014 configuration loaded for production builds (note: this naming schema is currently in discussion, see link below)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"conjoon"),".conf.json - configuration loaded if no environment specific configuration file was found"))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/coon-js/extjs-lib-core/issues/55"},'refactor: configuration files for prod must not use "prod" as infix \xb7 Issue #55 \xb7\u2026')),(0,o.kt)("p",null,"We will not go into the details about possible configuration options considered by coon.js for now \u2014 the 3rd part of this article series will take care of this \u2014 but a basic template with the most important sections of an application configuration file looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'    {\n        [application_name] : {\n            "application": {},\n            "plugins": [],\n            "packages": {}\n        }\n    }\n')),(0,o.kt)("p",null,"All configuration-options ",(0,o.kt)("strong",{parentName:"p"},"specified in the application-section")," will be generally made available during runtime and can later on be queried via coon.core.ConfigManager.get(","[application_name]",") (unaware packages can query ","[application_name]",' using the coon.core.Environment-class, if needed: coon.core.Environment.getManifest("name")).'),(0,o.kt)("p",null,"Of course, other configurations sections are available to the coon.core.ConfigManager: they are queryable \u201cdomains\u201d. For example, dynamic packages and their configuration (if specified) are always accessible using coon.core.ConfigManager.get(","[package_name]",")."),(0,o.kt)("h3",{id:"package-configuration-files"},"Package configuration files"),(0,o.kt)("p",null,"The whole idea behind coon.js is to provide a system where applications load external and customizable packages on demand \u2014 so it would be a bad idea to not provide configuration options for these packages itself."),(0,o.kt)("p",null,"Similiar to the ",(0,o.kt)("em",{parentName:"p"},"app.json"),", information about the package used by a coon.js-driven application must be placed in the ",(0,o.kt)("em",{parentName:"p"},"package.json")," of the owning package. This has to be done using the sencha-section in the file, so the configuration is available later via Ext.manifest and does not collide with any NPM configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'    {\n\n        // ... this is NPM-land\n\n        "sencha": {\n           // ... and this is Sencha-country. Most of this will\n           // end up in Ext.manifest\n\n        }\n    }\n')),(0,o.kt)("p",null,"Again, we have to specify a coon-js-section in the ",(0,o.kt)("em",{parentName:"p"},"package.json")," itself that holds various information about the package and how it should be treated by the owning application, such as"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"should the package be auto-loaded during application startup?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"should the package\u2019s PackageController (if available; it\u2019s a specific of Ext.app.Controller) be registered as an application controller?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"does the Package define configuration, and where can this information be found?"))),(0,o.kt)("p",null,"Here\u2019s an example of the ",(0,o.kt)("em",{parentName:"p"},"package.json")," from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/conjoon/extjs-app-webmail"},"https://github.com/conjoon/extjs-app-webmail"),", the email client for ",(0,o.kt)("a",{parentName:"p",href:"https://conjoon.org"},"conjoon"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'    {\n        "name": "@conjoon/extjs-app-webmail",\n        "sencha": {\n            "name": "extjs-app-webmail",\n            "coon-js": {\n                "package": {\n                    "autoLoad": {\n                        "registerController": true\n                    },\n                    "config": {\n                        // ... here be package relevant config\n                    }\n                }\n            },\n            "namespace": "conjoon.cn_mail",\n            "type": "code",\n    ...\n')),(0,o.kt)("p",null,"The 3rd part of this article series will focus on key-properties of the configuration, for now let\u2019s have a quick look at a few properties presented with the example: autoLoad tells whether this package should be loaded upon the startup of the application and can be further configured \u2014 in this case along with registering the package\u2019s PackageController \u2014 and the config-section provides all the necessary configuration for the package itself, queryable during runtime."),(0,o.kt)("p",null,"While it is totally valid to provide all the configuration information in the ",(0,o.kt)("em",{parentName:"p"},"package.json")," itself, maintaining often-changing configuration can be quiet a hassle using this file: You have also the option to specify an individual file representing the package\u2019s configuration \u2014 convenient in case you have to provide lots of configuration information."),(0,o.kt)("p",null,"It is also possible to omit the configuration here or in a separate file and move all the configuration details to the ",(0,o.kt)("strong",{parentName:"p"},"application configuration file "),"\u2014 making it more convenient to ",(0,o.kt)("strong",{parentName:"p"},"edit multiple package configurations at once")," without having to manage file changes ( git commit package.json -m \u201cfeat: add config option for project X\u201d) throughout various separate projects (if your package is used across multiple projects, that is). Remember the application configuration file template from the previous section of this article? Let\u2019s tune the packages-section:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'    {\n\n        [application_name] : {\n\n            "plugins": [],\n\n            "application": {},\n\n            "packages": {\n\n                "extjs-app-webmail": {\n                    "autoLoad": {\n                        "registerController": true\n                    },\n                    "config": {\n                       // ... add package relevant config HERE\n                    }\n                }\n            }\n\n        }\n    }\n')),(0,o.kt)("h2",{id:"loading-packages"},"Loading Packages"),(0,o.kt)("p",null,"Given what we know about the configuration options, let\u2019s have a look at how coon.js decides whether a package should be loaded dynamically."),(0,o.kt)("p",null,"First and foremost, we have to take care of two thing: Tagging the package as a coon.js-package and inform our app about the package-requirement in the uses-section in our ",(0,o.kt)("em",{parentName:"p"},"app.json"),". While the latter is a necessary requirement for the ExtJS internal Package Loader (you can read more about the internals ",(0,o.kt)("a",{parentName:"p",href:"https://mitchellsimoens.com/blog/2017/04/12/package-loading"},"here"),"), tagging the package as a coon.js package itself is required so that the package can be identified and treated as a package containing further, yet to be loaded, configuration."),(0,o.kt)(i.e2,{url:c,title:"Abstracted view on the workflow of loading packages and configurations during the startup of an application. The blue box is the hook defined by coon.js.",figure:4,mdxType:"ImgEmbed"}),(0,o.kt)("p",null,"The whole process simplified:"),(0,o.kt)("p",null,"1) Application boots and loads requirements"),(0,o.kt)("p",null,"2) coon.js hooks into the process, looks up and parses available ",(0,o.kt)("em",{parentName:"p"},"package.json")," from any package available to the application"),(0,o.kt)("p",null,"3) if a package is tagged as a coon.js package (i.e. has a coon-js-section), configuration for this package will be looked up and parsed"),(0,o.kt)("p",null,"4) if a PackageController should get registered, it is registered with the application"),(0,o.kt)("p",null,"5) launch()"),(0,o.kt)("p",null,"In order for this to work, the developer has to extend from coon.core.app.Application which is a specific of Ext.app.Application \u2014 its onProfilesReady will then initialize the packages and their configuration and set up all the required controllers, additionally configure and ready up any plugins that should be used with the application."),(0,o.kt)(i.e2,{url:"https://cdn-images-1.medium.com/max/2066/1*BUEhSb9qlqu11jsfmCzKiA.png",title:"Current (0.8.0, April 2022) implementation of onProfilesReady in extjs-lib-core\u2019s coon.core.app.Application.",figure:5,mdxType:"ImgEmbed"}),(0,o.kt)("p",null,"As mentioned earlier, packages that might get used later on must be exposed using the uses \u2014 configuration property in the app.json \u2014 this is so the meta-data of the packages can be found in the Ext.manifest-object later on."),(0,o.kt)("h2",{id:"simple-use-cases"},"Simple use cases"),(0,o.kt)("p",null,"Here are a few use cases that will give you an idea how to use dynamic package loading and configuration using coon.js."),(0,o.kt)("h3",{id:"different-packages-for-dev-and-prod-environment"},"Different Packages for dev and prod environment"),(0,o.kt)("p",null,"If you are a famlliar with building frontend systems, you are often confronted with Schroedinger\u2019s backend systems \u2014 backends required by the app, but no one knows if they exist yet (except perhaps for the developer responsible for its implementation)! Required for your work and for processing incoming and outgoing data, a predefined data-structure and some dummy data is fine for setting up POCs and tests, but once you need to test your frontend given more lively conditions, you need more \u201creal\u201d data.\nFor this purpose, the ",(0,o.kt)("a",{parentName:"p",href:"https://docs-devel.sencha.com/extjs/7.5.1/classic/Ext.ux.ajax.SimManager.html"},"Ext.ux.ajax.SimManager")," exists, and I can not state often enough that your project should use it directly from the beginning \u2014 it has saved our company precious time in the past. A ",(0,o.kt)("em",{parentName:"p"},"SimManager "),"allows for managing mocked data endpoints of services for your software during development: You can wire all your requests as if they are actually existing in your code, but once requested, you\u2019re not really connecting to a backend API over http: Instead, the SimManager takes care of re-routing requests to internal JavaScript classes which will then look up any data previously defined given a specific URL-pattern. (Using React, you can fall back to the wonderful ",(0,o.kt)("a",{parentName:"p",href:"https://miragejs.com/"},"Mirage")," project ; you can catch up on the topic regarding mocking APIs reading this ",(0,o.kt)("a",{parentName:"p",href:"https://blog.bitsrc.io/mock-apis-different-techniques-for-react-and-angular-156284b757f4"},"article")," by ",(0,o.kt)("a",{parentName:"p",href:"http://twitter.com/shashiparakramasingh"},"@shashiparakramasingh"),"e)."),(0,o.kt)("p",null,"Using coon.js, we are able to simple attach and detach simlets in our development environment respective production environment. In our development section of the ",(0,o.kt)("em",{parentName:"p"},"app.json")," we would define those packages representing simlets in the uses\u2014 array, while we optionally priovide url configuration in the associated configuration. A PackageController that is autoloaded into the application will then take care of configuring and registering the simlets with the ExtJS internal SimManager. Given the configuration options, the simlets can also exist in production builds \u2014 changing a value in the configuration file lets you easily enable or disable them individually."),(0,o.kt)("h3",{id:"enablingdisabling-packages-for-different-builds"},"Enabling/disabling Packages for different Builds"),(0,o.kt)("p",null,"By simply providing declarative configurations using the configuration system, software project maintainers or administrators can easily enable or disable specific functionality for the application. Following ",(0,o.kt)(r.A,{name:"SOC",file:"sd.separationofconcerns",mdxType:"GlosRef"}),", an application should not break if simply disabling a package representing a module for our software (if it does, we must have done something wrong during development and rethink our approach to coupling and decoupling)."),(0,o.kt)("h3",{id:"hot-swapping-functionality"},"Hot-swapping functionality"),(0,o.kt)("p",null,"Ever dreamt of adding/removing packages to a Sencha application without the need of rebuilding it completely? By utilizing the package-build commands of Sencha CMD we can build packages and drop them into a production build of a Sencha application built with coon.js \u2014 or remove any of them completely. This makes it possible for users to simply add and remove 3rd party packages on their own, without having to touch any existing code base (except for Ext.manifest, which must be aware of additional packages that are available for the software. But this is enough material for another article\u2026)"),(0,o.kt)("p",null,"The next part in this article series will provide a detailed look at the configuration options available with coon.js and how to use it with packages."))}k.isMDXComponent=!0},2480:()=>{}}]);