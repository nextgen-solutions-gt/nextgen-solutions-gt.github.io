const btn = document.getElementById('theme-toggle');
const icon = btn.querySelector('i');

btn.onclick = () => {
  const next = html.dataset.theme === 'dark' ? 'light' : 'dark';
  html.dataset.theme = next;
  localStorage.setItem('theme', next);

  icon.className = next === 'dark'
    ? 'fa-solid fa-sun'
    : 'fa-solid fa-moon';
};
