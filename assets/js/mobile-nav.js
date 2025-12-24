(() => {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".mobile-menu");
  const icon = toggle.querySelector("i");

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");

    icon.className = isOpen
      ? "fa-solid fa-xmark"
      : "fa-solid fa-bars";

    menu.setAttribute("aria-hidden", !isOpen);
  });

  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      icon.className = "fa-solid fa-bars";
      menu.setAttribute("aria-hidden", "true");
    });
  });
})();
