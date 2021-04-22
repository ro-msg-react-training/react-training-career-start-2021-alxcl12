import { Button } from "@material-ui/core";
import { productDetailStyle } from "../styles/ProductDetailStyle";

export const ProductDetail = (props: any) => {
  const style = productDetailStyle();

  const { product } = props.location.state;

  return (
    <>
      <div>
        <h2 className={style.headingStyle}>Product: {product.name}</h2>
        <Button className={style.buttonStyle}> Edit </Button>
        <Button className={style.buttonStyle}>Add </Button>
      </div>

      <div>
        <table>
          <tr>
            <td>Name</td>
            <td> {product.name}</td>
          </tr>

          <tr>
            <td>Category</td>
            <td>{product.category}</td>
          </tr>

          <tr>
            <td>Price</td>
            <td>{product.price}</td>
          </tr>

          <tr>
            <td>Description</td>
            <td>{product.description}</td>
          </tr>
        </table>
      </div>
    </>
  );
};
