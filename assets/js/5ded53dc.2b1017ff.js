(self.webpackChunkthorsten_suckow_homberg_de=self.webpackChunkthorsten_suckow_homberg_de||[]).push([[1887],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),h=i,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return a?n.createElement(m,r(r({ref:t},c),{},{components:a})):n.createElement(m,r({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},2490:(e,t,a)=>{"use strict";a.d(t,{$o:()=>c,_b:()=>d,cx:()=>p,e2:()=>u,in:()=>m,t2:()=>h});var n=a(7294),i=a(5075),o=a(9943),r=a(814),s=a(4098),l=a.n(s);function p(e){let{width:t,children:a,title:o,figure:r,modeAware:s}=e;return n.createElement("div",{style:{width:t,textAlign:"center",margin:20}},n.createElement("div",{className:!1!==s?"umlImg":""},a),n.createElement("div",{style:{textAlign:"center"}},n.createElement("sup",null,n.createElement("b",null,i.Z.isString(r)?r:`Figure ${r??1}`)," ",n.createElement("span",{dangerouslySetInnerHTML:{__html:o}}))))}function c(e){let{id:t,source:a,title:i}=e;return n.createElement(p,{modeAware:!1,title:i,figure:`Source ${a}`},n.createElement(o.Z,{id:t}))}function u(e){let{url:t,figure:a,title:i}=e;return n.createElement(p,{modeAware:!1,figure:a,title:i},n.createElement("img",{alt:"{title}",src:t}))}function d(e){let{children:t,figure:a,title:i}=e;return n.createElement(p,{modeAware:!0,figure:a,title:i,children:t})}function h(e){let{when:t,where:a}=e;const[i,o]=a;return n.createElement("div",null,"This article was originally published in ",t," at ",n.createElement("a",{target:"_blank",href:o},i),". Some formatting might have get lost during the migration to this site: If you think you spotted an issue caused by malformed formatting, feel free to open a ",n.createElement("a",{href:"https://github.com/ThorstenSuckow/thorsten.suckow-homberg.de"},"Pull Request")," or ",n.createElement("a",{href:"mailto:thorsten@suckow-homberg.de"},"send me an Email"),".")}function m(e){let{url:t}=e;const[a,i]=n.useState("");return l()(t).then((e=>{e.text().then((e=>i(e)))})),n.createElement(r.Z,{language:"php"},a)}},7343:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=a(7462),i=(a(7294),a(3905)),o=a(2490);const r={title:"Downloadable Assets with GitHub Actions",description:"Pack and publish your releases with GitHub Actions"},s=void 0,l={unversionedId:"articles/downloadable-assets-with-github-actions/index",id:"articles/downloadable-assets-with-github-actions/index",title:"Downloadable Assets with GitHub Actions",description:"Pack and publish your releases with GitHub Actions",source:"@site/docs/articles/downloadable-assets-with-github-actions/index.mdx",sourceDirName:"articles/downloadable-assets-with-github-actions",slug:"/articles/downloadable-assets-with-github-actions/",permalink:"/docs/articles/downloadable-assets-with-github-actions/",draft:!1,editUrl:"https://github.com/thorstensuckow/thorsten.suckow-homberg.de/tree/main/docs/articles/downloadable-assets-with-github-actions/index.mdx",tags:[],version:"current",lastUpdatedBy:"Thorsten Suckow-Homberg",lastUpdatedAt:1701767787,formattedLastUpdatedAt:"Dec 5, 2023",frontMatter:{title:"Downloadable Assets with GitHub Actions",description:"Pack and publish your releases with GitHub Actions"},sidebar:"docs",previous:{title:"Using PHP enums as method calls",permalink:"/docs/articles/using-php-enums-as-method-calls/"},next:{title:"Creating Ext JS Applications with coon.js",permalink:"/docs/articles/creating-extjs-applications-with-coon-js/"}},p={},c=[{value:"Motivation",id:"motivation",level:2},{value:"Basic Build",id:"basic-build",level:2},{value:"Intermission: Providing Repository Secrets",id:"intermission-providing-repository-secrets",level:2},{value:"Onboarding the Build Software",id:"onboarding-the-build-software",level:2},{value:"Preparing the build",id:"preparing-the-build",level:3},{value:"Adding the build as an asset to the Release",id:"adding-the-build-as-an-asset-to-the-release",level:3},{value:"The Final Build Script",id:"the-final-build-script",level:2}],u={toc:c},d="wrapper";function h(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)(o.t2,{when:"May 2022",where:["medium.com","https://medium.com/@thorstensuckow/downloadable-assets-with-github-actions-e39b76371337"],mdxType:"MigrationNotice"})),(0,i.kt)("p",null,"GitHub Actions is (",(0,i.kt)("em",{parentName:"p"},"sic!"),") a great tool to automate the build process of your software projects. Providing a configurable and extensible CI/CD-platform, developers can test, build and deploy their projects by writing a few lines of YAML."),(0,i.kt)("p",null,"This article demonstrates how to add downloadable assets to a release when using GitHub Actions with a Sencha Ext JS project. The implementation of the actions is \u2014 of course \u2014 applicable with any other project."),(0,i.kt)("p",null,"The article assumes you are already familiar with the concept of CI/CD and that you have used GitHub Actions (or any other build tool) before. If not, the two following resources should get you started:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://martinfowler.com/delivery.html"},"Software Delivery Guide (martinfowler.com)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/actions"},"GitHub Actions Documentation"))),(0,i.kt)("h2",{id:"motivation"},"Motivation"),(0,i.kt)("p",null,"A regular build pipeline for creating a release with GitHub Actions looks like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/4096/1*lQpJIwGP9fC_ojUzLQgAJQ.jpeg",alt:null})),(0,i.kt)("p",null,"This is a very optimistic approach to a build pipeline as this assumes that each step succeeds. We will also not go into detail of each build step since various sub-tasks might be involved. However, when working with Sencha Ext JS projects (or any other project available via NPM), we can unfold the build pipeline a little bit more:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/4096/1*aSnJkpYzfInBGwTFvogWEg.jpeg",alt:null})),(0,i.kt)("p",null,"Of interest for us is the part where the downloads are created. actions/create-release@1 usually provides a tar- and a zip-file of the project-files as found in the repository, representing a git-tagged snapshot of the project."),(0,i.kt)("p",null,"However, we want to also include a build of the NPM project itself. If we only provide the downloads as created by actions/create-release@1, the user would still have to build the project on his own. Our ideal and final build pipeline would look like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/4096/1*1vx-hEy4z-KWugaTBKG9mQ.jpeg",alt:null})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/2000/1*_2Ty-TpS8Dj1HIiKiyi7rg.png",alt:"Our goal is to automate the deployment of our project hosted at GitHub \u2014 including the repository contents as well as a zipped build available for downloading."})),(0,i.kt)("h2",{id:"basic-build"},"Basic Build"),(0,i.kt)("p",null,"The basic script for creating a release with GitHub Actions looks like this:"),(0,i.kt)(o.$o,{id:"1e1e3e59ee8ac6d3ee8aef317d21b3f8",source:1,mdxType:"GitCode"}),(0,i.kt)("p",null,"This script is invoked whenever we git push origin v1.2.3 to our repository (\u201cv1.2.3\u201d as a mere example for a version tag given the ",(0,i.kt)("a",{parentName:"p",href:"https://semver.org/"},"semver-syntax"),"). workflow_dispatch allows us to run the script manually."),(0,i.kt)("p",null,"We then define the build-job, consisting of two steps: ",(0,i.kt)("strong",{parentName:"p"},"checkout")," and ",(0,i.kt)("strong",{parentName:"p"},"create release"),"."),(0,i.kt)("p",null,"Two pre-defined actions are used here: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/actions/checkout"},"actions/checkout@v2")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/actions/create-release"},"actions/create-release@v1"),". They should be self explanatory: The first one simply checks out the code of our repository, the second one creates the ",(0,i.kt)("em",{parentName:"p"},"tar")," and ",(0,i.kt)("em",{parentName:"p"},"zip")," for this checkout and adds them as downloads to the ",(0,i.kt)("strong",{parentName:"p"},"Releases"),"-page of the GitHub repository we\u2019re working with."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note: At this point, the ",(0,i.kt)("strong",{parentName:"em"},"checkout "),"action is not really necessary, since the ",(0,i.kt)("strong",{parentName:"em"},"create-release "),"action does not depend on it and will work just fine without it. We\u2019ll get back to it shortly.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/3030/1*MlCXqk5owtwU6eDjJaccjg.png",alt:"Releases are ordered by their most recent date. A Release\u2019s downloadable assets can be found here, by default providing a tar and a zip of the checked out repository-contents."})),(0,i.kt)("p",null,"We\u2019re missing a few more steps \u2014 the ",(0,i.kt)("strong",{parentName:"p"},"build")," and the ",(0,i.kt)("strong",{parentName:"p"},"upload")," of a deployable build so we can access it as a downloadable asset. Let\u2019s add these steps now."),(0,i.kt)("h2",{id:"intermission-providing-repository-secrets"},"Intermission: Providing Repository Secrets"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"The following explains how to provide a repository secret with GitHub for authentication with the Sencha NPM repository. Although the Sencha NPM is used here, the concept is the same for any other private NPM repository where authentication is required during the build process.")),(0,i.kt)("p",null,"Some NPM repositories are private and require a registered user when npm i one of its packages. This is usally done by using the cli command ",(0,i.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v8/commands/npm-adduser"},"npm adduser/login"),":"),(0,i.kt)("p",null,"$ npm login \u2014 -registry=","[registry_url]"),(0,i.kt)("p",null,"\u2026 which triggers a sign-in process that allows you to provide a username and a password to sign in at the specified registry. However, our build script does not run in an interactive environment (hence the buzzword \u201cautomation\u201d), and that is why we have to provide a ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"secret")),". A secret \u2014 in terms of our CI/CD environment \u2014 is simply a variable (a ",(0,i.kt)("em",{parentName:"p"},"template placeholder")," would also be a valid description for it) that gets replaced during the build with its actual value \u2014 hidden from everyone except for the build system itself. We do not want anyone to be able to read our passwords, do we?"),(0,i.kt)("p",null,"The Sencha NPM-repository is private and requires a registered user for downloading the Ext JS SDK. A registered user is either the owner of a commercial license of the SDK, or a user registered for a 30-days trial version of the framework (more info ",(0,i.kt)("a",{parentName:"p",href:"https://www.sencha.com/products/extjs/evaluate/"},"here"),"). To actually resolve the dependencies for our project during npm ci, we need to provide our Sencha NPM credentials during the automated build process. It must be part of the build script itself, but how do we keep it secret?"),(0,i.kt)("p",null,"It all boils down to the following two commands that have to be executed before npm ciis invoked:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"   $ npm config set @sencha:registry [https://npm.sencha.com](https://npm.sencha.com)\n   $ npm config set //npm.sencha.com/:_authToken=${{secrets.TOKEN}}\n")),(0,i.kt)("p",null,"\u2026 whereas ${{secrets.TOKEN}} is the authentication token that can be used for authenticating a registered user with the Sencha NPM repository. The variable makes sure that no login credentials (better: the token) is stored as cleartext in the build script. We now have to tell the GitHub Actions where it can find the secret."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Active and valid tokens can be found in the users ",(0,i.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v8/configuring-npm/npmrc"},".npmrc")," on the user\u2019s machine. The first step would be to locate the ",(0,i.kt)("em",{parentName:"p"},".npmrc"),"-file (on Windows, it\u2019s usually store under %HOMEPATH%) and find the authentication token used with the Sencha NPM repository. Copy it to the clipboard.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"We now return to our respository over at GitHub.com and navigate to the settings of our repository (that would be the repository for which we\u2019re writing the action)."))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/2000/1*R7gKeTZea0QjtpB_TP6mfg.png",alt:"**Settings** can be found at the left side of the tab bar of a GitHub.com-repository."})),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Once we have clicked the Settings tab and the page content\u2019s have been loaded, we\u2019re presented with a menu on the left side of the screen. Find the entry ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Secrets"))," from the menu, and activate it so its sub menu gets shown. Then click its entry ",(0,i.kt)("strong",{parentName:"li"},"Actions"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/2000/1*6u37VDIVDHeuSOqEf2_grA.png",alt:"Part of the menu when visiting the **Settings** of a GitHub repository. We need to activate **Secrets > Actions**."})),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"The right side of the screen will now load any existing secret for updating or removing its value. We choose to add a new secret so we can store the authentication token for the private NPM repository.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/2000/1*mhE0tgpym--6r82ncLRBZw.png",alt:"No secrets for this repository so far. Click **New repository secret** for adding the authentication token for the private NPM repository."})),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"In out build script, we want to refer to the authentication token with the variable ",(0,i.kt)("inlineCode",{parentName:"li"},"${{secrets.TOKEN}}")," ( since TOKEN is very generic, you\u2019re free to choose any other name).")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/2000/1*T067fFJW8DHjRznd3l8hqQ.png",alt:"\u2026 finally, we can add the secret by providing a name \u2014 and the token itself (screenshot shows a randomized token)"})),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Add secret"))),(0,i.kt)("p",null,"Et voila, ",(0,i.kt)("strong",{parentName:"p"},"Settings > Secrets > Actions")," will now list your recently added secret token. You can now use it for this repository\u2019s build scripts."),(0,i.kt)("h2",{id:"onboarding-the-build-software"},"Onboarding the Build Software"),(0,i.kt)("p",null,"Finally, let\u2019s add the ",(0,i.kt)("strong",{parentName:"p"},"checkout")," build step to good use."),(0,i.kt)("p",null,"If a new developer joins an ongoing software project, he/she has to set up his/her local development environment, clone the repository and build the project. That\u2019s exactly what\u2019s happening now: A new dev joins the tem, if only briefly and in the form of an automated process: Let\u2019s onboard the GitHub Action!"),(0,i.kt)("h3",{id:"preparing-the-build"},"Preparing the build"),(0,i.kt)("p",null,"We require several more actions:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Install Node.js")," \u2014 in order to use ",(0,i.kt)("em",{parentName:"p"},"npm"),", our build environment needs of course Node.js. Luckily, there is already ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/actions/setup-node"},"actions/setup-node@v2")," available, so we simply have to tell our script to use it. With the help of ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs"},"matrix strategies")," we\u2019re also able to run the build with different versions of Node.js to guarantee (backwards) compability \u2014v16 will do for now")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Provide an authentication token")," for the private NPM repository \u2014 as explained in the previous section of this article, ",(0,i.kt)("a",{parentName:"p",href:"https://npm.sencha.com"},"https://npm.sencha.com")," requires a valid user. With the help of ",(0,i.kt)("strong",{parentName:"p"},"Repository Secrets"),", we\u2019re able to provide this token for the automated build process now")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Install dependencies")," with npm ci \u2014 this will make sure all libraries required for our project are installed. Once this process finishes, we can run the ",(0,i.kt)("em",{parentName:"p"},"actual build script "),"defined for our project")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Create a deployable build")," with npm run build \u2014 this is the build script locally available ",(0,i.kt)("em",{parentName:"p"},"for our project"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Create a zip file "),"\u2014 pack the files created with npm run build and create a zip-file from it. This will be the asset that gets added to the release in the next step"))),(0,i.kt)("p",null,"Here are the additional steps we have just described. The indentation is off for a few lines to remain readability. Also note the path used at the end of this build step: We assume the project build to be bundled in the directory ./build/myproject \u2014 of course, you\u2019d have to adjust the path here to make sure the correct files end up in release.zip \u2014 which is saved relative to the build-directory at the same location where the script was invoked from."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"    steps:\n      - uses: actions/checkout@v2\n      - name: npm (Node.js ${{ matrix.node-version }})\n        uses: actions/setup-node@v2\n        with:\n          node-version: ${{ matrix.node-version }}\n          cache: 'npm'\n       - name: npm ci\n         run: |\n           npm config set @sencha:registry [https://npm.sencha.com/](https://npm.sencha.com/)\n         npm config set //npm.sencha.com/:_authToken=${{secrets.TOKEN}}\n           npm ci --save-dev\n       - name: Build Ext JS & zip build\n         run: |\n          npm run build\n          cd ./build/myproject && zip -r ../../release.zip ./*\n")),(0,i.kt)("h3",{id:"adding-the-build-as-an-asset-to-the-release"},"Adding the build as an asset to the Release"),(0,i.kt)("p",null,"The build pipeline is almost ready to go \u2014 one last step is missing: The action to upload the previously created zipped build along with the release we\u2019re just creating."),(0,i.kt)("p",null,"We have previously seen how to use actions/create-release- a predefined action from GitHub. We have also defined an id for this: id:create_release. This can now be used for querying properties published by the build step."),(0,i.kt)("p",null,"Again, GitHub provides the necessary action so we do not have to write it ourselves: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/actions/upload-release-asset"},"actions/upload-release-asset")," is now used with a few additional configurations:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"upload_url \u2014 the url to upload the asset to. This is the location of the release we have created with our create-release-step, and can be identified by ${{steps.create_release.outputs.upload_url}}")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"asset_path \u2014 the path to the asset we want to upload")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"asset_name \u2014 the name used for the asset. It\u2019s a good practice to refer to the tag used with this release in its name: myproject.build.${{github.ref}}.zip")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"asset_content_type \u2014 the content-type of the asset. In our case, it will be application/zip"))),(0,i.kt)("p",null,"Here\u2019s the build step in detail:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"    - name: Upload assets\n      uses: actions/upload-release-asset@v1\n      env:\n        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n      with:\n        upload_url: ${{ steps.create_release.outputs.upload_url }}\n        asset_path: ./release.zip\n        asset_name: myproject.build.${{ github.ref }}.zip\n        asset_content_type: application/zip\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note: We\u2019re using the GITHUB_TOKENin this build step to make sure our read/write-operations succeed. The GITHUB_TOKEN is also used in the create-release build step.This token is an authentication token to make sure the build script and its actions may read from/write to a given repository. To learn more about this environment-secret, refer to its ",(0,i.kt)("a",{parentName:"em",href:"https://docs.github.com/en/actions/security-guides/automatic-token-authentication"},"documentation"),".")),(0,i.kt)("h2",{id:"the-final-build-script"},"The Final Build Script"),(0,i.kt)("p",null,"This is the final build script. If you want to use it in your project, make sure to adjust paths and names, as this script uses an environment defined within the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/conjoon"},"conjoon"),"-organization of GitHub."),(0,i.kt)(o.$o,{id:"f289a4b483b97706808fd72588385952",source:2,mdxType:"GitCode"}))}h.isMDXComponent=!0},2480:()=>{}}]);