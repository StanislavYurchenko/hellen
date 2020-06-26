'use strict';

const openNavModalBtn = document.querySelector('.js-menu-button-open');
const closeNavModalBtn = document.querySelector('.js-menu-button-close');
const selectNavRef = document.querySelectorAll('.navigation-menu__item');
const navModal = document.querySelector('.js-modal-container');
const body = document.getElementsByTagName('body');
const closeModalLink = document.querySelector('.js-close');

const modalHandler = () => {
  navModal.classList.toggle('modal-container-show');
  body[0].classList.toggle('no-scroll');
};

openNavModalBtn.addEventListener('click', modalHandler);
closeNavModalBtn.addEventListener('click', modalHandler);
closeModalLink.addEventListener('click', modalHandler);

for (let i = 0; i < selectNavRef.length; i++) {
  selectNavRef[i].addEventListener('click', modalHandler);
}
