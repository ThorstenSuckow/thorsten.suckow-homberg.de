"use strict";(self.webpackChunkthorsten_suckow_homberg_de=self.webpackChunkthorsten_suckow_homberg_de||[]).push([[2063],{3408:e=>{e.exports=JSON.parse('{"permalink":"/blog/2023/04/14/big-ball-of-mud-decay","editUrl":"https://github.com/thorstensuckow/thorsten.suckow-homberg.de/tree/main/blog/2023-04-14-big-ball-of-mud-decay/index.md","source":"@site/blog/2023-04-14-big-ball-of-mud-decay/index.md","title":"[DE] Verf\xe4llt ein Big Ball of Mud?","description":"Ein Kommentar zu einem Kommentar zu Eberhard Wolff\'s Episode 159 - Big Ball of Mud als Teil von Software-Architektur im Stream. Eine englische \xdcbersetzung findet sich hier.","date":"2023-04-14T00:00:00.000Z","tags":[{"inline":true,"label":"Software Architecture","permalink":"/blog/tags/software-architecture"},{"inline":true,"label":"Comment","permalink":"/blog/tags/comment"},{"inline":true,"label":"Personal","permalink":"/blog/tags/personal"}],"readingTime":7.18,"hasTruncateMarker":false,"authors":[{"name":"Thorsten Suckow-Homberg","url":"https://thorsten.suckow-homberg.de","imageURL":"https://avatars.githubusercontent.com/u/823135","key":"thorstensuckow","page":null}],"frontMatter":{"title":"[DE] Verf\xe4llt ein Big Ball of Mud?","authors":["thorstensuckow"],"tags":["Software Architecture","Comment","Personal"],"enableComments":true},"unlisted":false,"prevItem":{"title":"[DE] \\"Beweisen lernen\\" - Errata","permalink":"/blog/2023/05/01/errata-beweisen-lernen"},"nextItem":{"title":"bcc-header issues with Horde_Mime_Mail","permalink":"/blog/2023/03/20/horde-mail-ignores-bcc"}}')},4843:(e,n,r)=>{r.d(n,{R:()=>t,l:()=>s});r(6540);var i=r(4848);function t(e){let{name:n,pp:r}=e;const t=`/docs/bibliography#${n.toLowerCase()}`;return(0,i.jsxs)("a",{href:t,children:["[",(0,i.jsxs)("span",{className:"bibRef",children:["\ud83d\udcd6",n]}),r?`, ${r.includes("-")?"pp":"p"}. ${r}`:"","]"]})}function s(e){let{name:n,file:r}=e;Object.entries({sd:"softwaredesign",sa:"softwarearchitecture",cs:"computerscience"}).some((e=>{let[n,i]=e;if(r.startsWith(`${n}.`))return r=r.replace(`${n}.`,`${i}.`),!0}));const t=`/docs/toolbox/${r}`;return(0,i.jsx)("a",{href:t,className:"glosRef",children:n})}},5142:(e,n,r)=>{r.d(n,{o:()=>t});r(6540);var i=r(4848);function t(){return(0,i.jsx)("div",{style:{width:"100%",textAlign:"right"},children:(0,i.jsx)("a",{style:{textDecoration:"underline"},onClick:()=>history.go(-1),href:"#",children:"Back"})})}},8292:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>h,default:()=>u,frontMatter:()=>d,metadata:()=>i,toc:()=>l});var i=r(3408),t=r(4848),s=r(8453),a=r(4843);r(5142);const d={title:"[DE] Verf\xe4llt ein Big Ball of Mud?",authors:["thorstensuckow"],tags:["Software Architecture","Comment","Personal"],enableComments:!0},h=void 0,o={authorsImageUrls:[void 0]},l=[{value:"Verf\xe4llt ein Big Ball of Mud?",id:"verf\xe4llt-ein-big-ball-of-mud",level:2}];function c(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",hr:"hr",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsxs)(n.p,{children:[(0,t.jsxs)(n.em,{children:["Ein Kommentar zu einem Kommentar zu ",(0,t.jsx)(n.a,{href:"https://ewolff.com/",children:"Eberhard Wolff's"})," ",(0,t.jsx)(n.a,{href:"https://software-architektur.tv/2023/03/31/folge159.html",children:"Episode 159 - Big Ball of Mud"})," als Teil von ",(0,t.jsx)(n.a,{href:"https://software-architektur.tv",children:"Software-Architektur im Stream"})]}),". Eine englische \xdcbersetzung findet sich ",(0,t.jsx)(n.a,{href:"/blog/2023/04/14/big-ball-of-mud-decay/index_en",children:"hier"}),"."]})]}),"\n",(0,t.jsx)(n.h2,{id:"verf\xe4llt-ein-big-ball-of-mud",children:"Verf\xe4llt ein Big Ball of Mud?"}),"\n",(0,t.jsxs)(n.p,{children:["Durch den Fortschritt der Technologie und der Arbeit von Leuten wie ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Fred_Brooks",children:"Brooks"}),", ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Pattern-Oriented_Software_Architecture",children:"Buschmann"})," und ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Grady_Booch",children:"Booch"})," wurde uns Entwicklern der Weg vom mikroskopischen ins makroskopische geebnet. Lang vorbei sind die Zeiten, in denen schrankhohe Rechnersysteme nah an der Infrastruktur programmiert werden mu\xdften. ",(0,t.jsx)("br",{}),"\nJedoch, wer heute den Mythischen Mann-Monat ",(0,t.jsx)(a.R,{name:"MMM"})," liest und \xfcber die damals zur Verf\xfcgung stehende Technik schmunzelt, der wird sp\xe4testens bei der Aktualit\xe4t der anderen erw\xe4hnten Probleme betreffs Organisation und Planung von Projekten rasch in die Gegenwart zur\xfcckgeworfen. Aus Eskapismus wird ein erhobener Finger: Das Lesevergn\xfcgen mahnt pl\xf6tzlich zur Reflektion. Die Probleme von damals sind heute immer noch aktuell, und die Entwicklung der Technik verlief bis dato offensichtlich ungleich schneller als die von ",(0,t.jsx)(n.strong,{children:"Planung und Organisation"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Die Motivation und das Wissen darum, wie man heutzutage Schablonen f\xfcr die Erstellung von Objekten und Klassen nutzt und all seine Erfahrung in das Schneiden und Zusammenstecken derselben zur Abstraktion einer Fachlichkeit einfliessen l\xe4sst, ist dann nicht zuletzt auch der Gang of Four ",(0,t.jsx)(a.R,{name:"Gof"})," zu verdanken, die Entwurfsmuster en vogue gemacht haben und in einer ganzen Generation von Programmierern das Interesse an Software Design zu wecken wussten. Aber: Der Schreiner mag in der Lage sein, einen Satz Fensterrahmen passend zu dem \xe4usseren Erscheinungsbild des Hauses zu zimmern. Das h\xfcbscheste Fenster hilft aber nichts, wenn niemand weiss wie man es einbaut, geschweige denn \xf6ffnet und wieder schliesst."]}),"\n",(0,t.jsxs)(n.p,{children:["Wir machen den gedanklichen Sprung zur\xfcck in unsere Dom\xe4ne und wissen: Solche Elemente werden dann in Menge problematisch, wenn ihre Vereinigung in einem System funktional sein und nat\xfcrlich ein m\xf6glichst wartbares Gesamtgebilde ergeben soll. Auch hier helfen Erfahrung und bew\xe4hrte Blaupausen, damit sich Entwickler*in  nicht in einem undurchdringlichen Dickicht von Verantwortlichkeiten und Assoziationen verliert. ",(0,t.jsx)("br",{}),"\nLeider gelingt das nicht ganz so oft so gut.  Wenn wir nach einem frischen Pull \xfcber das Sein des Spaghetti-Codes eines Kollegen sinnieren, oder wir uns  selbst dabei ertappen, Schichten durch das freitag-mittagliche Voranstellen eines ",(0,t.jsx)(n.code,{children:"new"})," vor einer low-level-Klasse in einer high-level-Klasse zu durchbrechen, dann ist man ihm schon einen Schritt n\xe4her, dem ber\xfcchtigten ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(a.l,{name:"Big Ball of Mud",file:"sd.bigballofmud"})})," (",(0,t.jsx)(n.strong,{children:"BBOM"}),"), den ",(0,t.jsx)(n.a,{href:"https://ewolff.com",children:"Eberhard Wolff"})," in der Folge 159 seiner Reihe ",(0,t.jsx)(n.a,{href:"https://software-architektur.tv/2023/03/31/folge159.html",children:(0,t.jsx)(n.strong,{children:"Softwarearchitektur im Stream"})})," mit gewohnter Pr\xe4zision vorgestellt und in Ursache und Wirkung analysiert hat."]}),"\n",(0,t.jsxs)(n.p,{children:["In der Folge beruft er sich auf das Paper von ",(0,t.jsx)(n.a,{href:"http://www.laputan.org/mud/",children:"Foote und Yoder"}),", in dem - vor \xfcber 20 Jahren - die Frage gestellt wurde, inwieweit denn so ein ",(0,t.jsx)(n.strong,{children:"Big Ball of Mud"})," \xfcberhaupt ein ",(0,t.jsx)(n.strong,{children:"Anti-Pattern"})," sei: Das man diese quellcodegewordene Negation einer Struktur so h\xe4ufig in Systemen vorfindet sollte doch eigentlich den Schluss zulassen, dass es sich hierbei gar nicht um ein ",(0,t.jsx)(n.strong,{children:"Anti-Pattern"}),", sondern gegebenenfalls um ein erprobtes und bew\xe4hrtes Konzept in der Software-Entwicklung handelt, n\xe4mlich das des ",(0,t.jsx)(n.strong,{children:"geringsten Widerstandes"}),". Dieser kennzeichnet sich hier durch die Vermeidung von Up-Front Architektur. Stattdessen richtet sich der Fokus direkt auf die Umsetzung von Features und Funktionalit\xe4t, auch, aber nicht ausschlie\xdflich, wenn Architektur als zu vermeidender Kostenfaktor verstanden wird:"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:'"Therefore, focus first on features and functionality, then focus on architecture and performance."'})," ",(0,t.jsx)(n.a,{href:"#bbompaper",children:(0,t.jsx)("sup",{children:"[1]"})})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Man k\xf6nnte daraus schlie\xdfen, man solle mehr Verst\xe4ndnis f\xfcr den Entwickler zeigen, der diesen Weg w\xe4hlt oder w\xe4hlen mu\xdf. Auch, wenn infolgedessen der Ansatz eines durch die Zuarbeit verschiedener Teams entstehenden Software-Fundamentes \xfcber das Fehlen von allgemein als gesch\xe4ftswertig erachteter Best Practices mit jedem Commit ein bisschen mehr verhindert oder aufgel\xf6st wird. Die Frage hat wohl auch ",(0,t.jsx)(n.em,{children:"Foote und Yoder"})," besch\xe4ftigt:"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:'"[\u2026] we seek not to cast blame upon those who must wallow in these mires. In part, our attitude is to \u2018hate the sin, but love the sinner\u2018"'}),". ",(0,t.jsx)(n.a,{href:"#bbompaper",children:(0,t.jsx)("sup",{children:"[1]"})})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Wenn der ",(0,t.jsx)(n.strong,{children:"Big Ball of Mud"})," als Konsequenz dieses Konzeptes als Struktur eines Systems erkannt wird, das keine Struktur beinhaltet, dann k\xf6nnen wir ",(0,t.jsx)(n.em,{children:"ex falso quodlibet"})," auch jede beliebige Aussage als g\xfcltig annehmen, wenn wir uns bei der Beschreibung dieses Systems darauf berufen, dass diesem System eben eine Struktur innewohnt: Und also ist ein ",(0,t.jsx)(n.strong,{children:"Big Ball of Mud"})," eben ein Entwurfsmuster. ",(0,t.jsx)(n.strong,{children:"Aber!"})," So ein Gebilde bekommt man ganz gut beliebig hin, so wie ein Zimmermann sicher auch ohne Kenntnis dar\xfcber, wie man M\xf6rtel anr\xfchrt, irgendwie in der Lage sein wird, Ziegelsteine um seine Fenster herum zu stapeln."]}),"\n",(0,t.jsxs)(n.p,{children:["Unter gewissen Umst\xe4nden kann das bewusste Zulassen zunehmender Entropie in einem Software System dabei helfen, Kontexte zu identifizieren und die Fachlichkeit zu verstehen, um Schichten herauszumeisseln und Grenzen zu schneiden. ",(0,t.jsx)(n.a,{href:"https://www.domainlanguage.com/",children:"Evans"}),", ",(0,t.jsx)(n.a,{href:"https://martinfowler.com",children:"Fowler"})," und auch ",(0,t.jsx)(n.em,{children:"Foote und Yoder"})," sind sich in jedem Fall einer Sache sicher: ",(0,t.jsx)(n.strong,{children:"Refactoring"})," muss st\xe4ndig erfolgen, um nicht die Kontrolle zu verlieren."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:'"The way to arrest entropy in software is to refactor it."'})," ",(0,t.jsx)(n.a,{href:"#bbompaper",children:(0,t.jsx)("sup",{children:"[1]"})})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Dabei ist man sich aber auch des zweiten Hauptsatzes der Thermodynamik bewusst: Die Entropie kann nicht abnehmen, sie kann gleich bleiben, oder sie kann zunehmen. Will man letzteres verhindern, r\xe4t Evans  dazu, den ",(0,t.jsx)(n.strong,{children:"BBOM"})," zu demarkieren:"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:'"Draw a boundary around the entire mess and designate it a big ball of mud. Do not try to apply sophisticated modeling within this context. Be alert to the tendency for such systems to sprawl into other contexts."'})," ",(0,t.jsx)(a.R,{name:"DDDR",pp:"38"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Foote und Yoder"})," haben eine \xe4hnliche Empfehlung, die sie in dem Paper etwas schwungvoller mit ",(0,t.jsx)(n.a,{href:"http://www.laputan.org/mud/mud.html#SweepingItUnderTheRug",children:(0,t.jsx)(n.em,{children:'"Sweeping it under the rug"'})})," bezeichnen:"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:'"Therefore, if you can\u2019t easily make a mess go away, at least cordon it off. This restricts the disorder to a fixed area, keeps it out of sight, and can set the stage for additional refactoring."'})," ",(0,t.jsx)(n.a,{href:"#bbompaper",children:(0,t.jsx)("sup",{children:"[1]"})})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Egal ob Grenzen gezogen werden oder man den ",(0,t.jsx)(n.strong,{children:"BBOM"})," unter den Teppich schaufelt: Eben so kommen wir \xfcber grobgranulare Schnittstellen an ausgew\xe4hlte Funktionalit\xe4t, und wir lassen gleichzeitig nicht zu, dass die z\xe4he Masse aus dem ",(0,t.jsx)(n.strong,{children:"BBOM"})," in unser System tropft und dort Gestalt annimmt (oder eben auch nicht). Konsequent katalogisiert ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Robert_C._Martin",children:"Robert C. Martin"})," dann auch ",(0,t.jsx)(n.strong,{children:"Viscosity"})," in die Kategorie ",(0,t.jsx)(n.strong,{children:"Design Smell"})," ein ",(0,t.jsx)(a.R,{name:"ASD",pp:"88"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://youtu.be/Gqs8zLXei7Q?t=2200",children:"Mein Kommentar w\xe4hrend der Folge lautete"}),", dass es in Anbetracht all dessen ohnehin erschwerend hinzukommen kann, dem Management die Sinnhaftigkeit von Tests zu vermitteln.\nDer Antwort von ",(0,t.jsx)(n.em,{children:"Eberhard Wolff"})," darauf entnahmen ich, dass in den von ihm beschriebenen Szenarien Tests ",(0,t.jsx)(n.em,{children:"a priori"})," als sinnvoll verstanden werden und damit Teil der Entwicklung sind (zumindest aber Tests durch entsprechende Fachkr\xe4fte): Umso wichtiger sind diese Tests, wenn sich schon zu Beginn des Projektes zeigt, dass wegen fehlender Architekturplanung und wahrscheinlich diffuser Funktions- und Modulgrenzen Funktionalit\xe4t sichergestellt werden ",(0,t.jsx)(n.em,{children:"muss"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Von dieser Implikation bin ich in meinem Kommentar nicht ausgegangen. Was ich meinte, war: Wenn Architektur keinen Gesch\xe4ftswert hat, und dies zu einem ",(0,t.jsx)(n.strong,{children:"BBOM"})," f\xfchrt, dann kann das auch zu dem ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Broken_windows_theory",children:"Broken Window Effekt"})," f\xfchren. ",(0,t.jsx)(n.em,{children:"Hunt und Thomas"})," raten dazu: ",(0,t.jsx)(n.em,{children:'"Dont live with broken Windows."'})," ",(0,t.jsx)(a.R,{name:"PP",pp:"7"}),", und ",(0,t.jsx)(n.em,{children:"Foote und Yoder"})," beziehen aus \xe4hnlichen Erfahrungen die Ensicht:"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:'"If such sprawl continues unabated, the structure of the system can become so badly compromised that it must be abandoned. As with a decaying neighborhood, a downward spiral ensues."'})," ",(0,t.jsx)(n.a,{href:"#bbompaper",children:(0,t.jsx)("sup",{children:"[1]"})})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Wenn Geld und Zeit in einem Projekt knapp sind, und Architektur damit einhergehend als nicht zielf\xfchrend verstanden wird, dann ist die Wahrscheinlichkeit eher nicht gering, dass auch das Testing der Software \u2013 ich meine hiermit die Art von Tests, die der Entwickler selber schreibt, um sein System zu verifizieren - ebenfalls als negativer Kostenfaktor gef\xfchrt wird. Sollte das Gegenteil der Fall sein, dann k\xf6nnte die fehlende Architektur und der entstehende ",(0,t.jsx)(n.strong,{children:"BBOM"})," das eingeworfene Fenster in der Nachbarschaft sein, das dazu f\xfchrt, dass noch  mehr Fenster eingeworfen werden. Der Entwickler, der sich bewusst nicht innerhalb der Schichten bewegt, sondern vor allem dazwischen, sieht sich dazu veranlasst, seinen Code nicht durch Tests zu dokumentieren, weil er dem System die Sinnhaftigkeit ob der fehlenden Struktur aberkennt. Die Projektbeteiligten akzeptieren ein eingeworfenes Fenster wahrscheinlich eher, wenn daneben schon eins existiert."]}),"\n",(0,t.jsxs)(n.p,{children:['Wenn alle Projektbeteiligten sich darauf verst\xe4ndigen, dass Grenzen und Fachlichkeiten auch durch unstrukturiertes, organisches Wachstum erkannt werden k\xf6nnen, und das System erst sp\xe4ter "ent-steht", k\xf6nnen Strukturen also sp\xe4ter nachgezogen werden: Letztendlich ist eine z\xe4he Masse etwas Formbaren \xe4hnlich, und die Dynamik unserer Handwerkskunst steckt in dem Namen ',(0,t.jsx)(n.strong,{children:"Soft"}),"ware. Besteht das Fundament m\xf6glichst nicht aus einem ",(0,t.jsx)(n.strong,{children:"Throw Away"}),", dann sollte auch allen Projektbeteiligten die Notwendigkeit von Tests klar sein: Die R\xe4son aller Verantwortlichen verhindern somit ein erstes eingeworfenes Fenster, und es ist an Fachexperten und Programmierern, dass es nicht zu weiteren kommt."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:"References"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsxs)(n.a,{href:"http://www.laputan.org/mud/mud.html#SweepingItUnderTheRug",children:[(0,t.jsx)("sup",{children:"[1]"}),' Foote, Yoder: "Big Ball of Mud"; University of Illinois, 1999']})," ",(0,t.jsx)("a",{name:"bbompaper"})]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://software-architektur.tv/2023/03/31/folge159.html",children:'Eberhard Wolff: "Software-Architektur im Stream, Folge 159: Big Ball of Mud"'})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>d});var i=r(6540);const t={},s=i.createContext(t);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);