#algorithmes #fr #distributedalgorithms #sorbonne #consensus
# problème du consensus
---
\\(N\\) processus se concertent pour décider d'une valeur commune \\(v\\), chaque processus proposant sa valeur initiale \\(v_i\\).

+ **termination**. tout processus correct finit par décider.
+ **accord ou coherence**. deux processus (corrects) ne peuvent décider différemment 
	+ Si on exie un peu plus pour la coherence de facon que deux processus fautifs ou corrects ne puissent décidir différemment, on se trouve au probleme de consesus unfirome [2b4a2-uniform-consensus](2b4a2-uniform-consensus.md).
+ **intégrité**. un processus décide au plus une fois
+ **validité**. si \\(v\\) est la valeur décidée, alors \\(v\\) est une des \\(v_i\\)

> un processus est _correct_ s'il ne tombe pas en panne pendant toute l'exécution.

> le problème du consensus est un des cas particulier de problème de décision [2b4a1-decision-problems](2b4a1-decision-problems.md) en répartie[^1]

## FLP - 85
Le résultat de l’impossibilité de FLP (Fischer, Lynch and Paterson). Consideré un résultat fondamental.

Le problème du consensus ne peut être résolu de façon **déterministe** dans un système **asynchrone** [2b4e-temp-model-dnb](2b4e-temp-model-dnb.md) dans lequel (ne serait ce que) une faute franche puisse se produire.

[2b4a3-fault-detection](2b4a3-fault-detection.md)


---



[^1]: G. Tel. Introduction to distributed algorithms. 2nd Edition. Ch 13. p 431-433.
