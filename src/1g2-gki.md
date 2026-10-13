#android #kernel #gki

# Generic Kernel Image
---
It's an initiative that unifies the core Android kernel and separates hardware-specific code into loadable vendor modules[^1]. It was a response to the increasing number diverging kernels by specific SoC verdors.

From Android 12, devices shipping linux >=5.10 must ship with the [GKI kernel](https://source.android.com/docs/core/architecture/kernel/gki-release-builds).

## important modifications
+ [1g2a-binder](1g2a-binder.md)
+ [1g2c-ashmem](1g2c-ashmem.md)
+ [1g2b-wakelocks](1g2b-wakelocks.md)
+ Kernel Module Interface for vendor modules[^2].


---
[^1]: https://source.android.com/docs/core/architecture/kernel/generic-kernel-image

[^2]: https://source.android.com/docs/core/architecture/kernel/android-common
