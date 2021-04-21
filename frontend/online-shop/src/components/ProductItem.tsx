import {ThemeProvider} from '@material-ui/styles';
import MyTheme from '../theme/MyTheme';
import { productItemStyle } from '../styles/ProductItemStyle'


function ProductItem(props : any){
    const style = productItemStyle();

    return (
        <ThemeProvider theme = {MyTheme}>
            <tr>
                <td className={style.tdStyle}> {props.category} </td>
                <td className={style.tdStyle}> {props.name} </td>
                <td className={style.tdStyle}> {props.price.toString()} </td>
            </tr>
        </ThemeProvider>
    );
};

export default ProductItem;