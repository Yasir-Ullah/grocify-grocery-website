import React from "react";
import CategoryPage from "./CategoryPage";
import BgDairy from "../assets/dairy-banner.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Dairy = () => {
  return (
    <div>
      <Navbar />
      <CategoryPage
        title="Dairy & Eggs"
        bgImage={BgDairy}
        Categories={["Dairy"]}
      />
      <Footer />
    </div>
  );
};

export default Dairy;
