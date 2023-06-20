"use strict";(self.webpackChunkthorsten_suckow_homberg_de=self.webpackChunkthorsten_suckow_homberg_de||[]).push([[7547],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=s,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,i=new Array(a);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:s,i[1]=o;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4461:(e,t,n)=>{n.d(t,{x:()=>s});var r=n(7294);function s(){return r.createElement("div",{style:{width:"100%",textAlign:"right"}},r.createElement("a",{style:{textDecoration:"underline"},onClick:()=>history.go(-1),href:"#"},"Back"))}},6739:(e,t,n)=>{n.d(t,{A:()=>a,E:()=>s});var r=n(7294);function s(e){let{name:t,pp:n}=e;const s=`/docs/bibliography#${t.toLowerCase()}`;return r.createElement("a",{href:s},"[",r.createElement("span",{className:"bibRef"},"\ud83d\udcd6",t.toUpperCase()),n?`, ${n.includes("-")?"pp":"p"}. ${n}`:"","]")}function a(e){let{name:t,file:n}=e;Object.entries({sd:"softwaredesign",sa:"softwarearchitecture",cs:"computerscience"}).some((e=>{let[t,r]=e;if(n.startsWith(`${t}.`))return n=n.replace(`${t}.`,`${r}.`),!0}));const s=`/docs/toolbox/${n}`;return r.createElement("a",{href:s,className:"glosRef"},t)}},8106:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),s=(n(7294),n(3905)),a=n(6739);n(4461);const i={title:"Aliasing"},o="Aliasing (Computer Science)",l={unversionedId:"toolbox/computerscience.aliasing",id:"toolbox/computerscience.aliasing",title:"Aliasing",description:"Aliasing in Object-Oriented Programming is a synonym for two (or more) variables referencing the same instance.",source:"@site/docs/toolbox/computerscience.aliasing.mdx",sourceDirName:"toolbox",slug:"/toolbox/computerscience.aliasing",permalink:"/docs/toolbox/computerscience.aliasing",draft:!1,editUrl:"https://github.com/thorstensuckow/thorsten.suckow-homberg.de/tree/main/docs/toolbox/computerscience.aliasing.mdx",tags:[],version:"current",lastUpdatedBy:"Thorsten Suckow-Homberg",lastUpdatedAt:1687281638,formattedLastUpdatedAt:"Jun 20, 2023",frontMatter:{title:"Aliasing"},sidebar:"toolbox",previous:{title:"Aggregation",permalink:"/docs/toolbox/uml.aggregation"},next:{title:"Anemic Domain Model",permalink:"/docs/toolbox/ddd.anemicdomainmodel"}},c={},p=[{value:"Aliasing Bug",id:"aliasing-bug",level:2},{value:"Example",id:"example",level:3}],d={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,s.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"aliasing-computer-science"},"Aliasing (Computer Science)"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Aliasing")," in Object-Oriented Programming is a synonym for two (or more) variables referencing the same instance."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="$ref and $alias referencing the same instance"',title:'"$ref',and:!0,$alias:!0,referencing:!0,the:!0,same:!0,'instance"':!0},"$ref = new \\stdClass();\n$alias = $ref;\n")),(0,s.kt)("h2",{id:"aliasing-bug"},"Aliasing Bug"),(0,s.kt)("p",null,"An ",(0,s.kt)("strong",{parentName:"p"},"Aliasing Bug")," denotes an issue when two (or more) objects reference an object, and the intentional change of the\nstate of this instance causes unexpected behavior with one of the objects referencing this instance."),(0,s.kt)("p",null,"This often happens with ",(0,s.kt)("strong",{parentName:"p"},"mutable"),"  ",(0,s.kt)(a.A,{name:"Value Objects",file:"sd.valueobject",mdxType:"GlosRef"}),", where instances are shared across a number of objects, each having (indirect) access to the fields of the ",(0,s.kt)("strong",{parentName:"p"},"Value Object")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("em",{parentName:"p"},'"A class of subtle programming errors that can arise in code that does dynamic allocation, esp. via malloc(3) or equivalent. If several pointers address (are aliases for) a given hunk of storage, it may happen that the storage is freed or reallocated (and thus moved) through one alias and then referenced through another, which may lead to subtle (and possibly intermittent) lossage depending on the state and the allocation history of the malloc arena."')," ",(0,s.kt)("a",{parentName:"p",href:"http://www.catb.org/jargon/html/A/aliasing-bug.html"},"http://www.catb.org/jargon/html/A/aliasing-bug.html"))),(0,s.kt)("h3",{id:"example"},"Example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="privateAddress gets changed unintentionally"',title:'"privateAddress',gets:!0,changed:!0,'unintentionally"':!0},'class Employee\n{\n    public Address privateAddress;\n    public Address shippingAddress;\n}\n\nclass Address\n{\n    public String street;\n    public String city;\n\n    public Address(String street, String city)\n    {\n        this.street = street;\n        this.city = city;\n    }\n\n    public String toString()\n    {\n        return this.street + " in " + this.city;\n    }\n}\n\npublic static void main(String []args)\n{\n\n    Employee employee = new Employee();\n\n    Address address = new Address("East 74th Street", "New York");\n\n    // privateAddress and shippingAddress are aliasing "address"\n    employee.privateAddress = address;\n    employee.shippingAddress = address;\n\n    // the street of the shippingAddress is changed to "36 Fuller Place"\n    employee.shippingAddress.street = "36 Fuller Place";\n\n    System.out.println(employee.shippingAddress);\n    // since privateAddress is an alias for address, which was just changed (through accessing it with the alias\n    // shippingAddress), privateAddress is now also updated.\n    System.out.println(employee.privateAddress);\n}\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Aliasing Bugs")," can be prevented by using ",(0,s.kt)("strong",{parentName:"p"},"immutable")," ",(0,s.kt)(a.A,{name:"Value Objects",file:"sd.valueobject",mdxType:"GlosRef"}),", where changing the state of such an object results in a new object replacing the previous one."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Address is immutable "',title:'"Address',is:!0,immutable:!0,'"':!0},'\nclass Address\n{\n    public String street;\n    public String city;\n\n    public Address(String street, String city)\n    {\n        this.street = street;\n        this.city = city;\n    }\n\n    public Address setStreet(String street)\n    {\n        return new Address(street, this.city);\n    }\n\n    public String toString()\n    {\n        return this.street + " in " + this.city;\n    }\n}\n\n public static void main(String []args){\n\n    Employee employee = new Employee();\n\n    Address address = new Address("East 74th Street", "New York");\n\n    employee.privateAddress = address;\n    employee.shippingAddress = address;\n\n    // changing the address does not change the state of "address", instead it\n    // returns a new object with the updated state\n    employee.shippingAddress = address.setStreet("36 Fuller Place");\n\n    System.out.println(employee.shippingAddress);\n    System.out.println(employee.privateAddress);\n }\n')),(0,s.kt)("hr",null),(0,s.kt)("p",null,"See also"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://martinfowler.com/bliki/AliasingBug.html"},"Martin Fowler, Aliasing Bug"))))}m.isMDXComponent=!0}}]);