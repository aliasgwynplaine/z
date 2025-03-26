#kernel #linux #fr #todo #en #sorbonne #memory
# Memory Management
---
## Memory organisation
The smallest management unit is the page, even if the memory is byte addressable.

+ a page (virtual page) is a fixed-size block of contiguous **virtual** memory.
+ a page frame (physical page) is a fixed-size block of contiguous **physical** memory.
The size depends on the architecture.

> page frame -> cadre de page

## Kernel representation of pages
The kernel maintains a `struct page` for each **page frame** available on the system.
```c 
struct page {
	unsigned long flags;		/* Atomic flags, some possibly
					 * updated asynchronously */
	union {
		struct {	/* Page cache and anonymous pages */
			union {
				struct list_head lru;
				/* Or, for the Unevictable "LRU list" slot */
				struct {
					/* Always even, to negate PageTail */
					void *__filler;
					/* Count page's or folio's mlocks */
					unsigned int mlock_count;
				};
				/* Or, free page */
				struct list_head buddy_list;
				struct list_head pcp_list;
			};
			/* See page-flags.h for PAGE_MAPPING_FLAGS */
			struct address_space *mapping;
			union {
				pgoff_t index;		/* Our offset within mapping. */
				unsigned long share;	/* share count for fsdax */
			};
			unsigned long private;
		};
		struct {	/* page_pool used by netstack */
			unsigned long pp_magic;
			struct page_pool *pp;
			unsigned long _pp_mapping_pad;
			unsigned long dma_addr;
			atomic_long_t pp_ref_count;
		};
		struct {	/* Tail pages of compound page */
			unsigned long compound_head;	/* Bit zero is set */
		};
		struct {	/* ZONE_DEVICE pages */
			struct dev_pagemap *pgmap;
			void *zone_device_data;
		};
		struct rcu_head rcu_head;
	};

	union {		/* This union is 4 bytes in size. */
		unsigned int page_type;
		atomic_t _mapcount;
	};
	/* Usage count. *DO NOT USE DIRECTLY*. See page_ref.h */
	atomic_t _refcount;

#ifdef CONFIG_MEMCG
	unsigned long memcg_data;
#elif defined(CONFIG_SLAB_OBJ_EXT)
	unsigned long _unused_slab_obj_exts;
#endif
#if defined(WANT_PAGE_VIRTUAL)
	void *virtual;			/* Kernel virtual address (NULL if
					   not kmapped, ie. highmem) */
#endif /* WANT_PAGE_VIRTUAL */
#ifdef LAST_CPUPID_NOT_IN_PAGE_FLAGS
	int _last_cpupid;
#endif
#ifdef CONFIG_KMSAN
	struct page *kmsan_shadow;
	struct page *kmsan_origin;
#endif
} _struct_page_alignment;
```

`struct page` is around 40 bytes. So we have 40 bytes for every 4Kib. You can increase the page size in order to reduce the metadata footprint

## Zones
The kernel separates pages in multiple zones with different properties. But:
+ some hardware can only do Direct Memory Accesses (DMA) to certain addresses.
+ some architectures have a physical address space larger than their virtual address space, which means that some frames are not permanently mapped into the kernel address space.
+ `ZONE_DMA`
+ `ZONE_DMA32`
+ `ZONE_NORMAL`
+ `ZONE_HIGHMEM`

## Memory API
> internal fragmentation: when we store way less information than needed.
> external information: when we have blocks of free memory interspersed by allocated memory.


## Buddy allocator
We have a page size of 4KiB and we allocate in "buddies" of powers-of-two contiguous pages.

Limitations: we can't allocate less than one page. If you ask for 513B, you'll get 1KiB allocated (external fragmentation).

## slab layer
The slab layer create caches, each of which contains a certain type of objects, _e.g_, `struct inode`. 

Each cache is then divided into **slabs**, blocks of contiguous memory that contain a certain number of instances of the object stored by this cache.

A slab contains the actual data and maintain their proper status (used or free). When the slab is full, the slab layer will allocate a new one.

> NUMA: Non-uniform Memory Access.
### SLAB Allocator

Frame layout
### SLUB Allocator
Introduced in 2007. Locality by having per-cpu slabs, still NUMA aware.

Frame layout:

### SLOB Allocator
## Memory Pools
Used when you need a guarantee that memory will be available.

### Creation / Destruction
```c
/**
 * mempool_create - create a memory pool
 * @min_nr:    the minimum number of elements guaranteed to be
 *             allocated for this pool.
 * @alloc_fn:  user-defined element-allocation function.
 * @free_fn:   user-defined element-freeing function.
 * @pool_data: optional private data available to the user-defined functions.
 */
mempool_t *mempool_create(int min_nr, mempool_alloc_t *alloc_fn, mempool_free_t *free_fn, void *pool_data);
void mempool_destroy(mempool_t *pool)

typedef void * (mempool_alloc_t)(gfp_t gfp_mask, void *pool_data);
typedef void (mempool_free_t)(void *element, void *pool_data);
```

### Freeing memory

### Reference counter
They keep track of the number of users using an object.
Whenever the counter reaches 0, the object is not in use anymore and can be freed.

To use a reference counter, add a `struct kref` into your structure:
```c
struct kref {
	refcount_t refcount;
};

void kref_get(struct kref *kref); // increments the kref


/**
 * kref_put - decrement refcount for object.
 * @kref: object.
 * @release: pointer to the function that will clean up the object when the
 *       last reference to the object is released.
 *       This pointer is required, and it is not acceptable to pass kfree
 *       in as this function.  If the caller does pass kfree to this
 *       function, you will be publicly mocked mercilessly by the kref
 *       maintainer, and anyone else who happens to notice it.  You have
 *       been warned.
 */
int kref_put(struct kref *kref, void (*release)(struct kref *kref));
```


---



