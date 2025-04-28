// Menu

const openEl = document.querySelector('#open-menu');
const closeEl = document.querySelector('#close-menu');
const menuEl = document.querySelector('.menu__nav');

openEl.addEventListener('click', () => {
  menuEl.classList.add('is-open');
});
closeEl.addEventListener('click', () => {
  menuEl.classList.remove('is-open');
});

menuEl.addEventListener('click', (e) => {
  if (!e.target.classList.contains('menu__link-target')) return;
  menuEl.classList.remove('is-open');
})


// Modal

const modalButtonEl = document.querySelector('#modal-button');
const backdropEl = document.querySelector('#backdrop');
const closeIconEl = document.querySelector('#close-modal');
const popUpEl = document.querySelector('.pop-up');
const popUpIcon = document.querySelector('#close-popUp');

function openModal() {
  if (window.innerWidth >= 767) {
    backdropEl.classList.remove('is-hidden');
  } else {
    popUpEl.classList.add('visible');
  }
}
function closeModal(e) {
  const className = e.target.className;
  if (className === 'backdrop' || className === 'cross-icon') {
    backdropEl.classList.add('is-hidden');
  }
}

modalButtonEl.addEventListener('click', openModal);

backdropEl.addEventListener('click', closeModal);

if (popUpIcon) {
  popUpIcon.addEventListener('click', () => {
    popUpEl.classList.remove('visible');
  });
}



// Forms

const formButtons = document.querySelectorAll('.form-button');
const checkboxes = document.querySelectorAll('.form-check__box');

checkboxes.forEach(el => {
  el.addEventListener('change', e => {
    console.log("calling event");
    const formEl = e.target.closest('form');
    const buttonEl = document.querySelector(
      `.${formEl.classList[0]} .form-button`,
    );
    buttonEl.toggleAttribute('disabled');
  });
});

document.querySelectorAll('.form').forEach(el =>
  el.addEventListener('submit', e => {
    e.preventDefault();
    e.target.reset();
    if (!backdropEl.classList.contains('is-hidden')) {
      backdropEl.classList.add('is-hidden');
    }
  }),
);