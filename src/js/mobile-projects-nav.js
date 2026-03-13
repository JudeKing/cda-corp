document.addEventListener("DOMContentLoaded", function () {
    const buttonContainers = document.querySelectorAll(".projects__header-banner .wp-block-buttons");

    if (!buttonContainers.length) return;

    buttonContainers.forEach(container => {
        const links = container.querySelectorAll(".btn-with-arrow a");
        if (!links.length) return;

        const mobileNav = document.createElement("div");
        mobileNav.className = "mobile-service-nav";

        const toggleBtn = document.createElement("button");
        toggleBtn.className = "mobile-service-nav__toggle";
        toggleBtn.type = "button";
        toggleBtn.setAttribute("aria-expanded", "false");
        toggleBtn.innerHTML = `
            <span>Browse Categories</span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 9l6 6 6-6"/>
            </svg>
        `;

        const panel = document.createElement("div");
        panel.className = "mobile-service-nav__panel";

        links.forEach(link => {
            const item = document.createElement("a");
            item.className = "mobile-service-nav__link";
            console.log(link)
            item.href = link.href;

            const linkText = link.childNodes[0]?.textContent?.trim() || link.textContent.trim();
            item.textContent = linkText;

            panel.appendChild(item);
        });

        toggleBtn.addEventListener("click", function (e) {
            e.stopPropagation();

            document.querySelectorAll(".mobile-service-nav.is-open").forEach(openNav => {
                if (openNav !== mobileNav) {
                    openNav.classList.remove("is-open");
                    const openBtn = openNav.querySelector(".mobile-service-nav__toggle");
                    if (openBtn) openBtn.setAttribute("aria-expanded", "false");
                }
            });

            const isOpen = mobileNav.classList.toggle("is-open");
            toggleBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
        });

        mobileNav.appendChild(toggleBtn);
        mobileNav.appendChild(panel);

        container.parentNode.insertBefore(mobileNav, container);
    });

    document.addEventListener("click", function (e) {
        document.querySelectorAll(".mobile-service-nav.is-open").forEach(nav => {
            if (!nav.contains(e.target)) {
                nav.classList.remove("is-open");
                const btn = nav.querySelector(".mobile-service-nav__toggle");
                if (btn) btn.setAttribute("aria-expanded", "false");
            }
        });
    });
});