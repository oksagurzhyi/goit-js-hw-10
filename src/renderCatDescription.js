const divElement = document.querySelector('.cat-info');

export function renderCatDescription(dataCat) {
  const markupCatDesc = dataCat.breeds
    .map(({ description, temperament, name }) => {
      return `<img src=${dataCat.url} alt="${name}" width="400"/><div class="text-container"><p><span class="text">Breeds:</span> ${name}</p><p><span class="text">Description:</span> ${description}</p><p><span class="text">Temperament:</span> ${temperament}</p></div>`;
    })
    .join('');

  divElement.innerHTML = '';
  divElement.insertAdjacentHTML('beforeend', markupCatDesc);
}
