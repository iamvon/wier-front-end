import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box,Grid, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";
function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Grid container>
          <Grid item xs>
            <Box flexGrow={1} display="flex" >
              <NavLink className={classes.link} to="/">
              WIER
            </NavLink>
            </Box>
          </Grid>
          <Grid item xs>
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
                <NavLink className={classes.link} to="/productdetail">
                    Product detail
                </NavLink>
                <NavLink className={classes.link} to="/checkout">
                    Checkout
                </NavLink>
            </Box>
          </Grid>
        </Grid>
      </div>
      {/* <Grid container>
        <Grid item xs>
        </Grid>
        <Grid item xs={3}>
          <Box height="25%">
            <SearchBox />
          </Box>
        </Grid>
        <Grid item xs>
        </Grid>
      </Grid> */}
    </div>
  );
}

export default Header;

const useStyles = makeStyles((theme) => ({
  container: {
    flexGrow: 1,
    padding: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    backgroundColor: "#8092ed"
  },
  link: {
    fontFamily: "Arial",
    textDecoration: "none",
    color: "fcfcfc",
    fontWeight: 500,
    padding: theme.spacing(1, 2),
  },
  root: {
    flexGrow: 1,
  },
}));
