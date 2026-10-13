#algorithmes #fr #distributedalgorithms #sorbonne
# Canaux de communication
---
+ Risque de déséquencement des messages
> canal FIFO = pas de déséquencement
+ Risque de perte de messages
> communications fiables
+ Certains canaux peuvent avoir une capacité bornée.

Topologies de systèmes répartis [2b2a-distributed-topologies](2b2a-distributed-topologies.md)

## types de canaux
+ **fiable**: si \\(p\\) execute `send(m)` vers \\(q\\) et \\(q\\) est correct, alors \\(q\\) recevra `m`.
+ **quasi-fiable**: si \\(p\\) execute `send(m)` vers \\(q\\), et \\(p\\) et \\(q\\) sont corrects, alors \\(q\\) recevra le `m`.
+ **equitable**(fair-lossy): si un processus correct envoie un message `m` à \\(q\\) une infinité de fois, alors \\(q\\) recevra `m`.

---