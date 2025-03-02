#algorithmes #fr #distributedalgorithms #sorbonne #mutex
# Exclusion mutuelle
---

**Objectif**. coordonner des processus se partageant une resource commune.

> On va étudier le cas ou les processus sont repartis et ne communiquent que par passage de messages

## Transitions d'un processus
états: `requesting`, `not_requesting`, `critical_section`

```
┌──────────┐   request()   ┌─────────┐
│ not_req  ├──────────────►│   req   │
└──────────┘               └────┬────┘
      ▲                         │     
      │                         │     
  release()                  aquire() 
      │      ┌──────────┐       │     
      └──────┤ crit_sec │◄──────┘     
             └──────────┘             
```

Un algorithme d'exclusion mutuelle doit garantir:
+ au plus un processus exécutant la section critique
+ pas d’interblocage
+ pas de famine


algorithmes centralisés [[2b8a-distributed-mutex-centralized]]

algorithmes répartis [[2b8b-distributed-mutex-non-centralized]]