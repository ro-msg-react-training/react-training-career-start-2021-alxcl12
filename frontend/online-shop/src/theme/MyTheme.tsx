import {createMuiTheme} from '@material-ui/core/styles'
import '../styles/Fonts.css'


const MyTheme = createMuiTheme({
    palette:{
        primary:{
            main: '#a01441'
        },
    
    },

    typography:{
        fontFamily: 'OpenSans',
        fontSize: 18
    }
});

export default MyTheme;