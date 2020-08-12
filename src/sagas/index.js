import { all, fork } from "redux-saga/effects";
import { watchGetProductsSaga } from "./watchers/productInfoSaga";

export default function* root() {
  yield all([fork(watchGetProductsSaga)]);
}
