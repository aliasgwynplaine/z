#systemesdexploitation #kernel #ordinateurs #fr 
# kernel
---
C'est la partie du système d'exploitation qui gère les ressources de l'ordinateur et qui s'execute en mode système. Notamment, le noyau fournit des mécanismes d'abstraction de la mémoire, des processeurs et des périphériques. 

Le kernel est aussi un programme et doit être codé, compilé et il est mappé dans la mémoire vive tant qu'on utilise le système d'exploitation. Pour des raisons de sécurité, l'adresse de base du kernel n'est pas fixée dans le mapping. [1d12-KASLR](1d12-KASLR.md)

Quand un programme ou application a besoin d'accès mémoire ou doit se communiquer avec un périphérique, il doit demander au kernel pour faire operation pour lui. C'est qu'on connais comme appel système ([1l-syscall](1l-syscall.md)).|

classement des noyaux [1d1-kernel-structure-types](1d1-kernel-structure-types.md).
## exemples
+ linux [1d8-linux](1d8-linux.md)
+ windows NT kernel [1d9-windows-nt-kernel](1d9-windows-nt-kernel.md)
+ XNU [1d10-xnu](1d10-xnu.md)
+ unix kernel [1d11-unix-kernel](1d11-unix-kernel.md)


---
