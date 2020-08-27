import React from 'react';
import {
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Box,
  Typography,
  Paper,
} from '@material-ui/core';

export default function RadioButtonsGroup({ name, label, classes }) {
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const genders = [
    { name: 'Nữ', value: 'female' },
    { name: 'Nam', value: 'male' },
    { name: 'Khác', value: 'other' },
  ];

  return (
    <Paper className={classes.container} elevation={0} square={false}>
      <Box>
        <Typography component={'span'} className={classes.text}>
          {label}
        </Typography>
      </Box>
      <Box component={'div'}>
        <FormControl component="fieldset">
          <RadioGroup
            row
            aria-label="gender"
            id={name}
            name={name}
            value={value}
            component={'span'}
            onChange={handleChange}>
            {genders.map(({ value, name }) => (
              <FormControlLabel
                value={value}
                control={<Radio color="primary" />}
                label={name}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Box>
    </Paper>
  );
}
