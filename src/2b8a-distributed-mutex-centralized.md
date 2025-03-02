#algorithmes #fr #distributedalgorithms #sorbonne #mutex
# Exclusion mutuelle centralisée
---
+ Le processus coordinateur est le seul à prendre une décision sur l'accès à la section critique
+ Tous les infos nécessaires pour l'algorithme sont concentrés dans le coordinateur. _e. g._ une file d'attente (FA)

## Evaluation
+ On a besoin d'échanger au moins 3 messages par exécution de section critique: request, confirmation d'acquis, sors de la section critique
+ **equitable**. les requêtes sont traitées par ordre d'arrivée
+ **inconvénients**:
	+ goulot d'étranglement sur le coordinateur
	+ panne du coordinateur relativement complexe à résoudre 


----



