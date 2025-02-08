#linux #modules #kernel #fr #sorbonne 
# Linux modules
---
Les modules du linux ajoute des services dans le noyau: pilotes [[1d8a-linux-drivers]], appels systèmes, implementations des protocoles réseau.
Dans linux, il peut être chargé ou déchargé dynamiquement. Les modules s'execute en mode système.

Les modules linux doivent toujours avoir une fonction d'initialisation et une fonction de sortie:
```c
/* headers here */

static int __init mod_init(void) { /* ... */ }

static void __exit mod_cleanup(void) { /* ... */ }

module_init(mod_init);
module_exit(mod_cleanup);
```

---

