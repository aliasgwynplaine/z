#c #gcc #gnu #linux #ordinateurs #en #keywords
# gcc storage class



### `static`[^1]
1. variable: stores the variable _statically_ allocated in memory instead of automatically. As a consequence, the variable will preserve its value between calls. See `strtok` implementation. See storage class. [^2]
2. function: The function will be visible only for functions from the same file. You can find lots of this folks at linux module programming.
3. arrays: set the minimum size of an array
    ```c
    void setpasswd(char password[static 16]);
    ```
---
[^1]: https://stackoverflow.com/questions/572547/what-does-static-mean-in-c
[^2]: https://web.archive.org/web/20080624102132/http://www.space.unibe.ch/comp_doc/c_manual/C/CONCEPT/storage_class.html
