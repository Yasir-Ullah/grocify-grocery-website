import React from "react";
import Navbar from "./Navbar";
import CategoryPage from "./CategoryPage";
import Bgall from "../assets/all-banner.jpg";
import Footer from "./Footer";

const Allproducts = () => {
  return (
    <div>
      <Navbar />
      <CategoryPage title="All Products" bgImage={Bgall} Categories={["All"]} />
      <Footer />
    </div>
  );
};

export default Allproducts;
