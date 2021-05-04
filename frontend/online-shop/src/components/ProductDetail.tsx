import { Button } from "@material-ui/core";
import { productDetailStyle } from "../styles/ProductDetailStyle";
import React from "react";
import { useParams } from "react-router";
import { deleteProductById, getProductById } from "../service/ProductService";
import { addToCartReq } from "../actions/CartActions";
import { useDispatch } from "react-redux";
import MyTheme from "../theme/MyTheme";
import DeleteIcon from "@material-ui/icons/Delete";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import EditIcon from "@material-ui/icons/Edit";
import { Link } from "react-router-dom";

export const ProductDetail = (props: any) => {
  const style = productDetailStyle();

  const [data, setData] = React.useState({
    id: 0,
    name: "",
    price: "",
    description: "",
    category: "",
    imgUrl: "",
    image: "",
  });

  const { id } = useParams<{ id?: string | undefined }>();

  React.useEffect(() => {
    getProduct();
  }, []);

  function getProduct() {
    getProductById(id).then((response) => {
      setData(response);
    });
  }

  const dispatch = useDispatch();
  const addToCart = (prod: any) => {
    dispatch(addToCartReq(prod));
  };

  return (
    <>
      <div>
        <h2 className={style.headingStyle}>Product: {data.name} </h2>

        <Link to={"/update/" + data.id}>
          <Button className={style.buttonStyle}>
            <EditIcon style={{ color: MyTheme.palette.primary.main }} />
          </Button>
        </Link>
        <Link to={"/products"}>
          <Button
            className={style.buttonStyle}
            onClick={() => {
              addToCart(data);
            }}
          >
            <AddShoppingCartIcon
              style={{ color: MyTheme.palette.primary.main }}
            />
          </Button>
        </Link>
        <Link to={"/products"}>
          <Button
            className={style.buttonStyle}
            onClick={() => {
              deleteProductById(data.id);
            }}
          >
            <DeleteIcon style={{ color: MyTheme.palette.primary.main }} />
          </Button>
        </Link>
      </div>
      <div>
        <table className={style.tableStyle}>
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
          <tr>
            <td>
              <img src={data.image}></img>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};
