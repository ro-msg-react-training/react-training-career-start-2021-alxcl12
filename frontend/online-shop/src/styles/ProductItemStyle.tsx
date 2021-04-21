import { makeStyles } from '@material-ui/core'

export const productItemStyle = makeStyles(theme =>({

    tdStyle:{
        border: '1px solid',
        borderCollapse: 'collapse',
        margin: '50 px auto',
        fontFamily: theme.typography.fontFamily,
        fontSize: theme.typography.fontSize,
        backgroundColor: theme.palette.primary.main
    }
}));