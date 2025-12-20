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

const translations = {{ site.data.i18n | jsonify }};

function setLanguage(lang) {
  const dict = translations[lang] || translations.es;
  document.documentElement.lang = lang;
  document.documentElement.dataset.lang = lang;
  localStorage.setItem("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const keys = el.dataset.i18n.split(".");
    let value = dict;

    keys.forEach(k => value = value?.[k]);

    if (value) el.textContent = value;
  });
}

// idioma inicial
const savedLang = localStorage.getItem("lang");
const browserLang = navigator.language.startsWith("es") ? "es" : "en";
setLanguage(savedLang || browserLang);

// botones
document.querySelectorAll("[data-lang-btn]").forEach(btn => {
  btn.addEventListener("click", () => {
    setLanguage(btn.dataset.langBtn);
  });
});
