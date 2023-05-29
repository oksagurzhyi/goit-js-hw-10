import { renderSelect } from './renderSelect';
import { renderCatDescription } from './renderCatDescription';
import Notiflix from 'notiflix';

const URL = 'https://api.thecatapi.com/v1/breeds';
const URL_BREED = 'https://api.thecatapi.com/v1/images/';
const API_KEY =
  'live_JvZNAD8kUuHK4iFoJ2ccG6lyOiWEHdf6qBABg0zzY8OeAUp3Gat3HA7laXkJ3mfy';

const selectElement = document.querySelector('#single');
const errorText = document.querySelector('.error');

function fetchBreedsApi() {
  Notiflix.Loading.hourglass('Loading...Please, wait...');

  return fetch(`${URL}?${API_KEY}`)
    .then(response => {
      if (!response.ok) {
        errorText.classList.remove('unvisible');
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(response => {
      Notiflix.Notify.failure(`${response}`);

      throw new Error(response.status);
    });
}

fetchBreedsApi()
  .then(renderSelect)
  .finally(() => {
    Notiflix.Loading.remove();
  });

selectElement.addEventListener('change', function () {
  const breedId = selectElement.value;

  fetchCatByBreed(breedId)
    .then(renderCatDescription)
    .finally(() => {
      Notiflix.Loading.remove();
    });
});

function fetchCatByBreed(breedId) {
  Notiflix.Loading.hourglass('Loading...Please, wait...');

  return fetch(`${URL_BREED}${breedId}?${API_KEY}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }

      return response.json();
    })
    .catch(response => {
      Notiflix.Notify.failure(`${response}`);
      throw new Error(response.status);
    });
}
