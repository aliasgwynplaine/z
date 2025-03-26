#crypto #infosec #fr #sorbonne 
# Cryptographie
---

Crypto-système symétrique [[3b4a1-symmetric-key-algorithms]]


Crypto-système asymétrique [[3b4a2-asymmetric-key-algorithm]]


L'efficacité général du cryptage dépend
+ de la confidentialité des secrets
+ de la difficulté à deviner les secrets ou à essayer toutes les possibilités
+ de la difficulté de l'inversion de l'algorithme sans connaître la clé
+ de l'existence de portes par derrière
+ possibilité de déchiffrement par attaque à text partiellement connu

## Fonctions à sens unique
#todo
C'est une fonction $f(M)$ facile à calculer mais telle qu'il est extrêmement difficile de déduire $M$ de $f(M)$.

+ $h$ est à collision faible difficile: il est calculatoirement difficile de trouver M significatif tel que $h(M) = K$ pour un signature $K$.
+ $h$ est à collision forte difficile: il est calculatoirement difficile de trouver deux $M$ et $M'$ tel que $h(M) = h(M')$
Une fonction de hachage est avec clef si son calcul dépend aussi d'une info secrète.
C'est-à-dire, $k \neq k' \Rightarrow H_k(M)\neq H_k(M)$ . Voir HMAC (code d'authentification de message de hachage à clé).

fonction d'hachage cryptographic [[2a1-cryptographic-hash-function]]
## Glossaire
+ **Décrypter** ou **casser** un code
+ L'art de définir des codes (de chiffrement) est la **cryptographie**
+ L'art de casser des codes est appelé **cryptanalyse** ou **cryptologie**
+ Le **chiffrement** est donc une transformation d'un texte pour en cacher le sens
+ Le **déchiffrement** est l'opération inverse permettant de récupérer le text en clair à partir du texte chiffré
+ Un **crypto-système** est l'ensemble des deux méthodes de chiffrement et de déchiffrement utilisable en sécurité




---
