const apiKey = '43901454-2f0f1ad212df2deb6dd93021b';

const pixApi = data => {
  return fetch(
    `https://pixabay.com/api/?key=${apiKey}&q=${data}&image_type=photo`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error('Помилка при отриманні запиту');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Помилка при отриманні даних', error);
      throw error;
    });
};

export default pixApi;
