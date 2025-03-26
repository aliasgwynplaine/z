#fr #distributedalgorithms #sorbonne 
# algorithme de Misra (1983)
---
+ Anneau logique
	+ canaux FIFO unidirectionnels
+ chaque site une couleur noir ou blanc
	+ noir -> actif
	+ blanc -> inactif
+ jeton porte un compteur
+ N sites
+ Terminaison: tous les sites sont blanc après un tour
```
init:
	state = actif
	color = black
	if i == 0 :
		token = true
	else
		token = false

Upon fin:
	state = inactif

Upon reception applictation message:
	etat = actif
	color = black

Upon reception TOKEN(count):
	token = true
	nb = count
	if nb == N and color == white
		termination detection


```


