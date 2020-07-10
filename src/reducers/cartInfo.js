import {
  ADD_PRODUCT_IN_CART,
  REMOVE_PRODUCT_FROM_CART
} from "../actions/actionTypes";

const initialState = {
  cartProducts: []
};

export default function cartInfoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT_IN_CART:
      const oldProduct = state.cartProducts.find(
        ({ id }) => id === action.payload.id
      );
      let newCartArr = [];
      if (oldProduct) {
        newCartArr = state.cartProducts.map(product => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              selectedQty: product.selectedQty + action.payload.selectedQty
            };
          }
          return product;
        });
      }
      const tempProductArr = oldProduct
        ? newCartArr
        : [action.payload, ...state.cartProducts];
      return {
        ...state,
        cartProducts: tempProductArr
      };
    case REMOVE_PRODUCT_FROM_CART:
      let removedProductArr = state.cartProducts.filter(function(obj) {
        return obj.id !== action.payload.id;
      });
      return {
        ...state,
        cartProducts: removedProductArr
      };
    default:
      return state;
  }
}
