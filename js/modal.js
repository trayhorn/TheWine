const modalButtonEl = document.querySelector('#modal-button');
const backdropEl = document.querySelector('#backdrop');
const closeIconEl = document.querySelector('#close-modal');

function openModal() {
  backdropEl.classList.add('is-open');
}
function closeModal() {
  backdropEl.classList.remove('is-open');
}

modalButtonEl.addEventListener('click', openModal);
closeIconEl.addEventListener('click', closeModal);

