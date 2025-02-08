#kernel #programming #fr #drivers #fileops #char 
# linux char device - open
---
On doit performer le suivant:
+ tester erreurs liées au dispositif specific.
+ initialiser le dispositif si jamais il est la premiere fois qu'il est ouvert
+ metre a jour le pointeur `f_op`, si nécessaire.
+ faire l'allocation de la memoire à mettre dans `filp->private_data`, si nécessaire. 
