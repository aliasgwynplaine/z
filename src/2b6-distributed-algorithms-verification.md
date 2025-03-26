#algorithmes #fr #distributedalgorithms #sorbonne
# Verification d'un algorithme réparti
---
**Problème**: non déterministe
	+ multiplication des traces d'exécution
	+ difficulté de reproduire une exécution
	+ extrêmement difficile à debugger
**On utilise donc méthodes inductives basées sur des propriétés invariants et stables.**

+ **sûreté**. rien de mauvais ne se produit dans l'exécution
	+ l'exclusion mutuelle: au plus un proc finit en section critique
	+ détection de la termination: pas de fausse detection
+ **vivacité**. quelque chose de bien finit par se produire dans l'exécution
	+ exclusion mutuelle: si un proc demande la section critique, donc il fini par l'obtenir
	+ detection del a termination: si l'application se termine, donc cette termination sera detecté.



---