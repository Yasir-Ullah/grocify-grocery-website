import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CategoryPage from "./CategoryPage";
import Bgseefood from "../assets/seafood-banner.jpg";

const Seefood = () => {
  return (
    <div>
      <Navbar />
      {/* <h2>I'm a seefood</h2> */}
      <CategoryPage
        title="Meat & Seefood"
        bgImage={Bgseefood}
        Categories={["Meat", "Seafood"]}
      />
      <Footer />
    </div>
  );
};

export default Seefood;
