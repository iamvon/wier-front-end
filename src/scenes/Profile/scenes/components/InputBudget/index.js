import React, { useState } from 'react';
import { Slider, Box, Typography, Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function calcBudget(value) {
  return value * 5000;
}

function BudgetSlider({ marks }) {
  const [value, setValue] = useState([0, 500]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(value);
  };

  return (
    <Slider
      min={0}
      max={500}
      value={value}
      onChange={handleChange}
      valueLabelDisplay="auto"
      aria-labelledby="range-slider"
      marks={marks}
    />
  );
}

function InputBudget({ label, name, classes }) {
  const marks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 100,
      label: '100k',
    },
    {
      value: 200,
      label: '200k',
    },
    {
      value: 500,
      label: '500k+',
    },
  ];

  /*Fake styles*/
  const outfits = ['Áo', 'Quần', 'Áo khoác', 'Giày'];

  return (
    <Paper className={classes.containerSlider} elevation={0} square={false}>
      <Typography
        component={'span'}
        variant="h6"
        className={classes.text}
        gutterBottom>
        {label}
      </Typography>
      {outfits.map((outfit) => (
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Typography component={'span'} variant="subtitle1">
              {outfit}
            </Typography>
          </Grid>

          <Grid item xs={8}>
            <BudgetSlider marks={marks} />
          </Grid>
        </Grid>
      ))}
    </Paper>
  );
}

export default InputBudget;
