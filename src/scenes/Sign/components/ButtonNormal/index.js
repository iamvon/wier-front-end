import React from "react";

import { Button } from "@material-ui/core";

function ButtonNormal({ type, label, classes, ...props }) {
  return (
    <Button
      type={type}
      fullWidth
      variant="contained"
      color="primary"
      className={classes.submit}
      {...props}
      >
      {label}
    </Button>
  );
}

export default ButtonNormal;
