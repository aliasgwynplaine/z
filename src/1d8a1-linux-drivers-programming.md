#kernel #programming #fr #drivers 
# Linux drivers programming
---

## Guidelines
+ Définir les services attendus
+ Doit réutiliser le code des autres sous-systèmes.
+ Le code doit être réentrant. Il faut éviter l'usage des variables globales dans les fonctions (voir `strtok(...)`, par example).

Au niveau pratique, il y a beaucoup de similitudes entre écrire un driver et écrire un module. 

+ allocation des numéros major et minor[1d8a2-linux-drivers-major-minor-allocation](1d8a2-linux-drivers-major-minor-allocation.md)
+ la structures  `file_operations` [1d8a3-linux-drivers-file-operations](1d8a3-linux-drivers-file-operations.md)
+ 




---