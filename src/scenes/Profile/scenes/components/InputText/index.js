import React from "react";
import { TextField, Box, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

function InputName({ label, name, classes }) {
  return (
    <Paper className={classes.container} elevation={0} square={false}>
      <Box>
        <Typography className={classes.text}>{label}</Typography>
      </Box>
      <Box className="customInputStyle">
        <form autoComplete="off">
          <TextField id={name} variant="outlined" size="small" />
        </form>
      </Box>
    </Paper>
  );
}

export default InputName;
