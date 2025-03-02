#algorithmes #fr #distributedalgorithms #sorbonne #mutex
# L'algorithme de Raymond
---
Les processus sont organisés en **arbre** ayant pour racine le site qui possède le jeton. Les arêtes sont orientés vers la racine

Les demandes du jeton sont propagées vers la racine et sont enregistrées dans une file local sur chaque site du trajet

Chaque nœud possède 
+ une variable `holder` qui pointe en direction du nœud racine. 
+ file FIFO pour sauvegarde les requêtes pendantes de ses voisins
L'arbre est modifié (inversion du pointeur) à chaque transmission su jeton

## l'algorithme
+ Lorsqu'un nœud demande le jeton ou reçoit une requête pour le jeton de ses voisins, le nœud ajoute la requête dans sa file locale. Si la file était vide, il renvoie un requête à son `holder`.
+ En recevant une requête, le nœud qui possède le jeton le libère lorsqu'il ne l'utilise plus. À chaque libération du jeton, un nœud inverse la direction de `holder`.
+ Lorsqu'un nœud reçoit le jeton, il enlève le premier élément (`first`) de sa file.
	+ Si `first` est le propre nœud, il rentre en section critique
	+ Sinon, le jeton est renvoyé à `first`
+ Si la file n'est pas vide, une requête pour le jeton est renvoyé au voisin

> si on ignore les directions des arcs, la topologie de l'arbre n'est pas modifié.


## Evaluation
+ Entre 0 et N messages par demande de section critique
+ moyenne de O(log(N)) messages par exécution de section critique
+ **avantages**.
	+ extensibilité

---
