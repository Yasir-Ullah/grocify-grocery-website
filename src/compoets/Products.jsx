import React, { useState } from "react";
import Heading from "./Heading";
import { ProductsList } from "./ProductsList";

// import ProductsList from "./ProductsList";
import Cards from "./Cards";

const Products = () => {
  const Categories = ["All", "Fruits", "Vegetables", "Dariy", "Seafood"];

  const [isactive, setIsactive] = useState("All");

  const renderCards = ProductsList.map((product) => {
    return <Cards />;
  });
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <Heading highlight="Our" heading="Products" />

        {/* tabs */}
        <div className="flex gap-3 justify-center mt-10">
          {Categories.map((category) => {
            return (
              <button
                key={category}
                className={` px-5 py-2 text-lg rounded-xl
                ${isactive === category ? "bg-orange-500 text-white" : "bg-zinc-100"}
              `}
                onClick={() => setIsactive(category)}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* product listing */}
        <div>{renderCards}</div>
      </div>
    </section>
  );
};

export default Products;
