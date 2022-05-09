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
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
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

export default function SignUp({ setShowLogin }) {
  const classes = useStyles();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    try {
      const data = {
        name: name,
        email: email,
        password: password,
        isAdmin  : false
      };
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      };
      console.log(process.env.SIGNUP_URL);
      fetch("http://localhost:9000/user/register", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          navigate("/portal");
          localStorage.setItem('token', data.token.substr(7));
          localStorage.setItem("isAdmin", data.isAdmin);
          console.log(localStorage.getItem('token'));
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box className={classes.root}>
    <Box className={classes.form}>
        <Box mb={2}>
          <Typography variant="h4" align="left" className={classes.titleSignIn}>
            Sign Up
          </Typography>
        </Box>
      <Grid item className={classes.inputGridItem}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          name="name"
          placeholder="Name"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonOutlineOutlinedIcon
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
          value={name}
          onChange={handleNameChange}
        />
      </Grid>
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
          SignUp
        </Button>
      </Grid>
      <Grid item className={classes.helpGrid}>
        <Button
          color="primary"
          onClick={() => setShowLogin(true)}
          style={{ textDecoration: "none", color: "grey" }}
        >
          {" "}
          Sign In
        </Button>
      </Grid>
    </Box>
    </Box>
  );
}
