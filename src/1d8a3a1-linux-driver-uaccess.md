#kernel #programming #fr #drivers #fileops #char 
# linux - uaccess fonctions
---
This functions are in `linux/uaccess.h`

```c
unsigned long copy_to_user(void __user *to, const void *from, 
						   unsigned long count);
unsigned long copy_from_user(void *to, const void __user *from, 
						     unsigned long count);
```

---

