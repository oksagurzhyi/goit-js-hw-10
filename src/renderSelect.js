const selectElement = document.querySelector('.breed-select');

export function renderSelect(data) {
  const markup = data
    .map(({ reference_image_id, name }) => {
      return `<option value="${reference_image_id}">${name}</option>`;
    })
    .join('');

  selectElement.insertAdjacentHTML('beforeend', markup);
}
