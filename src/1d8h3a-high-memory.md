#kernel #linux #os #sorbonne 
# High Memory
---
High memory (highmem) is used when the size of physical memory approaches or exceeds the maximum size of virtual memory. This means the kernel needs to start using temporary mappings of the pieces of physical memory that it wants to access. The part of (physical) memory not covered by a permanent mapping is what we refer to as ‘highmem’. There are various architecture dependent constraints on where exactly that border lies.[^1]

The traditional split for architectures using this approach is 3:1, 3GiB for userspace and the top 1GiB for kernel space:
```
+--------+ 0xffffffff
| Kernel | <- highmem
+--------+ 0xc0000000
|        |
| User   |
|        |
+--------+ 0x00000000
```
This concept was more useful before the arise of the 64-bit architecture since we only had 32 bits to map all the virtual memory.

---



[^1]: https://www.kernel.org/doc/html/v6.2/mm/highmem.html
