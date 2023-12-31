"use strict";(self.webpackChunkthorsten_suckow_homberg_de=self.webpackChunkthorsten_suckow_homberg_de||[]).push([[7924],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),i=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=i(a),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return a?n.createElement(f,l(l({ref:t},p),{},{components:a})):n.createElement(f,l({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[m]="string"==typeof e?e:r,l[1]=c;for(var i=2;i<o;i++)l[i]=a[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4461:(e,t,a)=>{a.d(t,{x:()=>r});var n=a(7294);function r(){return n.createElement("div",{style:{width:"100%",textAlign:"right"}},n.createElement("a",{style:{textDecoration:"underline"},onClick:()=>history.go(-1),href:"#"},"Back"))}},6739:(e,t,a)=>{a.d(t,{A:()=>o,E:()=>r});var n=a(7294);function r(e){let{name:t,pp:a}=e;const r=`/docs/bibliography#${t.toLowerCase()}`;return n.createElement("a",{href:r},"[",n.createElement("span",{className:"bibRef"},"\ud83d\udcd6",t),a?`, ${a.includes("-")?"pp":"p"}. ${a}`:"","]")}function o(e){let{name:t,file:a}=e;Object.entries({sd:"softwaredesign",sa:"softwarearchitecture",cs:"computerscience"}).some((e=>{let[t,n]=e;if(a.startsWith(`${t}.`))return a=a.replace(`${t}.`,`${n}.`),!0}));const r=`/docs/toolbox/${a}`;return n.createElement("a",{href:r,className:"glosRef"},t)}},3981:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905)),o=(a(4461),a(6739));const l={title:"Constructors"},c="Constructors (Java)",s={unversionedId:"toolbox/Java/java.constructors",id:"toolbox/Java/java.constructors",title:"Constructors",description:"Some authors treat the term default constructor equal to parameterless constructor.",source:"@site/docs/toolbox/Java/java.constructors.mdx",sourceDirName:"toolbox/Java",slug:"/toolbox/Java/java.constructors",permalink:"/docs/toolbox/Java/java.constructors",draft:!1,editUrl:"https://github.com/thorstensuckow/thorsten.suckow-homberg.de/tree/main/docs/toolbox/Java/java.constructors.mdx",tags:[],version:"current",lastUpdatedBy:"Thorsten Suckow-Homberg",lastUpdatedAt:1704027986,formattedLastUpdatedAt:"Dec 31, 2023",frontMatter:{title:"Constructors"},sidebar:"toolbox",previous:{title:"Java",permalink:"/docs/toolbox/Java/"},next:{title:"Actor",permalink:"/docs/toolbox/uml.actor"}},i={},p=[{value:"Default Constructor",id:"default-constructor",level:2},{value:"Inheritance",id:"inheritance",level:3},{value:"Example",id:"example",level:3},{value:"Constructor Inheritance",id:"constructor-inheritance",level:2}],m={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"constructors-java"},"Constructors (Java)"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Some authors treat the term ",(0,r.kt)("inlineCode",{parentName:"p"},"default constructor")," equal to ",(0,r.kt)("inlineCode",{parentName:"p"},"parameterless constructor"),"."),(0,r.kt)("p",{parentName:"admonition"},"In the following text, I understand the ",(0,r.kt)("strong",{parentName:"p"},"default constructor")," as described by the ",(0,r.kt)("strong",{parentName:"p"},"Java SE 21")," language specification",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"\nas the ",(0,r.kt)("strong",{parentName:"p"},"implicit default constructor")," provided by the compiler if no explicit constructor was declared:"),(0,r.kt)("blockquote",{parentName:"admonition"},(0,r.kt)("p",{parentName:"blockquote"},"In the absence of explicit constructors, however, the compiler provides a public, parameterless default constructor. To a user, this constructor is\nindistinguishable from any other. ",(0,r.kt)(o.E,{name:"Blo18",pp:"19",mdxType:"BibRef"}))),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("em",{parentName:"p"},"Ullenboom")," refers to an ",(0,r.kt)("em",{parentName:"p"},"implicit")," and ",(0,r.kt)("em",{parentName:"p"},"explicit")," ",(0,r.kt)("strong",{parentName:"p"},"default constructor"),", whereas the ",(0,r.kt)("em",{parentName:"p"},"implicit")," is provided by the\ncompiler, and the ",(0,r.kt)("em",{parentName:"p"},"explicit")," is a parameterless constructor provided by the developer (see ",(0,r.kt)(o.E,{name:"Ull18",pp:"515-17",mdxType:"BibRef"}),").\n",(0,r.kt)("em",{parentName:"p"},"Ullenboom")," notes that is is important to understand the author's intend when one simply speaks of ",(0,r.kt)("strong",{parentName:"p"},"default constructor"),"\nwithout differentiating between ",(0,r.kt)("em",{parentName:"p"},"implicit")," and ",(0,r.kt)("em",{parentName:"p"},"explicit"),".")),(0,r.kt)("h2",{id:"default-constructor"},"Default Constructor"),(0,r.kt)("p",null,"If a Java class contains no constructor, a ",(0,r.kt)("strong",{parentName:"p"},"default constructor")," is implicitly declared",(0,r.kt)("sup",{parentName:"p",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"default constructor")," ",(0,r.kt)(o.A,{name:"signature",file:"computerscience.methodsignature",mdxType:"GlosRef"}),"'s formal ",(0,r.kt)("strong",{parentName:"p"},"parameter list")," is empty."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"class A {\n\n    // implicitly declared default constructor\n    // public A() {\n    // }\n\n}\n\nA a = new A(); // calls the implicitly declared default constructor\n")),(0,r.kt)("p",null,"If an ",(0,r.kt)("em",{parentName:"p"},"explicitly")," declared constructor is declared, no ",(0,r.kt)("strong",{parentName:"p"},"default constructor")," will be made available by the compiler."),(0,r.kt)("p",null,"In the following example, ",(0,r.kt)("inlineCode",{parentName:"p"},"new A()")," yields a compiler error, since no parameterless constructor is explicitly or implicitly\ndeclared for ",(0,r.kt)("inlineCode",{parentName:"p"},"A"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"class A {\n    int a;\n\n    // explicitly declared default constructor\n    // will prevent the implicitly declared default constructor\n    public A(int value) {\n        a = value;\n    }\n\n}\n\nA a1 = new A(i); // calls the explicitly declared default constructor\nA a2 = new A(); // yields a compiler error\n")),(0,r.kt)("h3",{id:"inheritance"},"Inheritance"),(0,r.kt)("p",null,"If a constructor does not have an explicit call to a parent's constructor, it will implicitly call ",(0,r.kt)("inlineCode",{parentName:"p"},"super()"),"."),(0,r.kt)("p",null,"If in such cases a parent's class does not have a parameterless constructor declared, a compiler error will be produced."),(0,r.kt)("p",null,"In the following example, class ",(0,r.kt)("inlineCode",{parentName:"p"},"B")," extends ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," and has a constructor declared. Its formal parameter list\nis ",(0,r.kt)("inlineCode",{parentName:"p"},"int"),". This constructor will implicitly call ",(0,r.kt)("inlineCode",{parentName:"p"},"super()"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"class A {\n\n}\n\nclass B extends A {\n\n    int val;\n\n    public B (int a) {\n        // implicitly called:\n        // super();\n        val = a;\n    }\n\n}\n\nB b = new B(1);\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Since each class in Java is a ",(0,r.kt)("strong",{parentName:"p"},"direct or indirect descendant of ",(0,r.kt)("a",{parentName:"strong",href:"https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Object.html"},(0,r.kt)("inlineCode",{parentName:"a"},"java.lang.Object"))),(0,r.kt)("sup",{parentName:"p",id:"fnref-3"},(0,r.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")),",\nthere is also an implicit call to the ",(0,r.kt)("inlineCode",{parentName:"p"},"java.lang.Object"),"'s constructor in ",(0,r.kt)("inlineCode",{parentName:"p"},"A"))),(0,r.kt)("p",null,"In the next example, ",(0,r.kt)("inlineCode",{parentName:"p"},"C")," extends the above class ",(0,r.kt)("inlineCode",{parentName:"p"},"B"),". A ",(0,r.kt)("strong",{parentName:"p"},"default constructor")," will implicitly be declared for ",(0,r.kt)("inlineCode",{parentName:"p"},"C"),". Instantiating\n",(0,r.kt)("inlineCode",{parentName:"p"},"C")," will yield a compiler error, since there is no parameterless constructor declared for ",(0,r.kt)("inlineCode",{parentName:"p"},"B"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"class C extends B {\n\n}\n\nC c = new C();\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"C")," requires a constructor with an explicit call to the parent's constructor that should be invoked:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"class C extends B {\n\n    public C() {\n       super(2);\n    }\n\n}\n\nC c = new C();\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"In Java, the first call of a constructor must always be a call to the parent's constructor. If there is no such explicit call,\nan implicit call to the parent's parameterless constructor is made",(0,r.kt)("sup",{parentName:"p",id:"fnref-4"},(0,r.kt)("a",{parentName:"sup",href:"#fn-4",className:"footnote-ref"},"4")),".")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"class A {\n    // implicit default constructor: available\n\n    // implicit default constructor: calls java.lang.Object's constructor\n}\n\n\nclass B extends A {\n\n    // implicit default constructor: available\n\n    // implicit default constructor: calls A's constructor\n}\n\n\nclass C {\n\n    // implicit default constructor: not available\n\n    public C() {\n        // implicit call to java.lang.Object's constructor\n        System.out.println(\"C created.\");\n    }\n}\n\n\nclass D extends C {\n\n    // implicit default constructor: available\n\n    // implicit default constructor: calls C's constructor\n\n}\n\n\nclass E extends D {\n\n    // implicit default constructor: not available\n\n    public E() {\n        // implicit call to D's constructor\n        System.out.println(\"E created.\");\n    }\n}\n\n\nclass F extends E {\n\n    // implicit default constructor: not available\n\n    public F(int x) {\n        // implicit call to E's constructor\n        System.out.println(\"F created\");\n    }\n}\n\n\nclass G extends F {\n\n    // implicit default constructor: not available\n\n    public G(int x) {\n        super(x); // explicit call to F's constructor\n\n        // commenting the above statement will implicitly call 'super()', which yields an error.\n        // -> since there is no default constructor available in F, we **must** tell this constructor which parent's\n        // constructor is to be called.\n        System.out.println(\"G created\");\n    }\n}\n")),(0,r.kt)("h2",{id:"constructor-inheritance"},"Constructor Inheritance"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"In Java, constructors are not members of a class. As such, constructors ",(0,r.kt)("em",{parentName:"p"},"are not inherited")," by subclasses",(0,r.kt)("sup",{parentName:"p",id:"fnref-5"},(0,r.kt)("a",{parentName:"sup",href:"#fn-5",className:"footnote-ref"},"5")),".")),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},(0,r.kt)("em",{parentName:"li"},"The Java Language Specification")," (Oracle): ",(0,r.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/specs/jls/se21/html/index.html"},"https://docs.oracle.com/javase/specs/jls/se21/html/index.html")," (retrieved 20 October 2023)",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-2"},'"8.8.9. Default Constructor", ',(0,r.kt)("em",{parentName:"li"},"The Java Language Specification")," (Oracle): ",(0,r.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/specs/jls/se21/html/jls-8.html#jls-8.8.9"},"https://docs.oracle.com/javase/specs/jls/se21/html/jls-8.html#jls-8.8.9")," (retrieved 20 October 2023)",(0,r.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-3"},'"Object as a Superclass", ',(0,r.kt)("em",{parentName:"li"},"The Java Tutorials")," (Oracle): ",(0,r.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/IandI/objectclass.html"},"https://docs.oracle.com/javase/tutorial/java/IandI/objectclass.html")," (retrieved  20 October 2023)",(0,r.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-4"},'"8.8.7. Constructor Body", ',(0,r.kt)("em",{parentName:"li"},"The Java Language Specification")," (Oracle): ",(0,r.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/specs/jls/se21/html/jls-8.html#jls-8.8.7"},"https://docs.oracle.com/javase/specs/jls/se21/html/jls-8.html#jls-8.8.7")," (retrieved  20 October 2023)",(0,r.kt)("a",{parentName:"li",href:"#fnref-4",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-5"},'"Inheritance", ',(0,r.kt)("em",{parentName:"li"},"The Java Tutorials")," (Oracle): ",(0,r.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/IandI/subclasses.html"},"https://docs.oracle.com/javase/tutorial/java/IandI/subclasses.html")," (retrieved  20 October 2023)",(0,r.kt)("a",{parentName:"li",href:"#fnref-5",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0}}]);