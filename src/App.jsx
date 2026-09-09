import React from "react";
import Home from "./compoets/Home";
import Navbar from "./compoets/Navbar";
import Hero from "./compoets/Hero";
import Categary from "./compoets/Categary";
import Values from "./compoets/Values";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      <Hero />
      <Categary />
      <Values />
    </div>
  );
};

export default App;
