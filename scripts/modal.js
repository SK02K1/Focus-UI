const btnShowModal = document.querySelector('#btn-show-modal');
const modalWrapper = document.querySelector('.modal-wrapper');

const hideModal = () => {
  modalWrapper.style.display = 'none';
};

const showModal = () => {
  modalWrapper.style.display = 'block';
};

btnShowModal.addEventListener('click', (e) => {
  showModal();
});

modalWrapper.addEventListener('click', (e) => {
  const target = e.target;
  if (
    target.classList.contains('modal-wrapper') ||
    target.classList.contains('modal-btn')
  ) {
    hideModal();
  }
});
