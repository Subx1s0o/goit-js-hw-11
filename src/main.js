import pixApi from './js/pixabay-api.js';
import renderImages from './js/render-functions.js';

const form = document.querySelector('form');
const input = document.querySelector('input[data-search]');

form.addEventListener('submit', e => {
  e.preventDefault();
  const search = input.value;

  pixApi(search)
    .then(data => {
      renderImages(data);
    })
    .catch(error => {
      console.error('Помилка при рендері картинок', error);
    });
});
