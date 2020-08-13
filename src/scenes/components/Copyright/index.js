import React from "react";
import { Typography, Link } from "@material-ui/core";
import { Box } from "@material-ui/core";

function Copyright() {
  return (
    <Box mt={8}>
      <Typography variant="body2" color="textSecondary" align="center">
        Copyright ©
        <Link color="inherit" href="#">
          Wier
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Box>
  );
}

export default Copyright;
