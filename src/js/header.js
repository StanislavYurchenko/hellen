'use strict';

const buttonFreeClassRef = document.querySelector('#FreeClassButton');
const modalConsRef = document.querySelector('.consultation');
const modalConsBgRef = document.querySelector('.consultation__background');
const modalConsBnCloseRef = document.querySelector(
  '.consultation__button-close',
);
const modalConsBoxRef = document.querySelector('.consultation__box-heading');
const body = document.getElementsByTagName('body');

const consultationHolder = () => {
  modalConsRef.classList.toggle('consultation--modal-show');
  modalConsBgRef.classList.toggle('consultation__background--modal');
  modalConsBnCloseRef.classList.toggle('consultation__button-close--visible');
  modalConsBoxRef.classList.toggle('display-none');
  body[0].classList.toggle('no-scroll');
};

buttonFreeClassRef.addEventListener('click', () => {
  consultationHolder();
});

modalConsBnCloseRef.addEventListener('click', () => {
  consultationHolder();
});
