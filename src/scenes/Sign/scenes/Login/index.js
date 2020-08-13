import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  CssBaseline,
  Container,
  Typography,
  Box,
  Grid,
  Link,
} from "@material-ui/core";
import { InputPassword, InputNormal, ButtonNormal } from "../../components/";
import { Copyright } from "../../../components/";

export default function Login() {
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
          Đăng nhập
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
          <ButtonNormal type="submit" label="Đăng nhập" classes={classes} />
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Quên mật khẩu?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Bạn không có tài khoản? Đăng ký ngay"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
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
