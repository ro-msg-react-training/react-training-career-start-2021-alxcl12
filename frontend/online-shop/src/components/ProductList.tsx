import ProductItem from "./ProductItem";
import { productListStyle } from "../styles/ProductListStyle";
import { Button } from "@material-ui/core";
import { connect, useDispatch } from "react-redux";
import { getProductsOk, getProductsReq } from "../actions/ProductActions";
import { AppState } from "../store/Store";
import { ProductsState } from "../reducers/ProductsReducer";
import { useEffect } from "react";
import { store } from "../store/Store";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MyTheme from "../theme/MyTheme";
import AddIcon from "@material-ui/icons/Add";

const mapStateToProps = (state: AppState) => ({
  products: state.products.products,
  loaded: state.products.loaded,
});

export const ProductList = (props: ProductsState) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsReq());
  }, []);

  const items = store
    .getState()
    .products.products.map((product) => (
      <ProductItem
        key={product.id.toString()}
        id={product.id}
        category={product.category}
        name={product.name}
        price={product.price}
        description={product.description}
      />
    ));

  const style = productListStyle();

  return (
    <>
      <h1 className={style.headingStyle}> Products </h1>

      <Link to={"/add"}>
        <Button className={style.buttonStyle}>
          <AddIcon style={{ color: MyTheme.palette.primary.main }} />
        </Button>
      </Link>
      <Link to={"/cart"}>
        <Button className={style.buttonStyle}>
          <ShoppingCartIcon style={{ color: MyTheme.palette.primary.main }} />
        </Button>
      </Link>
      <table className={style.tableStyle}>
        <thead className={style.tableHeaderStyle}>
          <tr className={style.tableHeaderStyle}>
            <th className={style.tableHeaderStyle}> Category </th>
            <th className={style.tableHeaderStyle}> Name </th>
            <th className={style.tableHeaderStyle}> Price </th>
            <th className={style.buttonColumnStyle}> </th>
          </tr>
        </thead>
        <tbody> {items} </tbody>
      </table>
    </>
  );
};

export default connect(mapStateToProps, {
  getProductsReq,
  getProductsOk,
})(ProductList);
