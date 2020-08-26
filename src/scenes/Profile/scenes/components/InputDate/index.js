import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Paper, Box, Typography } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

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
  const [selectedDate, setSelectedDate] = useState(defaultValue);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  console.log(defaultValue);
  return (
    <Paper className={classes.container} elevation={0} square={false}>
      <Box>
        <Typography className={classes.text}>{label}</Typography>
      </Box>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </MuiPickersUtilsProvider>
    </Paper>
  );
}

export default InputDate;
