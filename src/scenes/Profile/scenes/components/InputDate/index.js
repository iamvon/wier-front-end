import React, { useState } from 'react';
import { TextField, Paper, Box, Typography } from '@material-ui/core';

/*
  Function to get current date
  return {string} - current date in format dd/mm/yyyy
*/
function getCurrentDate() {
  const date = new Date();
  const dd = date.getDate();
  const mm = date.getMonth() + 1;
  const yyyy = date.getFullYear();
  return `${yyyy}-${mm > 9 ? mm : '0' + mm}-${dd > 9 ? dd : '0' + dd}`;
}

function InputDate({ name, label, classes }) {
  const defaultValue = getCurrentDate();
  const [selectedDate, setSelectedDate] = useState(defaultValue);
  const handleChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Paper className={classes.container} elevation={0} square={false}>
      <Box>
        <Typography component={'span'} className={classes.text}>
          {label}
        </Typography>
      </Box>
      <TextField
        id={name}
        name={name}
        type="date"
        onChange={handleChange}
        defaultValue={defaultValue}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Paper>
  );
}

export default InputDate;
