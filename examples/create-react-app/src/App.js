import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ProTip from './ProTip';
import Button from '@material-ui/core/Button';				
import { makeStyles } from "@material-ui/styles";


const useStyles = makeStyles(theme => ({
	orangeBg:{
		backgroundColor: "orange",
		marginBottom: theme.spacing(10),
	}
}));


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const App = () => {
	const classes = useStyles();
  return (
    <Container maxWidth="sm" >
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App v4-beta example
				</Typography>
				<Button variant="contained" color="primary">
					Hello World
				</Button>				
				<Button variant="contained" color="secondary">
					Hello World
				</Button>				
        <ProTip />
        <Copyright />
			</Box>
			<Box component="div" m={1} className={classes.orangeBg}>
				<Typography variant="h1" component="h1" gutterBottom>
					box test
				</Typography>
			</Box>			
    </Container>
  );
}
export default App;
