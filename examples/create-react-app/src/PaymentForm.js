import React, { Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

export const PaymentForm = () =>{
	return (
		<Grid container spacing={5}>
			<Grid item xs={12} sm={6}>
				<TextField
					required
					name="cardName"
					id="card-name"
					label="Name on card"
					fullWidth
				/>
			</Grid>
			<Grid item xs={12} sm={6}>
				<TextField
					required
					name="cardNumber"
					id="card-number"
					label="Card Number"
					fullWidth
					type="number"
				/>								
			</Grid>
	</Grid>		
	)
}

