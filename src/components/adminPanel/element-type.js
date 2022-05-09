import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addElement } from "../../redux/createSection";

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
import { uniqueId } from "../ID/uniqueId";

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
    marginTop: 10,
    width: "100%",
    height: "auto",
    padding: "10px",
    border: "1px solid #0006",
    borderRadius: 10,
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
    outline : 'none'
  },
}));
export default function ElementType(props) {
  const classes = useStyles();
  const section = useSelector((state) => state.section);
  const dispatch = useDispatch();

  const data = ["Single Field", "Group Field"];

  const [value, setValue] = useState(data[0]);

  const handleValueChange = (event) => {
    setValue(event.target.value);
  };

  const elementId = 'element_' + uniqueId() ;

  // useEffect(() => {
  //   console.log(section);
  // }, [section]);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      className={classes.nav}
    >
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={value}
        size="small"
        onChange={handleValueChange}
        style={{ width: data.size }}
        className={classes.input}
        disableUnderline={true}
      >
        {data.map((value, index) => (
          <MenuItem value={value} key={index}>
            {value}
          </MenuItem>
        ))}
      </Select>
      <Button
        variant="contained"
        color="primary"
        size="small"
        style={{ border: "1px solid #0005" }}
        onClick={() =>
          dispatch(addElement({ elementId: elementId ,elementType : value , sectionId: props.sectionId }))
        }
      >
     Add element
      </Button>
    </Box>
  );
}
