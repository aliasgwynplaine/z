#algorithmes #fr #distributedalgorithms #sorbonne #mutex
# L'algorithme de Naimi-Trehel
---
On a deux estructures de données:
+ File de requêtes (`next`)
	+ Le processus en tête de la file possède le jeton
	+ Le processus à la fin de la file est le dernier processus qui a fait une requête pour entrer en section critique
	+ Une nouvelle requête est toujours placée en fin de la file
+ Arbre de chemins vers le dernier demandeur (`father`)
	+ Le dernier demandeur est la racine de l'arbre
	+ Une nouvelle requête est transmise à travers un chemin de pointeurs `father` jusqu'à la racine de l'arbre (`father` == nil)
		+ Reconfiguration **dynamique** de l'arbre. Le nouveau demandeur devient la nouvelle racine de l'arbre
		+ Les sites dans le chemin compris entre la nouvelle et l'ancienne racine changent leur pointeur `father` vers la nouvelle racine

## L'algorithme
### variables locales
```
token
requesting
next
father
```
### initialisation de S_i
```
father = S_1;
next = nil;
requesting = false;
token = (father == S_i);

if father == S_i
	father = nil;
```
### Request_CS(S_i)
```
requesting = true;

if father != nil
	send(REQUEST, S_i) à father;
	father = nil;

/* attendre token == true */
```
### Release_CS(S_i)
```
requesting = true;

if next != nil 
	send(token) à next;
	token = false;
	next = nil;
```
### Receive_request_CS(S_j)
```
if father == nil;
	if requesting
		next = S_j;
	else
		token = false;
		send(token) à S_j;
else
	send(REQUEST, S_j) à father;

father = S_j
```
### Receive_token(S_j)
```
token = true
```


## Evaluation
+ Entre 0 et N messages par demande de section critique
+ moyenne de O(log(N)) messages par exécution de section critique
+ **avantages**.
	+ extensibilité
	+ **adaptativité**. un site qui n'est pas intéressé par la section critique ne sera plus sollicité après quelques transferts de requêtes.

---

