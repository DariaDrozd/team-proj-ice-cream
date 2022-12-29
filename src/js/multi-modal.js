document.addEventListener('DOMContentLoaded', function () {
  const modals = [
    'data-product-modal',
    'data-modal-video',
    'data-modal-buy-now',
  ];
  modals.forEach(element => {
    const openModalSelector = element + '-open';
    const closeModalSelector = element + '-close';
    const openModalBtns = document.querySelectorAll(
      '[' + openModalSelector + ']'
    );
    const closeModalBtns = document.querySelectorAll(
      '[' + closeModalSelector + ']'
    );
    const modal = document.querySelector('[' + element + ']');
    openModalBtns.forEach(openBtn =>
      openBtn.addEventListener('click', toggleModal)
    );
    closeModalBtns.forEach(closeBtn =>
      closeBtn.addEventListener('click', toggleModal)
    );
    function toggleModal() {
      document.body.classList.toggle('modal-open');
      modal.classList.toggle('is-hidden');
    }
  });
});
