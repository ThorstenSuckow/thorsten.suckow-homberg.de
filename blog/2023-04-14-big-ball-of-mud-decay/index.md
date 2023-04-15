---
title: "Does a Big Ball of Mud decay?"
authors: [thorstensuckow]
tags: [Software Architecture, Comment, Personal]
---

import {GlosRef, BibRef} from "../../src/components/References";
import {BackButton} from "../../src/components/BackButton.js";


:::info
_A comment on a comment to [Eberhard Wolff's](https://ewolff.com/) recent episode 159 of [Software-Architektur im Stream - Big Ball of Mud](https://software-architektur.tv/2023/03/31/folge159.html)_. The article was originally written in german language. An english transcription can be found below.
:::

<details>
 <summary> English transcription of the article</summary>


While the pioneers of computer science had to program computer systems close to the infrastructure, as technology progressed and thanks to the tireless work of people like  [Brooks](https://en.wikipedia.org/wiki/Fred_Brooks), [Buschmann](https://en.wikipedia.org/wiki/Pattern-Oriented_Software_Architecture) and [Booch](https://en.wikipedia.org/wiki/Grady_Booch), we found the way from the microscopic to the macroscopic. <br />
However, if you read the Mythical Man Month <BibRef name="MMM" /> today and smile about the technology that was available at the time, you will quickly be thrown back to our present time, where problems regarding the organization and planning of projects persist. A raised finger suddenly calls for reflection: The problems of that time are still relevant today. Obviously, the development of technology has been much faster than that of planning, organization and realization of projects.

The motivation and knowledge of how to use templates to create objects and classes, and how to use all of our experience for cutting and assembling them into abstractions of a technicality, has gained momentum since the Gang of Four <BibRef name="Gof" />  sparked an interest in architecture in a generation of programmers. But although the carpenter may be able to carve a set of window frames to match the exterior of the house, the prettiest window is of no use if nobody knows how to install it, let alone open and close it.

We make the intellectual leap back into our domain and know: Such elements become problematic in quantity when their combination in a system is supposed to be functional and of course if it should result in an overall structure that is as maintainable.

Experience and proven blueprints help to ensure that developers do not lose themselves in a jungle of tangled responsibilities and associations.

Unfortunately, that doesn't always work out so well. When we catch ourselves breaking layers by adding a `new` in front of a lower-level class in a high-level class, we are one step closer to the notorious **<GlosRef name="Big Ball of Mud" file="sd.bigballofmud" />** (**BBOM**), which [Eberhard Wolff](https://ewolff.com) presented and analyzed in episode 159 of his series ["Software Architecture im Stream"](https://software-architektur.tv/2023/03/31/folge159.html) with his usual precision.

In this episode, he also refers to the paper of Foote and Yoder, in which - more than 20 years ago - the question was asked to what extent such a **Big Ball of Mud** is an anti-pattern: That this negation of a structure is so often found in systems should actually lead to the conclusion that this is not an anti-pattern at all, but rather a tried and tested concept in software development. One could conclude from this that one should show more understanding for the developer who constantly breaks the foundation of a system a little more with each commit by (un)knowingly ignoring all best practices.

Foote and Yoder were probably also concerned with the question:

> _"[…] we seek not to cast blame upon those who must wallow in these mires. In part, our attitude is to ‘hate the sin, but love the sinner‘"_.

If the **Big Ball of Mud** is ultimately itself a structure that contains no structure, similar to how the empty set is itself a set, then we can ex falso quodlibet accept any statement as valid if we look at the description of the system based on the fact that this system has an inherent structure: Also, a **Big Ball of Mud** is a design pattern.

But! A structure like this can be done quite easily with no experience, just as a carpenter will probably be able to stack bricks around his window without any knowledge of how to mix mortar.

Under certain circumstances, however, consciously allowing increasing entropy in a software system can also help to identify contexts and understand the technicalities in order to carve out layers and cut boundaries. In any case, Evans, Fowler and also Foote and Yoder are sure of one thing: refactoring must be carried out constantly in order to remain in control of the situation:

> _"The way to arrest entropy in software is to refactor it."_

However, one is also aware of the second law of thermodynamics: entropy cannot decrease, it can remain the same, or it can increase. If you want to prevent the latter, Evans advises a boundary around the **BBOM**:

> _"Draw a boundary around the entire mess and designate it a big ball of mud. Do not try to apply sophisticated modeling within this context. Be alert to the tendency for such systems to sprawl into other contexts."_ <BibRef name="DDDR" pp="38" />

Foote and Yoder have a similar recommendation, which they more eloquently call [_"Sweeping it under the rug"_](http://www.laputan.org/mud/mud.html#SweepingItUnderTheRug) in their paper:

> _"Therefore, if you can’t easily make a mess go away, at least cordon it off. This restricts the disorder to a fixed area, keeps it out of sight, and can set the stage for additional refactoring."_

It doesn't matter whether the **BBOM** is shoveled under the carpet or safe boundaries are created: It allows us to get selected functionality via coarse-grained interfaces out of the **BBOM**, and at the same time we don't allow the viscous mass to drip into our system.

Consequently, [Robert C. Martin](https://en.wikipedia.org/wiki/Robert_C._Martin) also cataloged **Viscosity** in the category **Design Smell** <BibRef name="ASD" pp="88" />.

My comment during the episode was that, given all of this, communicating the value of testing to management can be an added complication. I gathered from Eberhard Wolff's answer that in the scenarios he described, tests are understood to be useful a priori and are therefore part of the development process: It is mandatory to verify functionality due to the lack of architectural planning.

I did not assume this implication in my comment. What I meant was: If architecture is seen as a cost factor or other conditions prevail that prevent architecture, and thus leads to a **BBOM**, then this can also lead to the [Broken Window Effect](https://en.wikipedia.org/wiki/Broken_windows_theory). Hunt and Thomas have already advised: "Don't live with broken Windows." <BibRef name="PP" pp="7" />, and Foote and Yoder conclude from similar experiences:

> _"If such sprawl continues unabated, the structure of the system can become so badly compromised that it must be abandoned. As with a decaying neighborhood, a downward spiral ensues."_

If money and time are tight in a project and the architecture is not understood to be of value, then there is a probability that testing the software - I understand this as the kind of tests that the developer writes for verifying his code - is also seen as a negative cost factor. If the opposite is true, then the missing architecture and the resulting **BBOM** could be the broken window in the neighborhood, causing even more windows to be smashed. The developer who consciously does not move within the layers, but in between, feels compelled not to document his code through tests because he may fail to see any value of his work in the end.

If everyone involved in the project agrees that limits and technicalities can also be recognized through unstructured, organic growth, and the system only emerges later, structures can added later: Ultimately, mud is a mass that is malleable, and the dynamic of our craftsmanship is in the name **soft**ware. If the foundation does not consist of a **Throw Away**, then all those involved in the project should be aware that testing is required: the rationale of all those responsible prevents the first window being thrown in, and it is up to the technical experts and programmers to ensure that there won't ever be any.

</details>

## Verfällt ein Big Ball of Mud?

Mussten die Pioniere der Informatik schrankhohe Rechnersysteme nah an der Infrastruktur programmieren, haben wir mit dem Fortschritt der Technologie und dank der unermüdlichen Arbeit von Leuten wie [Brooks](https://en.wikipedia.org/wiki/Fred_Brooks), [Buschmann](https://en.wikipedia.org/wiki/Pattern-Oriented_Software_Architecture) und [Booch](https://en.wikipedia.org/wiki/Grady_Booch) den Weg vom mikroskopischen ins makroskopische gefunden. <br />
Jedoch, wer heute den Mythischen Mann-Monat <BibRef name="MMM" /> liest und über die damals zur Verfügung stehende Technik schmunzelt, der wird spätestens bei der Aktualität der anderen erwähnten Probleme betreffs Organisation und Planung von Projekten rasch in die Gegenwart zurückgeworfen. Aus Eskapismus wird ein erhobener Finger: Das Lesevergnügen mahnt plötzlich zur Reflektion. Die Probleme von damals sind heute immer noch aktuell, und die Entwicklung der Technik verlief bis dato offensichtlich ungleich schneller als die von Planung und Organisation.

Die Motivation und das Wissen darum, wie man heutzutage Schablonen für die Erstellung von Objekten und Klassen nutzt und all seine Erfahrung in das Schneiden und Zusammenstecken derselben zur Abstraktion einer Fachlichkeit einfliessen lässt, ist dann nicht zuletzt auch der Gang of Four <BibRef name="Gof" /> zu verdanken, die Software Design en vogue gemacht haben und in einer ganzen Generation von Programmierern das Interesse an Architektur zu wecken wussten. Aber: Der Schreiner mag in der Lage sein, einen Satz Fensterrahmen passend zu dem äusseren Erscheinungsbild des Hauses zu zimmern. Das hübscheste Fenster hilft aber nichts, wenn niemand weiss wie man es einbaut, geschweige denn öffnet und wieder schliesst.

Wir machen den gedanklichen Sprung zurück in unsere Domäne und wissen: Solche Elemente werden dann in Menge problematisch, wenn ihre Vereinigung in einem System funktional sein und natürlich ein möglichst wartbares Gesamtgebilde ergeben soll.<br />
Auch hier helfen Erfahrung und bewährte Blaupausen, damit Entwickler*in sich nicht in einem undurchdringlichen Dickicht von Verantwortlichkeiten und Assoziationen verliert. <br />
Leider gelingt das nicht ganz so oft so gut.  Wenn wir nach einem frischen Pull über das Sein des Spaghetti-Codes eines Kollegen sinnieren, oder wir uns  selbst dabei ertappen, Schichten durch das freitag-mittagliche Voranstellen eines `new` vor einer low-level-Klasse in einer high-level-Klasse zu durchbrechen, dann ist man ihm schon einen Schritt näher, dem berüchtigten **<GlosRef name="Big Ball of Mud" file="sd.bigballofmud" />** (**BBOM**), den [Eberhard Wolff](https://ewolff.com) in der Folge 159 seiner Reihe [**Softwarearchitektur im Stream**](https://software-architektur.tv/2023/03/31/folge159.html) mit gewohnter Präzision vorgestellt und analysiert hat.  

In der Folge beruft er sich auch auf das Paper von [Foote und Yoder](http://www.laputan.org/mud/), in dem - vor über 20 Jahren - die Frage gestellt wurde, inwieweit denn so ein **Big Ball of Mud** überhaupt ein **Anti-Pattern** sei: Das man diese quellcodegewordene Negation einer Struktur so häufig in Systemen vorfindet sollte doch eigentlich den Schluss zulassen, dass es sich hierbei gar nicht um ein **Anti-Pattern**, sondern gegebenenfalls um ein erprobtes und bewährtes Konzept in der Software-Entwicklung handelt. Man könnte daraus folgern, man solle mehr Verständnis für den Entwickler zeigen, der das Fundament einer robusten Architektur ständig über das (un)wissentliche Ignorieren aller Best Practices mit jedem Commit ein bisschen mehr zerbricht. Die Frage hat wohl auch _Foote und Yoder_ beschäftigt: 

> _"[…] we seek not to cast blame upon those who must wallow in these mires. In part, our attitude is to ‘hate the sin, but love the sinner‘"_.

Wenn der **Big Ball of Mud** letztendlich selber eine Struktur ist, die keine Struktur beinhaltet, ähnlich, wie die leere Menge auch selber wieder eine Menge ist, dann können wir ex falso quodlibet auch jede beliebige Aussage als gültig annehmen, wenn wir uns bei der Beschreibung des Systems darauf berufen, dass diesem System eine Struktur innewohnt: Und also ist ein **Big Ball of Mud** eben ein Entwurfsmuster.<br />  
**Aber!** So ein Gebilde bekommt man ganz gut ohne Erfahrung hin, so wie ein Zimmermann sicher auch ohne Kenntnis darüber, wie man Mörtel anrührt, irgendwie in der Lage sein wird, Ziegelsteine um seiner Fenster herum zu stapeln.

Unter gewissen Umständen kann das bewusste Zulassen zunehmender Entropie in einem Software System aber auch dabei helfen, Kontexte zu identifizieren und die Fachlichkeit zu verstehen, um Schichten herauszumeisseln und Grenzen zu schneiden. [Evans](https://www.domainlanguage.com/), [Fowler](https://martinfowler.com) und auch _Foote und Yoder_ sind sich in jedem Fall einer Sache sicher: **Refactoring** muss ständig erfolgen, um Herr der Lage zu bleiben: 

> _"The way to arrest entropy in software is to refactor it."_ 

Dabei ist man sich aber auch über den zweiten Hauptsatz der Thermodynamik bewusst: Die Entropie kann nicht abnehmen, sie kann gleich bleiben, oder sie kann zunehmen. Will man letzteres verhindern, rät Evans  dazu, den **BBOM** zu demarkieren:

> _"Draw a boundary around the entire mess and designate it a big ball of mud. Do not try to apply sophisticated modeling within this context. Be alert to the tendency for such systems to sprawl into other contexts."_ <BibRef name="DDDR" pp="38" />

_Foote und Yoder_ haben eine ähnliche Empfehlung, die sie in dem Paper etwas schwungvoller mit [_"Sweeping it under the rug"_](http://www.laputan.org/mud/mud.html#SweepingItUnderTheRug) bezeichnen:

> _"Therefore, if you can’t easily make a mess go away, at least cordon it off. This restricts the disorder to a fixed area, keeps it out of sight, and can set the stage for additional refactoring."_

Egal ob Grenzen gezogen werden man den **BBOM** unter den Teppich schaufelt: Eben so kommen wir über grobgranulare Schnittstellen an ausgewählte Funktionalität, und wir lassen gleichzeitig nicht zu, dass die zähe Masse aus dem **BBOM** in unser System tropft und dort Gestalt annimmt (oder eben auch nicht). Konsequent katalogisiert [Robert C. Martin](https://en.wikipedia.org/wiki/Robert_C._Martin) dann auch **Viscosity** in die Kategorie **Design Smell** ein <BibRef name="ASD" pp="88" />.

Mein Kommentar während der Folge lautete, dass es in Anbetracht all dessen ohnehin erschwerend hinzukommen kann, dem Management die Sinnhaftigkeit von Tests zu vermitteln.
Der Antwort von _Eberhard Wolff_ darauf entnahmen ich, dass in den von ihm beschriebenen Szenarien Tests a priori als sinnvoll verstanden werden und damit Teil der Entwicklung sind (zumindest aber Tests durch entsprechende Fachkräfte): Auch und vor allem dann, wenn sich schon zu Beginn des Projektes zeigt, dass wegen fehlender Architekturplanung die Funktionalität geprüft werden _muss_.

Vom dieser Implikation bin ich in meinem Kommentar nicht ausgegangen. Was ich meinte, war: Wenn Architektur als Kostenfaktor gesehen wird, oder andere Bedingungen vorherrschen, die Architektur verhindern, und dies zu einem **BBOM** führt, dann kann das auch zu dem [Broken Window Effekt](https://en.wikipedia.org/wiki/Broken_windows_theory) führen. _Hunt und Thomas_ haben bereits dazu geraten _"Dont live with broken Windows."_ <BibRef name="PP" pp="7" />, und _Foote und Yoder_ beziehen aus ähnlichen Erfahrungen die Ensicht:

> _"If such sprawl continues unabated, the structure of the system can become so badly compromised that it must be abandoned. As with a decaying neighborhood, a downward spiral ensues."_

Wenn Geld und Zeit in einem Projekt knapp sind, und Architektur als nicht zielführend verstanden wird, dann ist die Wahrscheinlichkeit eher nicht gering, dass auch das Testing der Software – ich meine hiermit die Art von Tests, die der Entwickler selber schreibt, um sein System zu verifizieren - ebenfalls als negativer Kostenfaktor geführt wird. Sollte das Gegenteil der Fall sein, dann könnte die fehlende Architektur und der entstehende **BBOM** das eingeworfene Fenster in der Nachbarschaft sein, das dazu führt, dass noch  mehr Fenster eingeworfen werden. Der Entwickler, der sich bewusst nicht innerhalb der Schichten bewegt, sondern vor allem dazwischen, sieht sich dazu veranlasst, seinen Code nicht durch Tests zu dokumentieren, weil er dem System die Sinnhaftigkeit ob der fehlenden Struktur aberkennt.

Wenn alle Projektbeteiligten sich darauf verständigen, dass Grenzen und Fachlichkeiten auch durch unstrukturiertes, organisches Wachstum erkannt werden können, und das System erst später "ent-steht", können Strukturen also später nachgezogen werden: Letztendlich ist eine zähe Masse etwas Formbaren ähnlich, und die Dynamik unserer Handwerkskunst steckt in dem Namen **Soft**ware. Besteht das Fundament möglichst nicht aus einem **Throw Away**, dann sollte auch allen Projektbeteiligten die Notwendigkeit von Tests klar sein: Die Räson aller Verantwortlichen verhindern somit ein erstes eingeworfenes Fenster, und es ist an Fachexperten und Programmierern, dass es nicht zu weiteren kommt. 


---- 
References

 - [Eberhard Wolff: "Software-Architektur im Stream, Folge 159: Big Ball of Mud"](https://software-architektur.tv/2023/03/31/folge159.html)
 - [Foote, Yoder: "Big Ball of Mud"; University of Illinois, 1999](http://www.laputan.org/mud/mud.html#SweepingItUnderTheRug)
