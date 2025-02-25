#algorithmes #fr #distributedalgorithms #sorbonne
# Horloge scalar
---
+ $T = \mathbb{N}$ 
+ Tous les messages portent l'horloge de leur émetteur à l'instant démission (estampillage)
+ 2 règles de mise à jour:
	+ **R1**. avant tout événement, le processus $i$ exécute
		$C_i = C_i + d, d>0$
	+ **R2**. lorsque le site $i$ reçoit un message portant une estampille $C_{msg}$
		$C_i = \max(C_i, C_{msg})$
		Appliquer **R1**
		Délivrer le message
## Propriétés
+ $C$ respecte la causalité
+ $C$ capture la causalité mais ne la caractérise pas.
+ $C(e) = n$ implique que $n-1$ événements se sont déroulés séquentiellement avant $e$

> Les horloges scalaires peuvent être utilisées pour définir un _ordre total_ sur les événements.
> On complète la date logique d'un événement par le numéro du processus où il s'est produit $D(e) = (C_i, i)$
> $e_i \ll e_j \Leftrightarrow C(e_i) < C(e_j) \text{ ou } [C(e_i) = C(e_j) \text{ et } i < j]$

