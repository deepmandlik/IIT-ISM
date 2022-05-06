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
import Dropdown from "./dropdown";
import Textfield from "./textfield";

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
  input: {
    width: 250,
    height: 40,
    background: "#FFFFFF",
    border: "1px solid #999696",
    boxSizing: "border-box",
    borderRadius: 4,
    padding: "1em",
    color: "#999696",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontSize: 15,
    fontWeight: 400,
  },
  label: {
    fontWeight: 600,
    width : 200,
   
  },
}));

export default function Element({ element }) {
  const classes = useStyles();

  return (
    <Box mt={2}>
      <Box display="flex" justifyContent="flex-start" alignItems="center">
        <Box style={{ width: 200}} mt={2}>
          <Typography variant="body1" className={classes.label}>
            {element.label} :{" "}
          </Typography>
        </Box>
        <Box>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}
          >
            {element.child.map((data, index) => (
              <Grid item sm={12} md={4}>
                {data.type === "dropdown" ? (
                  <Dropdown data={data} key={index} />
                ) : (
                  <Textfield data={data} key={index} />
                )}
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
