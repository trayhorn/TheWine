const modalButtonEl = document.querySelector('#modal-button');
const backdropEl = document.querySelector('#backdrop');
const closeIconEl = document.querySelector('#close-modal');

function openModal() {
  backdropEl.classList.remove('is-hidden');
}
function closeModal() {
  backdropEl.classList.add('is-hidden');
}

modalButtonEl.addEventListener('click', openModal);
closeIconEl.addEventListener('click', closeModal);

