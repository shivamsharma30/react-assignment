import { ADD_PRODUCT_IN_CART, REMOVE_PRODUCT_FROM_CART } from "./actionTypes";

export function addProductInCart(product) {
  return {
    type: ADD_PRODUCT_IN_CART,
    payload: product
  };
}

export function removeProductFromCart(product) {
  return {
    type: REMOVE_PRODUCT_FROM_CART,
    payload: product
  };
}
