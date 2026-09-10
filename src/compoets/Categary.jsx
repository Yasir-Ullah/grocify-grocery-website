import React from "react";
import Heading from "./Heading";
import FruitsCat from "../assets/fruits-and-veggies.png";
import DairyCat from "../assets/dairy-and-eggs.png";
import MeatFood from "../assets/meat-and-seafood.png";
import Button from "./Button";

const Categary = () => {
  const renderCards = categary.map((cards) => {
    return (
      <div key={cards.id} className="flex-1 basis-[300px]">
        <div className=" w-full min-h-[30vh] relative -mb-10">
          <img src={cards.image} alt="" className="absolute bottom-0" />
        </div>
        <div className="bg-zinc-100 pt-17 p-8 rounded-xl">
          <h3 className="text-zinc-800 text-3xl font-bold">{cards.title}</h3>
          <p className="text-zinc-600 mt-3 mb-9">{cards.description}</p>
          <Button content="See All" />
        </div>
      </div>
    );
  });
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <Heading highlight="Shop" heading="by Category" />

        {/* category cards */}
        <div className="flex flex-wrap gap-10 md:mt-15 mt-9">{renderCards}</div>
      </div>
    </section>
  );
};

export default Categary;

const categary = [
  {
    id: 1,
    title: "Fruits & Vegetables",
    description: "Fresh and organic fruits and vegetables.",
    image: FruitsCat,
  },
  {
    id: 2,
    title: "Dairy and Eggs",
    description: "Fresh and organic fruits and vegetables.",
    image: DairyCat,
  },
  {
    id: 3,
    title: "Meat and Seafood",
    description: "Fresh and organic fruits and vegetables.",
    image: MeatFood,
  },
];
