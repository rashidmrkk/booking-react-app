import React from "react";
import Topbar from "../Containers/Topbar/Components/Topbar";
import Sidebar from "../Containers/Sidebar/Components/Sidebar";
import { Grid } from "@material-ui/core";


const DefaultLayout = ({ children }) => (
 
  <Grid container direction="row">
    <Sidebar/>
    <Grid container direction="column" lg={10} md={9}>
      <Topbar />
      {children}
    </Grid>
  </Grid>
);

export default DefaultLayout;
