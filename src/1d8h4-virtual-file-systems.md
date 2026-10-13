#kernel #linux #fr #todo #en #sorbonne #vfs #filesystem 
# Virtual file system
---
The virtual file system offers an API to interpret the files from any file system in the storage device.
## The virtual file system abstraction
+ syscalls
+ file systems
+ page cache [1d8h4d-page-cache](1d8h4d-page-cache.md)
+ block layer

sys_open() -> vfs_open() -> the right open() -> readpage() -> block reading

+ Objects. 
	+ **file descriptor**. represents an instance of an **open file**. [1d8h4a-file-descriptors](1d8h4a-file-descriptors.md)
	+ **inode**. represents a file on the storage device.
	+ **directory entry**. caches the *resolution* of a file path to its corresponding inode.
	+ **superblock**. represents an instance of a mounted file system [1d8h4f-superblock](1d8h4f-superblock.md)
+ Interfaces.
	+ **file operations** operate on file content [1d8a3-linux-file-operations](1d8a3-linux-file-operations.md) [1d8h1a2b-sysfs-files](1d8h1a2b-sysfs-files.md)
	+ **inode operations** operate on file metadata (create, mkdir, unlink, ... )
	+ **superblock operations** operate on a partition (mount, sync, unmount, ... )


File System in User spacE [1d8h4e-linux-fuse](1d8h4e-linux-fuse.md)

---



