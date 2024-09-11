---
slug: betrachtung-des-widerspruchsbeweis-des-speziellen-halteproblems-nach-vossen-und-witt
title: "[DE] Betrachtung des Widerspruchsbeweis des speziellen Halteproblems nach Vossen und Witt"
authors: [thorstensuckow]
tags: [automata theory, algorithms]
enableComments: true
---

import {GlosRef, BibRef} from "../../src/components/References";
import {BackButton} from "../../src/components/BackButton.js";


:::info 
Oft wird der Nachweis, dass das Halteproblem nicht entscheidbar ist, in der Fachliteratur (_Schöning_ <BibRef name="Sch08" pp="119 f." />, _Asteroth und Baier_ <BibRef name="BA02" pp="106 f." />, _Sipser_ <BibRef name="Sip12" pp="216 f." />) mithilfe einer Turingmaschine und einem Widerspruchsbeweis gezeigt, in etwa:

Angenommen,
$$
K' = \{w \in \Sigma^*  | w = \langle T \rangle, \text{$T$ stoppt bei Eingabe $w$}\}
$$
ist entscheidbar.  

Sei $T'$ ist die Turingmaschine, die $K'$ entscheidet.  
Sei $w = \langle T \rangle$ die Codierung[^3] einer Turingmaschine, die wie folgt arbeitet:
- $T$ simuliert das Verhalten von $T'$ bei der Eingabe $w$:
    - $T$ stoppt, wenn $T'$ die Eingabe $w$ verwirft ($w \notin K'$)
    - $T$ stoppt nicht, wenn $T'$ die Eingabe $w$ akzeptiert ($w \in K'$)

[^3]: Anstatt _Gödelnummer_ wird im Folgenden auch einfach der Begriff _Codierung_ verwendet, wobei streng genommen $\tau(T)$ die Codierung einer normierten Turingmaschine ist, bevor ihr eine Gödelnummer zugewiesen wird  

Damit folgt:
$T$ stoppt bei Eingabe $w$ $\Leftrightarrow$ $T'$ verwirft $w$ $\Leftrightarrow$ $w \notin K'$ $\Leftrightarrow$ $T$ stoppt nicht

**Widerspruch!**


Bei _Vossen und Witt_ wird der Beweis anhand unentscheidbarer Mengen gezeigt - hierzu wird in dem Abschnitt über **Berechenbarkeit** die Abzählbarkeit von Turingmaschinen und analog dazu die Standardnummerierung von $\mathcal{P}$[^1] als theoretischer Unterbau festgelegt, um darauf aufbauend den Nachweis der Semi-Entscheidbarkeit und Unentscheidbarkeit zu führen. 
Im Folgenden findet sich die Beweisführung nach _Vossen und Witt_ <BibRef name="VW16" pp="360 ff." /> mit ergänzenden Kommentaren. 
:::

[^1]: $\mathcal{P}$ bezeichnet die Menge der partiell-rekursiven Funktionen. Es gilt $\mathcal{PR} \subset \mathcal{R} \subset \mathcal{P}$, mit $\mathcal{PR}$ als die Menge der primitiv-rekursiven Funktionen, die eine echte Teilmenge der total berechenbaren Funktionen $\mathcal{R}$ sind

Die **Standardnummerierung** ist festgelegt als:

$$
(\mathbb{N}_0, \mathcal{P}, \varphi)
$$

- $\mathbb{N}_0$: Die Menge aller Turingmaschinen (ein $i \in \mathbb{N}_0$ repräsentiert die Gödelnummer einer Turingmaschine), wobei $\mathcal{T}$ die Menge aller normierten Turingmaschinen ist. Die Abbildung $h: \mathbb{N}_0 \rightarrow \mathcal{T}$ ist definiert durch
  $
  h(i) = \begin{cases}
  T, & \text{falls } p(\tau(T)) = i\\
  T_{\omega}, & \text{sonst}
  \end{cases}
  $
  bildet also auf eine natürliche Zahl eine Turingmaschine ab.
- $\mathcal{P}$: Die Menge aller berechenbaren Funktionen.
- $\varphi: \mathbb{N}_0 \rightarrow \mathcal{P}$ ist eine Abzählung aller berechenbaren Funktionen. $\varphi$ ist festgelegt durch
  $
  \varphi(i) = f \Leftrightarrow f_{h(i)} = f
  $
  Die berechenbare Funktion $\varphi(i)$ wird also durch die $i$-te Turingmaschine berechnet.

Die Standardnummerierung ist im Folgenden die Grundlage für die Formulierung von **Entscheidbarkeitsproblemen bei Mengen**.

## Das spezielle Halteproblem

Zunächst wird das **spezielle Halteproblem** (auch *Selbstanwendbarkeitsproblem*) betrachtet.  
*Vossen und Witt* definieren es über folgende Menge:

$$
K = \{i \mid i \in \text{Def}(\varphi_i)\}
$$

$K$ enthält alle Nummern von Turingmaschinen, die, angewendet auf sich selbst, anhalten:

- $i$ ist die Codierung einer Turingmaschine.
- $\varphi_i$ ist die berechenbare Funktion, die von der Turingmaschine $p(\tau(T)) = i$ berechnet wird.
- $\text{Def}(\varphi_i)$ ist der Definitionsbereich der Funktion $\varphi_i$, also alle erlaubten Eingaben.
- $i \in \text{Def}(\varphi_i)$ bedeutet: Die Codierung $i$ der Turingmaschine $p(\tau(T)) = i$, die $\varphi_i$ berechnet, ist eine erlaubte Eingabe.

*Vossen und Witt* definieren $K$ als die "Menge aller Turingmaschinen, die, [...] anhalten."  
Das bedeutet, dass von einer **entscheidbaren Menge** ausgegangen wird:  
Es wird angenommen, dass sowohl $K$ als auch $\overline{K}$ semi-entscheidbar sind und die **charakteristische Funktion** $\chi_K$ von $K$ berechenbar ist.

Mit **Satz 10.7** formulieren *Vossen und Witt* den Kern des Selbstanwendbarkeitsproblems, nämlich, dass $K$ zwar **semi-entscheidbar**, aber **nicht entscheidbar** ist:

:::tip **Satz 10.7:** <BibRef name="VW16" pp="361" />
- $K$ ist rekursiv aufzählbar
- $K$ ist nicht entscheidbar
:::

Damit wird behauptet:

- $K$ ist **semi-entscheidbar**, da **rekursiv-aufzählbar**.  
  Wenn $K$ semi-entscheidbar ist, ist auch die semi-charakteristische Funktion von $K$, $\chi'_K$, berechenbar.  
  Wenn $K$ semi-entscheidbar und damit rekursiv aufzählbar ist, dann gilt äquivalent dazu: $K$ ist der Definitionsbereich einer berechenbaren Funktion $g: \mathbb{N}_{0} \rightarrow \mathbb{N}_0$ (s. **Folgerung 10.2** <BibRef name="VW16" pp="356" />).
  Es reicht also aus, eine solche Funktion anzugeben, um die Semi-Entscheidbarkeit und damit auch die rekursive Aufzählbarkeit nachzuweisen.
- Wenn $K$ entscheidbar ist, dann ist auch die charakteristische Funktion $\chi_K$ berechenbar:  $\chi_K$ gibt $1$ aus, wenn die Turingmaschine $T$ angewendet auf $i = p(\tau(T))$ anhält (also wenn $\varphi_i(i)$ berechnet wird); und ansonsten ist $\chi_K(i) = 0$, wenn $T$ nicht anhält[^2].

[^2]: der Widerspruch liest sich hier bereits heraus.

### Beweisführung

Der Beweis wird wie folgt geführt:

**a)**  *Vossen und Witt* definieren die Funktion $f: \mathbb{N}_0 \rightarrow \mathbb{N}_0$ durch

$$
f(i) = u_{\varphi}(i, i)
$$

Bei $u_{\varphi}$ handelt es sich um die **universelle Funktion** von $(\mathbb{N}_0, \mathcal{P}, \varphi)$:

$$
u_{\varphi} : \mathbb{N}_0 \times \mathbb{N}_0 \rightarrow \mathbb{N}_0 \quad \text{definiert durch} \quad u_{\varphi} (i, x) = \varphi_i(x)
$$

$u_{\varphi}(i, j)$ berechnet die $i$-te berechenbare Funktion für die Eingabe $j$.

Mit $f$ als berechenbare Funktion kann gezeigt werden:

$$
\begin{align}
i \in K &\Leftrightarrow i \in \text{Def}(\varphi_i) \quad \text{(Definition $K$)}\\
 &\Leftrightarrow (i, i) \in \text{Def}(u_{\varphi}) \quad \text{(Definition $u_{\varphi}$)}\\
 &\Leftrightarrow i \in \text{Def}(f) \quad \text{(Definition $f$)}
\end{align}
$$

womit $K = \text{Def}(f)$ ist und damit $K$ **rekursiv-aufzählbar** und **semi-entscheidbar** ist.

**b)** Angenommen, $K$ ist entscheidbar. Dann ist $\chi_K$ berechenbar.  
*Vossen und Witt* definieren eine berechenbare (Hilfs-)Funktion

$
g: \mathbb{N}_0 \rightarrow \mathbb{N}_0
$

durch

$$
g(x) = \begin{cases}
u_{\varphi}(x, x) + 1, & \text{falls }\chi_K(x) = 1\\
0, & \text{falls }\chi_K(x) = 0
\end{cases}
$$

$g$ ist total berechenbar: Wenn $\chi_K(x) = 1$, dann ist $x \in \text{Def}(\varphi_x)$, und damit ist $u_\varphi(x, x) + 1 = \varphi_x(x) + 1$.

Da $g$ total berechenbar ist ($g \in \mathcal{R} \subset \mathcal{P}$), muss es ein $p \in \mathbb{N}_0$ geben mit $g = \varphi_p$. Es folgt

$$
g(x) = \varphi_p(x) \quad \forall x \in \mathbb{N}_0
$$

Für $g(p)$ werden nun zwei Fälle untersucht:

- **Fall 1:** **$g(p) = 0$**
   $$
   \begin{align}
   g(p) = 0 &\Leftrightarrow \chi_K(p) = 0 \quad \text{(Entscheidbarkeit $K$)}\\
   & \Leftrightarrow p \notin K \\
   & \Leftrightarrow p \notin \text{Def}(\varphi_p) \quad \text{($g = \varphi_p$)}\\
   & \Leftrightarrow p \notin \text{Def}(g) \\
   & \Leftrightarrow g(p) = \bot \quad \text{(Widerspruch zu $g$ total berechenbar)}
   \end{align}
   $$
   womit insgesamt die widersprüchliche Aussage folgt:
   $$
   g(p) = 0 \Leftrightarrow  g(p) = \bot
   $$

- **Fall 2:** **$g(p) = u_{\varphi}(p,p) + 1$**
   $$
   \begin{align}
   g(p) &= u_{\varphi}(p, p) + 1 \quad \text{(Definition $g$)}\\
   &= \varphi_p(p) + 1  \quad \text{($u_{\varphi}(p, p) = \varphi_p(p)$)}\\
   &= g(p) + 1   \quad \text{($\varphi_p = g$)}
   \end{align}
   $$
   womit insgesamt die widersprüchliche Aussage folgt:
   $$
   g(p) = g(p) + 1
   $$

Insgesamt wird durch den Beweis gezeigt: Die Anwendung von $g$ auf $p$ - also von $g$ **auf sich selbst** (wegen $g = \varphi_p = f_{h(p)}, \varphi_p(p) = u_{\varphi}(p, p)$) - führt in jedem Fall zu einem Widerspruch.  
Damit ist gezeigt, dass $\chi_K$ nicht berechenbar und folglich $K$ **nicht entscheidbar** ist.


:::info
Mit dem Wissen um die Unentscheidbarkeit und der Semi-Entscheidbarkeit von $K$ ist es nun möglich, eine Funktion $f$ anzugeben, mit der sich $K$ auf $H$ reduzieren lässt, so dass $K \leq_f H$.
Da $K$ unentscheidbar ist, ist auch $H$ unentscheidbar. Es muss gezeigt werden, dass auch $H$ semi-entscheidbar ist, da dies nicht allein aus der Reduktion von $K$ auf $H$ folgt (vgl. **Satz 10.5** <BibRef name="VW16" pp="358" /> sowie **Folgerung 10.3** <BibRef name="VW16" pp="359" />). Der Beweis erfolgt analog zum Nachweis der rekursiven Aufzählbarkeit von $K$ mit **Satz 10.8** <BibRef name="VW16" pp="363" />.  
:::