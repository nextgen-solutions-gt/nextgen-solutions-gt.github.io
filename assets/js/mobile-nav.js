const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#primary-navigation');

toggle.addEventListener('click', () => {
  const open = nav.getAttribute('data-open') === 'true';

  nav.setAttribute('data-open', !open);
  toggle.setAttribute('aria-expanded', !open);

  toggle.innerHTML = open
    ? '<i class="fa-solid fa-bars"></i>'
    : '<i class="fa-solid fa-xmark"></i>';
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.setAttribute('data-open', 'false');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  });
});
