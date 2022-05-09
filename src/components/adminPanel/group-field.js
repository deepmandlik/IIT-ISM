import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addGroupElementLabel, addGroupElement ,  deleteGroupElement } from "../../redux/createSection";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import SingleField from "./single-field";
import { uniqueId } from "../ID/uniqueId";


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: "none",
    width: "100%",
    padding: '5px 15px',
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
    //marginTop: 10,
  },
}));
export default function GroupField(props) {
  const classes = useStyles();

  const section = useSelector((state) => state.section);
  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const groupElementId = 'groupelement_' + uniqueId();

  const data =  {
    sectionId: props.sectionId,
    elementId  :props.elementId,
    elementType : props.element.type,
  }

  const handleValueChange = (event) => {
    setValue(event.target.value);
    dispatch(addGroupElementLabel({...data , groupElementLabel : event.target.value}));
  };

  return (
    <Box className={classes.root}>
      <Box
        display="flex"  
        justifyContent="space-between"
        alignItems="center"
        className={classes.nav}
      >
        <TextField
          label="Group Field Label"
          id="outlined-size-small"
          defaultValue="Small"
          variant="outlined"
          size="small"
          style={{width: 160}}
          value={value}
          onChange={handleValueChange}
        />
        <Box display="flex">
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ border: "1px solid #0005" , marginRight : 10 }}
            onClick={() =>
              dispatch(addGroupElement({...data, groupElementId : groupElementId, groupElementType : "Single Field"}))
            }
          >
            Add Group Element
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ border: "1px solid #0005" }}
            onClick={() =>
              dispatch(deleteGroupElement(data))
            }
          >
            Delete
          </Button>
        </Box>
      </Box>
      {props.element.element.map((element) => (
         <SingleField key={element.id} element={element} elementId={props.elementId} sectionId={props.sectionId} groupElementId={element.id} />
      ))}
    </Box>
  );
}
