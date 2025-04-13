(self.webpackChunkthorsten_suckow_homberg_de=self.webpackChunkthorsten_suckow_homberg_de||[]).push([[2928],{477:()=>{},2172:(e,n,s)=>{"use strict";s.d(n,{$z:()=>p,C9:()=>d,IX:()=>m,ZX:()=>g,eJ:()=>h,uR:()=>u});var t=s(6540),i=s(4882),r=s(8069),a=s(4945),o=s.n(a),c=s(2897),l=s(4848);function d(e){let{width:n,children:s,title:t,figure:r,modeAware:a}=e;return(0,l.jsxs)("div",{style:{width:n,textAlign:"center",margin:20},children:[(0,l.jsx)("div",{className:!1!==a?"umlImg":"",children:s}),(0,l.jsx)("div",{style:{textAlign:"center"},children:(0,l.jsxs)("sup",{children:[(0,l.jsx)("b",{children:i.A.isString(r)?r:`Figure ${r??1}`})," ",(0,l.jsx)("span",{dangerouslySetInnerHTML:{__html:t}})]})})]})}function h(e){let{id:n,source:s,title:t}=e;return(0,l.jsx)(d,{modeAware:!1,title:t,figure:`Source ${s}`,children:(0,l.jsx)(c.A,{id:n})})}function p(e){let{url:n,figure:s,title:t}=e;return(0,l.jsx)(d,{modeAware:!1,figure:s,title:t,children:(0,l.jsx)("img",{alt:"{title}",src:n})})}function u(e){let{children:n,figure:s,title:t}=e;return(0,l.jsx)(d,{modeAware:!0,figure:s,title:t,children:n})}function g(e){let{when:n,where:s}=e;const[t,i]=s;return(0,l.jsxs)("div",{children:["This article was originally published in ",n," at ",(0,l.jsx)("a",{target:"_blank",href:i,children:t}),". Some formatting might have get lost during the migration to this site: If you think you spotted an issue caused by malformed formatting, feel free to open a ",(0,l.jsx)("a",{href:"https://github.com/ThorstenSuckow/thorsten.suckow-homberg.de",children:"Pull Request"})," or ",(0,l.jsx)("a",{href:"mailto:thorsten@suckow-homberg.de",children:"send me an Email"}),"."]})}function m(e){let{url:n}=e;const[s,i]=t.useState("");return o()(n).then((e=>{e.text().then((e=>i(e)))})),(0,l.jsx)(r.A,{language:"php",children:s})}},3684:(e,n,s)=>{"use strict";s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"articles/sencha-extjs-beyond-es5/index","title":"Ext JS - Beyond ES5","description":"Use latest ECMA Script versions with Sencha Ext JS","source":"@site/docs/articles/sencha-extjs-beyond-es5/index.mdx","sourceDirName":"articles/sencha-extjs-beyond-es5","slug":"/articles/sencha-extjs-beyond-es5/","permalink":"/docs/articles/sencha-extjs-beyond-es5/","draft":false,"unlisted":false,"editUrl":"https://github.com/thorstensuckow/thorsten.suckow-homberg.de/tree/main/docs/articles/sencha-extjs-beyond-es5/index.mdx","tags":[],"version":"current","lastUpdatedBy":"Thorsten Suckow-Homberg","lastUpdatedAt":1744575815000,"frontMatter":{"title":"Ext JS - Beyond ES5","description":"Use latest ECMA Script versions with Sencha Ext JS"},"sidebar":"docs","previous":{"title":"Dependency Injection in JavaScript","permalink":"/docs/articles/dependency-injection-in-javascript/"},"next":{"title":"Using PHP enums as method calls","permalink":"/docs/articles/using-php-enums-as-method-calls/"}}');var i=s(4848),r=s(8453),a=s(2172);const o={title:"Ext JS - Beyond ES5",description:"Use latest ECMA Script versions with Sencha Ext JS"},c=void 0,l={},d=[{value:"When things go AWOL",id:"when-things-go-awol",level:3},{value:"Introducing @coon-js/delorean",id:"introducing-coon-jsdelorean",level:2},{value:"CI/CD Integration",id:"cicd-integration",level:3},{value:"build.xml strategy",id:"buildxml-strategy",level:3},{value:"package.json strategy",id:"packagejson-strategy",level:3},{value:"Additional Resources",id:"additional-resources",level:2},{value:"Community Notes",id:"community-notes",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(a.ZX,{when:"November 2022",where:["medium.com","https://medium.com/@thorstensuckow/sencha-ext-js-beyond-es5-a0382916b7a6"]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Using modern ECMAScript syntax with Sencha Ext JS projects"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.em,{children:["Sencha Ext JS ships with a closed source build tool that bundles the ",(0,i.jsx)(n.a,{href:"https://developers.google.com/closure/compiler",children:"Closure Compiler"}),"; in some cases, this prevents developers from using modern ECMAScript syntax. This article introduces ",(0,i.jsx)(n.a,{href:"https://github.com/coon-js/delorean",children:"@coon-js/delorean"}),", a tool that works around this issue with the help of an additional transpilation layer."]})}),"\n",(0,i.jsxs)(n.p,{children:["One reason for frustration when working with ",(0,i.jsx)(n.strong,{children:"Ext JS"})," is the fact that modern JavaScript syntax cannot be used with the framework: As soon as ",(0,i.jsx)(n.strong,{children:"Sencha CMD"})," builds a package or application, code that was known to work in development or tests fails to compile for production, or even worse: it completely breaks during production."]}),"\n",(0,i.jsx)(n.p,{children:"Here are a few examples that are known to break a build with Sencha CMD:"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing",children:"Nullish coalescing operator"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'    const foo = null ?? "default string";\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment",children:"Destructuring assignment syntax"})," with function arguments:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"    const fn = ([x, y, z]) => ({x, y, z});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining",children:"Optional chaining operator"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"    const adventurer = {\n      name: 'Alice',\n      cat: {\n        name: 'Dinah'\n      }\n    };\n    \n    const dogName = adventurer.dog?.name;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The reason for this is that Sencha CMD is a proprietary tool that is shipped with a baked-in ",(0,i.jsx)(n.a,{href:"https://docs.sencha.com/cmd/7.6.0/guides/closure_compiler.html",children:"Closure Compiler"}),"; the way it\u2019s integrated prevents developers to fine tune build processes. The Closure Compiler obviously requires updates to work with current ECMAScript standards. There are a few configuration options for packages that allow for a more forgiving (read: ",(0,i.jsx)(n.em,{children:"compatible"}),") parsing and transpiling of source code. However, there is code that is known to fail during compiling, even if the code is syntactically correct."]}),"\n",(0,i.jsxs)(n.p,{children:["(Refer to ",(0,i.jsx)(n.a,{href:"https://github.com/google/closure-compiler/wiki/Supported-features",children:"this list"})," to get an idea of what\u2019s working with the Closure Compiler.)"]}),"\n",(0,i.jsxs)(n.p,{children:["Also note that the latest available version of the Closure Compiler is not necessarily shipped with the latest available version of Sencha CMD: ",(0,i.jsx)(n.em,{children:"v7.6.0.87"})," of Sencha CMD ships with ",(0,i.jsx)(n.a,{href:"https://github.com/google/closure-compiler/wiki/Releases#mar-3rd-2022-v20220301",children:"v20220301"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"    @sencha\\cmd> dir /s/b | findstr .*closure.*$\n    \n    @sencha\\cmd\\dist\\lib\\closure-compiler-externs-v20220301.jar\n    @sencha\\cmd\\dist\\lib\\closure-compiler-v20220301.jar\n"})}),"\n",(0,i.jsx)(n.p,{children:"Unfortunately, Sencha provides no official guide for upgrading the Closure Compiler independently."}),"\n",(0,i.jsx)(n.h3,{id:"when-things-go-awol",children:"When things go AWOL"}),"\n",(0,i.jsx)(n.p,{children:"Here\u2019s an example that shows how production code of an Ext JS project breaks when modern ECMAScript is used. Consider the following lines as part of the development source code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"    const fn = ([a, b, c]) => ({a, b, c});\n"})}),"\n",(0,i.jsx)(n.p,{children:"This arrow function"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["uses the ",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment",children:"destructuring assignment syntax"})," to unpack the first three entries of an array argument"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["creates an object from the entries using the ",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#property_definitions",children:"notation for shorthand property names"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"returns this object"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Let the code be part of a Sencha Ext JS package that can be built with the command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"    $ npx @sencha/cmd package build\n"})}),"\n",(0,i.jsx)(n.p,{children:"The version used with Sencha CMD is:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"    $ npx @sencha/cmd which\n    \n      Sencha Cmd v7.6.0.87\n"})}),"\n",(0,i.jsx)(n.p,{children:"And the configuration from the sencha section of the package.json is:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'    "output": {\n        "base": "${package.dir}/build"\n    },\n    \n    "compressor": {\n        "type": "closure",\n        "polyfills": "none"\n    },\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Compiling fails since the output level is set to ES5 by default; it\u2019s an ",(0,i.jsx)(n.a,{href:"https://262.ecma-international.org/5.1/",children:"older ES"})," spec, but ",(0,i.jsx)(n.a,{href:"https://caniuse.com/es5",children:"compatible with a wide range of browsers"}),":"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://cdn-images-1.medium.com/max/2722/1*c2_kyf0X7Qjnri980hbaTA.png",alt:""})}),"\n",(0,i.jsx)(n.p,{children:"The configuration can be adjusted so that the ES version used with the project can be specified: Knowing that *NEXT *is the level for the latest features supported, the configuration is changed to:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'    "output": {\n          "base": "${package.dir}/build",\n          "js": {\n              "version": "NEXT"\n          }\n      },\n      "language": {\n          "js": {\n              "input": "NEXT",\n              "output": "NEXT"\n          }\n      },\n      "compressor": {\n          "type": "closure",\n          "polyfills": "none"\n      },\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The output on the console shows that ",(0,i.jsx)(n.em,{children:"NEXT"})," is understood, but still fails with compiling: The build files stay empty."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://cdn-images-1.medium.com/max/2568/1*nJs0luhutbF9CX9tF0gCcQ.png",alt:""})}),"\n",(0,i.jsx)(n.p,{children:"Apparently, somewhere, something is broken."}),"\n",(0,i.jsxs)(n.p,{children:["The language.js.input seems to be causing the issues. According to the ",(0,i.jsx)(n.a,{href:"https://docs.sencha.com/cmd/7.6.0/guides/cli_reference.html#cli_reference_-_sencha_compile_concatenate",children:"official Sencha docs"}),", the following language levels are supported by the tool:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    ES3  : ECMAScript 3 language level\n    ES5  : ECMAScript 5 language level\n    ES6  : ECMAScript 6 language level (2015)\n    ES7  : ECMAScript 7 language level (2016)\n    ES8  : ECMAScript 8 language level (2017)\n    NEXT : ECMAScript Next (or ES.Next) language level\n"})}),"\n",(0,i.jsxs)(n.p,{children:["whereas the Closure Compiler ",(0,i.jsx)(n.a,{href:"https://github.com/google/closure-compiler/wiki/Flags-and-Options",children:"supports the following"})," specs with language_in:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    ECMASCRIPT3\n    ECMASCRIPT5\n    ECMASCRIPT5_STRICT\n    ECMASCRIPT_2015\n    ECMASCRIPT_2016\n    ECMASCRIPT_2017\n    ECMASCRIPT_2018\n    ECMASCRIPT_2019\n    ECMASCRIPT_2020\n    ECMASCRIPT_2021 \n    STABLE\n    ECMASCRIPT_NEXT (latest features supported) (default: STABLE)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Unfortunately, an attempt at setting the language to any of the values supported directly by the Closure Compiler (or variations of it, such as ",(0,i.jsx)(n.em,{children:"ECMASCRIPT_2021"}),", ",(0,i.jsx)(n.em,{children:"ES10"}),"\u2026) results in the following error message:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://cdn-images-1.medium.com/max/2000/1*q1P4eHdT5xLsI1NdHnpRxA.png",alt:""})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"ES8"})})," seems to be the greatest common denominator for Sencha CMD and the Closure Compiler. The following configuration works \u2014 the build process does not cancel halfway through, and transpiled JavaScript ends up in the source files:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'    "output": {\n        "base": "${package.dir}/build",\n        "js": {\n            "version": "ES8"\n        }\n    },\n    "language": {\n        "js": {\n            "input": "ES8",\n            "output": "ES8"\n        }\n    },\n    "compressor": {\n        "type": "closure",\n        "polyfills": "none"\n    }\n'})}),"\n",(0,i.jsx)(n.p,{children:"However, loading the build in production fails."}),"\n",(0,i.jsx)(n.p,{children:"Here\u2019s the original JavaScript again for reference:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"    const fn = ([a, b, c]) => ({a, b, c});\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u2026 and the JavaScript source that ends up with the debug code (e.g., build/project-debug.js):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"    const fn = [a,b,c] => ({\n        a,\n        b,\n        c\n    });\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u2026 and this is the code produced for the compressed JavaScript (e.g., build/project.js):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"    const c=()=>({a,b,c});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["It does not take long to see why the code fails: It is ",(0,i.jsx)(n.strong,{children:"syntactically wrong"})," in the debug build, and ",(0,i.jsx)(n.strong,{children:"functionally wrong"})," in the compressed build."]}),"\n",(0,i.jsx)(n.h2,{id:"introducing-coon-jsdelorean",children:"Introducing @coon-js/delorean"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://cdn-images-1.medium.com/max/2892/1*Unu-G2xd9B0nKUyMKFRFoQ.png",alt:""})}),"\n",(0,i.jsx)(n.p,{children:"Modern language features can be supported with the help of additional transpiling: Development sources using the latest syntax according to ES specifications need to get transpiled in advance, feeding the Closure Compiler with a JavaScript version it understands, resulting in correct and usable builds."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/coon-js/delorean",children:"@coon-js/delorean"})," is an npm tool that provides an additional transpilation layer on top of Sencha CMD with the help of ",(0,i.jsx)(n.a,{href:"https://babel.dev",children:"Babel"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["For making this work, ",(0,i.jsx)(n.strong,{children:"delorean"})," alters the project file of the package or application and redirects source-roots to the files that were processed and transpiled by ",(0,i.jsx)(n.strong,{children:"Babel"}),". This allows for using any JavaScript language feature and ",(0,i.jsx)(n.a,{href:"https://moduscreate.com/blog/optimize-es6-output-size-performance-via-babel/",children:"additional optimisations"})," that can be injected with the help of Babel\u2019s countless number of plugins."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"https://babeljs.io/docs/en/options#no-targets",children:"default configuration of **delorean"}),"** makes sure that Babel produces ES5 code:"]}),"\n",(0,i.jsx)(a.$z,{url:"https://cdn-images-1.medium.com/max/3490/1*_dfF7nUTe6nzegu-xW4uwA.png",figure:1,title:"delorean interrupts the regular build process of Sencha CMD by providing pre-transpiled sources."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"delorean"})," hardly affects the actual build process: It only updates existing mappings in the configuration file required by Sencha CMD; these usually represent directories containing project-relevant source files. Besides obvious scaffolding of the transpiled project, the infrastructure of the project remains untouched, making almost ",(0,i.jsx)(n.em,{children:"seamless integration"})," into the development process and existing build pipelines possible."]}),"\n",(0,i.jsx)(a.$z,{url:"https://cdn-images-1.medium.com/max/3222/1*sacj6snzJ9b_mU0BHbZAvw.png",figure:2,title:"npx delorean -p takes care of transpiling and updating the project configuration."}),"\n",(0,i.jsx)(n.p,{children:"Changes made to the project configuration can easily be tracked:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-diff",children:'             "classpath": [\n    -            "${package.dir}/src",\n    -            "${package.dir}/${toolkit.name}/src"\n    +            "${package.dir}/.deloreanbuild/src",\n    +            "${package.dir}/.deloreanbuild/${toolkit.name}/src"\n             ],\n             "overrides": [\n    -            "${package.dir}/overrides",\n    -            "${package.dir}/${toolkit.name}/overrides"\n    +            "${package.dir}/.deloreanbuild/overrides",\n    +            "${package.dir}/.deloreanbuild/${toolkit.name}/overrides"\n             ],\n'})}),"\n",(0,i.jsxs)(n.p,{children:["During development, the changes made by ",(0,i.jsx)(n.strong,{children:"delorean"})," should be reverted so that live reloading with sencha app watch respective ",(0,i.jsx)(n.a,{href:"https://docs.sencha.com/extjs/7.6.0/guides/using_systems/using_npm/configuring_webpack.html",children:"*webpack *"}),"(being part of Ext JS projects used with npm) still works \u2014 and of course so that the browser uses the sources from the files currently being edited by the developer. (Otherwise, the development environment would rely on the transpiled files that were created previously by ",(0,i.jsx)(n.strong,{children:"delorean"}),".)"]}),"\n",(0,i.jsx)(n.p,{children:"Reverting the changes is fairly easy, as a simple call to"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"   $ npx delorean -r\n"})}),"\n",(0,i.jsx)(n.p,{children:"removes any reference to the .deloreanbuild folder from the project configuration file:"}),"\n",(0,i.jsx)(a.$z,{url:"https://cdn-images-1.medium.com/max/2000/1*W7KxPQ_8vPSZNmpRiEKkMw.png",figure:3,title:"Reverting changes made by delorean once a build has finished."}),"\n",(0,i.jsx)(n.h3,{id:"cicd-integration",children:"CI/CD Integration"}),"\n",(0,i.jsxs)(n.p,{children:["npx delorean -p and npx delorean -r are easily integrated with CI/CD pipelines commonly used with Sencha Ext JS projects.\nYou can automate transpilation by configuring either the ",(0,i.jsx)(n.a,{href:"https://docs.sencha.com/cmd/guides/advanced_cmd/cmd_build.html",children:"build.xml"})," of a package or an application, or by adding additional ",(0,i.jsx)(n.a,{href:"https://docs.npmjs.com/cli/v9/using-npm/scripts",children:"scripts"})," to the package.json ."]}),"\n",(0,i.jsx)(n.h3,{id:"buildxml-strategy",children:"build.xml strategy"}),"\n",(0,i.jsxs)(n.p,{children:["This xml-file is usually available with any Ext JS package or application and provides a place for adding options and hooks for the ",(0,i.jsx)(n.a,{href:"https://ant.apache.org/",children:"Ant tool"})," used with Sencha CMD. It allows for configuring -before-build /-after-build targets (",(0,i.jsx)(n.a,{href:"https://docs.sencha.com/cmd/guides/advanced_cmd/cmd_ant.html",children:"you can read more about it **here"}),"**)."]}),"\n",(0,i.jsx)(n.p,{children:"You can make use of **delorean **by configuring the targets with:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:'    <target name="-before-build">\n        <exec executable="cmd">\n            <arg line="/c npx delorean -p"/>\n        </exec>\n    </target>\n    \n    <target name="-after-build">\n        <exec executable="cmd">\n            <arg line="/c npx delorean -r"/>\n        </exec>\n    </target>\n'})}),"\n",(0,i.jsx)(n.p,{children:"This will run npx delorean -p before Sencha CMD builds the project (hence -before-build), and revert all project specific changes once the build completes by invoking npx delorean -r (hence -after-build)."}),"\n",(0,i.jsx)(n.h3,{id:"packagejson-strategy",children:"package.json strategy"}),"\n",(0,i.jsxs)(n.p,{children:["If you already have a build script in your package.json which calls Sencha CMD, wrap the build command with additional calls to ",(0,i.jsx)(n.strong,{children:"delorean"}),". Here\u2019s an example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'    {\n      "scripts": [\n        "build": "npx delorean -p && npm run senchabuild && npx delorean -r",\n        "senchabuild": "npm run clean && cross-env webpack --env.profile=desktop --env.environment=production --env.treeshake=yes --env.cmdopts=--uses" \n      ]\n    }\n'})}),"\n",(0,i.jsx)(n.h2,{id:"additional-resources",children:"Additional Resources"}),"\n",(0,i.jsxs)(n.p,{children:["The repository for the project can be found a ",(0,i.jsx)(n.a,{href:"https://github.com/coon-js/delorean",children:"https://github.com/coon-js/delorean"}),". Feedback regarding configurations, CI/CD integrations and issue reports is greatly appreciated."]}),"\n",(0,i.jsxs)(n.p,{children:["The official documentation for delorean is available at ",(0,i.jsx)(n.a,{href:"https://www.conjoon.org/docs/api/misc/@coon-js/delorean",children:"https://www.conjoon.org/docs/api/misc/@coon-js/delorean"}),", which is also its project home, since it originated as part of the conjoon ecosystem."]}),"\n",(0,i.jsx)(n.h3,{id:"community-notes",children:"Community Notes"}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.a,{href:"https://discord.gg/TW896RE32W",children:"Sencha Discord Server"}),", users reacted to this article and noted that it would also be great to completely skip Sencha CMD and use tools like ",(0,i.jsx)(n.a,{href:"https://webpack.js.org/",children:"**webpack"}),"** or ",(0,i.jsx)(n.a,{href:"https://rollupjs.org/guide/en/",children:"**rollup"}),"** exclusively for building projects. I strongly agree and think that providing a solution for bundling assets and sources with the help of these tools can be done with manageable effort."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Significant Revisions"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["05 March 2023: Migrated article to ",(0,i.jsx)(n.strong,{children:"this"})," site"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"02 December 2022: Minor corrections in preparation for the german translation"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"30 November 2022: Updated **Figure 2 **with externals configuration"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"23 November 2022: Updated wording, added community notes"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"21 November 2022: Published first installment"}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{"use strict";s.d(n,{R:()=>a,x:()=>o});var t=s(6540);const i={},r=t.createContext(i);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);