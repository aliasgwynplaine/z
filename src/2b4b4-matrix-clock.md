#algorithmes #fr #distributedalgorithms #sorbonne
# Horloge matricielle
---
+ $T = \mathbb{N}^{N^2}$
+ chaque processus gère une matrice $MT_i$ de taille $N^2$.
	+ $MT_i[i,i]$: nombre d'événements du processus $i$.
	+ $MT_i[i,*]$: nombre de messages envoyés par $i$ aux autres.
	+ $\text{diag}(MT_i)$: nombre d'événements locaux des autres sites dont $i$ a la connaissance = horloge vectoriel du processus $i$.
	+ $MT_i[j,k]$: nombre de messages émis par $j$ à $k$ dont $i$ a connaissance.
## algorithme de mise à jour
+ Pour le processus $i$:
	+ à chaque événement local:
		$MT_i[i,i] = MT_i[i,i] + 1$
	+ à chaque émission d'un message $m$ vers $j$:
		$MT_i[i,i] = MT_i[i,i] + 1$ et $MT_i[i,j] = MT_i[i,j] + 1$
	+ à chaque réception d'un message $m$ émis par $j$, il faut s'assurer que:
		+ tous les messages envoyés antérieurement par $j$ à $i$ ont été reçus
		+ tous les messages reçus par $i$ et dont l'envoi de $m$ depend causalement ont bien été reçu
## considerations
+ Très coûteux en espace, sur les messages et en calcul
+ Le processus $i$ sait que tous les autres processus $p_j$ savent que le temps local de chaque $p_k$ a progressé jusqu'au moins $t$: $\min(MT_i[k,l])\geq t$
+ permet d'implementer FIFO.