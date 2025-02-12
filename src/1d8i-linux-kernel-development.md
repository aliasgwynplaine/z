#kernel #linux #fr #todo #en
# Linux kernel development
---

Is important to keep in mind the directory tree


the kernel dynamic linker [[1d8i1-kernel-dynamic-linker]]

## Annotations

The `__init` and `__exit` annotations are used to help the compiler optimise the memory usage.  
When some module is statically built-in the kernel binary, functions tagged with these annotations are placed in specific segments:

- `.init.text` that is freed after the boot of the kernel
- `.exit.text` that is never loaded in memory

