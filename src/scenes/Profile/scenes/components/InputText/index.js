import React from 'react';
import { Box, Typography } from '@material-ui/core';

function InputName({ label, name, classes }) {
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
          size="small"
          className="customInputStyle"
        />
      </Box>
    </div>
  );
}

export default InputName;
