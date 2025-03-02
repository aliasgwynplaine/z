#algorithmes #fr #distributedalgorithms #sorbonne #mutex
# Lamport mutex (1978)
---

## Hypothèse
+ N processus
+ **Canaux FIFO**

> Si les canaux ne sont pas FIFO, l'exclusion mutuelle n'est pas garantie
## Messages
+ types:
	+ `REQUEST`
	+ `REPLY`
	+ `RELEASE`
+ contenu: `(type, (H_i, S_i))`
## Variables locales du processus i
+ `H_i`. horloge logique scalaire
+ `FA_i`. file d'attente de requêtes
	+ dans l'ordre induit par la valeur de leurs estampilles
+ `At_i`. attente de permission
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
Placer sa requête req_i dans la file d'attente;
Envoyer REQUEST à tous les autres sites (At_i = R_i - S_i)
Attendre l'accord de tous dles autres sites (REPLY) et que sa propre requête soit la plus ancienne de toutes (At_i = {} et req_i == head(FA_i));
```

### Release_SC(S_j)
```
H_i++;
Diffuser un message RELEASE à tous les autres sites (R_i - {S_j});
Enlever sa requête req_i de la file d'attente FA_i;
```

### Reception(msg de S_j)
```
Mettre à jour H_i (H_i = max(H_i, H_j) + 1);
Switch(type msg)
	REQUEST:
	    FA_i.push(msg S_j) dans l'ordre des estampilles;
	    send(REPLY, S_j);
	REPLY:
		At_i = At_i - {S_j};
	RELEASE:
		FA_i = FA_i - {msg S_j};
```

## Evaluation
+ $3(N-1)$ messages par exécution de section critique
+ **sûreté**. seul le site en tête de la file d'attente `FA` pourra rentrer en section critique. Les autres attendent que cette demande soit retirée avec un reception de RELEASE
+ **vivacité**. toute demande finira par avoir la plus petite estampille et donc se trouvera en tête de la file d'attente
+ **equitable**. par l'ordre total
+ **avantage**. simplicité (en fonctionnement normal)
+ **inconvénients**.
	+ hypothèse de canaux FIFO
	+ pas extensible


> amélioré par Ricart-Agrawala [[2b8b2-ricart-agrawala-mutex]]

----



