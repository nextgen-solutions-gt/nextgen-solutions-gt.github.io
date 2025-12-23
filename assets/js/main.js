const buttons = document.querySelectorAll("[data-theme-select]");
const root = document.documentElement;

function applyTheme(mode) {
  localStorage.setItem("theme", mode);

  let theme = mode;
  if (mode === "system") {
    theme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  root.setAttribute("data-theme", theme);

  buttons.forEach(btn => {
    btn.classList.toggle(
      "active",
      btn.dataset.themeSelect === mode
    );
  });
}

// inicial
const saved = localStorage.getItem("theme") || "system";
applyTheme(saved);

// clicks
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    applyTheme(btn.dataset.themeSelect);
  });
});

// escuchar cambios del sistema
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", () => {
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

(() => {
  const cards = document.querySelectorAll(".design-card");
  const tags = document.querySelectorAll(".tag");

  let activeTag = null;

  function showAll() {
    cards.forEach(card => {
      card.style.display = "";
    });

    tags.forEach(tag => tag.classList.remove("active"));
    activeTag = null;
  }

  function filter(tagValue) {
    cards.forEach(card => {
      const cardTags = card.dataset.tags || "";
      card.style.display = cardTags.includes(tagValue) ? "" : "none";
    });
  }

  tags.forEach(tag => {
    tag.addEventListener("click", () => {
      const tagValue = tag.dataset.filter;

      // 🔁 Si el tag ya está activo → desactivar
      if (activeTag === tagValue) {
        showAll();
        return;
      }

      // 🔒 Activar nuevo tag (desactiva los demás)
      tags.forEach(t => t.classList.remove("active"));
      tag.classList.add("active");

      activeTag = tagValue;
      filter(tagValue);
    });
  });
})();


(() => {
  const cards = document.querySelectorAll(".design-card");
  const tagButtons = document.querySelectorAll(".tag");

  function filterByTag(tag) {
    cards.forEach(card => {
      const tags = card.dataset.tags || "";
      card.style.display = tags.includes(tag) ? "" : "none";
    });

    tagButtons.forEach(btn => {
      btn.classList.toggle("active", btn.dataset.filter === tag);
    });
  }

  tagButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterByTag(btn.dataset.filter);
    });
  });
})();
