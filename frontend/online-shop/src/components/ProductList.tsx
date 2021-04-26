import ProductItem from "./ProductItem";
import { productListStyle } from "../styles/ProductListStyle";
import ProductService from "../service/ProductService";
import React from "react";

// const data = [
//   {
//     id: 0,
//     name: "p1",
//     category: "c1",
//     price: 2,
//   },
//   {
//     id: 1,
//     name: "p2",
//     category: "c1",
//     price: 4,
//   },
//   {
//     id: 2,
//     name: "p3",
//     category: "c2",
//     price: 8,
//   },
//   {
//     id: 3,
//     name: "p4",
//     category: "c2",
//     price: 16,
//   },
//   {
//     id: 4,
//     name: "p5",
//     category: "c4",
//     price: 32,
//   },
// ];

function ProductList(props: any) {
  var productService = new ProductService();

  const [data, setData] = React.useState<any[]>([]);

  React.useEffect(() => {
    getProducts();
  }, []);

  function getProducts() {
    productService.getAllProducts().then((response) => {
      setData(response);
    });
  }

  const items = data.map((product) => (
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
