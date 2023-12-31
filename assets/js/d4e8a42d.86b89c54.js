"use strict";(self.webpackChunkthorsten_suckow_homberg_de=self.webpackChunkthorsten_suckow_homberg_de||[]).push([[3131],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,f=c["".concat(l,".").concat(u)]||c[u]||d[u]||o;return n?a.createElement(f,i(i({ref:t},m),{},{components:n})):a.createElement(f,i({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6739:(e,t,n)=>{n.d(t,{A:()=>o,E:()=>r});var a=n(7294);function r(e){let{name:t,pp:n}=e;const r=`/docs/bibliography#${t.toLowerCase()}`;return a.createElement("a",{href:r},"[",a.createElement("span",{className:"bibRef"},"\ud83d\udcd6",t),n?`, ${n.includes("-")?"pp":"p"}. ${n}`:"","]")}function o(e){let{name:t,file:n}=e;Object.entries({sd:"softwaredesign",sa:"softwarearchitecture",cs:"computerscience"}).some((e=>{let[t,a]=e;if(n.startsWith(`${t}.`))return n=n.replace(`${t}.`,`${a}.`),!0}));const r=`/docs/toolbox/${n}`;return a.createElement("a",{href:r,className:"glosRef"},t)}},1230:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var a=n(7462),r=(n(7294),n(3905)),o=n(6739);const i={title:"Separate Query From Modifier"},s="Separate Query From Modifier (Refactoring)",l={unversionedId:"toolbox/refactoring.separatequeryfrommodifier",id:"toolbox/refactoring.separatequeryfrommodifier",title:"Separate Query From Modifier",description:"Separate Query From Modifier is a refactoring that helps with creating side effect free functions.",source:"@site/docs/toolbox/refactoring.separatequeryfrommodifier.mdx",sourceDirName:"toolbox",slug:"/toolbox/refactoring.separatequeryfrommodifier",permalink:"/docs/toolbox/refactoring.separatequeryfrommodifier",draft:!1,editUrl:"https://github.com/thorstensuckow/thorsten.suckow-homberg.de/tree/main/docs/toolbox/refactoring.separatequeryfrommodifier.mdx",tags:[],version:"current",lastUpdatedBy:"Thorsten Suckow-Homberg",lastUpdatedAt:1704027986,formattedLastUpdatedAt:"Dec 31, 2023",frontMatter:{title:"Separate Query From Modifier"},sidebar:"toolbox",previous:{title:"Repository",permalink:"/docs/toolbox/softwaredesign.repository"},next:{title:"Separation of Concerns",permalink:"/docs/toolbox/softwaredesign.separationofconcerns"}},p={},m=[],c={toc:m},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"separate-query-from-modifier-refactoring"},"Separate Query From Modifier (Refactoring)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Separate Query From Modifier")," is a refactoring that helps with creating side effect free functions."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Separate Query From Modifier"),"-refactoring is used to separate a modifier (i.e. some ",(0,r.kt)("em",{parentName:"p"},"setter"),")\nfrom a query (i.e. some ",(0,r.kt)("em",{parentName:"p"},"getter"),"). Any ",(0,r.kt)("em",{parentName:"p"},"getter")," that also calls a ",(0,r.kt)("em",{parentName:"p"},"setter")," is usually a good candidate for the violation of the ",(0,r.kt)("strong",{parentName:"p"},"SRP"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},'"A good rule to follow is to say that any method that returns a value should not have observable side effects"'),". ",(0,r.kt)(o.E,{name:"ref",pp:"279",mdxType:"BibRef"}))),(0,r.kt)("admonition",{title:"Be wary of the context",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you're using a coarse-grained ",(0,r.kt)(o.A,{name:"Facade",file:"sd.facade",mdxType:"GlosRef"})," that provides access to fine-grained operations,\nthis Facade is not necessarily side effect free. However, methods with the clear intent to\nreturn ",(0,r.kt)("strong",{parentName:"p"},"a value"),' ("intent" as in: documented in its method name ',(0,r.kt)(o.E,{name:"CC",pp:"39",mdxType:"BibRef"}),") should be side effect free.")),(0,r.kt)("p",null,"In the following example, ",(0,r.kt)("strong",{parentName:"p"},"Accounting")," queries an ",(0,r.kt)("strong",{parentName:"p"},"Employee"),"'s salary. It also checks for an outstanding bonus\nthe employee should receive and updates the salary with it. The salary is then returned."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"\n    class Accounting\n    {\n        public function salary(int $empId): Money\n        {\n            $bonus = $this->getOutstandingBonus($empdId)\n            if ($bonus !== null) {\n                $this->updateSalaray($empId, $bonus);\n            }\n\n            $salary = $this->querySalary($empId);\n\n            return $salary;\n        }\n    }\n")),(0,r.kt)("p",null,"The method modifies the value before it is returned (or does it?):\n",(0,r.kt)("inlineCode",{parentName:"p"},"updateSalary()")," is called if ",(0,r.kt)("inlineCode",{parentName:"p"},"getOutstandingBonus()")," indicates that if there is a need to adjust the ",(0,r.kt)("inlineCode",{parentName:"p"},"salary"),"."),(0,r.kt)("p",null,"The implications of ",(0,r.kt)("inlineCode",{parentName:"p"},"updateSalary()")," are unclear to ",(0,r.kt)("inlineCode",{parentName:"p"},"salary()"),", right so for the client who is not aware that a call to\n",(0,r.kt)("inlineCode",{parentName:"p"},"salary()")," also updates the existing ",(0,r.kt)("inlineCode",{parentName:"p"},"salary")," with an outstanding bonus."),(0,r.kt)("p",null,'What if the client expects the method to be more "pure"?'),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},'"More Pure" ',(0,r.kt)("span",{parentName:"mdxAdmonitionTitle",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"!"),(0,r.kt)("mo",{parentName:"mrow"},"=")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"!=")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,r.kt)("span",{parentName:"span",className:"mclose"},"!"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"="))))),' "Pure Function"'),(0,r.kt)("p",{parentName:"admonition"},'The client may expect the method to be "pure" in a colloquial sense: For as long as the ',(0,r.kt)("strong",{parentName:"p"},"Employee")," does not get a raise, this means for every ",(0,r.kt)("inlineCode",{parentName:"p"},"$empId"),"\nalways the same ",(0,r.kt)("inlineCode",{parentName:"p"},"salary")," is returned.\nOf course, the method will never conform to the definition of a ",(0,r.kt)(o.A,{name:"Pure Function",file:"computerscience.purefunction",mdxType:"GlosRef"}),"\ngiven its context.")),(0,r.kt)("p",null,"The method is a blackbox for the client, and given its intent documented with the method name (returning the salary)\none would not expect side effects."),(0,r.kt)("p",null,"It would be better to refactor this method so that ",(0,r.kt)("inlineCode",{parentName:"p"},"salary()")," simply does what any client would expect it to do: return\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"salary")," for the ",(0,r.kt)("inlineCode",{parentName:"p"},"$empId"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"\n    class Accounting\n    {\n        public function salary(int $empId): Money\n        {\n            $salary = $this->querySalary($empId);\n            return $salary;\n        }\n    }\n")),(0,r.kt)("p",null,"If the client needs to adjust outstanding bonuses, another method can be used for adding the bonus to the ",(0,r.kt)("inlineCode",{parentName:"p"},"salary"),". By\nimplementing a method with a clear intent, multiple fine-grained actions are processed from a coarse-grained interface:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"    class Accounting\n    {\n        public function paySalaryAndUpdateBonus(int $empId): Money\n        {\n            $salary = $this->getSalary($empId);\n            $bonus = $this->getOutstandingBonus($empdId)\n            if ($bonus !== null) {\n                $this->removeBonus($empId, $bonus);\n                $salary = $salary->add($bonus);\n            }\n\n            $this->updatePayments($empdId, $salary);\n\n            return $salary;\n        }\n    }\n")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"see also"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(o.A,{name:"Facade (Software Design)",file:"sd.facade",mdxType:"GlosRef"}))))}u.isMDXComponent=!0}}]);