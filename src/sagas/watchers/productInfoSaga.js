import { takeLatest, call, put } from "redux-saga/effects";
import { GET_PRODUCTS_SAGA } from "../../actions/actionTypes";
import { getProducts } from "../../api/productApi";
import { setProducts } from "../../actions/productAction";

function* workerGetProductsSaga({ data }) {
  try {
    const response = yield call(getProducts);
    const { products } = response.data;
    yield put(setProducts(products));
  } catch (e) {
    console.log("Error Message ====>", e);
  }
}

export function* watchGetProductsSaga() {
  yield takeLatest(GET_PRODUCTS_SAGA, workerGetProductsSaga);
}
