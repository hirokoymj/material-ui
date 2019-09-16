import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';

import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
		flexGrow: 1,
	},
	lightColor: {
		backgroundColor: theme.palette.primary.light
	},
	// mainCallButton: {
	// 	marginRight: "20px"
	// },
	subTitle:{
		marginBottom: theme.spacing(3)
	},
	mainTitle:{
		marginBottom: theme.spacing(3)
	},
	mainContainer:{
		marginTop: "34px"
	},
  heroContent: {
    //backgroundColor: theme.palette.background.paper,
    backgroundColor: 'pink',
    padding: theme.spacing(8, 0, 6),
	},
  heroButton: {
    backgroundColor: 'green',
    padding: theme.spacing(8, 0, 6),
	},
	footer: {
    padding: theme.spacing(6, 0),
    backgroundColor: 'orange',
	},
	myAppBar: {
		boxShadow: "none"
	},
	bioSection: {
    //padding: theme.spacing(4, 0),
	},
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(4,0),
	},
	paper:{
		padding: theme.spacing(2)
	},
	buttons: {
		display: "flex",
		justifyContent: "flex-end"
	},
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },	
}));


const AppTest2 = () => {
	const [name, setName] = React.useState('placeholder');
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
	});	
	const [value, setValue] = React.useState('female');


  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };	
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
				<div className={classes.heroContent}>
					<Container maxWidth="md">
						<Paper className={classes.paper}>
							<Typography variant="h4" component="h1" align="center" gutterBottom>
							Checkout
							</Typography>
							<Typography component="p" align="center">
								Paper can be used to build surface or other elements for your application.
							</Typography>
							<Typography component="h6" variant="h6" align="left">
								Payment method
							</Typography>
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
							<Grid container spacing={5}>
								<Grid item xs={12} sm={6}>
									<TextField
										required
										name="cardName"
										id="card-name"
										label="Name on card"
										fullWidth
										variant="outlined"
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
										variant="outlined"
									/>								
								</Grid>
							</Grid>
							<Grid container spacing={5}>
								<Grid item xs={12} sm={6}>
									<TextField
										id="simple-start-adornment"
										InputProps={{
											startAdornment: <InputAdornment position="start">$</InputAdornment>,
										}}
										fullWidth
										variant="outlined"
									/>								
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										id="outlined-select-currency"
										select
										label="US State"
										className={classes.textField}
										//value={values.currency}
										//onChange={handleChange('currency')}
										SelectProps={{
											MenuProps: {
												className: classes.menu,
											},
										}}
										variant="outlined"
										fullWidth
									>
											<MenuItem key={1} value={"CA"}>
												CA
											</MenuItem>
											<MenuItem key={1} value={"AZ"}>
												AZ
											</MenuItem>
											<MenuItem key={1} value={"OR"}>
												OR
											</MenuItem>
											<MenuItem key={1} value={"DC"}>
												DC
											</MenuItem>
											<MenuItem key={1} value={"NY"}>
												NY
											</MenuItem>
									</TextField>
								</Grid>
							</Grid>							
							<Grid container spacing={5} style={{border:"1px solid green"}}>								
								<Grid item xs={12}>
									<Checkbox
										checked={state.checkedA}
										onChange={handleChange('checkedA')}
										value="checkedA"
										inputProps={{
											'aria-label': 'primary checkbox',
										}}
									/>
									<Checkbox
										checked={state.checkedB}
										onChange={handleChange('checkedB')}
										value="checkedB"
										color="primary"
										inputProps={{
											'aria-label': 'secondary checkbox',
										}}
									/>
								</Grid>
							</Grid>

							<Grid container spacing={5} >								
								<Grid item xs={4} >
									<FormGroup row>
										<FormControlLabel
											control={
												<Checkbox checked={state.checkedA} onChange={handleChange('checkedA')} value="checkedA" />
											}
											label="Mon"
										/>
										<FormControlLabel
											control={
												<Checkbox checked={state.checkedA} onChange={handleChange('checkedA')} value="checkedA" color="primary"/>
											}
											label="Mon"
										/>
										<FormControlLabel
											control={
												<Checkbox checked={state.checkedA} onChange={handleChange('checkedA')} value="checkedA" />
											}
											label="Mon"
										/>																				
									</FormGroup>	
								</Grid>
								<Grid item xs={4}>
									<FormLabel component="legend">Assign responsibility</FormLabel>
									<FormGroup>
										<FormControlLabel
											control={
												<Checkbox checked={state.checkedA} onChange={handleChange('checkedA')} value="checkedA" />
											}
											label="Mon"
										/>
										<FormControlLabel
											control={
												<Checkbox checked={state.checkedA} onChange={handleChange('checkedA')} value="checkedA" color="primary"/>
											}
											label="Mon"
										/>
										<FormControlLabel
											control={
												<Checkbox checked={state.checkedA} onChange={handleChange('checkedA')} value="checkedA" />
											}
											label="Mon"
										/>																				
									</FormGroup>								
								</Grid>
								<Grid item xs={4}>
									<FormControl component="fieldset" className={classes.formControl}>
										<FormLabel component="legend">Gender</FormLabel>
										<RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
											<FormControlLabel value="female" control={<Radio />} label="Female" />
											<FormControlLabel value="male" control={<Radio />} label="Male" />
										</RadioGroup>
									</FormControl>								
								</Grid>
							</Grid>							

							<div className={classes.buttons}>
								<Button className={classes.button}>
									Back
								</Button>
								<Button variant="contained" color="primary" className={classes.button}>
									Next
								</Button>		
							</div>
						</Paper>						
					</Container>
				</div>


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

export default AppTest2;


// <Grid item xs={12}>
// <FormGroup row>
// 	<FormControlLabel
// 		control={
// 			<Checkbox checked={state.checkedA} onChange={handleChange('checkedA')} value="checkedA" />
// 		}
// 		label="Mon"
// 	/>
// 	<FormControlLabel
// 		control={
// 			<Checkbox checked={state.checkedA} onChange={handleChange('checkedA')} value="checkedA" />
// 		}
// 		label="Tue"
// 	/>
// 	<FormControlLabel
// 		control={
// 			<Checkbox checked={state.checkedA} onChange={handleChange('checkedA')} value="checkedA" />
// 		}
// 		label="Wed"
// 	/>																					
// 	<FormControlLabel
// 		control={
// 			<Checkbox checked={state.checkedA} onChange={handleChange('checkedA')} value="checkedA" />
// 		}
// 		label="Thr"
// 	/>																					
// </FormGroup>								
// </Grid>
