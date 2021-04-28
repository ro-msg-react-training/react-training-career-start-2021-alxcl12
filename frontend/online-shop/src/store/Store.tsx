import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { ProductsState } from "../reducers/ProductsReducer";
import { watchGetAllProductsAsync } from "../sagas/ProductsSaga";
import { watchAddProductToCartAsync } from "../sagas/CartSaga";
import ParentReducer from "../reducers/ParentReducer";
import { CartState } from "../reducers/CartReducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  ParentReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

function* rootSaga() {
  yield all([watchGetAllProductsAsync(), watchAddProductToCartAsync()]);
}

export interface AppState {
  products: ProductsState;
  cart: CartState;
}
