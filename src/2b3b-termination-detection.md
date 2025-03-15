#en #distributedalgorithms #sorbonne #failures 
# Detection de la termination
---
## Definition
Construction d'une couche de contrôle afin de détecter la terminaison d'une application répartie
+ Distinguer l'algorithme de détection de terminaison de l'algorithm de l'appli

Configuration terminale
+ aucune action supplémentaire de l'appli ne peut être exécutée
+ tous les canaux de communication sont vides

Etat
+ actif. si une action interne ou l'action emmètre est applicable
+ inactif. dans le cas contraire
Message
+ applicatif
+ contrôle. mssg de l'algorithme de detection de la terminaison
Un modèle est défini pour un exécution réparie en définissant les actions des processus actifs et inactifs

Les processus suivent les ègles suivantes
1. initialement chaque proc p peut etre dans l'etat actif ou inactif
2. un proc p peut passer spontanément de l'etat actif a innactif
3. seul les proc actifs peuvent envoyer des msgs applis
4. losrs de la réception d'un message appli, un proc p inactif passe a actif
	+ seule facon pour un processus inactif de passer actif
observations
+ un message de contrôle émis lorsque le proc est inactif ne le rend pas actif
+ la reception d'un messaeg de control non plus
Terminaison
+ P: ensemble de processsus
+ C ensemblde de canaux
+ Prédicat TERM
	+ TERM <-> forall p in P: p inactif et forall c in c : c vide
		+ TERM est un predicat stable
			+ ...
Propriétés
+ sûreté. si un proc detecte la terminaison a l'instant t, alors TERM(t) = true
	+ pas de fausse detection
+ vivacité. si a un instant t TERM(t) = true, alors l'algo de detection finira par d+etecter cette terminaison
> Example d'un mauvais algo:
+ les sites se trouve soit dans l'état inactif soit dans l'état actif
+ algo
	+ faire circuler un jeton (msg contrôle) selon une structure d'anneau, envoyé initialement par P_0
	+ Lorsq'un site est inactif et possède le jeton, il l'envoie au site suivant
	+ lorsque le jeton revient à P_0, la terminaison est détectée
## Algorithmes
### algorithme de Misra (1983)
+ Anneau logique
	+ canaux FIFO unidirectionnels
+ chaque site une couleur noir ou blanc
	+ noir -> actif
	+ blanc -> inactif
+ jeton porte un compteur
+ ...
+ Terminaison
	+ tous les sites sont blanc
```
init:
	state = actif
	color = black
	if i == 0 :
		
```


### Modèle à communication instantanée
+ A communication instantanée
	+ communication synchrone: exemple CSP
	+ TERMP <-> forall p in P : p inactif
+ Atomique
	+ le moment d'actividte de procesus est négligeable
		+ TERM <-> forall c in C: c vide
#### Algorithme de Rana (1983)
+ Communication instantanée (e.g. CSP)
+ N sites organisés dans un anneau logique unidirectionnel
	+ messages transmis sur l'anneau
+ A chaque fois qu'un processus recoit soit un message applicatif soit un message de controle, il met son horloge logique local a jour
+ Les messages de controles circulent sur l'anneau
+ ...
+ ...

##### l'algo
+ lorsqu'un proc devien inactif, il enregistre la valeur de son horloge local (H_ina) et envoie le message de control <H_ina, 1> a son succ
+ lors de la réception d'un message de controle:
	+ si le site est actif, il ignore le message
	+ sinon
		+ si compteur != N
			+ si la valeur de son passage a inactif H_ina > H_msg du message de control recu, le message est ignoré
			+ Sinon, le message est envoye...


#### Algorithme de Dijkstra (1983)
+ modele a communication instantanée
+ N sites organisés dans un anneau logique
+ Existence d'un jeton
+ Les sites peuvent etre de couleur blanc ou noire ainsi que le jeton
	+ initialement tous les sites et le jeton son blancs

##### l'algo
+ il  y a un site initiateur P_0
	+ quand P_0 devient inactif, il envoie le jeton couleur blanche a P_N-1
+ lorsque le site P_i, qui detient le jeton, devient inactif, P_i envoie le jeton au site P_i-2
	+ Si P_i est blanc
		+ P_i envoie a P_i-1 le jeton sans changer la couleur du jeotn
	+ sinon
		+ P_i change la couleur du jeton a noire avant de l'envoyer a P_i-1
		+ P_i devient blanc
+ Un site P_i devient noire en envoyant un message applicatif au site P_j
+ Lorsque P_o recoit le jeton
	+ si le jeton est blanc et P_o est blanc et dans l'etat inactif
		+ terminaison détectée
		+ sinon
			+ lorsque P_0 devient inactif, il renvoie le jeton couleur blanche a P_N-1

##### l'algo en utilisant un arbre couvrant
+ Racine informe aux feuilles de commencer la détection
	+ chaque feuille a un jeton blanc
	+ un site P_i devient noire en envoyant un message applicatif au site P_j
	+ Si P_i est noir:
		+ P_i change la couleur du jeton a noire avant de l'envoyaer a son pere
		+ P_i devient blanc
	+ Si P_i a recu un jeton noir d'un de ses enfants, il envoie un jeton tnoir a son pere
	+ ...

### Modèle atomique
L'algorithme de détection ne voit jamais un processus local dans l'état actif: l'algorithme n'est activé que lorsque le procsssus est inactif

Ex: mauvaise solution avec deux compteurs
+ N procs
+ supposons qu'un processus i veut savoir si le systeme se trouve dans un etat terminal: tous les canaux vides
	+ i envoie un message de controle a tous les N-1 autres procs a un instant t
+ Chaque processus j répond a i avec le nombre de messages recus r_j(t) et nombre de messages envoyés s_j(t)
+ en recevant tous les messages, le site i calcule
	+ 
	+ ...
	+ 

### L'algorithme de quatre compteurs
+ Mattern (1987)
+ Compteur deux fois
	+ fin de la premiere vague de controle. l'initiateur accumule les valeurs de s_i(t_i) et r_i(t_i) forall i: 1 <= i <= N dans S et R
	+ fin de la deuxieme vague de controle. l'initiateur accumule les valeurs de s_i(t_i) et r_i(t_i) forall i: 1<=i<=N dans S' et R'
+ Si R=S', alors, l'exécution s'est terminée à la fin de la premiere vague (à prouver)
il faut bien reviser les preuves


---



