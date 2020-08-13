import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  CssBaseline,
  Container,
  Typography,
  Grid,
  Box,
  Button,
  Link,
} from "@material-ui/core";
import { InputPassword, InputNormal, ButtonNormal } from "../../components/";

function Register() {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Đăng ký
        </Typography>
        <form className={classes.form} onSubmit={handleFormSubmit}>
          <InputNormal
            forType="email"
            forId="email"
            forLabel="Email"
            forName="email"
            classes={classes}
          />
          <InputPassword
            handleChange={handleChange}
            handleClickShowPassword={handleClickShowPassword}
            classes={classes}
            values={values}
          />
          <InputPassword
            handleChange={handleChange}
            handleClickShowPassword={handleClickShowPassword}
            classes={classes}
            values={values}
            label="Nhập lại mật khẩu"
          />
          <ButtonNormal type="submit" label="Đăng ký" classes={classes} />
          <Box className={classes.flexCenterRow}>
            <Typography text>HOẶC</Typography>
          </Box>
          <Box className={classes.otherSignup}>
            <Button variant="contained" color="primary">
              google
            </Button>
            <Button variant="contained" color="primary">
              facebook
            </Button>
          </Box>
          <Box
            className={classes.flexCenterRow}
            mt={2}
            style={{ cursor: "pointer" }}
          >
            <Link variant="body2">Bạn đã có tài khoản? Đăng nhập ngay</Link>
          </Box>
        </form>
      </div>
    </Container>
  );
}

export default Register;

/*SPACING: spacing(8px * param)*/

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  otherSignup: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  flexCenterRow: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: null,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
