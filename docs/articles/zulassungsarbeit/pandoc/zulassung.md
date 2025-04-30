Eine Einführung in mathematische Modelle der biologischen Nervenzelle als Bausteine künstlicher neuronaler Netze und deren Anwendung im Gesundheitswesen

Thorsten Suckow-Homberg

Aachen, 28.09.2023

#### Eidesstattliche Erklärung

Hiermit versichere ich, die vorliegende Zulassungsarbeit selbstständig und nur unter Verwendung der von mir angegebenen Quellen und Hilfsmittel verfasst zu haben. Dies umfasst auch die Verwendung von KI-Anwendungen, die nach bestimmten Vorgaben automatisiert Inhalte erstellen können. Sowohl inhaltlich als auch wörtlich entnommene sowie von KI-Anwendungen generierte Inhalte wurden als solche kenntlich gemacht.Die Arbeit wurde bisher keiner anderen Prüfungsbehörde vorgelegt und auch noch nicht veröentlicht.

> Thorsten Suckow-Homberg Aachen, 28.09.2023

# Kurzfassung

Neuronale Netze sind in den vergangenen Jahren ein wesentlicher Bestandteil von Forschung und Anwendung in der Medizin geworden.

Die vorliegende Arbeit stellt einige solcher Netze sowie deren theoretischen Unterbauten vor und trägt hierfür Ergebnisse aus Wissenschaft und Forschung zusammen.

Der erste Teil konzentriert sich zunächst auf die Fachlichkeit, die Grundlage künstlicher neuronaler Netze ist: Das biologische Neuron mit seinen komplexen biochemischen Vorgängen, die Signalverarbeitung und -weiterleitung in einem Netz aus Nervenzellen ermöglichen.

Darauf aufbauend bietet der zweite Teil eine Einführung in das mathematische Gerüst des McCulloch-Pitts-Neurons und Rosenblatt-Perzeptrons, zwei frühe Modelle künstlicher Neuronen, die wesentlich zur Entwicklung künstlicher neuronaler Netze beigetragen haben. Hierfür werden die Forschungsarbeiten der Autoren in Auszügen vorgestellt, und Anwendungsbeispiele beleuchten die unterschiedlichen Eigenschaften hinsichtlich Statik des McCulloch-Pitts-Neurons und Anpassungsfähigkeit des Rosenblatt-Perzeptrons.

Im dritten Teil werden einige wegweisende Architekturen und Algorithmen künstlicher neuronaler Netze vorgestellt, darunter Backpropagation sowie Faltungsoperationen, die in den tiefen Netzen Anwendung nden, die heutzutage u.a. in der Medizin groÿe Erfolge vorweisen können.

In diesem Zusammenhang bezeugen im vierten und abschliessenden Teil ausgewählte Forschungsarbeiten und -Ergebnisse aus den Bereichen Gesundheitswirtschaft, der Pharmaforschung sowie der Diagnostik und Therapie die Leistungsfähigkeit künstlicher neuronaler Netze.

# Inhaltsverzeichnis

|                     |                                            | 1                                                                                                                               |          |  |
|---------------------|--------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------|----------|--|
|                     | Signalweiterleitung im biologischen Neuron |                                                                                                                                 |          |  |
| 2.1                 |                                            | Ionenkonzentrationen und Membranspannungen<br>3                                                                                 |          |  |
|                     |                                            | Das Aktionspotential .<br>6                                                                                                     |          |  |
|                     |                                            | Auslösung eines Aktionspotenzials .<br>7                                                                                        |          |  |
|                     |                                            | Signalweiterleitung über das Axon .<br>9                                                                                        |          |  |
|                     |                                            | Synaptische Übertragung und Integration .<br>9                                                                                  |          |  |
|                     | 2.3.1                                      | Synaptische Übertragung .<br>9                                                                                                  |          |  |
|                     | 2.3.2                                      | Synaptische Integration .<br>10                                                                                                 |          |  |
| Künstliche Neuronen |                                            |                                                                                                                                 |          |  |
|                     |                                            | 12<br>Das McCulloch-Pitts-Neuron .<br>12                                                                                        |          |  |
|                     |                                            | Der Kalkül<br>12                                                                                                                |          |  |
|                     |                                            | Anwendung des Modells<br>13                                                                                                     |          |  |
|                     |                                            | Aktivierungs- und Eingabefunktion<br>14                                                                                         |          |  |
|                     |                                            | McCulloch-Pitts-Netz als Graph .<br>16                                                                                          |          |  |
|                     |                                            | Implementierung von Booleschen Funktionen .<br>16                                                                               |          |  |
|                     |                                            | Das Rosenblatt-Perzeptron .<br>21                                                                                               |          |  |
|                     |                                            | Das Perzeptron - ein linearer Klassifizierer<br>21                                                                              |          |  |
|                     |                                            | Das Modell<br>21                                                                                                                |          |  |
|                     |                                            | Lineare Trennbarkeit<br>23                                                                                                      |          |  |
|                     |                                            | Die Lernregel<br>25                                                                                                             |          |  |
|                     | 3.2.5                                      | Die XOR-Funktion<br>28                                                                                                          |          |  |
|                     |                                            | Künstliche Neuronale Netze<br>30                                                                                                |          |  |
|                     |                                            | Renaissance der neuronalen Netze .<br>30                                                                                        |          |  |
|                     | Mehrschichtige neuronale Netze             |                                                                                                                                 |          |  |
|                     |                                            | 31<br>Backpropagation<br>31                                                                                                     |          |  |
|                     |                                            |                                                                                                                                 |          |  |
|                     |                                            |                                                                                                                                 |          |  |
|                     | 4.2.2<br>4.2.3                             | Hopeld-Netz<br>33<br>Neocognitron<br>35                                                                                         |          |  |
|                     | 2.2<br>2.3<br>3.1<br>3.2<br>4.1<br>4.2     | Einführung<br>2.2.1<br>2.2.2<br>2.3.1<br>3.1.1<br>3.1.2<br>3.1.3<br>3.1.4<br>3.1.5<br>3.2.1<br>3.2.2<br>3.2.3<br>3.2.4<br>4.2.1 |          |  |
| 5                   | Neuronale Netze im Gesundheitswesen        |                                                                                                                                 |          |  |
|                     | 5.1                                        | Automatisierung in der Gesundheitswirtschaft                                                                                    | 39<br>40 |  |
|                     | 5.2                                        | Pharmaforschung                                                                                                                 | 40       |  |
|                     | 5.3                                        | Diagnostik                                                                                                                      | 41       |  |
|                     | 5.4                                        | Therapie und Prognose                                                                                                           | 43       |  |
| 6                   |                                            | Zusammenfassung und Bemerkung                                                                                                   | 45       |  |
|                     | Anhang A                                   | Begriffe und Ergänzungen                                                                                                        | 51       |  |
|                     | A.1                                        | Aktionspotenzial                                                                                                                | 51       |  |
|                     |                                            | A.1.1<br>Übertragungsgeschwindigkeit von Signalen in Nervenzellen                                                               | 52       |  |
|                     | A.2                                        | ATPasen                                                                                                                         | 53       |  |
|                     | A.3                                        | Dendriten                                                                                                                       | 53       |  |
|                     | A.4                                        | Diffusion                                                                                                                       | 53       |  |
|                     | A.5                                        | Effekten                                                                                                                        | 53       |  |
|                     | A.6                                        | Expertensysteme                                                                                                                 | 54       |  |
|                     | A.7                                        | Goldman-Gleichung                                                                                                               | 54       |  |
|                     | A.8                                        | KI Winter                                                                                                                       | 55       |  |
|                     | A.9                                        | LeNet                                                                                                                           | 55       |  |
|                     |                                            | A.10 Lernrate                                                                                                                   | 56       |  |
|                     |                                            | A.11 Neurotransmitter und ihre Rezeptoren                                                                                       | 56       |  |
|                     |                                            | A.12 Perzeptron                                                                                                                 | 57       |  |
|                     |                                            | A.13 Shunting Inhibition                                                                                                        | 58       |  |
|                     |                                            | A.14 Soma                                                                                                                       | 58       |  |
|                     |                                            | A.15 Umkehrpotenzial                                                                                                            | 58       |  |
|                     | Anhang B                                   | Personen                                                                                                                        | 60       |  |
|                     | B.1                                        | Bernstein, Julius                                                                                                               | 60       |  |
|                     | B.2                                        | Hebb, Donald                                                                                                                    | 61       |  |
|                     | B.3                                        | Hodgkin, Alan und Huxley, Andrew                                                                                                | 62       |  |
|                     | B.4                                        | Hubel, David und Wiesel, Torsten                                                                                                | 63       |  |
|                     | B.5                                        | Loewi, Otto                                                                                                                     | 63       |  |
|                     | B.6                                        | McCulloch, Warren und Pitts, Walter                                                                                             | 64       |  |
|                     | B.7                                        | Nernst, Walther                                                                                                                 | 65       |  |
|                     | B.8                                        | Wiener, Norbert                                                                                                                 | 66       |  |
|                     | Anhang C                                   | Die Paradoxe Hitzeempfindung als MCP-Netz                                                                                       | 67       |  |
|                     | Anhang D                                   | Perzeptron-Implementierung in Python                                                                                            | 72       |  |

# <span id="page-5-0"></span>Einführung

Der Einsatz künstlicher neuronaler Netze als Teilgebiet der Künstlichen Intelligenz konnte in der Medizin in den letzten Jahren beachtliche Erfolge vorweisen. Diese Arbeit stellt einige dieser Erfolge vor. Sie möchte darüber hinaus eine Einführung in Themen und Aspekte aus den Bereichen Neurobiologie, Mathematik und Informatik bieten, um ein erstes Verständnis für Modelle und Verfahren zu schaen, die zu diesen Erfolgen beigetragen haben.

Wir beschäftigen uns deshalb zunächst mit dem Neuron als strukturelle und funktionelle Einheit des Nervensystems [\[SD07,](#page-93-0) 42]. Im Hinblick auf neuronale Netze ist für uns das natürliche Vorbild der Signalweiterleitung in Nervenzellen von Interesse, weshalb wir uns eingehend mit der Zellmembran und dem transmembranalen Transport von Ionen beschäftigen: Es wird sich zeigen, dass Änderungen der Nervenzellmembran-Eigenschaften hinsichtlich ihres Potenzials grundlegend sind für die Ausschüttung von hemmenden oder erregenden Neurotransmittern, die von den Rezeptoren nachgelagerter Nervenzellen weiterverarbeitet und dort gemäÿ eines Alles-oder-Nichts-Prinzips erneut Signale auslösen können.

Dies bildet die Grundlage für die Neuronenmodelle von McCulloch und Pitts sowie Rosenblatt im zweiten Teil der Arbeit, in dem der Schwerpunkt vor allem auf der mathematischen Modellierung von Eingabe- und Ausgabefunktion sowie deren Anwendung liegt: Ein nicht unwesentlicher Teil der zu erarbeitenden Fachlichkeit beschränkt sich also nicht bloÿ auf die hochkomplexen biochemischen Vorgänge, die in der biologischen Nervenzelle bei Signalverarbeitung und -weiterleitung stattnden. Einige diese Vorgänge werden in diesem Abschnitt in Formeln und Gleichungen der Aussagenlogik bzw. analytischen Geometrie überführt, damit sie in der Informatik Anwendung nden können.

Im dritten und vierten Teil werden darauf aufbauend Architektur und Algorithmen einiger künstlicher neuronaler Netze sowie deren überaus erfolgreiche Anwendung im Gesundheitswesen vorgestellt.

<span id="page-6-0"></span># Signalweiterleitung im biologischen Neuron

Eingehende Signale empfängt eine Nervenzelle über seine Dendriten: Baumförmige Fortsätze, die um den Zellkörper - das *Soma* - herum gelagert sind [1](#page-6-1). Sie fungieren *postsynaptisch* und empfangen über Rezeptoren *afferente* [2](#page-6-2) Signale in Form von *Neurotransmittern* [3](#page-6-3) (siehe Abbildung [2.1](#page-7-1)).Dendriten leiten die Signale weiter an das Soma, in dem sich, durch die Neuronenmembran [4](#page-6-4) von der Umgebung getrennt, Zytosol befindet: Eine salzige, wässrige Flüssigkeit mit einem hohen Anteil von Kalium [5](#page-6-5).Ob das Neuron Signale weiterleitet, entscheidet sich in der Nähe des Axonhügels[6](#page-6-6): Hier entspringt das *Axon*[7](#page-6-7), das in einer salzigen extrazellulären Flüssigkeit mit hoher Leitfähigkeit liegt [\[BCP18,](#page-84-0) 61][8](#page-6-8). Reicht die Integration der an den postsynaptischen Endigungen eingehenden Signale aus, kann eine Depolarisation[9](#page-6-9) der Membran an dieser Stelle[10](#page-6-10) erfolgen. Wird ein gewisser Schwellenwert **übertroffen**, wird ein **Aktionspotenzial** ausgelöst (vgl. [\[BCP18,](#page-84-0) 142 f.]), was in den präsynaptischen Endigungen die Exozytose[11](#page-6-11) auslöst.<span id="page-6-1"></span>

<sup>1</sup> siehe *Anhang* [A.14](#page-62-1)

<span id="page-6-2"></span>

<sup>2</sup> "*affere*" (lat.): herbeibringen, melden, bringen<span id="page-6-3"></span>

<sup>3</sup> vgl. [\[Eil19,](#page-86-0) 61]. Oft stehen tausende Neuronen in Verbindung mit den Dendriten eines einzelnen Neurons (vgl. [\[SD07,](#page-93-0) 42]). Die Anzahl der Neuronen im menschlichen Gehirn bezieht sich auf mindestens  $10^{11}$  (vgl. [\[Kan+13,](#page-89-0) 175]).<span id="page-6-4"></span>

<sup>4</sup> Membrandicke ca.  $5 \, nm$  (vgl. [\[FE19, 66\]](#page-87-0))<span id="page-6-5"></span>

<sup>5</sup> vgl. [\[BCP18, 29\]](#page-84-0). Siehe hierzu auch *Ionenkonzentrationen* in Tabelle [2.1.](#page-8-0)<span id="page-6-6"></span>

<sup>6</sup> ca.  $20 - 50 \, \mu m$  vom Soma entfernt (vgl. [\[Jon19, 77\]](#page-89-1))<span id="page-6-7"></span>

<sup>7</sup> "axon" (lat.): Achse; Axone können sich im menschlichen Körper über Entfernungen von bis zu über  $1 \, m$  ausstrecken (vgl. [\[BCP18,](#page-84-0) 28])<span id="page-6-8"></span>

<sup>8</sup> Bear et al. führen das Axon metaphorisch mit einer Telefonleitung zusammen (siehe [\[BCP18, 43\]](#page-84-0)). Aufgrund der signalempfangenden Eigenschaften und der dünnen Spitzen der Dendriten werden diese auch mit Antennen verglichen (siehe [\[BCP18, 28\]](#page-84-0)).<span id="page-6-9"></span>

<sup>9</sup> Depolarisation bezeichnet die Verringerung des Membranpotenzials von einem negativen Wert auf einen weniger negativen oder gar einen positiven Wert (vgl. [\[McC13, 95 f.\]](#page-91-0))<span id="page-6-10"></span>

<sup>10</sup> vgl. [\[Eil19, 61\]](#page-86-0)<span id="page-6-11"></span>

<sup>11</sup> bezeichnet den **Stofftransport** aus der Zelle heraus.![](_page_7_Figure_1.jpeg)

<span id="page-7-1"></span>Abb. 2.1. Schematische Darstellung einer Nervenzelle. (Quelle: in Anlehnung an [\[SD07,](#page-93-0) 43, Tafel 2.1])

Die Dendriten leiten aerente Signale zum Soma, dem Zellkörper. Das Axon leitet ein eerentes (eerre (lat.): hinaustragen, mitnehmen) Nervensignal über präsynaptische Endigungen (auch Axonterminale) an (häug weit entfernte) Eektoren wie Muskeln, Drüsen oder nachgeschaltete Neuronen weiter.

## <span id="page-7-0"></span>2.1 Ionenkonzentrationen und Membranspannungen

Ein Neuron weist in Ruhe[12](#page-7-2) eine ungleiche Ionenverteilung zwischen der durch die Zellmembran getrennten intrazellulären Flüssigkeit (das Zytosol, im folgenden auch IZF) und der extrazellulären Flüssigkeit (im folgenden EZF) auf. In der IZF *befinden* sich mehr positiv geladene Natrium-Ionen  $N\_a^{+}$ , und in der EZF mehr positiv geladene Kalium- und Calcium-Ionen  $K^{+}$  und  $Ca^{2+}$  sowie mehr negativ geladene Chlorid-Ionen  $Cl^{-}$ .Das Membranpotenzial des Neurons wird durch die Verteilung der Ionen in der IZF und EZF bestimmt: In der Membran benden sich Ionenkanäle, von de-

<span id="page-7-2"></span><sup>12</sup> vgl. Mempranpotenzial: die Spannung an der Nervenzellmembran zu einem beliebigen Zeitpunkt [\[BCP18,](#page-84-0) 70]; Ruhepotenzial: the electrical potential across the membrane in the absence of signaling [\[Kan+13,](#page-89-0) 126]

| Ion  | Konzentration EZF (mmol/l) | Konzentration IZF (mmol/l) | Verhältnis |
|------|----------------------------|----------------------------|------------|
| K+   | 5                          | 100                        | 1 : 20     |
| Na+  | 150                        | 15                         | 10 : 1     |
| Ca2+ | 2                          | 0.0002                     | 10000 : 1  |
| Cl−  | 150                        | 13                         | 11.5 : 1   |

<span id="page-8-0"></span>

Tabelle 2.1. Ionenkonzentration eines Neurons in *Ruhe* (Quelle: [\[BCP18, 75, Abb. 3.15\]](#page-84-0))nen viele selektiv permeabel[13](#page-8-1) sind. Daneben existieren Ionenpumpen wie die  $Ca^{2+}$ - und  $Na^{+}$ - $K^{+}$ -ATPasen. Sie sorgen dafür, dass im Neuron laufend  $Ca^{2+}$  und  $Na^{+}$  aus der Zelle und  $K^{+}$  in die Zelle befördert wird (vgl. [\[SD07, 44\]](#page-93-0)). Zusammen mit den selektiv permeablen Ionenkanälen entstehen so die Ionenkonzentrationen in Tabelle [2.1.](#page-8-0)Wenn kein *postsynaptisches Potenzial* (PSP) wirkt und das Neuron selber keinen Impuls abgibt, liegt das Ruhepotenzial  $V\_r$  der Zelle zwischen  $-70 \, \text{mV}$  und  $-90 \, \text{mV}$  [14](#page-8-2): Das Zytosol weist entlang der Membranoberfläche in der *IZF* eine negative Ladung auf [15](#page-8-3). Diese Membranspannung  $V\_m$  wird durch eine ungleiche Ionenverteilung bewirkt, verursacht durch die Ladung der Teilchen in der *IZF* und *EZF* in Membrannähe [16](#page-8-4) (siehe Abbildung [2.2](#page-9-0)).In Ruhe ist die Leitfähigkeit der Membran für  $N^{+}$  gering, für  $K^{+}$  hingegen hoch (vgl. [\[SD07, 44\]](#page-93-0)).  $K^{+}$ -Ionen folgen ihrem Konzentrationsgradienten und gelangen über die Ionenkanäle in die EZF, bis die Potenzialdifferenz entlang der Neuronenmembran ausströmende  $K^{+}$ -Ionen zurückhält: Wenn diese Differenz den Konzentrationsgradienten für  $K^{+}$  kompensiert, ist das Gleichgewichtspotenzial erreicht, und es findet keine Nettoionenbewegung statt[17](#page-8-5).<span id="page-8-1"></span>

<sup>13</sup> von *permeare* (lat.) durchwandern. Ein selektiv permeabler Kanal ist nur für bestimmte Ionen durchlässig (ionenselektiv). Kaliumkanäle sind durchlässig für  $K^{+}$ -Ionen, Natriumkanäle durchlässig für  $Na^{+}$ -Ionen usw. (vgl. [\[BCP18, 66\]](#!page-84-0)). Die Kanäle können über Änderungen in der Umgebung des Neurons geöffnet oder geschlossen werden, was auch als Gating bezeichnet wird (vgl. [\[Kan+13, 108\]](#!page-89-0))<span id="page-8-2"></span>

<sup>14</sup> vgl. [\[SD07,](#page-93-0) 47, Tafel 2.3 (A.1)]. Bear et al. geben  $-65 \, \text{mV}$  an  $(1 \, \text{mV} = 0{,}001 \, \text{V})$ , es wird von einer 40-mal höheren Ionenpermeabilität für  $K^{+}$  gegenüber  $Na^{+}$  ausgegangen (vgl. [\[BCP18,](#page-84-0) 74, Exkurs 3.2] sowie [\[BCP18,](#page-84-0) 70]).<span id="page-8-3"></span>

<sup>15</sup> vgl. [\[BCP18,](#page-84-0) 61]. Das Membranpotenzial  $V\_m$  ergibt sich als die Differenz der Spannungen  $V\_{IZF}$  und  $V\_{EZF}$ , wobei  $V\_{IZF}$  die Spannung in der IZF und  $V\_{EZF}$  die Spannung in der EZF ist.  $V\_r$  ist dann gleich zu  $V\_{IZF}$ : Wenn die Zelle in Ruhe ist, wird die Spannung in der EZF mit 0 festgelegt (vgl. [\[Kan+13,](#page-89-0) 127]).<span id="page-8-4"></span>

<sup>16</sup> vgl. [\[FE19,](#page-87-0) 66]. Bear et al. stellen fest: Die negativen Ladungen im Inneren des Neurons und die positiven Ladungen außerhalb des Neurons ziehen sich in Richtung Zellmembran gegenseitig an, [...] Dementsprechend ist die negative Nettoladung im Inneren der Zelle nicht gleichmäßig im Cytosol verteilt, sondern an der Innenseite der Membran lokalisiert. [\[BCP18,](#page-84-0) 72, Punkt 2]<span id="page-8-5"></span>

<sup>17</sup> vgl. [\[BCP18, 72\]](#page-84-0). Kandel et al. schreiben hierzu: "the equilibrium potential of any ion that is present on both sides of a membrane permeable to that ion" [\[Kan+13, 130\]](#page-89-0).![](_page_9_Figure_1.jpeg)

<span id="page-9-0"></span>

Abb. 2.2. Ionenverteilung im Zytosol und der EZF. (Quelle: in Anlehnung an [\[BCP18, 72, Abb. 3.13\]](#page-84-0))Aufgrund der elektrostatischen Anziehungskraft ziehen sich Anionen (neg. geladen) und Kationen (pos. geladen) in der Nähe der Membran gegenseitig an, es kommt zu einer negativen Spannung in Membrannähe (zwischen  $-70\,\text{mV}$  und  $-90\,\text{mV}$  in Ruhe). Dadurch ist die negative Ladung nicht gleichmäßig im Zytosol verteilt. Bear et al. weisen darauf hin, dass trotzdem der größte Teil des Zytosols und der EZF elektrisch neutral ist (vgl. [\[BCP18,](#page-84-0) 72, Abb. 3.13])Es gilt, dass sich das Membranpotenzial dem Gleichgewichtspotenzial desjenigen Ions annähert, für das die Membran besonders permeabel ist (vgl. [\[Kan+13,](#page-89-0) 145 f.]): Bestimmen lässt sich das Gleichgewichtspotenzial für individuelle Ionen mit der  $Nernst-Gleichung$ [18](#page-9-1) (s. Gleichung [2.1](#page-9-2) sowie Tabelle [2.2\)](#page-10-1):Bear et al. definieren [<sup>19</sup>](#page-9-3):<span id="page-9-2"></span>
$$E\_{Ion} = 2,303 \times \frac{RT}{zF} \times \log\_{10} \times \frac{[Ion]\_{EZF}}{[Ion]\_{IZF}} \tag{2.1}$$

Für eine Körpertemperatur von  $37^{ ext{°}}$  lässt sich die Nernst-Gleichung für das Gleichgewichtspotenzial  $E\_{K}$  wie folgt vereinfachen:
$$E\_K = 61,54mV \times \log\_{10} \frac{[K^+]\_{EZF}}{[K^+]\_{IZF}} \tag{2.2}$$

Mit den Werten aus Tabelle [2.1](#page-8-0) ergibt sich somit<span id="page-9-1"></span>

<sup>18</sup> vgl. [\[FE19, 67\]](#page-87-0).<span id="page-9-3"></span>

<sup>19</sup> siehe [\[BCP18, 74, Exkurs 3.2\]](#page-84-0)

| Variable / Konstante | Bedeutung                                     |
|----------------------|-----------------------------------------------|
| Eion                 | Gleichgewichtspotenzial für das jeweilige Ion |
| R                    | Gaskonstante                                  |
| T                    | absolute Temperatur                           |
| z                    | Ladungszahl des Ions                          |
| F                    | Faraday-Konstante                             |
| [Ion]Z               | Ionenkonzentration<br>ausserhalb<br>der Zelle |
| [Ion]_ <i>Z</i>      | Ionenkonzentration<br>innerhalb<br>der Zelle  |

<span id="page-10-1"></span>Tabelle 2.2. Nomenklatur Nernst-Gleichung

E: Equilibrium (Gleichgewicht); Faraday-Konstante: elektrische Ladung eines Mols einfach geladener Ionen; 1 Mol = 6, 02214076 × 10<sup>23</sup> Teilchen

$$E\_K = 61,54mV \times \log\_{10} \frac{1}{20} \approx -80mV\tag{2.3}$$

Zur Bestimmung von  $V^{m}$  einer für mehrere Ionen permeablen Membran kann die Goldman-Gleichung[20](#page-10-2) verwendet werden:

$$V\_r = \frac{RT}{F} \times \ln{\frac{P\_{Na} \times [Na^+]\_{EZF} + P\_K \times [K^+]\_{EZF} + P\_{Cl} \times [Cl^-]\_{IZF}}{P\_{Na} \times [Na^+]\_{IZF} + P\_K \times [K^+]\_{IZF} + P\_{Cl} \times [Cl^-]\_{EZF}}} \tag{2.4}$$

Eine weitere wichtige Eigenschaft der Membran ist die elektrische Leitfähigkeit  $g\_{Ion}$ ; für sie gilt, dass sie proportional zu der Anzahl der offenen Ionenkanäle für Ion ist (vgl. [\[BCP18,](#page-84-0) 93]).

## <span id="page-10-0"></span>2.2 Das Aktionspotenzial

In Ruhe ist die Ladung in Membrannähe in der IZF negativ, in der EZF positiv. Durch eine schnelle Umkehrung dieser Verhältnisse ist eine Nervenzelle dazu in der Lage, ein Signal auszulösen (vgl. [\[BCP18,](#page-84-0) 86]). Hierzu bedarf es eines Aktionspotenzials, das durch Ionenbewegungen entsteht. Die Ionenbewegungen selber sind auf die Änderung des Membranpotenzials zurückzuführen, wodurch ein Ö nen oder Schliessen von ionenspezischen Kanälen verursacht wird (vgl. [\[BCP18,](#page-84-0) 96]).

Kandel et al. führen 4 wichtige Eigenschaften des Aktionspotenzials auf (vgl. [\[Kan+13,](#page-89-0) 148 f.]):

<span id="page-10-2"></span><sup>20</sup> siehe Anhang [A.7](#page-58-1)

- 1. Es gibt einen Schwellenwert für die Auslösung des Potenzials.
- 2. Das Aktionspotenzial ist ein Alles-oder-Nichts Ereignis.
- 3. Das Aktionspotenzial wird ohne Verlust weitergeleitet.
- - 4. Nach dem Auslösen des Aktionspotenzials kommt es zu einer Refraktärzeit, in der zunächst kein weiteres Aktionspotenzial ausgelöst werden kann (*absolute Refraktärzeit*). Bevor  $V\_{r}$  wieder erreicht ist, wird für eine kurze Dauer ein stärkeres Signal benötigt, um das Aktionspotenzial erneut auszulösen (*relative Refraktärzeit*)[21](#page-11-1).

<span id="page-11-0"></span>#### 2.2.1 Auslösung eines Aktionspotenzials

![](_page_11_Figure_6.jpeg)

<span id="page-11-4"></span>

Abb. 2.3. *Aktionspotenzial*. (Quelle: in Anlehnung an [\[SD07, 47, Tafel 2.3\]](#page-93-0))Die *Initiationszone* des Aktionspotenzials ist der Axonhügel. Hier findet sich eine besonders dichte Ansammlung von spannungsabhängigen  $N<sup>+</sup>$ -Kanälen [22](#page-11-2), deren Aktivierungskurve um ca.  $10 \, \text{mV}$  zu den negativen Membranpotenzialen verschoben ist, was die Initiierung des Signals begünstigt (vgl. [\[Jon19,](#page-89-1) 77]).Damit ein Aktionspotenzial ausgelöst werden kann, muss die Membran nahe der Initiationszone über ihren Schwellenwert [23](#page-11-3)  $V\_t 
( > \, V\_r )$  depolarisiert werden (vgl. [\[BCP18, 111\]](#page-84-0)).<span id="page-11-1"></span>

<sup>21</sup> beide Zeitabschnitte sind Teil der Nachhyperpolarisation, dargestellt in Abbildung [2.3.](#page-11-4) Bei der Hyperpolarisation ändert sich das Membranpotenzial auf negative Werte in Richtung  $V\_r$  und darunter und wird in diesem Kontext als Hemmung verstanden.<span id="page-11-2"></span>

<sup>22</sup> pro Quadratmikrometer  $(5m^2)$  kann eine Membran viele tausend Natriumkanäle enthalten (vgl. [\[BCP18, 99\]](#page-84-0))<span id="page-11-3"></span>

<sup>23</sup> das kritische Niveau der Depolarisation, das überschritten werden muss, um ein Aktionspotenzial auszulösen[\[BCP18, 88\]](#page-84-0) oder auch Erregungsschwelle[\[FE19, 69\]](#page-87-0)Als Schwellenwert wird das Membranpotenzial bezeichnet, bei dem die Permeabilität für  $Na^{+}$  größer als für  $K^{+}$  ist (vgl. [\[BCP18,](#page-84-0) 103])[24](#page-12-0);  $V\_t$  liegt bei ca.  $-50 \, \text{mV}$ , unabhängig vom Typ des Neurons (vgl. [\[Jon19,](#page-89-1) 75]). Damit sich  $V\_r$  an  $V\_t$  nähert, bedarf es einer Erregung der Zelle durch postsynaptische Potenziale (vgl. [\[FE19,](#page-87-0) 69]) oder eine aus der Umgebung weitergeleitete (elektrotonische) Erregung [\[SD07,](#page-93-0) 46].Die Stärke der Erregung der Zelle ist entscheidend für das Auslösen eines Aktionspotenzials. Es muss mehr Na<sup>+</sup> in die Zelle einströmen, als K<sup>+</sup> aus der Zelle ausströmen kann (vgl. [\[FE19, 69\]](#page-87-0)). Versuche zeigen, dass die Potenzialänderung der Membran in einem Bereich von  $-80 \, \text{mV}$  zu  $-65 \, \text{mV}$  in dieser Hinsicht kaum Änderung bewirkt (vgl. [\[BCP18, 99\]](#page-84-0)).  $g\_{Na}$  erhöht sich, aber wenn  $V^{r}$  nicht erreicht wird, bleibt es bei dieser lokalen Antwort [\[SD07, 46\]](#page-93-0). Erst eine Depolarisation der Membran hin über diesen Wert[25](#page-12-1), kann die Initiationsphase[26](#page-12-2) des Aktionspotenzials einleiten: Es öffnen sich mehr Natrium-Kanäle, und durch die negative Ladung der Membran-Innenseite gibt es eine starke elektrochemische Triebkraft für  $Na^{+}$ -Ionen (vgl. [\[BCP18, 103\]](#page-84-0)). Die Triebkraft ist zu diesem Zeitpunkt die Differenz des Membranpotenzials  $V^{m}$  und  $E\_{Na}$ . Bei  $-60$  mV beträgt die Triebkraft[27](#page-12-3):
$$
V\_{m} - E\_{Na} = -60 \text{ mV} - 61.54 \text{ mV} = -121.54 \text{ mV} \end{equation} \tag{2.5}
$$

Da sich durch zunehmende Öffnung der Natrium-Kanäle  $g\_{Na}$  erhöht, strömen aufgrund der hohen Triebkraft für  $N\_{a}^{+}$  mehr  $N\_{a}^{+}$ -Ionen in das Zellinnere. Es kommt zu einem Rückkopplungseffekt, denn die zunehmend weniger negative Membranspannung *öffnet* weitere Natrium-Kanäle, die Leitfähigkeit der Membran wird weiter erhöht und es kommt zu einem exponentiellen Anstieg der  $N\_{a}^{+}$ -Konzentration in der IZF. Der explosionsartige Natriumeinstrom bewirkt die Depolarisation der Membranspannung und das Aktionspotenzial wird ausgelöst (vgl. [\[FE19,](#page-87-0) 69])[28](#page-12-4).Die Stärke des Signals selber ist unabhängig von dem Wert, der zu der überschwelligen Reizung des Neurons geführt hat: Amplitude und Zeitverlauf des Signals im Axon hängen nicht von Intensität und Dauer des Reizes ab (vgl. [\[Jon19, 75\]](#page-89-1)). Entweder kommt es zu einem *Aktionspotenzial*, oder es bleibt bei einer lokalen Antwort. Aus diesem Grund funktionieren *Aktionspotenziale* nach dem *Alles-oder-Nichts-Prinzip*<sup>[29](#page-12-5)</sup>:A fraction of a millivolt can be the **differ**ence between a subthreshold stimulus and a stimulus that generates a full-sized action potential. ([\[Kan+13, 157\]](#page-89-0))<span id="page-12-0"></span>

<sup>24</sup>  $V^{r}$  ist in Ruhe nahe an  $E\_{K}$ .<span id="page-12-1"></span>

<sup>25</sup> ab  $-60$  mV gehen die Natrium-Kanäle in den *Offen-Zustand* über (vgl. [\[FE19,](#page-87-0) 69]).<span id="page-12-2"></span>

<sup>26</sup> siehe [\[FE19\]](#page-87-0), 68<span id="page-12-3"></span>

<sup>27</sup> vgl. [\[Fak19, 39\]](#page-86-1)<span id="page-12-4"></span>

<sup>28</sup> siehe hierzu auch Anhang [A.1](#page-55-1)<span id="page-12-5"></span>

<sup>29</sup> vgl. [\[BCP18,](#page-84-0) 89]. Außerdem: Im Computerzeitalter bezeichnet man das axonale Aktionspotenzial auch als *'digitales'* Signal. [\[Jon19,](#page-89-1) 75]. Frank bietet eine Übersicht über die Erforschung des Alles-oder-Nichts-Prinzips in [\[Fra94\]](#page-87-1). Dort wird Lucas erwähnt, der bereits 1905 in [\[Luc05\]](#page-91-1) die Kontraktionen von Muskelfasern unter diesem Gesichtspunkt untersucht hat (vgl. [\[Fra94,](#page-87-1) 210])<span id="page-13-0"></span>#### 2.2.2 Signalweiterleitung über das Axon

Kurz nach der Aktionspotenzialbildung *befinden* sich daran beteiligte Membrane in der Refraktärphase, ihre  $N$ <sup>+</sup>-Kanäle sind inaktiviert. Somit pflanzt sich das Aktionspotenzial nur in eine Richtung fort $^{30}$  (vgl. [\[BCP18, 106\]](#page-84-0)). Die Fortleitung geschieht in Richtung der Axonterminal, wo sich die präsynaptischen Endigungen *befinden* und das elektrische Signal in chemische Signale umgewandelt werden (siehe Abbildung [2.1\)](#page-7-1).<span id="page-13-1"></span>## 2.3 Synaptische Übertragung und Integration

<span id="page-13-2"></span>#### 2.3.1 Synaptische Übertragung

Neben elektrischen Synapsen, bei denen der Signalaustausch durch einen direkten Stromfluss über sogenannte *gap junctions* und deren ionenleitfähige Verbindungen<sup>31</sup> passiert (vgl. [\[BCP18, 119\]](#page-84-0)), erfolgt die Signalweiterleitung im Gehirn überwiegend auf chemische Weise (vgl. [\[BCP18, 121 ff.\]](#page-84-0)).Chemische Synapsen sind nicht direkt miteinander verbunden. Zwischen ihnen existiert ein Spalt, der ca. 20 - 40  $nm$  breit ist (vgl. [\[Kan+13,](#page-89-0) 184]), und in der sich eine Matrix aus extrazellulären Proteinen befindet [32](#page-13-5), die den Synapsenspalt überbrückt (vgl. [\[BCP18,](#page-84-0) 122]). Die Übertragung von Signalen erfolgt über Exozytose: Botenstoffe *(Neurotransmittern)* diffundieren aus den präsynaptischen Endigungen in diesen Spalt (vgl. [\[BCP18,](#page-84-0) 122]). Rezeptoren an den postsynaptischen Endigungen wandeln die Botenstoffe in hemmende oder erregende Signale um, die dann von der postsynaptischen Zelle nach dem Alles-oder-Nichts-Prinzip integriert werden  $33$ .Die durch das Aktionspotenzial ausgelöste Depolarisation der Membran an den Axonterminalen bewirkt eine **Öffnung** spannungsgeladener Calcium-Kanäle (vgl. [\[Kan+13, 184\]](#page-89-0)). Durch die ungleiche  $Ca$ <sup>2+</sup>-Ionenkonzentration zwischen der EZF und IZF  $(10.000 : 1, siehe Tabelle 2.1)$  entsteht eine hohe Triebkraft für  $Ca$ <sup>2+</sup>: Nach Gleichung  $2.1$  ergibt sich für das Gleichgewichtspotenzial für  $Ca$ <sup>2+</sup>:
$$E\_{Ca^{2+}} = 123.08 ext{ mV} \tag{2.6}$$

und bei einem Membranpotenzial von  $V$ <sup>m</sup> ≈  $20$   $mV$  durch Depolarisation liegt die Triebkraft für  $Ca$ <sup>2+</sup> bei ≈  $-100$   $mV$  :
$$V\_m - E\_{Ca^{2+}} = 20mV - 123,08mV = -103,08mV\tag{2.7}$$

<span id="page-13-3"></span>

<sup>30</sup> orthodrome Fortleitung. Bear et al. verweisen auf antidrome Fortleitung (entgegengesetzte Verlaufsrichtung), die in Experimenten ausgelöst werden kann [\[BCP18, 106\]](#page-84-0).<span id="page-13-4"></span>

<sup>31</sup> "Konnexone"; vgl. [\[SD07, 50\]](#page-93-0)<span id="page-13-5"></span>

<sup>32</sup> die extrazelluläre Matrix. Hierbei handelt sich um den Gewebeanteil im Interzellularraum, also der Raum ausserhalb der Zellen: The extracellular matrix [...] surrounds all connective tissue cells providing mechanical support and physical strength to tissues, organs and the organism as a whole [\[Aya+98, 3\]](#page-84-1)<span id="page-13-6"></span>

<sup>33</sup> siehe hierzu auch Anhang [A.11](#page-60-1)Die Calcium-Ionen strömen in das Innere der Zelle und lösen die Exozytose von synaptischen Vesikeln[34](#page-14-1) aus, kleine, mit einer Membran von der IZF getrennte Strukturen von etwa 50nm Durchmesser, die mit Neurotransmittern gefüllt sind (vgl. [\[BCP18,](#page-84-0) 1000]). Im synaptischen Endknöpfchen benden sich 100200 von diesen Bläschen, die jeweils tausende Moleküle eines Neurotransmitters beinhalten (vgl. [\[Kan+13,](#page-89-0) 184]).

Der Calciumeinstrom in die präsynaptische Endigung löst die Verschmelzung dieser Bläschen mit der Zellmembran des Endknöpfchens an der sogenannten aktiven Zone[35](#page-14-2) aus: Ein spezialisierter Abschnitt der Membran, der direkt gegenüber der postsynaptischen Dichte liegt[36](#page-14-3)[37](#page-14-4)

#### <span id="page-14-0"></span>2.3.2 Synaptische Integration

Die Neurotransmitter eines einzelnen Vesikels lösen einen minimalen exzitatorischen oder inhibitorischen postsynaptischen Strom aus (mEPSC bzw. mIPSC, miniature excitatory / inhibitory postsynaptic current)[38](#page-14-5).

Wesentlich für die Entstehung eines neuen Aktionspotenzials in der postsynaptischen Zelle ist die Verrechnung dieser Signale, die räumlich oder zeitlich eintreen. Hierbei ist die räumliche Summation die Integration von vielen fast gleichzeitig eintreenden Signalen mehrerer präsynaptischer Zellen, die sich in der Folgezelle zu einem exzitatorischen postsynaptischen Potenzial (EPSP) aufaddieren (vgl. [\[HS19a,](#page-88-0) 101]). Unter der zeitlichen Summation versteht man die in gewissen Abständen von ein und derselben Synapse hintereinander eintreenden EPSPs, die jeweils das Membranpotenzial für nachfolgende Signale zum Schwellenwert hin verschieben[39](#page-14-6).

Ob der Schwellenwert der postsynaptischen Zelle überschritten werden kann ist auch abhängig von dem Einuss der inhibitorischen Synapsen auf die Zelle: Inhibitorische Eingaben, die hyperpolarisierend wirken, werden von den exzitatorischen Eingaben subtrahiert[40](#page-14-7)[41](#page-14-8) (vgl. [\[Kan+13,](#page-89-0) 225]).

<span id="page-14-1"></span><sup>34</sup> vesicula (lat.): Bläschen

<span id="page-14-2"></span><sup>35</sup> Bear et al. beschreiben das Aussehen der aktiven Zone als ein Feld winziger Pyramiden [\[BCP18,](#page-84-0) 123]; Rohkamm und Kerner erklären die direkte Einwirkung (ionotrop) und indirekte Einwirkung (metabotrop) der Neurotransmitter (siehe [\[RK18,](#page-92-0) 134])

<span id="page-14-3"></span><sup>36</sup> damit ist der Abschnitt der postsynaptischen Endigung gemeint, in der sich die Rezeptoren benden (vgl. [\[HS19a,](#page-88-0) 96])

<span id="page-14-4"></span><sup>37</sup> Kurz nach Beginn der Transmitterübertragung über den synaptischen Spalt ndet die Endozytose statt, ein Recyclingprozess, in dem die individuellen Vesikelmembranen wiederhergestellt und mit Neurotransmitter erneut aufgefüllt werden (vgl. [\[BCP18,](#page-84-0) 133]).

<span id="page-14-5"></span><sup>38</sup> EPSCs und IPSCs setzen sich aus einzelnen dieser mEPSC bzw. mIPSC zusammen und bilden die kleinste Einheit der postsynaptischen Ströme, weshalb man sie als Quanten bezeichnet [\[HS19a,](#page-88-0) 98]. Da EPSPs ein Vielfaches des Quantums sind, das die Menge an Transmitter in einem einzigen Vesikel und die Anzahl der postsynaptischen Rezeptoren an der Synapse widerspiegelt, nennt man sie gequantelt [\[BCP18,](#page-84-0) 142]. Mit Hilfe der Quantelungsanalyse lässt sich die Anzahl der an einer synaptischen Übertragung beteiligten Vesikel bestimmen (vgl. [\[BCP18,](#page-84-0) 142]).

<span id="page-14-6"></span><sup>39</sup> vgl. [\[BCP18,](#page-84-0) 142] sowie [\[HS19a,](#page-88-0) 101]

<span id="page-14-7"></span><sup>40</sup> Bear et al. stellen in [\[BCP18,](#page-84-0) 146, Exkurs 5.6] die Rolle inhibitorischer Synapsen anschaulich dar.

<span id="page-14-8"></span><sup>41</sup> Daneben ist auch der Abstand der Synapsen von der Initiationszone sowie die Eigenschaften der dendritischen Membran zu berücksichtigen. So kann die EPSP-Amplitude kleiner werden, wenn Strom

Das Zusammenspiel zwischen *exzitatorischen* und *inhibitorischen* Synapsen wird auch durch das Umkehrpotenzial  $V\_{rev}$  bestimmt[42](#page-15-0): Im Allgemeinen gilt, dass an erregenden Synapsen unspezifische Kationenkanäle öffnen, deren Umkehrpotenzial im Bereich von 0 mV liegt: Hier kommt es zu einer Depolarisation. An hemmenden Synapsen öffnen  $Cl^{-}$  oder  $K^{+}$ -Kanäle und es gilt dort  $V\_{rev} 
eq V\_{r}$ , wonach es meist zu einer Hyperpolarisation kommt (vgl. [\[HS19a,](#page-88-0) 100]).Die Verrechnung von EPSP und IPSP *(inhibitorisches postsynaptisches Potenzial)* erfolgt nicht ausschließlich linear durch Summation - inhibitorische Synapsen können auch für einen **Kurzschluss** sorgen und somit ein EPSP um ein Vielfaches verkleinern (vgl. [\[Sil10, 477\]](#page-94-0)). Man spricht dann von einer **Kurzschlusshemmung** *(shunting inhibition)* [43](#page-15-1).auf dem Weg zu dem Axonhügel durch die Membran verloren geht (vgl. [\[BCP18, 142 f.\]](#page-84-0)). Bear et al. vergleichen die Dendriten diesbzgl. mit einem "löchrigen Gartenschlauch" (vgl. [\[BCP18, 143\]](#page-84-0)).<span id="page-15-0"></span>

<sup>42</sup> siehe Anhang [A.15](#page-62-2)<span id="page-15-1"></span>

<sup>43</sup> siehe Anhang [A.13](#page-62-0)<span id="page-16-0"></span># Künstliche Neuronen

<span id="page-16-1"></span>## 3.1 Das McCulloch-Pitts-Neuron

Im Jahr 1943 veröffentlichen **Warren McCulloch** und **Walter Pitts**[1](#page-16-3) ihre Arbeit [\[MP43\]](#page-91-2). Sie stellen darin ein auf *Aussagenlogik*[2](#page-16-4) basierendes mathematisches Modell zur Erklärung von Signalverarbeitung und -weiterleitung im Nervensystem vor, und liefern damit grundlegende Ideen für die Kybernetik[3](#page-16-5) und die Von-Neumann-Rechnerarchitektur[4](#page-16-6). Ihre Arbeit leistet insgesamt einen wichtigen Beitrag für die Entwicklung *Künstlicher Intelligenz* (vgl. [\[Arb00,](#page-84-2) 1]).<span id="page-16-2"></span>3.1.1 Der Kalkül

In der Principia Mathematica[5](#page-16-7) stellen **Russell** und **Bertrand** die Mathematik auf ein Gerüst logischer Grundprinzipien (vgl. [\[She26,](#page-93-1) 225]). Inspiriert dadurch beschäftigt sich **McCulloch** mit der Frage, ob es nicht auch möglich sei, die Vorgänge im Gehirn durch Anwendung logischer Prinzipien erklärbar zu machen (vgl. [\[Arb00,](#page-84-2) 4]). Die Zweiwertigkeit des Alles-oder-Nichts-Prinzips (siehe Abschnitt [2.2\)](#page-10-0) führt zu dem Kalkül:The *all-or-none law* of nervous activity is **sufficient** to insure that the activity of any neuron may be represented as a proposition. ([\[MP43,](#page-91-2) 100])McCulloch und Pitts gehen für ihren Kalkül von folgenden physischen Eigenschaften einer Nervenzelle aus [6](#page-16-8) (vgl. [\[MP43,](#page-91-2) 101]):<span id="page-16-3"></span>

<sup>1</sup> siehe Anhang [B.6](#page-68-0)<span id="page-16-4"></span>

<sup>2</sup> Die (zweiwertige) Aussagenlogik beschäftigt sich mit der Verknüpfung von Aussagen und deren Wertigkeit unter der Berücksichtigung der Wahrheitswerte *"wahr"* und *"falsch"* (vgl. [\[Rau08,](#page-92-1) 2]).<span id="page-16-5"></span>

<sup>3</sup> siehe Anhang [B.8](#page-70-0)<span id="page-16-6"></span>

<sup>4</sup> Die Architektur zeichnet sich durch eine Zentraleinheit, der Speichereinheit und Ein-/Ausgabeinheit aus, die über Busse verbunden sind (vgl. [\[OV00, 230\]](#page-92-2))<span id="page-16-7"></span>

<sup>5</sup> Die *Principia Mathematica* [\[WR27\]](#page-95-0) *(PM)* der Philosophen und Mathematiker Bertrand Russell (1872 - 1970) und Alfred Whitehead (1861 - 1947) ist ein Werk über die Grundlagen der Mathematik und erschien in drei Bänden zwischen 1910 und 1913.<span id="page-16-8"></span>

<sup>6</sup> Für ihren Kalkül entwerfen sie zwei Netze: Ein zyklenfreies Netz (vgl. [\[MP43, 101\]](#page-91-2)) sowie ein Netz, in dem Zyklen vorhanden sind (vgl. [\[MP43, 108\]](#page-91-2)), wobei die Frage nach Ursprung und Bedeutung von *loops* – also Zyklen – in einem Netz von Nervenzellen McCulloch bereits seit 1928 beschäftigt: The- 1. Ein Neuron arbeitet auf Basis des Alles-oder-Nichts-Prinzip.
- 2. Eine gewisse Anzahl von Synapsen muss innerhalb einer bestimmten Zeit angeregt werden, um ein Neuron zu erregen.
- 3. Die einzige signikante Verzögerung bei der Signalübertragung innerhalb des Nervensystems ist bedingt durch synaptische Verzögerungen.
- 4. Eine einzige hemmende Synapse verhindert die Erregung des betreenden Neurons
- 5. Die Struktur des neuronalen Netzes ändert sich nicht.

<span id="page-17-0"></span>#### 3.1.2 Anwendung des Modells

Im folgenden wollen wir das Modell von McCulloch und Pitts anwenden. Hierzu überführen wir die für die Original-Arbeit aus der PM entnommene Notation für *Aussagenlogik* [7](#page-17-1) in eine geläufigere Form: Wir nutzen  $\land$  für *Konjunktion*,  $\lor$  für *Disjunktion* sowie  $\neg$  für die *Negation*.  $\equiv$  verwenden wir im Sinne der *Äquivalenz*. Für *McCulloch-Pitts-Neuron* verwenden wir im Folgenden abkürzend *MCP-Zelle*; für ein Netz, das aus *MCP-Zellen* besteht, einfach *MCP-Netz*.In Anlehnung an das Original legen wir folgende Anforderungen für die Anwendung fest [8](#page-17-2)- - 1. Das Verhalten des künstlichen Neurons ist zweiwertig, also *binär*. Das Neuron feuert, oder es feuert nicht. Im Sinne der Beziehung zwischen Eingabe und Ausgabe verstehen wir unter *„feuern“* den Wert  $1$ . Wenn ein Neuron nicht feuert, wird dies durch den Wert  $0$  repräsentiert, der ebenfalls als Ausgabe vorliegt. In diesem Sinne produziert unser Modell also immer ein *„Signal“*[9](#page-17-3).
- 2. An einem Neuron liegen (beliebig viele) Eingaben an.
- 3. Jedes Neuron hat einen individuellen Schwellenwert. Der Schwellenwert muss getroen oder übertroen werden, damit ein Neuron eine 1 feuert.
- 4. Hemmung ist absolut: Liegt ein hemmendes Signal zusammen mit nichthemmenden Signalen an, feuert das Neuron nicht[10](#page-17-4).

tremors of Parkinson's disease, McCulloch thought, could be explained by closed loops of activity connecting the spinal cord and the contracting muscles. [\[Pic04, 178\]](#page-92-3). Arbib vermerkt in [\[Arb00, 3\]](#page-84-2): As another stage in McCulloch's search for the logic of the nervous system, he began thinking about loops in the nervous system. [...] an idea that today we take for granted. Arbib verweist auf Lawrence Kubie, der im Jahr 1930 [\[Kub30\]](#page-90-0) veröffentlicht, eine Arbeit über the possible importance of reverberating loops [\[Arb00, 5\]](#page-84-2), die für die Forschungen McCullochs wichtig gewesen ist (vgl. [\[Arb00, 5\]](#page-84-2))<span id="page-17-1"></span>

<sup>7</sup> Die übernommene Notation gilt als sperrig [\[AR88, 16\]](#page-84-3). Eine ausführliche Übersicht der in der PM gebräuchlichen Notation findet sich unter <https://plato.stanford.edu/entries/pm-notation/> (abgerufen 10.8.2023)<span id="page-17-2"></span>

<sup>8</sup>vgl. [\[Fau94,](#page-87-2) 26 f.]. Für unsere einführende Betrachtung folgen wir [\[Roj93,](#page-92-4) 33 f.] und ignorieren zunächst die Zeitwerte aus der Original-Arbeit: Dort wird für die Signalübertragung ein diskreter Zeitwert  $t \, \in \, \mathbb{Z}$  vereinbart: Die Übertragung eines Signals dauert eine Zeiteinheit, also  $t + 1$ . Vgl. hierzu Abbildung [3.1.](#page-18-1)<span id="page-17-3"></span>

<sup>9</sup> Die ausbleibende Exozytose in chemischen Synapsen kann in dem Sinne einer Modellierung als  $0-$  Signal verstanden werden (siehe Kapitel  [2.3.1\)](#page-13-2).<span id="page-17-4"></span>

<sup>10</sup> Für eine weitere Ausführung absoluter und relativer Hemmung siehe [\[Roj93, 42 f.\]](#page-92-4).![](_page_18_Figure_1.jpeg)

<span id="page-18-1"></span>Abb. 3.1. Schematische Darstellung von MCP-Zellen (Quelle: in Anlehnung an [\[MP43, 105, Figure 1\]](#page-91-2))Schwarze Kreise sind erregende Verbindungen, *offene* Kreise hemmende. Im ursprünglichen Modell benötigt ein Neuron zwei erregende Eingaben, um aktiviert zu werden.In *a)* ist damit ein Netz dargestellt von zwei Neuronen, bei denen  $N<sup>2</sup>$  feuert, wenn  $N<sup>1</sup>$  feuert. Unter Berücksichtigung der Zeiteinheit folgt die formale Darstellung  $N<sub>2</sub>(t) 3  N<sub>1</sub>(t 1).$ Gleicherweise ergibt sich für b), dass N<sup>3</sup> nur feuert, wenn N<sup>1</sup> oder N<sup>2</sup> feuern:  $N\_3(t) \\equiv N\_1(t - 1) \, \lor N\_2(t - 1).$  Analog folgt für c)  $N\_3(t) \\equiv N\_1(t - 1) \, \land N\_2(t - 2).$  Für d) ergibt sich somit  $N\_3(t) \\equiv N\_1(t - 1) \, \land \neg N\_2(t - 1)$ .<span id="page-18-0"></span>#### 3.1.3 Aktivierungs- und Eingabefunktion

Mit  $n \, \in \, \mathbb{N}\_0$  und  $m \, \in \, \mathbb{N}\_0$  legen wir fest, dass ein Neuron  $n+m$  Eingaben haben soll, mit  $n \geq 1 \lor m \geq 1$ , wobei  $n$  die Anzahl der erregenden und  $m$  die der hemmenden Eingaben ist.Für die Schwellenwertfunktionen eines Neurons  $N$  ergeben sich folgende Anforderungen: Die Summe der erregenden Eingabesignale  $x\_{1}, x\_{2}, \, ext{...}, x\_{n}$  und der hemmenden Eingabesignale  $y\_{1}, y\_{2}, \, ext{...}, y\_{m}$  muss den für das Neuron festgelegten Schwellenwert  $ heta$   $ ext{in}$   $ ext{N}^{0}$  überschreiten, damit als Ausgabe eine 1 erzeugt wird, ansonsten liefert die Funktion eine 0 zurück.#### Eingabefunktion

Zur Integration der eingehenden Signale benötigen wir eine **Eingabefunktion**. Der Wert dieser **Eingabefunktion** wird dann auf eine Funktion angewendet, die entscheidet, ob das Neuron feuert oder nicht - also eine  $1$  oder  $0$  ausgibt.Für die Eingabesignale  $X$ 
$$X \in \{1, 0\}^{n+m} \coloneqq (x\_1, x\_2, \dots, x\_n, y\_1, y\_2, \dots, y\_m) \tag{3.1}$$

definieren wir die Gewichte  $w^{+} \, \text{in} \, \{2, 1\}$  mit  $w\_{1}^{+} := 1, \; w\_{2}^{+} := 2$  für erregende Signale,  $w\_{-} := -1$  für hemmende Signale (vgl. [\[Fau94,](#page-87-2) 27-28]).#### Die Eingabefunktion  $g$

<span id="page-19-1"></span>
$$g: \{1, 0\}^{n+m} \to \mathbb{Z}, X \mapsto \sum\_{j=1}^{n} x\_j w\_+ + \sum\_{k=1}^{m} y\_k w\_ (3.2)$$

liefert die Summe der hemmenden und erregenden Eingabesignale zurück.#### Aktivierungsfunktion

Die Schwellenwertfunktion wird im Kontext von künstlichen neuronalen Netzen auch *Aktivierungsfunktion* genannt (vgl. [\[RN12, 847\]](#page-92-5)), da sie entscheidet, ob einzelne Neuronen aktiviert werden oder nicht. In diesem Fall realisieren wir sie als *Treppenfunktion*, die 1 zurückliefert, falls  $g(X) \ge \Theta$ , und 0 sonst:  
<span id="page-19-0"></span>
$$f: \mathbb{Z} \to \{0, 1\}, f(g(X)) = f(u) = \begin{cases} 1 & \text{falls } u > = \Theta \\ 0 & \text{falls } u < \Theta \end{cases} \tag{3.3}$$

![](_page_19_Figure_9.jpeg)

<span id="page-19-2"></span>

Abb. 3.2. Plot einer Treppenfunktion, hier als Heaviside-Funktion mit  $H(x) = \begin{cases} 0 & \text{wenn } x < 0 \\ 1 & \text{wenn } x \geq 0 \end{cases}$ . (Quelle: Eigene Darstellung)

Da die Erregung absolut ist, muss  $E$  die Ungleichung
$$\Theta > \left(\sum\_{{j=1}}^{{k^{w\_{+}^{2}}}} 2\right) + \left(\sum\_{{j=1}}^{{k^{w\_{+}^{1}}}} 1\right) + w\_-$$
(3.4)

erfüllen, was wir abkürzen können zu

$$
\Theta > 2k^{w\_+^2} + k^{w\_+^1} - 1 \tag{3.5}
$$

#### <span id="page-20-0"></span>3.1.4 McCulloch-Pitts-Netz als Graph

Ein zyklenfreies Netz aus MCP-Zellen können wir wie folgt denieren (vgl. [\[Roj93,](#page-92-4) 32 Denition 2.1]):

Definition 3.1. Ein MCP-Netz ist ein gerichteter Graph[11](#page-20-2)  $G = (V, E)$  mit der Knotenmenge

$$V(G) = \{N\_{1}, N\_{2}, \dots, N\_{z}\} \tag{(3.6)}$$

und der paarweise verschiedenen Kantenmenge

$$E(G) = \{ (N\_i, N\_j) | i < j \}$$

(3.7)

sowie der Kantengewichtsfunktion[12](#page-20-3)

<span id="page-20-4"></span>
$$
\gamma : \mathbb{N}^2 \to \{w\_+, w\_-\}, \quad \gamma(N\_i, N\_j) = 
\begin{cases}
 w\_- \; falls \; (N\_i, N\_j) \; hem \; end \\ 
 w\_+ \; sonst 
\end{cases} 
\tag{3.8}
$$

#### <span id="page-20-1"></span>3.1.5 Implementierung von Booleschen Funktionen

Mit den eingeführten Formalismen können wir nun aussagenlogische Funktionen auf Basis von MCP-Zellen modellieren.

#### AND (Konjunktion)

In der zweiwertigen Aussagenlogik liefert die AND-Funktion ( $\land$ ) nur dann die Ausgabe wahr, wenn die darin verknüpften Aussagen jeweils den Wahrheitswert wahr besitzen.

Für  $wahr = 1$  und  $falsch = 0$  sieht die Wahrheitstabelle für zwei Aussagen wie folgt aus (Tabelle [3.1\)](#page-21-0):

<span id="page-20-2"></span><sup>11</sup> Gerichtete Kanten eine MCP-Netzes nehmen eigentlich keine Gewichtung der Information vor [\[Roj93,](#page-92-4) 40] (Rojas verweist darauf, dass Gewichte in absolut hemmenden Leitungen unsinnig sind: Siehe [\[Roj93,](#page-92-4) 42]). Sowohl Minsky in [\[Min67,](#page-91-3) 34] als auch Rojas in [\[Roj93,](#page-92-4) 32] nutzen unter Berücksichtigung der absoluten Hemmung nur die Summe der erregenden Signale und vergleichen diese mit  $\Theta$  - dieser Vergleich findet nur statt, wenn kein hemmendes Signal ankommt: Die Zelle liefert sonst direkt 0 als Ausgabe zurück. Fausett nutzt unter Berücksichtigung von Gleichung [3.3](#page-19-0) gewichtete Kanten, in ähnlicher Weise auch Beale und Jackson in [\[BJ90,](#page-85-0) 41]. Minsky weist auf die Äquivalenz eines solchen Modells hin (vgl. [\[Min67,](#page-91-3) 34 f.]), dessen wir uns im Folgenden auch bedienen werden.

<span id="page-20-3"></span>

<sup>12</sup> der Einfachheit halber wird bei der Fallunterscheidung keine weitere Unterteilung der für  $w^{+}$  möglichen Werte  ${1, 2}$  unternommen.

| A | B | $A \land B$ |
|---|---|-------------|
| 1 | 1 | 1           |
| 1 | 0 | 0           |
| 0 | 1 | 0           |
| 0 | 0 | 0           |

<span id="page-21-0"></span>Tabelle 3.1. Wahrheitstabelle für AND

Wir legen für  $N$  zwei erregende Eingabesignale  $x\_{1}, x\_{2}$  sowie den Schwellenwert  $\Theta = 2$  fest. Die Gewichte für  $x\_{1}$  und  $x\_{2}$  sind jeweils  $w^{1}\_{+}$  (s. Kantengewichtsfunktion in Denition [3.1\)](#page-20-4).

Mit den oben eingeführten Denition verhält sich unser MCP-Neuron wie folgt (siehe Tabelle [3.2\)](#page-21-1):

| x1w1+ | x2w1+ | gand(X) | fand(x) |
|-------|-------|---------|---------|
| 1     | 1     | 2       | 1       |
| 1     | 0     | 1       | 0       |
| 0     | 1     | 1       | 0       |
| 0     | 0     | 0       | 0       |

<span id="page-21-1"></span>Tabelle 3.2. Werte der Aktivierungs- und Eingabefunktion für eine AND-MCP-Zelle

#### OR (Disjunktion)

Für die OR-Funktion ( $\lor$ ) legen wir  $\Theta = 2$  und zwei erregende Eingabesignale x<sup>1</sup>, x<sup>2</sup> fest. Die Gewichte für x<sup>1</sup> und x<sup>2</sup> sind jeweils w<sub>2</sub><sup>+</sup>: Zusammen mit  $\Theta = 2$  reicht also eine erregende Eingabe aus (siehe Tabelle [3.3](#page-21-2) sowie Abbildung [3.3](#page-22-0)).

| A | B | A $ ∨ $ B | $2x_1w^2_+$ | $2x_2w^2_+$ | gor(X) | f_or(x) |
|---|---|-----------|-------------|-------------|--------|---------|
| 1 | 1 | 1         | 2           | 2           | 4      | 1       |
| 1 | 0 | 1         | 2           | 0           | 2      | 1       |
| 0 | 1 | 1         | 0           | 2           | 2      | 1       |
| 0 | 0 | 0         | 0           | 0           | 0      | 0       |

<span id="page-21-2"></span>Tabelle 3.3. Werte der Aktivierungs- und Eingabefunktion für eine OR-MCP-Zelle

![](_page_22_Figure_1.jpeg)

<span id="page-22-0"></span>

Abb. 3.3. Ein MCP-Neuron zur Modellierung von OR (Quelle: Eigene Darstellung)#### NOT (Negation)

Für die NOT-Funktion  $(¬)$  legen wir  $Θ = 0$  und ein erregendes Eingabesignal  $x<sup>1</sup>$  fest. Das Gewicht für  $x<sup>1</sup>$  ist  $w\_-$ : Zusammen mit  $Θ = 0$  würde also ein aktiv anliegendes Signal zu  $1w\_- = -1 < \Theta = 0$ . Durch die resultierende Hemmung kann das Signal die Zelle nicht aktivieren (siehe Tabelle [3.4](#page-22-1)):<span id="page-22-1"></span>

| A | ¬A | x1 | g $¬$ (X) | f $¬$ (x) |
|---|----|----|-----------|-----------|
| 1 | 0  | -1 | -1        | 0         |
| 0 | 1  | 0  | 0         | 1         |

Tabelle 3.4. Werte der Aktivierungs- und Eingabefunktion für eine NOT-MCP-Zelle

#### NAND (NOT AND)

{ $\neg, \land$ }[13](#page-22-2) bildet die Operatorenmenge für NAND, was als MCP-Netz wie *folgen* modelliert werden kann (siehe Tabelle [3.5](#page-23-0) sowie Abbildung [3.4](#page-23-1)):Wir legen  $Θ<sub>1</sub> = 2$  fest (*s.* AND-Zelle), an dem zwei erregende Eingaben anliegen.  $Θ<sub>2</sub> = 0$  (*s.* NOT-Zelle) und besitzt eine hemmende Eingabe.N<sup>1</sup> *(AND)* wird aktiviert, wenn sowohl x<sup>1</sup> als auch x<sup>2</sup> ein erregendes Signal weiterleiten. Das Ausgabesignal von N<sup>1</sup> wird dann "invertiert" (siehe Abbildung [3.4](#page-23-1)).<span id="page-22-2"></span>

<sup>13</sup> { $\neg, \lor, \land$ } bilden ein vollständiges Operatorensystem, d.h., jede boolesche Funktion lässt sich durch einen aussagenlogischen Ausdruck beschreiben, in dem ausschließlich Operatoren aus dieser Menge vorkommen (vgl. [\[Hof22,](#page-88-1) 89]). Da MCP-Zellen die Operatoren  $\neg, \lor, \land$  darstellen können, ist ein MCP-Netz nach *Definition* in der Lage, jede boolesche Funktion zu modellieren - hierzu reicht allerdings bereits  ${\neg, \land}$  aus, wie Sheffer in [\[She13\]](#page-93-2) zeigt.

| A | B | ¬(A ∧ B) |
|---|---|----------|
| 1 | 1 | 0        |
| 1 | 0 | 1        |
| 0 | 1 | 1        |
| 0 | 0 | 1        |

Tabelle 3.5. Die Wahrheitstabelle für NAND

<span id="page-23-0"></span>![](_page_23_Figure_3.jpeg)

<span id="page-23-1"></span>Abb. 3.4. Ein MCP-Netz zur Modellierung von NAND (Quelle: Eigene Darstellung)

#### XOR (exclusive or)

Eine weitere boolesche-Funktion, die aus mehreren MCP-Zellen als Netz modelliert werden kann, ist die XOR-Funktion (exclusive or). Die Wahrheitstabelle hierfür ist in Tabelle [3.6](#page-23-2) zu nden.

| A | B | $ A \oplus B $ |
|---|---|----------------|
| 1 | 1 | 0              |
| 1 | 0 | 1              |
| 0 | 1 | 1              |
| 0 | 0 | 0              |

<span id="page-23-2"></span>Tabelle 3.6. Die Wahrheitstabelle für XOR

Für die Konstruktion des Netzes rufen wir uns Abbildung [3.3](#page-22-0) ins Gedächtnis.  $ = 2$  wird übertroffen, wenn entweder  $x^{1}$  oder  $x^{2}$  ein erregendes Signal weiterleitet. Allerdings wird  $$  auch übertroffen, wenn jeweils  $x^{1}$  und  $x^{2}$  gleichzeitig aktiv sind, denn dann ist  $f\_{xor}(g(X)) = 4$ . Also muss eine Hemmung zwischengeschaltet werden.werden (s. Abbildung [3.5\)](#page-24-0): Ein aktives  $x^{1}$  hemmt  $N^{2}$ .  $N^{2}$  leitet in dem Fall  $0$  an Y weiter. Die Zellen  $x^{2}$  und  $N^{1}$  werden analog verbunden.Die disjunktive Normalform (Gleichung [3.9](#!page-24-1)) und die konjunktive Normalform (Gleichung [3.10](#!page-24-2)) von  $XOR$  liefern die Formel für das Netz. Insbesondere die disjunktive Normalform ist in Abbildung [3.5](#!page-24-0) erkennbar.<span id="page-24-1"></span>The equation for the exclusive OR operation is expressed as:

$$A \oplus B \equiv (\neg A \land B) \lor (A \land \neg B)$$

(3.9)

<span id="page-24-2"></span>
$$A \oplus B \equiv (A \lor B) \land (\neg A \lor \neg B) \tag{3.10}$$

![](_page_24_Figure_5.jpeg)

<span id="page-24-0"></span>

Abb. 3.5. Entwurf für ein MCP-Netz zur Modellierung von XOR (Quelle: Eigene Darstellung)Für weitere Beispiele zu Modellierungen von MCP-Netzen sei auf Anhang [C](#page-71-0) verwiesen.## <span id="page-25-0"></span>3.2 Das Rosenblatt-Perzeptron

In Abschnitt [3.1](#page-16-1) haben wir gesehen, wie MCP-Netze durch vorhergehende Analyse der Anforderungen und entsprechender Anpassung der Topologie zur Lösung verschiedener Aufgaben imstande sind. Donald Hebbs Theorien über synaptische Plastizität [14](#page-25-3) führen einige Jahre nach dem MCP-Neuron zu einem Modell, das in der Lage ist, sich selbst anzupassen.#### <span id="page-25-1"></span>3.2.1 Das Perzeptron - ein linearer Klassizierer

Bereits 1954 wurden Versuche unternommen, lernfähige neuronale Netze zu modellieren (vgl. [\[Ros62,](#page-93-3) 24])[15](#page-25-4). 1958 schat es ein Modell, für Aufsehen zu sorgen[16](#page-25-5): Das Perceptron (im folgenden Perzeptron) (vgl. [\[AR88,](#page-84-3) 89])[17](#page-25-6). 1957 beschreibt es sein Schöpfer Frank Rosenblatt (1928 - 1971) in [\[Ros57\]](#page-92-6)[18](#page-25-7) als Teil eines internen Forschungsprojektes des Cornell Aeronautical Labs[19](#page-25-8).

#### <span id="page-25-2"></span>3.2.2 Das Modell

Rosenblatt *definiert* das Perzeptron wie folgt[20](#page-25-9):A perceptron is a network of S, A, and R units with a variable interaction matrix V which depends on the sequence of past activity states of the network. ([\[Ros62,](#page-93-3) 83 DEFINITION 17; Hervorhebung i.O.])

Die darin erwähnten A-Units werden deniert mit:

A simple A-unit is a logical decision element, which generates an output signal if the algebraic sum of its input signals,  $\alpha^{i}$ , is equal or greater than a threshold quantity,  $\Theta > 0$ . The output signal  $a^{\*}\_{i}$  is equal to +1 if  $\alpha^{i} \geq \Theta$  and 0 otherwise. If  $a^{\*}\_{i} = +1$ , the unit is said to be active. ([\[Ros62,](#page-93-3) 81 DEFINITION 9; Hervorhebung i.O.])<span id="page-25-3"></span><sup>14</sup> siehe Anhang [B.2](#page-65-0)

<span id="page-25-4"></span><sup>15</sup> Rosenblatt verweist hier auf [\[FC54\]](#page-87-3)

<span id="page-25-5"></span><sup>16</sup> nicht nur im Wissenschaftsbetrieb, auch in der Öentlichkeit. In der Presse publikumswirksam, aber wenig vertrauenserweckend: Frankenstein Monster Designed by Navy Robot That Thinks [\[Ros62,](#page-93-3) v]. Vgl. dazu aktuelle Schlagzeilen der hiesigen Boulevardpresse zum Thema KI. bild.de titelt: Übernehmen Computer die Weltherrschaft? [\(https://www.bild.de/news/ausland/news-ausland/exper](https://www.bild.de/news/ausland/news-ausland/experten-warnen-ki-so-gefaehrlich-wie-pandemien-und-atomkrieg-84130180.bild.html) [ten-warnen-ki-so-gefaehrlich-wie-pandemien-und-atomkrieg-84130180.bild.html,](https://www.bild.de/news/ausland/news-ausland/experten-warnen-ki-so-gefaehrlich-wie-pandemien-und-atomkrieg-84130180.bild.html) abgerufen 27.08.2023) als Reaktion auf Statement on AI Risk des Center for AI Safety, in dem zahlreiche Wissenschaftler zur Vorsicht beim Umgang, Einsatz und Forschung von KI mahnen. Im Wortlaut: Mitigating the risk of extinction from AI should be a global priority alongside other societal-scale risks such as pandemics and nuclear war. [\(https://www.safe.ai/statement-on-ai-risk,](https://www.safe.ai/statement-on-ai-risk) abgerufen 27.08.2023)

<span id="page-25-6"></span><sup>17</sup> s. auch Interest in connectionist networks revived dramatically in 1962 with the publication of Frank Rosenblatt's book Principles of Neurodynamics, [...] [\[MP88,](#page-91-4) xi; Hervorhebung i.O.]

<span id="page-25-7"></span><sup>18</sup> siehe Anhang [A.12](#page-61-0)

<span id="page-25-8"></span><sup>19</sup> Die Forschungseinrichtung gehörte von 1946 bis 1972 zu der Cornell Universität [\(https://www.co](https://www.cornell.edu) [rnell.edu;](https://www.cornell.edu) ab 1972 gehörte die Forschungseinrichtung dann zu der Calspan Corporation, [https:](https://calspan.com) [//calspan.com,](https://calspan.com) beides abgerufen 18.08.2023). Rosenblatt macht an der Cornell Universität 1950 seinen A.B, 1956 seinen Ph.D. und wird dort bis zu seinem Lebensende (1971) als Psychologe und Neurobiologe forschen und lehren.

<span id="page-25-9"></span>

<sup>20</sup> Ausführliche *Definitionen* aller Zustände, Signale und Funktionen in [\[Ros62, 79 - 94\]](#page-93-3)Ähnlichkeiten zwischen den A-Units und zu der in Abschnitt [3.1.3](#page-18-0) eingeführten Aktivierungsfunktion sind durchaus erkennbar: Rosenblatt selber weist darauf hin, dass er sein Modell direkt von dem von McCulloch und Pitts eingeführten Modell ableitet [\[21\]](#page-26-0). Darüber hinaus weist er auch auf Einflüsse von Hebb und von Neumann hin (siehe [\[Ros62,](#page-93-3) 5]).Rojas schreibt, dass das klassische Rosenblatt-Perzeptron in einem Netz von Eingabe- und Ausgabeknoten gewichtete Verbindungen nutzt - die Knoten selber sind Schwellenwertelemente, Verbindungen werden stochastisch ermittelt (siehe [\[Roj93, 51\]](#page-92-4)). Er weist ebenda darauf hin, dass das Modell nach Rosenblatts Veröffentlichung analysiert und verfeinert wurde, u. a. von Minsky und Papert in [\[MP88\]](#page-91-4), die wie folgt definieren[22](#page-26-1):A perceptron is a device capable of computing all predicates which are linear in some given set  $\Phi$  of partial predicates. ([\[MP88, 12; Hervorhebung i.O.\]](#page-91-4))Prädikate sind hier Verbindungen zu den Eingabesignalen, die einen Wahrheitswert  $0$  oder  $1$  basierend auf der Eingabe  $X$  berechnen. Die Ausgaben der Prädikate werden individuell gewichtet und an die Zelle weitergeleitet, die die Aktivierungsfunktion implementiert (vgl. [\[Roj93, 52 f.\]](#page-92-4) und [\[MP88, 8-12\]](#page-91-4)).![](_page_26_Figure_5.jpeg)

<span id="page-26-2"></span>#### Abb. 3.6. Rosenblatt-Perzeptron. (Quelle: in Anlehnung an [\[Roj93,](#page-92-4) 53, Abb. 3.2])

Schematische Darstellung eines Perzeptron-Automats (siehe [\[Ros57,](#page-92-6) 7]): Eingaben werden an die Prädikate  $P^{n}$  weitergeleitet, deren binäre Ausgaben mit den Gewichten  $w^{n}$  multipliziert werden. Die Summe der Produkte wird mit dem Schwellenwert  $\Theta$  verglichen (vgl. [\[Roj93,](#page-92-4) 53]).Die Eingabefunktion setzt sich dann wie Gleichung [3.2](#page-19-1) aus der Summe der Produkte der Prädikate  $P^{i} \in \Phi$  (wobei  $P\_{i}(X) \in \{0, 1\}$ ) und den Gewichten  $w^{i} \in \mathbb{R}$ .<span id="page-26-0"></span>

<sup>21</sup> vgl. auch "Ein einfaches Perzeptron ist eine McCulloch-Pitts-Zelle, die ihre Eingabe gewichtet berechnet." in [\[Roj93, 57, Definition 3.1; Hervorhebung i.O.\]](#page-92-4)<span id="page-26-1"></span>

<sup>22</sup> wir werden später sehen, dass die Eigenschaft *"linear"* in dieser *Definition* von besonderer Bedeutung sein wird.der Verbindungen zusammen (s. Gleichung [3.11](#page-27-1)), und die Aktivierungsfunktion (s. Gleichung [3.12](#page-27-2)) ist wieder eine Treppenfunktion mit dem reellen Schwellenwert  $\Theta$ :<span id="page-27-1"></span>
$$g \coloneqq g(X) = \sum\_{i=1}^{n} P\_i(X)w\_i \tag{3.11}$$

<span id="page-27-2"></span>
$$f \coloneqq f(g(X)) = f(x) = \begin{cases} 1 \text{ falls } x > = \Theta \\ 0 \text{ falls } x < \Theta \end{cases} \tag{3.12}$$

<span id="page-27-0"></span>#### 3.2.3 Lineare Trennbarkeit

Mit Gleichung [3.12](#page-27-2) folgt für eine Eingabe, dass sie entweder eine  $0$  oder  $1$  als Ausgabe erzeugt. Es liegt ein binärer Wertebereich vor, der als zwei unterschiedliche Klassen aufgefasst werden kann: Eingabedaten können entsprechend ihrer Ausgabe einer der beiden Klassen zugeordnet werden (vgl. [\[RN12,](#page-92-5) 812]). Im Folgenden wollen wir die Zusammenhänge geometrisch darstellen. Der Einfachheit halber beschränken wir uns hierzu auf den zweidimensionalen Raum  $R^2$  und betrachten dort die 1. Winkelhalbierende im I. und III. Quadranten des kartesischen Koordinatensystems. Die zugehörige Gerade *L* ist
$$L = \{(x\_{1}, x\_{2}) \in \mathbb{R}^{2} : x\_{1} = x\_{2}\} \tag{3.13}$$

Für beliebige Punkte  $(x\_1, x\_2)$  ∈  $\mathbb{R}^2$  gilt damit offensichtlich.
$$\begin{cases} x\_1 - x\_2 & > 0 \ \text{falls} & x\_1 > x\_2\\ x\_1 - x\_2 & = 0 \\text{falls} & x\_1 = x\_2\\ x\_1 - x\_2 & < 0 \\text{falls} & x\_1 < x\_2 \end{cases} \tag{3.14}$$

Die Gerade *L* repräsentiert eine Hyperebene[23](#page-27-3) im  $R^{2}$ . Punkte, die nicht zu dieser Hyperebene gehören, liegen in zwei unterschiedlichen Halbräumen[24](#page-27-4) (siehe geometrische Darstellung in Abbildung [3.8\)](#page-29-1).Wir können feststellen, dass- - Punkte, die  $x^{1} - x^{2} > 0$  erfüllen (im folgenden  $M\_{-}$ ) in dem Halbraum unter der durch  $L$  beschriebenen Gerade liegen
- - Punkte, für die  $x<sup>1</sup> - x<sup>2</sup> < 0$  gilt (im folgenden  $M\_+$ ) über der durch  $L$  beschriebenen Gerade liegen
- Punkte mit x<sup>1</sup> − x<sup>2</sup> = 0 auf der Geraden liegen (im folgenden als Teilmenge von M<sup>−</sup> [25](#page-27-5))

M<sup>+</sup> und M<sup>−</sup> sind damit *linear* separierbar. Nach Rojas lautet die **Definition** für *Lineare* Trennbarkeit: <span id="page-27-3"></span>

<sup>23</sup> siehe [\[Bur+12, 81, Definition 2.3\]](#page-85-1)<span id="page-27-4"></span>

<sup>24</sup> Renze, John; Uznanski, Dan; and Weisstein, Eric W. “Half-Plane.” From MathWorld—A Wolfram Web Resource. <https://mathworld.wolfram.com/Half-Plane.html> (retrieved 21.08.2023)<span id="page-27-5"></span>

<sup>25</sup> Wenn die Hyperebene selbst im Halbraum enthalten ist, spricht man von einem abgeschlossenenen Halbraum. [\(https://de.wikipedia.org/wiki/Halbraum, abgerufen 22.08.2023\)](https://de.wikipedia.org/wiki/Halbraum)![](_page_28_Figure_1.jpeg)

<span id="page-28-3"></span>

Abb. 3.7. 1. Winkelhalbierende im kartesischen Koordinatensystem (Quelle: Eigene Darstellung)Zwei Mengen A und B von Punkten in einem *n*-dimensionalen Raum sind linear trennbar, falls  $n+1$  reelle Zahlen  $w\_1, \, \ldots, \, w\_{n+1}$  existieren, so dass für jeden Punkt  $x\_1, \, \ldots, \, x\_n \in A$  gilt.<span id="page-28-1"></span>
$$\sum\_{i=1}^{n} w\_{i} x\_{i} \ge w\_{n+1} \; (3.15)$$

und für jeden Punkt  $x\_1, \, x\_n$   $\in B$ <span id="page-28-2"></span>
$$\sum\_{i=1}^{n} w\_{i} x\_{i} < w\_{n+1}$$

$$(3.16)$$

([\[Roj93,](#page-92-4) 60 f., **Definition 3.2**; Hervorhebung i.O.; Nummerierung eigene])Als Beispiel sei M<sup>−</sup> =  ${(x<sub>1</sub>, x<sub>2</sub>) \in \mathbb{R}\_{0}^{2} : x<sub>1</sub> \geq x<sub>2</sub>}$  und M<sup>+</sup> =  ${(x<sub>1</sub>, x<sub>2</sub>) \in \mathbb{R}\_{0}^{2} : x<sub>1</sub> < x<sub>2</sub>}$ . Weiter sei w<sup>1</sup> = -1, w<sup>2</sup> = 1, w<sup>3</sup> = 0. Die lineare Trennbarkeit der beiden Mengen lässt sich leicht nachweisen[26](#page-28-0):<span id="page-28-0"></span>

<sup>26</sup> entspricht zwei Punktmengen, die durch die **1.** Winkelhalbierende im **I.** Quadranten des kartesischen Koordinatensystems separierbar sind.![](_page_29_Figure_1.jpeg)

<span id="page-29-1"></span>

Abb. 3.8. Halbräume im  $R^{2}$  (Quelle: Eigene Darstellung)

Skizzierung der durch die 1. Winkelhalbierende entstandenen Halbräume. Die Mengen M<sup>−</sup> und M<sup>+</sup> sind linear separierbar, die Gleichung für die Trenngerade hierzu lautet  $x^{1} - x^{2} = 0$ .- 1. Fall x<sup>1</sup> = x2: Es gilt w1x<sup>1</sup> + w2x<sup>2</sup> = w1x<sup>1</sup> + w2x<sup>1</sup> = −x<sup>1</sup> + x<sup>1</sup> = w<sup>3</sup> = 0. Mit 0 ≥ 0 ist somit Gleichung [3.15](#page-28-1) erfüllt.
- 2. Fall x<sup>1</sup> < x<sup>2</sup>: Es gilt w1x<sup>1</sup> =  $-x1$ . Addition von w1x<sup>1</sup> auf beiden Seiten von x<sup>2</sup> > x<sup>1</sup> liefert x<sup>2</sup> +  $(-x1)$  = w2x<sup>2</sup> + w1x<sup>1</sup> > 0 = w<sup>3</sup> und erfüllt Gleichung [3.15.](#page-28-1)
- 3. Fall x<sup>1</sup> > x<sup>2</sup>: Es gilt wieder w1x<sup>1</sup> =  $-x1$ . Addition auf beiden Seiten von x<sup>1</sup> > x<sup>2</sup> liefert w<sup>3</sup> = 0 > x<sup>2</sup> +  $(-x1)$  = w2x<sup>2</sup> + w1x<sup>1</sup> und erfüllt Gleichung [3.16.](#page-28-2)

Insgesamt kann ein Perzeptron als Funktion verstanden werden, was sich auch in der *Definition* nach Ertel widerspiegelt: Sei  $w = (w\_1, \, ext{ldots}, \, w\_n) \in \mathbb{R}^{n}$  ein Gewichtsvektor und  $x \in \mathbb{R}^{n}$  ein Eingabevektor. Ein *Perzeptron* stellt eine Funktion  $P : \mathbb{R}^{n} \to \{0, 1\}$  mit
$$P(x) = \begin{cases} 1 & \text{falls } \sum\_{i=1}^{n} w\_i x\_i > 0 \\ 0 & \text{sonst} \end{cases}$$

dar. ([\[Ert21b, 212, Definition 8.3;](#page-86-2) *Hervorhebung i.O.*])<span id="page-29-0"></span>#### 3.2.4 Die Lernregel

Die Eigenschaft linearer Trennbarkeit von Daten ist eine wesentliche Voraussetzung dafür, dass ein Perzeptron konvergiert: Die Lernregel des Perzeptrons passt während der Laufzeit die Gewichte  $w\_1 \, ... \, w\_n$  solange an, bis sie - eingesetzt in einelineare Gleichung (vgl. [\[Ert21c,](#page-86-3) 311]) - die  $n$ -dimensionalen Daten entsprechend Gleichung [3.12](#page-27-2) klassifizieren kann. Aus diesem Grund wird das Perzeptron auch **linearer Klassifizierer** genannt (vgl. [\[Ert21b,](#page-86-2) 210-216]).Das Perzeptron lernt diese Gewichte *zunächst* durch Trainingsdaten[27](#page-30-0). Jeder Eintrag dieser Trainingsdaten ist einer erwarteten Ausgabe zugeordnet. Der Algorithmus besteht aus folgenden Schritten (vgl. [\[RM87, 65\]](#page-92-7) sowie [\[RN12, 842\]](#page-92-5))[28](#page-30-1):- 1. Wähle einen Datensatz und berechne die Ausgabe.
- 2. Wenn die Ausgabe  $1$  ist, obwohl sie  $0$  sein sollte (Fehler[29](#page-30-2) =  $-1$ ), verringere die Gewichte.
- 3. Wenn die Ausgabe  $0$  ist, obwohl sie  $1$  sein sollte (Fehler =  $1$ ), erhöhe die Gewichte.
- 4. Wenn die Ausgabe korrekt ist, passe die Gewichte nicht an.

Die Schritte werden so lange durchlaufen, bis für alle Trainingsdaten die Ausgabe korrekt ist, oder eine maximale Anzahl von Trainingsläufen erreicht wurde. Einen Trainingslauf nennt man dabei *Epoche*[30](#page-30-3). Sind die Trainingsdaten linear separierbar, konvergiert[31](#page-30-4) das Perzeptron nach einer endlichen Zahl von Epochen (vgl. [\[MP88,](#page-91-4) 164])[32](#page-30-5), und ist danach in der Lage, weitere Daten zu generalisieren (vgl. [\[Ert21b,](#page-86-2) 202]).Wir betrachten jetzt eine Möglichkeit, die  $y$ -Koordinate der Trenngerade anzupassen, falls Punkte vorliegen, die nicht durch eine Ursprungsgerade separierbar sind (siehe Abbildung [3.9](#page-31-0)).Dies erreicht man mit einer sogenannten *bias unit*. Das Bias-Gewicht[33](#page-30-6) ist ein Wert, der zu der Gleichung [3.11](#page-27-1) hinzuaddiert wird. In der geometrischen Darstellung sorgt dieser Wert für eine Verschiebung der Ursprungsgeraden entlang der  $x\_{2}\text{-Achse}$ [34](#page-30-7).Den *Eingabedaten* wird ein fester Eingabewert  $x\_{n+1} = 1$  hinzugefügt: Der *Eingabevektor*  $x \, \in \, \mathbb{R}$ <sup>n</sup> wird erweitert: ( $x\_1, ext{...}, x\_n, 1$ ) (vgl. [\[Roj93,](#page-92-4) 58]).Der bias  $b$  wird für unser Beispiel im  $\mathbb{R}$ ^{2} mit Gleichung [3.11](#page-27-1) in die Berechnung des Schwellenwerts miteinbezogen:<span id="page-30-2"></span><sup>29</sup> Der Fehler ist die Differenz von erwarteter Ausgabe und tatsächlicher Ausgabe.<span id="page-30-0"></span>

<sup>27</sup> "supervised learning": *überwachtes lernen*; vgl. [\[RN12, 811\]](#page-92-5) sowie [\[Fau94, 15\]](#page-87-2). Arbib et al. weisen darauf hin, dass *überwachtes Lernen* mit dem Perzeptron eingeführt wurde: "Supervised learning adjusts the weights in an attempt to respond to explicit error signals provided by a 'teacher,' which may be external, or another network in the same 'brain'." This model was introduced in the perceptron model [\[Arb03, 30\]](#page-84-4).<span id="page-30-1"></span>

<sup>28</sup> Die Beziehung zu der Hebbschen Lernregel formulieren Arbib et al.: "The best-known perceptron learning rule strengthens an active synapse if the *efferent* neuron fails to *fire* when it should have *fired*, and weakens an active synapse if the neuron *fires* when it should not have done so." [\[Arb03,](#page-84-4) 20]. Vgl. hierzu auch Rosenblatt: "[a perceptron has] a tendency to develop 'cell assemblies' (in Hebb's sense), and these cell-assemblies tend to rival one another for dominance at all times." [\[Ros62,](#page-93-3) 464]<span id="page-30-3"></span>

<sup>30</sup> siehe [\[Fau94, 436\]](#page-87-2)<span id="page-30-4"></span>

<sup>31</sup> iterative training processes converge if the weight updates reach equilibrium (stop changing) [\[Fau94,](#page-87-2)  $425$  Convergence].<span id="page-30-5"></span>

<sup>32</sup> Das Konvergenz-Theorem besagt: "*if a linear separation exists*", wird das Fehlerkorrekturschema des Perzeptrons *findet es*. [\[Arb03, 20\]](#page-84-4) Beweise führen [\[Ros62, 111 ff.\]](#page-93-3), [\[MP88, 168 ff.\]](#page-91-4) sowie [\[Nov62\]](#page-91-5).<span id="page-30-6"></span>

<sup>33</sup> vgl. [\[RN12,](#page-92-5) 839]<span id="page-30-7"></span>

<sup>34</sup> im  $\mathbb{R}$ <sup>n</sup> durch eine Hyperebene im Ursprung (vgl. [\[Ert21b,](#page-86-2) 215]).![](_page_31_Figure_1.jpeg)

<span id="page-31-0"></span>

Abb. 3.9. Punkte im  $\mathbb{R}^2$ , die nicht durch eine Ursprungsgerade separierbar sind. Angedeutet eine mögliche Trenngerade, die durch  $(0, 2)$  geht. (Quelle: Eigene Darstellung)

$$P(x) = \begin{cases} 1 \text{ falls } wx > 0\\ 0 \text{ sont} \end{cases} \tag{3.17}$$

wobei<span id="page-31-1"></span>
$$wx = b + \sum\_{i=1}^{n} w\_i x\_i \tag{3.18}$$

Die Gleichung für die Trenngerade für unser Beispiel im  $\mathbb{R}^2$  lautet somit
$$b + w\_{1} x\_{1} + w\_{2} x\_{2} = 0$$
(3.19)

Wenn wir  $b$  auf die rechte Seite der Gleichung bringen, kann  $b$  auch als Schwellenwert  $Θ = -b$  betrachtet werden:
$$w\_{1} x\_{1} + w\_{2} x\_{2} = \Theta$$
(3.20)

Für unser  $x\_2$  im  $^2$  folgt dann insgesamt mit  $w\_2 = 1$  und  $x\_1 = 0:$ 
$$x\_{2} = \frac{\Theta}{w\_{2}} - \left(\frac{w\_{1}}{w\_{2}}\right)x\_{1} \tag{3.21}$$

 $x$ <sub>2</sub> ergibt sich somit als der horizontale Abstand vom Ursprung.Mit  $b$  als Teil der Eingabe folgt auch dessen Gewichtung  $b w\_{n+1} = w\_{n+1}$ . Mit 0 als Schwellenwert wird dadurch eine Verschiebung der Trenngerade entlang derx<sub>2</sub>-Achse im  $R^2$  bzw. eine Verschiebung der Hyperebene im  $R^n$  ermöglicht (vgl. [\[Ert21b,](#page-86-2) 215])[35](#page-32-1).#### <span id="page-32-0"></span>3.2.5 Die XOR-Funktion

Wenn ein Perzeptron nicht konvergiert, kann es ausreichen, die Anzahl der Epochen zu erhöhen, damit ein passender Gewichtsvektor gefunden wird[36](#page-32-2) .

![](_page_32_Figure_4.jpeg)

#### <span id="page-32-3"></span>Abb. 3.10. Perzeptron-Training für groÿe Datenmengen. (Quelle: Eigene Darstellung)

Ein Perzeptron wird mit einer groÿen Datenmengen (50 Einträge) trainiert. Nach knapp 300 Trainingsschritten (in der 6ten Epoche) wird die Trenngerade (gestrichelt) gefunden.

<span id="page-32-1"></span><sup>35</sup> einen Überblick über die geometrischen Zusammenhänge liefert Einführung in die Neuroinformatik von Prof. Dr. G. Sommer [https://www.informatik.uni-kiel.de/inf/Sommer/doc/Downloads/Skri](https://www.informatik.uni-kiel.de/inf/Sommer/doc/Downloads/Skripte/neuroskript.pdf) [pte/neuroskript.pdf:](https://www.informatik.uni-kiel.de/inf/Sommer/doc/Downloads/Skripte/neuroskript.pdf)33 . (abgerufen 27.08.2023)

<span id="page-32-2"></span><sup>36</sup> Arbib et al. berufen sich auf das Konvergenz-Theorem: [das Rosenblatt Perzeptron] does not yield an endless seesaw, but will eventually converge to a correct set of weights if one exists, albeit perhaps after many iterations through the set of trial patterns. [\[Arb03,](#page-84-4) 20]: Minsky und Papert formulieren lose: if the sets are separable [...], then the program will separate them [\[MP88,](#page-91-4) 165]. Sie stellen im Hinblick auf Parameteranpassungen fest: Usually, when a failure occurred, neither prolonging the training experiments nor building larger machines helped. [\[MP88,](#page-91-4) xi]

Allerdings kann es bereits bei wenigen Daten und beliebig großer Epochenzahl vorkommen, dass ein Perzeptron nicht konvergiert, nämlich wenn die Daten nicht linear separierbar sind (vgl. [\[Arb03, 20\]](#page-84-4)).Als Beispiel betrachten wir die boolesche Funktion  $XOR$  (vgl. Tabelle [3.6](#page-23-2)). In Abbildung [3.11](#page-33-0) ist die geometrische Repräsentation der möglichen Interpretationen für  $A \oplus B$  dargestellt. Zwar lassen sich die Elemente separieren, aber nicht linear. Es müsste sonst ein  $w<sub>1</sub>, w<sub>2</sub>$  existieren, das folgende Ungleichungen erfüllt:
$$\begin{aligned} &w\_10 + w\_20 < \Theta \\\\ &w\_11 + w\_20 \ge \Theta \implies w\_1 \ge \Theta \\\\ &w\_10 + w\_21 \ge \Theta \implies w\_2 \ge \Theta \\\\ &w\_11 + w\_21 < \Theta \end{aligned}$$

Offensichtlich kann  $w^{1}$  +  $w^{2}$   $<$   $Θ$  nicht erfüllt werden, wenn gleichzeitig  $w^{1}$   $≥$   $Θ$  und  $w^{2}$   $≥$   $Θ$  gilt (s. Abbildung [3.11](#page-33-0)).![](_page_33_Figure_5.jpeg)

<span id="page-33-0"></span>

Abb. 3.11. XOR im  $\mathbb{R}^2$ . (Quelle: Eigene Darstellung)Interpretationen der XOR-Funktion im kartesischen Koordinatensystem. Hier existiert keine Trenngerade für die Punkte  ${(0, 0), (1, 1)}$  und  ${(0, 1), (1, 0)}$ .Für weitere Anwendungen des Perzeptron-Algorithmus sei auf Anhang [D](#page-76-0) verwiesen.<span id="page-34-0"></span># Künstliche Neuronale Netze

<span id="page-34-1"></span>## 4.1 Renaissance der neuronalen Netze

In den 1980er Jahren sahen die großen Industrienationen in der Erforschung von KI einen Wettbewerbsvorteil, nachdem die Technologie durch den Einsatz von Expertensystemen (siehe Anhang [A.6\)](#page-58-0) Einzug in die Wirtschaft gefunden hatte: So ermöglichte R1/XCON bei dem einsetzenden Unternehmen DEC (Digital Equipment Corporation) Einsparungen in Millionenhöhe[1](#page-34-2): Die Domäne von R1 war die regelbasierte **Konfiguration** von VAX-11/780 Systemen nach Kundenanforderungen[2](#page-34-3). Japan kündigte 1981 das Projekt *5th Generation Computer Systems* (vgl. [\[Gar19\]](#page-87-4)) an, einen Zehnjahresplan für den Aufbau **intelligenter** Computer[\[RN12, 48\]](#page-92-5) [3](#page-34-4), und in Großbritannien sorgte der Alvey-Report[4](#page-34-5) für eine Wiederaufnahme finanzieller Unterstützung, die durch den Lighthill-Report aufgehoben worden war (vgl. [\[RN12, 48\]](#page-92-5))[5](#page-34-6)[6](#page-34-7).Auch der technologische Fortschritt begünstigte das *Wiederauflen* des Interesses an neuronalen Netzen, wie Olazaran in Bezug auf die Modellierung paralleler Prozesse mit Hilfe von neuronalen Netzen anmerkt:[...] increases in computer power and speed due to parallelism will *undoubtedly* favour neural net research. ([\[Ola96,](#page-92-8) 644])<span id="page-34-2"></span>

<sup>1</sup> vgl. [\[RN12, 48\]](#page-92-5); ebenda wird es von *Russell und Norvig* als das erste erfolgreiche kommerzielle expertensystem bezeichnet.<span id="page-34-3"></span>

<sup>2</sup> siehe hierzu [\[McD80\]](#page-91-6) sowie [\[Hor90, 63\]](#page-88-2)<span id="page-34-4"></span>

<sup>3</sup> Zusammenfassend war das Ziel des 5<sup>th</sup> Generation Computer Systems (FGCS)-Projekt: "Its ultimate goal is to develop integrated systems, both hardware and software, suitable for the major computer application in the next decade, identified by the Japanese as 'knowledge information processing'." [\[Sha83, 637\]](#page-93-4).<span id="page-34-5"></span>

<sup>4</sup> [https://www.chilton-computing.org.uk/inf/literature/reports/alvey\\_report/overview.htm](https://www.chilton-computing.org.uk/inf/literature/reports/alvey_report/overview.htm) - empfohlene Massnahmen: [https://www.chilton-computing.org.uk/inf/literature/reports/alvey\\_report/p008.htm](https://www.chilton-computing.org.uk/inf/literature/reports/alvey_report/p008.htm) (beide abgerufen 31.08.2023)<span id="page-34-6"></span>

<sup>5</sup> zu weiteren Hintergründen hierzu siehe Anhang [A.8.](#page-59-0)<span id="page-34-7"></span>

<sup>6</sup> In Deutschland wird 1988 die DFKI GmbH (Deutsches Forschungszentrum für Künstliche Intelligenz) gegründet, eine wirtschaftsnahe Forschungseinrichtung auf dem Gebiet innovativer Softwaretechnologien auf der Basis von Methoden der Künstlichen Intelligenz [\(https://www.dfki.de/fileadmin/user\\_upload/DFKI/Medien/Ueber\\_uns/DFKI\\_im\\_UEberblick/Unternehmensprofil/20210120\\_DFKI\\_Unternehmensprofil\\_DE.pdf\)](https://www.dfki.de/fileadmin/user_upload/DFKI/Medien/Ueber_uns/DFKI_im_UEberblick/Unternehmensprofil/20210120_DFKI_Unternehmensprofil_DE.pdf), abgerufen 31.08.2023.Mit den in den 1980er Jahren verfügbaren Supercomputern und Parallelrechner[7](#page-35-2) erhält auch der *Konnektionsismus* Auftrieb, der neuronale Netze als Grundlage hat (vgl. [\[Dor91, 15\]](#page-86-4)), und mit dem sich Modelle wieder mehr an den biologischen Vorbildern orientieren sollten[8](#page-35-3).<span id="page-35-0"></span>## 4.2 Mehrschichtige neuronale Netze

Bislang haben wir überwiegend künstliche Neuronen betrachtet, bei denen die Eingabe direkt mit der Ausgabe verbunden ist. Allerdings haben wir bereits für komplexe Boolesche Funktionen in Abschnitt [3.1.5](#page-20-1) gesehen, dass ein Verbund von mehreren MCP-Zellen in der Lage ist, auch Funktionen für nicht linear separierbare Daten zu modellieren. Hierzu hatten wir das MCP-Netz in zwei Schichten aufgeteilt, in denen die erste Schicht  $X^{1} := (\neg A \land B)$  sowie  $X^{2} := (\neg B \land A)$  und die zweite Schicht  $X^{1} \lor X^{2}$  formt, was die disjunktive Normalform von XOR ist (Tabelle [3.6](#page-23-2)).Bei dem Rosenblatt-Perzeptron, das alleine nicht in der Lage ist, XOR zu erlernen, handelt es sich um ein *einschichtiges* neuronales Feedforward-Netz. Das bedeutet, dass es nur Eingabe und Ausgabe gibt und die Informationen ausschliesslich in Richtung Ausgang *fließen* (vgl. [\[RN12, 848\]](#page-92-5)).Ein mehrschichtiges Perzeptron *(MLP, multi-layer perceptron)* [\[GBC18,](#page-88-3) 6] ist in der Lage, nicht-linear-separierbare Daten zu klassifizieren. Ein MLP repräsentiert ein tiefes Feedforward-Netz, in dem die Eingabeschicht *(Input Layer)* und die Ausgabeschicht *(Output Layer)* über weitere Schichten von Neuronen *(hidden layer)* verbunden ist; die Neuronen in diesen Schichten implementieren Eingabe- und Aktivierungsfunktion und leiten ihre Berechnungen an die nächsten Zellen bis zu der Ausgabeschicht weiter. Murtagh zeigt in [\[Mur91,](#page-91-7) 184 f.] die Modellierung von XOR anhand eines MLPs.<span id="page-35-1"></span>#### 4.2.1 Backpropagation

In gleicher Arbeit zeigt *Murtagh* ein MLP, das mittels *Backpropagation* [\[9\]](#page-35-4) Daten klassifiziert, die keinen linearen Zusammenhang besitzen (siehe [\[Mur91,](#page-91-7) 185 f.]). Der Algorithmus geht auf *Rumelhart*, *Hinton* und *Williams* zurück, die in [\[RM87,](#page-92-7) 318 ff.] eine Methode [\[10\]](#page-35-5) vorstellen, um berechnete Werte rückwärts in das Netz einzuspeisen. Hierbei wird für die Netzausgabe (*forward pass*) ein  $Approximationsfehler$  berechnet, der als Basis für die Gewichtsänderungen beim rückwärtigen Lauf (*backward pass*) bis zur ersten verborgenen Schicht genutzt wird. Der Vorgang<span id="page-35-2"></span>

<sup>7</sup> Auch Fausett nennt bessere Rechenleistung als einen Grund für den erneuerten Enthusiasmus (vgl. [\[Fau94, 26\]](#page-87-2)). Im Kontext der in diesem Kapitel vorgestellten mehrschichtigen Netze und ihren versteckten Schichten ist nachvollziehbar, **dass** mehr Rechenleistung den komplexen Verfahren entgegenkommt. Goodfellow et al. gehen auf die Korrelation **Modellgröße** und Anzahl der Nervenzellen in einem menschlichen Gehirn in [\[GBC18, 24 f.\]](#page-88-3) ein.<span id="page-35-3"></span>

<sup>8</sup> vgl. [\[RM87, 43\]](#page-92-7) sowie [\[GBC18, 18 f.\]](#page-88-3)<span id="page-35-4"></span>

<sup>9</sup> das meist genutzte neuronale Modell [\[Ert21c,](#page-86-3) 313]<span id="page-35-5"></span>

<sup>10</sup> The ability to create useful new features distinguishes *back-propagation* from earlier, simpler methods such as the perceptron-convergence procedure.[\[RHW86, 533\]](#page-92-9)![](_page_36_Figure_1.jpeg)

<span id="page-36-4"></span>Abb. 4.1. Exemplarische Darstellung der Architektur eines einfachen Feed-Forward-Netzes. (Quelle: Eigene Darstellung)

Ein Feed-Forward-Netz mit zwei Eingabeeinheiten x1, x2, zwei versteckten Schichten und einer Ausgabeeinheit y. Das dargestellte Netz ist vergleichsweise klein. Groÿe Modelle wie Microsoft's Turing-NLG besitzen bis zu 105 Schichten und 530.000.000.000 Parameter [\(https://www.microsoft.com/en-us/re](https://www.microsoft.com/en-us/research/blog/using-deepspeed-and-megatron-to-train-megatron-turing-nlg-530b-the-worlds-largest-and-most-powerful-generative-language-model/) [search/blog/using-deepspeed-and-megatron-to-train-megatron-turing-nlg-530b-the-worlds-l](https://www.microsoft.com/en-us/research/blog/using-deepspeed-and-megatron-to-train-megatron-turing-nlg-530b-the-worlds-largest-and-most-powerful-generative-language-model/) [argest-and-most-powerful-generative-language-model/,](https://www.microsoft.com/en-us/research/blog/using-deepspeed-and-megatron-to-train-megatron-turing-nlg-530b-the-worlds-largest-and-most-powerful-generative-language-model/) abgerufen 27.09.2023).

(*forward pass*, *backward pass*, *forward pass*...) wird so lange für alle Trainingsbeispiele wiederholt, bis die Gewichte sich nicht mehr ändern, oder eine andere Schranke (wie bspw. *Epoche* oder *Zeit*) erreicht ist (vgl. [\[Ert21c,](#page-86-3) 315]) [11](#page-36-0).Die mathematische Basis für Backpropagation ist das Gradientenabstiegsverfahren, das dabei hilft, in einem neuronalen Netz Parameter für möglichst optimale (d.h. kleine) Verlust-Werte (also geringe Fehler-Werte) zu nden (vgl. [\[RN12,](#page-92-5) 837]; s. a. Abbildung [4.3\)](#page-38-0)[12](#page-36-1). Als Aktivierungsfunktion unterstützt eine Sigmoid[13](#page-36-2)-Funktion[14](#page-36-3) (Gleichung [4.1](#page-37-1) sowie Abbildung [4.2\)](#page-37-2) aufgrund ihres nicht-linearen Charakters eine gröÿere Klasse darstellbarer Funktionen und damit Lösungen für

<span id="page-36-0"></span><sup>11</sup> ausführlicher Algorithmus in [\[RN12,](#page-92-5) 853, Abbildung 18.24].

<span id="page-36-1"></span><sup>12</sup> ein kompakter Überblick zum Thema Optimierung auf Gradientenbasis ndet sich in [\[GBC18,](#page-88-3) 90 .]

<span id="page-36-2"></span>

<sup>13</sup> *sigmoid*: *Sigma*, griechischer Buchstabe  $Σ$ , entspricht dem lateinischen *S*; *eidos* (*griechisch*) Form, Gestalt<span id="page-36-3"></span><sup>14</sup> Historisch wurde Backpropagation mit der Sigmoidfunktion implementiert. [\[Ert21c,](#page-86-3) 314, Fussnote 4]. Siehe hierzu [\[RM87,](#page-92-7) 328 f.]. Ertel fügt hinzu: Mittlerweile haben sich jedoch andere Funktionen als besser bewährt. In [\[Ert21c,](#page-86-3) 319 f.] geht der Autor auf Probleme und Verbesserungen des mittlerweile über 30 Jahre alten Verfahrens ein. Goodfellow et al. stellen fest, dass Backpropagation der vorherrschende Ansatz für das Training tiefer Modelle (im Jahr 2018) ist [\[GBC18,](#page-88-3) 19].

Probleme, die ein klassisches Perzeptron nicht lösen kann (vgl. [\[Ert21c, 316\]](#page-86-3)) [15](#page-37-3) [16](#page-37-4).<span id="page-37-1"></span>Sigmoid:![](_page_37_Figure_3.jpeg)

<span id="page-37-2"></span>

Abb. 4.2. *Plot einer Sigmoid-Funktion.* (Quelle: *Eigene Darstellung*)<span id="page-37-0"></span>#### 4.2.2 Hopfield-Netz

Der Physiker John J. Hopfield stellt 1982 in [\[Hop82\]](#page-88-4) ein Modell für ein asynchrones neuronales Netz[17](#page-37-5) vor, das auf neurobiologischen Aspekten beruht (vgl. [\[Hop82,](#page-88-4) 2554]) und 5 Jahre später in Zusammenarbeit mit AT&T Bell Laboratories[18](#page-37-6) in Form eines neural network chip [\[AR88,](#page-84-3) 457][19](#page-37-7) als Hardware umgesetzt wird: Das Modell ist ein rekurrentes Netz[20](#page-37-8) ohne Schlingen ( $w\_{ii} = 0$ ) (vgl. [\[Ert21c,](#page-86-3) 291])[21](#page-37-9) mit bidirektionalen symmetrischen Kanten ( $w\_{ij} = w\_{ji}$ ) und fungiert als Assoziativspeicher, also als Netz, das, wenn es für eine Eingabe  $x$  die Ausgabe  $y$  liefert, dieselbe Ausgabe  $y$  auch für  $x'$  berechnet, sofern  $x'$  nahe genug bei  $x$  liegt.<span id="page-37-3"></span>

<sup>15</sup> In [\[RM87, 311 ff.\]](#page-92-7) zeigen Rumelhart, Hinton und Williams die Architektur eines mehrschichtigen neuronalen Netzes, das das XOR-Problem über *Backpropagation* löst. In [\[RHW86, 536\]](#page-92-9) grenzen sie ihr Modell vom biologischen Lernen ab: "The learning procedure, in its current form, is not a plausible model of learning in brains."<span id="page-37-4"></span>

<sup>16</sup> Ertel weist darauf hin, dass die Klasse der darstellbaren Funktionen eines Perzeptrons erhöht wird, wenn man eine variable Sigmoid-Funktion verwendet [\[Ert21c, 316\]](#page-86-3). Siehe hierzu auch Sigmoid-Perzeptron in [\[RN12, 847\]](#page-92-5).<span id="page-37-5"></span>

<sup>17</sup> in asynchronen Modellen werden die Aktivierungen der Neuronen unabhängig voneinander und zu unterschiedlichen Zeitpunkten berechnet (vgl. [\[Roj93, 49\]](#page-92-4) sowie ebenda S. 282)<span id="page-37-6"></span>

<sup>18</sup> ehemalige Forschungsabteilung der Telefongesellschaft AT & T; gehört seit 2016 zu Nokia (<https://www.bell-labs.com>, abgerufen 03.09.2023)<span id="page-37-7"></span>

<sup>19</sup> [https://techmonitor.ai/technology/att\\_creates\\_parallel\\_neural\\_net\\_chip\\_to\\_solve\\_routing\\_problems](https://techmonitor.ai/technology/att_creates_parallel_neural_net_chip_to_solve_routing_problems)<span id="page-37-8"></span>

<sup>20</sup> Ein rekurrentes neuronales Netz speist seine Ausgaben wieder in seine eigenen Eingaben ein [\[RN12,](#page-92-5) 847]. Im Gegensatz zu Feedforward-Netzen sind rekurrente Netze also rückgekoppelt.<span id="page-37-9"></span>

<sup>21</sup> Eine Schlinge *(engl. loop)* in einem Graphen ist ein Kantenzug, der einen Knoten mit sich selbst verbindet [\[Die17, 30\]](#page-86-5). Ein Beispiel für ein Netz mit Schlingen ist das **MAXNET** (siehe [\[Lip87\]](#page-90-1)), das zu der Gruppe der *competitive nets* gehört: Es kann als Subnetz zur Ermittlung der Zelle mit dem größten Aktivierungswert genutzt werden (vgl. [\[Fau94, 158 f.\]](#page-87-2)).![](_page_38_Figure_1.jpeg)

<span id="page-38-0"></span>

Abb. 4.3. Skizzierung des Zusammenhangs der Fehlerfunktion und lokalen Minima (Quelle: in Anlehnung an [\[Son22, 52, Abb. 2.15\]](#page-94-1))Die y-Achse repräsentiert den Fehlerwert, die x-Achse den berechneten Gewichtsvektor  $w<sup>1</sup>$  in einem neuronalen Netz. Offensichtlich existiert in dem Netz  $w^{\*}$ , für den der Fehler geringer ist als für  $w<sup>1</sup>$ . Das Gradientenabstiegsverfahren wird genutzt, um diese Minima zu finden (vgl. [\[Son22,](#page-94-1) 52]).(vgl. [\[Roj93,](#page-92-4) 251])[22](#page-38-1). Dadurch ist das Netz gegenüber *Rauschen* und *Störungen resistent*[23](#page-38-2).Ertel führt die Begeisterung für neuronale Netze und den Aufschwung der Neuroinformatik in den 80er Jahren wesentlich auf die "biologische Plausibilität", das gut verstandene mathematische Modell und die beeindruckende Simulation zur Mustererkennung des Hopfield Modells zurück [\[Ert21c,](#page-86-3) 297]. Anderson und Rosenfeld bemerken, dass der Einfluss physikalischer Systeme auf das Hopfield Netz auch das Interesse der Physiker an neuronalen Netzen geweckt hat, und dadurch das Forschungsfeld erweitert wurde (vgl. [\[AR88,](#page-84-3) 458]). Dies ist darauf zurückzuführen, dass sich die Summe aller Terme in einem Hopfield-Netz wie folgt berechnet [24](#page-38-3):   
<span id="page-38-4"></span>
$$E = -1/2\sum\_{i=1}^{n}\sum\_{j=1}^{n} w\_{ij}x\_ix\_j + \sum\_{i=1}^{n}\Theta\_ix\_i\tag{4.2}$$

Dies wird auch als die Energiefunktion des Netzes bezeichnet, wobei  $E$  entweder konstant bleibt oder kleiner wird - aber nicht größer: Ist in einem Netz eine solche Energiefunktion vorhanden, kann gezeigt werden, dass das Netz konvergiert.<span id="page-38-1"></span>

<sup>22</sup> Nach dem Training ist das Netz dazu in der Lage, für einen Stimulus ein Aktualisierungsmuster einzunehmen, *dass* diesem am ähnlichsten ist (vgl. [\[RN12,](#page-92-5) 882]), was an die *Cell Assemblies* von Hebb erinnert (s. a. Anhang [B.2\)](#page-65-0). Lansner verweist in [\[Lan09,](#page-90-2) 179] genau darauf, merkt aber gleichfalls an, dass das Modell aufgrund der Rekurrenz und Symmetrie nicht seinem biologischen Vorbild entspricht (vgl. [\[Lan09,](#page-90-2) 180]).<span id="page-38-2"></span>

<sup>23</sup> Rauschen bzw. Störungen bei Stimuli in Form von Bildern ( $n \times m$  Pixeln) können durch zufällig hinzugefügte oder entfernte Pixel entstehen, oder durch Rotation (axiale Verschiebung) der Daten vor dem Einspeisen in das Netz. Beispiele für verrauschte Daten in [\[Ert21c, 294\]](#page-86-3).<span id="page-38-3"></span>

<sup>24</sup> siehe [\[Roj93,](#page-92-4) 287]; Rojas weist an selber Stelle auf den Faktor  $\frac{1}{2}$  hin: Dadurch wird die Symmetrie berücksichtigt und  $w\_{ij}x\_{j}$  und  $w\_{ji}x\_{i}$  insgesamt nur einmal berechnet.(vgl. [\[Fau94,](#page-87-2) 139]), und zwar hin zu einem Zustand *minimaler Energie*: Ertel erklärt hierzu, dass gelernte Muster in dem Netz *Minima der Energiefunktion im Zustandsraum* darstellen; werden zu viele Muster gelernt, konvergiert das System gegen Minima, die keinen gelernten Mustern entsprechen. Damit ist das Modell formal äquivalent zu einem physikalischen Modell des Magnetismus [\[Ert21c,](#page-86-3) 293][25](#page-39-1), wo ebenfalls solche *Phasenübergänge* von einem geordneten hin zu einem chaotischen System beobachtet werden können[26](#page-39-2).Ackley et al. stellen 1985 in [\[AHS85\]](#page-84-5) die Boltzmann-Maschine[27](#page-39-3) vor, eine *Modifikation* eines *Hopfield*-Netzes, in dem sich die Zellen stochastisch [\[AR88,](#page-84-3) 635] und globale Zustände des Netzes nach der Boltzmann-Verteilung[28](#page-39-4) verhalten. Das Netz versucht lokale Minima zu überwinden (vgl. *Gradientenabstiegsverfahren* in Abschnitt [4.2.1\)](#page-35-1), indem ihm erlaubt wird, zu größeren  $E$  (s. Gleichung [4.2\)](#page-38-4) zu springen, um so zu einem globalen Minimum zu konvergieren[29](#page-39-5). Das Verfahren wird auch *simulated annealing* bezeichnet[30](#page-39-6).#### <span id="page-39-0"></span>4.2.3 Neocognitron

Unter dem Namen *Cognitron* 1975 beschreibt **Fukushima** in [\[Fuk75\]](#page-87-5) ein mehrschichtiges Netz mit selbst-organisierenden Eigenschaften zur Mustererkennung, in dem Zellen selektiv auf häufig präsentierte Merkmale reagieren. 1983 veröffentlicht **Fukushima** et al. eine Modifikation dieser Architektur in [\[FMI83\]](#page-87-6)[31](#page-39-7) unter dem Namen **Neocognitron**[32](#page-39-8); sein biologisches Vorbild ist das durch **Hubel** und **Wiesel** [33](#page-39-9) in [\[HW62\]](#page-89-2) beschriebene hierarchische Modell des Wahrnehmungssystems (vgl. [\[FMI83,](#page-87-6) 827]). In dem künstlichen neuronalen Netz haben Zellen in tiefer liegenden Schichten die Eigenschaft, selektiv komplexere Merkmale der Stimuli zu extrahieren, womit sie weniger anfällig gegenüber Rauschen in den Eingabedaten sind. In [\[Fuk80\]](#page-87-7) war der Trainingsprozess durch wiederholte Einspeisung von Mustern ohne weitere Information gegeben (vgl. [\[Fuk80,](#page-87-7) 197])[34](#page-39-10): Die Erweiterung des<span id="page-39-1"></span>

<sup>25</sup> vgl. auch [\[AR98, 417\]](#page-84-6) sowie [\[Hop82, 2556 f.\]](#page-88-4)<span id="page-39-2"></span><sup>26</sup> dem so genannten Spinglass (auch: spin glass); vgl. [\[BY86,](#page-85-2) 900] mit Bezug auf Hopeld-Netze

<span id="page-39-3"></span><sup>27</sup> Hinton und Sejnowski beschreiben das Verhalten bereits 1983 in [\[HS83\]](#page-89-3)

<span id="page-39-4"></span><sup>28</sup> die Boltzmann-Verteilung gibt die Wahrscheinlichkeit an, ein geg. physik. System in einem bestimmten Zustand anzutreen [\(https://de.wikipedia.org/wiki/Boltzmann- Statistik,](https://de.wikipedia.org/wiki/Boltzmann-Statistik) abgerufen 05.09.2023)

<span id="page-39-5"></span><sup>29</sup> vgl. [\[AHS85,](#page-84-5) 151] sowie [\[Köh90,](#page-90-3) 107]

<span id="page-39-6"></span><sup>30</sup> vgl. [\[Ert21c,](#page-86-3) 297]. Rojas schreibt dazu Gelingt es, die Temperatur nach dem richtigen Plan auf null zu verringern, wird sich das Netz mit groÿer Wahrscheinlichkeit in einem globalen Minimum stabilisieren. [\[Roj93,](#page-92-4) 322]. Der Begri Annealing ist hier aus der Werkstokunde entlehnt: Eine entsprechende Wärmebehandlung von Materialien unterstützt die Erzeugung gewünschter Werkstoeigenschaften wie Festigkeit, z.B. bei der Verarbeitung von Glas (s. [\[Von11,](#page-94-2) 3]) oder Schweiÿverbindungen von Metallen (s. [\[Fay+19\]](#page-87-8))

<span id="page-39-7"></span><sup>31</sup> mit Bezug auf [\[Fuk80\]](#page-87-7) (Neocognitron: A self-organizing neural network model for a mechanism of pattern recognition unaected by shift in position).

<span id="page-39-8"></span><sup>32</sup> Video mit Demonstration des Netzes unter [https://www.youtube.com/watch?v=Qil4kmvm2Sw,](https://www.youtube.com/watch?v=Qil4kmvm2Sw) abgerufen 04.09.2023

<span id="page-39-9"></span><sup>33</sup> s. Anhang [B.4](#page-67-0)

<span id="page-39-10"></span><sup>34</sup> learning without a teacher, also unüberwachtes Lernen (unsupervised learning).

Modells beinhaltet nun die Verstärkung der modizierten Synapsen durch überwachtes Lernen[35](#page-40-1), um bessere Resultate bei handgeschriebenen Zeichen zu erzielen (vgl. [\[FMI83,](#page-87-6) 829]). Anderson und Rosenfeld attestieren dem Netz von Fukushima et al. Aspekte, die bei der Entwicklung neuronaler Netze eine wesentliche Rolle spielen werden (siehe [\[AR88,](#page-84-3) 524]): Tatsächlich inspiriert das Neocognitron die Convolutional Neural Networks (CNN) (vgl. [\[LBH15,](#page-90-4) 439]), deren Architektur im

#### <span id="page-40-0"></span>4.2.4 Convolutional Neural Networks

Jahr 1989[36](#page-40-2) Grundlage der Arbeit [\[LeC89\]](#page-90-5) von LeCun ist.

Yann LeCun veröffentlicht 1989 seine Arbeit [\[LeC89\]](#page-90-5), in der er verschiedene Netzwerkarchitekturen auf Generalisierungsfähigkeit (s. Abschnitt [3.2.4](#page-29-0)) und Performance untersucht. Er kommt zu dem Schluss, dass eine Reduzierung der freien Parameter [37](#page-40-3) in einem mehrschichtigen Netz zu einer hohen Generalisierungsfähigkeit führt: Bessere Ergebnisse im Vergleich zu ein- bzw. zweischichtigen Netzen können erzielt werden, indem sog. *feature maps* genutzt werden, die in den Schichten für die Merkmalsextraktion der Eingabedaten (hier: zweidimensionale Bilder) verantwortlich sind. Zusätzliche Information wie die Lage der Merkmale in den Eingabedaten werden näherungsweise gespeichert, was zu einer Reduzierung der Größe der *feature maps* im Vergleich zu der Größe der Eingabedaten führt, und damit auch zu einer Reduzierung der Gewichte. Darüber hinaus können mehrere *feature maps* die gleichen Merkmale an unterschiedlichen Orten (*shift invariance*) in den Eingabedaten extrahieren, wodurch die Gewichte unter diesen *feature maps* geteilt werden können (vgl. [\[LeC89,](#page-90-5) 151 f.]). In [\[LeC89\]](#page-90-6) stellen LeCun et al. diese Architektur als Convolutional Network LeNet-1 [38](#page-40-4) vor (vgl. [\[LeC98,](#page-90-7) 13]), das äußerst erfolgreich mittels Backpropagation handgeschriebene Postleitzahlen erkennt [39](#page-40-5). Das Netz performt mit 30 Klassifizierungen pro Sekunde, lediglich die Normalisierung der Eingabedaten stellt einen Flaschenhals bei dem Prozess dar. Wird dieser berücksichtigt, werden 10-12 Ergebnisse pro Sekunde erzielt (vgl. [\[LeC89,](#page-90-6) 549]).<span id="page-40-1"></span><sup>35</sup> We use a learning-with-a-teacher process for the reinforcement of the modiable synapses in the new large-scale model, instead of the learning-without-a-teacher process applied to the previous model. [\[FMI83,](#page-87-6) 827]; Anderson und Rosenfeld bewerten dies als some handcrafted ne tuning [\[AR88,](#page-84-3) 524 f.]

<span id="page-40-2"></span><sup>36</sup> ein Jahr nach Erscheinen von [\[AR88\]](#page-84-3).

<span id="page-40-3"></span><sup>37</sup> freie Parameter sind die Parameter des Netzes, die durch den Lernvorgang festgelegt werden, also bspw. die Gewichte, Schwellenwerte oder auch die Lernrate, wenn diese durch Verwendung bestimmter Optimierungsalgorithmen adaptiv ist, wie bspw. Adam (vgl. [\[GBC18,](#page-88-3) 346] mit Verweis auf [\[KB17\]](#page-89-4)) <sup>38</sup> siehe Anhang [A.9](#page-59-1)

<span id="page-40-4"></span>

<span id="page-40-5"></span>

<sup>39</sup> Wobei die Ziffern zu Matrizen der Dimension  $16 \times 16$  transformiert und als Eingabedaten in das Netz eingespeist werden. Die Transformation behält das Seitenverhältnis der Zeichen bei. Die Werte der Matrix an den Positionen  $a\_{ij}$  entsprechen Grauwerten mit einem normalisierten Wertebereich von [ $-1$ ,  $1$ ] (vgl. [\[LeC+89,](#page-90-6) 542]).Eine mathematische Basis von CNNs ist die *Faltungsoperation* [40](#page-41-0): Hierbei wird auf Eingabedaten ein *Kernel* (die *Faltungsmatrix*) [41](#page-41-1) angewendet, wobei das Ergebnis der *Faltungsoperation* die *feature map* (Merkmalskarte) ist (vgl. [\[GBC18,](#page-88-3) 370]). Goodfellow et al. erläutern in [\[GBC18,](#page-88-3) 374 .] die Optimierungen, die durch den Einsatz von *Faltung* hervorgehen: Durch den Einsatz von Kerneln, die nur aus einem Bruchteil der Größe der Eingabedaten bestehen [42](#page-41-2), können aussagekräftige Merkmale aufgespürt werden, was dazu führt, dass weniger Parameter gespeichert werden müssen und gleichzeitig die *statistische Effizienz* des Netzes erhöht wird (*sparse interaction* bzw. *sparse weights*). Durch das bereits erwähnte *parameter sharing* (auch: *tied weights*) kann die Effizienz des Netzes erhöht und der Speicherplatzverbrauch verringert werden, und Schichten weisen eine *Äquivarianz* gegenüber Verschiebung auf [43](#page-41-3).CNNs nutzen neben den Convolution Schichten auch Pooling Schichten (vgl. [\[Ert21c,](#page-86-3) 325]), die die Ausgaben des Netzes durch eine statistische Gröÿe der nahegelegenen Ausgaben ersetzt [\[GBC18,](#page-88-3) 379], was die Zahl der Pixel auf den feature maps reduziert[44](#page-41-4), auÿerdem wird als Aktivierungsfunktion meistens die nichtlineare Re-Lu (Rectied Linear Unit, s. Gleichung [4.3](#page-41-5) und Abbildung [4.5\)](#page-42-0) verwendet, die die Konvergenz der Netze verbessert (vgl. [\[Ert21c,](#page-86-3) 327]).

ReLU:

<span id="page-41-5"></span>
$$f(x) = \max(0, x) \tag{4.3}$$

<span id="page-41-0"></span><sup>40</sup> convolution (engl.): Faltung

<span id="page-41-1"></span><sup>41</sup> das biologische Analogon zu den Filtern [Kerneln] sind die bei den Sinnesorganen vorkommenden rezeptiven Felder. [\[Ert21c,](#page-86-3) 326]. Vgl. hierzu auch [\[LBH15,](#page-90-4) 439].

<span id="page-41-2"></span><sup>42</sup> Goodfellow et al. beziern für Eingaben von 1.000.000 Pixeln Kernel mit einer Grösse von einigen hundert Pixeln als ausreichend (siehe [\[GBC18,](#page-88-3) 374]).

<span id="page-41-3"></span>

<sup>43</sup> bereits erwähnt wurde die shift invariance: Wird bspw. ein Bild  $X$  in das Netz  $f$  eingespeist, das in einer Ausgabe  $f(X) = Y$  resultiert, dann bedeutet shift invariance, dass eine Verschiebung der Eingabedaten  $g(X) = X + $  in dem gleichen  $Y$  resultiert:  $f(X) = f(g(X))$ . *Äquivarianz* (engl. equivariance) bedeutet, das eine Änderung der Eingabedaten auch zu einer gleichartigen Änderung der Ausgabe führt:  $f(g(x)) = g(f(x))$  (vgl. [\[GBC18,](#page-88-3) 377]).<span id="page-41-4"></span><sup>44</sup> LeCun et al. weisen darauf hin, dass die Pooling Schicht auch die Aufgabe hat, semantisch ähnliche Merkmale zusammenzufassen: the role of the pooling layer is to merge semantically similar features into one. [\[LBH15,](#page-90-4) 439]

![](_page_42_Figure_1.jpeg)

<span id="page-42-1"></span>Abb. 4.4. Beispiel einer Faltungsoperation. (Quelle: in Anlehnung an [\[GBC18,](#page-88-3) 372, Abbildung 9.1])

In dem Beispiel wird zur Faltung ein  $2 \times 2$ -Kernel mit einer  $3 \times 4$ -Eingabe verwendet. Das Ergebnis ist eine  $2 \times 3$ -feature map.![](_page_42_Figure_4.jpeg)

<span id="page-42-0"></span>Abb. 4.5. Plot der ReLU. (Quelle: Eigene Darstellung)

# <span id="page-43-0"></span>Neuronale Netze im Gesundheitswesen

Pfannstiel stellt in [\[Pfa22,](#page-92-10) 35, Abb. 1.14] die Rolle der Künstlichen Intelligenz im Gesundheitswesen als Schichtenmodell dar: Künstliche Intelligenz wird umgeben von vier Schichten, von denen jede eine Menge repräsentativer Leistungen enthält. Diese lassen sich grob einteilen in[1](#page-43-1)

- 1. Versorgung des Patienten
- 2. Herstellung / Zulieferung durch Pharmazie bzw. Medizintechnologie
- 3. Organisation das Gesundheitswesen
- 4. Selbstversorgung des Patienten

In jeder dieser Schicht übernimmt die KI wichtige Rollen, z.B. in der Diagnostik  $(1.)$ , der Wirkstoffentwicklung  $(2.)$ , der Abrechnung von Leistungen  $(3.)$  oder als Software in embedded Systems wie Wearables  $(4.)$ . Zum Beispiel werden die in Abschnitt [4.2.4](#page-40-0) vorgestellten CNNs aufgrund ihrer Erfolge bei der Objektklassifikation [2](#page-43-2) in der Diagnostik eingesetzt [3](#page-43-3): Je nach Verfahren zeigt sich, dass die Netze mindestens genauso gute Diagnosen erstellen wie erfahrene Ärzte, und bessere als wenig erfahrene Ärzte (vgl. [\[She+19,](#page-93-5) 7]). Doch auch in anderen Bereichen des Gesundheitswesens finden neuronale Netze praktische Anwendungen. Im Folgenden werden einige vorgestellt.<span id="page-43-1"></span><sup>1</sup> Reihenfolge analog zu dem Modell in [\[Pfa22\]](#page-92-10), von Innen nach Aussen

<span id="page-43-2"></span>

<sup>2</sup> vgl. [\[Ert21c,](#page-86-3) 330]. Goodfellow et al. stellen etwas alle gemeiner fest, dass CNNs "gewaltige Erfolge in der Praxis gebracht" haben [\[GBC18,](#page-88-3) 369]. Als Beispiel sei *PSPNet* genannt, ein CNN zur semantischen Segmentierung von Bilddaten (*scene parsing*), das Zhao et al. in [\[Zha+17\]](#page-95-1) vorstellen. Heutzutage betreiben Unternehmen wie Google, Facebook, Microsoft und IBM Forschung und Entwicklung im Bereich der Bildverarbeitung mit CNNs, und im Bereich Hardware entwickeln bspw. NVIDIA [\(https:](https://nvidianews.nvidia.com/news/nvidia-introduces-drive-agx-orin-advanced-software-defined-platform-for-autonomous-machines) [//nvidianews.nvidia.com/news/nvidia-introduces-drive-agx-orin-advanced-software-defined-platform-for-autonomous-machines,](https://nvidianews.nvidia.com/news/nvidia-introduces-drive-agx-orin-advanced-software-defined-platform-for-autonomous-machines) abgerufen 07.09.2023) und Samsung Chips zur Echtzeiterkennung der Umgebung [\[LBH15,](#page-90-4) 440].<span id="page-43-3"></span><sup>3</sup> bspw. stellen Brinker at al. in [\[Bri+18\]](#page-85-3) 13 Arbeiten zur Klassikation von Hautläsionen mit Hilfe von CNNs vor.

<span id="page-44-0"></span>## 5.1 Automatisierung in der Gesundheitswirtschaft

Um für die in Deutschland knapp 73 Millionen gesetzlich Krankenversicherten[4](#page-44-2) Leistungen im Gesundheitswesen abzurechnen, werden durch die Leistungserbringer Finanzdienstleister beauftragt. So leiten bspw. Apotheken eingelöste Kassenrezepte an Apothekenrechenzentren weiter, die die Abrechnungen mit den Krankenkassen durchführen. Obwohl Rezepte heutzutage überwiegend maschinell erstellt werden, kommt es bei den Rechenzentren nach der Digitalisierung der Rezepte (bspw. durch Scannen) häufig zu manueller Nachkorrektur, wenn abrechnungsrelevante Daten nicht vollständig erfasst werden können, wie Höfer et al. in [\[HWN22,](#page-89-5) 698] feststellen. Um den zusätzlichen Arbeitsaufwand durch Nachkorrekturen zu reduzieren (aufgrund von Störfaktoren wie ausgedünnte Zeichen oder Textüberlagerungen), zeigen Höfer et al. ebenda ein neuronales Netz, das in Auftrag eines führenden Abrechnungs- und Finanzdienstleisters erstellt wurde. Ziel des Netzes ist die Rekonstruktion[5](#page-44-3) von Rezepten, die bei Plausibilitätskontrollen auffällig sind.Ihr neuronales Netz zur Rekonstruktion von Rezepten ist ein CNN mit 7 Faltungsschichten, denen jeweils eine Poolingschicht folgt. Insgesamt werden 40.000 Datensätze für das Training genutzt, sowie 10.000 Validierungsdatensätze. Die Rezepte werden auf den für die Abrechnung relevanten Teil zugeschnitten, sodass die Eingabedaten aus 720 × 460 Pixeln bestehen. Sie zeigen, dass Ihr Netz bei der Rekonstruktion von Korrekturzeichen eine relative Verbesserung von  $27.85 ext{ extperthousand}$  erreicht[6](#page-44-4) und aufgrund dieses Erfolges in den Workflow der zu dem Auftraggeber gehörenden Abrechnungszentren integriert wurde.<span id="page-44-1"></span>## 5.2 Pharmaforschung

Im Jahr 2016 gelingt es der von *Google DeepMind* entwickelten Software AlphaGo, den Südkoreaner Lee Sedol als einen der weltbesten Go-Spieler in diesem Spiel zu schlagen[7](#page-44-5). Go verfügt über  $2,08 \times 10^{170}$  gültige Spielpositionen und gehört damit zu den komplexesten Brettspielen[8](#page-44-6). Kurz nach diesem beachtlichen Erfolg entscheidet *Google DeepMind*, dass das in der Software verwendete 13-lagige CNN-Netz, mit seiner 19 × 19 Eingabe- und Ausgabematrix sowie trainiert mit über 30 Millionen Spielzügen (vgl. [\[Ert21a,](#page-86-6) 371]) reif sei für den Einsatz in der Wissenschaft. Im selben Jahr beginnt das Unternehmen mit der Forschung an AlphaFold[9](#page-44-7): Die Software soll helfen, das Problem der Proteinfaltung zu vereinfachen. Darunter<span id="page-44-2"></span>

<sup>4</sup> [https://www.gkv-spitzenverband.de/krankenversicherung/kv\\_grundprinzipien/alle\\_gesetzlichen\\_krankenkassen/alle\\_gesetzlichen\\_krankenkassen.jsp](https://www.gkv-spitzenverband.de/krankenversicherung/kv_grundprinzipien/alle_gesetzlichen_krankenkassen/alle_gesetzlichen_krankenkassen.jsp), abgerufen am **12.09.2023**<span id="page-44-3"></span>

<sup>5</sup> tatsächlich liegt die Vermutung nahe, dass *das* Netz sollte eingesetzt werden, um den Hochleistungs- scanner zu ersetzen. Ziel war es aber, in einem Vorverarbeitungsschritt die Bildqualität zu erhöhen (vgl. [\[HWN22, 698\]](#page-89-5))<span id="page-44-4"></span>

<sup>6</sup>  $5 ext{ extperthousand}$  waren ursprünglich anvisiert (vgl. [\[HWN22, 711\]](#page-89-5)).<span id="page-44-5"></span>

<sup>7</sup> <https://www.spiegel.de/netzwelt/gadgets/go-duell-software-alphago-siegt-gegen-lee-sedol-a-1081975.html>, abgerufen 08.09.2023<span id="page-44-6"></span>

<sup>8</sup> <https://tromp.github.io/go/legal.html>. abgerufen 08.09.2023<span id="page-44-7"></span>

<sup>9</sup> [\[Jum+21\]](#page-89-6), s. a. [https://www.deepmind.com/research/highlighted-research/alphafold/timeline-of-a-breakthrough,](https://www.deepmind.com/research/highlighted-research/alphafold/timeline-of-a-breakthrough) abgerufen 08.09.2023versteht man die Vorhersage der Struktur eines Proteins auf Basis seiner Aminosäuresequenz (vgl. [\[Dil+08\]](#page-86-7)) [10](#page-45-1); mit  $10^{300}$  verschiedenen Konstellationen[11](#page-45-2) ist die Struktur schwer zu berechnen. Der Pharmaindustrie erlaubt das Wissen über die Struktur von Proteinen die Herstellung von Medikamenten, deren Wirkstoffe bspw. Proteinfunktionen aktivieren oder hemmen[12](#page-45-3) .Großen Erfolg hat die Software 2020 bei dem CASP14-protein-folding-contest[13](#page-45-4). Mit 170.000 Proteinstrukturen trainiert und von  $∼$  200 GPUs unterstützt erreicht AlphaFold2 Bestwerte[14](#page-45-5), was als Durchbruch für die Medizin bewertet wird (vgl. [\[Cal20,](#page-85-4) 204]).## <span id="page-45-0"></span>5.3 Diagnostik

Szolovits et al. argumentieren 1988 in [\[Szo88\]](#page-94-3), dass die Abfrage von Symptomen zur Feststellung von Krankheiten[15](#page-45-6) auch von Expertensystemen (s. Abschnitt [4.1](#page-34-1)) übernommen werden kann. Es zeigt sich dort ebenfalls, dass Ärzte kritisch gegenüber computergestützten Assistenzsystemen stehen. Teach und Shortliffe stellen bereits 1981 fest, dass es medizinischem Fachpersonal wichtig ist, dass das System den Entscheidungsweg zur Diagnose erklären kann; dass der Computer stets die korrekten Diagnosen stellt, wird als weniger wichtig bewertet (vgl. [\[TS81,](#page-94-4) 551, Table V:  $D.1$  sowie  $D14$ ]. In dieser Studie werden auch ethische Bedenken seitens der Mediziner aufgeführt[16](#page-45-7). Dass computergestützte medizinische Assistenzsysteme dann kaum Anwendung im klinischen Umfeld fanden, führen Lucieri et al. in [\[Luc+22\]](#page-91-8) auch auf solche Bedenken zurück: Erst steigende Rechenleistung und die fortschreitende Leistungsfähigkeit tiefer neuronaler Netze weckte das Interesse an KI unter den Medizinern, dank der Erfolge bildbasierter CNNs auch in der Diagnostik (vgl. [\[Luc+22,](#page-91-8) 728]). Dem oben erwähnten Wunsch einer erklärbaren KI ( $xAI$  [17](#page-45-8)) wird seitdem nachgegangen, was sich aufgrund des Blackbox-Charakters[18](#page-45-9).<span id="page-45-1"></span><sup>10</sup> postuliert 1972 von Annsen in seiner Nobelpreislaudatio [\[Chr73,](#page-85-5) 223]

<span id="page-45-2"></span><sup>11</sup> [https://web.archive.org/web/20110523080407/http://www-miller.ch.cam.ac.uk/levinthal/l](https://web.archive.org/web/20110523080407/http://www-miller.ch.cam.ac.uk/levinthal/levinthal.html) [evinthal.html,](https://web.archive.org/web/20110523080407/http://www-miller.ch.cam.ac.uk/levinthal/levinthal.html) abgerufen 08.09.2023

<span id="page-45-3"></span><sup>12</sup> Bei dem strukturbasierten Wirkstodesign hilft die Kenntnis über die Struktur des Zielproteins bei der Entwicklung von Medikamenten, deren Moleküle zur Wirkstoentfaltung an die Proteine andocken (vgl. [\[SKM10,](#page-94-5) 29 .]).

<span id="page-45-4"></span><sup>13</sup> CASP (Critical Assessment of Techniques for Protein Structure Prediction), ein seit 1994 alle zwei Jahre stattndender Wettbewerb zur Vorhersage von Proteinstrukturen [\(https://predictioncent](https://predictioncenter.org/) [er.org/](https://predictioncenter.org/) , abgerufen 08.09.2023)

<span id="page-45-5"></span><sup>14</sup> mit einem Score von 92.4 GDT. In den Jahren vor AlphaFold lag der Score bei ca. 30-40 GDT. GDT bedeutet global distance test mit einem Wertebereich zwischen 1 und 100 und gibt die Ähnlichkeit einer Proteinstruktur mit der Struktur eines Vergleichsmodells an ( [https://proteopedia.org/wiki](https://proteopedia.org/wiki/index.php/Calculating_GDT_TS) [/index.php/Calculating\\_GDT\\_TS,](https://proteopedia.org/wiki/index.php/Calculating_GDT_TS) abgerufen 09.09.2023)

<span id="page-45-6"></span><sup>15</sup> bei gleichzeitigem Ausschluss anderer Krankheiten

<span id="page-45-7"></span><sup>16</sup> In dem Papier ndet sich auch die Befürchtung unter den Teilnehmern an der Umfrage, dass computergestützte Systeme den Arzt ersetzen könnte (vgl. [\[TS81,](#page-94-4) 543]).

<span id="page-45-8"></span><sup>17</sup> Abkürzung für (engl.) explainable AI

<span id="page-45-9"></span><sup>18</sup> [https://spectrum.ieee.org/ai-failures,](https://spectrum.ieee.org/ai-failures) abgerufen 09.09.2023

insbesondere bei Architekturen mit Millionen von Parametern[∙19](#page-46-0) in neuronalen Netzen aber als schwierig erweist[∙20](#page-46-1).Trotz allem ist nicht von der Hand zu weisen, dass neuronale Netze in der Qualität der Diagnosen gleichauf sind mit denen von medizinischem Fachpersonal (vgl. [\[She+19,](#page-93-5) 1]). Amato et al. listen in [\[Ama+13\]](#page-84-7) unter anderem Studienergebnisse bzgl. des Einsatzes neuronaler Netze bei der Diagnostik von kardiovaskulären Krankheiten, Tumor-Erkrankungen sowie Diabetes auf, und kommen bei der Auswertung zu dem Ergebnis, dass die neuronalen Netze für einer Vielzahl verschiedener Symptome korrekte Diagnosen erstellen: Zum Beispiel werden Audioaufnahmen der Pumptätigkeit des Herzens zur Klassifizierung von Herzklappenfehler genutzt, bei dem das eingesetzte Netz - ein MLP mit 3-Schichten unter Verwendung von Backpropagation - eine Erfolgsrate von knapp  $95 ext{ extperthousand}$  vorweisen kann[21](#page-46-2).In [\[Est+17\]](#page-86-8) trainieren Estava et al. ein CNN basierend auf GoogleNet Inception  $v^3$  [22](#page-46-3) mit über  $1.000.000$  Bildern aus  $1000$  verschiedenen Kategorien, um danach über transfer learning [23](#page-46-4) mit  $129.450$  gelabelten Bilddateien aus  $2032$  verschiedenen Krankheiten ein Netz zur Diagnose von Hautkrebs zu erstellen. Sie zeigen, dass das Netz bei der Korrektheit der gestellten Diagnosen genauere Diagnosen erstellt als ein Mediziner [24](#page-46-5).Irving et al. stellen in [\[Irv+19\]](#page-89-7) "CheXpert"[25](#page-46-6) vor, einen *öentlichen* Datensatz mit 224.316 Aufnahmen des Thorax von 65.240 verschiedenen Patienten zur Klassizierung von 14 Befunden (u.a. Lungenentzündung, Fraktur, Pleuraerguss). Für das Training nutzen sie *DenseNet121*, ein CNN, in dem jede Schicht mit jeder anderen verbunden ist (vgl. [\[HLW16\]](#page-88-5))[26](#page-46-7). Die Inputdaten bestehen aus  $320 \times 320$  Pixeln. Bei den Tests zeigt sich, dass ihr Netz bei der Diagnose von Kardiomegalie, Ödemen sowie Pleuraergüssen besser abschneidet als die Radiologen, die für die Studie zum Vergleich eingesetzt wurden[27](#page-46-8).<span id="page-46-0"></span><sup>19</sup> AlexNet: 60.000.000 Parameter [\[KSH12,](#page-90-8) 1]

<span id="page-46-1"></span><sup>20</sup> Einige erfolgreiche Ansätze jüngster Zeit fassen Lucieri et al. in [\[Luc+22,](#page-91-8) 733 ] zusammen. Steinwender geht in [\[Ste22,](#page-94-6) 765] auf die Zertizierungspicht von Medizinprodukten in der EU ein, und das mit der damit verbundenen Datenschutzgrundverordnung auch eine Interpretierbarkeit bzw. Erklärbarkeit für die KI-Systeme einhergeht

<span id="page-46-2"></span><sup>21</sup> Bezug auf [\[U§u12,](#page-94-7) 71]

<span id="page-46-3"></span><sup>22</sup> Im Vergleich zu AlexNet nur 5.000.000 Parameter, aber erreicht bei der Bildklassizierung bessere Werte als andere Modelle (vgl. [\[Sze+15\]](#page-94-8)). Eine interessanten Diskussionsgrundlage zu den Ausführungen in [\[LeC89\]](#page-90-5) (s. Abschnitt [4.2.4\)](#page-40-0).

<span id="page-46-4"></span><sup>23</sup> beim transfer learning werden semantisch gleiche Ausgaben für verschiedenklassige Eingaben genutzt (vgl. [\[GBC18,](#page-88-3) 602 f.]).

<span id="page-46-5"></span><sup>24</sup> The deep learning CNN outperforms the average of the dermatologists at skin cancer classication using photographic and dermoscopic images [\[Est+17,](#page-86-8) 3, Figure 2]

<span id="page-46-6"></span><sup>25</sup> [https://stanfordmlgroup.github.io/competitions/chexpert/,](https://stanfordmlgroup.github.io/competitions/chexpert/) abgerufen 10.09.2023

<span id="page-46-7"></span>

<sup>26</sup> DenseNet: Dense Convolutional Network. In klassischen CNNs mit  $L$  Schichten existieren  $L$  direkte Verbindungen, also eine Verbindung für eine obere und die darunterliegende Schicht. Durch die Architektur von *DenseNet* existieren in dem Netz  $\frac{L(L + 1)}{2}$  direkte Verbindungen.<span id="page-46-8"></span><sup>27</sup> siehe auch [https://intermountainhealthcare.org/news/2019/09/ai-system-accurately-det](https://intermountainhealthcare.org/news/2019/09/ai-system-accurately-detects-key-findings-in-chest-x-rays-of-pneumonia-patients-within-10-seconds/) [ects-key-findings-in-chest-x-rays-of-pneumonia-patients-within-10-seconds/](https://intermountainhealthcare.org/news/2019/09/ai-system-accurately-detects-key-findings-in-chest-x-rays-of-pneumonia-patients-within-10-seconds/) (abgerufen 10.09.2023) fasst die Ergebnisse bei der Diagnose von Lungenentzündung zusammen

## <span id="page-47-0"></span>5.4 Therapie und Prognose

Die HL7 -Organisation[28](#page-47-1) wurde 1987 mit dem Ziel gegründet, einen Kommunikationsstandard für den elektronischen Datenaustausch im Gesundheitswesen zu etablieren. Teil des Standards ist die FHIR-Spezikation[29](#page-47-2), die von Rajkomar et al. in [\[Raj+18\]](#page-92-11) für ein neuronales Netz genutzt wird, das für einen mit diesen Daten verknüpften Patienten bei der Hospitalisierung Vorhersagen über folgende Punkte erstellt:

- Mortalität während des Krankenhausaufenthaltes (inpatient mortality)
- ungeplante stationäre Wiederaufnahme (unexpected readmissions within 30 days)
- Verlängerung des Aufenthaltes (long length of stay)
- Befund bei Entlassung (discharge diagnoses)

Validiert wurde das Netz über insg. 46.864.534.945 Datenpunkte: Die von verschiedenen Krankenhäusern zur Verfügung gestellten 216.221 Patietenakten wurden hierzu aufgeteilt in 194.470 Trainingsdaten und 21.751 Testdaten, allesamt im FHIR-Format. Die Autoren des Papiers konnten zeigen, das ihr Netz die traditionellen klinischen Modelle in den ersten 3 genannten Punkten übertrit.

Eine ähnliche Arbeit stellen Choi et al. in [\[Cho+16\]](#page-85-6) vor, in der sie untersuchen, ob elektronische Patientendaten genutzt werden können, um mit Hilfe rekurrenter neuronaler Netze Vorhersagen zu Diagnose, Medikation und Wiedervorstellung beim Arzt zu treen. Sie zeigen, dass ihr Netz als medizinisches Assistenzsystem in den aufgeführten Punkten geeignet ist, und darüber hinaus mittels transfer learning in Kliniken eingesetzt werden kann, bei denen die Datenmenge nicht für ein Training des Netzes ausreicht.

Prognosemodelle werden auch auf anderer Ebene genutzt, bspw. bei der Evaluierung der korrekten Behandlungsmethode. In [\[Li+21\]](#page-90-9) stellen Li et al. *G-Net* vor, ein Deep Learning Framework für *counterfactual prediction* als Assistenzsystem für Ärzte. Es soll dabei helfen, unter Berücksichtigung von zur Verfügung stehenden Daten wie Therapie- und Krankheitsverlauf der Patienten die richtige Behandlungsstrategie auszuwählen. Unter *counterfactual prediction* sind hier alternative Szenarien gemeint, also das Ergebnis einer zunächst in der Theorie eingeschlagenen Therapie, für die von der Software das Behandlungsergebnis ermittelt  $wird$  [30](#page-47-3).Als Beispiel führen Li et al. die Flüssigkeitszufuhr zur Stabilisierung von Intensivpatienten an, die einen septischen Schock erlitten haben. Anwendungszeitpunkt-, -art und -menge bestimmen den Genesungsverlauf und können unerwünschte Nebenwirkungen verhindern, allerdings auch solche begünstigen, die bis hin zum Tode führen [31](#page-47-4). Die in *G-Net* verwendeten Netze sollen dabei helfen, in Verbindung<span id="page-47-1"></span><sup>28</sup> Health Level Seven [https://hl7.org,](https://hl7.org) abgerufen 11.09.2023

<span id="page-47-2"></span><sup>29</sup> Fast Healthcare Interoperability Resources, [https://hl7.org/fhir/,](https://hl7.org/fhir/) abgerufen 11.09.2023

<span id="page-47-3"></span><sup>30</sup> This is particularly important in clinical settings, where physicians may have to choose between multiple treatment strategies for their patients but are unable to test all of them before making a decision [\[Li+21,](#page-90-9) 282]

<span id="page-47-4"></span><sup>31</sup> vgl. [\[Sha+20,](#page-93-6) 5 f.]

von Parametern wie Laborwerte des Patienten sowie Zeitpunkt und Menge der Verabreichung eine Aussage über den Behandlungseffekt zu treffen [<sup>32</sup>](#page-48-0), um so die bestmögliche Behandlungsmethode auszuwählen.<span id="page-48-0"></span>

<sup>32</sup> unter <https://news.mit.edu/2022/deep-learning-technique-predicts-clinical-treatment-outcomes-0224> (abgerufen 10.09.2023) ist eine ausführlichere Pressemitteilung mit Verweis auf das zitierte Papier zu finden.<span id="page-49-0"></span># Zusammenfassung und Bemerkung

In Kapitel [2](#!page-6-0) haben wir gesehen, dass ein biologisches neuronales Netz ein Kommunikationsverbund ist, in dem hochkomplexe biochemische Prozesse ineinandergreifen. Diese Prozesse ermöglichen eine Informationsverarbeitung: Eine einzelne Nervenzelle ist in der Lage, Signale zu empfangen, zu verrechnen und ein Signal auszugeben. Löst ein Aktionspotenzial aus, diffundieren Neurotransmitter in den synaptischen Spalt, die Folgezelle verrechnet die daraus entstehenden elektrischen Signale und so setzt sich die Kette fort, oft bis tausende von Neuronen ein Signal an das Ende der Kommunikationskette weitergeleitet haben. Ob ein einzelnes Vesikel ein  $mEPSC$  verursacht, mag dabei auf analytischer Ebene interessant sein. Die Frage, welches der oft über tausend Vesikel, die in einem Neuronenverband an einer Signalweiterleitung beteiligt sind, ursächlich für eine muskuläre Reaktion ist, ist sicherlich schwieriger zu beantworten.Tiefe künstliche neuronale Netz mit ihren Millionen von Parametern (vgl. [\[Sze+15\]](#page-94-8)) erweisen sich im Hinblick auf eine Analyse ähnlich *undurchschaubar* [1](#page-49-1).Die Modellierung solcher Netze folgt dabei in Teilen dem biologischen Vorbild, und es mag zunächst überraschen, dass einige solcher Verschaltungsmuster - wie die Divergenz oder die rekurrente oder laterale Hemmung - zunächst an Logikgatter erinnern (vgl. [\[Eil19, 58 f.\]](#page-86-0)). Es liegt nahe, dass die Wissenschaft versucht, solche naturgegebenen verrechnenden Einheiten und logischen Verschaltungen zu verstehen und in mathematische Formeln zu gießen, um ein Modell zu erstellen, das menschliche Intelligenz erklärt und nachstellt, und dann als Abstraktionen auf Maschinen übertragen wird:  if you really understand something, you can usually make a machine do it [\[AR88, xiii\].](#page-84-3)Einer dieser Versuche wurde in Abschnitt [3.1](#page-16-1) mit dem *MCP-Modell* vorgestellt, ein empirisches Modell [2](#page-49-2), das auf Analyse und einfacher Schwellenwertlogik basiert (vgl. [\[AR88, 16\]](#page-84-3)).<span id="page-49-1"></span>

<sup>1</sup> dieser Blackbox-Charakter wird problematisch, wenn *bspw.* von Assistenzsystemen in der Medizin Entscheidungswege aufgezeigt werden sollen, die zu einer bestimmten Diagnose oder Therapieempfehlung führen (siehe Abschnitt [5.3\)](#page-45-0).<span id="page-49-2"></span>

<sup>2</sup> auch "caricature model"; beides in [\[HI97, 4\]](#page-88-6)In dem dort zitierten Papier weisen McCulloch und Pitts darauf hin, dass das *Alles-Oder-Nichts-Prinzip* (vgl. Abschnitt [2.3.1\)](#page-13-2) als Vorbild für ihre Abstraktion durch Aussagenlogik dient. Das von ihnen erstellte Modell ist dabei eine starke Vereinfachung des biologischen Vorbilds und weist dadurch eine äußerst nützliche Eigenschaft auf:This ensures its status as a model, and not a copy, of a real neuron, and makes it possible to implement on a digital computer. ([\[BJ90,](#page-85-0) 43; Hervorhebung i. O.]).Dabei wurde ein anderer neurobiologischer Prozess, der heutzutage bei maschinellen Lernverfahren Standard ist, nicht von ihnen berücksichtigt: Die dynamische Anpassung des Netzes [3](#page-50-0).McCulloch und Pitts sind sich all dessen durchaus bewusst[4](#page-50-1). Entsprechend ist ihr Modell statisch und muss zur Bewältigung von Aufgaben zunächst durch Änderung der Netztopologie bzw. Anpassung einzelner Schwellenwerte "konstruiert" werden (vgl. [\[Fau94, 28\]](#page-87-2) sowie [\[Roj93, 51\]](#page-92-4)), selbständig zu lernen vermag es nicht.Die McCulloch-Pitts-Zelle ist von eher geringer Bedeutung für die Neurowissenschaft gewesen [5](#page-50-2). Umso größer war ihr Einfluss auf die Computerwissenschaften [6](#page-50-3): Logische Schaltungen, die Intelligenz und Kognition erklären sollen, brachten den Gedanken an eine "intelligente Maschine" hervor (vgl. [\[Pic04,](#page-92-3) 204]). So war diese Formalisierung ein wichtiges Schlüsselelement für die von-Neumann-Rechnerarchitektur [7](#page-50-4) sowie Wieners Kybernetik [8](#page-50-5), und zusammen mit den nachfolgenden Arbeiten von Hebb [9](#page-50-6) und Rosenblatt ebnete es den Weg für die Forschung an künstlicher Intelligenz (vgl. [\[Arb00,](#page-84-2) 1]).Erwähnenswert ist auch die Bemerkung von McCulloch und Pitts *bzgl.* Berechenbarkeit:This is of interest as *affording* a psychological *justification* of the Turing definition of computability and its equivalents, Church's *A-definability* and Kleene's primitive recursiveness: if any number can be computed by an.<span id="page-50-0"></span>

<sup>3</sup> "Lernen" geschieht auf physiologischer Ebene durch die Modulierung von Synapsen (vgl. [\[HS19c, 115\]](#page-89-8)); McCulloch und Pitts setzen in ihrem Kalkül voraus, dass sich das Netz nicht verändert (siehe Abschnitt [3.1.1](#page-16-2)).<span id="page-50-1"></span>

<sup>4</sup> McCulloch and Pitts acknowledged in their paper that their definition of a neuron was idealized, and that they made physical assumptions that were 'most convenient for the calculus' [\[Abr02, 21\]](#page-84-8). Siehe auch [\[MP43, 101\]](#page-91-2): we regard facilitation and extinction as dependent upon continuous changes in threshold related to electrical and chemical variables, as well as "He [McCulloch] never claimed that the 1943 model exhausted the richness of individual neurons" [\[Arb00, 11\]](#page-84-2).<span id="page-50-2"></span>

<sup>5</sup> The immense theoretical influence of this paper was not among neuroscientists but among computer scientists. [\[AR88, 17\]](#page-84-3); Rojas kommt zu einem *ähnlichen* Schluss: "Die Art der Schaltungen, die mit diesen Zellen gebaut werden, ist aber biologisch gesehen nicht so relevant." [\[Roj93, 51\]](#page-92-4)<span id="page-50-3"></span>

<sup>6</sup> Die Arbeit war ebenso wichtig für die Entwicklung des „Konnektionismus“ *(vgl.* [\[Arb00, 11\]](#page-84-2)*)*, einer Forschungsrichtung der künstlichen Intelligenz, in der Modelle *(neuronale Netze)* untersucht werden, mit deren Hilfe sich intelligente und kognitive Handlungen auf Maschinen übertragen lassen *(vgl.* [\[Dor91, v\]](#page-86-4)*)*.<span id="page-50-4"></span>

<sup>7</sup> siehe [\[von93\]](#page-95-2)<span id="page-50-5"></span>

<sup>8</sup> siehe Anhang [B.8](#page-70-0)<span id="page-50-6"></span>

<sup>9</sup> siehe [\[Heb49\]](#page-88-7)organism, it is computable by these denitions, and conversely. ([\[MP43,](#page-91-2) 113])

Sie nehmen hiermit Bezug auf die von Alan Turing (1912 - 1954) bereits 1936 veröentlichte Arbeit [\[Tur37\]](#page-94-9), in der Turing die Beschreibung der Operationen seines Computers einleitet mit:

Let us imagine the operations performed by the computer to be split up into 'simple operations' which are so elementary that it is not easy to imagine them further divided. ([\[Tur37,](#page-94-9) 250])

Parallelen zu der Architektur der von Turing aufgestellten Modelle und dem von McCulloch entworfenen psychon als kleinste Einheit psychischer Aktivitäten sind erkennbar. Piccinini stellt dazu fest, dass die Aussage, MCP-Netze können Berechnungen anstellen, einen ersten wichtigen Bezug zwischen mathematischer Theorie und Neurowissenschaft herstellte (vgl. [\[Pic04,](#page-92-3) 197]).

McCulloch schreibt dazu später

Pitts and I showed that brains were Turing machines, and that any Turing machine could be made out of neurons. ([\[McC16,](#page-91-9) 164])

und stellt fest, dass das Nervensystem eine ausgezeichnete logische Maschine repräsentiert (vgl. [\[McC16,](#page-91-9) 80]).

Konsequenterweise nutzt Minsky in [\[Min67,](#page-91-3) 32 .] die MCP-Zelle als endlichen Automaten[10](#page-51-0)[11](#page-51-1) mit zwei Zuständen, aus denen andere endliche Automaten gebaut werden, und nennt diese, im Jahr 1967 schon geläug: Neuronale Netze [\[Min67,](#page-91-3) 33].

Minsky analysiert ebenfalls das im Abschnitt [3.2](#page-25-0) vorgestellte Perzeptron.

In [\[MP88\]](#page-91-4) untersucht er zusammen mit Papert u.a. das Verhalten des Perzeptrons im Fall nicht-separierbarer Daten[12](#page-51-2) sowie das Problem bzgl. recognition of connectedness[13](#page-51-3), bei dem es um die Erkennung zusammenhängender geometrischer Figuren geht.

<span id="page-51-0"></span><sup>10</sup> Ein endlicher Automat ist eine informationsverarbeitende Maschine. Basierend auf Eingaben lassen sich mit einer solchen Maschine Zustände, Zustandsübergänge und Ausgaben modellieren. Bei einem endlichen Automaten sind die genannten Eingaben, Zustände, und Ausgaben endlich (vgl. [\[SSH95,](#page-94-10) 26 .]).

<span id="page-51-1"></span><sup>11</sup> dass MCP-Netze endliche Automaten sind: Auch in [\[Cow90,](#page-86-9) 76] sowie [\[Roj93,](#page-92-4) 47, Satz 2.4]. Arbib weist darauf hin, dass die Arbeit von McCulloch und Pitts grundlegend für Automatentheorie gewesen ist (vgl. [\[Arb00,](#page-84-2) 8]).

<span id="page-51-2"></span><sup>12</sup> in [\[MP88,](#page-91-4) 181 .]

<span id="page-51-3"></span><sup>13</sup> s. [\[MP88,](#page-91-4) 12, Theorem 0.8] sowie [\[MP88,](#page-91-4) 249 f.]. In dem Epilog, der 19 Jahre nach der Erstveröfentlichung geschrieben wird, machen sie deutlich, dass sie nicht nachweisen wollten, dass ein Perzeptron nicht in der Lage zu der Erkennung zusammenhängender geometrischer Figuren sei, sondern dass die Komplexität von verschiedenen Aufgaben Anforderungen an ein Perzeptron stellt, die zu der damaligen Zeit (Ende 1950er / Anfang 1960er) schwierig umzusetzen gewesen sind (vgl. [\[MP88,](#page-91-4) 250])

Ihr Anliegen mit dem Buch ist es, die (mathematischen) Grenzen des Rosenblatt-Perzeptrons auf ein formales Gerüst zu stellen (vgl. [\[MP88,](#page-91-4) 249]). Allerdings verstärken ihre Ausführungen die zu diesem Zeitpunkt ohnehin schon skeptische Haltung[14](#page-52-0) gegenüber der Fähigkeiten des Perzeptrons[15](#page-52-1) und künstlicher neuronaler Netze allgemein, was Anderson und Rosenfeld rückblickend auch auf Aussagen in der Einleitung des Buches zurückführen wie[16](#page-52-2)

hundreds of projects and experiments [bzgl. des Perzeptrons] were generally disappointing, and the explanations inconclusive. The machines usually work quite well on very simple problems but detoriate very rapidly as the tasks assigned to them get harder. ([\[MP88,](#page-91-4) 19])

Diesen Pessimismus betrachten Minsky und Papert im Jahr 1988 in Retrospektive (vgl. [\[MP88,](#page-91-4) xiii]). Sie sind sich der Behauptung bewusst, ihr Buch hätte mit dem Aufzeigen der Grenzen des Rosenblatt-Modells den Forscherdrang an maschinellem Lernen gebremst:

One popular version is that the publication of our book so discouraged research on learning in network machines that a promising line of research was interrupted. ([\[MP88,](#page-91-4) xii])

Anderson und Rosenfeld erwähnen the inuence of Marvin Minsky and Seymour Papert on the loss of interest in neural networks during the 1970s [\[AR98,](#page-84-6) X].

Russell und Norvig fassen zusammen, dass Minsky und Papert in ihrem Buch bewiesen haben, dass ein Perzeptron alles lernen kann, was es auch darstellen kann, aber es könnte halt nur sehr wenig darstellen (vgl. [\[RN12,](#page-92-5) 45])[17](#page-52-3). Auf gleicher Seite verweisen sie auf die zunehmende Komplexität der zu berechnenden Modelle, die nicht alleine durch schnellere und bessere Hardware kompensiert werden konnte.

Der Lighthill Report[18](#page-52-4) wird 1973 die britischen Regierung dazu bewegen, das Budget für die Forschung an KI zu kürzen (vgl. [\[RN12,](#page-92-5) 45]): Neuronale Netze werden als Grundlage künstlicher Intelligenz zunächst verworfen[19](#page-52-5), und Forschungsarbeiten an ihnen geht bis zum Anfang der 1980er Jahre zurück. Diese Periode ist gemeinhin als KI-Winter (siehe Anhang [A.8\)](#page-59-0) bekannt.

Die in Kapitel [4](#page-34-0) vorgestellten Architekturen und Algorithmen sorgten dann zusammen mit dem technologischen Fortschritt für ein erneutes Aueben der Forschung an neuronalen Netzen und Künstlicher Intelligenz in den 1980er Jahren.

<span id="page-52-0"></span><sup>14</sup> Here was a machine that could do pattern recognition in a humanlike way; it could recognize all kinds of things. Almost everyone at MIT was very skeptical [\[AR98,](#page-84-6) 99]

<span id="page-52-1"></span><sup>15</sup> auch wegen schlechter Skalierbarkeit des Modells in der Praxis (vgl. [\[AR88,](#page-84-3) 159])

<span id="page-52-2"></span><sup>16</sup> Auch eine generelle Irritation und Enttäuschung über das Perzeptron-Modell in Hinblick auf mehrschichtige Modelle meinen Anderson und Rosenfeld in we [Minsky und Papert] consider it to be an important research problem to elucidate (or reject) our intuitive judgement that the extension is sterile. [\[MP88,](#page-91-4) 232] zu erkennen (vgl. [\[AR88,](#page-84-3) 159]).

<span id="page-52-3"></span><sup>17</sup> vgl. hierzu [\[MP88,](#page-91-4) xiii]

<span id="page-52-4"></span><sup>18</sup> Workers entered the eld around 1950, and even around 1960, with high hopes that are very far from having been realised in 1972. In no part of the eld have the discoveries made so far produced the major impact that was then promised. in [https://www.chilton-computing.org.uk/inf/literatu](https://www.chilton-computing.org.uk/inf/literature/reports/lighthill_report/p001.htm) [re/reports/lighthill\\_report/p001.htm,](https://www.chilton-computing.org.uk/inf/literature/reports/lighthill_report/p001.htm) 3 Past disappointments, abgerufen 28.08.2023

<span id="page-52-5"></span><sup>19</sup> vgl. [\[Ola96,](#page-92-8) 641]

Einige der Ergebnisse dieser Anstrengungen wurden in Kapitel [5](#page-43-0) in Auszügen vorgestellt. Dass dabei die Algorithmen nicht immer der Funktionsweise des natürlichen Vorbildes entsprechen, haben wir bei dem Backpropagation-Verfahren gesehen (siehe Abschnitt [4.2.1\)](#page-35-1).Bei allem Fortschritt, der durch Forschung und Wissenschaft in den vergangenen Jahren erreicht wurde, ist bei den hier vorgestellten Ergebnissen aber vor allem eins deutlich: Die hohe Leistungsfähigkeit einiger dieser Netze kann nur durch Lernen erreicht werden (vgl. [\[AHR19, 40\]](#page-84-9)), wozu umfangreiche, qualitativ hochwertige Daten benötigt werden.Nguyen und Patrick stellen in [\[NP16\]](#page-91-10) fest, dass klinische Daten aufgrund verschiedener Faktoren wie Heterogenität *(maschinell / handschriftlich erstellte Daten)* und weiterem Rauschen, wie unbekannten Abkürzungen oder Rechtschreibfehlern, als Trainingsdaten für maschinelles Lernen eine besondere Herausforderung darstellen.Normierte Daten können deshalb helfen, die Auswertung, Anwendung aber auch den Austausch derselben zu erleichtern, wie das Beispiel aus Abschnitt [5.4](#page-47-0) zeigt (vgl. auch [\[AHR19,](#page-84-9) 42]).Wir dürfen schließen, dass Künstliche Intelligenz in Form neuronaler Netze nicht nur durch komplexe mathematische Modelle und hohe Rechenleistung ermöglicht wird: Sie benötigt zu der erfolgreichen Bewältigung ihrer Aufgaben auch eine gesunde Datenbasis für ihre Lernverfahren[20](#page-53-0).<span id="page-53-0"></span>

<sup>20</sup> Dash *et al.* fassen in [\[Das+19\]](#page-86-10) einige wesentliche Punkte zum Thema Big Data im Gesundheitswesen zusammen, *außerdem* Rüping und Sander in [\[RS19\]](#page-93-7), die dort feststellen: "Bei der datengetriebenen Entwicklung von Systemen ist zu beachten, dass die Qualität des Ergebnisses zentral von der Qualität der Eingabedaten abhängt." [\[RS19, 19\]](#page-93-7)# Anhänge

# <span id="page-55-0"></span>Begrie und Ergänzungen

## <span id="page-55-1"></span>A.1 Aktionspotenzial

![](_page_55_Figure_2.jpeg)

<span id="page-55-2"></span>Abb. A.1. Phasen des Aktionspotenzials. (Quelle: in Anlehnung an [\[BCP18,](#page-84-0) 88, Abb. 4.1b])

## Phasen des Aktionspotenzials

Die Entstehung eines Aktionspotenzials kann entsprechend der zeitlichen Reihenfolge in folgende Phasen eingeteilt werden:

## 1. Aufstrich

Na<sup>+</sup> gelangt in die Zelle,  $g\_{Na}$  wird erhöht, mehr Na<sup>+</sup> strömt ein (positive Rückkopplung). Es kommt zu einer Depolarisation,  $V\_{m}$  wächst exponentiell (vgl. [\[SD07,](#page-93-0) 46]).#### 2. Overshoot

V<sup>m</sup> wird positiv (> 0 \, ext{mV}) und nähert sich insgesamt  $E\_{Na} ilde{=} 60 \, ext{mV}$  an [1](#page-56-1) (vgl. [\[BCP18,](#page-84-0) 105]).#### 3. Repolarisationsphase

Auch: Fallende Phase (vgl. [\[BCP18,](#page-84-0) 105]). Natriumkanäle werden inaktiviert. Spannungsabhängige Kaliumkanäle *öffnen* sich ca.  $1 \, ms$  nach Depolarisation[2](#page-56-2),  $K^{+}$ -Ionen strömen aufgrund der elektrochemischen Triebkraft in den EZF, das Membranpotenzial wird wieder negativ[3](#page-56-3).#### 4. Undershoot<sup>[4](#page-56-4)</sup>

Es kommt zu einem  $V\_m$ , der unter  $V^{r}$  liegt, da  $g^{K}$  noch erhöht ist.  $V\_{m}$  nähert sich  $E^{k}$  ( $∼ -80 \, \text{mV}$ ), wozu auch eine erhöhte Pumprate der  $N^{+}-K^{+}-ATPase$ [5](#page-56-5) beitragen kann (vgl. [\[SD07,](#page-93-0) 46]).#### 5. Refraktärphase<sup>[6](#page-56-6)</sup>

- absolute: Ca. 2 ms nach Auslösen des Aktionspotenzials sind die Na<sup>+</sup> Kanäle inaktiviert und dadurch nicht aktivierbar (vgl. [\[FE19, 70\]](#page-87-0)). Es ist keine Aktionspotenzialbildung möglich (vgl. [\[SD07, 46\]](#page-93-0)).- relative: V<sup>m</sup> nähert sich weiter V<sup>r</sup> an. Nachdem einige Na<sup>+</sup>-Kanäle *deaktiviert* wurden, ist eine Auslösung des Aktionspotenzials wieder möglich. Allerdings ist die Reizschwelle erhöht (da  $V<sup>m</sup> < V<sup>r</sup> < V<sub>t</sub>$ ) und die Amplitude des auslösbaren Aktionspotenzials ist reduziert [\[FE19,](#page-87-0) 70].<span id="page-56-0"></span>#### A.1.1 Übertragungsgeschwindigkeit von Signalen in Nervenzellen

Ist das Axon - die Nervenfaser - marklos, wird das Signal kontinuierlich weitergeleitet, und die Leitungsgeschwindigkeit ist eher gering ( $ca. 1 \, \text{m/s}$ ). Die Leitungsgeschwindigkeit hängt hier direkt von dem Durchmesser der Nervenfaser ab und ist proportional zur Wurzel des Fasseradius. Die marklosen Riesenaxone des Tintensches erreichen deshalb aufgrund ihrer Größe Leitungsgeschwindigkeiten von bis zu  $20 \, \text{m/s}$  (vgl. [\[Jon19,](#page-89-1) 79]).<span id="page-56-1"></span>

<sup>1</sup> den es nicht erreicht. Erreicht werden Werte zwischen 0 und  $+40 \, \text{mV}$  (vgl. [\[FE19, 69\]](#page-87-0))<span id="page-56-2"></span>

<sup>2</sup> vgl. [\[BCP18, 105\]](#page-84-0) und [\[SD07, 47, Tafel 2.3 \(A.2\)\]](#page-93-0)<span id="page-56-3"></span>

<sup>3</sup> Die Kaliumleitfähigkeit wird *verzögerter Gleichrichter* genannt, da sie das ursprüngliche Membranpotenzial - mit Verzögerung - wiederherstellt (vgl. [\[BCP18,](#page-84-0) 103]).<span id="page-56-4"></span>

<sup>4</sup> auch: *Nachhyperpolarisation* [\[SD07, 46\]](#page-93-0)<span id="page-56-5"></span>

<sup>5</sup> Die Na<sup>+</sup>-K<sup>+</sup>-ATPase erhält die Ionenkonzentrationsgradienten aufrecht, die für den Fluss von  $Na^+$  und  $K^+$  durch die Kanäle während des Aktionspotenzials erforderlich sind (vgl. [\[BCP18, 105\]](#page-84-0)).<span id="page-56-6"></span>

<sup>6</sup> Die Refraktärphase dient u.a. dazu, die Membran vor einer vorzeitigen Neuerregung zu schützen (vgl. [\[Jon19, 76\]](#page-89-1)). Hochfrequenten Aktionspotenzialsalven von max.  $1000/s$  sind aufgrund dieser Eigenschaft möglich (vgl. [\[SD07, 46\]](#page-93-0) sowie [\[BCP18, 89\]](#page-84-0)). Bear et al. stellen fest: Die Frequenz der Aktionspotenziale ist ein *Maß* für die Stärke des depolarisierenden Stroms [\[BCP18, 89\]](#page-84-0) - je stärker der Reiz, desto mehr Aktionspotenziale werden nacheinander abgefeuert (vgl. [\[BCP18, 90, Abb. 4.3\]](#page-84-0)).Im Gegensatz zu marklosen Nervenfasern erreichen myelinisierte Axone eine höhere Leitungsgeschwindigkeit. Sie sind gegenüber ihrer Umgebung durch Myelinscheiden[7](#page-57-4) besser isoliert (vgl. [\[SD07,](#page-93-0) 48]). Dadurch wird der *Stromfluss* verstärkt und die Erregungsleitung erhöht sich. Diese Isolierschicht ist segmentiert: Myelinscheiden sind in Abständen von  $0, 2 - 2$ <sup>mm</sup> durch sog. Ranvier-Schnürringe unterbrochen. Deren Membran besitzt spannungsabhängige  $Na<sup>+</sup>$ -Kanäle, die das ankommende elektrische Signal durch Depolarisierung der einzelnen Segmentabschnitte kontinuierlich weiterleiten - es wird an den Membranabschnitten jeweils ein neues Aktionspotenzial gebildet (vgl. [\[SD07,](#page-93-0) 48]). Die Weiterleitung in myeliniserten Axonen bezeichnet man deshalb als saltatorische (sprunghafte) Erregungsleitung (vgl. [\[BCP18,](#page-84-0) 109 f.).## <span id="page-57-0"></span>A.2 ATPasen

Kurzform für Adenosintriphosphasen: Enzyme, die ATP in ADP und Phosphat aufspalten (vgl. [\[SD07,](#page-93-0) 26]).

## <span id="page-57-1"></span>A.3 Dendriten

von δένδρον (dendrón) (altgriechisch): Baum; einzelne selten länger als 2mm (vgl. [\[BCP18,](#page-84-0) 28]). Längere Dendriten nden sich an den kortikalen Pyramidenzellen mit einer Länge von 1cm (vgl. [\[Eil19,](#page-86-0) 58]).

## <span id="page-57-2"></span>A.4 Diusion

unter der Diffusion *("diffundere" (lat.): zerstreuen, ausbreiten)* von Molekülen versteht man ihr Bestreben, entlang eines Konzentrationsgradienten *(auch: Konzentrationsgefälle)* einen Ausgleich der Konzentrationsunterschiede zu erreichen. Moleküle in hoher Konzentration **diffundieren** dann in die Bereiche mit niedriger Konzentration: In den in Abschnitt [2.1](#page-7-0) betrachteten Beispielen **diffundieren** bspw.  $K^{+}$ -Ionen, bis ein Gleichgewichtspotenzial erreicht ist.## <span id="page-57-3"></span>A.5 Eektoren

ecere (lat.): bewirken, hervorbringen. Eektoren können wir uns als Endglied der Signalübertragung vorstellen, auch wenn hier wieder interzelluläre Vorgänge stattnden. Vgl. neuromuskuläre Endplatte in [\[BCP18,](#page-84-0) 127, Abs. 3].

<span id="page-57-4"></span><sup>7</sup> Membranschichten, die sich bis zu 100 mal um das Axon wickeln (vgl. [\[Jon19,](#page-89-1) 79])

## <span id="page-58-0"></span>A.6 Expertensysteme

1990 von Friedrich und Stumptner als kommerziell erfolgreichste Teildisziplin der Articial intelligence bezeichnet [\[FS90,](#page-87-9) 14], und ebenda beschrieben als:

Ziel der Expertensysteme ist es, dem Anwender Wissen und Fertigkeiten zur Verfügung zu stellen, über die normalerweise nur speziell ausgebildete oder erfahrene Personen (Experten) verfügen. ([\[FS90,](#page-87-9) 14])

Im groben besteht ein Expertensystem aus einer domänenspezischen Wissensbasis, auf der ein Inferenzmotor zum Finden von Antworten und Schlussfolgerungen operiert. Russel und Norvig erklären, dass Expertensysteme

optimale Entscheidungen empfehlen und dabei die Prioritäten des Benutzers sowie die verfügbaren Evidenzen berücksichtigen ([\[RN12,](#page-92-5) 737])

## <span id="page-58-1"></span>A.7 Goldman-Gleichung

Auch: Goldman-Hodgkin-Katz-Gleichung *(GHK-Gleichung)* nach David Eliot Goldman  $(1910  1998)$ , Alan Lloyd Hodgkin  $(1914  1998)$  und Bernard Katz  $(1911  2003)$ .Wie wir in Abschnitt [2.1](#page-7-0) gesehen haben, liegt V<sup>r</sup> zwischen −70mV und −90mV . Wie kann man nun schlieÿen, dass das Ruhepotenzial durch die Membranpermeabilität von K<sup>+</sup> bestimmt wird, wenn V<sup>r</sup> = −70mV , aber E<sup>K</sup> = −80mV , und die Membran auch noch für andere Ionen wie bspw. N a<sup>+</sup> selektiv permeabel ist[8](#page-58-2) ? Wäre die Membran nur für K<sup>+</sup> permeabel, so läge V<sup>r</sup> sicher bei E<sup>k</sup> (vgl. [\[SD07,](#page-93-0) 32]): Die Nernst-Gleichung kann deshalb nur zur Bestimmung des Membranpotenzials genutzt werden, wenn die Membran nur für ein Ion permeabel ist. Ansonsten ist der erhaltene Wert nur näherungsweise zu verstehen (vgl. [\[FE19,](#page-87-0) 67]).

Das Membranpotenzial kann auch unter Berücksichtigung mehrerer Ionen bestimmt werden: Ionenkanäle unterstützen einen passiven Transport der Ionen zwischen EZF und IZF entlang ihres Konzentrationsgefälles, während Ionenpumpen, die entgegen des Konzentrationsgefälles arbeiten, aktiv transportieren (vgl. [\[Fro19, 30\]](#page-87-10))[9](#page-58-3). Ionenpumpen sind für die Ionenkonzentrationsgradienten und deren Aufrechterhaltung verantwortlich (vgl. [\[BCP18, 76\]](#page-84-0))[10](#page-58-4). Um  $V\_m$  zu berechnen, müssen die Ionen mitberücksichtigt werden, für die die Membran permeabel ist. Dazu kann die Goldman-Gleichung genutzt werden[11](#page-58-5).<span id="page-58-2"></span>

<sup>8</sup> vgl. [\[BCP18,](#page-84-0) 77] sowie [\[SD07,](#page-93-0) 44]: Warum ist  $E<sup>m</sup>$  weniger negativ als  $E<sub>K</sub>$ ?<span id="page-58-3"></span><sup>9</sup> hierfür wird metabolische Energie verbraucht (vgl. [\[Fro19,](#page-87-10) 31]).

<span id="page-58-4"></span><sup>10</sup> es wird ein nicht unwesentlicher Teil von Energie zur Aufrechterhaltung dieser Gradienten verbraucht. Die Natrium-Kalium-Pumpe verbraucht laut Bear et al. etwa 70 % der ATP-Menge, die das Gehirn benötigt (vgl. [\[BCP18,](#page-84-0) 76]).

<span id="page-58-5"></span>

<sup>11</sup> Silbernagl und Despopoulos nutzen für die Bestimmung von V<sup>m</sup> die fraktionelle Leitfähigkeit der involvierten Ionen und rechnen V<sup>r</sup> =  $E<sup>K</sup> \times f<sup>K</sup> + E<sub>Na</sub> \times f<sub>Na</sub> + E<sub>Cl</sub> \times f<sub>Cl</sub>$  (vgl. [\[SD07,](#page-93-0) 32, 1.21])Kandel et al. stellen hierzu fest, dass eine hohe Konzentration eines einzelnen Ions zusammen mit einer hohen Membranpermeabilität für dieses Ion auch einen größeren Beitrag für  $V\_{r}$  leistet:when permeability to one ion is exceptionally high, the Goldman equation reduces to the Nernst equation for that ion. ([\[Kan+13,](#page-89-0) 135])

Fakler und Eilers weisen darauf hin,

dass die Permeabilitäten in komplizierter Weise von der Membranspannung und den Ionenkonzentrationen [...] abhängen und sich meist nur näherungsweise bestimmen lassen. ([\[FE19,](#page-87-0) 67])

## <span id="page-59-0"></span>A.8 KI Winter

Der Begri KI Winter wird in der Literatur mit unterschiedlichen Perioden während der Forschung und Förderung von KI in Zusammenhang gebracht. In dem Kontext des im Abschnitt [4.1](#page-34-1) erwähnten Lighthill Reports bezieht sich der Begri auf die Periode nach 1973:

Lighthill's report provoked a massive loss of condence in AI by the academic establishment in the UK (and to a lesser extent in the US). It persisted for a decade - the so-called 'AI Winter'. (Articial intelligence at edinburgh university: A perspective[12](#page-59-2))

Russell und Norvig beziehen sich auf einen Zeitraum um/ nach 1988, in dem nach einer Phase von Investitionen in Milliardenhöhe in den Forschungszweig viele Unternehmen verschwanden, weil sie ihre auÿergewöhnlichen Versprechungen nicht halten konnten. [\[RN12,](#page-92-5) 48]. Auf gleichen Zeitraum bezieht sich McCorduck in [\[McC04,](#page-91-11) 432]; vgl. hierzu auch:

Dozens of expert systems companies and AI-focused hardware manufacturers failed en masse as hype turned to disillusionment. ([\[Gar19,](#page-87-4) 656; Hervorhebung i.O.])

## <span id="page-59-1"></span>A.9 LeNet

LeCun et al. weisen darauf hin, dass LeNet eine Erweiterung der von LeCun beschriebenen Architektur in [\[LeC89\]](#page-90-5) ist (vgl. [\[LeC+89,](#page-90-6) 544]).

Spätere Iterationen von LeNet durch LeNet-4 und LeNet-5. Die Architektur von LeNet-5 wird später angemessen mit der in Mitte der 90er Jahre zur Verfügung stehenden Technologie skaliert:

In 1989 a recognizer as complex as LeNet-5 would have required several weeks' of training, and more data than was available, and was therefore not even considered. ([\[LeC+98,](#page-90-7) 15])

<span id="page-59-2"></span><sup>12</sup> [https://www.inf.ed.ac.uk/about/AIhistory.html,](https://www.inf.ed.ac.uk/about/AIhistory.html) abgerufen 31.08.2023

Eingabedaten für LeNet-5 sind ein  $32 imes 32$  Pixel großes Bild, außerdem besitzt das Netz  $7$  Schichten (ohne Eingabeschicht) (LeNet-1 :  $3$  verborgene Schichten (vgl. [\[LeC+89,](#page-90-6) 544])). Eine vollständige Beschreibung der eindrucksvollen Architektur findet sich in [\[LeC+98,](#page-90-7) 7 f.]<span id="page-60-0"></span>## A. 10 Lernrate

Die Lernrate  $(\eta)$ , in der Literatur auch  $(\alpha)$ , ist der Koeffizient für die Gewichtsanpassungen in einem künstlichen Neuron.Wie in Abschnitt [3.2.4](#page-29-0) gesehen, berechnet die Lernregel die Gewichte auf Basis des Fehlers, also der Differenz von erwarteter Ausgabe und tatsächlicher Ausgabe: Ist in den Beispielen der Fehler  $-1$ , werden die Gewichte verringert; ist der Fehler  $1$ , werden die Gewichte erhöht. Die Lernrate  $\eta$  ist der Koeffizient für die Gewichtsanpassung und wird auch Schrittweite genannt (vgl. [\[GBC18,](#page-88-3) 93] und [\[RN12,](#page-92-5) 172]).Üblicherweise liegt *η* zwischen 0 und  $1^{13}$ .<span id="page-60-1"></span>## A.11 Neurotransmitter und ihre Rezeptoren

Die *Diffusion* der Vesikel in den synaptischen Spalt dauert ca. 10 – 100 $\mu s$ , danach binden sich die Transmitter an die Rezeptoren der postsynaptischen Zelle (vgl. [\[HS19a,](#page-88-0) 96]), die das interzelluläre chemische Signal [...] in ein intrazelluläres Signal (eine Änderung des Membranpotenzials oder eine chemische Veränderung) in der postsynaptischen Zelle umwandeln [\[BCP18,](#page-84-0) 123].Rezeptoren können hierbei *ionotrop* oder *metabotrop* sein: Inotrope Rezeptoren sind gleichzeitig auch Ionenkanäle und aktivieren sich, wenn ein bestimmter Transmitter an sie bindet (vgl. [\[HS19b, 109\]](#page-88-8)).Metabotrope Rezeptoren lösen intrazelluläre Stoffwechselvorgänge aus, und weitere Botenstoffe (sog. *second messenger*) können dann für eine Aktivierung von Ionenkanälen verantwortlich sein (vgl. [\[RK18,](#page-92-0) 134]).Als Neurotransmitter spielen im zentralen Nervensystem vor allem die Aminosäuren *Glutamat*  $( ext{Glu, erregend})$ , *Gamma-Aminobuttersäure*  $( ext{GABA, hemmend})$ [14](#page-60-3) und *Glycin*  $( ext{Gly, hemmend})$  eine Rolle. An neuromuskulären Endplatten vermittelt Amin *Acetylcholin*  $( ext{ACh, erregend})$ [15](#page-60-4).Schnelle Formen der synaptischen Übertragung dauern zwischen 2 und 100 *ms*, langsame Übertragungen einige 100 *Millisekunden* bis Minuten (vgl. [\[BCP18,](#page-84-0) 129]).<span id="page-60-2"></span>

<sup>13</sup> vgl. [\[Fau94,](#page-87-2) 61]; außerdem:  $α [η]$  ist eine kleine Konstante [\[RN12,](#page-92-5) 172]. Gleiche Stelle beleuchtet das Für und Wider kleiner und großer Werte von  $η$ ; Salomon weist in [\[Sal90,](#page-93-8) 173] darauf hin, dass eine geeignete Lernrate auch von der Aufgabenstellung abhängt.<span id="page-60-3"></span>

<sup>14</sup> GABA: Gamma-Aminobuttersäure. Um den GABA-Spiegel zu erhöhen, kann bspw. Gabapentin verabreicht werden [\(https://www.aerzteblatt.de/archiv/20049/Neuropathien-Gabapentin-bremst-ueberaktive-Neurone,](https://www.aerzteblatt.de/archiv/20049/Neuropathien-Gabapentin-bremst-ueberaktive-Neurone) abgerufen 01.08.2023): Es ist bei der Behandlung von Anfallsleiden wie der Epilepsie sowie bei Nervenschmerzen (Neuropathien) wirksam [\(https://www.gelbe-liste.de/wirkstoffe/Gabapentin\\_21579,](https://www.gelbe-liste.de/wirkstoffe/Gabapentin_21579) abgerufen 01.08.2023)<span id="page-60-4"></span>

<sup>15</sup> zur Entdeckung von **ACh** siehe Anhang [B.5](#page-67-1)f.]). Transmitter werden oft zusammen mit Co-Transmittern ausgeschüttet, die die Erregungsübertragung modulieren (vgl. [\[SD07,](#page-93-0) 52]).

Ob ein exzitatorischer oder inhibitorischer Transmitter auch dieselbe Wirkung in der postsynaptische Zelle hervorruft, entscheidet sich bei den Rezeptoren(vgl. [\[HS19b,](#page-88-8) 109]). Als Beispiel sei das bereits oben erwähnte ACh genannt, das die Kontraktion des Herzens verlangsamt, bei der Skelettmuskulatur jedoch eine schnelle Depolarisation der Muskelfasern bewirkt (vgl. [\[BCP18,](#page-84-0) 137]).

Erregende und hemmende Synapsen kann man auch an ihrer Struktur erkennen: Asymmetrische oder Gray-Typ-I-Synapsen sind auf der postsynaptischen Seite dicker als auf der präsynaptischen, bei gleicher Dimension der Membrandifferenzierungen spricht man von Gray-Typ-II-Synapsen. Typ-I sind in der Regel exzitatorisch, Typ-II inhibitorisch (vgl. [\[BCP18,](#page-84-0) 127 u. 147]).

## <span id="page-61-0"></span>A.12 Perzeptron

#### The Perceptron - A perceiving and recognizing automaton

Das Forschungsprojekt *Perceiving and Recognizing Automaton* beschreibt einen Apparat, der mittels einer Kamera geometrische Figuren erkennen und zuordnen kann (vgl. [\[Ros57,](#page-92-6) 3]). Die Funktionen simuliert Rosenblatt zunächst auf einem IBM 704 Rechner[16](#page-61-1), bevor die Hardware Anfang der 60er Jahre als Mark 1 Perceptron gebaut wird: 400 Cadmiumsulfid-Photozellen auf einem  $20 \times 20$  großen Raster angeordnet - dem S-System *(S = Sensory)* - leiten Signale an das A-System *(A = Association)*; dort werden sie registriert und ausgewertet, und schlussendlich über das R-System *(R = Response)* ausgegeben (vgl. [\[Ros57,](#page-92-6) 4 f.], [\[Ros58,](#page-93-9) 389 f.] sowie [\[Bis06,](#page-85-7) 193, Frank Rosenblatt] und [\[Bis06,](#page-85-7) 196, Figure 4.8]). Dabei lernt die Maschine im ersten Schritt durch die Unterstützung der Ingenieure, wie gegebene Formen zu interpretieren sind: Für aktivierte Photozellen wird die erwartete Ausgabe manuell festgelegt. Die Verbindungen zwischen den S-, A- und R-Units erinnert nicht nur von der Namensgebung her an biologische Neuronen, auch deren Struktur und Verschaltung wird hier als Vorbild genommen (vgl. [\[Ros62,](#page-93-3) 4]).Die S-Units konnten sowohl hemmende als auch erregende Signale in das A-System einspeisen. Darüber hinaus war das R-System in der Lage, über Rückkoppelungen hemmende Signale an das A-System zu senden: Damit sollte verhindert werden, dass weitere R-Units aktiviert werden, die sich mit den bereits aktivierten Units gegenseitig ausschlieÿen (vgl. [\[Ros57,](#page-92-6) 4 f.]).

<span id="page-61-1"></span><sup>16</sup> ausführlich beschrieben in [\[Ros60\]](#page-93-10)

## <span id="page-62-0"></span>A.13 Shunting Inhibition

#### Kurzschlusshemmung bei Neuronen

Wenn ein Transmitter einer inhibitorischen Synapse *Cl*<sup>−</sup>-Kanäle aktiviert, verschiebt sich das Membranpotenzial in Richtung  $E\_{Cl} \approx -65$  mV. Ist das Membranpotenzial der Zelle >  $-65$  mV, kann ein hyperpolarisierendes IPSP ausgelöst werden. Wenn allerdings bereits  $V\_m = E\_{Cl}$  ist[17](#page-62-3), wird kein "sichtbares" IPSP ausgelöst (vgl. [\[BCP18,](#page-84-0) 145 f.]) - die *Cl*<sup>−</sup>-Kanäle sind offen, aber es findet keine Nettoionenbewegung statt. Eine Hemmung der Zelle kann aber trotzdem noch stattfinden, wenn bspw. eine distal liegende exzitatorische Synapse positive Ladungsströme verursacht, und die inhibitorische Synapse proximal zum Soma liegt, in Stromrichtung ausgehend von der exzitatorischen Synapse.Der positive Ladungsstrom kommt dann an der inhibitorischen Synapse mit den geöffneten  $Cl^{-}$ -Kanälen an, und die Depolarisation durch das EPSP wird durch den Einfluss von  $Cl^{-}$ -Ionen (die  $V\_{m}$  wieder auf  $V\_{rev} = E\_{Cl}$  bringen wollen) mitigiert.Aus diesem Grund sind inhibitorische Synapsen oft proximal zum Soma zu nden (vgl. [\[Kan+13,](#page-89-0) 231]).

## <span id="page-62-1"></span>A.14 Soma

von σῶμα (sõma) (altgriechisch): Körper; auch Perikaryon [\[RK18,](#page-92-0) 58]. Bezeichnet den Zellkörper und das Stowechselzentrum des Neurons mit der eine Gröÿe von ca. 20 µm [\[BCP18,](#page-84-0) 29]. Zum Vergleich: ein menschliches Haar hat einen Durchmesser von ca. 70 µm, kleine Bakterien bis zu 20 µm.

## <span id="page-62-2"></span>A.15 Umkehrpotenzial

Wie wir bei der Entstehung des Aktionspotenzials (siehe Abschnitt [2.2\)](#page-10-0) gesehen haben, transportieren spannungsgesteuerte Ionenkanäle stets entlang des elektrochemischen Gradienten (vgl. [\[Fak19, 39\]](#page-86-1)). Im Folgenden sei die Membran zur Vereinfachung nur permeabel für ein Ion, es gelte weiterhin  $V^{m} < E\_{Ion}$ : Die Stromrichtung für das Ion ist einwärts IZF. Ist die Triebkraft positiv wegen  $V^{m} > E\_{Ion}$ , strömt das Ion auswärts EZF. Wenn allerdings
$$V\_{m} - E\_{Ion} = 0$$

dann gilt:

$$V\_m = E\_{Ion} \tag{A.2}$$

<span id="page-62-3"></span><sup>17</sup> häug bei für Chloridleitfähigen GABA Rezeptoren [\[HS19a,](#page-88-0) 100]

In diesem Fall entspricht die Membranspannung dem Gleichgewichtspotenzial des Ions - es findet keine Nettoionenbewegung statt.Der Wert für  $V\_m$ , bei dem die Differenz zwischen  $V\_m$  und  $E\_{Ion}$  bei 0 liegt, wird das Umkehrpotenzial  $V\_{rev}$  genannt, weil hier ein Vorzeichenwechsel stattfindet: Je nachdem, in welche Richtung sich  $V\_m$  ändert, ändert sich auch die Richtung des Stroms. Für ionenspezifische Kanäle entspricht das Umkehrpotenzial ihrem Gleichgewichtspotenzial (vgl. [\[McC13,](#page-91-0) 95 f.]).Sobald eine Membran permeabel für mehr als ein spezifisches Ion ist, muss nach Kandel et al. die relative Leitfähigkeit der Membran für diese Ionen sowie deren Gleichgewichtspotenziale zur Bestimmung des Umkehrpotenzials berücksichtigt werden (vgl. [\[Kan+13,](#page-89-0) 196, Box 9–1]). Für die ACh-Rezeptoren an der motorischen Endplatte[18](#page-63-0), die für  $N^{a^{+}}$  und  $K^{+}$  permeabel sind, folgt damit, dass die Summe ihrer Ströme am Umkehrpotenzial  $V\_{rev} = 0$  sein muss:
$$I\_{Ka} + I\_{Na} = 0$$

(A.3)

Da der Membranstrom  $I\_{Ion}$  gleich dem Produkt der Membranleitfähigkeit und der elektrochemischen Triebkraft für dieses Ion ist (vgl. [\[BCP18, 93\]](#page-84-0)), also
$$I\_{Ion} = g\_{Ion}(V\_m - E\_{Ion}) \tag{A.4}$$

liefert Ersetzen die Gleichung
$$g\_{Na}(V\_m - E\_{Na}) = g\_K(V\_m - E\_K) \tag{A.5}$$

Da am Umkehrpotenzial  $V\_{rev} = V\_{m}$  gilt, können wir  $V\_{m}$  durch  $E\_{rev}$  ersetzen und danach auflösen, was zur folgenden Gleichung führt (vgl. [\[Kan+13, 196, Box 9-1\]](#page-89-0)):
$$E\_{rev} = \frac{E\_{Na} \cdot \left(\frac{g\_{Na}}{g\_{K}}\right) + E\_{K}}{\left(\frac{g\_{Na}}{g\_{K}}\right) + 1} \tag{A.6}$$

Die ACh-Rezeptoren haben an der Endplatte eine relative Leitfähigkeit für  $N^{a^{+}} : K^{+}$  von 1,8, für die Gleichgewichtspotenziale gilt  $E\_{Na} = +55 \, mV$  und  $E^{K} = -100 \, mV$ ; somit folgt nach Einsetzen  $E\_{rev} = 0 \, mV$  (vgl. [\[HS19a,](#page-88-0) 100]). Wenn nun das Membranpotenzial vor der Einwirkung von ACh  $< 0 \, mV$  ist, bewirkt ein Öffnen der Ionenkanäle einen Strom einwärts  $IZF$ , um  $V^{m}$  auf 0 zu bringen (Depolarisation); im umgekehrten Fall  $V^{m} > 0$  fließen Ionen auswärts zu  $E\_{ZF}$ , und es findet eine Hyperpolarisation statt (vgl. [\[BCP18,](#page-84-0) 136, Exkurs 5.4]).<span id="page-63-0"></span>

<sup>18</sup> *chemische Synapse*, die Erregungen an eine Muskelfaser weiterleitet (vgl. [\[SD07, 56\]](#page-93-0))# <span id="page-64-0"></span>Personen

## <span id="page-64-1"></span>B.1 Bernstein, Julius

#### Die Entdeckung bioelektrischer Ströme

Im Jahr 1912 veröentlichte der deutsche Physiologe Julius Bernstein (1839-1917) Erkenntnisse seiner elektrophysiologischen Studien in dem Buch Elektrobiologie - Die Lehre von den elektrischen Vorgängen im Organismus auf moderner Grundlage dargestellt. In dem Kapitel Membrantheorie in [\[Ber12\]](#page-84-10) greift er das Postulat seiner Arbeit Untersuchungen zur Thermodynamik der bioelektrischen Ströme aus [\[Ber02\]](#page-84-11) auf.

Bereits 1902 von ihm veröentlicht, lieferte die Theorie die erste plausible physikalisch-chemische Erklärung bioelektrischer Phänomene (vgl. [\[Sey06,](#page-93-11) 5]): In Zellen bendet sich eine elektrolytische Flüssigkeit, die von einer für bestimmte Ionen permeablen Membran umgeben ist, die eine Potenzialdierenz aufweist (vgl. [\[Ber12,](#page-84-10) 92 f.]):

Denken wir uns, dass diese Elektrolyte aus dem Querschnitt der Fibrillen ungehindert in die umgebende Flüssigkeit *diffundieren*, während sie am Längsschnitt durch die lebende Sarkoplasmahaut daran gehindert werden, weil sie für ein Ion derselben, z. B. für das Anion  $(PO^{-4})$  u. s. w., mehr oder weniger impermeabel ist, so entstünde auf der Oberfläche der Fibrille eine elektrische Doppelschicht, welche nach innen negative, nach außen positive Spannung besitzen würde. ([\[Ber02,](#page-84-11) 542])Knapp 34 Jahre vor seiner Membrantheorie vermutet Bernstein bereits die Existenz eines Aktionspotenzials (vgl. [\[Sch83,](#page-93-12) 168]). Seine Forschungsarbeit über elektrische Muskel-Nerven-Aktivitäten in [\[Ber68\]](#page-85-8) schlieÿt er mit den Worten:

Ich werde im Folgenden diese Welle mit dem Namen 'Reizwelle' bezeichnen, well derjenige Reiz, durch den die Nervenfaser im Centrum Empndung, im Muskel Zuckung erzeugt, auf das Innigste mit dieser Welle verknüpft ist. [...] Da wir nachgewiesen haben, dass die Reizwelle mit derselben Geschwindigkeit sich fortpanzt als die Erregung, so können wir die wohlberechtigte Annahme machen, dass die Reizwelle Nichts anderes ist als das Bild des im Nerven ablaufenden Erregungsvorganges. ([\[Ber68,](#page-85-8) 198 f.])

In den darauffolgenden Jahren und Jahrzehnten haben zahlreiche Forschungen die Theorie bestätigt: Wir wissen heute, dass die ungleiche Ionenverteilung in der *intrazellulären* und *extrazellulären* Flüssigkeit zusammen mit der Permeabilität der Membran für die Entstehung eines Membranpotenzials verantwortlich ist[1](#page-65-1).<span id="page-65-0"></span>## B.2 Hebb, Donald

#### Cells that fire together, wire together: Synaptische Plastizität

Donald Hebb (1904–1985), gebürtiger Kanadier, Sohn eines *Ärzte-Elternpaares* und 1965 nominiert für den Nobelpreis, geht als junger Mann einer Karriere als Schriftsteller nach (vgl. [\[BM03,](#page-85-9) 1013 f.]).Er studiert Englisch als Hauptfach und macht 1924 seinen Bachelor [2](#page-65-2), doch die Schriften Freuds, mit denen er sich nach seinem Abschluss beschäftigt, wecken in ihm den Wunsch, sich tiefer mit Psychologie zu beschäftigen (vgl. [\[BM03, 1013\]](#page-85-9)): An der McGill Universität in Montreal [3](#page-65-3) macht er 1932 seinen Master darin [4](#page-65-4), und leitet dort 16 Jahre später als Professor die Fakultät für Psychologie (vgl. [\[Coo05, 853\]](#page-86-11)).Seine Faszination darüber, wie das Gehirn lernt, Informationen verarbeitet und speichert [5](#page-65-5) wird Bestandteil seiner Forschungsarbeit: 1949 veröffentlicht er das Buch *The organization of Behavior: A Neuropsychological Theory* [\[Heb49\]](#page-88-7); seine darin formulierten Postulate [6](#page-65-6) liefern einen wichtigen Beitrag für die Neurowissenschaften. Als hätte sein Buch eine Art Golgräberstimmung in der Psychologie ausgelöst, schreibt Klein hierzu:It attracted many brilliant scientists into psychology, made McGill University a North American mecca for scientists interested in brain mechanisms of behaviour, led to many important discoveries, and steered contemporary psychology onto a more fruitful path. ([\[Kle99,](#page-89-9) 1])Oft zitiert wird seine Idee bzgl. synaptischer Verstärkung, was heute als Hebb’sche Synapse bekannt ist, [7](#page-65-7):When an axon of cell A is near enough to excite a cell B and repeatedly or persistently takes part in firing it, some growth process or metabolic change.<span id="page-65-1"></span>

<sup>1</sup> siehe hierzu Kapitel [2](#page-6-0)<span id="page-65-2"></span>

<sup>2</sup> an der Dalhousie Universität: <https://dal.ca> (abgerufen 17.08.2023), vgl. [\[Coo05, 852\]](#page-86-11)

<span id="page-65-3"></span>

<sup>3</sup> McGill Universität, Montreal, Quebec (Kanada): <https://www.mcgill.ca/neuro/about/donald-hebb-phd> (abgerufen 16.08.2023)<span id="page-65-4"></span>

<sup>4</sup> Zu der Zeit studierte er in Teilzeit an der McGill Universität: *as a part time graduate student* [\[Kle99, 1\]](#page-89-9). Seine Master-Arbeit schrieb er aufgrund einer Erkrankung im Bett (vgl. [\[BM03, 1014\]](#page-85-9)).<span id="page-65-5"></span>

<sup>5</sup> *vgl.* Eintrag über Hebb in [\[Str01, 298 f.\]](#page-94-11)<span id="page-65-6"></span>

<sup>6</sup> Es sind "three pivotal postulates" [\[Kle99, 2\]](#page-89-9)<span id="page-65-7"></span>

<sup>7</sup> siehe [\[AR88, 43\]](#page-84-3) sowie als Zitat: a: *any two cells or systems of cells that are repeatedly active at the same time will tend to become associated*, so that activity in one facilitates activity in the other. [\[Heb88, 52\]](#page-88-9) sowie b: *A series of such events* [Aktivierung von cell-assemblies] constitutes a *phase sequence* - the thought process. [\[Heb88, 48\]](#page-88-9); die Aussage findet sich im Original bereits in [\[Heb49, xi-xix, "Introduction"\].](#page-88-7)takes place in one or both cells such that A's *efficiency*, as one of the cells *firing* B, is increased. ([\[Heb88,](#page-88-9) 50; Hervorhebung i.O.])Derartige Veränderungen synaptischer Verbindungen wird als Hebbsche Lernregel (vgl. [\[BCP18, 985\]](#page-84-0)) bezeichnet. Das damit verbundene geflügelte Wort *Cells that fire together, wire together* beschreibt die Hypothese bildhaft [8](#page-66-1). Seine Idee der *Cell Assembly* schließt daran an: Damit sind Verbände von Neuronen gemeint, die miteinander verschaltet sind, und deren Verbindungen durch das Hebbsche Lernen so sehr verstärkt sind, dass die Aktivierung einzelner Zellen in diesen Verbänden ausreicht, dass alle Zellen aktiviert werden (vgl. [\[BCP18, 907 f.\]](#page-84-0)).Hebb's *Theorien* gelten durch die Forschung als bestätigt<sup>[9](#page-66-2)</sup>, und mit der von Hebb formulierten *synaptischen* Plastizität wurde auch eine Idee für lernende *künstliche neuronale Netze* geliefert:*[Hebb]* laid the foundation for neoconnectionism which seeks to explain cognitive processes in terms of connections between assemblies of real or **artificial** neurons. ([\[Kle99, 2\]](#page-89-9))<span id="page-66-0"></span>## B.3 Hodgkin, Alan and Huxley, Andrew

Für die Erforschungen der Ionen-Mechanismen, die bei der Erregung und Hemmung von Nervenzellmembranen beteiligt sind, erhalten Alan L. Hodgkin (1914 - 1998) und Andrew F. Huxley (1917 - 2012) im Jahr 1963 den Nobelpreis für Physiologie oder Medizin, zusammen mit John Carew Eccles (1903 - 1997) (vgl. [\[Gle09\]](#page-88-10)).Knapp 80 Jahre nach Bernsteins Beschreibung der „negativen Schwankungen“ und 50 Jahre nach seiner Membrantheorie[10](#page-66-3) führen Hodgkin und Huxley Experimente an Riesenaxonen von Tintenfischen durch, die zu einem mathematischen Modell des Membranverhaltens führen.Einige Jahre vorher - 1939 - können *Curtis* und *Cole* bei ähnlichen Versuchsanordnungen während der Untersuchung von *Membrane*igenschaften in Folge eines Aktionspotenzials einen sprunghaften Anstieg der Leitfähigkeit der Membran feststellen (vgl. [\[CC39, 669\]](#page-85-10)).Die Experimente wurden an Riesenaxomen von *Tintenfischen* durchgeführt, die sich für die damals zur Verfügung stehende Technologie mit einer Dicke von ca.  $1 \, \text{mm}$  besser eigneten als die im direkten Vergleich geradezu unfassbar winzigen *Axone* von menschlichen Nervenzellen mit einem Durchmesser von  $\sim 1 \, \text{µm}$  (vgl. [\[Jon19, 79\]](#page-89-1)):<span id="page-66-3"></span><sup>10</sup> siehe hierzu Anhang [B.1](#page-64-1)<span id="page-66-1"></span>

<sup>8</sup> Zumindest in [\[Heb49\]](#page-88-7) soll sich kein solches Zitat finden. Keysers und Gazzola stellen hierzu fest: This mnemonic phrase was first introduced by Carla Shatz in an article for the Scientific American aimed at lay public [\[KG14,](#page-89-10) 2, Fussnotenmarker entfernt] und meint damit in [\[Sha92\]](#page-93-13) den Satz: In a sense, then, cells that *fire* together *wire* together. [\[Sha92,](#page-93-13) 64]. Die Autoren des Eintrags [https:](https://en.wikipedia.org/wiki/Hebbian_theory#cite_ref-2) [//en.wikipedia.org/wiki/Hebbian\\_theory#cite\\_ref-2](https://en.wikipedia.org/wiki/Hebbian_theory#cite_ref-2) (abgerufen 16.08.2023) hingegen schreiben den Ursprung [\[LS92\]](#page-91-12) von Löwel und Singer zu: *neurons wire together if they fire together.* [\[LS92,](#page-91-12) 211]<span id="page-66-2"></span>

<sup>9</sup> vgl. [\[Flo19, 833\]](#page-87-11). Bear et al. verweisen in [\[BCP18, 875, Exkurs 23.5\]](#page-84-0) auf [\[CL78\]](#page-85-11).The large diameter of the axon, 0.5 mm or more, makes it particularly favorable material [...] ([\[CC39,](#page-85-10) 650])

Hodgkin und Huxley weisen später nach, dass der Aufstrich des Aktionspotenzials mit einer Zunahme von  $g\_{Na}$  und dem Einstrom von  $N a^{+}$  zusammenhängt, und weiter, dass die Repolarisation der Zellmembran mit einer Zunahme von  $g\_{K}$  und einem Ausstrom von  $K^{+}$  zusammenhängt[11](#page-67-2). Sie stellen Hypothesen unter anderem zu dem SchwellenwertThe curves in Figs. 12 and 21 show that the theoretical 'membrane' has a denite threshold when stimulated by a sudden displacement of membrane potential. ([\[HH52,](#page-88-11) 535])

und der Refraktärzeit auf:

Acording to our theory, there are two changes resulting from the depolarization during a spike which make the membrane unable to respond to another stimulus until a certain time has elapsed. These are 'inactivation', which reduces the level to which the sodium conductance can be raised by a depolarization, and the delayed rise in potassium conductance, which tends to hold the membrane potential near to the equilibrium value for potassium ions. ([\[HH52,](#page-88-11) 532])

Auÿerdem formulieren sie ein mathematisches Modell auf Basis des beobachteten Membranverhaltens (vgl. [\[HH52,](#page-88-11) 501, Fig. 1.]), heute bekannt als das Hodgkin-Huxley-Modell (vgl. [\[Koc98,](#page-89-11) 144]). Die Relevanz des Modells fassen Kandel et al. zusammen:

More than a half-century later the Hodgkin-Huxley model stands as the most successful quantitative model in neural science if not in all of biology. ([\[Kan+13,](#page-89-0) 156])

## <span id="page-67-0"></span>B.4 Hubel, David und Wiesel, Torsten

David H. Hubel (1926 - 2013) und Torsten N. Wiesel erhalten 1981 den Nobelpreis für Physiologie oder Medizin für ihre Entdeckungen bzgl. der Informationsverarbeitung im Seewahrnehmungssystem[12](#page-67-3). In [\[HW62\]](#page-89-2) (1962) zeigen sie, dass im Wahrnehmungssystem einfache und komplexe Neuronen existieren, die visuelle Informationen unterschiedlich verarbeiten (vgl. [\[Wur09,](#page-95-3) 2819])

## <span id="page-67-1"></span>B.5 Loewi, Otto

#### Die Entdeckung des Vagussto

Otto Loewi (1873–1961) erhält 1936 den Nobelpreis für Medizin für seine Forschungen an der chemischen Übertragung von Nervenimpulsen.<span id="page-67-2"></span><sup>11</sup> vgl. [\[Jon19,](#page-89-1) 75], auÿerdem [\[BCP18,](#page-84-0) 96] sowie [\[HH52,](#page-88-11) 530 Fig. 17]

<span id="page-67-3"></span><sup>12</sup> [https://www.nobelprize.org/prizes/medicine/1981/summary,](https://www.nobelprize.org/prizes/medicine/1981/summary) abgerufen 05.09.2023

1921 kann er bei einem Experiment mit Froschpräparaten zeigen, dass die Infusionslösung, die für vorher am Vagusnerv bewusst stimulierte Froschherzen genutzt wurde, den Vagusnerv von nachträglich mit dieser Lösung behandelte Froschherzen stimulieren kann.

Loewi vermutet in der Lösung eine Substanz, die er *Vagusstoff* nennt. Henry Dale (1875 - 1968) – mit dem sich Loewi den Nobelpreis teilen wird – kann diesen Stoff später als *Acetylcholin* identifizieren, ein exzitatorischer Neurotransmitter[13](#page-68-1), der bei chemischen Synapsen als Botenstoff zur Signalübertragung beteiligt ist[14](#page-68-2).## <span id="page-68-0"></span>B.6 McCulloch, Warren und Pitts, Walter

#### Von der Philosophie zur Neurowissenschaft

Warren McCulloch (1898 - 1969), studierter Pyschologe, Philosoph und Neurophysiologe, wird früh in seiner Karriere[15](#page-68-3) von grundlegenden philosophische Fragen umtrieben (vgl. [\[Arb00,](#page-84-2) 1]):

What is a number, that a man may know it, and a man that he may know a number? ([\[McC16,](#page-91-9) 2])

Die Suche nach einer Antwort auf diese und ähnliche Fragen[<sup>16</sup>](#page-68-4) soll ihn Zeit seines Lebens beschäftigen und Bestandteil seiner Arbeit werden (vgl. [\[Abr02,](#page-84-8) 4 f.]): Es drängt ihn in die Neurowissenschaften[<sup>17</sup>](#page-68-5).Um psychische Ereignisse auf das wesentlichste zu reduzieren und besser erklärbar zu machen, formuliert er das psychon, ein einzelnes psychisches Ereignis, das u.a. folgende Eigenschaften hat:

- 1. Es tritt auf, oder es tritt nicht auf.
- 2. Wenn es auftritt, dann nur, weil es von einem vorhergehenden Ereignis ausgelöst wurde.
- - 3. Es soll ein nachgehendes *"psychon"* auslösen können [18](#page-68-6).

Die Ähnlichkeiten zu dem Alles-oder-Nichts-Prinzip von Nervenzellen zur Formalisierung seines Kalküls berücksichtigt er ab 1929:

<span id="page-68-1"></span><sup>13</sup> Acetylcholin wirkt erregend an der motorischen Endplatte, aber hemmend an den Schrittmacherzellen des Herzens [\[HS19b,](#page-88-8) 105].

<span id="page-68-2"></span><sup>14</sup> vgl. [\[BCP18,](#page-84-0) 119, Exkurs 5.1]

<span id="page-68-3"></span><sup>15</sup> die im folgenden zitierte Frage wird von der Quelle auf das Jahr 1917 datiert, McCullochs erstem College-Jahr in Haverford, Pennsylvania

<span id="page-68-4"></span><sup>16</sup> In addition to the work in functional neuroanatomy, McCulloch was continuing to pursue philosophical questions, such as 'What could be the logic of the brain?' [\[Arb00,](#page-84-2) 3]

<span id="page-68-5"></span><sup>17</sup> siehe hierzu The Logical Structure of Mind: An Inquiry into the Philosophical Foundation of Psychology and Psychiatry, S. iii[;https://ntrs.nasa.gov/citations/19650017787,](https://ntrs.nasa.gov/citations/19650017787) abgerufen 19.09.2023

<span id="page-68-6"></span>

<sup>18</sup> Charakteristika der zweiwertigen Aussagenlogik sind hier bereits erkennbar (vgl. [\[Abr02, 7\]](#page-84-8)). Eine Form dieser zweiwertigen Logik wird später von dem französischen Psychoanalytiker Jacques Lacan (1901 - 1981) in seine Theorien einbezogen (vgl. [\[Liu10, 317\]](#page-90-10)).it dawned on me that these events might be regarded as the all-or-noneimpulses of neurons [...]. I began to try to formulate a proper calculus for these events by subscripting symbols for propositions in some sort of calculus of propositions ([\[McC16,](#page-91-9) 6])

Knapp 14 Jahre später wird McCulloch in seinem Papier das psychon mit der Aktivität eines einzelnen Neurons gleichsetzen:

[...] a psychon can be no less than the activity of a single neuron. ([\[MP43,](#page-91-2) 114])

Doch vorerst stagniert seine Arbeit, und erst, als er nach seiner Berufung an das Neuropsychiatrische Institut der Universität von Illinois (Chicago) im Jahr 1941 Walter Pitts (1923 - 1969) kennenlernt, ist er in der Lage, den Kalkül zu vervollständigen.

Pitts besucht dort Kurse bei dem Philosophen und Logiker Rudolf Carnap (1891 - 1970), auÿerdem bei dem Biomathematiker[19](#page-69-1) Nicolas Rashevsky (1899 - 1972) (vgl. [\[Pic04,](#page-92-3) 184]), der in seiner Arbeit mathematische Beschreibungen für die Modellierung von Funktionen von Nerven und Nervennetzen verwendet (vgl. [\[Abr02,](#page-84-8) 13])[20](#page-69-2) sowie ab 1939 die Zeitschrift Bulletin of Mathematical Biophysics veröffentlicht (vgl. [\[Abr02,](#page-84-8) 16]): In dieser wird später [\[MP43\]](#page-91-2) erstmalig publiziert.

Der knapp 19-jährige Pitts gilt als brillianter Mathematiker[21](#page-69-3) und später als the intelligence behind [...] McCulloch: Gemeinsam veröentlichen sie nur wenige Monaten nach ihrem Kennenlernen das logical calculus-Papier (vgl. [\[AR98,](#page-84-6) 104]).

## <span id="page-69-0"></span>B.7 Nernst, Walther

Walther Nernst (1864 - 1941) war ein deutscher Physiker und Chemiker und gehört zu den Begründern der physikalischen Chemie. Er formulierte das Nernst-Theorem, auch bekannt als Dritter Hauptsatz der Thermodynamik. 1920 erhält er den Chemie-Nobelpreis in Anerkennung seiner Arbeit auf dem Gebiet der Thermochemie.

<span id="page-69-1"></span><sup>19</sup> Biomathematik ist ein Teilgebiet der angewandten Mathematik und die mathematische Ausrichtung der theoretischen Biologie, die sich mit Modell- und Theoriebildung zur Beschreibung biologischer Zusammenhänge beschäftigt. [\(https://de.wikipedia.org/wiki/Theoretische\\_Biologie,](https://de.wikipedia.org/wiki/Theoretische_Biologie) abgerufen 09.08.2023). Teilgebiete der Biomathematik sind u.a. Demographie, Mathematische Ökologie, Epidemologie, Populationsgenetik

<span id="page-69-2"></span><sup>20</sup> In these works, formal logic and mathematics played a strong role, and thus biology as a discipline was reaching a more mature stage, as it began to incorporate the scientic method of physics, that is, using theoretical analysis and mathematical formulations. [\[Abr02,](#page-84-8) 7]

<span id="page-69-3"></span><sup>21</sup> Siehe [\[Arb00,](#page-84-2) 4], auÿerdem [\[Abr02,](#page-84-8) 22]: Pitts, a mathematical prodigy; Lettvin erwähnt in einem Interview mit Anderson und Rosenfeld, dass Pitts die Principia Mathematica mit 12 Jahren liest (vgl. [\[AR98,](#page-84-6) 2])

## <span id="page-70-0"></span>B.8 Wiener, Norbert

Norbert Wiener (1894 – 1964) gilt als Begründer der Kybernetik, die Küppers beschreibt alswirkungsvolle Kommunikation bzw. verlustarmer Daten- und Informationsaustausch, der in der Natur die Überlebensfähigkeit und in der Technik die maschinelle, prozessuale Funktionalität stärkt und dadurch Fehler vermeiden hilft. ([\[Küp19,](#page-90-11) 2])

Wiener und McCulloch (s. [B.6\)](#page-68-0) lernen sich im Winter 1942 kennen (vgl. [\[Mas90,](#page-91-13) 218]). Unter dem Vorsitz von McCulloch wird auf den sog. Macy-Konferenzen[22](#page-70-1) zwischen 1946 und 1953 Biologie und Technologie diskutiert (vgl. [\[Arb00,](#page-84-2) 5]). Infolgedessen veröentlicht Wiener 1948 seine Arbeit Cybernetics: Or Control and Communication in the Animal and the Machine [\[Wie48\]](#page-95-4).

<span id="page-70-1"></span><sup>22</sup> [https://www.asc-cybernetics.org/foundations/history/MacySummary.htm,](https://www.asc-cybernetics.org/foundations/history/MacySummary.htm) abgerufen 09.08.2023

<span id="page-71-0"></span># Die Paradoxen Hitzempfindung als MCP-Netz

## Modellierung von MCP-Netzen unter Berücksichtigung von Zeiteinheiten

In Abschnitt [3.1](#page-16-1) haben wir MCP-Netze betrachtet, bei denen Zeiteinheiten nicht berücksichtigt wurden. Basierend auf dem von McCulloch und Pitts in [\[MP43\]](#page-91-2) postulierten Neuronen-Modell entwerfen wir im folgenden ein Netz, das die paradoxe Hitzeempfindung simuliert: Das Phänomen, das bei kurzzeitiger Kühlung der Haut Hitze empfunden wird (vgl. [\[Häm+82\]](#page-88-12)):If a cold object is held to the skin for a moment and removed, a sensation of heat will be felt; if it is applied for a longer time, the sensation will be only of cold, with no preliminary warmth, however transient. ([\[MP43, 106\]](#page-91-2))Das nach [\[MP43,](#page-91-2) 105, Figure 1 (e)] aufgestellte Modell und die dazugehörige Formel übertragen wir in die von uns verwendete Notation (in Anlehnung an [\[Fau94,](#page-87-2) 31 f.). In der Abbildung [C.1](#page-72-0) sind zwei Temperaturrezeptoren *H*<sup>i</sup> (Hitze) und *K*<sup>i</sup> (Kälte) dargestellt; außerdem hat das Netz zwei Ausgänge, *H*<sup>o</sup> und *K*<sup>o</sup>. *H*<sup>o</sup> wird zum Zeitpunkt  $t$  aktiviert, wenn Hitze empfunden wird, *K*<sup>o</sup> entsprechend bei Kälte.Die Bedingungen für eine Aktivierung von H<sup>o</sup> lauten: Hitze wird signalisiert, wenn entweder der *Wärmerezeptor* durch Wärme stimuliert oder kurzzeitig ein *Kälteimpuls* von den *Kälterezeptoren* registriert wird.Formal dargestellt [1](#page-72-1):<span id="page-71-1"></span>
$$H\_o(t) \equiv H\_i(t-1) \lor \left( K\_i(t-3) \land \neg K\_i(t-2) \right)$$

(C.1)

Die Bedingungen für eine Aktivierung der Zelle  $K<sub>0</sub>$ , um Kälte zu signalisieren, lautet.<span id="page-71-2"></span>
$$K\_{o}(t) \equiv K\_{i}(t-2) \land K\_{i}(t-1)$$

(C.2)

![](_page_72_Figure_1.jpeg)

<span id="page-72-0"></span>

Abb. C.1. MCP-Netz zur Modellierung der paradoxen Hitzeempfindung. (Quelle: in Anlehnung an [\[Fau94,](#page-87-2) 31, Figure 1.18])Zeitabhängige Werte der MCP-Zellen wollen wir nun durch Formeln auszudrücken. Die zu dem Zeitpunkt  $t$  bekannten Werte sind bereits in Gleichung [C.1](#page-71-1) sowie Gleichung [C.2](#page-71-2) erfasst. Es folgt für  $H<sub>0</sub>(t)$ .<span id="page-72-2"></span>
$$H\_o(t) \equiv Z\_1(t-1) \lor H\_i(t-1) \tag{C.3}$$

Gleichung  $[C.3](#page-72-2)$  ist abhängig von Z<sup>1</sup> und H<sup>i</sup> zum Zeitpunkt  $t - 1$ .  $Z<sub>1</sub>(t - 1)$  ist trivialerweise der Wert, mit dem der Rezeptor stimuliert wurde. Für  $Z<sub>1</sub>(t - 1)$  folgt:
$$Z\_1(t-1) \equiv Z\_2(t-2) \land \neg K\_i(t-2) \tag{C.4}$$

Analog zu  $H\_i(t - 1)$  ist  $K\_i(t - 2)$  einfach der Stimulus für den Rezeptor. Deshalb benötigen wir nur noch  $Z\_2(t - 2)$ , was das efferente Signal von  $K\_i(t - 3)$  ist:
$$Z\_2(t-2) \equiv K\_i(t-3) \tag{C.5}$$

Die Abfolge der Aktivierung von  $K^{o}$  bzw.  $H^{o}$  kann tabellarisch auf Grundlage der Gleichungen dargestellt werden. Hierbei ist der Inhalt der Tabellenzellen (bis auf die Spalte  $t$   $f(g(X))$  (siehe Gleichung [3.3](#page-19-0)), sofern der Wert zu dem entsprechenden Zeitpunkt bekannt ist (vgl. [\[Fau94,](#page-87-2) 32 f.]). Wir beginnen mit der Stimulierung von  $K\_{i}$  durch zwei aufeinanderfolgende Kälteimpulse (Abbildung [C.2](#page-73-0)). Tabelle [C.1](#page-73-1) stellt die jeweiligen Schritte dar: Es wird erwartet, dass  $K\_{o}$  feuert. Tabelle [C.2](#page-74-0) beschreibt im Gegenzug die erwartete Ausgabe *Wärme* für einen Stimulus von  $H\_{i}$ , dargestellt in Abbildung [C.3.](#page-74-1)Die Simulation der paradoxen Hitzeempfindung (Abbildung [C.4\)](#page-75-0) erfolgt nun durch eine einmalige Aktivierung von K<sup>i</sup> zum Zeitpunkt  $t - 3$ . Danach wird der Stimulus entfernt: formal wird das durch  $-K<sub>i</sub>(t - 2)$  ausgedrückt (s. Gleichung [C.1\)](#page-71-1).<span id="page-72-1"></span>

<sup>1</sup> siehe [\[MP43, 106\]](#page-91-2)![](_page_73_Figure_1.jpeg)

Abb. C.2. Zwei Kälteimpulse als Eingabe für das MCP-Netz. (Quelle: in Anlehnung an [\[Fau94,](#page-87-2) 35, Figure 1.23]).

<span id="page-73-0"></span>

| t           | Hi | Ki | Z1 | Z2 | Ho | Ko |
|-------------|----|----|----|----|----|----|
| t<br>−<br>2 | 0  | 1  |    |    |    |    |
| t<br>−<br>1 | 0  | 1  | 0  | 1  |    |    |
| t           | 0  | 1  | 0  | 1  | 0  | 1  |

<span id="page-73-1"></span>Tabelle C.1. Verarbeitung von zwei Kälteimpulsen in dem MCP-Netz. Vgl. Abbildung [C.2.](#page-73-0)

![](_page_74_Figure_1.jpeg)

Abb. C.3. Ein einzelner Wärmeimpuls aktiviert das Wärmesignal. (Quelle: in Anlehnung an [\[Fau94,](#page-87-2) 36, Figure 1.24]).

<span id="page-74-1"></span>

| t     | Hi | Ki | Z1 | Z2 | Ho | Ko |
|-------|----|----|----|----|----|----|
| t - 1 | 1  | 0  | 0  |    | 1  | 0  |
| t     |    |    |    | 0  | 1  | 0  |

Tabelle C.2. Tabellarische Darstellung von einem Wärmeimpuls. Vgl. Abbildung [C.3.](#page-74-1)

<span id="page-74-0"></span>

| t           | Hi | Ki | Z1 | Z2 | Ho | Ko |
|-------------|----|----|----|----|----|----|
| t<br>−<br>3 | 0  | 1  | 0  | 1  | 0  | 0  |
| t<br>−<br>2 | 0  | 0  | 0  | 1  | 0  | 0  |
| t<br>−<br>1 | 1  | 0  | 1  | 0  | 0  | 0  |
| t           | 0  | 0  | 0  | 0  | 1  | 0  |

Tabelle C.3. Tabellarische Darstellung der paradoxen Hitzeempndung. Vgl. Abbildung [C.4](#page-75-0)

![](_page_75_Figure_1.jpeg)

<span id="page-75-0"></span>Abb. C.4. Entstehung der paradoxen Hitzeempndung durch einen einzelnen Kälteimpuls. (Quelle: in Anlehnung an [\[Fau94,](#page-87-2) 34, Figure 1.22]).

<span id="page-76-0"></span># Perceptron-Implementierung in Python

Wie bereits in Abschnitt[3.1.5](#page-20-1) für das MCP-Neuron gezeigt, wollen wir auch mit dem Rosenblatt-Perzeptron boolesche Funktionen nachbilden.Das folgende Beispiel bezieht sich auf die AND-Funktion (vgl. Tabelle [3.1](#page-21-0)).Zunächst definieren wir zwei Mengen  $M\_+$  und  $M\_-$ : Für Elemente in  $M\_+$  ist die erwartete Ausgabe 1, für Elemente in  $M\_-$  ist sie 0 (vgl. Abbildung [D.1](#page-76-1)):
$$M\_{+} riangleq \\{ (1,1) \\} \tag{D.1}$$

$$M\_{-} := \{ (0, 0), (0, 1), (1, 0) \}$$
 $(D.2)$ 

![](_page_76_Figure_7.jpeg)

<span id="page-76-1"></span>

Abb. D.1. Geometrische Interpretation der Perzeptron-Funktion im  $\mathbb{R}^2$  (Quelle: Eigene Darstellung)

Die Abbildung zeigt alle möglichen *zweideutigen* Interpretationen von A $ \land $ B in einem kartesischen Koordinatensystem. Offensichtlich ist die Anzahl der möglichen Trenngeraden (einige hier grau eingezeichnet) im  $\mathbb{R}^{2}$  unendlich.Für unsere **Perzeptron**-Implementierung in Python [1](#page-76-2) implementieren wir die Lernregel wie folgt:<span id="page-76-2"></span>

<sup>1</sup> vollständiger Quellcode unter <https://github.com/ThorstenSuckow/pylabs> (abgerufen 25.08.2023)
```
1 fo r epoch in range ( ep och s ) :
2
3 e r r o r s = 0
4
5 fo r i in range ( n ) :
6 e xpe c t ed = y [ i ]
7 ne t = X[ i ] @ s e l f .w + s e l f . bi a s
8 r e s u l t = s e l f . h e a v i s i d e ( ne t )
9 e r r o r = 0
10
11 i f r e s u l t != e xp ec t ed :
12 e r r o r = e xpec te d = r e s u l t
13
14 s e l f .w += (X[ i ] * l e a r ni n g_ r a t e * e r r o r )
15 s e l f . bi a s += l e a r ni n g_ r a t e * e r r o r
```
Der Algorithmus erhält eine vorgegebene Zahl von Epochen, in denen eine vollständige Konvergenz erwartet wird. Innerhalb einer Epoche werden alle  $n$  Trainingsdaten (enthalten in  $X$ ) durchgegangen. In  $y$  finden wir die erwartete Klassifizierung der Trainingsdaten: Ist  $X[i] = [1,1]$ , entspricht  $y[i] = 1$  (vgl. Gleichung [D.3\)](#page-77-0).  $net$  entspricht dem Ergebnis von Gleichung [3.18,](#page-31-1) und das Ergebnis result der Heaviside-Funktion mit<span id="page-77-0"></span>
$$\exp = \begin{cases} 1 & \text{falls net} \ge 0 \\ 0 & \text{sont} \end{cases} \tag{(D.3)}$$

Die Lernregel wird so lange durchlaufen, bis für alle Trainingsdaten kein Fehler error mehr auftritt oder alle Epochen ausgeschöpft sind.

Der Algorithmus nutzt folgende Nomenklatur:

$$\eta := 1 \text{ (Lernrate)}$$

$$b := 0 \text{ (Bias)}$$

$$w := \begin{pmatrix} 1 \\ 1 \end{pmatrix} \text{ (Gewichtsvektor)}$$

$$M\_{+} := \{ (1,1) \}$$

$$M\_{-} := \{ (0,0), (0,1), (1,0) \}$$

$$net = w\_{1}x\_{1} + w\_{2}x\_{2} + b$$

$$\exp = \begin{cases} 1 \text{ falls } (x\_{1}, x\_{2}) \in M\_{+} \\ 0 \text{ sonst} \end{cases} \text{ (erwartete Ausgabe)}$$

$$res = \begin{cases} 0 \text{ falls } net < 0 \\ 1 \text{ sonst} \end{cases} \text{ (berechnete Ausgabe)}$$

$$err = \exp - res \text{ (Fehler)}$$

 $w^{u} = w + (x\_{1}, x\_{2}) \* \eta \* err$  (aktualisierter Gewichtsvektor)  $b^{u} = b + \eta \* err$  (aktualisierter Bias)Mit der o.a. Implementierung konvergiert das Perzeptron innerhalb von 5 Epochen. In jeder Epoche werden 4 einzelne Daten trainiert, was insgesamt einer Anzahl von 20 Trainingsschritten entspricht. Das Perzeptron hat also für  $w\_{1}$ ,  $w\_{2}$  Werte gefunden, so dass die folgenden 4 Ungleichungen gleichzeitig erfüllt sind:
$$\begin{aligned} w\_1 0 + w\_2 0 &< \Theta \\\\ w\_1 1 + w\_2 0 &< \Theta \\\\ w\_1 0 + w\_2 1 &< \Theta \\\\ w\_1 1 + w\_2 1 &\ge \Theta \end{aligned}$$

Die folgenden Tabellen zeigen die Anpassungen im Detail. Die geometrische Darstellung hierzu **findet** sich in Abbildung [D.2.](#page-83-0)

| Epoch | x1 | x2 | w1 | w2 | b  | net | exp | res | err | wu1 | wu2 | bu |
|-------|----|----|----|----|----|-----|-----|-----|-----|-----|-----|----|
| 1.1   | 0  | 0  | 1  | 1  | 0  | 0   | 0   | 1   | -1  | 1   | 1   | -1 |
| 1.2   | 1  | 0  | 1  | 1  | -1 | 0   | 0   | 1   | -1  | 0   | 1   | -2 |
| 1.3   | 0  | 1  | 0  | 1  | -2 | -1  | 0   | 0   | 0   | 0   | 1   | -2 |
| 1.4   | 1  | 1  | 0  | 1  | -2 | -1  | 1   | 0   | 1   | 1   | 2   | -1 |

Tabelle D.1. Epoche 1 für AND

| Epoch | x1 | x2 | w1 | w2 | b  | net | exp | res | err | w1 | w2 | bu |
|-------|----|----|----|----|----|-----|-----|-----|-----|----|----|----|
| 2.1   | 0  | 0  | 1  | 2  | -1 | -1  | 0   | 0   | 0   | 1  | 2  | -1 |
| 2.2   | 1  | 0  | 1  | 2  | -1 | 0   | 0   | 1   | -1  | 0  | 2  | -2 |
| 2.3   | 0  | 1  | 0  | 2  | -2 | 0   | 0   | 1   | -1  | 0  | 1  | -3 |
| 2.4   | 1  | 1  | 0  | 1  | -3 | -2  | 1   | 0   | 1   | 1  | 2  | -2 |

*Tabelle D.2.* Epoche 2 *für* ANDD Perzeptron-Implementierung in Python 75

| Epoch | x₁ | x₂ | w₁ | w₂ | b  | net | exp | res | err | wᵘ₁ | wᵘ₂ | bᵘ |
|-------|----|----|----|----|----|-----|-----|-----|-----|-----|-----|----|
| 3.1   | 0  | 0  | 1  | 2  | -2 | -2  | 0   | 0   | 0   | 1   | 2   | -2 |
| 3.2   | 1  | 0  | 1  | 2  | -2 | -1  | 0   | 0   | 0   | 1   | 2   | -2 |
| 3.3   | 0  | 1  | 1  | 2  | -2 | 0   | 0   | 1   | 1   | 1   | 1   | -3 |
| 3.4   | 1  | 1  | 1  | 1  | -3 | -1  | 1   | 0   | 0   | 2   | 2   | -2 |

Tabelle D.3. Epoche 3 für AND

| Epoch | x1 | x2 | w1 | w2 | b  | net | exp | res | err | u<br>w<br>1 | u<br>w<br>2 | u<br>b |
|-------|----|----|----|----|----|-----|-----|-----|-----|-------------|-------------|--------|
| 4.1   | 0  | 0  | 2  | 2  | -2 | -2  | 0   | 0   | 0   | 2           | 2           | -2     |
| 4.2   | 1  | 0  | 2  | 2  | -2 | 0   | 0   | 1   | -1  | 1           | 2           | -3     |
| 4.3   | 0  | 1  | 1  | 2  | -3 | -1  | 0   | 0   | 0   | 1           | 2           | -3     |
| 4.4   | 1  | 1  | 1  | 2  | -3 | 0   | 1   | 1   | 0   | 1           | 2           | -3     |

Tabelle D.4. Epoche 4 für AND

| Epoche | x1 | x2 | w1 | w2 | b  | net | exp | res | err | wu1 | wu2 | bu |
|--------|----|----|----|----|----|-----|-----|-----|-----|-----|-----|----|
| 5.1    | 0  | 0  | 1  | 2  | -3 | -3  | 0   | 0   | 0   | 1   | 2   | -3 |
| 5.2    | 1  | 0  | 1  | 2  | -3 | -2  | 0   | 0   | 0   | 1   | 2   | -3 |
| 5.3    | 0  | 1  | 1  | 2  | -3 | -1  | 0   | 0   | 0   | 1   | 2   | -3 |
| 5.4    | 1  | 1  | 1  | 2  | -3 | 0   | 1   | 1   | 0   | 1   | 2   | -3 |

Tabelle D.5. Epoche 5 für AND

## Geometrische Darstellung

Die folgende Abbildung [D.2](#page-83-0) zeigt einen vollständigen Lauf über 5 Epochen für die AND-Funktion. Blaue gestrichelt ist die Trenngerade, auf der senkrecht der Gewichtsvektor (orange) steht. Grün umrandete Punkte sind Ziel des Trainingsschrittes und bedingen den Änderungsvektor (schwarz), der die Anpassung von  $w\_{i}$  im nächsten Schritt angibt.![](_page_80_Figure_1.jpeg)

![](_page_80_Figure_2.jpeg)

![](_page_80_Figure_3.jpeg)

![](_page_80_Figure_4.jpeg)

![](_page_80_Figure_5.jpeg)

![](_page_80_Figure_6.jpeg)

![](_page_81_Figure_1.jpeg)

![](_page_81_Figure_2.jpeg)

![](_page_81_Figure_3.jpeg)

![](_page_81_Figure_4.jpeg)

![](_page_81_Figure_5.jpeg)

![](_page_81_Figure_6.jpeg)

![](_page_82_Figure_1.jpeg)

![](_page_82_Figure_2.jpeg)

![](_page_82_Figure_3.jpeg)

![](_page_82_Figure_4.jpeg)

![](_page_82_Figure_5.jpeg)

![](_page_82_Figure_6.jpeg)

![](_page_83_Figure_1.jpeg)

<span id="page-83-0"></span>Abb. D.2. Geometrische Darstellung der Konvergenz eines Perzeptrons für AND (Quelle: Eigene Darstellung)

## Literaturverzeichnis

- <span id="page-84-8"></span>[Abr02] Tara H. Abraham. (Physio)Logical Circuits: The Intellectual Origins of the McCulloch-Pitts Neural Networks. In: Journal of the History of the Behavioral Sciences 38.1 (2002), S. 325. issn: 0022-5061, 1520- 6696. doi: 10.1002/jhbs.1094.
- <span id="page-84-9"></span>[AHR19] Christoph Auer, Nora Hollenstein und Matthias Reumann. Künstliche Intelligenz im Gesundheitswesen. In: Gesundheit digital: Perspektiven zur Digitalisierung im Gesundheitswesen. Hrsg. von Robin Haring. Berlin, Heidelberg: Springer Berlin Heidelberg, 2019, S. 3346. isbn: 978-3-662-57611-3. doi: 10.1007/978-3-662-57611-3\_3.
- <span id="page-84-5"></span>[AHS85] David H. Ackley, Georey E. Hinton und Terrence J. Sejnowski. A Learning Algorithm for Boltzmann Machines. In: Cognitive Science 9.1 (1985), S. 147169. issn: 0364-0213. doi: 10.1016/S0364-0213(85)80012-4.
- <span id="page-84-7"></span>[Ama+13] Filippo Amato u. a. Articial Neural Networks in Medical Diagnosis. In: Journal of Applied Biomedicine 11.2 (Juli 2013), S. 4758. issn: 1214021X, 12140287. doi: 10.2478/v10136-012-0031-x.
- <span id="page-84-3"></span>[AR88] James A. Anderson und Edward Rosenfeld, Hrsg. Neurocomputing: Foundations of Research. Cambridge, MA, USA: MIT Press, 1988. isbn: 0-262-01097-6.
- <span id="page-84-6"></span>[AR98] James A. Anderson und Edward Rosenfeld, Hrsg. Talking Nets: An oral history of neural networks. Cambridge, MA, USA: MIT Press, 1998. isbn: 0-262-01167-0.
- <span id="page-84-2"></span>[Arb00] Michael A Arbib. Warren McCulloch's Search for the Logic of the Nervous System. In: Perspectives in Biology and Medicine 43.2 (2000), S. 193216. issn: 1529-8795. doi: 10.1353/pbm.2000.0001.
- <span id="page-84-4"></span>[Arb03] Michael A. Arbib, Hrsg. The Handbook of Brain Theory and Neural Networks. 2nd ed. Cambridge, Mass: MIT Press, 2003. isbn: 978-0-262-01197-6.
- <span id="page-84-1"></span>[Aya+98] S. Ayad u. a. The Extracellular Matrix. FactsBook. 2. Au. London: Academic Press, 1998. isbn: 0-12-068911-1.
- <span id="page-84-0"></span>[BCP18] Mark F. Bear, Barry W. Connors und Michael A. Paradiso. Neurowissenschaften: Ein Grundlegendes Lehrbuch Für Biologie, Medizin Und Psychologie. Hrsg. von Andreas K. Engel. Berlin, Heidelberg: Springer Berlin Heidelberg, 2018. isbn: 978-3-662-57263-4. doi: 10.1007/978-3-662-57263-4.
- <span id="page-84-11"></span>[Ber02] Julius Bernstein. Untersuchungen Zur Thermodynamik Der Bioelektrischen Ströme. In: Archiv für die gesamte Physiologie des Menschen und der Tiere 92.10 (Nov. 1902), S. 521562. issn: 1432-2013. doi: 10.1007/BF01790181.
- <span id="page-84-10"></span>[Ber12] Julius Bernstein. Die Membrantheorie. In: Elektrobiologie: Die Lehre von Den Elektrischen Vorgängen Im Organismus Auf Moderner Grundlage Dargestellt. Wiesbaden: Vieweg+Teubner

Verlag, 1912, S. 87–107. **ISBN:** 978-3-663-01627-4. **DOI:** 10.1007/978-3-663-01627-4\_5.- <span id="page-85-8"></span>[Ber68] J. Bernstein. Ueber Den Zeitlichen Verlauf Der Negativen Schwankung Des Nervenstroms. In: Archiv für die gesamte Physiologie des Menschen und der Tiere 1.1 (Dez. 1868), S. 173207. issn: 1432-2013. doi: 10.1007/BF01640316.
- <span id="page-85-7"></span>[Bis06] C. M. Bishop. Pattern Recognition and Machine Learning. New York: Springer, 2006.
- <span id="page-85-0"></span>[BJ90] Russell Beale und Tom Jackson. Neural Computing: An Introduction. A Taylor & Francis Book. New York: IOP Publishing, 1990. isbn: 0-85274-262-2.
- <span id="page-85-9"></span>[BM03] Richard E. Brown und Peter M. Milner. The Legacy of Donald O. Hebb: More than the Hebb Synapse. In: Nature Reviews Neuroscience 4.12 (Dez. 2003), S. 10131019. issn: 1471-0048. doi: 10.1038/nrn1257.
- <span id="page-85-3"></span>[Bri+18] Titus Josef Brinker u. a. Skin Cancer Classication Using Convolutional Neural Networks: Systematic Review. In: J Med Internet Res 20.10 (Okt. 2018), e11936. issn: 1438-8871. doi: 10.2196/11936. PMID: [30333097.](http://www.ncbi.nlm.nih.gov/pubmed/30333097)
- <span id="page-85-1"></span>[Bur+12] Klemens Burg u. a. Vektorräume Beliebiger Dimensionen. In: Höhere Mathematik Für Ingenieure Band II: Lineare Algebra. Wiesbaden: Vieweg+Teubner Verlag, 2012, S. 75146. isbn: 978-3-8348-2267-3. doi: 10.1007/978-3-8348-2267-3\_2.
- <span id="page-85-2"></span>[BY86] K. Binder und A. P. Young. Spin Glasses: Experimental Facts, Theoretical Concepts, and Open Questions. In: Rev. Mod. Phys. 58.4 (Okt. 1986), S. 801976. doi: 10.1103/RevModPhys.58.801.
- <span id="page-85-4"></span>[Cal20] Ewen Callaway. `It Will Change Everything': DeepMind's AI Makes Gigantic Leap in Solving Protein Structures. In: Nature 588 (Dez. 2020), S. 203204. doi: 10.1038/d41586-020-03348-4.
- <span id="page-85-10"></span>[CC39] Kenneth S. Cole und Howard J. Curtis. Electric Impedance of the Squid Giant Axon during Activity. In: Journal of General Physiology 22.5 (Mai 1939), S. 649670. issn: 0022-1295. doi: 10.1085/jgp.22.5.649.
- <span id="page-85-6"></span>- [Cho+16] Edward Choi *et al.* „Doctor AI: Predicting Clinical Events via Recurrent Neural Networks“. In: *Proceedings of the 1st Machine Learning for Healthcare Conference*. Hrsg. von Finale Doshi-Velez *et al.* Bd. 56. Proceedings of Machine Learning Research. Northeastern University, Boston, MA, USA: PMLR, Aug. 2016, S. 301-318. doi: 10.48550/arXiv.1511.05942.
- <span id="page-85-5"></span>[Chr73] Christian B. Annsen. Principles That Govern the Folding of Protein Chains. In: Science (New York, N.Y.) 181.4096 (1973), S. 223230. doi: 10.1126/science.181.4096.223.
- <span id="page-85-11"></span>[CL78] Martha Constantine-Paton und Margaret I. Law. Eye-Specic Termination Bands in Tecta of Three-Eyed Frogs. In: Science 202.4368 (1978), S. 639641. doi: 10.1126/science.309179.
- <span id="page-86-11"></span>[Coo05] Steven J. Cooper. Donald O. Hebb's Synapse and Learning Rule: A History and Commentary. In: Neuroscience & Biobehavioral Reviews 28.8 (2005), S. 851874. issn: 0149-7634. doi: 10.1016/j.neubiorev.2004.09.009.
- <span id="page-86-9"></span>[Cow90] Jack D. Cowan. Discussion: McCulloch-Pitts and Related Neural Nets from 1943 to 1989. In: Bulletin of Mathematical Biology 52.1 (Jan. 1990), S. 7397. issn: 1522-9602. doi: 10.1007/BF02459569.
- <span id="page-86-10"></span>[Das+19] Sabyasachi Dash u. a. Big Data in Healthcare: Management, Analysis and Future Prospects. In: Journal of Big Data 6.1 (Juni 2019), S. 54. issn: 2196-1115. doi: 10.1186/s40537-019-0217-0.
- <span id="page-86-5"></span>[Die17] R. Diestel. Graphentheorie. Heidelberg: Springer-Verlag, 2017. isbn: 9783961340040.
- <span id="page-86-7"></span>[Dil+08] Ken A. Dill u. a. The Protein Folding Problem. In: Annual Review of Biophysics 37.1 (2008), S. 289316. doi: 10.1146/annurev.biophys.37.092707.153558.
- <span id="page-86-4"></span>[Dor91] Georg Dorner. Konnektionismus Eine Einführung. In: Konnektionismus: Von Neuronalen Netzwerken Zu Einer natürlichen KI. Wiesbaden: Vieweg+Teubner Verlag, 1991, S. 1583. isbn: 978-3-322-94665-2. doi: 10.1007/978-3-322-94665-2\_2.
- <span id="page-86-0"></span>[Eil19] J. Eilers. Nervenzellen. In: Physiologie Des Menschen: Mit Pathophysiologie. Hrsg. von Ralf Brandes, Florian Lang und Robert F. Schmidt. Berlin, Heidelberg: Springer Berlin Heidelberg, 2019, S. 5764. isbn: 978-3-662-56468-4. doi: 10.1007/978-3-662-56468-4\_5.
- <span id="page-86-6"></span>[Ert21a] Wolfgang Ertel. Lernen Durch Verstärkung (Reinforcement Learning). In: Grundkurs Künstliche Intelligenz: Eine Praxisorientierte Einführung. Wiesbaden: Springer Fachmedien Wiesbaden, 2021, S. 351377. isbn: 978-3-658-32075-1. doi: 10.1007/978-3-658-32075-1\_10.
- <span id="page-86-2"></span>[Ert21b] Wolfgang Ertel. Maschinelles Lernen Und Data Mining. In: Grundkurs Künstliche Intelligenz: Eine Praxisorientierte Einführung. Wiesbaden: Springer Fachmedien Wiesbaden, 2021, S. 201283. isbn: 978-3-658-32075-1. doi: 10.1007/978-3-658-32075-1\_8.
- <span id="page-86-3"></span>[Ert21c] Wolfgang Ertel. Neuronale Netze. In: Grundkurs Künstliche Intelligenz: Eine Praxisorientierte Einführung. Wiesbaden: Springer Fachmedien Wiesbaden, 2021, S. 285349. isbn: 978-3-658-32075-1. doi: 10.1007/978-3-658-32075-1\_9.
- <span id="page-86-8"></span>[Est+17] Andre Esteva u. a. Dermatologist-Level Classication of Skin Cancer with Deep Neural Networks. In: Nature 542.7639 (Feb. 2017), S. 115 118. issn: 0028-0836, 1476-4687. doi: 10.1038/nature21056.
- <span id="page-86-1"></span>[Fak19] B. Fakler. Grundlagen Der Zellulären Erregbarkeit. In: Physiologie Des Menschen: Mit Pathophysiologie. Hrsg. von Ralf Brandes, Florian Lang und Robert F. Schmidt. Berlin, Heidelberg: Springer Berlin Heidelberg, 2019, S. 3854. isbn: 978-3-662-56468-4. doi: 10.1007/978-3-662-56468-4\_4.
- <span id="page-87-2"></span>[Fau94] Laurene Fausett. Fundamentals of Neural Networks: Architectures, Algorithms, and Applications. USA: Prentice-Hall, Inc., 1994. isbn: 0-13-334186-0.
- <span id="page-87-8"></span>[Fay+19] O.S.I. Fayomi u. a. Eect of Annealing on the Mechanical Characteristics of Steel Welded Joint. In: Procedia Manufacturing 35 (2019), S. 13871394. issn: 23519789. doi: 10.1016/j.promfg.2019.09.008.
- <span id="page-87-3"></span>[FC54] B. Farley und W. Clark. Simulation of Self-Organizing Systems by Digital Computer. In: Transactions of the IRE Professional Group on Information Theory 4.4 (1954), S. 7684. doi: 10.1109/TIT.1954.1057468.
- <span id="page-87-0"></span>[FE19] B. Fakler und J. Eilers. Ruhemembranpotenzial Und Aktionspotenzial. In: Physiologie Des Menschen: Mit Pathophysiologie. Hrsg. von Ralf Brandes, Florian Lang und Robert F. Schmidt. Berlin, Heidelberg: Springer Berlin Heidelberg, 2019, S. 6571. isbn: 978-3-662-56468-4. doi: 10.1007/978-3-662-56468-4\_6.
- <span id="page-87-11"></span>[Flo19] H. Flor. Lernen. In: Physiologie Des Menschen: Mit Pathophysiologie. Hrsg. von Ralf Brandes, Florian Lang und Robert F. Schmidt. Berlin, Heidelberg: Springer Berlin Heidelberg, 2019, S. 827838. isbn: 978-3-662-56468-4. doi: 10.1007/978-3-662-56468-4\_66.
- <span id="page-87-6"></span>[FMI83] Kunihiko Fukushima, Sei Miyake und Takayuki Ito. Neocognitron: A Neural Network Model for a Mechanism of Visual Pattern Recognition. In: IEEE Transactions on Systems, Man, and Cybernetics SMC-13.5 (1983), S. 826834. doi: 10.1109/TSMC.1983.6313076.
- <span id="page-87-1"></span>[Fra94] Robert G. Frank. Instruments, Nerve Action, and the All-or-None Principle. In: Osiris 9.1 (1994), S. 208235. doi: 10.1086/368737.
- <span id="page-87-10"></span>[Fro19] M. Fromm. Transport in Membranen Und Epithelien. In: Physiologie Des Menschen: Mit Pathophysiologie. Hrsg. von Ralf Brandes, Florian Lang und Robert F. Schmidt. Berlin, Heidelberg: Springer Berlin Heidelberg, 2019, S. 2237. isbn: 978-3-662-56468-4. doi: 10.1007/978-3-662-56468-4\_3.
- <span id="page-87-9"></span>[FS90] Gerhard Friedrich und Markus Stumptner. Einführung. In: Expertensysteme. Hrsg. von Georg Gottlob, Thomas Frühwirth und Werner Horn. Vienna: Springer Vienna, 1990, S. 119. isbn: 978-3-7091-9094-4. doi: 10.1007/978-3-7091-9094-4\_1.
- <span id="page-87-5"></span>[Fuk75] Kunihiko Fukushima. Cognitron: A Self-Organizing Multilayered Neural Network. In: Biological Cybernetics 20.3 (Sep. 1975), S. 121 136. issn: 1432-0770. doi: 10.1007/BF00342633.
- <span id="page-87-7"></span>[Fuk80] Kunihiko Fukushima. Neocognitron: A Self-Organizing Neural Network Model for a Mechanism of Pattern Recognition Unaected by Shift in Position. In: Biological Cybernetics 36.4 (Apr. 1980), S. 193 202. issn: 1432-0770. doi: 10.1007/BF00344251.
- <span id="page-87-4"></span>[Gar19] Colin Garvey. Articial Intelligence and Japan's Fifth Generation: The Information Society, Neoliberalism, and Alternative Modernities. In: Pacic Historical Review 88.4 (Nov. 2019), S. 619658. issn: 0030- 8684. doi: 10.1525/phr.2019.88.4.619.
- <span id="page-88-3"></span>[GBC18] Ian Goodfellow, Yoshua Bengio und Aaron Courville. Deep Learning. Das umfassende Handbuch. 2018. Au. mitp Professional. Frechen, Germany: MITP, Okt. 2018. isbn: 978-3-95845-700-3.
- <span id="page-88-10"></span>[Gle09] P. Glees. Nobelpreis für Physiologie und Medizin 1963. In: DMW - Deutsche Medizinische Wochenschrift 88.52 (Apr. 2009), S. 25232526. issn: 0012-0472. doi: 10.1055/s-0028-1112385.
- <span id="page-88-12"></span>[Häm+82] H. Hämäläinen u. a. Paradoxical Heat Sensations during Moderate Cooling of the Skin. In: Brain Research 251.1 (1982), S. 7781. issn: 0006-8993. doi: 10.1016/0006-8993(82)91275-6.
- <span id="page-88-7"></span>[Heb49] D. O. Hebb. The Organization of Behavior. New York: Wiley, 1949.
- <span id="page-88-9"></span>[Heb88] Donald O. Hebb. The Organization of Behavior. In: Neurocomputing: Foundations of Research. Cambridge, MA, USA: MIT Press, 1988, S. 4354. isbn: 0-262-01097-6.
- <span id="page-88-11"></span>[HH52] A. L. Hodgkin und A. F. Huxley. A Quantitative Description of Membrane Current and Its Application to Conduction and Excitation in Nerve. In: The Journal of Physiology 117.4 (1952), S. 500544. doi: 10.1113/jphysiol.1952.sp004764.
- <span id="page-88-6"></span>[HI97] Frank C. Hoppensteadt und Eugene M. Izhikevich. Introduction (Aus: Weakly Connected Neural Networks). In: Weakly Connected Neural Networks. New York, NY: Springer New York, 1997, S. 324. isbn: 978-1-4612-1828-9. doi: 10.1007/978-1-4612-1828-9\_1.
- <span id="page-88-5"></span>[HLW16] Gao Huang, Zhuang Liu und Kilian Q. Weinberger. Densely Connected Convolutional Networks. In: 2017 IEEE Conference on Computer Vision and Pattern Recognition (CVPR) (2016), S. 22612269.
- <span id="page-88-1"></span>[Hof22] Dirk W. Homann. Theoretische Informatik. 5., aktualisierte Auage. München: Hanser, 2022. isbn: 978-3-446-47029-3.
- <span id="page-88-4"></span>[Hop82] John Hopeld. Neural Networks and Physical Systems with Emergent Collective Computational Abilities. In: Proceedings of the National Academy of Sciences of the United States of America 79 (Mai 1982), S. 25548. doi: 10.1073/pnas.79.8.2554.
- <span id="page-88-2"></span>[Hor90] Werner Horn. Anwendungen von Expertensystemen. In: Expertensysteme. Hrsg. von Georg Gottlob, Thomas Frühwirth und Werner Horn. Vienna: Springer Vienna, 1990, S. 6172. isbn: 978-3-7091-9094-4. doi: 10.1007/978-3-7091-9094-4\_3.
- <span id="page-88-0"></span>[HS19a] S. Hallermann und R. F. Schmidt. Arbeitsweise von Synapsen. In: Physiologie Des Menschen: Mit Pathophysiologie. Hrsg. von Ralf Brandes, Florian Lang und Robert F. Schmidt. Berlin, Heidelberg: Springer Berlin Heidelberg, 2019, S. 95104. isbn: 978-3-662-56468-4. doi: 10.1007/978-3-662-56468-4\_9.
- <span id="page-88-8"></span>[HS19b] S. Hallermann und R. F. Schmidt. Neurotransmitter Und Ihre Rezeptoren. In: Physiologie Des Menschen: Mit Pathophysiologie. Hrsg. von Ralf Brandes, Florian Lang und Robert F. Schmidt. Berlin, Heidelberg: Springer Berlin Heidelberg, 2019, S. 105114. isbn: 978-3-662-56468-4. doi: 10.1007/978-3-662-56468-4\_10.
- <span id="page-89-8"></span>[HS19c] S. Hallermann und R. F. Schmidt. Synaptische Plastizität. In: Physiologie Des Menschen: Mit Pathophysiologie. Hrsg. von Ralf Brandes, Florian Lang und Robert F. Schmidt. Berlin, Heidelberg: Springer Berlin Heidelberg, 2019, S. 115120. isbn: 978-3-662-56468-4. doi: 10.1007/978-3-662-56468-4\_11.
- <span id="page-89-3"></span>[HS83] Georey Hinton und Terrence Sejnowski. Optimal Perceptual Inference. In: Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition. Jan. 1983, S. 448453.
- <span id="page-89-2"></span>[HW62] D. H. Hubel und T. N. Wiesel. Receptive Fields, Binocular Interaction and Functional Architecture in the Cat's Visual Cortex. In: The Journal of Physiology 160.1 (Jan. 1962), S. 106154. issn: 00223751. doi: 10.1113/jphysiol.1962.sp006837.
- <span id="page-89-5"></span>[HWN22] Tobias Höfer, Frederik Weishäupl und Alfred Nischwitz. Neuronale Netze Zur Ezienzsteigerung Der Texterkennung in Der Rezeptabrechnung. In: Künstliche Intelligenz Im Gesundheitswesen: Entwicklungen, Beispiele Und Perspektiven. Hrsg. von Mario A. Pfannstiel. Wiesbaden: Springer Fachmedien Wiesbaden, 2022, S. 697714. isbn: 978-3-658-33597-7. doi: 10.1007/978-3-658-33597-7\_33.
- <span id="page-89-7"></span>[Irv+19] Jeremy Irvin u. a. CheXpert: A Large Chest Radiograph Dataset with Uncertainty Labels and Expert Comparison. Jan. 2019. arXiv: [1901.](https://arxiv.org/abs/1901.07031) [07031 \[cs, eess\].](https://arxiv.org/abs/1901.07031)
- <span id="page-89-1"></span>[Jon19] P. Jonas. Aktionspotenzial: Fortleitung Im Axon. In: Physiologie Des Menschen: Mit Pathophysiologie. Hrsg. von Ralf Brandes, Florian Lang und Robert F. Schmidt. Berlin, Heidelberg: Springer Berlin Heidelberg, 2019, S. 7282. isbn: 978-3-662-56468-4. doi: 10.1007/978-3-662-56468-4\_7.
- <span id="page-89-6"></span>[Jum+21] John Jumper u. a. Highly Accurate Protein Structure Prediction with AlphaFold. In: Nature 596.7873 (Aug. 2021), S. 583589. issn: 1476- 4687. doi: 10.1038/s41586-021-03819-2.
- <span id="page-89-0"></span>[Kan+13] E.R. Kandel u. a. Principles of Neural Science, 5th Edition. McGraw-Hill's AccessMedicine. McGraw-Hill Education, 2013. isbn: 978-0-07-139011-8.
- <span id="page-89-4"></span>[KB17] Diederik P. Kingma und Jimmy Ba. Adam: A Method for Stochastic Optimization. Jan. 2017. arXiv: [1412.6980 \[cs\].](https://arxiv.org/abs/1412.6980)
- <span id="page-89-10"></span>[KG14] Christian Keysers und Valeria Gazzola. Hebbian Learning and Predictive Mirror Neurons for Actions, Sensations and Emotions. In: Philosophical Transactions of the Royal Society B: Biological Sciences 369.1644 (2014), S. 20130175. doi: 10.1098/rstb.2013.0175.
- <span id="page-89-9"></span>[Kle99] Raymond M. Klein. The Hebb Legacy. In: Canadian Journal of Experimental Psychology / Revue canadienne de psychologie expérimentale 53.1 (1999), S. 13. issn: 1878-7290(Electronic),1196-1961(Print). doi: 10.1037/h0087295.
- <span id="page-89-11"></span>[Koc98] Christof Koch. The Hodgkin-Huxley Model of Action Potential Generation. In: Biophysics of Computation: Information Proces-

sing in Single Neurons. Oxford University Press, Nov. 1998. isbn: 978-0-19-510491-2. doi: 10.1093/oso/9780195139853.003.0012.

<span id="page-90-3"></span>[Köh90] Monika Köhle. Neurale Netze. Vienna: Springer Vienna, 1990. isbn: 978-3-7091-9093-7.

- <span id="page-90-8"></span>[KSH12] Alex Krizhevsky, Ilya Sutskever und Georey E Hinton. ImageNet Classication with Deep Convolutional Neural Networks. In: Advances in Neural Information Processing Systems. Hrsg. von F. Pereira u. a. Bd. 25. Curran Associates, Inc., 2012.
- <span id="page-90-0"></span>[Kub30] Lawrence S. Kubie. A theoretical application to some neurological problems of the properties of excitation waves which move in closed circuits. In: Brain 53.2 (Juli 1930), S. 166177. issn: 0006-8950. doi: 10.1093/brain/53.2.166.
- <span id="page-90-11"></span>[Küp19] E. W. Udo Küppers. Einleitung Und Lernziele. In: Eine Transdisziplinäre Einführung in Die Welt Der Kybernetik: Grundlagen, Modelle, Theorien Und Praxisbeispiele. Wiesbaden: Springer Fachmedien Wiesbaden, 2019, S. 13. isbn: 978-3-658-23725-7. doi: 10.1007/978-3-658-23725-7\_1.
- <span id="page-90-2"></span>[Lan09] Anders Lansner. Associative Memory Models: From the Cell-Assembly Theory to Biophysically Detailed Cortex Simulations. In: Trends in Neurosciences 32.3 (2009), S. 178186. issn: 0166-2236. doi: 10.1016/j.tins.2008.12.002.
- <span id="page-90-4"></span>[LBH15] Yann LeCun, Yoshua Bengio und Georey Hinton. Deep Learning. In: Nature 521.7553 (Mai 2015), S. 436444. issn: 1476-4687. doi: 10.1038/nature14539.
- <span id="page-90-6"></span>[LeC+89] Y. LeCun u. a. Backpropagation Applied to Handwritten Zip Code Recognition. In: Neural Computation 1.4 (Dez. 1989), S. 541551. issn: 0899-7667. doi: 10.1162/neco.1989.1.4.541.
- <span id="page-90-7"></span>[LeC+98] Y. LeCun u. a. Gradient-Based Learning Applied to Document Recognition. In: Proceedings of the IEEE 86.11 (1998), S. 22782324. doi: 10.1109/5.726791.
- <span id="page-90-5"></span>[LeC89] Y. LeCun. Generalization and Network Design Strategies. In: Connectionism in Perspective. Hrsg. von R. Pfeifer u. a. Zurich, Switzerland: Elsevier, 1989.
- <span id="page-90-9"></span>[Li+21] Rui Li u. a. G-Net: A Recurrent Network Approach to G-Computation for Counterfactual Prediction Under a Dynamic Treatment Regime. In: Proceedings of Machine Learning for Health. Hrsg. von Subhrajit Roy u. a. Bd. 158. Proceedings of Machine Learning Research. PMLR, Dez. 2021, S. 282299.
- <span id="page-90-1"></span>[Lip87] R. Lippmann. An Introduction to Computing with Neural Nets. In: IEEE ASSP Magazine 4.2 (1987), S. 422. doi: 10.1109/MASSP.1987.1165576.
- <span id="page-90-10"></span>[Liu10] Lydia H. Liu. The Cybernetic Unconscious: Rethinking Lacan, Poe, and French Theory. In: Critical Inquiry 36.2 (2010), S. 288320. doi: 10.1086/648527.
- <span id="page-91-12"></span>[LS92] Siegrid Löwel und Wolf Singer. Selection of Intrinsic Horizontal Connections in the Visual Cortex by Correlated Neuronal Activity. In: Science 255.5041 (1992), S. 209212. doi: 10.1126/science.1372754.
- <span id="page-91-8"></span>[Luc+22] Adriano Lucieri u. a. Erklärbare KI in Der Medizinischen Diagnose Erfolge Und Herausforderungen. In: Künstliche Intelligenz Im Gesundheitswesen: Entwicklungen, Beispiele Und Perspektiven. Hrsg. von Mario A. Pfannstiel. Wiesbaden: Springer Fachmedien Wiesbaden, 2022, S. 727754. isbn: 978-3-658-33597-7. doi: 10.1007/978-3-658-33597-7\_35.
- <span id="page-91-1"></span>[Luc05] Keith Lucas. On the Gradation of Activity in a Skeletal Muscle-Fibre. In: The Journal of Physiology 33.2 (1905), S. 125137. doi: 10.1113/jphysiol.1905.sp001115.
- <span id="page-91-13"></span>[Mas90] P. R. Masani. McCulloch, Pitts and the Evolution of Wiener's Neurophysiological Ideas. In: Norbert Wiener 18941964. Basel: Birkhäuser Basel, 1990, S. 218238. isbn: 978-3-0348-9252-0. doi: 10.1007/978-3-0348-9252-0\_16.
- <span id="page-91-11"></span>[McC04] Pamela McCorduck. Machines Who Think: A Personal Inquiry into the History and Prospects of Articial Intelligence. AK Peters Ltd, 2004. isbn: 1-56881-205-1.
- <span id="page-91-0"></span>[McC13] David A. McCormick. Chapter 5 - Membrane Potential and Action Potential. In: Fundamental Neuroscience (Fourth Edition). Hrsg. von Larry R. Squire u. a. Fourth Edition. San Diego: Academic Press, 2013, S. 93116. isbn: 978-0-12-385870-2. doi: 10.1016/B978-0-12-385870-2.00005-6.
- <span id="page-91-9"></span>[McC16] Warren S McCulloch. Embodiments of Mind. London, England: MIT Press, Okt. 2016. isbn: 9780262340960.
- <span id="page-91-6"></span>[McD80] John P. McDermott. RI: an Expert in the Computer Systems Domain. In: AAAI Conference on Articial Intelligence. 1980.
- <span id="page-91-3"></span>[Min67] Marvin Minsky. Computation: Finite and Innite Machines. USA: Prentice Hal, 1967.
- <span id="page-91-2"></span>[MP43] Warren S. McCulloch und Walter Pitts. A Logical Calculus of the Ideas Immanent in Nervous Activity. In: The bulletin of mathematical biophysics 5.4 (Dez. 1943), S. 115133. issn: 1522-9602. doi: 10.1007/BF02478259.
- <span id="page-91-4"></span>[MP88] Marvin Minsky und Seymour A Papert. Perceptrons: An Introduction to Computational Geometry. London, England: MIT Press, 1988.
- <span id="page-91-7"></span>[Mur91] Fionn Murtagh. Multilayer Perceptrons for Classication and Regression. In: Neurocomputing 2.5 (1991), S. 183197. issn: 0925-2312. doi: 10.1016/0925-2312(91)90023-5.
- <span id="page-91-5"></span>[Nov62] A. B. Noviko. On Convergence Proofs on Perceptrons. In: Proceedings of the Symposium on the Mathematical Theory of Automata. Bd. 12. New York, NY, USA: Polytechnic Institute of Brooklyn, 1962, S. 615622.
- <span id="page-91-10"></span>[NP16] Hoang Nguyen und Jon Patrick. Text Mining in Clinical Domain: Dealing with Noise. In: Proceedings of the 22nd ACM SIGKDD In-

ternational Conference on Knowledge Discovery and Data Mining. KDD '16. San Francisco, California, USA: Association for Computing Machinery, 2016, S. 549558. isbn: 9781450342322. doi: 10.1145/2939672.2939720.

- <span id="page-92-8"></span>[Ola96] Mikel Olazaran. A Sociological Study of the Ocial History of the Perceptrons Controversy. In: Social Studies of Science 26.3 (1996), S. 611659. doi: 10.1177/030631296026003005.
- <span id="page-92-2"></span>[OV00] Walter Oberschelp und Gottfried Vossen. Rechneraufbau Und Rechnerstrukturen. 8. Au. Oldenbourg Wissenschaftsverlag, 2000. isbn: 3-486-25340-9.
- <span id="page-92-10"></span>[Pfa22] Mario A. Pfannstiel. Einleitung Künstliche Intelligenz Im Gesundheitswesen. In: Künstliche Intelligenz Im Gesundheitswesen: Entwicklungen, Beispiele Und Perspektiven. Hrsg. von Mario A. Pfannstiel. Wiesbaden: Springer Fachmedien Wiesbaden, 2022, S. 1 47. isbn: 978-3-658-33597-7. doi: 10.1007/978-3-658-33597-7\_1.
- <span id="page-92-3"></span>[Pic04] Gualtiero Piccinini. The First Computational Theory of Mind and Brain: A Close Look at Mcculloch and Pitts's Logical Calculus of Ideas Immanent in Nervous Activity. In: Synthese 141.2 (Aug. 2004), S. 175215. issn: 1573-0964. doi: 10.1023/B:SYNT.0000043018.52445.3e.
- <span id="page-92-11"></span>[Raj+18] Alvin Rajkomar u. a. Scalable and Accurate Deep Learning with Electronic Health Records. In: npj Digital Medicine 1.1 (Mai 2018), S. 18. issn: 2398-6352. doi: 10.1038/s41746-018-0029-1.
- <span id="page-92-1"></span>[Rau08] Wolfgang Rautenberg. Aussagenlogik. In: Einführung in Die Mathematische Logik: Ein Lehrbuch. Wiesbaden: Vieweg+Teubner, 2008, S. 132. isbn: 978-3-8348-9530-1. doi: 10.1007/978-3-8348-9530-1\_1.
- <span id="page-92-9"></span>[RHW86] David E. Rumelhart, Georey E. Hinton und Ronald J. Williams. Learning Representations by Back-Propagating Errors. In: Nature 323.6088 (Okt. 1986), S. 533536. issn: 1476-4687. doi: 10.1038/323533a0.
- <span id="page-92-0"></span>[RK18] Reinhard Rohkamm und Pawel Kermer. Taschenatlas Neurologie. Georg Thieme Verlag, 2018. doi: 10.1055/b-005-143299.
- <span id="page-92-7"></span>[RM87] David E. Rumelhart und James L. McClelland. PDP Models and General Issues in Cognitive Science. In: Parallel Distributed Processing: Explorations in the Microstructure of Cognition: Foundations. 1987, S. 110146.
- <span id="page-92-5"></span>[RN12] Stuart Russell und Peter Norvig. Künstliche Intelligenz. 3. Au. Pearson Studium - IT. Munich, Germany: Pearson Studium ein Imprint von Pearson Deutschland, Juni 2012. isbn: 978-3-86894-098-5.
- <span id="page-92-4"></span>[Roj93] Raúl Rojas. Theorie der neuronalen Netze. Springer Berlin Heidelberg, 1993. doi: 10.1007/978-3-642-61231-2.
- <span id="page-92-6"></span>[Ros57] F. Rosenblatt. The Perceptron - A Perceiving and Recognizing Automaton. Techn. Ber. 85-460-1. Ithaca, New York: Cornell Aeronautical Laboratory, Jan. 1957.

<span id="page-93-13"></span><span id="page-93-12"></span><span id="page-93-11"></span><span id="page-93-10"></span><span id="page-93-9"></span><span id="page-93-8"></span><span id="page-93-7"></span><span id="page-93-6"></span><span id="page-93-5"></span><span id="page-93-4"></span><span id="page-93-3"></span><span id="page-93-2"></span><span id="page-93-1"></span><span id="page-93-0"></span>[Ros58] F. Rosenblatt. The Perceptron: A Probabilistic Model for Information Storage and Organization in the Brain. In: Psychological Review 65.6 (1958), S. 386408. issn: 1939-1471(Electronic),0033- 295X(Print). doi: 10.1037/h0042519. [Ros60] Frank Rosenblatt. Perceptron Simulation Experiments. In: Proceedings of the IRE 48.3 (1960), S. 301309. doi: 10.1109/JRPROC.1960.287598. [Ros62] Frank Rosenblatt. Principles of neurodynamics: Perceptrons and the theory of brain mechanisms. Bd. 55. Spartan books Washington, DC, 1962. [RS19] Stefan Rüping und Jil Sander. Big Data in Gesundheitswesen und Medizin. In: Gesundheit digital: Perspektiven zur Digitalisierung im Gesundheitswesen. Hrsg. von Robin Haring. Berlin, Heidelberg: Springer Berlin Heidelberg, 2019, S. 1531. isbn: 978-3-662-57611-3. doi: 10.1007/978-3-662-57611-3\_2. [Sal90] R. Salomon. Beschleunigtes Lernen Durch Adaptive Regelung Der Lernrate Bei Back-Propagation in Feed-Forward Netzen. In: Konnektionismus in Articial Intelligence Und Kognitionsforschung. Hrsg. von Georg Dorner. Berlin, Heidelberg: Springer Berlin Heidelberg, 1990, S. 173178. isbn: 978-3-642-76070-9. [Sch83] Stephen M. Schuetze. The discovery of the action potential. In: Trends in Neurosciences 6 (1983), S. 164168. doi: 10.1016/0166-2236(83)90078-4. [SD07] Stefan Silbernagl und Agamemnon Despopoulos, Hrsg. Taschenatlas Physiologie. Georg Thieme Verlag, 2007. doi: 10.1055/b-002-89576. [Sey06] Ernst-August Seyfarth. Julius Bernstein (18391917): Pioneer Neurobiologist and Biophysicist. In: Biological Cybernetics 94.1 (Jan. 2006), S. 28. issn: 1432-0770. doi: 10.1007/s00422-005-0031-y. [Sha+20] Zach Shahn u. a. Fluid-Limiting Treatment Strategies among Sepsis Patients in the ICU: A Retrospective Causal Analysis. In: Critical Care 24.1 (Feb. 2020), S. 62. issn: 1364-8535. doi: 10.1186/s13054-020-2767-0. [Sha83] Ehud Y. Shapiro. The Fifth Generation Project a Trip Report. In: Commun. ACM 26.9 (Sep. 1983), S. 637641. issn: 0001-0782. doi: 10.1145/358172.358179. [Sha92] Carla J Shatz. The Developing Brain. In: SCIENTIFIC AMERICAN (1992). [She+19] Jiayi Shen u. a. Articial Intelligence Versus Clinicians in Disease Diagnosis: Systematic Review. In: JMIR Med Inform 7.3 (Aug. 2019), e10010. issn: 2291-9694. doi: 10.2196/10010. PMID: [31420959.](http://www.ncbi.nlm.nih.gov/pubmed/31420959) [She13] Henry M. Sheer. A Set of Five Independent Postulates for Boolean Algebras, with Application to Logical Constants. In: Transactions of the American Mathematical Society 14 (1913), S. 481488. [She26] Henry M. Sheer. Principia Mathematica. Whitehead, Alfred North , Russell, Bertrand. In: Isis; an international review devoted to the history of science and its cultural inuences 8.1 (1926), S. 226231. doi: 10.1086/358383.

- <span id="page-94-0"></span>[Sil10] R. Angus Silver. Neuronal Arithmetic. In: Nature Reviews Neuroscience 11.7 (Juli 2010), S. 474489. issn: 1471-0048. doi: 10.1038/nrn2864.
- <span id="page-94-5"></span>[SKM10] K. Stromgaard, P. Krogsgaard-Larsen und U. Madsen, Hrsg. Textbook of Drug Design and Discovery. 4th ed. Detroit, MI: CRC Press, 2010. isbn: 978-1-4200-6322-6.
- <span id="page-94-1"></span>[Son22] Daniel Sonnet. Neuronale Netze. In: Neuronale Netze Kompakt: Vom Perceptron Zum Deep Learning. Wiesbaden: Springer Fachmedien Wiesbaden, 2022, S. 1770. isbn: 978-3-658-29081-8. doi: 10.1007/978-3-658-29081-8\_2.
- <span id="page-94-10"></span>[SSH95] Peter Sander, Wolried Stucky und Rudolf Herschel. Automaten. In: Automaten Sprachen Berechenbarkeit: Grundkurs Angewandte Informatik IV. Hrsg. von W. Stucky. Wiesbaden: Vieweg+Teubner Verlag, 1995, S. 2697. isbn: 978-3-322-84873-4. doi: 10.1007/978-3-322-84873-4\_2.
- <span id="page-94-6"></span>[Ste22] Joachim Steinwendner. Explainable AI Im Gesundheitswesen. In: Künstliche Intelligenz Im Gesundheitswesen: Entwicklungen, Beispiele Und Perspektiven. Hrsg. von Mario A. Pfannstiel. Wiesbaden: Springer Fachmedien Wiesbaden, 2022, S. 755767. isbn: 978-3-658-33597-7. doi: 10.1007/978-3-658-33597-7\_36.
- <span id="page-94-11"></span>[Str01] Bonnie B. Strickland, Hrsg. The Gale Encyclopedia of Psychology. 2nd ed. Detroit, MI: Gale Group, 2001. isbn: 978-0-7876-4786-5.
- <span id="page-94-8"></span>[Sze+15] Christian Szegedy u. a. Rethinking the Inception Architecture for Computer Vision. 2015. doi: 10.48550/arXiv.1512.00567.
- <span id="page-94-3"></span>[Szo88] Peter Szolovits. Articial Intelligence in Medical Diagnosis. In: Arti cial Intelligence 108.1 (1988). doi: 10.7326/0003-4819-108-1-80.
- <span id="page-94-4"></span>[TS81] Randy L. Teach und Edward H. Shortlie. An Analysis of Physician Attitudes Regarding Computer-Based Clinical Consultation Systems. In: Computers and Biomedical Research 14.6 (1981), S. 542558. issn: 0010-4809. doi: 10.1016/0010-4809(81)90012-4.
- <span id="page-94-9"></span>[Tur37] A. M. Turing. On Computable Numbers, with an Application to the Entscheidungsproblem. In: Proceedings of the London Mathematical Society s2-42.1 (1937), S. 230265. doi: 10.1112/plms/s2-42.1.230.
- <span id="page-94-7"></span>[U§u12] Harun U§uz. A Biomedical System Based on Articial Neural Network and Principal Component Analysis for Diagnosis of the Heart Valve Diseases. In: Journal of Medical Systems 36.1 (Feb. 2012), S. 6172. issn: 1573-689X. doi: 10.1007/s10916-010-9446-7.
- <span id="page-94-2"></span>[Von11] H. Von Jebsen-Marwedel. Einführung. In: Glastechnische Fabrikationsfehler: Pathologische Ausnahmezustände Des Werkstoes Glas Und Ihre Behebung; Eine Brücke Zwischen Wissenschaft, Technologie Und Praxis. Hrsg. von Hans Jebsen-Marwedel und Rolf Brückner. Berlin, Heidelberg: Springer Berlin Heidelberg, 2011, S. 315. isbn: 978-3-642-16433-0. doi: 10.1007/978-3-642-16433-0\_1.
- <span id="page-95-2"></span>[von93] J. von Neumann. First Draft of a Report on the EDVAC. In: IE-EE Annals of the History of Computing 15.4 (1993), S. 2775. doi: 10.1109/85.238389.
- <span id="page-95-4"></span>[Wie48] Norbert Wiener. Cybernetics; or Control and Communication in the Animal and the Machine. Oxford, England: John Wiley, 1948, S. 194.
- <span id="page-95-0"></span>- [WR27] Alfred North Whitehead und Bertrand Russell. Principia mathematica, vol. 1-3. 2. Aufl. Cambridge University Press, 1927. ISBN: 978-0521067911.
- <span id="page-95-3"></span>[Wur09] Robert H. Wurtz. Recounting the Impact of Hubel and Wiesel: Recounting the Impact of Hubel and Wiesel. In: The Journal of Physiology 587.12 (Juni 2009), S. 28172823. issn: 00223751. doi: 10.1113/jphysiol.2009.170209.
- <span id="page-95-1"></span>[Zha+17] H. Zhao u. a. Pyramid Scene Parsing Network. In: 2017 IEEE Conference on Computer Vision and Pattern Recognition (CVPR). Los Alamitos, CA, USA: IEEE Computer Society, Juli 2017, S. 62306239. doi: 10.1109/CVPR.2017.660.

# Abbildungsverzeichnis

| 2.1  | Schematische Darstellung einer Nervenzelle. (Quelle: in Anlehnung<br>an [SD07, 43, Tafel 2.1])                                                                                      | 3  |
|------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----|
| 2.2  | Ionenverteilung im Zytosol und der EZF. (Quelle: in Anlehnung<br>an [BCP18, 72, Abb. 3.13])                                                                                         | 5  |
| 2.3  | Aktionspotenzial. (Quelle: in Anlehnung an [SD07, 47, Tafel 2.3])                                                                                                                   | 7  |
| 3.1  | Schematische Darstellung von MCP-Zellen (Quelle: in Anlehnung<br>an [MP43, 105, Figure 1])                                                                                          | 14 |
| 3.2  | Plot einer Treppenfunktion, hier als Heaviside-Funktion mit<br>$H(x) = \begin{cases}0 & \text{wenn } x < 0 \\ 1 & \text{wenn } x \geq 0 \end{cases}$ . (Quelle: Eigene Darstellung) | 15 |
| 3.3  | Ein MCP-Neuron zur Modellierung von OR (Quelle: Eigene Darstellung)                                                                                                                 | 18 |
| 3.4  | Ein MCP-Netz zur Modellierung von NAND (Quelle: Eigene Darstellung)                                                                                                                 | 19 |
| 3.5  | Entwurf für ein MCP-Netz zur Modellierung von XOR (Quelle:<br>Eigene Darstellung)                                                                                                   | 20 |
| 3.6  | Rosenblatt-Perzeptron. (Quelle: in Anlehnung an [Roj93, 53, Abb. 3.2])                                                                                                              | 22 |
| 3.7  | Winkelhalbierende im kartesischen Koordinatensystem (Quelle:<br>Eigene Darstellung)                                                                                                 | 24 |
| 3.8  | Halbräume im $R^2$ (Quelle: Eigene Darstellung)                                                                                                                                     | 25 |
| 3.9  | Punkte im $R^2$ , die nicht durch eine Ursprungsgerade separierbar<br>sind. Angedeutet eine mögliche Trenngerade, die durch<br>(0,<br>2)<br>geht.                                   |    |
| 3.10 | Perzeptron-Training für große Datenmengen. (Quelle: Eigene Darstellung)                                                                                                             | 27 |
| 3.11 | XOR im $R^2$ . (Quelle: Eigene Darstellung)                                                                                                                                         | 28 |
| 4.1  | Exemplarische Darstellung der Architektur eines einfachen Feed Forward-Netzes. (Quelle: Eigene Darstellung)                                                                         | 32 |
| 4.2  | Plot einer Sigmoid-Funktion. (Quelle: Eigene Darstellung)                                                                                                                           | 33 |
| 4.3  | Skizzierung des Zusammenhangs Fehlerfunktion und lokale Minima (Quelle: in Anlehnung an [Son22, 52, Abb. 2.15])                                                                     | 34 |

| 4.4<br>4.5 | Beispiel einer Faltungsoperation. (Quelle: in Anlehnung an [GBC18,<br>372, Abbildung 9.1])<br>Plot der ReLU. (Quelle: Eigene Darstellung) | 38<br>38 |
|------------|-------------------------------------------------------------------------------------------------------------------------------------------|----------|
| A.1        | Phasen des Aktionspotenzials. (Quelle: in Anlehnung an [BCP18,<br>88, Abb. 4.1b])                                                         | 51       |
| C.1        | MCP-Netz zur Modellierung der paradoxen Hitzeempfindung. (Quelle: in Anlehnung an [Fau94, 31, Figure 1.18])                               | 68       |
| C.2        | Zwei Kälteimpulse als Eingabe für das MCP-Netz. (Quelle: in Anlehnung an [Fau94, 35, Figure 1.23])                                        | 69       |
| C.3        | Ein einzelner Wärmeimpuls aktiviert das Wärmesignal. (Quelle: in Anlehnung an [Fau94, 36, Figure 1.24])                                   | 70       |
| C.4        | Entstehung der paradoxen Hitzeempfindung durch einen einzelnen Kälteimpuls. (Quelle: in Anlehnung an [Fau94, 34, Figure 1.22])            | 71       |
| D.1        | Geometrische Interpretation der Perzeptron-Funktion im R2. (Quelle: Eigene Darstellung)                                                   | 72       |
| D.2        | Geometrische Darstellung der Konvergenz eines Perzeptrons für AND. (Quelle: Eigene Darstellung)                                           | 79       |