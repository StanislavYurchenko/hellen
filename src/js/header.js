const buttonFreeClassRef = document.querySelector('#FreeClassButton');

buttonFreeClassRef.addEventListener('click', () => {
  const name = 'Shield generator';

  let price = 1000;
  console.log(`Selected "${name}", unit price ${price} credits`);

  price = 2000;
  console.log(`Selected "${name}", unit price ${price} credits`);

  console.log('\n');
});
