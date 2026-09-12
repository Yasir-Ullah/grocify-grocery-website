import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CategoryPage from "./CategoryPage";
import Bgfruits from "../assets/fruits-banner.jpg";

const Fruits = () => {
  return (
    <div>
      <Navbar />
      <CategoryPage
        title="friuts & Veggies"
        bgImage={Bgfruits}
        Categories={["Fruits", "Vegetables"]}
      />
      <Footer />
    </div>
  );
};

export default Fruits;
