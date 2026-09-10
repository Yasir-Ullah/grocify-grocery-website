import React from "react";
import Home from "./compoets/Home";
import Navbar from "./compoets/Navbar";
import Hero from "./compoets/Hero";
import Categary from "./compoets/Categary";
import Values from "./compoets/Values";
import Products from "./compoets/Products";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      <Hero />
      <Categary />
      <Values />
      <Products />
    </div>
  );
};

export default App;
