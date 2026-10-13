#computers #multithreading #atomic
# ABA problem
---
In multi-threaded computing, consider the next scenario where P1 and P2 share a register:
1. Process P1 reads value A from some shared register,
2. P2 writes value B to the shared register
3. P2 writes value A to the shared register
4. P1 reads value A from the shared register,
5. P1 thinks that the shared register value has not changed and continues his execution.

This "hidden" modification of the shared register can affect the process correct behaviour. 

We can use a "tag" or a "stamp" to check if the register has been modified by somebody.




---



