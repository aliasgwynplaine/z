#algorithmes #fr #distributedalgorithms #sorbonne #clock
# Horloges
---
On considere un système réparti comme un ensemble de processus asynchrones s’exécutant sur différents sites. Les proc communiquent uniquement par message. Il y a pas d'horloge globale.

## Types d'événements
+ **événements locaux**. changement de l'état interne d'un processus.
	`e_i`
+ **emissions de messages**
	`send(m)`
+ **receptions de messages**
	`recv(m)`
+ **délivrance de messages**
	`delivre(m)`

> On veut pouvoir tracer l'execution et donner une relation de causalité entre événements.

Datation [2b4b5-datation](2b4b5-datation.md)
## Horloges physiques
+ Problème. ils dérivent au cours de temps et le sens et l'amplitude de la dérive est propre à chaque machine.
+ Consequence: la précédence causale n'est pas respectée. [2b4b1-causal-order](2b4b1-causal-order.md)

## Horloges logiques
 **def.**
 
\\(H\\): ensemble des événements de l'application (muni de l'ordre partiel \\(\rightarrow\\))

\\(T\\): domaine de temps (muni de l'ordre partiel \\(<\\)).
\\[
\begin{align}
C: &H \longrightarrow T \\\\
&e\longmapsto C(e) \text{ tq } e\rightarrow e' \Rightarrow C(e) < C(e')
\end{align}
\\]
on dit que l'horloge _capture_ la causalité.

Si, en plus, \\(C(e) < C(e') \Rightarrow e \rightarrow e'\\) (consistence forte), on dit que l'horloge _caractérise_ la causalité.


+ **horloges scalaires** [2b4b2-lamport-timestamps](2b4b2-lamport-timestamps.md)
+ **horloges vectoriels** [2b4b3-vector-clock](2b4b3-vector-clock.md)
+ **horloges matricielles** [2b4b4-matrix-clock](2b4b4-matrix-clock.md)

