import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DescriptionIcon from '@material-ui/icons/Description';
import PersonIcon from '@material-ui/icons/Person';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import ListAltIcon from '@material-ui/icons/ListAlt';
import Details from "./details";
import Instruction from "./instruction";
import FormBuild from "../adminPanel/formbuilder";
import Checkstatus from "./checkStatus";
import Userprofile from "./userprofile";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    background: "#1A237E",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background: "#C62828"
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function Sidebar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [componenet , setComponenet] = React.useState(<Instruction />);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            RECRUITMENT PORTAL IIT(ISM) DHANBAD
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon style={{color : '#FFF'}} />
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button onClick={() => setComponenet(<Instruction />)} >
            <ListItemIcon >
              <DescriptionIcon style={{color : '#FFF'}} />
            </ListItemIcon>
            <ListItemText primary="Instructions" style={{color : '#FFF'}} />
          </ListItem>
          <ListItem button onClick={() => setComponenet( localStorage.getItem("isAdmin") ? <FormBuild /> : <Details />)}>
            <ListItemIcon>
              <ListAltIcon style={{color : '#FFF'}} />
            </ListItemIcon>
            <ListItemText primary="Application Form" style={{color : '#FFF'}} />
          </ListItem>
          <ListItem button onClick={() => setComponenet(<Checkstatus />)} >
            <ListItemIcon>
              <DoneAllIcon style={{color : '#FFF'}} />
            </ListItemIcon>
            <ListItemText primary="Check status" style={{color : '#FFF'}} />
          </ListItem>
          <ListItem button onClick={() => setComponenet(<Userprofile /> )}>
            <ListItemIcon>
              <PersonIcon style={{color : '#FFF'}} />
            </ListItemIcon>
            <ListItemText primary="User Profile" style={{color : '#FFF'}} />
          </ListItem>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} style={{marginTop : 50 }}>
          {componenet}
        </div>
      </main>
    </div>
  );
}
