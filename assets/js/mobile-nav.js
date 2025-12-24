(() => {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".mobile-menu");
  const backdrop = document.querySelector(".mobile-backdrop");

  if (!toggle || !menu || !backdrop) return;

  const icon = toggle.querySelector("i");
  const links = menu.querySelectorAll("a");

  let startY = 0;
  let currentY = 0;
  let isDragging = false;

  function openMenu() {
    menu.classList.add("open");
    backdrop.classList.add("open");
    document.body.classList.add("menu-open");
    toggle.setAttribute("aria-expanded", "true");
    icon.className = "fa-solid fa-xmark";
  }

  function closeMenu() {
    menu.classList.remove("open", "dragging");
    backdrop.classList.remove("open");
    document.body.classList.remove("menu-open");
    toggle.setAttribute("aria-expanded", "false");
    icon.className = "fa-solid fa-bars";

    menu.style.transform = "";
    menu.style.opacity = "";
  }

  /* BOTÓN */
  toggle.addEventListener("click", () => {
    menu.classList.contains("open") ? closeMenu() : openMenu();
  });

  /* BACKDROP */
  backdrop.addEventListener("click", closeMenu);

  /* LINKS */
  links.forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  /* ───── SWIPE DOWN ───── */

  menu.addEventListener("touchstart", e => {
    if (!menu.classList.contains("open")) return;

    startY = e.touches[0].clientY;
    isDragging = true;
    menu.classList.add("dragging");
  });

  menu.addEventListener("touchmove", e => {
    if (!isDragging) return;

    currentY = e.touches[0].clientY;
    const deltaY = currentY - startY;

    if (deltaY > 0) {
      menu.style.transform = `translateY(${deltaY}px)`;
      menu.style.opacity = `${1 - deltaY / 300}`;
    }
  });

  menu.addEventListener("touchend", () => {
    if (!isDragging) return;
    isDragging = false;

    const deltaY = currentY - startY;

    if (deltaY > 120) {
      closeMenu(); // 🔥 swipe suficiente → cerrar
    } else {
      // vuelve a su lugar
      menu.classList.remove("dragging");
      menu.style.transform = "";
      menu.style.opacity = "";
    }
  });
})();
