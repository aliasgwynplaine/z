#computers #atomic
# Load Linked / Store Conditional
---
We talk about 2 operations: Load-Linked, and Store-Conditional.

When a processor executes a `LL(src, dst)` for a register, it loads the value `*src` in the `dst` register but it also stores (someplace) a key `K` for the reservation. Whenever another processor performs a `LL(src, odst)`, it receives the same reservation key `K`.

When a processor executes `SC(src, val, K)` to store `val` at `src`, the processor will compare the `K` it has and perform the store only if `K` has not changed from the last time he get it. If the store succeeds, then the reservation key changes.

In this way, only the first store is performed.

Note this is stronger than CAS [5b8a-cas](5b8a-cas.md) because is will not fall into the ABA problem [5b8a1-aba-problem](5b8a1-aba-problem.md).

---



