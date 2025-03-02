#algorithmes #fr #distributedalgorithms #sorbonne #mutex
# Maekawa (1985)
---
+ Chaque site ne peut donner sa permission qu'a un seul site à la fois
+ Chaque site S_i appartient à un ensemble (quorum) RS_i (Request Set) dont il doit obtenir l'accord (msg LOCKED) de tous les membres pour pouvoir entrer en section critique
+ Il doit y a voir au moins un site commun entre deux ensembles RS_i et RS_j. Ce site arbitre les conflits. C'est-à-dire:
	$\forall i,j ¸in \left\{1,...,N\right\} \text{ tq } i\neq j, \text{RS}_i \cap \text{RS}_j \neq \emptyset$

Afin de minimiser le trafic des messages et de demander le même effort à tous les sites:
+ Soit
	+ N : nombre de sites
	+ K_i = |RS_i|
	+ D : nombre d'ensembles auquel chaque site appartient
+ K_i= K, pour tout i dans { 1, ..., N}
+ S_i est dans RS_i, pour tout S_i dans { S_1, ...,S_n }
+ Pour tous i != j dans { 1,..., N}, S_i et S_j appartiennent à D ensembles RS
+ D = K est une possibilité



---


