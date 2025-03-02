#algorithmes #fr #distributedalgorithms #sorbonne #mutex
# Ricart-Agrawala (1981)
---
C'est une amelioration de l'algorithme de Lamport [[2b8b1-lamport-mutex]]

+ File d'attente. chaque processus P_i ne conserve dans sa file d'attente FA_i que les requêtes dont l'acquittement a été différé.
+ `RELEASE` est remplacé par le message `REPLY` qui possède le sens 'dune autorisation d'accès, délivrée de façon conditionnelle.
## Hypothèse
+ N processus connu de tous
+ **communication fiable mais pas FIFO**
## Messages
+ types:
	+ `REQUEST`. demande d'entrer en section critique
	+ `REPLY`. réponse à la reception d'un message `REQUEST`
	+ ~~`RELEASE`~~
+ contenu: `(type, (H_i, S_i))`
## Variables locales du processus i
+ `H_i`. horloge logique scalaire
+ `FA_i`. file d'attente de requêtes
	+ dans l'ordre induit par la valeur de leurs estampilles
+ `At_i`. attente de permission
+ `Etat_i`. `req`, `not_req`, `crit_sec`
## L'algorithme
### Variables locales
```
FA_i = {}
H_i = 0
At_i = 0
R_i = {1, 2, ..., N} - {S_i}
```
### Request_SC
```
H_i++;
Envoyer REQUEST à tous les autres sites (At_i = R_i - S_i)
Attendre l'accord de tous dles autres sites (REPLY);
```

### Release_SC(S_j)
```
H_i++;
Diffuser un message REPLY à tous les autres sites differés dans la FA_i;
```

### Reception(msg de S_j)
```
Mettre à jour H_i (H_i = max(H_i, H_j) + 1);
<...>
```

## Evaluation
+ $2(N-1)$ messages par exécution de section critique
+ **sûreté**. seul le site en tête de la file d'attente `FA` pourra rentrer en section critique. Les autres attendent que cette demande soit retirée avec un reception de RELEASE
+ **vivacité**. toute demande finira par avoir la plus petite estampille et donc se trouvera en tête de la file d'attente
+ **equitable**. par l'ordre total
+ **avantage**s. 
	+ hypothèse de canaux FIFO plus nécessaire
	+ taille de la file d'attente `FA` plus petite
	+ moins de messages envoyés par rapport Lamport
+ **inconvénients**.
	+ pas extensible



---


