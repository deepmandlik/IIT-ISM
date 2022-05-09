import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    padding: 10,
    width : '100%',
    height : 'auto',
    background : '#FFF'
  },
}));

export default function Checkstatus() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="body1">Check Status</Typography>
    </Box>
  );
}
