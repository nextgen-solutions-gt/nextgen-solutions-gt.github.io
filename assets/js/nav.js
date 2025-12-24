(() => {
  // Solo ejecutar en la home
  if (window.location.pathname !== "/") return;

  const sections = document.querySelectorAll("section[id]");
  const links = document.querySelectorAll(".nav-links a");

  function onScroll() {
    let scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      if (
        scrollPos >= section.offsetTop &&
        scrollPos < section.offsetTop + section.offsetHeight
      ) {
        links.forEach(link => link.classList.remove("active"));

        const active = document.querySelector(
          `.nav-links a[href="/#${section.id}"]`
        );

        if (active) active.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", onScroll);
})();

(() => {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle("scrolled", window.scrollY > 10);
  };

  window.addEventListener("scroll", onScroll);
})();
