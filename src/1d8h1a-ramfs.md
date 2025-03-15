#pseudofilesystem #linux #kernel #en #sorbonne
in-memory file system
---
`ramfs` (ram based file system) is a file system not backed by  a storage device: stored completely in memory or computed when accessed.

Examples: procfs, sysfs, configfs, debugfs, devfs, tmpfs...

Proc: user apps can access the files of the ramfs with the posix API (read, write, seek,...)

Con: These mechanisms are synchronous from user to kernel, but asynchronous in the other direction, _i.e._, user space applications cannot be notified when the value represented by a file changes in memory.


## ramfs representing the kernel data or conf
proc file system [[1d8h1a1-procfs]]

sys file system [[1d8h1a2-sysfs]]

config file system [[1d8h1a3-configfs]]

debug file system [[1d8h1a4-debugfs]]

#todo: ioctl ? read ? fileoperations ?

---



