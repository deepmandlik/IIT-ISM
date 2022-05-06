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
import Element from "./element";
import Group from "./group";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "5px 20px",
  },
}));

export default function Section({elements}) {
  const classes = useStyles();
  return (
     <Box className={classes.root}>
        {elements.map((data ,index) => (
            data.element === 'Group' ? <Group data={data} />  : <Element element={data} key={index} />
        ))}
     </Box>
  )
}