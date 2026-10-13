#computers #os #process
# Program memory layout
---
An object file is divided into **sections** containing different types of data[^2].

| section             | description                                                                                                                                                         |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `.text`             | where code live, as said above. objdump -drS .process.o will show you th                                                                                            |
| `.data`             | initialized data: global tables, variables, etc. objdump -s -j .data .process.o will hexdump                                                                        |
| `.bss`            (block started by symbol (or Better Save Space) [^4]). uninitialized arrays and variables. Filled with zeros, or only the length of the section in some platforms. and  |
| `.rodata`           | contains read-only initialized data, is packed into the same segment that contains the `.text` sec                                                                  |
| `.comment` `.note`  | just comments put there by the compiler/linker too                                                                                                                  |
| `.stab`  `.stabstr` | debugging symbols & similar infor                                                                                                                                   |
| `.init`             | code running _before_                                                                                                                                               |
| `.fini`             | Code run _after_                                                                                                                                                    |
| `.plt`              | indirect calls to dynamically linked                                                                                                                                |
| `.symtab`           | s                                                                                                                                                                   |

Yo can use `readelf` or `objdump` to inspect binaries.

Some info was also taken from osdev wiki [^1].

All this section story is strongly related to how the linker and the compiler [1a-compilation](1a-compilation.md) work[^3][^2]. 

---

[^1]: https://wiki.osdev.org/ELF

[^2]: https://gcc.gnu.org/onlinedocs/gcc-4.0.4/gccint/Sections.html

[^3]: https://lwn.net/Articles/531148
