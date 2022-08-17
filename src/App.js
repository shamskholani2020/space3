import Hero from "./Components/Hero/Hero";
import NavBar from "./Components/NavBar/NavBar";
import { useState } from "react";
import Services from "./Components/Services/Services";
import Dialogg from "./Components/Components";
function App() {
  return (
    <div className="App">
      <>
        <NavBar />
        <Hero />
        <Services />
      </>
    </div>
  );
}

export default App;
