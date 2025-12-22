(() => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav-links");
  const overlay = document.querySelector(".nav-overlay");
  const icon = toggle.querySelector("i");

  if (!toggle || !nav) return;

  function openMenu() {
    nav.classList.add("open");
    overlay.classList.add("open");
    icon.className = "fa-solid fa-xmark";
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    nav.classList.remove("open");
    overlay.classList.remove("open");
    icon.className = "fa-solid fa-bars";
    document.body.style.overflow = "";
  }

  toggle.addEventListener("click", () => {
    nav.classList.contains("open") ? closeMenu() : openMenu();
  });

  overlay.addEventListener("click", closeMenu);

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });
})();
