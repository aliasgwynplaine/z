#computers #computerscience #fr #sorbonne #container
# Virtualisation pure
---

Création d'une machine complète virtuelle et emulation de tous les éléments d'une machine
Nécessite ce qu'on appelle un hyperviseur pour gérer des machines virtuelles et leur cohabitation.

Pour chaque application du système virtualisé, on fait deux translation d'adresse
EPT (Extended Page Table) permet d'éviter ces conversions en garantissant la sécurité (isolation)

## Defautes
+ point de défaillance unique
+ un recours à des machines plus puissantes
+ dégradation des performances
+ complexité accrue de l'analyse d'erreurs
+ parfois inadapté et avec surcoût

## types
+ Hyperviseur avec architecture hébergée
    emulation de matériel
    il peut être multi-kernel
    exemples: VirtualBox, QEMU, Vmware (workstation, fusion,player), Microsoft Virtual PC, Parallels desktop,…
+ Hyperviseur complet
    OS virtualisé
    MiniOS gestionaire comme hyperviseur.
    Peut émuler du matériel ou faire de la délegation
    exemples: XEN, KVM, Vmware vSphere
+ Paravirtualisation
    L'hyperviseur n'émule pas du materiel: il delegue au vrai matériel (CPU/GPU)
    utilisable avec les instructions spécifiques des CPU
    souvent impracticable pour les systèmes non libres
    exemples: Vmware Vsphere, XEN, MicrosoP Hyper-V server, KVM

---