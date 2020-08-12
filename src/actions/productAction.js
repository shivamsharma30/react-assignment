import { GET_PRODUCTS_SAGA, SET_PRODUCTS } from "./actionTypes";

export function getProductsSaga() {
  return {
    type: GET_PRODUCTS_SAGA
  };
}
export function setProducts(products) {
  return {
    type: SET_PRODUCTS,
    payload: { products }
  };
}
