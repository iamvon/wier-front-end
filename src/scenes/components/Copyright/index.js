import React from "react";
import { Typography, Link } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

function Copyright() {
  const classes = useStyles();

  return (
    <div className={classes.bottomPush}>
      <Box mt={8}>
        <Typography variant="body2" color="textSecondary" align="center">
          Copyright ©
        <Link color="inherit" href="#">
            WIER
        </Link>{" "}
          {new Date().getFullYear()}
        </Typography>
      </Box>
    </div>
  );
}

const useStyles = makeStyles({
  bottomPush: {
    position: "fixed",
    bottom: 10,
    textAlign: "center",
    paddingBottom: 10,
    left: 10,
  }
});

export default Copyright;
