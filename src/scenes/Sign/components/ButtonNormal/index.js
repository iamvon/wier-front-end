import React from "react";

import { Button } from "@material-ui/core";

function ButtonNormal({ type, label, classes }) {
  return (
    <Button
      type={type}
      fullWidth
      variant="contained"
      color="primary"
      className={classes.submit}
    >
      {label}
    </Button>
  );
}

export default ButtonNormal;
