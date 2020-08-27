import React from 'react';
import { Slider, Box, Typography, Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function InputStyle({ label, name, classes }) {
  const marks = [
    {
      value: 0,
      label: 'không',
    },
    {
      value: 50,
      label: 'hơi',
    },
    {
      value: 100,
      label: 'rất',
    },
  ];

  function valuetext(value) {
    return `${value}`;
  }
  /*Fake styles*/
  const styles = [
    'Năng động',
    'Bánh bèo',
    'Tiệc tùng',
    'Trendy',
    'Độc đáo',
    'Nghiêm túc',
  ];

  return (
    <Paper className={classes.containerSlider} elevation={0} square={false}>
      <Typography
        component={'span'}
        variant="h6"
        className={classes.text}
        gutterBottom>
        {label}
      </Typography>
      {styles.map((style) => (
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography component={'span'} variant="subtitle1">
              {style}
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Slider
              defaultValue={0}
              getAriaValueText={valuetext}
              aria-labelledby="style-slider"
              step={50}
              valueLabelDisplay="off"
              marks={marks}
            />
          </Grid>
        </Grid>
      ))}
    </Paper>
  );
}

export default InputStyle;
