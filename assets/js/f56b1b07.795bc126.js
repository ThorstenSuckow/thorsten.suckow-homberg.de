"use strict";(self.webpackChunkthorsten_suckow_homberg_de=self.webpackChunkthorsten_suckow_homberg_de||[]).push([[1889],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=i,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||a;return n?o.createElement(m,r(r({ref:t},p),{},{components:n})):o.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<a;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1821:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(7462),i=(n(7294),n(3905));const a={title:"Fix: Missing favicon.ico in Sencha ExtJS production builds",authors:["thorstensuckow"],tags:["javascript","sencha","extjs"]},r=void 0,s={permalink:"/blog/2023/02/19/fix-missing-favicon-in-extjs",editUrl:"https://github.com/thorstensuckow/thorsten.suckow-homberg.de/tree/main/blog/2023-02-19-fix-missing-favicon-in-extjs/index.md",source:"@site/blog/2023-02-19-fix-missing-favicon-in-extjs/index.md",title:"Fix: Missing favicon.ico in Sencha ExtJS production builds",description:"Fix: Missing favicon.ico in Sencha ExtJS production builds",date:"2023-02-19T00:00:00.000Z",formattedDate:"February 19, 2023",tags:[{label:"javascript",permalink:"/blog/tags/javascript"},{label:"sencha",permalink:"/blog/tags/sencha"},{label:"extjs",permalink:"/blog/tags/extjs"}],readingTime:2.045,hasTruncateMarker:!1,authors:[{name:"Thorsten Suckow-Homberg",url:"https://thorsten.suckow-homberg.de",imageURL:"https://avatars.githubusercontent.com/u/823135",key:"thorstensuckow"}],frontMatter:{title:"Fix: Missing favicon.ico in Sencha ExtJS production builds",authors:["thorstensuckow"],tags:["javascript","sencha","extjs"]},prevItem:{title:"bcc-header issues with Horde_Mime_Mail",permalink:"/blog/2023/03/20/horde-mail-ignores-bcc"},nextItem:{title:"Releasing conjoon V1.0",permalink:"/blog/Releasing-conjoon-V1.0"}},l={authorsImageUrls:[void 0]},c=[{value:"Fix: Missing favicon.ico in Sencha ExtJS production builds",id:"fix-missing-faviconico-in-sencha-extjs-production-builds",level:2},{value:"The issue",id:"the-issue",level:3},{value:"The fix",id:"the-fix",level:3}],p={toc:c},u="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"fix-missing-faviconico-in-sencha-extjs-production-builds"},"Fix: Missing favicon.ico in Sencha ExtJS production builds"),(0,i.kt)("p",null,"Fixing missing favicon.ico in Ext JS applications."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"The original issue is tracked here: ",(0,i.kt)("a",{parentName:"em",href:"https://github.com/conjoon/conjoon/issues/24"},"https://github.com/conjoon/conjoon/issues/24"))),(0,i.kt)("h3",{id:"the-issue"},"The issue"),(0,i.kt)("p",null,"I\u2019m not quite sure ",(0,i.kt)("em",{parentName:"p"},"when "),"and ",(0,i.kt)("em",{parentName:"p"},"why "),"it broke, but it looks like production builds of Sencha Ext JS applications do not contain any ",(0,i.kt)("strong",{parentName:"p"},"favicon.ico")," originally existing in the development build (",(0,i.kt)("em",{parentName:"p"},"anymore"),")."),(0,i.kt)("p",null,"While everything seems to be okay with development builds (that\u2019s easy, they refer to the development\u2019s root folder in most cases and do not copy and move files around like the production build does), deploying to production will show the default icon coming with your vendor\u2019s browser for any Sencha ExtJS application, at least when your environment is using the following package versions:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    webpack v4.39.3n/a\n    ext-webpack-plugin v7.6.0 \n    Ext JS v7.6.0.41 \n    Sencha Cmd v7.6.0.87\n``\n\nA call to\n\n```bash\n    $ cross-env webpack \n          --env.profile=desktop \n          --env.environment=production \n          --env.treeshake=yes \n          --env.cmdopts=--uses\n")),(0,i.kt)("p",null,"will produce the production build, but the production build will not contain the favicon.ico. Here\u2019s proof (\u2026 sort of):"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/2000/1*XGxSX1p43oVtk3cif5mE2Q.png",alt:null})),(0,i.kt)("h3",{id:"the-fix"},"The fix"),(0,i.kt)("p",null,"I did not invest too much investigating the reason why this file is omitted. Instead, I added the copy-webpack-plugin to the project and made sure the the favicon is copied over when running npm run build."),(0,i.kt)("p",null,"If you\u2019re reading this post, you most likely stumbled across the same issue. Here\u2019s how to fix it."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Add copy-webpack-plugin to your project")),(0,i.kt)("p",null,"I\u2019m still sporting ",(0,i.kt)("strong",{parentName:"p"},"webpack v4.39.3 "),"so I had to fall back to an older version of the plugin. I\u2019m using ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"mailto:copy-webpack-plugin@6.4.1"},"copy-webpack-plugin@6.4.1"))," in this case:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"    $ npm i -D copy-webpack-plugin@6.4.1\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Add a few more modules to your project\u2019s webpack.config.js")),(0,i.kt)("p",null,"Add the following two lines to the head of the file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'    // ....\n    const CopyWebpackPlugin = require("copy-webpack-plugin");\n    const fs = require("fs");\n    //...\n')),(0,i.kt)("p",null,"Why fs? I couldn\u2019t find an easy way to access the application\u2019s name at this point of the build step through the variables available, so I\u2019m using fs to parse the project's app.json. The value of its name-property is then used for computing the destination folder for the ",(0,i.kt)("em",{parentName:"p"},"copy"),"-operation."),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Add the ",(0,i.kt)("strong",{parentName:"li"},"copy-webpack-plugin")," to the list of plugins in the script")),(0,i.kt)("p",null,"You\u2019ll easily find the location that has to be edited when looking for the ",(0,i.kt)("strong",{parentName:"p"},"@sencha/ext-webpack-plugin"),"-configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"    const plugins = [\n      new ExtWebpackPlugin({\n        // ...\n      }),\n      new CopyWebpackPlugin({\n        patterns: [{\n          from: path.resolve(__dirname, './favicon.ico'),\n          to: path.join(\n              __dirname,\n              \"build\",\n              environment,\n              JSON.parse(\n                fs.readFileSync(\n                  path.resolve(__dirname, './app.json')\n                )\n              ).name\n          )\n        }]\n      })\n    ]\n")),(0,i.kt)("p",null,"Subsequent builds will now contain the ",(0,i.kt)("strong",{parentName:"p"},"favicon.ico"),"."))}h.isMDXComponent=!0}}]);