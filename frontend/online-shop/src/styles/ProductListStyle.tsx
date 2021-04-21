import { makeStyles } from "@material-ui/core";

export const productListStyle = makeStyles( theme  =>({
    tableStyle: {
        width: '750px',
        border: '1px solid',
        borderCollapse: 'collapse',
        margin: '50px auto',
        backgroundColor: theme.palette.primary.main,
        fontFamily: theme.typography.fontFamily,
        fontSize: theme.typography.fontSize
    }
}));