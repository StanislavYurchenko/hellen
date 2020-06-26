"use strict";

document.querySelector('.telvalidate').addEventListener('keyup', function () {
  this.value = this.value.replace(/[^\d]/g, '');
});
document.querySelector('.namevalidate').addEventListener('keyup', function () {
  this.value = this.value.replace(/[\d]/g, '');
});
'use strict';

var buttonFreeClassRef = document.querySelector('#FreeClassButton');
var modalConsRef = document.querySelector('.consultation');
var modalConsBgRef = document.querySelector('.consultation__background');
var modalConsBnCloseRef = document.querySelector('.consultation__button-close');
var modalConsBoxRef = document.querySelector('.consultation__box-heading');
var body = document.getElementsByTagName('body');

var consultationHolder = function consultationHolder() {
  modalConsRef.classList.toggle('consultation--modal-show');
  modalConsBgRef.classList.toggle('consultation__background--modal');
  modalConsBnCloseRef.classList.toggle('consultation__button-close--visible');
  modalConsBoxRef.classList.toggle('display-none');
  body[0].classList.toggle('no-scroll');
};

buttonFreeClassRef.addEventListener('click', function () {
  consultationHolder();
});
modalConsBnCloseRef.addEventListener('click', function () {
  consultationHolder();
});
'use strict';

var openNavModalBtn = document.querySelector('.js-menu-button-open');
var closeNavModalBtn = document.querySelector('.js-menu-button-close');
var selectNavRef = document.querySelectorAll('.navigation-menu__item');
var navModal = document.querySelector('.js-modal-container');
var body = document.getElementsByTagName('body');

var modalHandler = function modalHandler() {
  navModal.classList.toggle('modal-container-show');
  body[0].classList.toggle('no-scroll');
};

openNavModalBtn.addEventListener('click', modalHandler);
closeNavModalBtn.addEventListener('click', modalHandler);

for (var i = 0; i < selectNavRef.length; i++) {
  selectNavRef[i].addEventListener('click', modalHandler);
}
"use strict";

$(document).ready(function () {
  $('.js-slick').slick({
    prevArrow: $('.js-prev'),
    nextArrow: $('.js-next'),
    dots: true,
    customPaging: function customPaging(slick, index) {
      return '<a class="pagination__item--' + (index + 1) + ' pagination__item"></a>';
    },
    dotsClass: 'slick-pagination-dots'
  });
});