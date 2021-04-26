/* MainPage component to build the webpage and setout how the application looks before being transferred too App
For simplicity useStyles was attempted for each component in the main page however was unable to apply the styling into a workable solution.
*/

import React from "react";

//import components for webpage into MainPage in order of MainPageearence
import Header from "../components/Header";
import PowerfulIntro from "../components/PowerfulIntro"
import About from "../components/About"
import Technology from "../components/Technology";
import Why from "../components/Why";
import TeamMember from "../components/TeamMember";
import ContactUs from "../components/ContactUs";

//import material UI Grid
import Grid from "@material-ui/core/Grid"

function MainPage() {

  return (
    <Grid container spacing ={1}>
    
    <Grid lg={1} ></Grid>

      <Grid lg={10} md={10} xs={12}>
        <Header  />
        <PowerfulIntro  />
        <About />
        <Technology />
        <Why />
        <TeamMember />
        <ContactUs />
      </Grid>
      
    </Grid>
  );
}

export default MainPage;