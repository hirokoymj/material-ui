import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

import Checkboxes from "./Checkboxes";
import RadioButtons from "./RadioButtons";
import { PaymentForm } from "./PaymentForm";
import { AddressForm } from "./AddressForm";
//import { SelectBox } from "./SelectBox";
import { SelectBox } from "./SelectBox";
import { ButtonPosition } from "./ButtonPosition";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
	lightColor: {
		backgroundColor: theme.palette.primary.light
	},
	paper:{
		padding: theme.spacing(2)
	},
	footer: {
		backgroundColor: 'pink'
	}	
}));


const AppTest3 = () => {
	const classes = useStyles();

  return (
		<Fragment>
			<CssBaseline />
				<AppBar position="sticky" color="primary">
					<Toolbar >
						<IconButton edge="start" color="secondary" aria-label="menu">
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" className={classes.title}>
							Album layout
						</Typography>
						<Button color="inherit">Login</Button>
					</Toolbar>
				</AppBar>				
			<main>
				{/* Form Test */}
				<Container maxWidth="md">
					<Paper className={classes.paper}>
						<Checkboxes />
						<RadioButtons />
						<PaymentForm />
						<AddressForm />
						<SelectBox />
						<ButtonPosition />
					</Paper>
				</Container>				

			</main>
			<footer className={classes.footer}>
				<Typography variant="h6" /*component="h6"*/ align="center" gutterBottom>
					Footer
				</Typography>
				<Typography variant="body1" component="p" align="center" color="textSecondary" gutterBottom>
				Something here to give the footer a purpose!
				</Typography>				
				<Typography variant="caption" component="p" align="center" color="textPrimary" gutterBottom>
					Copyright © Your Website 2019.
				</Typography>				
			</footer>
		</Fragment>
  );
}

export default AppTest3;



