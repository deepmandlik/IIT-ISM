import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Backdrop from "@material-ui/core/Backdrop";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

import Hidden from "@material-ui/core/Hidden";
import SignIn from "../components/Auth/signIn";
import SignUp from "../components/Auth/signUp";

const useStyles = makeStyles((theme) => ({
  content: {
    padding: "2em 0em",
    minHeight: "100vh",
  },
  contentBox: {
    width: 400,
    height: 470,
    backgroundColor: "#42A5f6",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: "60px",
    borderBottomLeftRadius: "60px",
    boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.14)",
  },
  titleBox: {
    width: "300px",
    height: "320px",
    background: "rgba(255, 254, 254, 0.5)",
    backdropFilter: "blur(9px)",
    borderRadius: "20px",
    padding: 15,
  },
  title: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "29px",
    lineHeight: "45px",
    color: "#0F1653",
  },
  subtitle: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 13,
    color: "#000000",
  },
  subtitle1: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 13,
    color: "#FFF",
    textDecorationLine: "underline",
    cursor: "pointer",
  },
  title1 :  {
    borderTopRightRadius: "60px",
    borderTopLeftRadius: "60px",
    padding  :  "20px 40px", 
    textAlign : "center" , 
    background : "#455a64",
    color  :'#FFF'
  },
  loginBox: {
    width: 400,
    height: 470,
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderTopRightRadius: "60px",
    borderBottomRightRadius: "60px",
    boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.14)",
    [theme.breakpoints.down('sm')]: {
      height: 'auto',
      justifyContent: 'space-between',
      borderRadius: "60px",
    },
  },
}));

function Home() {
  const classes = useStyles();
  const [showLogin , setShowLogin] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/portal");
    }
    //eslint-disable-next-line
  }, []);
  return (
    <div>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className={classes.content}
      >
        <Grid
          container
          item
          direction="column"
          justifyContent="center"
          alignItems="center"
          xs={12}
          spacing={3}
        >
          <Box display="flex" className={classes.root}>
            <Hidden smDown>
              <Box className={classes.contentBox}>
                <Box display="flex">
                  <Box className={classes.titleBox}>
                    <Typography
                      variant="h3"
                      align="left"
                      className={classes.title}
                    >
                      IIT (ISM) Dhanbad Recruitment
                    </Typography>
                    <Box
                      mt={2}
                      style={{
                        border: "2px solid #E8E5E5",
                      }}
                    ></Box>
                    <Box style={{ marginTop: 160 }}>
                      <Typography variant="body1" className={classes.subtitle}>
                        Don’t have an account?
                      </Typography>
                      <Typography variant="body1" className={classes.subtitle1} onClick={() => setShowLogin(false)}>
                        Sign Up
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Hidden>
            <Box className={classes.loginBox}>
              <Hidden mdUp>
                <Box className={classes.title1}>
                  <Typography
                    variant="h3"
                    align="left"
                    className={classes.title}
                    style={{color : '#FFF'}}
                  >
                    IIT (ISM) Dhanbad Recruitment
                  </Typography>
                </Box>
              </Hidden>
              {showLogin ?  <SignIn /> : <SignUp setShowLogin={setShowLogin} />}
             
            </Box> 
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
