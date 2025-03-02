#algorithmes #fr #distributedalgorithms #sorbonne #mutex
# L'algorithme de Martin
---
Le jeton circule dans le sens inverse des requêtes
Quand S_i veut entrer en section critique, il envoie une requête à son successeur et attend le jeton. En recevant une requête de son prédécesseur, si S_j ne possède pas le jeton, il retransmet la requête à son successeur. Sinon, s'il le possède et ne l'utilise pas, il l'envoie à son prédécesseur.
## Evaluation
+ Nombre de messages: $2(K+1)$, dont K est le nombre de sites entre le demandeur et le site en possession du jeton
+ avantages
	+ simplicité
	+ pas de diffusion
+ inconvénients
	+ pas extensible
	+ un site qui n'est pas intéressé par la section critique est souvent solicité à transmettre les requêtes et le jeton

----

