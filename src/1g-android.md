#android #os #linux 
# Android OS
---
Open sourced operating system (AOSP) but however mostly distributed with GMS (Google Mobile Services, closed sourced).

> [!info] Normalmente, los smartphones usan  AOSP + GMS + vendor-custom software.

Android relies in a modified linux kernel [1d8-linux](1d8-linux.md) (GKI [1g2-gki](1g2-gki.md)) for hardware ([5b1a2-arm](5b1a2-arm.md)) interaction ([1d8h3-linux-memory-management](1d8h3-linux-memory-management.md), [1d8d-linux-network-device](1d8d-linux-network-device.md)) but abandons GNU utilities for the userland [1o-userland](1o-userland.md).

## kernel
The kernel delivered in binary form (`boot.img`) and flashed onto the device (important for [1g1-android-rooting](1g1-android-rooting.md)). Here is the [official overview](https://source.android.com/docs/core/architecture/kernel).
The modifications:
+ Binder [1g2a-binder](1g2a-binder.md). "equivalent" to d-bus for gnu/linux [1e-gnu-linux](1e-gnu-linux.md).
+ Ashmem
+ Wakelocks
## userland
+ bionic libc
+ custom init
+ SurfaceFlinger
+ HAL to operate proprietary hardware-specific drivers
+ ART [1g3-android-runtime](1g3-android-runtime.md) 
+ zygote [1g4-zygote](1g4-zygote.md).
Applications in android come as APK containers running managed code on top of the ART

[1g1-android-rooting](1g1-android-rooting.md)






---