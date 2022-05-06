import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'

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

import { addSection , addSectionLabel } from '../../redux/createSection';

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
    // width: 250,
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
    marginTop : 18
  },
  label: {
    fontWeight: 600,
    margin: "5px 15px",
  },
}));

export default function Admin() {
  const classes = useStyles();


  const section = useSelector((state) => state.section)
  const dispatch = useDispatch()

  useEffect(() =>{
    console.log(section);
  }, [section])

  return (
    <Box>
        <Button onClick={() => dispatch(addSection({id  : 12}))}>add section</Button>
        <Button onClick={() => dispatch(addSectionLabel({id  : 12 ,label : "xyz"}))}>add section label</Button>
    </Box>
  );
}
