import { put, takeEvery } from "@redux-saga/core/effects";
import {
  addToCart,
  addToCartErr,
  CartActions,
  CartActionsInterface,
} from "../actions/CartActions";

function* addToCartAsync(action: CartActionsInterface) {
  try {
    console.log(action);
    console.log("CartSAGA");
    yield put(addToCart(action.data));
  } catch (err) {
    yield put(addToCartErr());
  }
}

export function* watchAddProductToCartAsync() {
  yield takeEvery(CartActions.ADDTOCARTREQ, addToCartAsync);
}
