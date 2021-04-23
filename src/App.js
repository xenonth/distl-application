import React from "react";

//import components for webpage into app
import Header from "./components/Header";
import PowerfulIntro from "./components/PowerfulIntro"
import About from "./components/About"
import Technology from "./components/Technology";

function App() {
  return (
    <div>
      <Header />
      <PowerfulIntro />
      <About />
      <Technology />
    </div>
  );
}

export default App;
