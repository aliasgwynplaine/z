#kernel #linux #fr #todo #en #sorbonne #vfs #filesystem #filedescriptor
# File descriptors
---

This is the file structure in the kernel:
```c
struct file {
	union {
		struct llist_node	f_llist;
		struct rcu_head 	f_rcuhead;
		unsigned int 		f_iocb_flags;
	};
	spinlock_t		f_lock;
	fmode_t			f_mode;
	atomic_long_t		f_count;
	struct mutex		f_pos_lock;
	loff_t			f_pos;
	unsigned int		f_flags;
	struct fown_struct	f_owner;
	const struct cred	*f_cred;
	struct file_ra_state	f_ra;
	struct path		f_path;
	struct inode		*f_inode;	
	const struct file_operations	*f_op;

	u64			f_version;
#ifdef CONFIG_SECURITY
	void			*f_security;
#endif
	/* needed for tty driver, and maybe others */
	void			*private_data;

#ifdef CONFIG_EPOLL
	struct hlist_head	*f_ep;
#endif /* #ifdef CONFIG_EPOLL */
	struct address_space	*f_mapping;
	errseq_t		f_wb_err;
	errseq_t		f_sb_err; /* for syncfs */
};

struct path {
	struct vfsmount *mnt;
	struct dentry *dentry;
};

```
The important attributes
+ `f_count`
+ `f_flags`
+ `f_inode` [1d8h4b-inode-struct](1d8h4b-inode-struct.md)
+ `f_ops` [1d8a3-linux-file-operations](1d8a3-linux-file-operations.md)
+ `f_mapping`
+ `f_path` -> `dentry`  [1d8h4c-dentry](1d8h4c-dentry.md)



---



