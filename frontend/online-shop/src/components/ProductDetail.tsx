import { Button } from "@material-ui/core";
import { productDetailStyle } from "../styles/ProductDetailStyle";
import ProductService from "../service/ProductService";
import React from "react";
import { useParams } from "react-router";

export const ProductDetail = (props: any) => {
  const style = productDetailStyle();

  var productService = new ProductService();

  const [data, setData] = React.useState({
    id: 0,
    name: "",
    price: "",
    description: "",
    category: "",
    imgUrl: "",
  });

  const { id } = useParams<{ id?: string | undefined }>();

  React.useEffect(() => {
    getProduct();
  }, []);

  function getProduct() {
    productService.getProductById(id).then((response) => {
      setData(response);
    });
  }

  return (
    <>
      <div>
        <h2 className={style.headingStyle}>Product: {data.name} </h2>
        <Button className={style.buttonStyle}>Edit</Button>
        <Button className={style.buttonStyle}>Add</Button>
        <Button
          className={style.buttonStyle}
          onClick={() => {
            console.log(data.id);
            productService.deleteProductById(data.id);
          }}
        >
          Delete
        </Button>
      </div>
      <div>
        <table>
          <tr>
            <td>Name</td>
            <td>{data.name}</td>
          </tr>
          <tr>
            <td>Category</td>
            <td>{data.category}</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>{data.price}</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>{data.description}</td>
          </tr>
        </table>
      </div>
    </>
  );
};
