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
  localStorage.setItem("lang", lang);

  document.querySelector("[data-i18n='install']").textContent =
    translations[lang].install;
  document.querySelector("[data-i18n='installDesc']").textContent =
    translations[lang].installDesc;

  document.querySelector("[data-i18n='update']").textContent =
    translations[lang].update;
  document.querySelector("[data-i18n='updateDesc']").textContent =
    translations[lang].updateDesc;

  document.querySelector("[data-i18n='maintenance']").textContent =
    translations[lang].maintenance;
  document.querySelector("[data-i18n='maintenanceDesc']").textContent =
    translations[lang].maintenanceDesc;

  document.querySelector("[data-i18n='designs']").textContent =
    translations[lang].designs;
  document.querySelector("[data-i18n='designsDesc']").textContent =
    translations[lang].designsDesc;
}

document.querySelectorAll("[data-lang]").forEach(btn => {
  btn.addEventListener("click", () => {
    setLanguage(btn.dataset.lang);
  });
});

const savedLang =
  localStorage.getItem("lang") ||
  (navigator.language.startsWith("es") ? "es" : "en");

setLanguage(savedLang);
