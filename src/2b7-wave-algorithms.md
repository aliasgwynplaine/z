#algorithmes #fr #distributedalgorithms #sorbonne
# Algorithmes à vagues
---
Les algorithmes à vagues sont utilisés pour diffuser une info sur le réseau, découvrir la topologie du réseau, rassembler des informations du réseau.
## Types de nœuds
+ **initiateur**. le premier événement est interne pour démarrer l'algorithme à vague.
+ **non-initiateur**. le premier événement est la reception du message.

> Souvent, il y aura une racine ou _initiateur_, et _les autres_. Mais, il n'en reste pas moins qu'il soient plus d'un initiateur.
## Propriétés
+ **terminaison**. toute execution est finie
+ **décision**. une décision doit être prise à terme par au moins un processus. Typiquement une retourne
+ **dépendance**. une décision est précédée causalement par un événement de chaque processus


anneau [[2b7a-wave-algorithm-ring]]

arbre [[2b7b-wave-algorithm-tree]]

echo [[2b7c-wave-algorithm-echo]]

phase [[2b7d-wave-algorithm-phase]]

| algorithme | topologie                 | type                               | Décideur       | Symétrie | nb. msg | temps |
| ---------- | ------------------------- | ---------------------------------- | -------------- | -------- | ------- | ----- |
| Anneau     | anneau unidirectionnel    | centralisé                         | 1 - initiateur | Non      | N       | N     |
| Arbre      | Arbre bidirectionnel      | pas centralisé et pas décentralisé | 2              | Oui      | N       | O(D)  |
| Echo       | arbitraire bidirectionnel | centralisé                         | 1 - initiateur | Non      | 2 * M   | O(N)  |
| Phase      | arbitraire                | décentralisé                       | Tous           | Oui      | M * D   | O(D²) |



----


