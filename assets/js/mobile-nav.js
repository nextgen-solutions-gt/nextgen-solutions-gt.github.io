(() => {
  const navToggle = document.querySelector(".nav-toggle");
  const icon = navToggle?.querySelector("i");

  // create overlay
  const overlay = document.createElement("div");
  overlay.className = "mobile-overlay";
  document.body.appendChild(overlay);

  // create mobile nav
  const mobileNav = document.createElement("div");
  mobileNav.className = "nav-mobile";

  // clone desktop links
  document.querySelectorAll(".nav-links a").forEach(link => {
    const a = link.cloneNode(true);
    mobileNav.appendChild(a);
  });

  document.body.appendChild(mobileNav);

  function openMenu() {
    mobileNav.classList.add("open");
    overlay.classList.add("active");
    navToggle.setAttribute("aria-expanded", "true");
    icon.className = "fa-solid fa-xmark";
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    mobileNav.classList.remove("open");
    overlay.classList.remove("active");
    navToggle.setAttribute("aria-expanded", "false");
    icon.className = "fa-solid fa-bars";
    document.body.style.overflow = "";
  }

  navToggle.addEventListener("click", () => {
    mobileNav.classList.contains("open") ? closeMenu() : openMenu();
  });

  overlay.addEventListener("click", closeMenu);

  mobileNav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", closeMenu);
  });
})();
