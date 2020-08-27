import React, { useState } from 'react';
import { Box, Typography } from '@material-ui/core';

function InputText({ label, name, classes, setData, data, type }) {
  const handleChange = (e) => {
    if (name === 'name') setData({ ...data, name: e.target.value });
    else if (name === 'height')
      setData({ ...data, height: e.target.value.replace(/\D/gi, '') });
    else setData({ ...data, weight: e.target.value.replace(/\D/gi, '') });
  };

  return (
    <div className={classes.container} elevation={0}>
      <Box component={'div'}>
        <Typography component={'span'} className={classes.text}>
          {label}
        </Typography>
      </Box>
      <Box>
        <input
          id={name}
          name={name}
          type={type}
          size="small"
          className="customInputStyle"
          required
          onChange={(e) => handleChange(e)}
        />
      </Box>
    </div>
  );
}

export default InputText;
