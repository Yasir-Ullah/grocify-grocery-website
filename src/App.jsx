import React from "react";
// import Home from "./compoets/Home";
import Navbar from "./compoets/Navbar";
import Hero from "./compoets/Hero";
import Categary from "./compoets/Categary";
import Values from "./compoets/Values";
import Products from "./compoets/Products";
import Discount from "./compoets/Discount";
import Ourprocess from "./compoets/Ourprocess";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      <Hero />
      <Categary />
      <Values />
      <Products />
      <Discount />
      <Ourprocess />
    </div>
  );
};

export default App;
