import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import orange from '@material-ui/core/colors/orange';
import brown from '@material-ui/core/colors/brown';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: red[500],
    },
    background: {
      default: brown
    }
    // ,
    // fillcolor:{
    //   default: green
    // }
  },
  typography: {
    htmlFontSize: 20,
    fontFamily: 'Verdana',
  },
});

export default theme;