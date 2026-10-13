#integratedcircuits #protocol #serialport #pin 
# I2C
---
L'Inter-Integrated Circuit (I2C) est un protocole de **communication série** utilisé pour connecter des composants électroniques sur un même circuit imprimé ou entre différents périphériques.

Défini par Phillips dans les années 80.

Jusqu'à 128 abonnés communiquent sur 3 fils:
+ SDA: Serial Data Line  
+ SCL: Serial Clock Line
+ GND: Ground

## Caractéristiques
+ débit de 100 Kbauds à 3.4 Mbauds
+ arbitrage décentralisé
+ branchement à chaud
+ multi-maitres

notes dans l'implementation sur rpi [5b1a2a1a-pi-i2c](5b1a2a1a-pi-i2c.md)


### Glossaire
+ **abonné** → tout élément connecté sur le bus.  
+ **émetteur** → tout abonné qui envoie des données sur SDA.  
+ **récepteur** → tout abonné qui reçoit des données de SDA.  
+ **maître** → tout abonné qui démarre et termine un échange.
	+ C'est le maître place l’horloge sur SCL. 
+ **esclave** → tout abonné adressé par un maître. 
	+ Un esclave à la possibilité de ralentir l’horloge du maître. 
+ **adresse** → numéro attribué à un esclave.
	+ Sur le bus tous les esclaves ont une adresse unique. 
+ **échange** → dialogue entre un maître et un esclave.
	+ commence par une adresse émise par le maître,  suivie d’une ou plusieurs données émises par le maître ou l’esclave.
	+ Un maître peut chaîner plusieurs échanges d’affilé. 
+ **arbitrage** → résolution du conflit d’un accès simultané par 2 maîtres.

---


