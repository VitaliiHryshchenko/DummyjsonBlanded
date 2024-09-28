import function creatModal() {
  let modal = document.createElement('div');
  modal.className = 'modal';
  modal.id = 'modalWindow';

  let modalContent = document.createElement('div');
  modalContent.className = 'modal-content';

  let closeBtn = document.createElement('span');
  closeBtn.className = 'close';
  closeBtn.innerHTML = '&times;';

  let modalHeader = document.createElement('h2');
  modalHeader.textContent = 'якась назва модального вікна';

  let modalText = document.createElement('p');
    modalText.textContent = 'текст у модальному вікні';
    
    modalContent.appendChild(closeBtn);
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalText);
    modal.appendChild(modalContent);

    document.body.appendChild(modal);
    
  closeBtn.onclick = function () {
    modal.style.display = 'none';
  };

  window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
}
