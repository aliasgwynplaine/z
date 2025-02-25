#algorithmes #fr #distributedalgorithms #sorbonne
# Horloge vectoriel
---
+ $T = \mathbb{N}^N$
+ chaque processus $i$ gère un vecteur $VC_i$ de taille $N$.
	+ $VC_i[i]$: nombre d'événements du proc $i$
	+ $VC_i[j]$: connaissance qu'a $i$ de l'avancement de l'horloge de $j$
+ À tout instant, l'état réel d'avancement du système est donné par $W=(VC_1[1],...,VC_N[N])$
## algorithme de mise à jour
+ À chaque événement de $P_i$, le processus exécute
	$VC_i[i] = VC_i[i] + 1$
+ À l'emission d'un message $m$: rien à faire.
+ À la réception d'un message $m$ portant un horloge $m.VC$.
+ $\forall x: VC_i[x] = \max(VC_i[x], m.VC[x])\text{ et } VC_i[i] = VC_i[i] + 1$

## causalité
+ on a les relations
	+ $VC_i \leq VC_j \Leftrightarrow \forall k: VC_i[k] \leq VC_j[k]$
	+ $VC_i < VC_j \Leftrightarrow VC_i[k] \leq VC_j[k] \text{ et } VC_i \neq VC_j$
	+ $VC_i \| VC_j \Leftrightarrow  (VC_i \leq VC_j) \wedge (VC_i \leq VC_j)$
+ Les horloges vectorielles définissent un ordre partiel sur les événements
+ Les horloges vectorielles _caractérisent_ la causalité (consistence forte)
	$e\rightarrow e' \Leftrightarrow VC(e) < VC(e')$
	$e \| e' \Leftrightarrow VC(e) \| VC(e')$
+ augmentent la quantité d'info à gérer localement et circulant sur la réseau 
+ la causalité des événements d'un système réparti avec $N$ processus ne peut être caractérisée qu'avec des horloges vectorielles ayant au moins $N$ entrées
+ détection à la volée du respect de l'ordre causale impossible et donc délivrance causale non respectée
---