import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
			main: '#3f51b5',
			light: '#7986cb'
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: 'aqua',
    },
	},
  inputCenter: {
    textAlign: "center",
    color: "red"
  }	
});
console.log(theme);
export default theme;
