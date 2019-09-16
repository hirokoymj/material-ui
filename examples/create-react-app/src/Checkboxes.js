import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(theme => ({
  // root: {
  //   flexGrow: 1,
  // },
}));

const Checkboxes = () => {
  const [state, setState] = React.useState({
    mon: true,
    tue: false,
		wed: false,
		fri: true,
		sat: false,
		sun: false
	});		
  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
	};	
	const classes = useStyles();

  return (
		<Fragment>
			{/** (1) */}
			<div>
				<FormControl component="fieldset">
					<FormLabel component="legend">Schedule #1</FormLabel>
					<FormGroup row>
						<FormControlLabel
							control={
								<Checkbox checked={state.mon} onChange={handleChange('mon')} value="mon" />
							}
							label="Mon"
						/>
						<FormControlLabel
							control={
								<Checkbox checked={state.tue} onChange={handleChange('tue')} value="tue" />
							}
							label="Tue"
						/>
						<FormControlLabel
							control={
								<Checkbox checked={state.wed} onChange={handleChange('wed')} value="wed" />
							}
							label="Wed"
						/>																				
					</FormGroup>	
			</FormControl>	
			</div>
			{/** (2) */}
			<div>
				<FormControl component="fieldset">
					<FormLabel component="legend">Schedule #2</FormLabel>
					<FormGroup>
						<FormControlLabel
							control={
								<Checkbox checked={state.fri} onChange={handleChange('fri')} value="fri" />
							}
							label="Fri"
						/>
						<FormControlLabel
							control={
								<Checkbox checked={state.sat} onChange={handleChange('sat')} value="sat" color="primary"/>
							}
							label="Sat"
						/>
						<FormControlLabel
							control={
								<Checkbox checked={state.sun} onChange={handleChange('sun')} value="sun" />
							}
							label="Sun"
						/>																				
					</FormGroup>			
				</FormControl>
			</div>
		</Fragment>
  );
}
export default Checkboxes;

