import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Dropdown from "./dropdown";
import Textfield from "./textfield";

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
  },
  label: {
    fontWeight: 600,
    width: 200,
  },
}));

export default function Element({ element, sectionId, sectionLabel }) {
  const classes = useStyles();

  const sectionInfo = {
    sectionId: sectionId,
    sectionLabel: sectionLabel,
    elementId: element.id,
    elementLabel: element.label,
  };

  const [ans , setAns] = useState(element.child);

  useEffect(() => {
    console.log(ans);
  } , []);

  const updateLabel = (id ,label) => {
    setAns(ans.map((data) => {
      if(data.id === id ) return {...data , label : label};
      return data;
    }))
  }

  return (
    <Box mt={2}>
      <Box display="flex" justifyContent="flex-start" alignItems="center">
        <Box style={{ width: 200 }} mt={2}>
          <Typography variant="body1" className={classes.label}>
            {element.label} :{" "}
          </Typography>
        </Box>
        <Box>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}
          >
            {element.child.map((data, index) => (
              <Grid item sm={12} md={4}>
                {data.type === "dropdown" ? (
                  <Dropdown data={data} key={index} sectionInfo={sectionInfo} ans={ans} updateLabel={updateLabel} />
                ) : (
                  <Textfield
                    data={data}
                    key={index}
                    sectionInfo={sectionInfo}
                    ans={ans}
                    updateLabel={updateLabel}
                  />
                )}
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
