#infosec #cybersec #auth #fr 
# Kerberos protocol
---
Développé au MIT pour  le projet Athena, c'est un protocole d'authentification mais pas de autorisation. C'est-à-dire, même si la plateforme procure l'information des droits, c'est à les applications de les vérifier. 
Il fonctionne en utilisant des _tickets_ ([3b3d-kerberos-tickets](3b3d-kerberos-tickets.md)). Les tickets sont demandés au KDC ([3b3b1-kerberos-kdc](3b3b1-kerberos-kdc.md)) et sont utilisé pour s'authentifier dans les différents services de la réseau.
Le protocol utilise du cryptage symétrique. 

## Ports utilisés
Au niveau de transport, Kerberos utilise par default:

| type | port |
| ---- | ---- |
| TCP  | 88   |
| UDP  | 88   |


workflow [3b3e-kerberos-workflow](3b3e-kerberos-workflow.md)
agentes ou entités dans Kerberos [3b3b-kerberos-agents](3b3b-kerberos-agents.md)
clés de chiffrement [3b3c-kerberos-keys](3b3c-kerberos-keys.md) 
tickets de kerberos [3b3d-kerberos-tickets](3b3d-kerberos-tickets.md)
attaques au Kerberos [3b3a1-kerberos-attacks](3b3a1-kerberos-attacks.md)


---
[^1]: https://www.tarlogic.com/es/blog/como-funciona-kerberos/
