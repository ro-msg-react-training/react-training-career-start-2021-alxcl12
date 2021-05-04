import { Product } from "../interfaces/ProductInterface";

export enum ProductActions {
  GETPRODUCTSREQ = "GETPRODUCTSREQUEST",
  GETPRODUCTSOK = "GETPRODUCTSOK",
  GETPRODUCTSERR = "GETPRODUCTSERR",
}

export interface ProductActionInterface {
  type: string;
  data: Product[];
}

export const getProductsReq = () => {
  return {
    type: "GETPRODUCTSREQUEST",
  };
};

export const getProductsOk = (products: Product[]) => {
  return {
    type: "GETPRODUCTSOK",
    data: products,
  };
};

export const getProductsErr = () => {
  return {
    type: "GETPRODUCTSERR",
  };
};
