#tag #tagg
# 1d8h2-linux-process
---

## PID
```c
struct pid
{
	refcount_t count;
	unsigned int level;
	spinlock_t lock;
	struct dentry *stashed;
	u64 ino;
	/* lists of tasks that use this pid */
	struct hlist_head tasks[PIDTYPE_MAX];
	struct hlist_head inodes;
	/* wait queue for pidfd notifications */
	wait_queue_head_t wait_pidfd;
	struct rcu_head rcu;
	struct upid numbers[];
};
```
---



