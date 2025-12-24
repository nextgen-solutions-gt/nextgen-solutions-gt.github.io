(() => {
  const navToggle = document.querySelector(".nav-toggle");
  if (!navToggle) return;

  const nav = document.querySelector(".nav-links");
  const links = nav.querySelectorAll("a");
  const icon = navToggle.querySelector("i");

  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    document.body.classList.toggle("menu-open", isOpen);

    icon.className = isOpen
      ? "fa-solid fa-xmark"
      : "fa-solid fa-bars";
  });

  links.forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      document.body.classList.remove("menu-open");
      icon.className = "fa-solid fa-bars";
    });
  });
})();
