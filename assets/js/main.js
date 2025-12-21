const toggle = document.getElementById("themeToggle");
const icon = toggle.querySelector("i");

const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

const THEMES = ["system", "light", "dark"];

function getSystemTheme() {
  return mediaQuery.matches ? "dark" : "light";
}

function applyTheme(mode) {
  const theme = mode === "system" ? getSystemTheme() : mode;

  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", mode);

  icon.className =
    mode === "system"
      ? "fa-solid fa-desktop"
      : mode === "dark"
      ? "fa-solid fa-moon"
      : "fa-solid fa-sun";
}

// inicial
const saved = localStorage.getItem("theme") || "system";
applyTheme(saved);

// click → rota estado
toggle.addEventListener("click", () => {
  const current = localStorage.getItem("theme") || "system";
  const next = THEMES[(THEMES.indexOf(current) + 1) % THEMES.length];
  applyTheme(next);
});

// si cambia el sistema
mediaQuery.addEventListener("change", () => {
  if (localStorage.getItem("theme") === "system") {
    applyTheme("system");
  }
});


const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2
  }
);

reveals.forEach(el => observer.observe(el));
