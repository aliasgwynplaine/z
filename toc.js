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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="0-index.html">0-index</a></li><li class="chapter-item expanded affix "><a href="1-systemes-dexploitation.html">1-systemes-dexploitation</a></li><li class="chapter-item expanded affix "><a href="1a-compilation.html">1a-compilation</a></li><li class="chapter-item expanded affix "><a href="1a1-nm.html">1a1-nm</a></li><li class="chapter-item expanded affix "><a href="1a2-code-objet.html">1a2-code-objet</a></li><li class="chapter-item expanded affix "><a href="1a3-gcc.html">1a3-gcc</a></li><li class="chapter-item expanded affix "><a href="1a3a-gcc-storage-class.html">1a3a-gcc-storage-class</a></li><li class="chapter-item expanded affix "><a href="1a4-make.html">1a4-make</a></li><li class="chapter-item expanded affix "><a href="1c-systeme-des-fichiers.html">1c-systeme-des-fichiers</a></li><li class="chapter-item expanded affix "><a href="1c1-fichier.html">1c1-fichier</a></li><li class="chapter-item expanded affix "><a href="1c2-format-ELF.html">1c2-format-ELF</a></li><li class="chapter-item expanded affix "><a href="1c3-format-Mach-O.html">1c3-format-Mach-O</a></li><li class="chapter-item expanded affix "><a href="1c4-format-PE.html">1c4-format-PE</a></li><li class="chapter-item expanded affix "><a href="1c5-format-FAT.html">1c5-format-FAT</a></li><li class="chapter-item expanded affix "><a href="1d-kernel.html">1d-kernel</a></li><li class="chapter-item expanded affix "><a href="1d1-kernel-structure-types.html">1d1-kernel-structure-types</a></li><li class="chapter-item expanded affix "><a href="1d11-unix-kernel.html">1d11-unix-kernel</a></li><li class="chapter-item expanded affix "><a href="1d11a-unix-drivers.html">1d11a-unix-drivers</a></li><li class="chapter-item expanded affix "><a href="1d2-kernel-monolithique.html">1d2-kernel-monolithique</a></li><li class="chapter-item expanded affix "><a href="1d3-micro-kernel.html">1d3-micro-kernel</a></li><li class="chapter-item expanded affix "><a href="1d4-kernel-monolithique-modulaire.html">1d4-kernel-monolithique-modulaire</a></li><li class="chapter-item expanded affix "><a href="1d5-micro-kernel-hybride.html">1d5-micro-kernel-hybride</a></li><li class="chapter-item expanded affix "><a href="1d6-exokernel.html">1d6-exokernel</a></li><li class="chapter-item expanded affix "><a href="1d7-unikernel.html">1d7-unikernel</a></li><li class="chapter-item expanded affix "><a href="1d8-linux.html">1d8-linux</a></li><li class="chapter-item expanded affix "><a href="1d8a-linux-drivers.html">1d8a-linux-drivers</a></li><li class="chapter-item expanded affix "><a href="1d8a1-linux-drivers-programming.html">1d8a1-linux-drivers-programming</a></li><li class="chapter-item expanded affix "><a href="1d8a2-linux-drivers-major-minor-allocation.html">1d8a2-linux-drivers-major-minor-allocation</a></li><li class="chapter-item expanded affix "><a href="1d8a3-linux-drivers-file-operations.html">1d8a3-linux-drivers-file-operations</a></li><li class="chapter-item expanded affix "><a href="1d8a3a-linux-drivers-char-device-programming.html">1d8a3a-linux-drivers-char-device-programming</a></li><li class="chapter-item expanded affix "><a href="1d8a3a1-linux-driver-uaccess.html">1d8a3a1-linux-driver-uaccess</a></li><li class="chapter-item expanded affix "><a href="1d8a3b-linux-driver-char-device-open.html">1d8a3b-linux-driver-char-device-open</a></li><li class="chapter-item expanded affix "><a href="1d8a3c-linux-driver-char-device-close.html">1d8a3c-linux-driver-char-device-close</a></li><li class="chapter-item expanded affix "><a href="1d8a3d-linux-driver-char-device-read.html">1d8a3d-linux-driver-char-device-read</a></li><li class="chapter-item expanded affix "><a href="1d8a3e-linux-driver-char-device-write.html">1d8a3e-linux-driver-char-device-write</a></li><li class="chapter-item expanded affix "><a href="1d8b-linux-char-device.html">1d8b-linux-char-device</a></li><li class="chapter-item expanded affix "><a href="1d8e-linux-modules.html">1d8e-linux-modules</a></li><li class="chapter-item expanded affix "><a href="1d8f-linux-file-struct.html">1d8f-linux-file-struct</a></li><li class="chapter-item expanded affix "><a href="1d8h-linux-kernel-architeture.html">1d8h-linux-kernel-architeture</a></li><li class="chapter-item expanded affix "><a href="1d8i-linux-kernel-development.html">1d8i-linux-kernel-development</a></li><li class="chapter-item expanded affix "><a href="1d8i1-kernel-dynamic-linker.html">1d8i1-kernel-dynamic-linker</a></li><li class="chapter-item expanded affix "><a href="1d9-windows-nt-kernel.html">1d9-windows-nt-kernel</a></li><li class="chapter-item expanded affix "><a href="1k-unix.html">1k-unix</a></li><li class="chapter-item expanded affix "><a href="1l-syscall.html">1l-syscall</a></li><li class="chapter-item expanded affix "><a href="1m-msdos.html">1m-msdos</a></li><li class="chapter-item expanded affix "><a href="1n-drivers.html">1n-drivers</a></li><li class="chapter-item expanded affix "><a href="2-algorithmes.html">2-algorithmes</a></li><li class="chapter-item expanded affix "><a href="2a-hash-function.html">2a-hash-function</a></li><li class="chapter-item expanded affix "><a href="2a1-cryptographic-hash-function.html">2a1-cryptographic-hash-function</a></li><li class="chapter-item expanded affix "><a href="2a1a-ntlm-hash-function.html">2a1a-ntlm-hash-function</a></li><li class="chapter-item expanded affix "><a href="3-securite-dinformation.html">3-securite-dinformation</a></li><li class="chapter-item expanded affix "><a href="3a-surete.html">3a-surete</a></li><li class="chapter-item expanded affix "><a href="3a1-disponibilité.html">3a1-disponibilité</a></li><li class="chapter-item expanded affix "><a href="3a2-fiabilité.html">3a2-fiabilité</a></li><li class="chapter-item expanded affix "><a href="3b-securite.html">3b-securite</a></li><li class="chapter-item expanded affix "><a href="3b1-safety.html">3b1-safety</a></li><li class="chapter-item expanded affix "><a href="3b2-security.html">3b2-security</a></li><li class="chapter-item expanded affix "><a href="3b3-authentification.html">3b3-authentification</a></li><li class="chapter-item expanded affix "><a href="3b3a-kerberos.html">3b3a-kerberos</a></li><li class="chapter-item expanded affix "><a href="3b3a1-kerberos-attacks.html">3b3a1-kerberos-attacks</a></li><li class="chapter-item expanded affix "><a href="3b3b-kerberos-agents.html">3b3b-kerberos-agents</a></li><li class="chapter-item expanded affix "><a href="3b3b1-kerberos-kdc.html">3b3b1-kerberos-kdc</a></li><li class="chapter-item expanded affix "><a href="3b3b2-kerberos-krbtgt.html">3b3b2-kerberos-krbtgt</a></li><li class="chapter-item expanded affix "><a href="3b3c-kerberos-keys.html">3b3c-kerberos-keys</a></li><li class="chapter-item expanded affix "><a href="3b3d-kerberos-tickets.html">3b3d-kerberos-tickets</a></li><li class="chapter-item expanded affix "><a href="3b3d1-kerberos-ticket-tgt.html">3b3d1-kerberos-ticket-tgt</a></li><li class="chapter-item expanded affix "><a href="3b3e-kerberos-workflow.html">3b3e-kerberos-workflow</a></li><li class="chapter-item expanded affix "><a href="3b3f-deguissement-mascarade.html">3b3f-deguissement-mascarade</a></li><li class="chapter-item expanded affix "><a href="3b4-confidentialite.html">3b4-confidentialite</a></li><li class="chapter-item expanded affix "><a href="3b4a-cryptographie.html">3b4a-cryptographie</a></li><li class="chapter-item expanded affix "><a href="3b5-integrite.html">3b5-integrite</a></li><li class="chapter-item expanded affix "><a href="3b6-non-repudiation.html">3b6-non-repudiation</a></li><li class="chapter-item expanded affix "><a href="3b7-auditabilite.html">3b7-auditabilite</a></li><li class="chapter-item expanded affix "><a href="3b9-anonymat.html">3b9-anonymat</a></li><li class="chapter-item expanded affix "><a href="4-cyber-security.html">4-cyber-security</a></li><li class="chapter-item expanded affix "><a href="4a-cyber-attaques.html">4a-cyber-attaques</a></li><li class="chapter-item expanded affix "><a href="4a1-vulnerabilites.html">4a1-vulnerabilites</a></li><li class="chapter-item expanded affix "><a href="4a2-side-channel-attacks.html">4a2-side-channel-attacks</a></li><li class="chapter-item expanded affix "><a href="4a3-sysbumps.html">4a3-sysbumps</a></li><li class="chapter-item expanded affix "><a href="5-computers.html">5-computers</a></li><li class="chapter-item expanded affix "><a href="5b-digital-computers.html">5b-digital-computers</a></li><li class="chapter-item expanded affix "><a href="5b1-procesor.html">5b1-procesor</a></li><li class="chapter-item expanded affix "><a href="5c-virtual-infrastructures.html">5c-virtual-infrastructures</a></li><li class="chapter-item expanded affix "><a href="5c2-container.html">5c2-container</a></li><li class="chapter-item expanded affix "><a href="5c3-virtualisation-pure.html">5c3-virtualisation-pure</a></li><li class="chapter-item expanded affix "><a href="5c4-virtualisation-hybride.html">5c4-virtualisation-hybride</a></li><li class="chapter-item expanded affix "><a href="5c5-saas.html">5c5-saas</a></li><li class="chapter-item expanded affix "><a href="5c6-paas.html">5c6-paas</a></li><li class="chapter-item expanded affix "><a href="5c7-iaas.html">5c7-iaas</a></li><li class="chapter-item expanded affix "><a href="5c8-virtual-infrastructures-glossary.html">5c8-virtual-infrastructures-glossary</a></li><li class="chapter-item expanded affix "><a href="5c9-virtual-infrastructures-history.html">5c9-virtual-infrastructures-history</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
