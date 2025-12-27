const buttons = document.querySelectorAll("[data-theme-select]");
const root = document.documentElement;

function applyTheme(mode, animate = false) {
  if (animate) {
    root.classList.add("theme-animate");
    setTimeout(() => {
      root.classList.remove("theme-animate");
    }, 300);
  }

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

// inicial (sin animación)
const saved = localStorage.getItem("theme") || "system";
applyTheme(saved);

// clicks (con animación)
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    applyTheme(btn.dataset.themeSelect, true);
  });
});

// cambios del sistema
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
  const buttons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".design-card");

  if (!buttons.length) return;

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter;

      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      cards.forEach(card => {
        if (filter === "all") {
          card.style.display = "";
          return;
        }

        const tags = card.dataset.tags.split(" ");
        card.style.display = tags.includes(filter) ? "" : "none";
      });
    });
  });
})();

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".last-update").forEach(el => {
    const repo = el.dataset.repo;
    const span = el.querySelector("span");

    if (!repo || !span) return;

    fetch(`https://api.github.com/repos/${repo}/commits?per_page=1`)
      .then(r => r.json())
      .then(data => {
        if (!Array.isArray(data) || !data[0]) return;

        const date = new Date(
          data[0].commit.author.date
        ).toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric"
        });

        span.textContent = date;
      })
      .catch(() => {
        span.textContent = "Unavailable";
      });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".recent-commits").forEach(block => {
    const repo = block.dataset.repo;
    if (!repo) return;

    const list = block.querySelector(".commit-list");
    if (!list) return;

    const LIMIT = 5;
    let expanded = false;
    let all = [];

    const toggle = document.createElement("button");
    toggle.className = "commit-toggle";
    toggle.textContent = "Show more";
    toggle.hidden = true;
    block.appendChild(toggle);

    fetch(`https://api.github.com/repos/${repo}/commits?per_page=30`)
      .then(r => r.json())
      .then(commits => {
        if (!Array.isArray(commits)) {
          list.innerHTML = "<li>Unable to load commits.</li>";
          return;
        }

        all = commits;
        render();

        if (commits.length > LIMIT) toggle.hidden = false;
      })
      .catch(() => {
        list.innerHTML = "<li>Error loading commits.</li>";
      });

    toggle.addEventListener("click", () => {
      expanded = !expanded;
      toggle.textContent = expanded ? "Show less" : "Show more";
      render();
    });

    function render() {
      list.innerHTML = "";
      const visible = expanded ? all : all.slice(0, LIMIT);

      visible.forEach(c => {
        const li = document.createElement("li");
        li.className = "commit-item";
const short = c.commit.message.split("\n")[0];
const full = c.commit.message.replace(/"/g, "&quot;");

li.innerHTML = `
  <span class="commit-dot"></span>

  <div class="commit-content">
    <a
      href="${c.html_url}"
      class="commit-link"
      target="_blank"
      rel="noopener"
      title="${full}"
    >
      ${short}
    </a>

    <div class="commit-meta">
      ${c.commit.author.name} · ${timeAgo(new Date(c.commit.author.date))}
    </div>
  </div>
`;

        list.appendChild(li);
      });
    }
  });
});

/* 👇 ESTA FUNCIÓN FALTABA */
function timeAgo(date) {
  const seconds = Math.floor((Date.now() - date) / 1000);

  const intervals = [
    ["year", 31536000],
    ["month", 2592000],
    ["day", 86400],
    ["hour", 3600],
    ["minute", 60]
  ];

  for (const [name, secondsIn] of intervals) {
    const value = Math.floor(seconds / secondsIn);
    if (value >= 1) {
      return `${value} ${name}${value > 1 ? "s" : ""} ago`;
    }
  }
  return "just now";
}

document.addEventListener("DOMContentLoaded", () => {
  const testimonials = document.querySelectorAll(".testimonial");
  const nextBtn = document.getElementById("next-testimonial");
  const prevBtn = document.getElementById("prev-testimonial");

  if (!testimonials.length || !nextBtn || !prevBtn) {
    return; // Slider no existe en esta página
  }

  let index = 0;

  function showTestimonial(i) {
    testimonials.forEach((t, idx) => {
      t.classList.toggle("active", idx === i);
    });
  }

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % testimonials.length;
    showTestimonial(index);
  });

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + testimonials.length) % testimonials.length;
    showTestimonial(index);
  });

  showTestimonial(0);
});
