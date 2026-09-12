import React from "react";
import Banner from "./Banner";
import { ProductsList } from "./ProductsList";
import Cards from "./Cards";

const CategoryPage = ({ title, bgImage, Categories = [] }) => {
  let filteritems = Categories.includes("All")
    ? ProductsList
    : ProductsList.filter((item) => Categories.includes(item.category));
  const renderProduct = filteritems.map((product) => {
    return (
      <Cards image={product.image} name={product.name} price={product.price} />
    );
  });
  return (
    <div>
      <Banner title={title} bgImage={bgImage} />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-9 py-20 max-w-[1400px] mx-auto px-10">
        {renderProduct}
      </div>
    </div>
  );
};

export default CategoryPage;
