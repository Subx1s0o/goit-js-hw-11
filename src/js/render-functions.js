// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const renderImages = resultData => {
  const list = document.querySelector('.list');
  const result = resultData.hits;
  const loader = document.querySelector('.loader-div');

  list.innerHTML = '';

  let li = '';

  const lightbox = new SimpleLightbox('.card-link', {
    inlineStyles: false,
    captionsData: 'alt',
    captionDelay: 250,
    disableScroll: true,
  });

  if (result.length !== 0) {
    loader.style.display = 'flex';
    result.forEach(element => {
      li += `<li class="card">
                <a class="card-link" href="${element.largeImageURL}">
                    <img class="card-image" src="${element.webformatURL}" alt="${element.tags}" /> 
                </a>
                <div class="main-content">
                    <ul class="card-list">
                        <li class="card-list-li">
                            <h3>
                                likes
                            </h3>
                            <p>${element.likes}</p>
                        </li>
                        <li class="card-list-li">
                            <h3>
                                views
                            </h3>
                            <p>${element.views}</p>
                        </li>
                        <li class="card-list-li">
                            <h3>
                                comments
                            </h3>
                            <p>${element.comments}</p>
                        </li>
                        <li class="card-list-li">
                            <h3>
                                downloads
                            </h3>
                            <p>${element.downloads}</p>
                        </li>
                    </ul>
                </div>
            </li>`;
    });
    loader.style.display = 'none';
    list.insertAdjacentHTML('beforeend', li);

    lightbox.refresh();
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
};

export default renderImages;
