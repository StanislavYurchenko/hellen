$(document).ready(function () {
  $('.js-slick').slick({
    prevArrow: $('.js-prev'),
    nextArrow: $('.js-next'),
    dots: true,
    customPaging: function (slick, index) {
      return (
        '<a class="pagination__item--' + (index + 1) + ' pagination__item"></a>'
      );
    },
    dotsClass: 'slick-pagination-dots',
  });
});