#algorithmes #fr #distributedalgorithms #sorbonne #mutex
# Exclusion mutuelle répartie
---
## à base de permission
+ afin d'entrer en section critique, un processus doit demander la permission à d'autre processus
+ le droit d'entrée en section critique est acquis lorsque le processus a obtenu un nombre suffisant de permissions

### algorithmes
Lamport [2b8b1-lamport-mutex](2b8b1-lamport-mutex.md)

Ricard-Agrawala [2b8b2-ricart-agrawala-mutex](2b8b2-ricart-agrawala-mutex.md)

Maekawa [2b8b3-maekawa-mutex](2b8b3-maekawa-mutex.md)

## à base de jeton
+ La permission pour rentrer en section critique est réalisée par la possession d'un jeton
	+ l'unicité du jeton assure la **sûreté**
+ Le mouvement perpétuel du jeton assure la **vivacité**
### algorithmes
On étudie des algorithmes qui dependent d'une topologie particulière
+ anneau. l'algorithme de Martin [2b8b4-martin-mutex](2b8b4-martin-mutex.md)
+ graphe complet. l'algorithme de Susuki-Kasami [2b8b5-susuki-kasami-mutex](2b8b5-susuki-kasami-mutex.md)
+ arbre.
	+ l'algorithme de Raymond [2b8b6-raymond-mutex](2b8b6-raymond-mutex.md)
	+ l'algorithme de Naimi-Trehel [2b8b7-naimi-trehel-mutex](2b8b7-naimi-trehel-mutex.md)



---