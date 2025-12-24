(() => {
  const toggle = document.querySelector(".nav-toggle");
  const mobileNav = document.querySelector(".mobile-nav");
  const overlay = document.querySelector(".mobile-overlay");

  if (!toggle || !mobileNav || !overlay) return;

  const openMenu = () => {
    mobileNav.classList.add("show");
    overlay.classList.add("show");
    toggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    mobileNav.classList.remove("show");
    overlay.classList.remove("show");
    toggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };

  toggle.addEventListener("click", () => {
    const isOpen = mobileNav.classList.contains("show");
    isOpen ? closeMenu() : openMenu();
  });

  overlay.addEventListener("click", closeMenu);

  // Close when clicking link
  mobileNav.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", closeMenu)
  );
})();
