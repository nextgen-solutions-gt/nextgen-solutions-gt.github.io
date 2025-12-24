(() => {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".mobile-menu");

  // 👉 Si no existe el menú móvil, salimos sin romper nada
  if (!toggle || !menu) return;

  const icon = toggle.querySelector("i");
  const links = menu.querySelectorAll("a");

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");

    icon.className = isOpen
      ? "fa-solid fa-xmark"
      : "fa-solid fa-bars";

    menu.setAttribute("aria-hidden", String(!isOpen));
  });

  links.forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      icon.className = "fa-solid fa-bars";
      menu.setAttribute("aria-hidden", "true");
    });
  });
})();
