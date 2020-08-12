import { SET_PRODUCTS } from "../actions/actionTypes";

const initialState = {
  products: []
};

export default function employeeInfoReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload.products
      };
    default:
      return state;
  }
}
