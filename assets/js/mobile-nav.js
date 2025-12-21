const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav-links");
const links = nav.querySelectorAll("a");

const icon = toggle.querySelector("i");

toggle.addEventListener("click", () => {
  nav.classList.toggle("open");
  icon.className = nav.classList.contains("open")
    ? "fa-solid fa-xmark"
    : "fa-solid fa-bars";
});



