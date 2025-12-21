const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav-links");
const links = nav.querySelectorAll("a");

toggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// cerrar al hacer click
links.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});

const icon = toggle.querySelector("i");

toggle.addEventListener("click", () => {
  nav.classList.toggle("open");
  icon.className = nav.classList.contains("open")
    ? "fa-solid fa-xmark"
    : "fa-solid fa-bars";
});
