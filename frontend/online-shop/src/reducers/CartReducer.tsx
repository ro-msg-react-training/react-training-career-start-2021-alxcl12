import { CartActions, CartActionsInterface } from "../actions/CartActions";
import { Product } from "../interfaces/ProductInterface";

export interface CartState {
  products: Product[];
}

const initialState: CartState = {
  products: [],
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
      };
    case CartActions.ADDTOCARTREQ:
      return {
        ...state,
      };
    default:
      return state;
  }
};
