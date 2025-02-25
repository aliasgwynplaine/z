#algorithmes #fr #distributedalgorithms #sorbonne
# Topologies de systèmes répartis
---
## Topologie logique
La manière dont la communication entre sites est organisée (structure de contrôle)

+ **Representation sous forme de graphe**
	+ sommets -> processus (ou nœuds)
	+ arêtes -> canaux (ou lien) de communication
+ Caractéristiques du graphe
	+ connexes -> chaque paire de nœuds est reliée par un chemin
	+ fortement connexe (graphe orienté) -> il existe un chemin entre chaque paire de nœuds en respectant le sens des arcs
	+ incomplet -> tous les processus ne communiquent pas deux à deux directement
+ Paramétrés définis sur le graphe
	+ distance entre deux nœuds -> longueur du plus court chemin entre ces deux nœuds
	+ diamètre du graphe -> la plus longue des distances entre deux nœuds du graphe
	+ degré d'un nœud -> nombre de voisins du nœud.

## Topologie physique
"câblage" du réseau. Sur un topologie physique connexe quelconque, on peut toujours implanter une structure de contrôle en arbre.

## Topologies particulières
+ anneau bidirectionnel
+ étoile
+ clique (graphe complet)
+ hypercube



---

