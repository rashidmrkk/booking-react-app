import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
// import SidebarExampleTarget from "../../Sidebar/Components/Sidebar";
import Sidebar from "../../Sidebar/Components/Sidebar";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


export default function Topbar() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <AppBar position="sticky">
          <Toolbar>
            
            <Typography variant="h6" className={classes.title}>
              Booking App
            </Typography>
            <Button color="inherit">Logout</Button>
            
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}
