#algorithmes #fr #distributedalgorithms #sorbonne #broadcast
# Protocoles de Diffusion
---
Les protocoles de diffusion sont importants dans la mesure où les processus doivent être adressés comme un tout. Alors, un processus émetteur envoie un message a un **groupe** [2b15a-broadcast-groupe](2b15a-broadcast-groupe.md) de processus.

Assez souvent, le processus émetteur n'est pas au courant de qu'il parle avec plusieurs processus.

Par example, dans les serveurs répliqués, ou dans un calcul parallèle. 

## primitives
+ `broadcast(m)`. le processus `p` diffuse le message `m` au groupe.
+ `deliver(m)`. le message `m` est délivré au processus `p`.

> [!WARNING] même si on s'adresse au group de processus, les messages ne sont pas diffusés de manière atomique en pratique: ils s’appuient sur la primitive d'envoie point-à-point `send(m, p)`.  Alors, il faudra implementer les "primitives" `broadcastX()` et `deliverX`.

## problèmes
+ Les processus peuvent tomber en panne.
+ L'ordre de réception des messages sur les différents processus destinataires n'est pas garanti.
Alors, il faut assurer des propriétés de diffusion:
+ garantie de **remise** de messages.
	+ Diffusion Best-effort (best effort broadcast) [2b15b-best-effort-broadcast](2b15b-best-effort-broadcast.md)
	+ Diffusion Fiable [2b15c-reliable-broadcast](2b15c-reliable-broadcast.md)
	+ Diffusion Fiable Uniforme [2b15d-uniform-reliable-broadcast](2b15d-uniform-reliable-broadcast.md)
+ garantie d'**ordonnancement** des messages reçus.
	+ FIFO 
	+ Causal [2b4b1-causal-order](2b4b1-causal-order.md)
	+ Total 

On considere les processus comme dans notre model [2b14-notre-model](2b14-notre-model.md).




---



