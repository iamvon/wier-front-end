import React from "react";
import {
  IconButton,
  Input,
  InputAdornment,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

function InputPassword({
  handleChange,
  handleClickShowPassword,
  classes,
  values,
  label,
}) {
  return (
    <FormControl className={classes.form}>
      <InputLabel htmlFor="password">{label || "Mật khẩu"}</InputLabel>
      <Input
        variant="standard"
        margin="normal"
        required
        fullWidth
        name="password"
        label={label || "Mật khẩu"}
        type={values.showPassword ? "text" : "password"}
        id="password"
        onChange={handleChange("password")}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
            >
              {values.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
}

export default InputPassword;
