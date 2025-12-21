(() => {
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav-menu");

  if (!navToggle || !nav) return;

  const links = nav.querySelectorAll("a");
  const icon = navToggle.querySelector("i");

  navToggle.addEventListener("click", () => {
    nav.classList.toggle("open");

    icon.className = nav.classList.contains("open")
      ? "fa-solid fa-xmark"
      : "fa-solid fa-bars";
  });

  links.forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      icon.className = "fa-solid fa-bars";
    });
  });
})();
