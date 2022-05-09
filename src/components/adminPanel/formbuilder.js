import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addSection, addSectionLabel } from "../../redux/createSection";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import SectionBox from "./section-box";
import { uniqueId } from "../ID/uniqueId";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: "none",
    width: "100%",
    padding: "5px 20px 20px",
  },
  nav: {
    width: "100%",
    height: "auto",
    padding: "10px 0px",
    borderBottom: "2px solid #0006",
  },
}));
export default function FormBuild() {
  const classes = useStyles();

  const section = useSelector((state) => state.section);
  const dispatch = useDispatch();

  const sectionId = "section_" + uniqueId();

  useEffect(() => {
    console.log(section);
  }, [section, sectionId]);

  const postRequest = () => {
    ///Post Request
    //form object in section variable;
  };

  return (
    <Box className={classes.root}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        className={classes.nav}
      >
        <Typography
          variant="h6"
          color="textPrimary"
          align="left"
          style={{ fontWeight: 1 }}
        >
          Form builder (heading)
        </Typography>
        <Box display="flex">
          <Button
            variant="contained"
            color="primary"
            onClick={() => dispatch(addSection({ sectionId: sectionId }))}
          >
            Add Section
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={{ marginLeft: 10 }}
            onClick={postRequest}
          >
            Save
          </Button>
        </Box>
      </Box>
      {section.map((section) => (
        <SectionBox key={section.id} sectionData={section} />
      ))}
    </Box>
  );
}
