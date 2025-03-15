#iot #sorbonne #network
# Message Queuing Telemetry Transport
---
+ Modèle publish (topic-value) / subscribe (topic)
+ décentralisée et asynchrone
+ basé sur TCP [[5b4a1-tcp-protocol]]
+ développé par IBM en 1999
+ adapté aux réseaux sans fils
+ faible consommation énergétique
Les clients doivent s'abonner et après ils reçoivent que l'information venant des autres clients.
```
publish                      subscribe
┌──────┐                              
│client├──────────┐                   
└──────┘          │           ┌──────┐
                  │   ┌──────►│client│
                  ▼   │       └──────┘
┌──────┐        ┌─────┴┐              
│client├───────►│broker│              
└──────┘        └─────┬┘              
                  ▲   │       ┌──────┐
                  │   └──────►│client│
┌──────┐          │           └──────┘
│client├──────────┘                   
└──────┘                                                
```
## glossaire
+ broker. distribue les informations aux clients intéressés
+ client. connecté au broker pour envoyer ou recevoir ldes informations
+ topic. nom du message. les clients publient ou souscrivent au topic
	+ Les topics peuvent être hiérarchique: `/topic/subtopic`
+ publish. envoi d'informations par un client au broker qui les redistribue aux clients abonnés au topic
+ subscribe. abonnement à un topic pour recevoir les messages publiés. désabonnement possible.
+ QoS. Quality of Service.
	+ 0. au plus une seule fois sans qu'un accusé de réception
	+ 1. au moins une fois, message envoyé plusieurs fois jusqu'à la réception de l'accusé de réception.
	+ 2. spécifie exactement une fois, Clients expéditeurs et destinataires ont la garantie d'une seule copie du message.


---



