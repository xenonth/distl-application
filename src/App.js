import React from "react";

//import components for webpage into app in order of appearence
import Header from "./components/Header";
import PowerfulIntro from "./components/PowerfulIntro"
import About from "./components/About"
import Technology from "./components/Technology";
import Why from "./components/Why";
import TeamMember from "./components/TeamMember";
import ContactUs from "./components/ContactUs";

//import material UI Grid
import Grid from "@material-ui/core/Grid"

function App() {
  return (
    <Grid container spacing ={1}>
    
    <Grid lg={1} ></Grid>

      <Grid lg={10} md={10} xs={12}>
        <Header />
        <PowerfulIntro />
        <About />
        <Technology />
        <Why />
        <TeamMember />
        <ContactUs />
      </Grid>
      
    </Grid>
  );
}

export default App;
