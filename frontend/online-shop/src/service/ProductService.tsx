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
