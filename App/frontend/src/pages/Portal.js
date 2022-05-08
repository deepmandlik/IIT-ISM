import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Backdrop from "@material-ui/core/Backdrop";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

import Hidden from "@material-ui/core/Hidden";

import Sidebar from "../components/Portal/sidebar";
import Admin from "../components/Portal/admin";

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
}));

export default function RecruitmentPortal() {
  const classes = useStyles();
  return (
    <div>
      <Sidebar />
      <Admin />
    </div>
  );
}
