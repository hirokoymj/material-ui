import React, { Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
		width: 200,
		color: "red"
  },
}));


export const AddressForm = () =>{
	const classes = useStyles();

	return (
		<Fragment>
			<Grid container spacing={5}>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						name="firstName"
						id="first-name"
						label="First Name"
						fullWidth
						variant="outlined"
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						name="lastName"
						id="last-number"
						label="Last Name"
						fullWidth
						variant="outlined"
						inputProps={{style: { textAlign: 'center', color: "green" }}} // the change is here
						//className={classes.textField}
						InputLabelProps={{
							style:{ textAlign: 'center', color: "red"}
						}}						
					/>								
				</Grid>
			</Grid>
			<Grid container spacing="5">
				<Grid item xs={12}>
					<TextField
						required
						name="address"
						id="address"
						label="Address"
						fullWidth
						variant="outlined"
					/>
				</Grid>
			</Grid>
		</Fragment>
	)
}

