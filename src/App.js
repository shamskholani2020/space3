import Hero from "./Components/Hero/Hero";
import NavBar from "./Components/NavBar/NavBar";
import { useState } from "react";
import Services from "./Components/Services/Services";
import Dialogg from "./Components/Components";
import About from "./Components/About/About";
import Footer from "./Footer/Footer";
function App() {
  return (
    <div className="App">
      <>
        <NavBar />
        <Hero />
        <Services />
        <About />
        <Footer />
      </>
    </div>
  );
}

export default App;
