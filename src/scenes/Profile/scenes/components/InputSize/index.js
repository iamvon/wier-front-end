import React from 'react';
import {
  Typography,
  NativeSelect,
  MenuItem,
  FormControl,
  Grid,
} from '@material-ui/core';

function renderNumbeSize(min, max) {
  let sizes = [];
  for (let i = min; i < max; i++) {
    sizes.push(i);
  }
  return sizes.map((size) => <option value={size}>{size}</option>);
}

function renderNumbeSizeFloat(min, max) {
  let sizes = [];
  for (let i = min; i < max; i += 0.5) {
    sizes.push(i);
  }
  return sizes.map((size) => <option value={size}>{size}</option>);
}

function InputSize({ label, name, classes }) {
  /*Fake styles*/
  const outfits = [
    { name: 'Áo', sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'] },
    { name: 'Quần', sizes: [20, 65] },
    { name: 'Áo khoác', sizes: [20, 65] },
    { name: 'Giày', sizes: [30, 45] },
  ];

  return (
    <div className={classes.containerSlider} elevation={0}>
      <Typography component={'span'} className={classes.text} gutterBottom>
        {label}
      </Typography>
      {outfits.map(({ name, sizes }, index) => (
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography component={'span'} variant="subtitle1">
              {name}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <FormControl style={{ width: '100%' }}>
              <NativeSelect inputProps={{ 'aria-label': 'Without label' }}>
                {index === 0
                  ? sizes.map((size) => <option value={size}>{size}</option>)
                  : index !== 3
                  ? renderNumbeSize(sizes[0], sizes[1])
                  : renderNumbeSizeFloat(sizes[0], sizes[1])}
                )
              </NativeSelect>
            </FormControl>
          </Grid>
        </Grid>
      ))}
    </div>
  );
}

export default InputSize;
