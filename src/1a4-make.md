#compilation #programmes #ordinateurs #en #make
# make
---
The  make  utility  will determine automatically which pieces of a large program need to be recompiled, and issue the commands to recompile them. 

`make` looks for instructions in a file named `Makefile`.
## obj-m
The `obj-m`-thing[^1]
```make
obj-m += nom.o
```

When the module is built from multiple sources, an additional line is needed listing the files:

```make
<module_name>-y := <src1>.o <src2>.o ...
```

For detailed info about this you can refer [here](https://www.kernel.org/doc/Documentation/kbuild/modules.txt)


---
[^1]: [[https://stackoverflow.com/questions/57839941/what-is-the-meaning-of-obj-m-in-linux-device-driver-makefile]]

