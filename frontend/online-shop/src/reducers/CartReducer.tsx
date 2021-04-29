import { CartActions, CartActionsInterface } from "../actions/CartActions";
import { Product } from "../interfaces/ProductInterface";

export interface CartState {
  products: Product[];
  loaded: boolean;
}

const initialState: CartState = {
  products: [],
  loaded: false,
};

export const CartReducer = (
  state = initialState,
  action: CartActionsInterface
): CartState => {
  switch (action.type) {
    case CartActions.ADDTOCART:
      const prod = state.products;
      prod.push(action.data);
      return {
        ...state,
        products: prod,
        loaded: true,
      };
    case CartActions.ADDTOCARTREQ:
      return {
        ...state,
        loaded: false,
      };
    default:
      return state;
  }
};
