import { renderSelect } from './renderSelect';

const URL = 'https://api.thecatapi.com/v1/breeds';
const URL_BREED = 'https://api.thecatapi.com/v1/images/';
const API_KEY =
  'live_JvZNAD8kUuHK4iFoJ2ccG6lyOiWEHdf6qBABg0zzY8OeAUp3Gat3HA7laXkJ3mfy';
let breedId;

const selectElement = document.querySelector('.breed-select');
const divElement = document.querySelector('.cat-info');

export function fetchBreedsApi() {
  return fetch(`${URL}?${API_KEY}`)
    .then(response => {
      return response.json();
    })
    .catch(error => {
      console.log(error);
      throw new Error(response.status);
    });
}

fetchBreedsApi().then(renderSelect);

selectElement.addEventListener('change', function () {
  const breedId = selectElement.value;
  console.log(breedId);
  fetchCatByBreed(breedId).then(renderCatDescription);
});

function fetchCatByBreed(breedId) {
  return fetch(`${URL_BREED}${breedId}?${API_KEY}`)
    .then(response => {
      console.log(response);
      return response.json();
    })
    .catch(error => {
      console.log(error);
      throw new Error(response.status);
    });
}

export function renderCatDescription(dataCat) {
  console.log(dataCat);
  const markupCatDesc = dataCat.breeds
    .map(({ description, temperament, name }) => {
      return `<p>${name}</p><img src=${dataCat.url} alt="${name}" width="300"/><p>${description}</p><p>${temperament}</p>`;
    })
    .join('');
  console.log(markupCatDesc);
  divElement.innerHTML = '';
  divElement.insertAdjacentHTML('beforeend', markupCatDesc);
}
