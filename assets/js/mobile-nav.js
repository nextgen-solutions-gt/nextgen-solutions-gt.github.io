(() => {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".ios-menu");

  if (!toggle || !menu) return;

  const icon = toggle.querySelector("i");
  const links = menu.querySelectorAll("a");

  function openMenu() {
    menu.classList.add("open");
    document.body.classList.add("menu-open");
    toggle.setAttribute("aria-expanded", "true");
    icon.className = "fa-solid fa-xmark";
  }

  function closeMenu() {
    menu.classList.remove("open");
    document.body.classList.remove("menu-open");
    toggle.setAttribute("aria-expanded", "false");
    icon.className = "fa-solid fa-bars";
  }

  toggle.addEventListener("click", () => {
    menu.classList.contains("open") ? closeMenu() : openMenu();
  });

  links.forEach(link => {
    link.addEventListener("click", closeMenu);
  });
})();
