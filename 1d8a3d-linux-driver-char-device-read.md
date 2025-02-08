#kernel #programming #fr #drivers #fileops #char 
# linux char device - read
---
```c
ssize_t read(struct file *filp, char __user *buff, size_t count, loff_t *offp); 
```
+ `buff`. cette variable pointe vers l'adresse mémoire où les données lues devraient être placées.
+ `count`. c'est la taille de la donnée à transférer
+ `offp`. indiques la position dont l'usager accede. 

## La valeur de retourne
interpreté pour les applications
+ si elle est égale à `count`, donc le nombre de octets demandé ont été transmit.
+ s elle est positive, mais plus petite que `count`, donc on se sont transmit qu'une partie des octets demandés.
+ si elle est égale a 0, donc on a trouvé `EOF` mais on a rien lu
+ si elle est négative, donc erreur. Regarde `linux/errno.h` [[1d8g-linux-errno]]



---
