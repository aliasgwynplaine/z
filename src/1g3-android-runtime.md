#android #art #os 
# Android RunTime
ART translates DEX (Dalvik EXecutable) bytecode into native machine code (Ahead-of-Time). While the app runs, it also dynamically profiles and recompiles hot code paths (Just-In-Time) to optimise performance.

To launch apps instantly, Android uses a daemon called Zygote. Zygote is a pre-warmed ART process containing all the core framework libraries. When you open an app, Android simply fork()s the Zygote process, loading your specific app's code into the new, preinitialized VM.

Every single app is assigned to it's own unique Linux User ID (Leveraging SELinux for security). Whenever apps needs to use an IPC, they call it via Binder [1g2a-binder](1g2a-binder.md).