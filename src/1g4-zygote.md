#android #os #linux #mobile
# zygote
---
Zygote is a pre-warmed ART process containing all the core framework libraries. When you open an app, Android simply calls `fork()` in the Zygote process, loading your specific app's code into the new, pre-initialized VM.

To hide root from banking apps, Magisk uses Zygisk, which injects code directly into the Android Zygote process.