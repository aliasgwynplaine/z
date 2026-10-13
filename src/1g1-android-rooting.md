#android #en #rooting #root 
# Android Rooting
---
Android rooting is the process of gaining root access to an Android device's operating system.

Rooting android devices has changed over the time. At the beginning, rooting an android device was done through some exploit (android 1 - 8). Later, some methods used a boot-patching approach to hijack the boot process. More modern approaches (android >=12) use the GKI [1g2-gki](1g2-gki.md) to load a custom LKM [1d8e-linux-modules](1d8e-linux-modules.md).

Next you have some popular methods to root.
## how ?
### patching the `boot.img`
You will need to unlock the bootloader. You may want to make a backup.

The process is typically:
0. get an image of the stock BOOT partition of the device (`boot.img`). You can get it manually or downloading the official firmware. You may get some use of a custom recovery [^1][^2].
1. patch the `boot.img`. Using [Magisk](https://github.com/topjohnwu/magisk), for example.
2. flash the boot partition with the patched boot image.
3. you may need to factory reset the phone.

How to "flash" your device will depend on your device and the PC your using to handle the job: ou can do it using fastboot for some devices, odin [1g1b-odin](1g1b-odin.md) or heimdall for samsung devices.
### kernelSU[^3]
kernel-based rooting It uses GKI by loading a custom LKM into the kernel or flashing a pre-patched generic `boot.img`. It bypasses user-space SELinux restrictions entirely. App profiles and root access are managed via kernel hooks, making it nearly invisible to user-space hardware attestation.
### apatch [^4]
kernel-based rooting. It patches the Android kernel binary directly (kallsyms) to provide kernel function inline-hooking and syscall-table-hooking (Kernel Patch Module - KPM).
## devices
[1g1a-samsung-a12](1g1a-samsung-a12.md)

---
[^1]: https://orangefox.tech/

[^2]: https://pitchblackrecovery.com/

[^3]: https://kernelsu.org/

[^4]: https://apatch.dev/
