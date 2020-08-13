import React from "react";

import { Input, FormControl, InputLabel } from "@material-ui/core";

function InputNormal({ forType, forId, forLabel, forName, classes }) {
  return (
    <FormControl className={classes.form}>
      <InputLabel htmlFor={forType}>
        {forLabel.slice(0, 1).toUpperCase() + forLabel.slice(1)}
      </InputLabel>
      <Input
        variant="standard"
        margin="normal"
        required
        fullWidth
        id={forId}
        label={forLabel}
        name={forName}
        autoComplete={forName}
        autoFocus
      />
    </FormControl>
  );
}

export default InputNormal;
