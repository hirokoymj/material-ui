import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

const useStyles = makeStyles(theme => ({
  // root: {
  //   flexGrow: 1,
  // },
}));


const RadioButtons = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState('female');

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
			<div>
				<FormControl component="fieldset" className={classes.formControl}>
					<FormLabel component="legend">Gender</FormLabel>
					<RadioGroup aria-label="gender" name="gender" value={value} onChange={handleChange}>
						<FormControlLabel value="female" control={<Radio />} label="Female" />
						<FormControlLabel value="male" control={<Radio />} label="Male" />
					</RadioGroup>
				</FormControl>								
			</div>
  );
}
export default RadioButtons;

