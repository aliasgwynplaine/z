#kernel #programming #fr #drivers #fileops #char 
# linux char device - write
---
```c
ssize_t write(struct file *filp, const char __user *buff, size_t count, loff_t *offp);
```
 + `buff`. cette variable pointe vers l'adresse mémoire celui des données qu'on va transférer au dispositif.
 + `count`. c'est la taille de la donnée à transférer
 + `offp`. indiques la position dont l'usager accede. 

# la valeur de retourne
+ si elle est égale à `count`, donc le nombre de octets demandé ont été transmit.
+ s elle est positive, mais plus petite que `count`, donc on se sont transmit qu'une partie des octets demandés.
+ si elle est égale a 0, donc on a rien écrit.
+ si elle est négative, donc erreur. Regarde `linux/errno.h` [1d8g-linux-errno](1d8g-linux-errno.md)
