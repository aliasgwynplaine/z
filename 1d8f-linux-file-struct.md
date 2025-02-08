#kernel #linux #fr #todo #fileops #file
# structure file
---
C'est la structure qui gère les fichiers ouverts dans le noyau linux.

```c
struct file {
	struct list_head       f_list;        /* list of file objects */
	struct dentry          *f_dentry;     /* associated dentry object */
	struct vfsmount        *f_vfsmnt;     /* associated mounted fs */
	struct file_operations *f_op;         /* file operations table */
	atomic_t               f_count;       /* file object's usage count */
	unsigned int           f_flags;       /* flags specified on open */
	mode_t                 f_mode;        /* file access mode */
	loff_t                 f_pos;         /* file offset (file pointer) */
	struct fown_struct     f_owner;       /* owner data for signals */
	unsigned int           f_uid;         /* user's UID */
	unsigned int           f_gid;         /* user's GID */
	int                    f_error;       /* error code */
	struct file_ra_state   f_ra;          /* read-ahead state */
	unsigned long          f_version;     /* version number */
	void                   *f_security;   /* security module */
	void                   *private_data; /* tty driver hook */
	struct list_head       f_ep_links;    /* list of eventpoll links */
	spinlock_t             f_ep_lock;     /* eventpoll lock */
	struct address_space   *f_mapping;    /* page cache mapping */
};
````

---

