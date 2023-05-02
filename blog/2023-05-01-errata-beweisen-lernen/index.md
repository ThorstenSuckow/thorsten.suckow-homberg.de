---
title: "[DE] \"Beweisen lernen\" - Errata"
authors: [thorstensuckow]
tags: [mathematics]
enableComments: true
---

import {GlosRef, BibRef} from "../../src/components/References";
import {BackButton} from "../../src/components/BackButton.js";


:::info
Während der Arbeit mit dem Buch [Beweisen lernen (Springer Verlag 2020)](https://www.math.uni-konstanz.de/mmath/de/book/) von [Junk
](https://www.math.uni-konstanz.de/numerik/personen/junk/) und [Treude](https://www.math.uni-konstanz.de/~treude/vita.html) fallen mir hin und wieder (kleine) Fehler auf. Am [Ende dieses Posts](#errata) liste ich diese für die Autoren und Interessierte zur Überprüfung auf.
:::

### Aufgabe 178 und das kleine Manöver, das kostete

In der Lösung zu **Aufgabe 178** aus [Beweisen lernen](https://www.math.uni-konstanz.de/mmath/de/book/) - und der hierzu vorbereitenden **Aufgabe 158** - ist mir aufgefallen, dass der Definitionsbereich einer Funktion falsch angegeben wurde. Ich habe mich erst nach einiger Zeit getraut, "falsch" zu zeigen, weil ich natürlich zuerst von der Richtigkeit des Lösungsweges ausgegangen bin.

![](img/whiteboard.png)

Ich habe dies zum Anlass genommen, meine Notizen bzgl. eventueller Logik-, Schrift- und Flüchtigkeitsfehler in diesem Post zusammenzufassen.


### Aufgabe 158

##### Notation
$U$: Elementuniversum

$\Epsilon_n$: Menge aller endlichen Mengen mit der Mächtigkeit $n$

$P(K)$: Potenzmenge von $K$ mit $K \subset U$

### Aufgabenstellung
Es ist per Induktion zu beweisen, das

$\forall n \in \N_0: \forall k \in (N_0)_{\le n}: \forall X \in D_k: | S_k(X)| = 1$

Folgendes steht mit den Voraussetzungen zur Verfügung:

$f: X \mapsto R$

$D_n:=\{X \in \Epsilon_n : X \subset Def(f) \}$

$S_0: D_0 \to P(\R),\space X \mapsto \{0\}$

$S_{n+1}: D_{n+1} \to P(\R),\space X \mapsto \{f(x) + s \space | \space (x, s) \in X \times S_{n}(X \setminus \{x\})\}$

### Induktionsschritt
Die Autoren wollen die Eindeutigkeit des Elementes $x \in U: x \in S_{n+1}(X)$ über

$\exists! x \in U: x \in S_{n+1}(X)$

zeigen. Hierzu muss die Existenz und die Eindeutigkeit des Elementes gezeigt werden, so dass wegen $\forall u,v \in S_{n+1}(X): u = v$
auch $|S_{n+1}(X)| = 1$ folgt (u.a. wegen **Aufgabe 99** und **Aufgabe 153**).

### Argumentation
Hierzu sei

$u:= f(a)+s, v:= f(b)+t$

Die Autoren zeigen einige Schritte weiter, dass mit der Induktionsvoraussetzung für $s$ folgt:

Da $f(a) + s \in S_{n+1}(X)$, ist $s \in S_n(X \setminus \{a\})$.

Mit $b \in X \setminus \{a\}$ soll dann $s = f(b) + z$ gezeigt werden, wobei wieder die Induktionsvoraussetzung angewendet wird und $z \in S_{n-1}(X \setminus \{a\} \setminus \{b\})$ gefunden wird.

### Fehlerstelle
In einem weiteren Schritt wird dann behauptet, dass $f(b) + z \in S_{n-1}(X \setminus\{a\})$ ist, und deswegen $f(b)+z \in \{s\}$ und folglich $f(b) + z = s$. Das scheint der Fehler zu sein, denn für $s$ wurde gezeigt: $s \in S_n(X \setminus \{a\})$:

Wenn $s \in S_n(X \setminus \{a\})$ und $s \in S_{n-1}(X \setminus\{a\})$ gelten würde, dann würde für

$f(c)+s \in S_n(X \setminus \{a\})$ und $f(b)+t \in S_{n-1}(X \setminus \{a\})$ auch $f(c)+s = f(b)+t$ gelten (für $c, b \in X \setminus \{a\}$).

Da $s = f(b) + t$ wegen $f(b) + t \in S_{n-1}(X \setminus \{a\})$ und $s \in S_{n-1}(X \setminus\{a\})$ folgt dann auch
$f(c) + s = s$, was im Widerspruch zu $f(c) + s = f(c) + s$ steht und offensichtlich nicht $\forall c \in X \setminus \{a\}$ gilt.



## Errata


:::info
Stand 01.05.2023. Die neusten Notizen wurden zuerst in diese Liste überführt. Ich plane, die Liste sukzessive zu ergänzen.
:::


| Seite                         | Fehlerstelle                                                           | Korrekturvorschlag                           | Bemerkung                                                                                          |
|-------------------------------|------------------------------------------------------------------------|----------------------------------------------|----------------------------------------------------------------------------------------------------
| 302 (unten)                   | $p(f(b), z) \in P_{f, n-1}(X \setminus \{a\})$                         | $p(f(b), z) \in P_{f, n}(X \setminus \{a\})$ |                                                                                                    |
| 302 (mittig)                  | \[Wegen Aufgabe 153 gilt\] $\exists x \in U: P_{f, n}(X \setminus \{x\})$ | $\exists x \in U: P_{f, n}(X \setminus \{a\})$ | Die Menge, auf die Bezug genommen wird, ist hier $X \setminus \{a\}$                               |
| 299 (Lösung Aufgabe 172)      | zeigt Aufgabe 163                                                      | zeigt Aufgabe **171**                        |                                                                                                    |
| 297 (Lösung Aufgabe 168)      | sei dazu $A \in D_{\alpha * f, n + 1}$                                 | sei dazu $A \in D_{f, n + 1}$                       |                                                                                                    |
| 295 (unten)                   | $z + f(b) \in S_{n-1}(X \setminus \{a\})$                              | $z + f(b) \in S_{n}(X \setminus \{a\})$  |
| 288, 289 (Lösung Aufgabe 147) |                               |  | Es wird auf (3.16) Bezug genommen, aber $\forall n \in \N_{>1}: n - 1 \in \N$ ist Axiom **(3.18)** |

#### Rechtschreibung / Grammatik / Druckfehler


| Seite                    | Fehlerstelle                                  | Korrekturvorschlag                              | 
|--------------------------|-----------------------------------------------|-------------------------------------------------|
| 295 (Lösung Aufgabe 160) | die Argumentation wurde ist dir eventuell     | die Argumentation ~~wurde~~ ist dir eventuell   |
| 294                      | zu zeigen ist $P(A)\mid = 2^{\mid A \mid}$    | zu zeigen ist $\mid P(A)\mid = 2^{\mid A \mid}$ |
| 290                      | ergibt $m = \mid n \mid - \mid A \mid \in \N$ | ergibt $m = n - \mid A \mid \in \N$             |
| 284 (Lösung Aufgabe 132) | und mit Aufgabe 132 ergibt sich schliesslich   | und mit Aufgabe **131** ergibt sich schliesslich |