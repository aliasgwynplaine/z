#tag #tagg
# 5b7-multi-tsar
---
#todo 
complete from here: https://largo.lip6.fr/trac/tsar/wiki
## TSAR
Descriptions tenchiniques
Instructions atomiques: LL/SC [5b7a-llsc](5b7a-llsc.md) anti-famine par un mécanisme d'oubli et CAS (Compare and Swap) pour la MMU

LL/SC -> Load Link / Store-Conditional
todo: atomic operations LL/SC, CMP-SWAP, etc... go to ARA to see some examples

Espace d'adressage physique \\(2^{40}\\) B
Espace d'adressage virtuel \\(2^{32}\\) B

Mémoire logiquement partagée et physiquement distribuée: les L2 mappent des segments fixes d'adresses physiques
### Cache
+ 2 L1 (séparés instruction et data) (16kB chaque un)
	+ cohérents par FSM matériels
	+ Cohérence -> DHCCP
	+ 
+ 1 L2 (256 kB par cluster)
	+ Cohérence -> protocole DHCCP [5b7b-dhccp-protocol](5b7b-dhccp-protocol.md)
		
+ 1 L3 (1 - 4 MB par cluster)
### MMU
Taille de pages: 4kB et 2MB
Entrées 64
MISS-TLB -> **matériel**
PageFault -> noayu (signal)

### Prototype
TSAR est décrit en CABA

### coherence des caches L1
C'est le cache L2 qui donne les lignes qui gère la cohérence, plusieurs solutions qui supposent que le L2 soit inclusif et une politique write through:
1. L2 dispose d'un bitmap avec autant de bits que de L1: simple mais pas à l'échelle
2. Les copies de lignes sont chaînées entre elles dans des L1:
3. Les caches L2 stocke pour chaque ligne la liste L1 aant la copie
4. L2 se contente de se souvenir du nb de copie de chaque linge
TSAR implement une mix entre 3 et 4 (DHCCP)
Les L2 conservent une liste des copies jusqu'à un seuil (ici 4) Pourquoi 4 ? Ca marchait bien dans les test LOL.

Au delà du seuil, il conserve juste le nombre de copies -> invalidation des copies

Varias personas han trabajado en esto a través de trabajos de tesis
A saber:
+ Cohérence scalable DHCCP (Yang GAO)
+ Virtualisation sécurisée (Geoffrey PLOUVIEZ)
+ Modèle TLM-DT (Herman GIOJA)
+ Cache L3 tridimensionnel (Éric GUTHMULLER)
+ Système d’exploitation ALMOS (Ghassan ALMALESS)
+ Tolérance aux pannes franches (César FUGUET)
+ Amélioration du protocole DHCCP (Hao LIU)

hyperviseur aveugle -> il a pas moyen de visualiser la mémoire

almos-mkh differences par rapport a linux
systeme de fichier
gestion de drivers
...
A. Greiner a pris la décision pq l'OS est pas censé d'être porté qqmm
examen: pk c'est pas scalable la coherence sur un bus? TLB: 


### Organisation multi-kernels
Le kernel est répliqué dans chaque cluster (2MB)
La MMU data est éteinte dès l'entrée dans le kernel et el registre d'extension d'adresse (??) est par défaut égale au numéro du cluster local.
Chaque kernel dispose des memes variables globales, mais chacun a ses propres valeurs
Chaque kernel peut accéder aux variables globales des auters en changeant temporairement le numéro de cluster
L'accès peut etre direct (avec verrou parfois) ou indirect avec un mécanimse client-serveur

### démarrage
preloader -> bootloader -> kernel_init -> process_init -> shell

preloader: un seul core charge le bootloader depuis la ROM et le lance. Tous les cores exécutent le bootloader.
placed at 0x0 (not oxbfc00000)


bootloader
dans le MBR (???) du disque (512 B)

kernel_init
dans tous les segments mémoire physique de tous les clusters et dans la page 0
tous les cores l'exécutent mais le core 0 de chaque cluster fait des initialisation en plus
initalisation des ressources materielles locales (peripheriques, page memoire)
initialisaiton des structures de données de l'instance du kernel: systeme de fichiers, scheduler thread idle par core(?????)
Lecture et démarrage du process_init par le core 0 du cluster 0.


arch_info: la description de l'archi est fait a l'aide d'un device-tree (???) 

Identification des cores GID & (CXY,LID):
Global IDentifier, CXY: Coordinate in the NoC (8bit), Local IDentifier (2bit)
La association GID -> (CXY,LID) est dans le fichier de description de TSAR. Ca sera la concaténation CXYLID

L'objectif est d’augmenter le parallélisme pour accélérer le boot

bootloader
`core[0][0]` le premiere core du cluster 0 démarre seul et initie le processus de boot global envoie une IPI (??) à tous les autres cores 0.
`core[cxy][0]`. les cores 0 de chaque cluster démarrent après `core[0][0]` les ait activés et envoie une IPI a tous les autres cores du cluster
`core[cxy][lid]`. les autres cores de chaque cluster démarrent après que leur CP0 (????) local les ait activés. Ils attentent la terminaison de l'initialisation locale

La synchronisation est fait:
+ IPI: Inter processor interrupt
+ Barrière de synchronisation
	+ distante: entre les cores 0 de clusters distants
	+ locale: entre les cores d'un même cluster

Accès mémoire
il faut addresses 40 bits composées d'un CXY et d'une adresse locale.

```c
// XPTR(cxy, addr) -> xptr_t (unsigned long long)
boot_remote_sw
uint32_t boot_remote_lw
boot_remote_memcpy

boot_remote_barrier
boot_remote_atomic_add

busy_acquire
busy_release

busylock_t = {ticket, current};
```

## Almos
### Conditions du passage à l'échelle:
1. Les services ne sont pas séquentialisés
2. La durée des services ne dépend pas du nb de clients
	+ les guichets doivent être aussi indépendants que possible
3. La localité doit être renforcée

### structure de processus
Où stocker les structs d'un processus ? Les structs principales d'un proc sont réparties entre un **cluster de référence** (lequel?) et des **clusters de copies** pour équilibrer la charge et limiter les accès distants.
Comment éviter les goulots d'étranglement dans leur gestion distribuée ?

> [!info] On distingue trois types de clusters par rapport un processus: le cluster dont il est née (owner), le cluster de référence, et les clusters de copies. Le cluster de référence peut changer.

On processus c'est un conteneur des ressources nécessaire pour l'exécution d'un programme.
Ressources:
+ VMM: virutal segment list, generic page table
+ FD_ARRAY: tableux de fichiers ouverts (f, s, ...)
+ console
+ TH_TBL: tableau de threads (au moins 1 le main). Indexé par LTID.
+ un état
+ un PID (sur 32 bit)  `XXYYIIII`
	+ 16 MSB: coord X, Y du cluster de naissance (X et Y sur un octed chacun)
	+ 16 LSB: LPID numero dans le cluster de naissance
+ CHILDREN_ROOT. racine de la liste des process enfants.
+ CHILDREN_LIST. liste des enfants du process.
+ LOCAL_LIST. liste des copies de processs dans le cluster (LOCAL_ROOT)
+ COPIES_LIST. liste de toutes copies du process (COPIES_ROOT)

Dans almos-mkh, un processus peut avoir plus threads dans plusieurs clusters. La structure process est distribuée et partiellement répliquée dans tous les cluster qui contiennent au moins un threads.

Le thread main peut migré mais pas les autres threads d'un processus. Le cluster de référence d'un processus est toujours le cluster qui contient le thread main. Le cluster owner sait toujours où se trouve le cluster de référence.

Les segments d'adresses contenant les piles sont différents a chaque cluster
#### Cluster manager
Dans chaque cluster, une variable globale référence toutes les ressources (`kernel/kernel_init.c`):
+ Paramètre globaux sur la plateforme
	+ Taille du NoC
+ Nombre de cores, taille du segment local
+ Tableau de struct core contenant l'ordonnanceur (un par core)
+ Liste de devices du cluster
+ Structs de la mémoire
	+ descripteur de pages physiques, allocateurs de mémoire
+ Structs pour les RPC
	+ FIFOs, threads RPC
+ Structs pour connaître l'usage des cores et de la mémoire.
#### Process manager
embarquée dans le cluster manager
+ `PREF_TLB[LPID]`. Process REFerence. C'est le tableau qui contient la référence au cluster de référence.
+ `COPIES_ROOT[LPID]`.  tableau des copies pour chaque process (liste chainée inter-clusters). COPIE_LIST
+ `local_root`. liste de processus du cluster. LOCAL_LIST



### structure des threads
Comment réduire la contention sur la table de pages ?
Comment synchroniser des threads répartis sur plusieurs clusters ?

+ TRID 32 bit (comme dans les procs)
+ TYPE. USR, DEV, RPC, IDL
+ FLAGS
+ BLOCKED modifiable par d'autres thread
+ PROCESS. process local
+ CORE. Pointer sur la structure qui décrit le core
+ SCHED. Scheduler en charge du threads.
+ CPU & FPU
+ WAIT_XLIST. chainage des threads en attente sur une ressource
+ CHILDREN_LIST. chainage des enfants du threads
+ BUSYLOCKS. locks count.

Un thread est une séquence d'instructions, appartenant à un processus, exécutées sur un core de processeur. Il y a au moins un thread par processus pour la fonction main()
Un thread est crée sur un core et il ne peut pas migrer.
La mort du thrad main() provoque l'arr^€t du processus concerné
chaque thread dispose de 2 piles privées (utilisateur et kernel)
les threads d'un processus partagent les variables globales statiques et dynamiques, le code, les fichiers ouverts, les sockets, mais pas leur pile

#### états
CREATE, READY, RUNNING, BLOCKED (en attente d'une condition. La condition est codée dans un vecteur de bits dans la struct thread), DEAD.

##### types
THREAD_USER
THREAD_RPC
THREAD_DEV
THREAD_IDLE

##### Ordonnancement
Il y a un ordonnanceur par core référence par le cluster manager. Chaque ordonnanceur gère 2 listes: threads kernel and threads users.
A chaque quantum de temps ou lorsqu'un thread se bloque sur une condition, lordonnanceur du core parcours la liste des threads a partir du dernier et choisit le premier thread READY. 

>[!warning] TODO: CHECK SCHEDULER, HOW DOES HE MAKE THE CHOICE ????

### Mémoire
comment réduire les latences des accès distants ? (archi NUMA) Placement stratégique des donnés proches des threads.
#### Virtual Memory Manager (VMM)
Gère les segments virtuels (VSL), le mapping des pages virtuelles (GPT), et les allocateurs mémoire pour un processus dans le cluster.
+ Chaque réplica de la structure process a son propre VMM
	+ Clusters de référence: versions presque complètes de la VSL et du GPT
	+ Clusters de copies: Versions partielles, limitées aux besoins des threads locaux.
+ Composants
	+ VSL. Liste des segments (virtuels) du processus pour les threads du cluster local
	+ GPT. Generic Page Table. Abstraction de la table de pages pour les threads du cluster local.
	+ Allocateurs
		+ Pour les piles des threads locaux
		+ Pour les mmap

#### VSEG
+ Droits d'accès
	+ RWX
	+ Cachable, CoW.
+ Types d'accès
	+ private. accessible uniquement par les thds du processus exécutés dans le cluster. Chaque cluster possède une copie distincte de ce segment.
	+ public. accessible par tous les threads du processus. Contient les données partagées par tous les threads du processus.
+ Types de mapping
	+ localized. toutes ses pages sont mappées dans le même cluster
	+ distributed. les pages sont distribuées sur plusieurs clusters. Toujours public, il peret de réduire la contention d'accès.
##### Types de segment virtuels
CODE. instructions
STACK. pile tilisateur par thread dans un VSEG local au cluster
DATA. variables globales du programme
ANON. mmap pour l'alloc locale
REMOTE. mmap pour l'allocation distante
FILE. Cache des fichiers.
pile kernel.

STACKs -> 1GB. Decoupé par le nb de threads dans le cluster. le nb de thread est 4. This is why we can't migrate threads in almos-mkh: on risque d'écraser la pile d'autre threads dans le cluster de destin. 
head, ANON, REMOTE, FILE
DATA, CODE
args & env
kernel -> 2MB

CODE RX private localized statique
STACK RW private localized dynamique par cluster
DATA RW public distributed static
ANON RW public localized dynamique par proc
REMOTE RW public localized dynamique par proc
FILE RW public loxalized dynamique par proc


### DQDT
almos-mkh est constitué d'autant de kernels qu'il y a de clusters.
Chaque cluster gère ses propres ressources: mémoire et processeur
Une structure publique distribuée en copie unique de l’état des ressources
Cette struct n'a pas besoin d'être à jour. Elle donne juste une indication.
Arbre quaternaire recouvrant le mesh 2D de clusters
+ chaque quadrant contient l'état des ressources disponibles: clusters présents, procs, threads, pages

#### Operations
Initialisation -> parcours récursif depuis la racine jusqu'au cluster avec initialisation lors de la remontée
Consultation -> pour trouver un cluster disposant d'une page ou d'un proc
	Parcours depuis la racine pour une répartition homogène
	Parcours depuis le cluster local pour renforcer la localité
Mise à jour
	au plus tôt
### communication inter-kernel par RPC

#### Principes
2 types -> simple, parallèle
Descripteur
index type de service requis
blocked mode RPC: true pour RPC simple et false pour RPC parallèle
args tableau de 10 uint64_t contenant les argments du service
thread pointeur local sur le thread
lid index local du coeur du client
rsp pointeur local sur un compteur de réponses attendues du coté client (supérieur à un pour RPC parallèle)

Le descripteur reste du cotê client.

#### usage
+ alloc de pages physiques
+ gestion de processus
+ gestion des threads
+ système de fichiers (mais pas tous les services)
+ gestion de la VSL
+ Mapper
+ 

## fork()
P0 crée un nouveau process nommé P1 créé dans un autre cluster (designé par la DQDT ou choisi explicitement, PID inclus)

P1 hérite d'une copie du thread qui réalise le fork() dans P0 ainsi que son contexte (CPU & FPU) pour qu'il pouisse se réveiller sur la bonne ligne du code avec le même état

P1 avec son thread a un nouvel espace d'adressage et son thread conserve la pile.
P1 n'a qu'un seul thread
P1 n'a pas une copie fidèle de la VSL et GPT P0. DATA, MMAP, REMOTE sont copiés à l'identique mais les pages référencées sont non writable et COW pour P0 et P1, on incrémente le compteur de réf dans le descriptre
STACK seule la pile du thread qui a fait le fork est conservée
code

#### exec()
détruire tous les threads de toutes les copies du processus
Libérer (délivrer) tous les segments de la VSL


---



