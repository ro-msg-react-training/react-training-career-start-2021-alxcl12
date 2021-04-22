import ProductItem from "./ProductItem";
import { ThemeProvider } from "@material-ui/styles";
import { productListStyle } from "../styles/ProductListStyle";
import MyTheme from "../theme/MyTheme";
import { CssBaseline } from "@material-ui/core";

var data = [
  {
    id: 0,
    name: "p1",
    category: "c1",
    price: 2,
  },
  {
    id: 1,
    name: "p2",
    category: "c1",
    price: 4,
  },
  {
    id: 2,
    name: "p3",
    category: "c2",
    price: 8,
  },
  {
    id: 3,
    name: "p4",
    category: "c2",
    price: 16,
  },
  {
    id: 4,
    name: "p5",
    category: "c4",
    price: 32,
  },
];

function ProductList(props: any) {
  const items = data.map((product) => (
    <ProductItem
      key={product.id.toString()}
      id={product.id}
      category={product.category}
      name={product.name}
      price={product.price}
    />
  ));

  const style = productListStyle();

  return (
    <>
      <h1 className={style.headingStyle}> Products </h1>

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
}

export default ProductList;
