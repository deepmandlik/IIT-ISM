import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useSelector } from "react-redux";
import Section from "./section";
import { Button } from "@material-ui/core";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: "none",
    width: "100%",
  },
}));

export default function Details() {
  const classes = useStyles();
  const theme = useTheme();
  //comment this section
  //const sections = useSelector((state) => state.section);
  const storage = useSelector((state) => state.storage);
  const [sections , setSections] = useState();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  ///Get request
  useEffect(() => {
    //only called once
      // get request from database
      //setSection(data) store data in sections from database
  }, []);

  const postRequest = () => {
    //post object from storage redux file...
    console.log(storage)

  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          {sections.map((section, index) => (
            <Tab label={section.label} key={section.id} {...a11yProps(index)} />
          ))}
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        {sections.map((section, index) => (
          <TabPanel
            value={value}
            index={value}
            dir={theme.direction}
            key={section.id}
          >
            <Section
              elements={section.elements}
              sectionId={section.id}
              sectionLabel={section.label}
            />
          </TabPanel>
        ))}
      </SwipeableViews>
      <Box display="flex" justifyContent="flex-end" style={{margin : 20}}>
        <Button
          variant="contained"
          color="primary"
          style={{ marginLeft: 10 }}
          onClick={postRequest}
        >
          Save
        </Button>
      </Box>
    </div>
  );
}
