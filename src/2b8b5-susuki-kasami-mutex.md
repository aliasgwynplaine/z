#algorithmes #fr #distributedalgorithms #sorbonne #mutex
# L'algorithme de Susuki-Kasami
---
À chaque envoi du jeton, le processus expéditeur envoie aussi la file d'attente et un tableau qu'a l'information de la dernière demande d'entrée en section critique.

## Types de message
+ `REQUEST (S_j, k)`. indique que site `S_j` est en train de faire sa `k`-ème demande d'entrée en section critique
+ `TOKEN (Q, LN)`
	+ `Q`. une file d'attente de demandes pour entrer en section critique
	+ `LN`. `LN[i]` indique le numéro de la dernière demande d'entrée en section critique du site `S_i` qui a été satisfaite
## l'algorithme
### variables
+ `etat_i`. `req`, `not_req`, `crit_seq`
+ `token_i`
+ `RN_i`
	+ `RN_i[j]` est le numéro de la dernière requête reçue de la part du site `S_j`
	+ `RN_i[i]` correspond au nombre de requêtes faites par le site `S_i`
+ `LN_i`. vecteur de N positions de requêtes satisfaites

### initialisation (S_i)
```
token = S_i == S_1
etat = not_req
RN = [ 0 for j in 1...N ]
LN = [ 0 for j in 1...N ]
Q = {}
```
### Request_CS(i)
```
etat = req

if token == false
	RN[i]++
	diffuser (REQUEST (S_i, RN[i]))
	/* attendre token == true */

etat = crit_sec
```
### Release_CS(i)
```
LN[i] = RN[i]

for site in [ 1,...,N ]
	if site != i et not site dans Q and RN[site] > LN[site]
		Q.push_back(site)

if Q not empty
	token = false
	site = Q.pop()
	send(TOKEN(Q, LN)) à site

etat = not_req
```
### Receive_request_CS(S_j, REQUEST(j, k))
```
RN[j] = max(RN[j], k)

if token == true and etat == not_req and RN[j] > LN[j]
	token = false
	send(TOKEN(Q, LN)) à S_j
```
### Receive_token(TOKEN(Q, LN))
```
token = true
LN = TOKEN.LN
Q = TOKEN.Q
```

## Evaluation
+ Nombre de messages par exécution de section critique
	+ N, si le processus n'a pas le jeton
	+ 0, si le processus a le jeton
+ vivacité. garantie par l'ordre FIFO de la file Q
+ inconvenient. pas extensible

---