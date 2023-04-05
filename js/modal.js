const modalButtonEl = document.querySelector('#modal-button');
const backdropEl = document.querySelector('#backdrop');
const closeIconEl = document.querySelector('#close-modal');
const popUpEl = document.querySelector('.pop-up');
const popUpIcon = document.querySelector('#close-popUp');

function openModal() {
  if (window.innerWidth >= 767) {
    backdropEl.classList.add('is-open');
  } else {
    popUpEl.classList.add('visible');
  }
}
function closeModal() {
  backdropEl.classList.remove('is-open');
}

modalButtonEl.addEventListener('click', openModal);
closeIconEl.addEventListener('click', closeModal);
popUpIcon.addEventListener('click', () => {
  popUpEl.classList.remove('visible');
});

