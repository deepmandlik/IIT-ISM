import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import InputAdornment from "@material-ui/core/InputAdornment";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
  titleSignIn: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontSize: 30,
    color: "#0F1653",
    fontWeight: 400,
  },
  displayNone: {
    display: "none !important",
  },
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    padding: "1em 1.5em",
  },
  inputGridItem: {
    width: "100%",
  },
  input: {
    width: 250,
    height: 45,
    background: "#FFFFFF",
    border: "1px solid #999696",
    boxSizing: "border-box",
    borderRadius: 20,
    padding: "1em",
    color: "#999696",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontSize: 20,
    fontWeight: 400,
  },
  errorText: {
    marginTop: 10,
    fontSize: 13,
  },
  loginButton: {
    marginTop: 25,
    height: 45,
    color: "white",
    width: "100%",
    borderRadius: 20,
    boxShadow: "none",
  },
  forgotTitle: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 13,
    textDecorationLine: "underline",
    color: "#0F1653",
    textAlign: "center",
  },
  helpGrid: {
    marginTop: 16,
    textAlign: "center",
  },
}));

export default function SignIn({ handleClickShowSignUp }) {
  const classes = useStyles();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    try {
      const data = {
        email: email,
        password: password,
      };
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      };
      fetch("http://localhost:9000/user/login", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          navigate("/portal");
          console.log(data);
          localStorage.setItem("token", data.token.substr(7));
          localStorage.setItem("isAdmin", data.isAdmin);
          console.log("isAdmin" , localStorage.getItem("isAdmin"));
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.form}>
          <Box mb={2}>
            <Typography
              variant="h4"
              align="left"
              className={classes.titleSignIn}
            >
              Login In
            </Typography>
          </Box>
        <Grid item className={classes.inputGridItem}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            name="email"
            placeholder="Email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MailOutlineIcon
                    style={{
                      color: "#999696",
                      fontSize: 20,
                      marginRight: 5,
                    }}
                  />
                </InputAdornment>
              ),
              className: classes.input,
              disableUnderline: true,
            }}
            autoFocus={true}
            value={email}
            onChange={handleEmailChange}
          />
        </Grid>
        <Grid item className={classes.inputGridItem}>
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlinedIcon
                    style={{
                      color: "#999696",
                      fontSize: 20,
                      marginRight: 5,
                    }}
                  />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    style={{
                      color: "#999696",
                      padding: 8,
                    }}
                  >
                    {showPassword ? (
                      <Visibility style={{ fontSize: 20 }} />
                    ) : (
                      <VisibilityOff style={{ fontSize: 20 }} />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
              className: classes.input,
              disableUnderline: true,
            }}
            value={password}
            onChange={handlePasswordChange}
          />
        </Grid>
        <Grid item>
          <Button
            type="button"
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            className={classes.loginButton}
          >
            Login
          </Button>
        </Grid>
        <Grid item className={classes.helpGrid}>
          <a className={classes.forgotTitle}>Forgot password?</a>
        </Grid>
      </Box>
    </Box>
  );
}
