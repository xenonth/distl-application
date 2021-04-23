import React from "react";

//import components for webpage into app
import Header from "./components/Header";
import PowerfulIntro from "./components/PowerfulIntro"
import About from "./components/About"
import Technology from "./components/Technology";
import Why from "./components/Why";
import TeamMember from "./components/TeamMember";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div>
      <Header />
      <PowerfulIntro />
      <About />
      <Technology />
      <Why />
      <TeamMember />
      <ContactUs />
    </div>
  );
}

export default App;
