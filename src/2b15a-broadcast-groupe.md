#algorithmes #fr #distributedalgorithms #sorbonne #broadcast
# Groupe de diffusion
---
un groupe de diffusion peut être:
+ fermé: `broadcast(m)` ne peut être appelé que par un membre du groupe.
+ ouvert: `broadcast(m)` peut être appelé par un processus extérieur au groupe
+ statique: la liste de membres est fixée et déterminé au depart.
+ dynamique: les processus peuvent quitter et rejoindre le groupe.

on utilisera les primitives `rejoindre(G)` et `quitter(G)` dont `G` est un groupe.

---



