#pseudofilesystem #linux #kernel #en #sorbonne
in-memory file system
---
`ramfs` (ram based file system) is a file system not backed by  a storage device: stored completely in memory or computed when accessed.

Examples: procfs, sysfs, configfs, debugfs, devfs, tmpfs...

Proc: user apps can access the files of the ramfs with the posix API (read, write, seek,...)

Con: These mechanisms are synchronous from user to kernel, but asynchronous in the other direction, _i.e._, user space applications cannot be notified when the value represented by a file changes in memory.


## ramfs representing the kernel data or conf
proc file system [1d8h1a1-procfs](1d8h1a1-procfs.md)

sys file system [1d8h1a2-sysfs](1d8h1a2-sysfs.md)

config file system [1d8h1a3-configfs](1d8h1a3-configfs.md)

debug file system [1d8h1a4-debugfs](1d8h1a4-debugfs.md)

#todo: ioctl ? read ? fileoperations ?

---



