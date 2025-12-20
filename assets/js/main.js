// Scroll reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Dark mode
const toggle = document.getElementById("theme-toggle");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

document.documentElement.dataset.theme =
  localStorage.theme || (prefersDark ? "dark" : "light");

toggle.addEventListener("click", () => {
  const theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = theme;
  localStorage.theme = theme;
});

// Idioma (base)
const lang = navigator.language.startsWith("es") ? "es" : "en";
document.documentElement.lang = lang;
