const btn = document.getElementById('theme-toggle');
const icon = btn.querySelector('i');

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  icon.className = theme === 'dark'
    ? 'bi bi-sun-fill'
    : 'bi bi-moon-fill';
}

const saved = localStorage.getItem('theme') || 'dark';
setTheme(saved);

btn.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  setTheme(current === 'dark' ? 'light' : 'dark');
});
