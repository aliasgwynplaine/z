#algorithmes #fr #distributedalgorithms #sorbonne
# Horloge matricielle
---
+ $T = \mathbb{N}^{N^2}$
+ chaque processus gère une matrice $MT_i$ de taille $N^2$.
	+ $MT_i[i,i]$: nombre d'événements du processus $i$.
	+ $MT_i[i,*]$: nombre de messages envoyés par $i$ aux autres.
	+ $\text{diag}(MT_i)$: nombre d'événements locaux des autres sites dont $i$ a la connaissance = horloge vectoriel du processus $i$.
	+ $MT_i[j,k]$: nombre de messages émis par $j$ à $k$ dont $i$ a connaissance.