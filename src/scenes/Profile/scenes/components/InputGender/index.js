import React, { useState } from 'react';
import {
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Box,
  Typography,
  Paper,
} from '@material-ui/core';

export default function RadioButtonsGroup({
  name,
  label,
  classes,
  data,
  setData,
}) {
  const [value, setValue] = useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
    setData({ ...data, gender: event.target.value });
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
            onChange={(e) => handleChange(e)}>
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
