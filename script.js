const btn = document.querySelector('[data-hamburger]');
const menu = document.querySelector('[data-mobile-menu]');
if (btn && menu) {
  btn.addEventListener('click', () => menu.classList.toggle('show'));
}