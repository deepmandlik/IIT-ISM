import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Element from "./element";
import Group from "./group";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "5px 20px",
  },
}));

export default function Section({elements , sectionId , sectionLabel}) {
  const classes = useStyles();

  return (
     <Box className={classes.root}>
        {elements.map((element ,index) => (
            element.type === 'Group Field' ? <Group data={element} key={index} sectionId={sectionId} sectionLabel={sectionLabel} />  : <Element element={element} key={index} sectionId={sectionId} sectionLabel={sectionLabel} />
        ))}
     </Box>
  )
}