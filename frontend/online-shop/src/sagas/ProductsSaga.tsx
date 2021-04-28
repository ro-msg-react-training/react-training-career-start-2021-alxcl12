import {
  getProductsErr,
  getProductsOk,
  ProductActions,
} from "../actions/ProductActions";
import { Product } from "../interfaces/ProductInterface";
import { takeEvery, put, call } from "redux-saga/effects";
import { getAllProducts } from "../service/ProductService";

function* getAllProductsAsync() {
  try {
    const result: Product[] = yield call(() => getAllProducts());
    yield put(getProductsOk(result));
  } catch (err) {
    yield put(getProductsErr());
  }
}

export function* watchGetAllProductsAsync() {
  yield takeEvery(ProductActions.GETPRODUCTSREQ, getAllProductsAsync);
}
