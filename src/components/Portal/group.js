import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Element from "./element";

const useStyles = makeStyles((theme) => ({
  navbar: {
    width: "100%",
    height: 45,
    background: "#283593",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  title: {
    color: "#FFF",
  },
  label: {
    fontWeight: 600,
    width: 200,
  },
}));

export default function Group({ data , sectionId , sectionLabel}) {
  const classes = useStyles();

  return (
    <Box mt={2} >
      <Box display="flex" justifyContent="flex-start" alignItems="center">
        <Box pb={3} style={{ background: "#FFF", border: "1px solid #0005" ,width : '100%' , height : 'auto' }}>
          <Box className={classes.navbar}>
            <Typography variant="h6" className={classes.title}>
              {data.label}
            </Typography>
          </Box>
          <Box style={{padding : "5px 20px"}}>

          {data.element.map((data, index) => (
            <Element element={data} key={index} sectionId={sectionId} sectionLabel={sectionLabel} />
          ))}
          
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
