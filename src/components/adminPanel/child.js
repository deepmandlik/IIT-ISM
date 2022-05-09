import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addchildLabel, addchildType } from "../../redux/createSection";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: "none",
    width: "100%",
    padding: 10,
    marginTop: 15,
    borderRadius: 10,
  },
  nav: {
    marginTop: 10,
    width: "100%",
    height: "auto",
    borderRadius: 10,
    marginBottom: 5,
  },
  input: {
    width: 130,
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
    outline: "none",
  },
}));
export default function Child(props) {
  const classes = useStyles();
  const section = useSelector((state) => state.section);
  const dispatch = useDispatch();

  const Data = ["text", "dropdown"];

  const data = {
    sectionId: props.childInfo.sectionId,
    elementId: props.childInfo.elementId,
    elementType: props.childInfo.elementType,
    groupElementId: props.childInfo.groupElementId,
    childId: props.child.id,
  };  

  const [value, setValue] = useState();
  const [label, setLabel] = useState("");

  const handleValueChange = (event) => {
    setValue(event.target.value);
    dispatch(addchildType({ ...data, childType: event.target.value }));
  };

  const handleLabelChange = (event) => {
    setLabel(event.target.value);
    dispatch(addchildLabel({ ...data, childLabel: event.target.value }));
  };

  return (
    <Box
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      className={classes.nav}
    >
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={value}
        onChange={handleValueChange}
        style={{ width: data.size }}
        className={classes.input}
        disableUnderline={true}
      >
        {Data.map((value, index) => (
          <MenuItem value={value} key={index}>
            {value}
          </MenuItem>
        ))}
      </Select>
      <TextField
        label="Text Field Label"
        id="outlined-size-small"
        defaultValue="Small"
        variant="outlined"
        size="small"
        InputProps={{
          disableUnderline: true,
        }}
        style={{ background: "#FFF", width: 150, marginLeft: 10 }}
        value={label}
        onChange={handleLabelChange}
      />
    </Box>
  );
}
