import React from "react";
import Navbar from "./Navbar";
import Categary from "./Categary";
import Values from "./Values";
import Products from "./Products";
import Discount from "./Discount";
import Ourprocess from "./Ourprocess";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import Hero from "./Hero";

const Home = () => {
  return (
    <div>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      <Navbar />

      <Hero />
      <Categary />
      <Values />
      <Products />
      <Discount />
      <Ourprocess />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
