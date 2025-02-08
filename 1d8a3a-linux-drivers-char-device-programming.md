#kernel #programming #fr #drivers #fileops #char 
# Linux char device programming
---
## les fonctions

le décorateur `__user` indique que les pointeurs sont dans l'espace utilisateur. C'est-à-dire, il est possible qu'il soit pas disponible ni en RAM. Utilise les fonctions de `asm/uaccess.h` ([[1d8a3a1-linux-driver-uaccess]]) pour transférer la mémoire entre espace kernel et espace utilisateur.

Il est préférable d'implementer les fonctions en suivant certaines directives[^1]
+ open [[1d8a3b-linux-driver-char-device-open]]
+ release (close) [[1d8a3c-linux-driver-char-device-close]]
+ read [[1d8a3d-linux-driver-char-device-read]]
+ write [[1d8a3e-linux-driver-char-device-write]]
+ 


---
[^1]: https://static.lwn.net/images/pdf/LDD3/ch03.pdf
