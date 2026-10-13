#android #binder #gki 

# Binder
---
highly efficient, object-oriented RPC between isolated processes. Resides within Kernel Space.

Invoked using a ioctl [1d8a3-linux-file-operations](1d8a3-linux-file-operations.md) to `/dev/binder` (old versions) or `/dev/binderfs/binder`[^1]. The kernel will then will transfer data between the vmem of two processes (zero-copied if possible) and wakes up the process receiving the message. After completion, the receiver will respond via binder.

>[!warning] in total, a binder RPC will get at least 4 context-switch. Not to mention the TLB flushes...

```c
static long binder_ioctl(struct file *filp, unsigned int cmd, unsigned long arg)
```

It allows a process to act like it is calling a normal Java/C++ object method natively. Includes built-in reference counting and "link-to-death" notifications: if Process A crashes, the kernel immediately notifies Process B.

---
[^1]: https://docs.kernel.org/admin-guide/binderfs.html
[^2]: https://www.bdosecurity.de/en-gb/insights/security-column/binder-framework-in-android-part-3

