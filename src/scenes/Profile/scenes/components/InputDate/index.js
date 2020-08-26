import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Paper, Box, Typography } from '@material-ui/core';
import { KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';

/*
  Function to get current date
  return {string} - current date in format dd/mm/yyyy
*/
function getCurrentDate() {
  const date = new Date();
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
}

function InputDate({ name, label, classes }) {
  const defaultValue = getCurrentDate();
  console.log(defaultValue);
  return (
    <Paper className={classes.container} elevation={0} square={false}>
      <Box>
        <Typography className={classes.text}>{label}</Typography>
      </Box>
      <KeyboardDatePicker
        margin="normal"
        id="date-picker-dialog"
        label={label}
        format="MM/dd/yyyy"
        name={name}
        value={defaultValue}
        // onChange={handleDateChange}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
    </Paper>
  );
}

export default InputDate;
