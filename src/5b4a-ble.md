#network #ble #bluetooth
# Bluetooth Low Energy
---
BLE est une norme différente du bluetooth classique. Les usages sont très différents, mais les clients BT sont souvent compatibles avec les deux normes.


**Objectif**: fonctionner très longtemps sur une pile bouton plusieurs mois ou plusieurs années.


+ BLE fonctionne sur la bande ISM de 2.4GHz sur 40 bandes espacés chacune de 2MHz.
+ Utilise FHSS
+ 10kBs de vitesse de transmission
+ Portée a 3m - 50m théorique mais 3 - 5m en pratique 
+ Paquets courts (~20B) => moins de mémoire

The Host protocol layers and the Controller protocol layer are connected by a Host-Controller Interface (HCI).


Roles:
- Broadcaster
- Observer
- Peripheral
- Central

## Host protocol layers


## Controller protocol layers
### Couche Liaison (LL)
Manage the state of the LE Radio.


Les paquets sont identifiés par leur numéro de transaction (Access Address) et pas par le couple d'identifiants (émetteur-destinataire). Cet solution permet d'économiser des octets.


Ce numéro est créé aléatoirement au moment de la connexion entre un master et un slave.

---
