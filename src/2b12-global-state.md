#algorithmes #fr #distributedalgorithms #sorbonne #todo
# Calcul de l'état global
---
Il y a pas de solution simple:
+ Collecte distante d'états locaux
+ pas de temps global
+ intrusivité de la collecte/observation doit être minimale

## utilisations
1. Exécution d'un algorithme centralisé sur des données distantes
2. Détection d'états globaux stables (interblocages ? perdre de jeton ? terminaison ?)
3. Ramasse-miette distribué
	+ elimination des objets inutilisables conservés en mémoire
4. Tolérance aux fautes
+ en chaque de panne d'un des sites, procédure de *recouvrement*:
	1. chaque sites revient à son checkpoint (rollback) [2b12a-snapshot-algorithm](2b12a-snapshot-algorithm.md).
	2. reprise de l'exécution à partir de cet état.

## Représentation et cohérence
+ Etat local d'un processus P_i
	+ valeur des variables locales de P_i
	+ Determinisme: état lo
+ État d'un canal de communication
L'état global d'un système réparti est l'union des états de l'ensemble des états ceux de processus et ceux des canaux. Il peut être représenté par une courbe (coupure) sur le diagramme temporel.

Problème de la collecte des états
	E(P_i) n'est directement et immédiatement observable que sur P_i
	E(C_ij) c'est jamais directement observable ni sur P_i ni sur P_j
Le problème est qu'il y a pas de temps global. Alors, on assouplit le critère cohérence sans rendre l'état global inexploitable en utilisant la relation de précédence causale.

Alors, on palera des **coupures cohérentes**:

Intuitivement: la cause d'un événement ne peut être dans son future (de la coupure)

Formellement

C est coupure cohérent <=> forall e in passé(C), e' -> e => e' in Passé(C)


Par définition: un état global cohérent est un état global obtenu selon une coupure cohérente.

On analyse tout d'abord une système simple: deux processus connectés par deux canaux unidirectionnels en directions opposés. On represent l'état du système avec un graph d'état (automate)

snapshot algorithm [2b12a-snapshot-algorithm](2b12a-snapshot-algorithm.md)
Chandy & Lamport 85

## Principes
### Objectif
Calculer dynamiquement un état global cohérent d'un système réparti en cours d'exécution.

### Modèle système


comment detecter l'état des canaux

---



