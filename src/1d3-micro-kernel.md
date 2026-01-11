#kernel #fr 
# micro-noyau
---
Le µ-noyau minimise les fonctionnalités intégrées au noyau en plaçant la plus grande partie des _services_ du système d'exploitation à l’extérieur du noyau. C'est‑à‑dire, les services sont exécutés en mode S.

En consequence, la sécurité est renforcé, aussi que la souplesse et la portabilité. Par contre, on perde en performance à cause d'avoir besoin de basculer entre mode S et mode U. Aussi, on a besoin d'standardiser une API afin que les services interagissent avec le µ-noyau.

On appelle **µ-noyau enrichi** à l'ensemble logiciel formé par le µ-noyau et ses services.

---

**Contexte historique : le noyau Mach**

Le noyau Mach a été développé à l'université Carnegie Mellon dans les années 1980. Il a servi de base à GNU Hurd et au noyau XNU d'Apple, et a influencé la conception des microkernels modernes en mettant l'accent sur la modularité et la sécurité.