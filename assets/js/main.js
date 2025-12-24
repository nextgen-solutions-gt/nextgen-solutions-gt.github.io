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
  document.querySelectorAll(".recent-commits").forEach(section => {
    const repo = section.dataset.repo;
    const list = section.querySelector(".commit-list");

    if (!repo || !list) return;

    fetch(`https://api.github.com/repos/${repo}/commits?per_page=5`)
      .then(r => r.json())
      .then(commits => {
        if (!Array.isArray(commits)) {
          list.innerHTML = "<li>No commits available</li>";
          return;
        }

        commits.forEach(c => {
          const li = document.createElement("li");
          li.className = "commit-item";
          li.dataset.message = c.commit.message;

          const date = new Date(c.commit.author.date)
            .toLocaleDateString(undefined, {
              year: "numeric",
              month: "short",
              day: "numeric"
            });

          li.innerHTML = `
            <a href="${c.html_url}" target="_blank" class="commit-main">
              <span class="commit-sha">${c.sha.slice(0, 7)}</span>
              <span class="commit-msg">
                ${c.commit.message.split("\n")[0]}
              </span>
            </a>
            <span class="commit-date">${date}</span>
          `;

          list.appendChild(li);
        });
      })
      .catch(() => {
        list.innerHTML = "<li>Error loading commits</li>";
      });
  });
});
