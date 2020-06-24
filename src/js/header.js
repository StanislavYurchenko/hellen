'use strict';

const buttonFreeClassRef = document.querySelector('#FreeClassButton');
const modalConsRef = document.querySelector('.consultation');
const modalConsBgRef = document.querySelector('.consultation__background');
const modalConsBnCloseRef = document.querySelector(
  '.consultation__button-close',
);
const modalConsBoxRef = document.querySelector('.consultation__box-heading');

const consultationHolder = () => {
  modalConsRef.classList.toggle('consultation--modal-show');
  modalConsBgRef.classList.toggle('consultation__background--modal');
  modalConsBnCloseRef.classList.toggle('consultation__button-close--visible');
  modalConsBoxRef.classList.toggle('display-none');
};

buttonFreeClassRef.addEventListener('click', () => {
  consultationHolder();
});

modalConsBnCloseRef.addEventListener('click', () => {
  consultationHolder();
});
