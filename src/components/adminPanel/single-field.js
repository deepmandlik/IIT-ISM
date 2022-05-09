import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addElementLabel,
  addChild,
  deleteElement,
} from "../../redux/createSection";

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
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Child from "./child";
import { uniqueId } from "../ID/uniqueId";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: "none",
    width: "100%",
    padding: "5px 15px",
    border: "1px solid #0006",
    marginTop: 15,
    borderRadius: 10,
  },
  nav: {
    width: "100%",
    height: "auto",
    padding: "5px 0px 10px",
    borderBottom: "1px solid #0006",
  },
  input: {
    width: 130,
    height: 30,
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
    outline: "none",
  },
}));
export default function SingleField(props) {
  const classes = useStyles();
  const section = useSelector((state) => state.section);
  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const data = {
    sectionId: props.sectionId,
    elementId: props.elementId,
    elementType: props.element.type,
    groupElementId: props.groupElementId,
  };

  //console.log("grpele", data);

  const handleValueChange = (event) => {
    setValue(event.target.value);
    dispatch(addElementLabel({ ...data, elementLabel: event.target.value }));
  };

  const childId = "child_" + uniqueId();
  
  return (
    <Box className={classes.root}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        className={classes.nav}
      >
        <TextField
          label="Text Field Label"
          id="outlined-size-small"
          defaultValue="Small"
          variant="outlined"
          size="small"
          style={{ width: 150 }}
          value={value}
          onChange={handleValueChange}
        />
        <Box display="flex">
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ border: "1px solid #0005", marginRight: 10 }}
            onClick={() => dispatch(addChild({ ...data, childId: childId }))}
          >
            Add Child
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ border: "1px solid #0005" }}
            onClick={() => dispatch(deleteElement(data))}
          >
            Delete
          </Button>
        </Box>
      </Box>
      {props.element.child.map((child) => (
        <Child key={child.id} child={child} childInfo={data} />
      ))}
    </Box>
  );
}
