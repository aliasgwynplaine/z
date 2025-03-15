#kernel #proc #filesystem #ramfs 
# procfs
---
mounted in `/proc`. Meant to be used for export information about processes but used for exporting kernel data.

+ pros: well documented
+ cons: no real structure enforced
There are two APIs:
+ proc_fs API
	+ legacy
	+ files are limited to one page (`PAGE_SIZE`)
+ seq_file API
	+ allows larger data to be exported

---



