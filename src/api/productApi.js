import axios from "axios";

export function getProducts() {
  return axios.get(
    "https://run.mocky.io/v3/30821faa-8699-474b-b09f-8d8de54cfb85"
  );
}
