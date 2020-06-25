document.querySelector('.telvalidate').addEventListener('keyup', function () {
  this.value = this.value.replace(/[^\d]/g, '');
});

document.querySelector('.namevalidate').addEventListener('keyup', function () {
  this.value = this.value.replace(/[\d]/g, '');
});
