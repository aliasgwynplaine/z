// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="0-index.html">0-index</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1-systemes-dexploitation.html">1-systemes-dexploitation</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1a-compilation.html">1a-compilation</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1a1-nm.html">1a1-nm</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1a2-code-objet.html">1a2-code-objet</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1a3-gcc.html">1a3-gcc</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1a3a-gcc-storage-class.html">1a3a-gcc-storage-class</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1a4-make.html">1a4-make</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1c-systeme-des-fichiers.html">1c-systeme-des-fichiers</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1c1-fichier.html">1c1-fichier</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1c2-format-ELF.html">1c2-format-ELF</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1c3-format-Mach-O.html">1c3-format-Mach-O</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1c4-format-PE.html">1c4-format-PE</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1c5-format-FAT.html">1c5-format-FAT</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1d-kernel.html">1d-kernel</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1d1-kernel-structure-types.html">1d1-kernel-structure-types</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1d11-unix-kernel.html">1d11-unix-kernel</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1d11a-unix-drivers.html">1d11a-unix-drivers</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1d2-kernel-monolithique.html">1d2-kernel-monolithique</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1d3-micro-kernel.html">1d3-micro-kernel</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1d4-kernel-monolithique-modulaire.html">1d4-kernel-monolithique-modulaire</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1d5-micro-kernel-hybride.html">1d5-micro-kernel-hybride</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1d6-exokernel.html">1d6-exokernel</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1d7-unikernel.html">1d7-unikernel</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1d8-linux.html">1d8-linux</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1d8a-linux-drivers.html">1d8a-linux-drivers</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1d8a1-linux-drivers-programming.html">1d8a1-linux-drivers-programming</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1d8a2-linux-drivers-major-minor-allocation.html">1d8a2-linux-drivers-major-minor-allocation</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1d8a3-linux-file-operations.html">1d8a3-linux-file-operations</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1d8a3a-linux-drivers-char-device-programming.html">1d8a3a-linux-drivers-char-device-programming</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1d8a3a1-linux-driver-uaccess.html">1d8a3a1-linux-driver-uaccess</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1d8a3b-linux-driver-char-device-open.html">1d8a3b-linux-driver-char-device-open</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1d8a3c-linux-driver-char-device-close.html">1d8a3c-linux-driver-char-device-close</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1d8a3d-linux-driver-char-device-read.html">1d8a3d-linux-driver-char-device-read</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1d8a3e-linux-driver-char-device-write.html">1d8a3e-linux-driver-char-device-write</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1d8b-linux-char-device.html">1d8b-linux-char-device</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1d8d-linux-network-device.html">1d8d-linux-network-device</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1d8e-linux-modules.html">1d8e-linux-modules</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1d8h-linux-kernel-architeture.html">1d8h-linux-kernel-architeture</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1d8h1-pseudo-file-systems.html">1d8h1-pseudo-file-systems</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1d8h1a-ramfs.html">1d8h1a-ramfs</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1d8h1a1-procfs.html">1d8h1a1-procfs</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1d8h1a2-sysfs.html">1d8h1a2-sysfs</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1d8h1a2a-sysfs-folders.html">1d8h1a2a-sysfs-folders</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1d8h1a2b-sysfs-files.html">1d8h1a2b-sysfs-files</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1d8h1a3-configfs.html">1d8h1a3-configfs</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1d8h1a4-debugfs.html">1d8h1a4-debugfs</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1d8h2-linux-process.html">1d8h2-linux-process</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1d8h3-linux-memory-management.html">1d8h3-linux-memory-management</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1d8h3a-high-memory.html">1d8h3a-high-memory</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1d8h4-virtual-file-systems.html">1d8h4-virtual-file-systems</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1d8h4a-file-descriptors.html">1d8h4a-file-descriptors</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1d8h4b-inode-struct.html">1d8h4b-inode-struct</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1d8h4c-dentry.html">1d8h4c-dentry</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1d8h4d-page-cache.html">1d8h4d-page-cache</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1d8h4e-linux-fuse.html">1d8h4e-linux-fuse</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1d8h4f-superblock.html">1d8h4f-superblock</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1d8i-linux-kernel-development.html">1d8i-linux-kernel-development</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1d8i1-kernel-dynamic-linker.html">1d8i1-kernel-dynamic-linker</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1d9-windows-nt-kernel.html">1d9-windows-nt-kernel</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1e-gnu-linux.html">1e-gnu-linux</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1g-android.html">1g-android</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1g1-android-rooting.html">1g1-android-rooting</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1g1a-samsung-a12.html">1g1a-samsung-a12</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1g1b-odin.html">1g1b-odin</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1g2-gki.html">1g2-gki</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1g2a-binder.html">1g2a-binder</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1g2c-ashmem.html">1g2c-ashmem</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1g3-android-runtime.html">1g3-android-runtime</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1g4-zygote.html">1g4-zygote</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1k-unix.html">1k-unix</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1l-syscall.html">1l-syscall</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1m-msdos.html">1m-msdos</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1n-drivers.html">1n-drivers</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1o-userland.html">1o-userland</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1q-program-memory-layout.html">1q-program-memory-layout</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2-algorithmes.html">2-algorithmes</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2a-hash-function.html">2a-hash-function</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2a1-cryptographic-hash-function.html">2a1-cryptographic-hash-function</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2a1a-ntlm-hash-function.html">2a1a-ntlm-hash-function</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2b-distributed-algorithms.html">2b-distributed-algorithms</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2b1-distributed-apps-classification.html">2b1-distributed-apps-classification</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2b10-peer-to-peer.html">2b10-peer-to-peer</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2b11-hash-table.html">2b11-hash-table</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2b12-global-state.html">2b12-global-state</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2b12a-snapshot-algorithm.html">2b12a-snapshot-algorithm</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2b13-routing.html">2b13-routing</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2b14-notre-model.html">2b14-notre-model</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2b15-broadcast-protocols.html">2b15-broadcast-protocols</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2b15a-broadcast-groupe.html">2b15a-broadcast-groupe</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2b2-communication-channels.html">2b2-communication-channels</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2b2a-distributed-topologies.html">2b2a-distributed-topologies</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2b3-failures.html">2b3-failures</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2b3a-failure-classification.html">2b3a-failure-classification</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2b4-temporal-models.html">2b4-temporal-models</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2b4a-consensus-problem.html">2b4a-consensus-problem</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2b4a3-fault-detection.html">2b4a3-fault-detection</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2b4b-clocks.html">2b4b-clocks</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2b4b1-causal-order.html">2b4b1-causal-order</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2b4b2-lamport-timestamps.html">2b4b2-lamport-timestamps</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2b4b3-vector-clock.html">2b4b3-vector-clock</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2b4b4-matrix-clock.html">2b4b4-matrix-clock</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2b4b5-datation.html">2b4b5-datation</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2b4c-temp-model-dbc.html">2b4c-temp-model-dbc</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2b4d-temp-model-dbi.html">2b4d-temp-model-dbi</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2b4e-temp-model-dnb.html">2b4e-temp-model-dnb</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2b5-evaluation-criteria.html">2b5-evaluation-criteria</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2b6-distributed-algorithms-verification.html">2b6-distributed-algorithms-verification</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2b7-wave-algorithms.html">2b7-wave-algorithms</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2b7a-wave-algorithm-ring.html">2b7a-wave-algorithm-ring</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2b7b-wave-algorithm-tree.html">2b7b-wave-algorithm-tree</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2b8-distributed-mutex.html">2b8-distributed-mutex</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2b8a-distributed-mutex-centralized.html">2b8a-distributed-mutex-centralized</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2b8b-distributed-mutex-non-centralized.html">2b8b-distributed-mutex-non-centralized</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2b8b1-lamport-mutex.html">2b8b1-lamport-mutex</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2b8b2-ricart-agrawala-mutex.html">2b8b2-ricart-agrawala-mutex</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2b8b3-maekawa-mutex.html">2b8b3-maekawa-mutex</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2b8b4-martin-mutex.html">2b8b4-martin-mutex</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2b8b5-susuki-kasami-mutex.html">2b8b5-susuki-kasami-mutex</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2b8b6-raymond-mutex.html">2b8b6-raymond-mutex</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2b8b7-naimi-trehel-mutex.html">2b8b7-naimi-trehel-mutex</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2b9-termination-detection.html">2b9-termination-detection</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2b91-algorithme-misra.html">2b91-algorithme-misra</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2c-hpc.html">2c-hpc</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="3-securite-dinformation.html">3-securite-dinformation</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="3a-surete.html">3a-surete</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="3a1-disponibilité.html">3a1-disponibilité</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="3a2-fiabilité.html">3a2-fiabilité</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="3b-securite.html">3b-securite</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="3b1-safety.html">3b1-safety</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="3b10-security-policies.html">3b10-security-policies</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="3b2-security.html">3b2-security</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="3b3-authentification.html">3b3-authentification</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="3b3a-kerberos.html">3b3a-kerberos</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="3b3a1-kerberos-attacks.html">3b3a1-kerberos-attacks</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="3b3b-kerberos-agents.html">3b3b-kerberos-agents</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="3b3b1-kerberos-kdc.html">3b3b1-kerberos-kdc</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="3b3b2-kerberos-krbtgt.html">3b3b2-kerberos-krbtgt</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="3b3c-kerberos-keys.html">3b3c-kerberos-keys</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="3b3d-kerberos-tickets.html">3b3d-kerberos-tickets</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="3b3d1-kerberos-ticket-tgt.html">3b3d1-kerberos-ticket-tgt</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="3b3e-kerberos-workflow.html">3b3e-kerberos-workflow</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="3b3f-deguissement-mascarade.html">3b3f-deguissement-mascarade</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="3b4-confidentialite.html">3b4-confidentialite</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="3b4a-cryptographie.html">3b4a-cryptographie</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="3b4a1-symmetric-key-algorithms.html">3b4a1-symmetric-key-algorithms</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="3b4a2-asymmetric-key-algorithm.html">3b4a2-asymmetric-key-algorithm</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="3b4a2a-RSA.html">3b4a2a-RSA</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="3b5-integrite.html">3b5-integrite</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="3b5a-attacks-integrity.html">3b5a-attacks-integrity</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="3b5b-digital-signature.html">3b5b-digital-signature</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="3b6-non-repudiation.html">3b6-non-repudiation</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="3b7-auditabilite.html">3b7-auditabilite</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="3b9-anonymat.html">3b9-anonymat</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="4-cyber-security.html">4-cyber-security</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="4a-cyber-attaques.html">4a-cyber-attaques</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="4a1-vulnerabilites.html">4a1-vulnerabilites</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="4a2-side-channel-attacks.html">4a2-side-channel-attacks</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="4a3-sysbumps.html">4a3-sysbumps</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="5-computers.html">5-computers</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="5b-digital-computers.html">5b-digital-computers</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="5b1-procesor.html">5b1-procesor</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="5b1a-risc-architecture.html">5b1a-risc-architecture</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="5b1a2-arm.html">5b1a2-arm</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="5b1a2a-raspberry-pi.html">5b1a2a-raspberry-pi</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="5b1a2a1-raspberry-pi-programming.html">5b1a2a1-raspberry-pi-programming</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="5b1a2a1a-pi-i2c.html">5b1a2a1a-pi-i2c</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="5b1a2a1b-rpi-register-organisation.html">5b1a2a1b-rpi-register-organisation</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="5b2-peripherics.html">5b2-peripherics</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="5b3-cisc-architecture.html">5b3-cisc-architecture</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="5b3-smartphones.html">5b3-smartphones</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="5b4-networks.html">5b4-networks</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="5b4a-ble.html">5b4a-ble</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="5b4a-communication-protocols.html">5b4a-communication-protocols</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="5b4a3-mqtt-protocol.html">5b4a3-mqtt-protocol</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="5b4d-tcp-ip-model.html">5b4d-tcp-ip-model</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="5b5-latency-numbers.html">5b5-latency-numbers</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="5b6-cluster.html">5b6-cluster</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="5b6a-SLURM.html">5b6a-SLURM</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="5b7-multi-tsar.html">5b7-multi-tsar</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="5b7a-llsc.html">5b7a-llsc</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="5b7b-dhccp-protocol.html">5b7b-dhccp-protocol</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="5b8-atomic-operations.html">5b8-atomic-operations</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="5b8a-cas.html">5b8a-cas</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="5b8a1-aba-problem.html">5b8a1-aba-problem</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="5c-virtual-infrastructures.html">5c-virtual-infrastructures</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="5c2-container.html">5c2-container</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="5c3-virtualisation-pure.html">5c3-virtualisation-pure</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="5c4-virtualisation-hybride.html">5c4-virtualisation-hybride</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="5c5-saas.html">5c5-saas</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="5c6-paas.html">5c6-paas</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="5c7-iaas.html">5c7-iaas</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="5c8-virtual-infrastructures-glossary.html">5c8-virtual-infrastructures-glossary</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="5c9-virtual-infrastructures-history.html">5c9-virtual-infrastructures-history</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="5d-integrated-circuits.html">5d-integrated-circuits</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="5d1-ci-gpio.html">5d1-ci-gpio</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="5d2-ci-i2c.html">5d2-ci-i2c</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="5d3-rs232.html">5d3-rs232</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="5d5-ic-electronics.html">5d5-ic-electronics</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="6-mathematics.html">6-mathematics</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="nmv-21-01-2026.html">nmv-21-01-2026</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="nmv-tp-3-09122026.html">nmv-tp-3-09122026</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="orphans.html">orphans</a></span></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            // Check both with and without the '.html' suffix to be robust against pretty URLs
            if (link.href.replace(/\.html$/, '') === current_page.replace(/\.html$/, '')
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                while (parent) {
                    if (parent.tagName === 'LI' && parent.classList.contains('chapter-item')) {
                        parent.classList.add('expanded');
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                const clientRect = e.target.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                sessionStorage.setItem('sidebar-scroll-offset', clientRect.top - sidebarRect.top);
            }
        }, { passive: true });
        const sidebarScrollOffset = sessionStorage.getItem('sidebar-scroll-offset');
        sessionStorage.removeItem('sidebar-scroll-offset');
        if (sidebarScrollOffset !== null) {
            // preserve sidebar scroll position when navigating via links within sidebar
            const activeSection = this.querySelector('.active');
            if (activeSection) {
                const clientRect = activeSection.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                const currentOffset = clientRect.top - sidebarRect.top;
                this.scrollTop += currentOffset - parseFloat(sidebarScrollOffset);
            }
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('.chapter-fold-toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);


// ---------------------------------------------------------------------------
// Support for dynamically adding headers to the sidebar.

(function() {
    // This is used to detect which direction the page has scrolled since the
    // last scroll event.
    let lastKnownScrollPosition = 0;
    // This is the threshold in px from the top of the screen where it will
    // consider a header the "current" header when scrolling down.
    const defaultDownThreshold = 150;
    // Same as defaultDownThreshold, except when scrolling up.
    const defaultUpThreshold = 300;
    // The threshold is a virtual horizontal line on the screen where it
    // considers the "current" header to be above the line. The threshold is
    // modified dynamically to handle headers that are near the bottom of the
    // screen, and to slightly offset the behavior when scrolling up vs down.
    let threshold = defaultDownThreshold;
    // This is used to disable updates while scrolling. This is needed when
    // clicking the header in the sidebar, which triggers a scroll event. It
    // is somewhat finicky to detect when the scroll has finished, so this
    // uses a relatively dumb system of disabling scroll updates for a short
    // time after the click.
    let disableScroll = false;
    // Array of header elements on the page.
    let headers;
    // Array of li elements that are initially collapsed headers in the sidebar.
    // I'm not sure why eslint seems to have a false positive here.
    // eslint-disable-next-line prefer-const
    let headerToggles = [];
    // This is a debugging tool for the threshold which you can enable in the console.
    let thresholdDebug = false;

    // Updates the threshold based on the scroll position.
    function updateThreshold() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // The number of pixels below the viewport, at most documentHeight.
        // This is used to push the threshold down to the bottom of the page
        // as the user scrolls towards the bottom.
        const pixelsBelow = Math.max(0, documentHeight - (scrollTop + windowHeight));
        // The number of pixels above the viewport, at least defaultDownThreshold.
        // Similar to pixelsBelow, this is used to push the threshold back towards
        // the top when reaching the top of the page.
        const pixelsAbove = Math.max(0, defaultDownThreshold - scrollTop);
        // How much the threshold should be offset once it gets close to the
        // bottom of the page.
        const bottomAdd = Math.max(0, windowHeight - pixelsBelow - defaultDownThreshold);
        let adjustedBottomAdd = bottomAdd;

        // Adjusts bottomAdd for a small document. The calculation above
        // assumes the document is at least twice the windowheight in size. If
        // it is less than that, then bottomAdd needs to be shrunk
        // proportional to the difference in size.
        if (documentHeight < windowHeight * 2) {
            const maxPixelsBelow = documentHeight - windowHeight;
            const t = 1 - pixelsBelow / Math.max(1, maxPixelsBelow);
            const clamp = Math.max(0, Math.min(1, t));
            adjustedBottomAdd *= clamp;
        }

        let scrollingDown = true;
        if (scrollTop < lastKnownScrollPosition) {
            scrollingDown = false;
        }

        if (scrollingDown) {
            // When scrolling down, move the threshold up towards the default
            // downwards threshold position. If near the bottom of the page,
            // adjustedBottomAdd will offset the threshold towards the bottom
            // of the page.
            const amountScrolledDown = scrollTop - lastKnownScrollPosition;
            const adjustedDefault = defaultDownThreshold + adjustedBottomAdd;
            threshold = Math.max(adjustedDefault, threshold - amountScrolledDown);
        } else {
            // When scrolling up, move the threshold down towards the default
            // upwards threshold position. If near the bottom of the page,
            // quickly transition the threshold back up where it normally
            // belongs.
            const amountScrolledUp = lastKnownScrollPosition - scrollTop;
            const adjustedDefault = defaultUpThreshold - pixelsAbove
                + Math.max(0, adjustedBottomAdd - defaultDownThreshold);
            threshold = Math.min(adjustedDefault, threshold + amountScrolledUp);
        }

        if (documentHeight <= windowHeight) {
            threshold = 0;
        }

        if (thresholdDebug) {
            const id = 'mdbook-threshold-debug-data';
            let data = document.getElementById(id);
            if (data === null) {
                data = document.createElement('div');
                data.id = id;
                data.style.cssText = `
                    position: fixed;
                    top: 50px;
                    right: 10px;
                    background-color: 0xeeeeee;
                    z-index: 9999;
                    pointer-events: none;
                `;
                document.body.appendChild(data);
            }
            data.innerHTML = `
                <table>
                  <tr><td>documentHeight</td><td>${documentHeight.toFixed(1)}</td></tr>
                  <tr><td>windowHeight</td><td>${windowHeight.toFixed(1)}</td></tr>
                  <tr><td>scrollTop</td><td>${scrollTop.toFixed(1)}</td></tr>
                  <tr><td>pixelsAbove</td><td>${pixelsAbove.toFixed(1)}</td></tr>
                  <tr><td>pixelsBelow</td><td>${pixelsBelow.toFixed(1)}</td></tr>
                  <tr><td>bottomAdd</td><td>${bottomAdd.toFixed(1)}</td></tr>
                  <tr><td>adjustedBottomAdd</td><td>${adjustedBottomAdd.toFixed(1)}</td></tr>
                  <tr><td>scrollingDown</td><td>${scrollingDown}</td></tr>
                  <tr><td>threshold</td><td>${threshold.toFixed(1)}</td></tr>
                </table>
            `;
            drawDebugLine();
        }

        lastKnownScrollPosition = scrollTop;
    }

    function drawDebugLine() {
        if (!document.body) {
            return;
        }
        const id = 'mdbook-threshold-debug-line';
        const existingLine = document.getElementById(id);
        if (existingLine) {
            existingLine.remove();
        }
        const line = document.createElement('div');
        line.id = id;
        line.style.cssText = `
            position: fixed;
            top: ${threshold}px;
            left: 0;
            width: 100vw;
            height: 2px;
            background-color: red;
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(line);
    }

    function mdbookEnableThresholdDebug() {
        thresholdDebug = true;
        updateThreshold();
        drawDebugLine();
    }

    window.mdbookEnableThresholdDebug = mdbookEnableThresholdDebug;

    // Updates which headers in the sidebar should be expanded. If the current
    // header is inside a collapsed group, then it, and all its parents should
    // be expanded.
    function updateHeaderExpanded(currentA) {
        // Add expanded to all header-item li ancestors.
        let current = currentA.parentElement;
        while (current) {
            if (current.tagName === 'LI' && current.classList.contains('header-item')) {
                current.classList.add('expanded');
            }
            current = current.parentElement;
        }
    }

    // Updates which header is marked as the "current" header in the sidebar.
    // This is done with a virtual Y threshold, where headers at or below
    // that line will be considered the current one.
    function updateCurrentHeader() {
        if (!headers || !headers.length) {
            return;
        }

        // Reset the classes, which will be rebuilt below.
        const els = document.getElementsByClassName('current-header');
        for (const el of els) {
            el.classList.remove('current-header');
        }
        for (const toggle of headerToggles) {
            toggle.classList.remove('expanded');
        }

        // Find the last header that is above the threshold.
        let lastHeader = null;
        for (const header of headers) {
            const rect = header.getBoundingClientRect();
            if (rect.top <= threshold) {
                lastHeader = header;
            } else {
                break;
            }
        }
        if (lastHeader === null) {
            lastHeader = headers[0];
            const rect = lastHeader.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top >= windowHeight) {
                return;
            }
        }

        // Get the anchor in the summary.
        const href = '#' + lastHeader.id;
        const a = [...document.querySelectorAll('.header-in-summary')]
            .find(element => element.getAttribute('href') === href);
        if (!a) {
            return;
        }

        a.classList.add('current-header');

        updateHeaderExpanded(a);
    }

    // Updates which header is "current" based on the threshold line.
    function reloadCurrentHeader() {
        if (disableScroll) {
            return;
        }
        updateThreshold();
        updateCurrentHeader();
    }


    // When clicking on a header in the sidebar, this adjusts the threshold so
    // that it is located next to the header. This is so that header becomes
    // "current".
    function headerThresholdClick(event) {
        // See disableScroll description why this is done.
        disableScroll = true;
        setTimeout(() => {
            disableScroll = false;
        }, 100);
        // requestAnimationFrame is used to delay the update of the "current"
        // header until after the scroll is done, and the header is in the new
        // position.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // Closest is needed because if it has child elements like <code>.
                const a = event.target.closest('a');
                const href = a.getAttribute('href');
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    threshold = targetElement.getBoundingClientRect().bottom;
                    updateCurrentHeader();
                }
            });
        });
    }

    // Takes the nodes from the given head and copies them over to the
    // destination, along with some filtering.
    function filterHeader(source, dest) {
        const clone = source.cloneNode(true);
        clone.querySelectorAll('mark').forEach(mark => {
            mark.replaceWith(...mark.childNodes);
        });
        dest.append(...clone.childNodes);
    }

    // Scans page for headers and adds them to the sidebar.
    document.addEventListener('DOMContentLoaded', function() {
        const activeSection = document.querySelector('#mdbook-sidebar .active');
        if (activeSection === null) {
            return;
        }

        const main = document.getElementsByTagName('main')[0];
        headers = Array.from(main.querySelectorAll('h2, h3, h4, h5, h6'))
            .filter(h => h.id !== '' && h.children.length && h.children[0].tagName === 'A');

        if (headers.length === 0) {
            return;
        }

        // Build a tree of headers in the sidebar.

        const stack = [];

        const firstLevel = parseInt(headers[0].tagName.charAt(1));
        for (let i = 1; i < firstLevel; i++) {
            const ol = document.createElement('ol');
            ol.classList.add('section');
            if (stack.length > 0) {
                stack[stack.length - 1].ol.appendChild(ol);
            }
            stack.push({level: i + 1, ol: ol});
        }

        // The level where it will start folding deeply nested headers.
        const foldLevel = 3;

        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const level = parseInt(header.tagName.charAt(1));

            const currentLevel = stack[stack.length - 1].level;
            if (level > currentLevel) {
                // Begin nesting to this level.
                for (let nextLevel = currentLevel + 1; nextLevel <= level; nextLevel++) {
                    const ol = document.createElement('ol');
                    ol.classList.add('section');
                    const last = stack[stack.length - 1];
                    const lastChild = last.ol.lastChild;
                    // Handle the case where jumping more than one nesting
                    // level, which doesn't have a list item to place this new
                    // list inside of.
                    if (lastChild) {
                        lastChild.appendChild(ol);
                    } else {
                        last.ol.appendChild(ol);
                    }
                    stack.push({level: nextLevel, ol: ol});
                }
            } else if (level < currentLevel) {
                while (stack.length > 1 && stack[stack.length - 1].level > level) {
                    stack.pop();
                }
            }

            const li = document.createElement('li');
            li.classList.add('header-item');
            li.classList.add('expanded');
            if (level < foldLevel) {
                li.classList.add('expanded');
            }
            const span = document.createElement('span');
            span.classList.add('chapter-link-wrapper');
            const a = document.createElement('a');
            span.appendChild(a);
            a.href = '#' + header.id;
            a.classList.add('header-in-summary');
            filterHeader(header.children[0], a);
            a.addEventListener('click', headerThresholdClick);
            const nextHeader = headers[i + 1];
            if (nextHeader !== undefined) {
                const nextLevel = parseInt(nextHeader.tagName.charAt(1));
                if (nextLevel > level && level >= foldLevel) {
                    const toggle = document.createElement('a');
                    toggle.classList.add('chapter-fold-toggle');
                    toggle.classList.add('header-toggle');
                    toggle.addEventListener('click', () => {
                        li.classList.toggle('expanded');
                    });
                    const toggleDiv = document.createElement('div');
                    toggleDiv.textContent = '❱';
                    toggle.appendChild(toggleDiv);
                    span.appendChild(toggle);
                    headerToggles.push(li);
                }
            }
            li.appendChild(span);

            const currentParent = stack[stack.length - 1];
            currentParent.ol.appendChild(li);
        }

        const onThisPage = document.createElement('div');
        onThisPage.classList.add('on-this-page');
        onThisPage.append(stack[0].ol);
        const activeItemSpan = activeSection.parentElement;
        activeItemSpan.after(onThisPage);
    });

    document.addEventListener('DOMContentLoaded', reloadCurrentHeader);
    document.addEventListener('scroll', reloadCurrentHeader, { passive: true });
})();

