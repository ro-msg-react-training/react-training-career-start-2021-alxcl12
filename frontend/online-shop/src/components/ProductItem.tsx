import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Button } from "@material-ui/core";
import MyTheme from "../theme/MyTheme";
import { productItemStyle } from "../styles/ProductItemStyle";
import { Link } from "react-router-dom";

function ProductItem(props: any) {
  const style = productItemStyle();

  return (
    <>
      <tr>
        <td className={style.tdStyle}> {props.category} </td>
        <td className={style.tdStyle}> {props.name} </td>
        <td className={style.tdStyle}> {props.price.toString()} </td>
        <td className={style.tdStyle}>
          {" "}
          <Link
            to={{ pathname: "/product/${props.id}", state: { product: props } }}
          >
            <Button>
              <ArrowForwardIosIcon
                style={{ color: MyTheme.palette.primary.main }}
              />{" "}
            </Button>{" "}
          </Link>
        </td>
      </tr>
    </>
  );
}

export default ProductItem;
