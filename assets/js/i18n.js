const translations = {
  es: {
    install: "Instalación de phpBB",
    installDesc: "Instalación profesional y configuración inicial.",
    update: "Actualización de phpBB",
    updateDesc: "Actualizamos tu foro sin pérdida de datos.",
    maintenance: "Mantenimiento",
    maintenanceDesc: "Soporte, seguridad y optimización continua.",
    designs: "Diseños phpBB",
    designsDesc: "Estilos modernos, responsive y personalizados."
  },
  en: {
    install: "phpBB Installation",
    installDesc: "Professional installation and initial setup.",
    update: "phpBB Update",
    updateDesc: "We update your forum without data loss.",
    maintenance: "Maintenance",
    maintenanceDesc: "Support, security and continuous optimization.",
    designs: "phpBB Designs",
    designsDesc: "Modern, responsive and custom styles."
  }
};

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

// botones de idioma
document.querySelectorAll("[data-lang-btn]").forEach(btn => {
  btn.addEventListener("click", () => {
    setLanguage(btn.dataset.langBtn);
  });
});

// idioma inicial
const savedLang =
  localStorage.getItem("lang") ||
  (navigator.language.startsWith("es") ? "es" : "en");

setLanguage(savedLang);
