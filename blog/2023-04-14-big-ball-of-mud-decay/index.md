---
title: "[DE] Verfällt ein Big Ball of Mud?"
authors: [thorstensuckow]
tags: [Software Architecture, Comment, Personal]
---

import {GlosRef, BibRef} from "../../src/components/References";
import {BackButton} from "../../src/components/BackButton.js";


:::info 
_Ein Kommentar zu einem Kommentar zu [Eberhard Wolff's](https://ewolff.com/) [Episode 159 - Big Ball of Mud](https://software-architektur.tv/2023/03/31/folge159.html) als Teil von [Software-Architektur im Stream](https://software-architektur.tv)_. Eine englische Übersetzung findet sich [hier](/blog/2023/04/14/big-ball-of-mud-decay/index_en).
:::

## Verfällt ein Big Ball of Mud?

Durch den Fortschritt der Technologie und der Arbeit von Leuten wie [Brooks](https://en.wikipedia.org/wiki/Fred_Brooks), [Buschmann](https://en.wikipedia.org/wiki/Pattern-Oriented_Software_Architecture) und [Booch](https://en.wikipedia.org/wiki/Grady_Booch) wurde uns Entwicklern der Weg vom mikroskopischen ins makroskopische geebnet. Lang vorbei sind die Zeiten, in denen schrankhohe Rechnersysteme nah an der Infrastruktur programmiert werden mußten. <br />
Jedoch, wer heute den Mythischen Mann-Monat <BibRef name="MMM" /> liest und über die damals zur Verfügung stehende Technik schmunzelt, der wird spätestens bei der Aktualität der anderen erwähnten Probleme betreffs Organisation und Planung von Projekten rasch in die Gegenwart zurückgeworfen. Aus Eskapismus wird ein erhobener Finger: Das Lesevergnügen mahnt plötzlich zur Reflektion. Die Probleme von damals sind heute immer noch aktuell, und die Entwicklung der Technik verlief bis dato offensichtlich ungleich schneller als die von **Planung und Organisation**.

Die Motivation und das Wissen darum, wie man heutzutage Schablonen für die Erstellung von Objekten und Klassen nutzt und all seine Erfahrung in das Schneiden und Zusammenstecken derselben zur Abstraktion einer Fachlichkeit einfliessen lässt, ist dann nicht zuletzt auch der Gang of Four <BibRef name="Gof" /> zu verdanken, die Entwurfsmuster en vogue gemacht haben und in einer ganzen Generation von Programmierern das Interesse an Software Design zu wecken wussten. Aber: Der Schreiner mag in der Lage sein, einen Satz Fensterrahmen passend zu dem äusseren Erscheinungsbild des Hauses zu zimmern. Das hübscheste Fenster hilft aber nichts, wenn niemand weiss wie man es einbaut, geschweige denn öffnet und wieder schliesst.

Wir machen den gedanklichen Sprung zurück in unsere Domäne und wissen: Solche Elemente werden dann in Menge problematisch, wenn ihre Vereinigung in einem System funktional sein und natürlich ein möglichst wartbares Gesamtgebilde ergeben soll. Auch hier helfen Erfahrung und bewährte Blaupausen, damit sich Entwickler*in  nicht in einem undurchdringlichen Dickicht von Verantwortlichkeiten und Assoziationen verliert. <br />
Leider gelingt das nicht ganz so oft so gut.  Wenn wir nach einem frischen Pull über das Sein des Spaghetti-Codes eines Kollegen sinnieren, oder wir uns  selbst dabei ertappen, Schichten durch das freitag-mittagliche Voranstellen eines `new` vor einer low-level-Klasse in einer high-level-Klasse zu durchbrechen, dann ist man ihm schon einen Schritt näher, dem berüchtigten **<GlosRef name="Big Ball of Mud" file="sd.bigballofmud" />** (**BBOM**), den [Eberhard Wolff](https://ewolff.com) in der Folge 159 seiner Reihe [**Softwarearchitektur im Stream**](https://software-architektur.tv/2023/03/31/folge159.html) mit gewohnter Präzision vorgestellt und in Ursache und Wirkung analysiert hat.  

In der Folge beruft er sich auf das Paper von [Foote und Yoder](http://www.laputan.org/mud/), in dem - vor über 20 Jahren - die Frage gestellt wurde, inwieweit denn so ein **Big Ball of Mud** überhaupt ein **Anti-Pattern** sei: Das man diese quellcodegewordene Negation einer Struktur so häufig in Systemen vorfindet sollte doch eigentlich den Schluss zulassen, dass es sich hierbei gar nicht um ein **Anti-Pattern**, sondern gegebenenfalls um ein erprobtes und bewährtes Konzept in der Software-Entwicklung handelt, nämlich das des **geringsten Widerstandes**. Dieser kennzeichnet sich hier durch die Vermeidung von Up-Front Architektur. Stattdessen richtet sich der Fokus direkt auf die Umsetzung von Features und Funktionalität, auch, aber nicht ausschließlich, wenn Architektur als zu vermeidender Kostenfaktor verstanden wird: 

> _"Therefore, focus first on features and functionality, then focus on architecture and performance."_ [<sup>[1]</sup>](#bbompaper)

Man könnte daraus schließen, man solle mehr Verständnis für den Entwickler zeigen, der diesen Weg wählt oder wählen muß. Auch, wenn infolgedessen der Ansatz eines durch die Zuarbeit verschiedener Teams entstehenden Software-Fundamentes über das Fehlen von allgemein als geschäftswertig erachteter Best Practices mit jedem Commit ein bisschen mehr verhindert oder aufgelöst wird. Die Frage hat wohl auch _Foote und Yoder_ beschäftigt: 

> _"[…] we seek not to cast blame upon those who must wallow in these mires. In part, our attitude is to ‘hate the sin, but love the sinner‘"_. [<sup>[1]</sup>](#bbompaper)

Wenn der **Big Ball of Mud** als Konsequenz dieses Konzeptes als Struktur eines Systems erkannt wird, das keine Struktur beinhaltet, dann können wir _ex falso quodlibet_ auch jede beliebige Aussage als gültig annehmen, wenn wir uns bei der Beschreibung dieses Systems darauf berufen, dass diesem System eben eine Struktur innewohnt: Und also ist ein **Big Ball of Mud** eben ein Entwurfsmuster. **Aber!** So ein Gebilde bekommt man ganz gut beliebig hin, so wie ein Zimmermann sicher auch ohne Kenntnis darüber, wie man Mörtel anrührt, irgendwie in der Lage sein wird, Ziegelsteine um seine Fenster herum zu stapeln.

Unter gewissen Umständen kann das bewusste Zulassen zunehmender Entropie in einem Software System dabei helfen, Kontexte zu identifizieren und die Fachlichkeit zu verstehen, um Schichten herauszumeisseln und Grenzen zu schneiden. [Evans](https://www.domainlanguage.com/), [Fowler](https://martinfowler.com) und auch _Foote und Yoder_ sind sich in jedem Fall einer Sache sicher: **Refactoring** muss ständig erfolgen, um nicht die Kontrolle zu verlieren. 

> _"The way to arrest entropy in software is to refactor it."_ [<sup>[1]</sup>](#bbompaper)

Dabei ist man sich aber auch des zweiten Hauptsatzes der Thermodynamik bewusst: Die Entropie kann nicht abnehmen, sie kann gleich bleiben, oder sie kann zunehmen. Will man letzteres verhindern, rät Evans  dazu, den **BBOM** zu demarkieren:

> _"Draw a boundary around the entire mess and designate it a big ball of mud. Do not try to apply sophisticated modeling within this context. Be alert to the tendency for such systems to sprawl into other contexts."_ <BibRef name="DDDR" pp="38" />

_Foote und Yoder_ haben eine ähnliche Empfehlung, die sie in dem Paper etwas schwungvoller mit [_"Sweeping it under the rug"_](http://www.laputan.org/mud/mud.html#SweepingItUnderTheRug) bezeichnen:

> _"Therefore, if you can’t easily make a mess go away, at least cordon it off. This restricts the disorder to a fixed area, keeps it out of sight, and can set the stage for additional refactoring."_ [<sup>[1]</sup>](#bbompaper)

Egal ob Grenzen gezogen werden oder man den **BBOM** unter den Teppich schaufelt: Eben so kommen wir über grobgranulare Schnittstellen an ausgewählte Funktionalität, und wir lassen gleichzeitig nicht zu, dass die zähe Masse aus dem **BBOM** in unser System tropft und dort Gestalt annimmt (oder eben auch nicht). Konsequent katalogisiert [Robert C. Martin](https://en.wikipedia.org/wiki/Robert_C._Martin) dann auch **Viscosity** in die Kategorie **Design Smell** ein <BibRef name="ASD" pp="88" />.

[Mein Kommentar während der Folge lautete](https://youtu.be/Gqs8zLXei7Q?t=2200), dass es in Anbetracht all dessen ohnehin erschwerend hinzukommen kann, dem Management die Sinnhaftigkeit von Tests zu vermitteln.
Der Antwort von _Eberhard Wolff_ darauf entnahmen ich, dass in den von ihm beschriebenen Szenarien Tests _a priori_ als sinnvoll verstanden werden und damit Teil der Entwicklung sind (zumindest aber Tests durch entsprechende Fachkräfte): Umso wichtiger sind diese Tests, wenn sich schon zu Beginn des Projektes zeigt, dass wegen fehlender Architekturplanung und wahrscheinlich diffuser Funktions- und Modulgrenzen Funktionalität sichergestellt werden _muss_.

Von dieser Implikation bin ich in meinem Kommentar nicht ausgegangen. Was ich meinte, war: Wenn Architektur keinen Geschäftswert hat, und dies zu einem **BBOM** führt, dann kann das auch zu dem [Broken Window Effekt](https://en.wikipedia.org/wiki/Broken_windows_theory) führen. _Hunt und Thomas_ raten dazu: _"Dont live with broken Windows."_ <BibRef name="PP" pp="7" />, und _Foote und Yoder_ beziehen aus ähnlichen Erfahrungen die Ensicht:

> _"If such sprawl continues unabated, the structure of the system can become so badly compromised that it must be abandoned. As with a decaying neighborhood, a downward spiral ensues."_ [<sup>[1]</sup>](#bbompaper)

Wenn Geld und Zeit in einem Projekt knapp sind, und Architektur damit einhergehend als nicht zielführend verstanden wird, dann ist die Wahrscheinlichkeit eher nicht gering, dass auch das Testing der Software – ich meine hiermit die Art von Tests, die der Entwickler selber schreibt, um sein System zu verifizieren - ebenfalls als negativer Kostenfaktor geführt wird. Sollte das Gegenteil der Fall sein, dann könnte die fehlende Architektur und der entstehende **BBOM** das eingeworfene Fenster in der Nachbarschaft sein, das dazu führt, dass noch  mehr Fenster eingeworfen werden. Der Entwickler, der sich bewusst nicht innerhalb der Schichten bewegt, sondern vor allem dazwischen, sieht sich dazu veranlasst, seinen Code nicht durch Tests zu dokumentieren, weil er dem System die Sinnhaftigkeit ob der fehlenden Struktur aberkennt. Die Projektbeteiligten akzeptieren ein eingeworfenes Fenster wahrscheinlich eher, wenn daneben schon eins existiert.

Wenn alle Projektbeteiligten sich darauf verständigen, dass Grenzen und Fachlichkeiten auch durch unstrukturiertes, organisches Wachstum erkannt werden können, und das System erst später "ent-steht", können Strukturen also später nachgezogen werden: Letztendlich ist eine zähe Masse etwas Formbaren ähnlich, und die Dynamik unserer Handwerkskunst steckt in dem Namen **Soft**ware. Besteht das Fundament möglichst nicht aus einem **Throw Away**, dann sollte auch allen Projektbeteiligten die Notwendigkeit von Tests klar sein: Die Räson aller Verantwortlichen verhindern somit ein erstes eingeworfenes Fenster, und es ist an Fachexperten und Programmierern, dass es nicht zu weiteren kommt. 


---- 
References

 - [<sup>[1]</sup> Foote, Yoder: "Big Ball of Mud"; University of Illinois, 1999](http://www.laputan.org/mud/mud.html#SweepingItUnderTheRug) <a name="bbompaper"></a>
 - [Eberhard Wolff: "Software-Architektur im Stream, Folge 159: Big Ball of Mud"](https://software-architektur.tv/2023/03/31/folge159.html)
