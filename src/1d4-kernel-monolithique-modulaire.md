#kernel #fr 
# Noyau monolithique modulaire
---
Les _services_ du système d'exploitation se transforment en modules qui sont mis dedans le noyau dynamiquement. Les services sont exécutés en mode S une fois chargés et partagent le même space d'adressage que le coeur du noyau.

En tant que les modules sont exécutés en mode S, l'aspect sécurité peut être compromis. 

## exemples
+ linux [1d8-linux](1d8-linux.md)

---
