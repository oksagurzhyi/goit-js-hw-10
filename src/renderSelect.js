import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

const selectElement = document.querySelector('#single');

export function renderSelect(data) {
  const markup = data
    .map(({ reference_image_id, name }) => {
      return `<option value="${reference_image_id}">${name}</option>`;
    })
    .join('');

  selectElement.insertAdjacentHTML('beforeend', markup);

  new SlimSelect({
    select: '#single',
    settings: {
      placeholderText: 'Please, choose a breed',
    },
  });
}
