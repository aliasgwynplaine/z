Successor de `procfs`, mounted in `/sys`. Meant to store information about subsystems, hardware devices, drivers...
This should be the default choice

Pros:
+ Hierarchical topology
+ Provides a set of mechanisms to free memory and recursively destroy directories
Cons:
+ complex
+ each file represents one single piece of data
+ a piece of data cannot be larger than one page (`PAGE_SIZE`)
## directories [[1d8h1a2a-sysfs-folders]]

## files [[1d8h1a2b-sysfs-files]]

> diff: snprintf sprintf
