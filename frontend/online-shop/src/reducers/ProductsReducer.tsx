import {
  ProductActionInterface,
  ProductActions,
} from "../actions/ProductActions";
import { Product } from "../interfaces/ProductInterface";

export interface ProductsState {
  products: Product[];
  loaded: boolean;
}

const InitialState: ProductsState = {
  products: [],
  loaded: false,
};

export const ProductsReducer = (
  state = InitialState,
  action: ProductActionInterface
): ProductsState => {
  switch (action.type) {
    case ProductActions.GETPRODUCTSOK:
      return {
        ...state,
        products: action.data,
        loaded: true,
      };
    case ProductActions.GETPRODUCTSREQ:
      return {
        ...state,
        loaded: false,
      };
    default:
      return state;
  }
};
