import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";
function Header() {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box flexGrow={1}>
        <Typography>Wier</Typography>
      </Box>
      <Box flexGrow={1} display="flex" justifyContent="flex-end">
        <NavLink className={classes.link} to="/">
          Home
        </NavLink>
        <NavLink className={classes.link} to="/login">
          Login
        </NavLink>
        <NavLink className={classes.link} to="/register">
          Register
        </NavLink>
        <NavLink className={classes.link} to="/profile">
          Profile
        </NavLink>
      </Box>
    </Box>
  );
}

export default Header;

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
    display: "flex",
    alignItems: "center",
  },
  link: {
    fontFamily: "Arial",
    textDecoration: "none",
    color: "#000",
    fontWeight: 400,
    padding: theme.spacing(1, 2),
  },
}));
