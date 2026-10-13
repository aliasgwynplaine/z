#computers #atomic
# Compare-And-Swap
---
This atomic instruction takes three arguments: the register, the new value to store and the presumably old value at the register.
```
bool cas(reg, new, old) {
	if *reg != old {
		return false
	}
	
	*reg = new
	
	return true
}
```
Some implementations would return the actual value of `reg` and not a boolean.

This operation is sensible to the ABA problem [5b8a1-aba-problem](5b8a1-aba-problem.md).


---



