#kernel #programming #fr #drivers #fileops
# Linux drivers programming
---
La structure `file_operations` est défini dans `linux/fs.h` est il a des champs qui sont des pointeurs aux fonctions. Chaque fichier char associé à un driver est associé a une structure `file_operations` [1d8f-linux-file-struct](1d8f-linux-file-struct.md).

```c
 struct file_operations {
	struct module *owner;
	loff_t (*llseek) (struct file *, loff_t, int);
	ssize_t (*read) (struct file *, char __user *, size_t, loff_t *);
	ssize_t (*write) (struct file *, const char __user *, size_t, loff_t *);
	ssize_t (*read_iter) (struct kiocb *, struct iov_iter *);
	ssize_t (*write_iter) (struct kiocb *, struct iov_iter *);
	long (*unlocked_ioctl) (struct file *, unsigned int, unsigned long);
	long (*compat_ioctl) (struct file *, unsigned int, unsigned long);
	int (*open) (struct inode *, struct file *);
	int (*release) (struct inode *, struct file *);
	/* ... */
}
```
	
