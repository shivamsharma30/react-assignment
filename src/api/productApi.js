import axios from 'axios';

export function getProducts() {
  return axios.get(
    'https://run.mocky.io/v3/fc503502-857f-4a89-ad27-5ee79e52c668'
  );
}

//old api
//"https://run.mocky.io/v3/30821faa-8699-474b-b09f-8d8de54cfb85"
