import { Product } from "../interfaces/ProductInterface";

export enum CartActions {
  ADDTOCARTREQ = "ADDTOCARTREQ",
  ADDTOCART = "ADDTOCART",
  ADDTOCARTERR = "ADDTOCARTERR",
}

export interface CartActionsInterface {
  type: string;
  data: Product;
}

export const addToCartReq = (product: Product) => {
  return {
    type: "ADDTOCARTREQ",
    data: product,
  };
};

export const addToCart = (product: Product) => {
  return {
    type: "ADDTOCART",
    data: product,
  };
};

export const addToCartErr = () => {
  return {
    type: "ADDTOCARTERR",
  };
};
