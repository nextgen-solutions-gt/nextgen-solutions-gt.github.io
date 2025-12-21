const translations = window.TRANSLATIONS;

function setLanguage(lang) {
  const dict = translations[lang] || translations.es;

  document.documentElement.lang = lang;
  localStorage.setItem("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });
}

// ⬇️ AQUÍ ESTABA EL ERROR
document.querySelectorAll("[data-lang]").forEach(btn => {
  btn.addEventListener("click", () => {
    setLanguage(btn.dataset.lang);
  });
});

// idioma inicial
const savedLang =
  localStorage.getItem("lang") ||
  (navigator.language.startsWith("es") ? "es" : "en");

setLanguage(savedLang);
