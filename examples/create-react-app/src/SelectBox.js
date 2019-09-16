import React, { Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

const genders = [
  {
    value: "M",
    label: "Male"
  },
  {
    value: "F",
    label: "Female"
  },
  {
    value: "O",
    label: "Other"
  }
];

const useStyles = makeStyles(theme => ({
  // root: {
  //   flexGrow: 1,
	// },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 100,
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
		width: 100,
	},
	inputComponent: {
    height: '30px',
    width:  '71px',
    border: '1px solid #D3D4D0',
    borderRadius: '5px',
    backgroundColor: '#FFFFFF',
    boxShadow: '0 1px 0 0 rgba(170,170,170,0.01)'
	},
	inputText: {
			color: 'rgba(0,0,0,0.87)',
			fontSize: '16px',
			letterSpacing: '0.5px',
			lineHeight: '28px',
			textAlign: 'center',
	}
}));

export const SelectBox = () =>{
  const classes = useStyles();
  const [values, setValues] = React.useState({
		currency: 'JPY',
		state: "NY"
	});
	
  const [gender, setGender] = React.useState("");	


  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
	};
		
	return (
		<Fragment>
			<Grid container spacing={5}>
				<Grid item xs={12} sm={6}>
					<TextField
						id="outlined-select-gender"
						select
						label={gender === "" ? "Gender" : ""}
						className={classes.textField}
						value={gender}
						onChange={handleChange}
						InputLabelProps={{ shrink: false }}
						SelectProps={{
							MenuProps: {
								className: classes.menu
							},
						}}
						margin="normal"
						variant="outlined"
						inputProps={{style: { textAlign: 'center', color: "green" }}} // the change is here
					>
						{genders.map(option => (
							<MenuItem key={option.value} value={option.value}>
								{option.label}
							</MenuItem>
						))}
					</TextField>

					<TextField type="number" 
						id={'hiroko'} 
						inputProps={{min: 0, style: { textAlign: 'center' }}} // the change is here
						InputProps={classes.inputText}  
						className={classes.inputComponent} 
						defaultValue={"hiroko"}
					 />


				</Grid>
				<Grid item xs={12} sm={6}>

				</Grid>
			</Grid>
		</Fragment>
	)
}

