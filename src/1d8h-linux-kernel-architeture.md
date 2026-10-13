#kernel #linux #fr #todo #en #sorbonne 
# Linux kernel architecture [^1]
---

Linux offers six main functions
- Process management [1d8h2-linux-process](1d8h2-linux-process.md)
- Memory management [1d8h3-linux-memory-management](1d8h3-linux-memory-management.md)
- Network management
- Storage management
- System interface
- Human interface

through five abstraction layers:

1. User space interfaces
    
    System calls, procfs, sysfs, device files, …
    
2. Virtual subsystems 
    Virtual memory, virtual filesystem, network protocols, …
	+ pseudo file systems [1d8h1-pseudo-file-systems](1d8h1-pseudo-file-systems.md)
	+ virtual file systems [1d8h4-virtual-file-systems](1d8h4-virtual-file-systems.md)
3. Functional subsystems
    
    Filesystems, memory allocators, scheduler, …
    
4. Devices control
    
    Interrupts, generic drivers, block devices, …
    
5. Hardware interfaces
    
    Device drivers, architecture-specific code, …



---
[^1]: https://teaching.os.rwth-aachen.de/LKP/lecture/lkp-lecture.html#/linux-kernel-architecture
	linux kernel programming course
