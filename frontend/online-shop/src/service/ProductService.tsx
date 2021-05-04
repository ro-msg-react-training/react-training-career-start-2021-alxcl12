import axios from "axios";

export const getAllProducts = async () => {
  const result = await axios
    .get("http://localhost:4000/products")
    .then((result) => {
      return result.data;
    });
  return result;
};

export const getProductById = async (id: any) => {
  const result = await axios
    .get("http://localhost:4000/products/" + id)
    .then((result) => {
      return result.data;
    });
  return result;
};

export const deleteProductById = async (id: any) => {
  const result = await axios.delete("http://localhost:4000/products/" + id);
  return result;
};

export const updateProductById = async (id: number, product: any) => {
  const result = await axios.put(
    "http://localhost:4000/products/" + id.toString(),
    product
  );

  return result;
};

export const createOrder = async (data: any) => {
  const result = await axios.post("http://localhost:4000/orders", data[0]);

  return result;
};

export const addProduct = async (data: any) => {
  const result = await axios.post("http://localhost:4000/products", data);

  return result;
};
