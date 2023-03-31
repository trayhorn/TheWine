const openEl = document.querySelector('#open-menu');
const closeEl = document.querySelector('#close-menu');
const menuEl = document.querySelector('.menu__nav');

openEl.addEventListener('click', () => {
  menuEl.classList.add('is-open');
});
closeEl.addEventListener('click', () => {
  menuEl.classList.remove('is-open');
});