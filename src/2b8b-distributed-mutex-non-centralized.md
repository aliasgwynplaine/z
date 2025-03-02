#algorithmes #fr #distributedalgorithms #sorbonne #mutex
# Exclusion mutuelle répartie
---
## à base de permission
+ afin d'entrer en section critique, un processus doit demander la permission à d'autre processus
+ le droit d'entrée en section critique est acquis lorsque le processus a obtenu un nombre suffisant de permissions

### algorithmes
Lamport [[2b8b1-lamport-mutex]]

Ricard-Agrawala [[2b8b2-ricart-agrawala-mutex]]

Maekawa [[2b8b3-maekawa-mutex]]

## à base de jeton
+ La permission pour rentrer en section critique est réalisée par la possession d'un jeton
	+ l'unicité du jeton assure la **sûreté**
+ Le mouvement perpétuel du jeton assure la **vivacité**
### algorithmes
On étudie des algorithmes qui dependent d'une topologie particulière
+ anneau. l'algorithme de Martin [[2b8b4-martin-mutex]]
+ graphe complet. l'algorithme de Susuki-Kasami [[2b8b5-susuki-kasami-mutex]]
+ arbre.
	+ l'algorithme de Raymond [[2b8b6-raymond-mutex]]
	+ l'algorithme de Naimi-Trehel [[2b8b7-naimi-trehel-mutex]]



---