import { productListStyle } from "../styles/ProductListStyle";
import { productItemStyle } from "../styles/ProductItemStyle";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import { Product } from "../interfaces/ProductInterface";
import { AppState, store } from "../store/Store";
import { createOrder } from "../service/ProductService";
import { addToCartReq, addToCart } from "../actions/CartActions";
import { Link } from "react-router-dom";

interface CartProductsProps {
  products: Product[];
  loaded: boolean;
}

export const CartProducts = (props: CartProductsProps) => {
  const style = productListStyle();
  const styleItems = productItemStyle();
  const items = store.getState().cart.products.map((product) => (
    <tr className={styleItems.tdStyle} key={product.id}>
      <td className={styleItems.tdStyle}>{product.category}</td>
      <td className={styleItems.tdStyle}>{product.name}</td>
      <td className={styleItems.tdStyle}>{product.price}</td>
    </tr>
  ));

  const handleCheckout = () => {
    var prodCart: { productId: number; quantity: number }[] = [];

    store.getState().cart.products.map((prod) => {
      prodCart.push({
        productId: prod.id,
        quantity: 1,
      });
    });

    var orders = [];
    orders.push({
      customer: "doej",
      products: prodCart,
    });

    createOrder(orders);
  };

  return (
    <div>
      <table className={style.tableStyle}>
        <thead className={style.tableStyle}>
          <tr>
            <th className={style.tableHeaderStyle}>Category</th>
            <th className={style.tableHeaderStyle}>Name</th>
            <th className={style.tableHeaderStyle}>Price</th>
          </tr>
        </thead>
        <tbody>{items}</tbody>
      </table>
      <Link to={"/"}>
        <Button className={style.tableStyle} onClick={handleCheckout}>
          Checkout
        </Button>
      </Link>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  products: state.cart.products,
  isLoading: state.cart.loaded,
});

export default connect(mapStateToProps, {
  addToCartReq,
  addToCart,
})(CartProducts);
