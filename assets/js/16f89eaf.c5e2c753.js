"use strict";(self.webpackChunkthorsten_suckow_homberg_de=self.webpackChunkthorsten_suckow_homberg_de||[]).push([[5753],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),h=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=h(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=h(n),m=r,p=u["".concat(l,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(p,o(o({ref:t},d),{},{components:n})):a.createElement(p,o({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var h=2;h<i;h++)o[h]=n[h];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4461:(e,t,n)=>{n.d(t,{x:()=>r});var a=n(7294);function r(){return a.createElement("div",{style:{width:"100%",textAlign:"right"}},a.createElement("a",{style:{textDecoration:"underline"},onClick:()=>history.go(-1),href:"#"},"Back"))}},6739:(e,t,n)=>{n.d(t,{A:()=>i,E:()=>r});var a=n(7294);function r(e){let{name:t,pp:n}=e;const r=`/docs/bibliography#${t.toLowerCase()}`;return a.createElement("a",{href:r},"[",a.createElement("span",{className:"bibRef"},"\ud83d\udcd6",t.toUpperCase()),n?`, ${n.includes("-")?"pp":"p"}. ${n}`:"","]")}function i(e){let{name:t,file:n}=e;Object.entries({sd:"softwaredesign",sa:"softwarearchitecture",cs:"computerscience"}).some((e=>{let[t,a]=e;if(n.startsWith(`${t}.`))return n=n.replace(`${t}.`,`${a}.`),!0}));const r=`/docs/toolbox/${n}`;return a.createElement("a",{href:r,className:"glosRef"},t)}},5243:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),i=n(6739);n(4461);const o={title:"Does a Big Ball of Mud decay?",authors:["thorstensuckow"],tags:["Software Architecture","Comment","Personal"]},s=void 0,l={permalink:"/blog/2023/04/14/big-ball-of-mud-decay",editUrl:"https://github.com/thorstensuckow/thorsten.suckow-homberg.de/tree/main/blog/2023-04-14-big-ball-of-mud-decay/index.md",source:"@site/blog/2023-04-14-big-ball-of-mud-decay/index.md",title:"Does a Big Ball of Mud decay?",description:"A comment on a comment to Eberhard Wolff's recent episode 159 of Software-Architektur im Stream - Big Ball of Mud. The article was originally written in german language. An english transcription can be found below.",date:"2023-04-14T00:00:00.000Z",formattedDate:"April 14, 2023",tags:[{label:"Software Architecture",permalink:"/blog/tags/software-architecture"},{label:"Comment",permalink:"/blog/tags/comment"},{label:"Personal",permalink:"/blog/tags/personal"}],readingTime:13.045,hasTruncateMarker:!1,authors:[{name:"Thorsten Suckow-Homberg",url:"https://thorsten.suckow-homberg.de",imageURL:"https://avatars.githubusercontent.com/u/823135",key:"thorstensuckow"}],frontMatter:{title:"Does a Big Ball of Mud decay?",authors:["thorstensuckow"],tags:["Software Architecture","Comment","Personal"]},nextItem:{title:"bcc-header issues with Horde_Mime_Mail",permalink:"/blog/2023/03/20/horde-mail-ignores-bcc"}},h={authorsImageUrls:[void 0]},d=[{value:"Verf\xe4llt ein Big Ball of Mud?",id:"verf\xe4llt-ein-big-ball-of-mud",level:2}],u={toc:d},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("em",{parentName:"p"},"A comment on a comment to ",(0,r.kt)("a",{parentName:"em",href:"https://ewolff.com/"},"Eberhard Wolff's")," recent episode 159 of ",(0,r.kt)("a",{parentName:"em",href:"https://software-architektur.tv/2023/03/31/folge159.html"},"Software-Architektur im Stream - Big Ball of Mud")),". The article was originally written in german language. An english transcription can be found below.")),(0,r.kt)("details",null,(0,r.kt)("summary",null," English transcription of the article"),(0,r.kt)("p",null,"While the pioneers of computer science had to program computer systems close to the infrastructure, as technology progressed and thanks to the tireless work of people like  ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Fred_Brooks"},"Brooks"),", ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Pattern-Oriented_Software_Architecture"},"Buschmann")," and ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Grady_Booch"},"Booch"),", we found the way from the microscopic to the macroscopic. ",(0,r.kt)("br",null),"\nHowever, if you read the Mythical Man Month ",(0,r.kt)(i.E,{name:"MMM",mdxType:"BibRef"})," today and smile about the technology that was available at the time, you will quickly be thrown back to our present time, where problems regarding the organization and planning of projects persist. A raised finger suddenly calls for reflection: The problems of that time are still relevant today. Obviously, the development of technology has been much faster than that of planning, organization and realization of projects."),(0,r.kt)("p",null,"The motivation and knowledge of how to use templates to create objects and classes, and how to use all of our experience for cutting and assembling them into abstractions of a technicality, has gained momentum since the Gang of Four ",(0,r.kt)(i.E,{name:"Gof",mdxType:"BibRef"}),"  sparked an interest in architecture in a generation of programmers. But although the carpenter may be able to carve a set of window frames to match the exterior of the house, the prettiest window is of no use if nobody knows how to install it, let alone open and close it."),(0,r.kt)("p",null,"We make the intellectual leap back into our domain and know: Such elements become problematic in quantity when their combination in a system is supposed to be functional and of course if it should result in an overall structure that is as maintainable."),(0,r.kt)("p",null,"Experience and proven blueprints help to ensure that developers do not lose themselves in a jungle of tangled responsibilities and associations."),(0,r.kt)("p",null,"Unfortunately, that doesn't always work out so well. When we catch ourselves breaking layers by adding a ",(0,r.kt)("inlineCode",{parentName:"p"},"new")," in front of a lower-level class in a high-level class, we are one step closer to the notorious ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(i.A,{name:"Big Ball of Mud",file:"sd.bigballofmud",mdxType:"GlosRef"}))," (",(0,r.kt)("strong",{parentName:"p"},"BBOM"),"), which ",(0,r.kt)("a",{parentName:"p",href:"https://ewolff.com"},"Eberhard Wolff")," presented and analyzed in episode 159 of his series ",(0,r.kt)("a",{parentName:"p",href:"https://software-architektur.tv/2023/03/31/folge159.html"},'"Software Architecture im Stream"')," with his usual precision."),(0,r.kt)("p",null,"In this episode, he also refers to the paper of Foote and Yoder, in which - more than 20 years ago - the question was asked to what extent such a ",(0,r.kt)("strong",{parentName:"p"},"Big Ball of Mud")," is an anti-pattern: That this negation of a structure is so often found in systems should actually lead to the conclusion that this is not an anti-pattern at all, but rather a tried and tested concept in software development. One could conclude from this that one should show more understanding for the developer who constantly breaks the foundation of a system a little more with each commit by (un)knowingly ignoring all best practices."),(0,r.kt)("p",null,"Foote and Yoder were probably also concerned with the question:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},'"',"[\u2026]",' we seek not to cast blame upon those who must wallow in these mires. In part, our attitude is to \u2018hate the sin, but love the sinner\u2018"'),".")),(0,r.kt)("p",null,"If the ",(0,r.kt)("strong",{parentName:"p"},"Big Ball of Mud")," is ultimately itself a structure that contains no structure, similar to how the empty set is itself a set, then we can ex falso quodlibet accept any statement as valid if we look at the description of the system based on the fact that this system has an inherent structure: Also, a ",(0,r.kt)("strong",{parentName:"p"},"Big Ball of Mud")," is a design pattern."),(0,r.kt)("p",null,"But! A structure like this can be done quite easily with no experience, just as a carpenter will probably be able to stack bricks around his window without any knowledge of how to mix mortar."),(0,r.kt)("p",null,"Under certain circumstances, however, consciously allowing increasing entropy in a software system can also help to identify contexts and understand the technicalities in order to carve out layers and cut boundaries. In any case, Evans, Fowler and also Foote and Yoder are sure of one thing: refactoring must be carried out constantly in order to remain in control of the situation:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},'"The way to arrest entropy in software is to refactor it."'))),(0,r.kt)("p",null,"However, one is also aware of the second law of thermodynamics: entropy cannot decrease, it can remain the same, or it can increase. If you want to prevent the latter, Evans advises a boundary around the ",(0,r.kt)("strong",{parentName:"p"},"BBOM"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},'"Draw a boundary around the entire mess and designate it a big ball of mud. Do not try to apply sophisticated modeling within this context. Be alert to the tendency for such systems to sprawl into other contexts."')," ",(0,r.kt)(i.E,{name:"DDDR",pp:"38",mdxType:"BibRef"}))),(0,r.kt)("p",null,"Foote and Yoder have a similar recommendation, which they more eloquently call ",(0,r.kt)("a",{parentName:"p",href:"http://www.laputan.org/mud/mud.html#SweepingItUnderTheRug"},(0,r.kt)("em",{parentName:"a"},'"Sweeping it under the rug"'))," in their paper:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},'"Therefore, if you can\u2019t easily make a mess go away, at least cordon it off. This restricts the disorder to a fixed area, keeps it out of sight, and can set the stage for additional refactoring."'))),(0,r.kt)("p",null,"It doesn't matter whether the ",(0,r.kt)("strong",{parentName:"p"},"BBOM")," is shoveled under the carpet or safe boundaries are created: It allows us to get selected functionality via coarse-grained interfaces out of the ",(0,r.kt)("strong",{parentName:"p"},"BBOM"),", and at the same time we don't allow the viscous mass to drip into our system."),(0,r.kt)("p",null,"Consequently, ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Robert_C._Martin"},"Robert C. Martin")," also cataloged ",(0,r.kt)("strong",{parentName:"p"},"Viscosity")," in the category ",(0,r.kt)("strong",{parentName:"p"},"Design Smell")," ",(0,r.kt)(i.E,{name:"ASD",pp:"88",mdxType:"BibRef"}),"."),(0,r.kt)("p",null,"My comment during the episode was that, given all of this, communicating the value of testing to management can be an added complication. I gathered from Eberhard Wolff's answer that in the scenarios he described, tests are understood to be useful a priori and are therefore part of the development process: It is mandatory to verify functionality due to the lack of architectural planning."),(0,r.kt)("p",null,"I did not assume this implication in my comment. What I meant was: If architecture is seen as a cost factor or other conditions prevail that prevent architecture, and thus leads to a ",(0,r.kt)("strong",{parentName:"p"},"BBOM"),", then this can also lead to the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Broken_windows_theory"},"Broken Window Effect"),'. Hunt and Thomas have already advised: "Don\'t live with broken Windows." ',(0,r.kt)(i.E,{name:"PP",pp:"7",mdxType:"BibRef"}),", and Foote and Yoder conclude from similar experiences:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},'"If such sprawl continues unabated, the structure of the system can become so badly compromised that it must be abandoned. As with a decaying neighborhood, a downward spiral ensues."'))),(0,r.kt)("p",null,"If money and time are tight in a project and the architecture is not understood to be of value, then there is a probability that testing the software - I understand this as the kind of tests that the developer writes for verifying his code - is also seen as a negative cost factor. If the opposite is true, then the missing architecture and the resulting ",(0,r.kt)("strong",{parentName:"p"},"BBOM")," could be the broken window in the neighborhood, causing even more windows to be smashed. The developer who consciously does not move within the layers, but in between, feels compelled not to document his code through tests because he may fail to see any value of his work in the end."),(0,r.kt)("p",null,"If everyone involved in the project agrees that limits and technicalities can also be recognized through unstructured, organic growth, and the system only emerges later, structures can added later: Ultimately, mud is a mass that is malleable, and the dynamic of our craftsmanship is in the name ",(0,r.kt)("strong",{parentName:"p"},"soft"),"ware. If the foundation does not consist of a ",(0,r.kt)("strong",{parentName:"p"},"Throw Away"),", then all those involved in the project should be aware that testing is required: the rationale of all those responsible prevents the first window being thrown in, and it is up to the technical experts and programmers to ensure that there won't ever be any.")),(0,r.kt)("h2",{id:"verf\xe4llt-ein-big-ball-of-mud"},"Verf\xe4llt ein Big Ball of Mud?"),(0,r.kt)("p",null,"Mussten die Pioniere der Informatik schrankhohe Rechnersysteme nah an der Infrastruktur programmieren, haben wir mit dem Fortschritt der Technologie und dank der unerm\xfcdlichen Arbeit von Leuten wie ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Fred_Brooks"},"Brooks"),", ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Pattern-Oriented_Software_Architecture"},"Buschmann")," und ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Grady_Booch"},"Booch")," den Weg vom mikroskopischen ins makroskopische gefunden. ",(0,r.kt)("br",null),"\nJedoch, wer heute den Mythischen Mann-Monat ",(0,r.kt)(i.E,{name:"MMM",mdxType:"BibRef"})," liest und \xfcber die damals zur Verf\xfcgung stehende Technik schmunzelt, der wird sp\xe4testens bei der Aktualit\xe4t der anderen erw\xe4hnten Probleme betreffs Organisation und Planung von Projekten rasch in die Gegenwart zur\xfcckgeworfen. Aus Eskapismus wird ein erhobener Finger: Das Lesevergn\xfcgen mahnt pl\xf6tzlich zur Reflektion. Die Probleme von damals sind heute immer noch aktuell, und die Entwicklung der Technik verlief bis dato offensichtlich ungleich schneller als die von Planung und Organisation."),(0,r.kt)("p",null,"Die Motivation und das Wissen darum, wie man heutzutage Schablonen f\xfcr die Erstellung von Objekten und Klassen nutzt und all seine Erfahrung in das Schneiden und Zusammenstecken derselben zur Abstraktion einer Fachlichkeit einfliessen l\xe4sst, ist dann nicht zuletzt auch der Gang of Four ",(0,r.kt)(i.E,{name:"Gof",mdxType:"BibRef"})," zu verdanken, die Software Design en vogue gemacht haben und in einer ganzen Generation von Programmierern das Interesse an Architektur zu wecken wussten. Aber: Der Schreiner mag in der Lage sein, einen Satz Fensterrahmen passend zu dem \xe4usseren Erscheinungsbild des Hauses zu zimmern. Das h\xfcbscheste Fenster hilft aber nichts, wenn niemand weiss wie man es einbaut, geschweige denn \xf6ffnet und wieder schliesst."),(0,r.kt)("p",null,"Wir machen den gedanklichen Sprung zur\xfcck in unsere Dom\xe4ne und wissen: Solche Elemente werden dann in Menge problematisch, wenn ihre Vereinigung in einem System funktional sein und nat\xfcrlich ein m\xf6glichst wartbares Gesamtgebilde ergeben soll.",(0,r.kt)("br",null),"\nAuch hier helfen Erfahrung und bew\xe4hrte Blaupausen, damit Entwickler*in sich nicht in einem undurchdringlichen Dickicht von Verantwortlichkeiten und Assoziationen verliert. ",(0,r.kt)("br",null),"\nLeider gelingt das nicht ganz so oft so gut.  Wenn wir nach einem frischen Pull \xfcber das Sein des Spaghetti-Codes eines Kollegen sinnieren, oder wir uns  selbst dabei ertappen, Schichten durch das freitag-mittagliche Voranstellen eines ",(0,r.kt)("inlineCode",{parentName:"p"},"new")," vor einer low-level-Klasse in einer high-level-Klasse zu durchbrechen, dann ist man ihm schon einen Schritt n\xe4her, dem ber\xfcchtigten ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(i.A,{name:"Big Ball of Mud",file:"sd.bigballofmud",mdxType:"GlosRef"}))," (",(0,r.kt)("strong",{parentName:"p"},"BBOM"),"), den ",(0,r.kt)("a",{parentName:"p",href:"https://ewolff.com"},"Eberhard Wolff")," in der Folge 159 seiner Reihe ",(0,r.kt)("a",{parentName:"p",href:"https://software-architektur.tv/2023/03/31/folge159.html"},(0,r.kt)("strong",{parentName:"a"},"Softwarearchitektur im Stream"))," mit gewohnter Pr\xe4zision vorgestellt und analysiert hat.  "),(0,r.kt)("p",null,"In der Folge beruft er sich auch auf das Paper von ",(0,r.kt)("a",{parentName:"p",href:"http://www.laputan.org/mud/"},"Foote und Yoder"),", in dem - vor \xfcber 20 Jahren - die Frage gestellt wurde, inwieweit denn so ein ",(0,r.kt)("strong",{parentName:"p"},"Big Ball of Mud")," \xfcberhaupt ein ",(0,r.kt)("strong",{parentName:"p"},"Anti-Pattern")," sei: Das man diese quellcodegewordene Negation einer Struktur so h\xe4ufig in Systemen vorfindet sollte doch eigentlich den Schluss zulassen, dass es sich hierbei gar nicht um ein ",(0,r.kt)("strong",{parentName:"p"},"Anti-Pattern"),", sondern gegebenenfalls um ein erprobtes und bew\xe4hrtes Konzept in der Software-Entwicklung handelt. Man k\xf6nnte daraus folgern, man solle mehr Verst\xe4ndnis f\xfcr den Entwickler zeigen, der das Fundament einer robusten Architektur st\xe4ndig \xfcber das (un)wissentliche Ignorieren aller Best Practices mit jedem Commit ein bisschen mehr zerbricht. Die Frage hat wohl auch ",(0,r.kt)("em",{parentName:"p"},"Foote und Yoder")," besch\xe4ftigt: "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},'"',"[\u2026]",' we seek not to cast blame upon those who must wallow in these mires. In part, our attitude is to \u2018hate the sin, but love the sinner\u2018"'),".")),(0,r.kt)("p",null,"Wenn der ",(0,r.kt)("strong",{parentName:"p"},"Big Ball of Mud")," letztendlich selber eine Struktur ist, die keine Struktur beinhaltet, \xe4hnlich, wie die leere Menge auch selber wieder eine Menge ist, dann k\xf6nnen wir ex falso quodlibet auch jede beliebige Aussage als g\xfcltig annehmen, wenn wir uns bei der Beschreibung des Systems darauf berufen, dass diesem System eine Struktur innewohnt: Und also ist ein ",(0,r.kt)("strong",{parentName:"p"},"Big Ball of Mud")," eben ein Entwurfsmuster.",(0,r.kt)("br",null),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Aber!")," So ein Gebilde bekommt man ganz gut ohne Erfahrung hin, so wie ein Zimmermann sicher auch ohne Kenntnis dar\xfcber, wie man M\xf6rtel anr\xfchrt, irgendwie in der Lage sein wird, Ziegelsteine um seiner Fenster herum zu stapeln."),(0,r.kt)("p",null,"Unter gewissen Umst\xe4nden kann das bewusste Zulassen zunehmender Entropie in einem Software System aber auch dabei helfen, Kontexte zu identifizieren und die Fachlichkeit zu verstehen, um Schichten herauszumeisseln und Grenzen zu schneiden. ",(0,r.kt)("a",{parentName:"p",href:"https://www.domainlanguage.com/"},"Evans"),", ",(0,r.kt)("a",{parentName:"p",href:"https://martinfowler.com"},"Fowler")," und auch ",(0,r.kt)("em",{parentName:"p"},"Foote und Yoder")," sind sich in jedem Fall einer Sache sicher: ",(0,r.kt)("strong",{parentName:"p"},"Refactoring")," muss st\xe4ndig erfolgen, um Herr der Lage zu bleiben: "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},'"The way to arrest entropy in software is to refactor it."')," ")),(0,r.kt)("p",null,"Dabei ist man sich aber auch \xfcber den zweiten Hauptsatz der Thermodynamik bewusst: Die Entropie kann nicht abnehmen, sie kann gleich bleiben, oder sie kann zunehmen. Will man letzteres verhindern, r\xe4t Evans  dazu, den ",(0,r.kt)("strong",{parentName:"p"},"BBOM")," zu demarkieren:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},'"Draw a boundary around the entire mess and designate it a big ball of mud. Do not try to apply sophisticated modeling within this context. Be alert to the tendency for such systems to sprawl into other contexts."')," ",(0,r.kt)(i.E,{name:"DDDR",pp:"38",mdxType:"BibRef"}))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Foote und Yoder")," haben eine \xe4hnliche Empfehlung, die sie in dem Paper etwas schwungvoller mit ",(0,r.kt)("a",{parentName:"p",href:"http://www.laputan.org/mud/mud.html#SweepingItUnderTheRug"},(0,r.kt)("em",{parentName:"a"},'"Sweeping it under the rug"'))," bezeichnen:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},'"Therefore, if you can\u2019t easily make a mess go away, at least cordon it off. This restricts the disorder to a fixed area, keeps it out of sight, and can set the stage for additional refactoring."'))),(0,r.kt)("p",null,"Egal ob Grenzen gezogen werden man den ",(0,r.kt)("strong",{parentName:"p"},"BBOM")," unter den Teppich schaufelt: Eben so kommen wir \xfcber grobgranulare Schnittstellen an ausgew\xe4hlte Funktionalit\xe4t, und wir lassen gleichzeitig nicht zu, dass die z\xe4he Masse aus dem ",(0,r.kt)("strong",{parentName:"p"},"BBOM")," in unser System tropft und dort Gestalt annimmt (oder eben auch nicht). Konsequent katalogisiert ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Robert_C._Martin"},"Robert C. Martin")," dann auch ",(0,r.kt)("strong",{parentName:"p"},"Viscosity")," in die Kategorie ",(0,r.kt)("strong",{parentName:"p"},"Design Smell")," ein ",(0,r.kt)(i.E,{name:"ASD",pp:"88",mdxType:"BibRef"}),"."),(0,r.kt)("p",null,"Mein Kommentar w\xe4hrend der Folge lautete, dass es in Anbetracht all dessen ohnehin erschwerend hinzukommen kann, dem Management die Sinnhaftigkeit von Tests zu vermitteln.\nDer Antwort von ",(0,r.kt)("em",{parentName:"p"},"Eberhard Wolff")," darauf entnahmen ich, dass in den von ihm beschriebenen Szenarien Tests a priori als sinnvoll verstanden werden und damit Teil der Entwicklung sind (zumindest aber Tests durch entsprechende Fachkr\xe4fte): Auch und vor allem dann, wenn sich schon zu Beginn des Projektes zeigt, dass wegen fehlender Architekturplanung die Funktionalit\xe4t gepr\xfcft werden ",(0,r.kt)("em",{parentName:"p"},"muss"),"."),(0,r.kt)("p",null,"Vom dieser Implikation bin ich in meinem Kommentar nicht ausgegangen. Was ich meinte, war: Wenn Architektur als Kostenfaktor gesehen wird, oder andere Bedingungen vorherrschen, die Architektur verhindern, und dies zu einem ",(0,r.kt)("strong",{parentName:"p"},"BBOM")," f\xfchrt, dann kann das auch zu dem ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Broken_windows_theory"},"Broken Window Effekt")," f\xfchren. ",(0,r.kt)("em",{parentName:"p"},"Hunt und Thomas")," haben bereits dazu geraten ",(0,r.kt)("em",{parentName:"p"},'"Dont live with broken Windows."')," ",(0,r.kt)(i.E,{name:"PP",pp:"7",mdxType:"BibRef"}),", und ",(0,r.kt)("em",{parentName:"p"},"Foote und Yoder")," beziehen aus \xe4hnlichen Erfahrungen die Ensicht:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},'"If such sprawl continues unabated, the structure of the system can become so badly compromised that it must be abandoned. As with a decaying neighborhood, a downward spiral ensues."'))),(0,r.kt)("p",null,"Wenn Geld und Zeit in einem Projekt knapp sind, und Architektur als nicht zielf\xfchrend verstanden wird, dann ist die Wahrscheinlichkeit eher nicht gering, dass auch das Testing der Software \u2013 ich meine hiermit die Art von Tests, die der Entwickler selber schreibt, um sein System zu verifizieren - ebenfalls als negativer Kostenfaktor gef\xfchrt wird. Sollte das Gegenteil der Fall sein, dann k\xf6nnte die fehlende Architektur und der entstehende ",(0,r.kt)("strong",{parentName:"p"},"BBOM")," das eingeworfene Fenster in der Nachbarschaft sein, das dazu f\xfchrt, dass noch  mehr Fenster eingeworfen werden. Der Entwickler, der sich bewusst nicht innerhalb der Schichten bewegt, sondern vor allem dazwischen, sieht sich dazu veranlasst, seinen Code nicht durch Tests zu dokumentieren, weil er dem System die Sinnhaftigkeit ob der fehlenden Struktur aberkennt."),(0,r.kt)("p",null,'Wenn alle Projektbeteiligten sich darauf verst\xe4ndigen, dass Grenzen und Fachlichkeiten auch durch unstrukturiertes, organisches Wachstum erkannt werden k\xf6nnen, und das System erst sp\xe4ter "ent-steht", k\xf6nnen Strukturen also sp\xe4ter nachgezogen werden: Letztendlich ist eine z\xe4he Masse etwas Formbaren \xe4hnlich, und die Dynamik unserer Handwerkskunst steckt in dem Namen ',(0,r.kt)("strong",{parentName:"p"},"Soft"),"ware. Besteht das Fundament m\xf6glichst nicht aus einem ",(0,r.kt)("strong",{parentName:"p"},"Throw Away"),", dann sollte auch allen Projektbeteiligten die Notwendigkeit von Tests klar sein: Die R\xe4son aller Verantwortlichen verhindern somit ein erstes eingeworfenes Fenster, und es ist an Fachexperten und Programmierern, dass es nicht zu weiteren kommt. "),(0,r.kt)("hr",null),(0,r.kt)("p",null,"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://software-architektur.tv/2023/03/31/folge159.html"},'Eberhard Wolff: "Software-Architektur im Stream, Folge 159: Big Ball of Mud"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://www.laputan.org/mud/mud.html#SweepingItUnderTheRug"},'Foote, Yoder: "Big Ball of Mud"; University of Illinois, 1999'))))}m.isMDXComponent=!0}}]);