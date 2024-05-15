const renderImages = resultData => {
  const list = document.querySelector('.list');
  //   resultData.forEach(element => {
  //     console.log(element);
  //   });

  const result = resultData.hits;

  let li = '';

  result.forEach(element => {
    li += `<li class="card">
                <img src="${element.previewURL}" alt="${element.tags}" /> 
                <div class="main-content">
                    <ul class="card-list">
                        <li>
                            <h3>
                                likes
                            </h3>
                            <p>${element.likes}</p>
                        </li>
                        <li>
                            <h3>
                                views
                            </h3>
                            <p>${element.views}</p>
                        </li>
                        <li>
                            <h3>
                                comments
                            </h3>
                            <p>${element.comments}</p>
                        </li>
                        <li>
                            <h3>
                                downloads
                            </h3>
                            <p>${element.downloads}</p>
                        </li>
                    </ul>
                </div>
            </li>`;

    console.log(element);
  });

  list.insertAdjacentHTML('beforeend', li);

  //   console.log(result);
};

export default renderImages;
