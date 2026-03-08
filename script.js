const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
const year = document.getElementById('year');

if (year) {
  year.textContent = new Date().getFullYear();
}

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
    });
  });
}