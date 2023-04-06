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
};

modalButtonEl.addEventListener('click', openModal);

backdropEl.addEventListener('click', closeModal);

popUpIcon.addEventListener('click', () => {
  popUpEl.classList.remove('visible');
});



