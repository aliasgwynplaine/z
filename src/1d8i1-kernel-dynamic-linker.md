#kernel #linux #fr #todo #en
# Kernel dynamic linker
---
By default, module have access to no variable or function from the kernel, even if they are not static.

export symbols **to** modules
```c
EXPORT_SYMBOL(s) // makes s visible to all loaded modules
EXPORT_SYMBOL_GPL(s) // makes s visible to all modules GPL-compatible licensed
```

You need to declare your symbol `extern` and load the module where it is defined. 

---