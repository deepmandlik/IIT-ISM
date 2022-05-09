import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addLabel } from "../../redux/storageOfData";

import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

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
    marginTop: 10,
  },
}));

export default function Dropdown({ data , key , sectionInfo ,ans , updateLabel}) {
  const classes = useStyles();
  const [value, setValue] = useState();

  const storage = useSelector((state) => state.storage);
  const dispatch = useDispatch();

  const handleValueChange = (event) => {
    setValue(event.target.value);
    updateLabel(data.id , event.target.value);
    var label =  "";
    ans.map((ans) =>  (ans.id === data.id) ? label +=  event.target.value + ' ': label += ans.label + ' ')
    dispatch(addLabel({ ...sectionInfo, elementValue: label }));
  };

  return (
    <Select
      margin="normal"
      labelId="demo-simple-select-outlined-label"
      id="demo-simple-select-outlined"
      value={value}
      onChange={handleValueChange}
      className={classes.input}
      disableUnderline={true}
    >
      {data.values.map((value, index) => (
        <MenuItem value={value} key={index}>
          {value}
        </MenuItem>
      ))}
    </Select>
  );
}
