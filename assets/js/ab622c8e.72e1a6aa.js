"use strict";(self.webpackChunkthorsten_suckow_homberg_de=self.webpackChunkthorsten_suckow_homberg_de||[]).push([[4381],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(a),u=r,f=c["".concat(l,".").concat(u)]||c[u]||m[u]||o;return a?n.createElement(f,i(i({ref:t},d),{},{components:a})):n.createElement(f,i({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4461:(e,t,a)=>{a.d(t,{x:()=>r});var n=a(7294);function r(){return n.createElement("div",{style:{width:"100%",textAlign:"right"}},n.createElement("a",{style:{textDecoration:"underline"},onClick:()=>history.go(-1),href:"#"},"Back"))}},6739:(e,t,a)=>{a.d(t,{A:()=>o,E:()=>r});var n=a(7294);function r(e){let{name:t,pp:a}=e;const r=`/docs/bibliography#${t.toLowerCase()}`;return n.createElement("a",{href:r},"[",n.createElement("span",{className:"bibRef"},"\ud83d\udcd6",t),a?`, ${a.includes("-")?"pp":"p"}. ${a}`:"","]")}function o(e){let{name:t,file:a}=e;Object.entries({sd:"softwaredesign",sa:"softwarearchitecture",cs:"computerscience"}).some((e=>{let[t,n]=e;if(a.startsWith(`${t}.`))return a=a.replace(`${t}.`,`${n}.`),!0}));const r=`/docs/toolbox/${a}`;return n.createElement("a",{href:r,className:"glosRef"},t)}},5459:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var n=a(7462),r=(a(7294),a(3905)),o=a(6739),i=a(4461);const s={title:"Table Data Gateway"},l="Table Data Gateway (Software Design)",p={unversionedId:"toolbox/softwaredesign.tabledatagateway",id:"toolbox/softwaredesign.tabledatagateway",title:"Table Data Gateway",description:"A Table Data Gateway provides an interface to the table of a database.",source:"@site/docs/toolbox/softwaredesign.tabledatagateway.mdx",sourceDirName:"toolbox",slug:"/toolbox/softwaredesign.tabledatagateway",permalink:"/docs/toolbox/softwaredesign.tabledatagateway",draft:!1,editUrl:"https://github.com/thorstensuckow/thorsten.suckow-homberg.de/tree/main/docs/toolbox/softwaredesign.tabledatagateway.mdx",tags:[],version:"current",lastUpdatedBy:"ThorstenSuckow",lastUpdatedAt:1704119805,formattedLastUpdatedAt:"Jan 1, 2024",frontMatter:{title:"Table Data Gateway"},sidebar:"toolbox",previous:{title:"Symptoms of Poor Design",permalink:"/docs/toolbox/softwaredesign.symptomsofpoordesign"},next:{title:"Ubiquitous Language",permalink:"/docs/toolbox/ddd.ubiquitouslanguage"}},d={},c=[{value:"Example",id:"example",level:2}],m={toc:c},u="wrapper";function f(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"table-data-gateway-software-design"},"Table Data Gateway (Software Design)"),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"Table Data Gateway")," provides an interface to the table of a database."),(0,r.kt)("p",null,"The interface maps semantics of native SQL-commands to its interface-methods, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"UPDATE"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT"),"."),(0,r.kt)("p",null,"Additional methods might be added to the Gateway, e.g. for querying data based on more complex filter criteria."),(0,r.kt)("p",null,"For reconstituting more complex ",(0,r.kt)(o.A,{name:"Domain Models",file:"ddd.domainmodel",mdxType:"GlosRef"}),", such as ",(0,r.kt)(o.A,{name:"Aggregates",file:"ddd.aggregate",mdxType:"GlosRef"}),", ",(0,r.kt)("strong",{parentName:"p"},"Data Mappers")," can be used."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"The following class provides an interface for a ",(0,r.kt)("strong",{parentName:"p"},"Table Data Gateway")," for an ",(0,r.kt)("inlineCode",{parentName:"p"},"Employee"),"-table:"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"(SQL-)code intentionally simplified for demonstration purposes.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="EmployeeTableDataGateway.php"',title:'"EmployeeTableDataGateway.php"'},"\nclass EmployeeTableDataGateway {\n\n\n    public function insert(string $empId, string $name, string $address): string\n    {\n        $sql = \"INSERT INTO employee (emp_id, name, address) VALUES ('$empId', '$name', '$address')\";\n\n        return $this->dbConn->execute($sql);\n    }\n\n\n    public function update(string $empId, string $name, string $address): bool\n    {\n        $sql = \"UPDATE employee SET emp_id='$empId', name='$name', address='$address'\";\n\n        return $this->dbConn->execute($sql);\n    }\n\n\n    public function find(string $empId): array\n    {\n        $sql = \"SELECT FROM employee WHERE emp_id='$empId'\";\n\n        return $this->executeSelect($sql);\n    }\n\n\n    public function findByCompany(string $companyId): array\n    {\n        $sql = \"SELECT FROM employee WHERE company_id='$companyId'\";\n\n        return $this->executeSelect($sql);\n    }\n}\n\n")),(0,r.kt)(i.x,{mdxType:"BackButton"}))}f.isMDXComponent=!0}}]);