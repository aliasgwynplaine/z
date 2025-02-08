#kernel #programming #fr #drivers #fileops
# Linux drivers programming
---
La structure `file_operations` est défini dans `linux/fs.h` est toutes ses champs sont des pointeurs aux fonctions. Chaque fichier associé est associé a une structure `file_operations` [1d8f-linux-file-struct](1d8f-linux-file-struct.md).

```c
 struct file_operations {
   struct module *owner;
   loff_t (*llseek) (struct file *, loff_t, int);
   ssize_t (*read) (struct file *, char *, size_t, loff_t *);
   ssize_t (*write) (struct file *, const char *, size_t, loff_t *);
   int (*readdir) (struct file *, void *, filldir_t);
   unsigned int (*poll) (struct file *, struct poll_table_struct *);
   int (*ioctl) (struct inode *, struct file *, unsigned int, unsigned long);
   int (*mmap) (struct file *, struct vm_area_struct *);
   int (*open) (struct inode *, struct file *);
   int (*flush) (struct file *);
   int (*release) (struct inode *, struct file *);
   int (*fsync) (struct file *, struct dentry *, int datasync);
   int (*fasync) (int, struct file *, int);
   int (*lock) (struct file *, int, struct file_lock *);
   ssize_t (*readv) (struct file *, const struct iovec *, unsigned long,
					 loff_t *);
   ssize_t (*writev) (struct file *, const struct iovec *, unsigned long,
		              loff_t *);
};
```

char devices programming [1d8a3a-linux-drivers-char-device-programming](1d8a3a-linux-drivers-char-device-programming.md)

---
