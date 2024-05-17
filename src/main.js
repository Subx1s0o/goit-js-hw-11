import pixApi from './js/pixabay-api.js';
import renderImages from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('form');
const input = document.querySelector('input[data-search]');
const loader = document.querySelector('.loader-div');
const list = document.querySelector('.list');

form.addEventListener('submit', e => {
  e.preventDefault();
  loader.style.visibility = 'visible';
  const search = input.value.trim();
  list.innerHTML = '';
  pixApi(search)
    .then(data => {
      const result = data.hits;
      loader.style.visibility = 'hidden';
      if (result.length !== 0 && search !== '') {
        renderImages(result, list);

        input.value = '';
      } else {
        iziToast.show({
          title: '❌',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          messageColor: 'white',
          backgroundColor: '#E25757',
          position: 'topRight',
        });
      }
    })
    .catch(error => {
      console.error('Помилка при рендері картинок', error);
      iziToast.show({
        title: '❌',
        message: 'Sorry, check your internet connection!',
        messageColor: 'white',
        backgroundColor: '#E25757',
        position: 'topRight',

        timeout: 9999999999999,
      });
    });
});