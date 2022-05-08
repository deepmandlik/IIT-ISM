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
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
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

export default function Dropdown({ data }) {
  const classes = useStyles();
  const [value, setValue] = useState(data.values[0]);

  const handleValueChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Select
      margin="normal"
      labelId="demo-simple-select-outlined-label"
      id="demo-simple-select-outlined"
      value={value}
      onChange={handleValueChange}
      style={{ width: data.size }}
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
