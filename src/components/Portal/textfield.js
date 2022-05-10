import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addLabel } from "../../redux/storageOfData";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

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
    marginTop: 18,
    marginLeft : 10
  },
  label: {
    fontWeight: 600,
    margin: "5px 15px",
  },
}));

export default function Textfield({
  data,
  key,
  sectionInfo,
  ans,
  updateLabel,
}) {
  const classes = useStyles();
  const [value, setValue] = useState("");

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
    <TextField
      required
      fullWidth
      id={data.type}
      type={data.type}
      name={data.type}
      placeholder={data.label}
      InputProps={{
        className: classes.input,
        disableUnderline: true,
      }}
      autoFocus={true}
      value={value}
      onChange={handleValueChange}
    />
  );
}
