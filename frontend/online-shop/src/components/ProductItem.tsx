
function ProductItem(props : any){
    
    return (
        <tr>
            <td> {props.category} </td>
            <td> {props.name} </td>
            <td> {props.price.toString()} </td>
        </tr>
    );
};

export default ProductItem;