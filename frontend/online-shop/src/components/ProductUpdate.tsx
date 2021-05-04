import { Button } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { updateProductById, getProductById } from "../service/ProductService";
import { productDetailStyle } from "../styles/ProductDetailStyle";

export const ProductUpdate = (props: any) => {
  const style = productDetailStyle();

  const [data, setData] = React.useState({
    id: 0,
    name: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });
  const product = data;

  const { id } = useParams<{ id?: string | undefined }>();

  React.useEffect(() => {
    getProduct();
  }, []);

  function getProduct() {
    getProductById(id).then((response) => {
      setData(response);
    });
  }

  const handleUpdate = () => {
    updateProductById(data.id, product);
  };

  return (
    <div>
      <form className={style.tableStyle}>
        <label>Name</label>
        <input
          type="text"
          defaultValue={data.name}
          onChange={(event) => (product.name = event.target.value)}
        ></input>
        <br></br>
        <label>Category</label>
        <input
          type="text"
          defaultValue={data.category}
          onChange={(event) => (product.category = event.target.value)}
        ></input>
        <br></br>
        <label>Image</label>
        <input
          type="text"
          defaultValue={data.image}
          onChange={(event) => (product.image = event.target.value)}
        ></input>
        <br></br>
        <label>Price</label>
        <input
          type="text"
          defaultValue={data.price}
          onChange={(event) => (product.price = event.target.value)}
        ></input>
      </form>
      <Link to={"/product/" + data.id}>
        <Button>Cancel</Button>
      </Link>
      <Link to={"/product/" + data.id}>
        <Button onClick={handleUpdate}>Save</Button>
      </Link>
    </div>
  );
};
