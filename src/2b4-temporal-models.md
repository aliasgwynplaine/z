#algorithmes #fr #distributedalgorithms #sorbonne
# Modèles temporelles
---

+ **Constat**
	+ vitesses des processus différents.
	+ délais de transmissions variables
+ **Problème**. 
	+ combien de temps attendre avant de reprendre au déclarer l’échec
+ **Démarche**.
	+ élaborer des modèles temporelles pour lesquels on puisse tirer des propriétés.

Alors, choisir un modèle temporelle est faire des hypothèses sur:
+ le délais de transmission des messages
+ le écart entre les vitesses des processus

Ainsi, on a:
+ système synchrone: délais/écarts bornés connus [2b4c-temp-model-dbc](2b4c-temp-model-dbc.md)
+ système partiellement synchrone: délais/écarts bornés inconnus [2b4d-temp-model-dbi](2b4d-temp-model-dbi.md)
+ système asynchrone: délais/écarts non bornés [2b4e-temp-model-dnb](2b4e-temp-model-dnb.md) 

Horloges [2b4b-clocks](2b4b-clocks.md)

Problèmes du consensus [2b4a-consensus-problem](2b4a-consensus-problem.md)
