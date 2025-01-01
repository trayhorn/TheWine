const openEl = document.querySelector('#open-menu');
const closeEl = document.querySelector('#close-menu');
const menuEl = document.querySelector('.menu__nav');

openEl.addEventListener('click', () => {
  menuEl.classList.add('is-open');
});
closeEl.addEventListener('click', () => {
  menuEl.classList.remove('is-open');
});

// Animation

// const options = {
//   root: null,
//   rootMargin: '0px',
//   threshold: 0
// };

// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('show');
//     }
//     return;
//   });
// }, options);

// const sections = document.querySelectorAll('section');

// sections.forEach(el => observer.observe(el));