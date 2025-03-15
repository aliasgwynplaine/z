

## Démarrage
### Etape 1: Firmware: BIOS / (U)EFI
+ BIOS. code qui lance le bootloader
+ MBR (Master Boot Recorder). table de description des partitions sur les disques
+ Le BIOS charge le MBR
	+ Bootstrap.
	+ Va voir les quelques octets au début de la partition marqué comme bootable
	+ chargeur de démarrage. LILO. GRUB
	+ Très peu de place. Très peu de sécurité
+ Les BIOS a des limitations
	+ Il ne peut gérer des disques de plus de 2.3 To (Table de partition), 1Mo de RAM
	+ Legacy mais encore utilisé pour IOT/Android
	+ Entre 200 et 500 octets pour le bootloader dans le premier secteur du disque

+ Couple: (U)EFI/GPT
+ Gestion plus poussée par modules
+ Ajout de la sécurité (signatures des modules EFI)
	+ Utilisation des GUID Partition Table (max 8Zio)
	+ Permet un boot sécurisé des MAJ sécurisés, un stockage des noyaux systèmes (utilisation de code signé)
	+ Inclus la gestion réseau
+ Chaque disque peut avoir sa partition EFI
	+ ~100Mo à ~1Gio pour y stocker le bootloader
	+ Formater en FAT32. Certains EFI support exFAT/NTFS ou autre
+ La cohabitation est difficile

#### Sécurité uEFI
+ Protection du bootloader. Pas forcement des noyaux
+ Peut s'appliquer au boot par le réseau et périphériques externes
Plataform key (PK)
+ Stockée dans la variable EFI nommée PK.
+ Format: x509 (clef publique dans certificat)
+ Mise à jour: uniquement une nouvelle clef signée avec l'ancienne clef PK
+ MAJ: directement dans l'interface physique EFI possible
	+ en général protégé par mot de passe
	+ en général suppression seulement
+ Si on détruit la PK, on passe a mode config
+ N'est pas utiliser pour signé des binaires
	+ La plupart des ordinateurs viennent avec 2 clefs microsoft pré-installes
KEY EXCHANGE KEY (KEK)
+ Stockée dans KEK
+ format: X509 OU RSA
...

The Signature Database (db)
+ Stockée dans la variable db
Machine Owner Key (MOK)


## Etape 2: Exéction du BookLoader du BIOS
+ charge une carte (map)  du disque pour le système
+ Charge le noyaux des OS (Linux, Windows, etc)
+ Pour l'EFI
...

## Etape 3 (optionnel)
+ Si le noyaux contient tous les drivers nécessaire, initrd peut être ignoré
+ ...
## Etape 4: Exécution du noyau
Le bootloader exécute le noyau en transmettant les arguments
## Etape 5: Création du premier processus 
+ init ou systemd en Linux
## Etape 6: Interprétation des fichiers de configurations du system par les fils du processus 1
+ Niveaux d'exécution (runlevel) -> `/etc/inittab`
	+ 0. 
	+ 1. Utilisateur
	+ 2. Multiutilisateur
	+ 3
	+ 4
	+ 5
	+ 6
`/etc/rc.d/rc`

`/etc/init.d/`


## Etape 7: 