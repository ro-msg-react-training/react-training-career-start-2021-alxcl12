import ProductItem from './ProductItem';
import {ThemeProvider} from '@material-ui/styles';
import { productListStyle } from '../styles/ProductListStyle'
import MyTheme from '../theme/MyTheme';

var data = [
    {
        id: 0,
        name: 'p1',
        category: 'c1',
        price: 2
    },
    {
        id: 1,
        name: 'p2',
        category: 'c1',
        price: 4
    },
    {
        id: 2,
        name: 'p3',
        category: 'c2',
        price: 8
    },
    {
        id: 3,
        name: 'p4',
        category: 'c2',
        price: 16
    },
    {
        id: 4,
        name: 'p5',
        category: 'c4',
        price: 32
    }
]


function ProductList(props: any){
    const items = data.map((product) =>
    <ProductItem key={product.id.toString()}
    id={product.id}
    category={product.category}
    name={product.name}
    price={product.price}/>
    );

    const style = productListStyle();

    return (
        <ThemeProvider theme = {MyTheme}>
            <table className = {style.tableStyle}>
                <thead className = {style.tableStyle}>
                    <tr className = {style.tableStyle}>
                        <th className = {style.tableStyle}> Category </th>
                        <th className = {style.tableStyle}> Name </th>
                        <th className = {style.tableStyle}> Price </th>
                    </tr>
                </thead>
                <tbody> {items} </tbody>
            </table>
        </ThemeProvider>
    )
}

export default ProductList;