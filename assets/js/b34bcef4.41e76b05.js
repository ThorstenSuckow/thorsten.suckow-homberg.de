(self.webpackChunkthorsten_suckow_homberg_de=self.webpackChunkthorsten_suckow_homberg_de||[]).push([[5311],{3905:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>c,kt:()=>d});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=p(t),f=i,d=u["".concat(s,".").concat(f)]||u[f]||g[f]||o;return t?a.createElement(d,l(l({ref:n},c),{},{components:t})):a.createElement(d,l({ref:n},c))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=f;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r[u]="string"==typeof e?e:i,l[1]=r;for(var p=2;p<o;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},2490:(e,n,t)=>{"use strict";t.d(n,{$o:()=>r,_b:()=>p,cx:()=>l,e2:()=>s,t2:()=>c});var a=t(7294),i=t(5075),o=t(9943);function l(e){let{width:n,children:t,title:o,figure:l,modeAware:r}=e;return a.createElement("div",{style:{width:n,textAlign:"center",margin:20}},a.createElement("div",{className:!1!==r?"umlImg":""},t),a.createElement("div",{style:{textAlign:"center"}},a.createElement("sup",null,a.createElement("b",null,i.Z.isString(l)?l:`Figure ${l??1}`)," ",a.createElement("span",{dangerouslySetInnerHTML:{__html:o}}))))}function r(e){let{id:n,source:t,title:i}=e;return a.createElement(l,{modeAware:!1,title:i,figure:`Source ${t}`},a.createElement(o.Z,{id:n}))}function s(e){let{url:n,figure:t,title:i}=e;return a.createElement(l,{modeAware:!1,figure:t,title:i},a.createElement("img",{alt:"{title}",src:n}))}function p(e){let{children:n,figure:t,title:i}=e;return a.createElement(l,{modeAware:!0,figure:t,title:i,children:n})}function c(e){let{when:n,where:t}=e;const[i,o]=t;return a.createElement("div",null,"This article was originally published in ",n," at ",a.createElement("a",{target:"_blank",href:o},i),". Some formatting might have get lost during the migration to this site: If you think you spotted an issue caused by malformed formatting, please ",a.createElement("a",{href:"mailto:thorsten@suckow-homberg.de"},"let me know"),".")}},1642:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=t(7462),i=(t(7294),t(3905)),o=t(2490);const l={title:"Part 3: Configuration Details and defining Plugins",description:"Managing and configuring Plugins"},r=void 0,s={unversionedId:"articles/creating-extjs-applications-with-coon-js/configuration-details-and-plugins",id:"articles/creating-extjs-applications-with-coon-js/configuration-details-and-plugins",title:"Part 3: Configuration Details and defining Plugins",description:"Managing and configuring Plugins",source:"@site/docs/articles/creating-extjs-applications-with-coon-js/3-configuration-details-and-plugins.mdx",sourceDirName:"articles/creating-extjs-applications-with-coon-js",slug:"/articles/creating-extjs-applications-with-coon-js/configuration-details-and-plugins",permalink:"/docs/articles/creating-extjs-applications-with-coon-js/configuration-details-and-plugins",draft:!1,editUrl:"https://github.com/thorstensuckow/thorsten.suckow-homberg.de/tree/main/docs/articles/creating-extjs-applications-with-coon-js/3-configuration-details-and-plugins.mdx",tags:[],version:"current",lastUpdatedBy:"Thorsten Suckow-Homberg",lastUpdatedAt:1679413014,formattedLastUpdatedAt:"Mar 21, 2023",sidebarPosition:3,frontMatter:{title:"Part 3: Configuration Details and defining Plugins",description:"Managing and configuring Plugins"},sidebar:"docs",previous:{title:"Part 2: Packages and Configuration Options",permalink:"/docs/articles/creating-extjs-applications-with-coon-js/packages-and-configuration-options"},next:{title:"Part 4: Registering services and using the Service Locator",permalink:"/docs/articles/creating-extjs-applications-with-coon-js/registering-services-and-using-the-service-locator"}},p={},c=[{value:"Environment-specific configuration files",id:"environment-specific-configuration-files",level:2},{value:"Layout of an application-configuration file",id:"layout-of-an-application-configuration-file",level:3},{value:"Sections considered within an application configuration file",id:"sections-considered-within-an-application-configuration-file",level:3},{value:"Dynamic Package Loading",id:"dynamic-package-loading",level:2},{value:"Package Configurations",id:"package-configurations",level:2},{value:"Accessing Package Configuration during runtime",id:"accessing-package-configuration-during-runtime",level:3},{value:"Configuring Plugins for PackageControllers",id:"configuring-plugins-for-packagecontrollers",level:2},{value:"Using the package\u2019s name to automatically set up the plugin",id:"using-the-packages-name-to-automatically-set-up-the-plugin",level:3},{value:"Passing arguments to a controller plugin\u2019s constructor",id:"passing-arguments-to-a-controller-plugins-constructor",level:3},{value:"Configuring Plugins for the Application",id:"configuring-plugins-for-the-application",level:2},{value:"Configuring Component Plugins",id:"configuring-component-plugins",level:2},{value:"Advise on using plugins",id:"advise-on-using-plugins",level:2},{value:"Best practices",id:"best-practices",level:2},{value:"Real world examples",id:"real-world-examples",level:2}],u={toc:c},g="wrapper";function f(e){let{components:n,...t}=e;return(0,i.kt)(g,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)(o.t2,{when:"April 2022",where:["medium.com","https://medium.com/@thorstensuckow/creating-ext-js-applications-with-coon-js-part-3-configuration-details-and-defining-plugins-a9e8e99b280a"],mdxType:"MigrationNotice"})),(0,i.kt)("p",null,"This part of the article series focuses on details of the configuration options available when using coon.core.app.Application from the ",(0,i.kt)("em",{parentName:"p"},"coon.js"),"-package; we will also take an extended look at configuration options for an application itself, namely how to configure ",(0,i.kt)("strong",{parentName:"p"},"controller-"),", ",(0,i.kt)("strong",{parentName:"p"},"application-")," and ",(0,i.kt)("strong",{parentName:"p"},"component-")," plugins globally."),(0,i.kt)("p",null,"In the ",(0,i.kt)("a",{parentName:"p",href:"/docs/articles/creating-extjs-applications-with-coon-js/packages-and-configuration-options"},"previous part")," of this article series I gave an introduction to the theory behind configuration options with ",(0,i.kt)("em",{parentName:"p"},"coon.js"),"-driven Sencha Ext JS applications. This article assumes that you are familiar with the topics covered therein."),(0,i.kt)("h2",{id:"environment-specific-configuration-files"},"Environment-specific configuration files"),(0,i.kt)("p",null,"Application and Package configuration files will be looked up in the resource path, followed by the folder that was configured with the coon-js-section of the application's app.json. Example (",(0,i.kt)("em",{parentName:"p"},"app.json"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'    {\n        "production": {\n            "coon-js" : {\n                "resourcePath": "files",\n                "env": "prod"\n            }\n        },\n        "development": {\n            "coon-js" : {\n                "resourcePath": "files",\n                "env": "dev"\n            }\n        }\n    }\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"}," ",(0,i.kt)("em",{parentName:"p"},"Environment-specific configuration files will always be given precedence over the default-configuration files."))),(0,i.kt)("p",null,"Depending on the build you are using (in this case either the production- or the development-build), configuration-files will be looked up in resources/files (note that the resources-folder is the folder-name/path returned by a call to Ext.getResourcePath())."),(0,i.kt)("p",null,"A ",(0,i.kt)("em",{parentName:"p"},"coon.js"),"-Application will first query configuration files for the build that is being used (by using the name pattern ","[application_name]",".","[coon-js.env]",".conf.json), and if that file could not be loaded and results in a HTTP error-code, loading will fall back to ","[application_name]",".conf.json. In short, environment-specific configuration files will always be given precedence over the default-configuration files."),(0,i.kt)("p",null,"For using specific ",(0,i.kt)("strong",{parentName:"p"},"package configuration files"),", see the section about ",(0,i.kt)("strong",{parentName:"p"},"Dynamic Package Loading"),"."),(0,i.kt)("h3",{id:"layout-of-an-application-configuration-file"},"Layout of an application-configuration file"),(0,i.kt)("p",null,"An application\u2019s configuration file needs to contain valid JSON. The configuration needs to be an object keyed under ","[application_name]",".config. For an application with the name conjoon, the structure needs to be initially laid out as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'    {\n        "conjoon": {\n        }\n    }\n')),(0,i.kt)("p",null,"Note how the configuration has to be introduced with the name of the application the configuration is used in, in this case conjoon."),(0,i.kt)("h3",{id:"sections-considered-within-an-application-configuration-file"},"Sections considered within an application configuration file"),(0,i.kt)("p",null,"The following sections are considered when reading out a ",(0,i.kt)("em",{parentName:"p"},"coon.js"),"-application configuration file:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"application: runtime related configuration for the application. Will be available via coon.core.ConfigManager.get(","[application_name]",")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"plugins: Controller-/Component-Plugins that need to be registered for various controllers and/or components")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"packages: Configuration for packages used by the application. Can also be used to disable/enable packages in a given build"))),(0,i.kt)("h2",{id:"dynamic-package-loading"},"Dynamic Package Loading"),(0,i.kt)("p",null,"For dynamic package loading, ",(0,i.kt)("em",{parentName:"p"},"coon.js")," queries Ext.manifest for packages which are part of the used-configuration in an application's app.json. Those packages need to have a coon-js section configured with a package-entry:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'    {\n        "coon-js": {\n            "package" : {\n                "autoLoad" : true\n            }\n        }\n    }\n')),(0,i.kt)("p",null,"If autoLoad is set to true, these packages will be loaded by this application implementation dynamically upon startup.\nIf configured with the registerController-options set to true, this package's PackageController - if any - will be registered with the application, and during startup, it's preLaunchHook-method is called when the application is ready to settle into its launch()-method. If any of the registered PackageControllers preLaunchHook()-methods return false, the application's launch() will not be called."),(0,i.kt)("p",null,"More details on ",(0,i.kt)("strong",{parentName:"p"},"Package Controllers")," on how they help to modularize an application will be part of the next article in this series."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'    {\n        "coon-js": {\n            "package" : {\n                "autoLoad" : {\n                    "registerController": true\n                }\n            }\n        }\n    }\n')),(0,i.kt)("h2",{id:"package-configurations"},"Package Configurations"),(0,i.kt)("p",null,"You can add ",(0,i.kt)("strong",{parentName:"p"},"individual configuration files")," for your packages \u2014 those files must follow the naming scheme ","[package_name]",".conf.json, and it\u2019s generally a good idea to save them in the resources-folder as described in the previous section about the ",(0,i.kt)("em",{parentName:"p"},"coon.js"),"-environment variable, since this folder can serve as the root for all configuration files for your application."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Package configuration files")," will be considered if a package has the following section set in its ",(0,i.kt)("em",{parentName:"p"},"package.json"),", or globally in the application configuration file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'    {\n        "coon-js": {\n            "package" : {\n                "config" : {}\n            }\n        }\n    }\n')),(0,i.kt)("p",null,"or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'    {\n        "coon-js": {\n            "package" : {\n                "config" : true\n            }\n        }\n    }\n')),(0,i.kt)("p",null,"or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'    {\n        "coon-js": {\n            "package" : {\n                "config" : "filename"\n            }\n        }\n    }\n')),(0,i.kt)("p",null,"While the first two entries will fall back to file names given the pattern ","[package_name]",".conf.json, the last example will define the file name explicitly."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"}," ",(0,i.kt)("em",{parentName:"p"},"Using specific configuration files for packages instead of placing the configuration itself in their ",(0,i.kt)("em",{parentName:"em"},"package.json")," can be beneficial when applying larger configurations to packages."))),(0,i.kt)("p",null,"By default, package configuration files will be looked up in the package's resource-folder. If an additional path is specified, this path is interpreted and resolved:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Resolving to the resource-path of the owning package:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "autoLoad": {\n        "registerController": true\n    },\n    "config": "extjs-app-webmail.conf.json"\n}\n')),(0,i.kt)("p",null,"or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'    {\n        "autoLoad": {\n            "registerController": true\n        },\n        "config": "${package.resourcePath}/extjs-app-webmail.conf.json"\n    }\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Resolving to the application\u2019s resource-path")),(0,i.kt)("p",null,"The following resolves to resources/","[coon-js.resourcePath]","/extjs-app-webmail.conf.json. In this case, configuration will be read out from the resources-folder of the application, not the package itself. This spares developers the tedious task of looking up individual files throughout packages in the file system; it makes it possible to have all configuration centralized at one place, maintaining this one file with ",(0,i.kt)("em",{parentName:"p"},".gitignore"),", if necessary."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'    {\n        "autoLoad": {\n            "registerController": true\n        },\n        "config": "${coon-js.resourcePath}/extjs-app-webmail.conf.json"\n    }\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"Package configuration files will completely overwrite configuration defined in the ",(0,i.kt)("em",{parentName:"em"},"package.json"),"-files of the owning package."))),(0,i.kt)("h3",{id:"accessing-package-configuration-during-runtime"},"Accessing Package Configuration during runtime"),(0,i.kt)("p",null,"The configuration\u2019s data is registered with the coon.core.ConfigManager and can be queried by using calls to coon.core.ConfigManager.get(","[package_name]","."),(0,i.kt)("h2",{id:"configuring-plugins-for-packagecontrollers"},"Configuring Plugins for PackageControllers"),(0,i.kt)("p",null,"coon.core.app.PackageControllers are application controllers that wire additional functionality into the ",(0,i.kt)("em",{parentName:"p"},"coon.js"),"-application their used with, such as automizing routing or providing navigation options to their package\u2019s views."),(0,i.kt)("p",null,"They can have an arbitrary number of plugins of the type coon.core.app.plugin.ControllerPlugin which are called by the application during its preLaunchHook-process \u2014 which gets called prior to the application\u2019s launch-method."),(0,i.kt)("p",null,"Regardless of the state of the return-value of a PackageController's preLaunchHook(), all registered plugins will be executed during the preLaunchHookProcess, making sure one can add additional setup instructions prior to calling a package controller\u2019s preLaunchHook."),(0,i.kt)(o.e2,{title:"The preLaunchHookProcess() of coon.core.app.Application will visit every configured controller plugin first, but only calls each controller\u2019s preLaunchHook() until the first \u201cfalse\u201d is detected as a return value",url:"https://cdn-images-1.medium.com/max/2000/1*T4vK3Qp2NYviCue9K9HcZw.png",figure:1,mdxType:"ImgEmbed"}),(0,i.kt)("p",null,"For registering PluginControllers, either create them and add them to the PackageController manually by using coon.core.app.PackageController#addPlugin(), or use the package\u2019s configuration."),(0,i.kt)("h3",{id:"using-the-packages-name-to-automatically-set-up-the-plugin"},"Using the package\u2019s name to automatically set up the plugin"),(0,i.kt)("p",null,"You can use the package-name to specify a single ControllerPlugin out of ",(0,i.kt)("em",{parentName:"p"},"this")," individual package. The plugin will then be looked up in the specified package\u2019s ",(0,i.kt)("em",{parentName:"p"},"app"),"-folder given the naming pattern ","[package-namespace]",".app.plugin.ControllerPlugin), or by specifying the fully qualified namespace of the ControllerPlugins to load."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Example: "),"\nplug-cn_themeutil has the namespace coon.plugin.themeutil; ",(0,i.kt)("em",{parentName:"p"},"coon.js")," tries to create coon.plugin.themeutil.app.plugin.ControllerPlugin during application startup; the class must therefore be defined and registered so the dependency can be properly resolved by Sencha Ext JS \u2014 this simply means that you need to make sure that the defining package of the plugin is defined as a dependency for the application itself, in either the app.json\u2019s requires or uses-property."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'    {\n        "coon-js": {\n            "package" : {\n                "config" : {\n                    "plugins" : {\n                        "controller" : ["plug-cn_themeutil"]\n                    }\n                }\n            }\n        }\n    }\n')),(0,i.kt)("p",null,"The following is the same as above, but this time we specify the ",(0,i.kt)("em",{parentName:"p"},"fqn")," of the plugin (coon.plugin.themeutil.app.plugin.ControllerPlugin)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'    {\n        "coon-js": {\n            "package" : {\n                "config" : {\n                    "plugins" : {\n                        "controller" :["coon.plugin.themeutil.app.plugin.ControllerPlugin"]\n                    }\n                }\n            }\n        }\n    }\n')),(0,i.kt)("h3",{id:"passing-arguments-to-a-controller-plugins-constructor"},"Passing arguments to a controller plugin\u2019s constructor"),(0,i.kt)("p",null,"A controller plugin can also be configured with arguments that get applied to the constructor of the ControllerPlugin. For specifying constructor arguments, the configuration for the controller plugin has to be an object with the keys xclass holding the ",(0,i.kt)("em",{parentName:"p"},"fqn")," of the controller plugin, and args, which is an array of arguments that get passed to the plugin\u2019s constructor."),(0,i.kt)("p",null,'In the following example, {property: "value"} is passed as the first argument to the plugin\u2019s constructor:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'    {\n        "coon-js": {\n            "plugins": {\n                "controller": [\n                    {\n                        "xclass": "conjoon.plugin.ControllerPlugin",\n                        "args": [\n                            {\n                                "property": "value"\n                            }\n                        ]\n                    }\n                ]\n            }\n        }\n    }\n')),(0,i.kt)("p",null,"Note: Plugins for PackageControllers will only be registered if the PackageController itself is configured as such in the owning package\u2019s configuration (i.e. coon-js.package.controller)."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"You can add as many plugins as you\u2019d like in the configuration, and mix and match package names with ",(0,i.kt)("em",{parentName:"em"},"fqn"),"s of the ControllerPlugins."))),(0,i.kt)("h2",{id:"configuring-plugins-for-the-application"},"Configuring Plugins for the Application"),(0,i.kt)("p",null,"A ",(0,i.kt)("em",{parentName:"p"},"coon.js"),"-",(0,i.kt)("strong",{parentName:"p"},"application")," can also be configured with plugins (read: ",(0,i.kt)("strong",{parentName:"p"},"application plugins"),"). These plugins are loaded globally into the application, and do not depend on PackageControllers per se."),(0,i.kt)("p",null,"The configuration of application plugins follows the same principles as configuring controller plugins when it comes to resolving dependencies, given either the package name the application plugin can be found in, or the ",(0,i.kt)("em",{parentName:"p"},"fqn")," of the application plugin."),(0,i.kt)("p",null,"There are two (obvious) differences:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"When not using the ",(0,i.kt)("em",{parentName:"p"},"fqn"),", application plugins will be looked up given the naming pattern ","[package_namespace]",".app.plugin.ApplicationPlugin")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"application plugins must be configured in the ",(0,i.kt)("strong",{parentName:"p"},"application configuration "),"(see the previous section in this article regarding application configuration), namely in the ","[application_name]",".plugins.application section"))),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Example:")),(0,i.kt)("p",null,"The following registers coon.plugin.themeutil.app.plugin.ApplicationPlugin as an application plugin for the owning application:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'    {\n        "conjoon" : {\n            "plugins": {\n                "application" : [\n                    "extjs-plug-themeutil"\n                ]\n            }\n        }\n    }\n')),(0,i.kt)("h2",{id:"configuring-component-plugins"},"Configuring Component Plugins"),(0,i.kt)("p",null,"coon.jsprovides funtionality to specify component-plugins using both the application configuration or package configurations.\nTo properly resolve component plugins as dependencies, they need to be loaded by defining them as classes owned by packages (e.g. by specifying those packages in the requires- or uses-section in the app.json) \u2014 or in any other way so the Ext JS\u2019 microloader is aware of them.\nA ",(0,i.kt)("strong",{parentName:"p"},"component plugin configuration "),"has the following key/value-pairs (and can be placed in either the ",(0,i.kt)("em",{parentName:"p"},"application configuration")," or a ",(0,i.kt)("em",{parentName:"p"},"package configuration"),"):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"cmp: A valid component query the application uses to look up the component for which this plugin should be registered")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"event: The name of the event that should be listened to for instantiating and registering the plugin")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"pclass/fclass: The ",(0,i.kt)("em",{parentName:"p"},"fqn")," for the plugin to use. If you are using a plugin that extends Ext.plugin.Abstract, use pclass. If you are referencing a grid-feature (i.e. extending Ext.grid.feature.Feature), use fclass")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"args: An array of arguments that get passed to the constructor of the plugin"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"Internally, the mixin coon.core.app.plugin.ComponentPluginMixin is used by the coon.core.app.Application and coon.core.app.PackageController to manage component plugins."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example for specifying component plugins using the application configuration"',title:'"Example',for:!0,specifying:!0,component:!0,plugins:!0,using:!0,the:!0,application:!0,'configuration"':!0},'    {\n        "conjoon" : {\n            "plugins": {\n                "components": [\n                    {\n                        "cmp": "cn_navport-tbar",\n                        "pclass": "conjoon.ModeSwitchPlugin",\n                        "event": "beforerender",\n                        "args": [{"defaultMode": "dark"}]\n                    },\n\n                    {\n                        "cmp": "cn_mail-mailmessagegrid",\n                        "fclass": "conjoon.PreviewTextLazyLoad",\n                        "event": "cn_init"\n                    }\n                ]\n            }\n        }\n    }\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example for specifying component plugins using a package configuration"',title:'"Example',for:!0,specifying:!0,component:!0,plugins:!0,using:!0,a:!0,package:!0,'configuration"':!0},'    {\n        "coon-js": {\n            "package" : {\n                "config" : {\n                    "plugins" : {\n                        "controller" : [\n                            "plug-cn_themeutil"\n                        ],\n                        "components": [\n                            {\n                                "cmp": "cn_navport-tbar",\n                                "pclass": "conjoon.ModeSwitchPlugin",\n                                "event": "beforerender",\n                                "args": [{"defaultMode": "dark"}]\n                            },\n                            {\n                                "cmp": "cn_mail-mailmessagegrid",\n                                "fclass": "conjoon.PreviewTextLazyLoad",\n                                "event": "cn_init"\n                            }\n                        ]\n                    }\n                }\n            }\n        }\n    }\n')),(0,i.kt)("h2",{id:"advise-on-using-plugins"},"Advise on using plugins"),(0,i.kt)("p",null,"Use Application Plugins when you want to"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"add optional functionality to an application")),(0,i.kt)("p",null,"Use Controller Plugins when you want to"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"add optional functionality to a package")),(0,i.kt)("p",null,"Use Component Plugins when you want to"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"add optional functionality to a specific component")),(0,i.kt)("h2",{id:"best-practices"},"Best practices"),(0,i.kt)("p",null,"It is recommended to use the packages-section of the ",(0,i.kt)("strong",{parentName:"p"},"application configuration "),"to make sure ",(0,i.kt)("strong",{parentName:"p"},"configuration can be edited at a central place"),".\nSpecifying the packages-section in the application configuration file will make sure that packages configurations defined here completely overwrite the settings found in their original package.json.\nConfiguration of packages in the application configuration is the same as configuring packages in their associated package.json, except for section keys used."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example for package configuration in the application configuration file"',title:'"Example',for:!0,package:!0,configuration:!0,in:!0,the:!0,application:!0,'file"':!0},'    {\n        "conjoon": {\n            "packages" : {\n                "extjs-app-webmail" : {\n                    "autoLoad": {\n                        "registerController": true\n                    },\n                    "config": "${coon-js.resourcePath}/mail.conf.json"\n                },\n                "extjs-app-imapuser": {\n                    "autoLoad": {\n                        "registerController": true\n                    },\n                    "config": {\n                        "service": {\n                            "rest-imapuser": {\n                                "base": "https://rest-imapuser/api/v0"\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }\n')),(0,i.kt)("h2",{id:"real-world-examples"},"Real world examples"),(0,i.kt)("p",null,"A large configurable application built with ",(0,i.kt)("em",{parentName:"p"},"coon.js")," can be found in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/conjoon/conjoon"},"conjoon"),"-repository."),(0,i.kt)("p",null,"The next part in this article series will take a look at the concept and usage of PackageControllers."))}f.isMDXComponent=!0},2480:()=>{}}]);