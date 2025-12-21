const sections = document.querySelectorAll("section[id]");
const links = document.querySelectorAll(".nav-links a");

function onScroll() {
  let scrollPos = window.scrollY + 100;

  sections.forEach(section => {
    if (
      scrollPos >= section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      links.forEach(link => link.classList.remove("active"));
      const active = document.querySelector(
        `.nav-links a[href="#${section.id}"]`
      );
      if (active) active.classList.add("active");
    }
  });
}

window.addEventListener("scroll", onScroll);
