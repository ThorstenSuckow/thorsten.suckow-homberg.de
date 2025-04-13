"use strict";(self.webpackChunkthorsten_suckow_homberg_de=self.webpackChunkthorsten_suckow_homberg_de||[]).push([[6544],{1430:(e,t,n)=>{n.d(t,{W:()=>c});var s=n(6540),i=n(797);const r=["zero","one","two","few","many","other"];function o(e){return r.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function a(){const{i18n:{currentLocale:e}}=(0,i.A)();return(0,s.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function c(){const e=a();return{selectMessage:(t,n)=>function(e,t,n){const s=e.split("|");if(1===s.length)return s[0];s.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const i=n.select(t),r=n.pluralForms.indexOf(i);return s[Math.min(r,s.length-1)]}(n,t,e)}}},4843:(e,t,n)=>{n.d(t,{R:()=>i,l:()=>r});n(6540);var s=n(4848);function i(e){let{name:t,pp:n}=e;const i=`/docs/bibliography#${t.toLowerCase()}`;return(0,s.jsxs)("a",{href:i,children:["[",(0,s.jsxs)("span",{className:"bibRef",children:["\ud83d\udcd6",t]}),n?`, ${n.includes("-")?"pp":"p"}. ${n}`:"","]"]})}function r(e){let{name:t,file:n}=e;Object.entries({sd:"softwaredesign",sa:"softwarearchitecture",cs:"computerscience"}).some((e=>{let[t,s]=e;if(n.startsWith(`${t}.`))return n=n.replace(`${t}.`,`${s}.`),!0}));const i=`/docs/toolbox/${n}`;return(0,s.jsx)("a",{href:i,className:"glosRef",children:t})}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var s=n(6540);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}},8719:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"articles/agp-the-payroll-system/index","title":"Introduction","description":"Agile Software Development Workshop","source":"@site/docs/articles/agp-the-payroll-system/index.mdx","sourceDirName":"articles/agp-the-payroll-system","slug":"/articles/agp-the-payroll-system/introduction","permalink":"/docs/articles/agp-the-payroll-system/introduction","draft":false,"unlisted":false,"editUrl":"https://github.com/thorstensuckow/thorsten.suckow-homberg.de/tree/main/docs/articles/agp-the-payroll-system/index.mdx","tags":[],"version":"current","lastUpdatedBy":"Thorsten Suckow-Homberg","lastUpdatedAt":1744575815000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Introduction","slug":"introduction","description":"Agile Software Development Workshop"},"sidebar":"docs","previous":{"title":"Accessor Automation with PHP Attributes","permalink":"/docs/articles/getter-setter-automation-with-php-attributes/"},"next":{"title":"Use Case 1 - Adding a new employee","permalink":"/docs/articles/agp-the-payroll-system/Use-Case-1-Adding-a-new-employee"}}');var i=n(4848),r=n(8453),o=n(4843),l=n(9563);const a={sidebar_position:1,title:"Introduction",slug:"introduction",description:"Agile Software Development Workshop"},c=void 0,d={},h=[{value:"A brief description of the Payroll System",id:"a-brief-description-of-the-payroll-system",level:2},{value:"Domain keywords",id:"domain-keywords",level:3},{value:"The rules",id:"the-rules",level:2},{value:"A note on testing",id:"a-note-on-testing",level:3},{value:"Source code",id:"source-code",level:2},{value:"Use Cases and Articles",id:"use-cases-and-articles",level:2}];function u(e){const t={a:"a",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["The Payroll System was introduced in Robert C. Martins Book ",(0,i.jsx)(t.strong,{children:"Agile Software Development"})," ",(0,i.jsx)(t.a,{href:"/docs/bibliography#asd",children:(0,i.jsx)(t.strong,{children:"[ASD]"})}),"  and describes a batch Payroll System."]}),"\n",(0,i.jsx)(t.p,{children:"In preparation of Section 3 and its subsequent chapters of the book, I decided to implement the Use Cases following agile principles and compare then later on with the solution provided by Robert."}),"\n",(0,i.jsx)(t.h2,{id:"a-brief-description-of-the-payroll-system",children:"A brief description of the Payroll System"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["The system consists of a database of the ",(0,i.jsx)(t.em,{children:"Employees"})," and their associated data."]}),"\n",(0,i.jsxs)(t.li,{children:["The system must pay each ",(0,i.jsx)(t.em,{children:"Employee"}),":","\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"The correct amount has to be paid."}),"\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.em,{children:"Employee"})," must be paid on time."]}),"\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.em,{children:"Employee"})," must be paid by the method they specify."]}),"\n",(0,i.jsxs)(t.li,{children:["Various deductions must be taken from the ",(0,i.jsx)(t.em,{children:"Employee"}),"'s pay."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["The following technical- and (non)-functional-criteria can be observed from this introduction: The database tells us that data needs to be persisted by the application.\nA ",(0,i.jsx)(t.strong,{children:"functional criteria"})," would be correct payment considering various deductions, and a ",(0,i.jsx)(t.strong,{children:"non-functional criteria"})," would be the fact that ",(0,i.jsx)(t.em,{children:"Employees"}),' must be paid on time: It involves functional criteria in the form of "the system must compute the date ',(0,i.jsx)(t.strong,{children:"when"})," an ",(0,i.jsx)(t.em,{children:"Employee"}),' gets paid", but it also includes non-functional criteria: The system must be stable and highly available to make sure transactions (i.e. money transfer) are executed on time.']}),"\n",(0,i.jsx)(t.h3,{id:"domain-keywords",children:"Domain keywords"}),"\n",(0,i.jsxs)(t.p,{children:["To get a better understanding of the domain we're dealing with, let's extract and guess a few domain keywords that we're probably using throughout the project and which should become terms of the ",(0,i.jsx)(o.l,{name:"Ubiquitous Language",file:"ddd.ubiquitouslanguage"})," we're establishing for the project:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Payroll, Employee, Payment, Salary, Deduction, Accounting"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Since we're implementing a Payroll System, the system will be part of an ",(0,i.jsx)(t.strong,{children:"Accounting Domain"}),". Let's see if we can get a grasp of a more specific ",(0,i.jsx)(o.l,{name:"Core Domain",file:"ddd.coredomain"})," during the course of the implementation."]}),"\n",(0,i.jsx)(t.h2,{id:"the-rules",children:"The rules"}),"\n",(0,i.jsx)(t.p,{children:"I stick to the following rules while implementing my solution with the knowledge I have from the brief introduction of the system"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"One Use Case equals one sprint."}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://twitter.com/home",children:"Pragmatism over Dogmatism."})}),"\n",(0,i.jsxs)(t.li,{children:["Implement the Use case given only the information the Use Case provide. A Use Case represents a Story that has to be implemented in ",(0,i.jsx)(t.em,{children:"this"})," sprint. There is no knowledge of the requirements given ",(0,i.jsx)(t.em,{children:"future"})," Use Cases."]}),"\n",(0,i.jsx)(t.li,{children:"Establish a healthy code base with a test-first approach."}),"\n",(0,i.jsxs)(t.li,{children:["Avoid ",(0,i.jsx)(o.l,{name:"Needless Complexity",file:"sd.symptomsofpoordesign"})," by strictly following Rules 2, 3 and 4."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"a-note-on-testing",children:"A note on testing"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["There is not a scripting system for the acceptance tests: The acceptance tests described with the Use Cases are written\nwith ",(0,i.jsx)(t.a,{href:"https://phpunit.de/",children:"PHPUnit"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"I consider the inputs defined with the acceptance tests as an important requirement for the user interface. The user\ninterface will be leveraged to the testing environment."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"source-code",children:"Source code"}),"\n",(0,i.jsxs)(t.p,{children:["The source code is maintained at ",(0,i.jsx)(t.a,{href:"https://github.com/thorstensuckow/payroll",children:"https://github.com/thorstensuckow/payroll"}),". Branches are named after the use case:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://github.com/ThorstenSuckow/payroll/usecase1/",children:'Branch "usecase1"'})," for ",(0,i.jsx)(t.a,{href:"/docs/articles/agp-the-payroll-system/Use-Case-1-Adding-a-new-employee",children:"Use Case 1"})]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:'The main branch will always reflect the source code from the most recent sprint. Once a Use Case is marked as "finished", code in this branch will not be changed anymore, and required code changes of the finished branch\'s code base will be implemented with the most recent sprint and. Tags and Versions will reflect this.'}),"\n",(0,i.jsx)(t.h2,{id:"use-cases-and-articles",children:"Use Cases and Articles"}),"\n",(0,i.jsx)(t.p,{children:"This is an ongoing article series."}),"\n","\n",(0,i.jsx)(l.A,{})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},9563:(e,t,n)=>{n.d(t,{A:()=>y});n(6540);var s=n(8215),i=n(3751),r=n(6289),o=n(1430),l=n(2887),a=n(539),c=n(9303);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var h=n(4848);function u(e){let{href:t,children:n}=e;return(0,h.jsx)(r.A,{href:t,className:(0,s.A)("card padding--lg",d.cardContainer),children:n})}function m(e){let{href:t,icon:n,title:i,description:r}=e;return(0,h.jsxs)(u,{href:t,children:[(0,h.jsxs)(c.A,{as:"h2",className:(0,s.A)("text--truncate",d.cardTitle),title:i,children:[n," ",i]}),r&&(0,h.jsx)("p",{className:(0,s.A)("text--truncate",d.cardDescription),title:r,children:r})]})}function p(e){let{item:t}=e;const n=(0,i.Nr)(t),s=function(){const{selectMessage:e}=(0,o.W)();return t=>e(t,(0,a.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,h.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??s(t.items.length)}):null}function f(e){let{item:t}=e;const n=(0,l.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,i.cC)(t.docId??void 0);return(0,h.jsx)(m,{href:t.href,icon:n,title:t.label,description:t.description??s?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,h.jsx)(f,{item:t});case"category":return(0,h.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,i.$S)();return(0,h.jsx)(y,{items:n.items,className:t})}function y(e){const{items:t,className:n}=e;if(!t)return(0,h.jsx)(x,{...e});const r=(0,i.d1)(t);return(0,h.jsx)("section",{className:(0,s.A)("row",n),children:r.map(((e,t)=>(0,h.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,h.jsx)(g,{item:e})},t)))})}}}]);