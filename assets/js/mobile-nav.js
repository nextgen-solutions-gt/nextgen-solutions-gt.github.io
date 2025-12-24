(() => {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".mobile-menu");
  const backdrop = document.querySelector(".mobile-backdrop");

  if (!toggle || !menu || !backdrop) return;

  const icon = toggle.querySelector("i");
  const links = menu.querySelectorAll("a");

  function closeMenu() {
    menu.classList.remove("open");
    backdrop.classList.remove("open");
    document.body.classList.remove("menu-open");
    toggle.setAttribute("aria-expanded", "false");
    icon.className = "fa-solid fa-bars";
  }

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");

    backdrop.classList.toggle("open", isOpen);
    document.body.classList.toggle("menu-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));

    icon.className = isOpen
      ? "fa-solid fa-xmark"
      : "fa-solid fa-bars";
  });

  backdrop.addEventListener("click", closeMenu);

  links.forEach(link => {
    link.addEventListener("click", closeMenu);
  });
})();
