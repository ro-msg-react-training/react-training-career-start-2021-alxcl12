import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { addProduct } from "../service/ProductService";
import { productDetailStyle } from "../styles/ProductDetailStyle";

export const ProductAdd = (props: any) => {
  const style = productDetailStyle();
  const product = {
    name: "",
    price: 0,
    description: "",
    category: "",
    image: "",
  };

  const handleUpdate = () => {
    addProduct(product);
  };

  return (
    <div>
      <form className={style.tableStyle}>
        <label>Name</label>
        <input
          type="text"
          onChange={(event) => (product.name = event.target.value)}
        ></input>
        <br></br>
        <label>Category</label>
        <input
          type="text"
          onChange={(event) => (product.category = event.target.value)}
        ></input>
        <br></br>
        <label>Image</label>
        <input
          type="text"
          onChange={(event) => (product.image = event.target.value)}
        ></input>
        <br></br>
        <label>Price</label>
        <input
          type="text"
          onChange={(event) =>
            (product.price = (event.target.value as unknown) as number)
          }
        ></input>
        <br></br>
        <label>Description</label>
        <input
          type="text"
          onChange={(event) => (product.description = event.target.value)}
        ></input>
      </form>

      <Link to={"/"}>
        <Button>Cancel</Button>
      </Link>
      <Link to={"/"}>
        <Button onClick={handleUpdate}>Save</Button>
      </Link>
    </div>
  );
};
