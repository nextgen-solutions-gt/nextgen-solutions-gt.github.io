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
  const container = document.querySelector(".recent-commits");
  if (!container) return;

  const repo = container.dataset.repo;
  if (!repo) return;

  const list = container.querySelector(".commit-list");

  fetch(`https://api.github.com/repos/${repo}/commits?per_page=30`)
    .then(res => res.json())
    .then(commits => {
      if (!Array.isArray(commits)) {
        list.innerHTML = "<li>Unable to load commits.</li>";
        return;
      }

      list.innerHTML = "";

      commits.forEach(commit => {
        const msg = commit.commit.message;
        const short = msg.split("\n")[0];
        const date = new Date(commit.commit.author.date);
        const author = commit.commit.author.name;
        const url = commit.html_url;

        const li = document.createElement("li");
        li.className = "commit-item";
        li.title = msg;

        li.innerHTML = `
          <span class="commit-dot"></span>
          <div class="commit-content">
            <a href="${url}" target="_blank" class="commit-msg">
              ${short}
            </a>
            <div class="commit-meta">
              ${author} · ${timeAgo(date)}
            </div>
          </div>
        `;

        list.appendChild(li);
      });
    })
    .catch(() => {
      list.innerHTML = "<li>Error loading commits.</li>";
    });
});

function timeAgo(date) {
  const seconds = Math.floor((new Date() - date) / 1000);
  const intervals = [
    { label: "year", secs: 31536000 },
    { label: "month", secs: 2592000 },
    { label: "day", secs: 86400 },
    { label: "hour", secs: 3600 },
    { label: "minute", secs: 60 }
  ];

  for (const i of intervals) {
    const count = Math.floor(seconds / i.secs);
    if (count >= 1) return `${count} ${i.label}${count > 1 ? "s" : ""} ago`;
  }
  return "just now";
}

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
