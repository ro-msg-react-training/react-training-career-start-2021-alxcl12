import {createMuiTheme} from '@material-ui/core/styles'
import '../styles/Fonts.css'


const MyTheme = createMuiTheme({
    palette:{
        primary:{
            main: '#a01441'
        },
    
    },

    typography:{
        fontFamily: '"OpenSans" bold',
        fontSize: 20
    }
});

export default MyTheme;