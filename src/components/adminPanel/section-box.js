import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addSectionLabel, deleteSection } from "../../redux/createSection";

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
import ElementType from "./element-type";
import SingleField from "./single-field";
import GroupField from "./group-field";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: "none",
    width: "100%",
    padding: 10,
    border: "1px solid #0006",
    marginTop: 15,
    borderRadius: 10,
  },
  nav: {
    width: "100%",
    height: "auto",
    padding: "10px",
    borderBottom: "1px solid #0006",
  },
}));
export default function SectionBox(props) {
  const classes = useStyles();
  const section = useSelector((state) => state.section);
  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const handleValueChange = (event) => {
    setValue(event.target.value);
    dispatch(addSectionLabel({ sectionLabel: event.target.value, sectionId: props.sectionData.id }));
  };
  
  // useEffect(() => {
  //   console.log(section);
  // }, [section]);

  return (
    <Box className={classes.root}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        className={classes.nav}
      >
        <TextField
          label="Section Label"
          id="outlined-size-small"
          defaultValue="Small"
          variant="outlined"
          size="small"
          value={value}
          onChange={handleValueChange}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() =>
            dispatch(deleteSection({ sectionId: props.sectionData.id }))
          }
        >
          Delete
        </Button>
      </Box>
      <ElementType sectionId={props.sectionData.id} />
      {props.sectionData.elements.map((element) => (
        element.type === "Single Field" ? <SingleField key={element.id} element={element} elementId={element.id}  sectionId={props.sectionData.id} groupElementId={null} /> : <GroupField key={element.id} element={element} elementId={element.id} sectionId={props.sectionData.id} /> 
      ))}
    </Box>
  );
}
