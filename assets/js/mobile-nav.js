(() => {
  const navToggle = document.querySelector(".nav-toggle");
  const icon = navToggle?.querySelector("i");

  // Crea overlay dinámicamente
  const overlay = document.createElement("div");
  overlay.className = "mobile-overlay";
  document.body.appendChild(overlay);

  // Clona los links del nav principal para el panel movil
  const navLinks = document.querySelector(".nav-links");
  const mobileNav = document.createElement("div");
  mobileNav.className = "nav-mobile";

  // Copiar enlaces
  navLinks.querySelectorAll("a").forEach(link => {
    const a = link.cloneNode(true);
    mobileNav.appendChild(a);
  });

  document.body.appendChild(mobileNav);

  function openMenu() {
    mobileNav.classList.add("open");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
    icon.className = "fa-solid fa-xmark";
    navToggle.setAttribute("aria-label", "Cerrar menú");
  }

  function closeMenu() {
    mobileNav.classList.remove("open");
    overlay.classList.remove("active");
    document.body.style.overflow = ""; // restaurar scroll
    icon.className = "fa-solid fa-bars";
    navToggle.setAttribute("aria-label", "Abrir menú");
  }

  navToggle?.addEventListener("click", () => {
    mobileNav.classList.contains("open") ? closeMenu() : openMenu();
  });

  overlay.addEventListener("click", closeMenu);

  // Cerrar al hacer click en un enlace
  mobileNav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", closeMenu);
  });
})();
