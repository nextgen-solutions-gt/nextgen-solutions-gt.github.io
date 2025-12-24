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
  const commitSections = document.querySelectorAll(".recent-commits");

  commitSections.forEach(section => {
    const repo = section.dataset.repo; // usar data-attribute
    if (!repo) return;

    fetch(`https://api.github.com/repos/${repo}/commits?per_page=3`)
      .then(res => res.json())
      .then(commits => {
        const grid = section.querySelector(".commits-grid");
        if (!commits || commits.length === 0 || commits.message === "Not Found") {
          grid.innerHTML = "<p>No commits found or repo is private.</p>";
          return;
        }

        commits.forEach(commit => {
          const commitEl = document.createElement("div");
          commitEl.classList.add("commit-card");

          const message = commit.commit.message.split("\n")[0];
          const date = new Date(commit.commit.author.date).toLocaleDateString();
          const url = commit.html_url;

          commitEl.innerHTML = `
            <p class="commit-message">${message}</p>
            <p class="commit-date">${date}</p>
            <a href="${url}" target="_blank" class="commit-link">View on GitHub</a>
          `;

          grid.appendChild(commitEl);
        });
      })
      .catch(err => {
        section.querySelector(".commits-grid").innerHTML = "<p>Could not load commits.</p>";
        console.error(err);
      });
  });
});
