#infosec #cybersec #auth #fr 
# Kerberos protocol
---
Développé au MIT pour  le projet Athena, c'est un protocole d'authentification mais pas de autorisation. C'est-à-dire, même si la plateforme procure l'information des droits, c'est à les applications de les vérifier. 
Il fonctionne en utilisant des _tickets_ ([[3b3d-kerberos-tickets]]). Les tickets sont demandés au KDC ([[3b3b1-kerberos-kdc]]) et sont utilisé pour s'authentifier dans les différents services de la réseau.
Le protocol utilise du cryptage symétrique. 

## Ports utilisés
Au niveau de transport, Kerberos utilise par default:

| type | port |
| ---- | ---- |
| TCP  | 88   |
| UDP  | 88   |


workflow [[3b3e-kerberos-workflow]]
agentes ou entités dans Kerberos [[3b3b-kerberos-agents]]
clés de chiffrement [[3b3c-kerberos-keys]] 
tickets de kerberos [[3b3d-kerberos-tickets]]
attaques au Kerberos [[3b3a1-kerberos-attacks]]


---
[^1]: https://www.tarlogic.com/es/blog/como-funciona-kerberos/
