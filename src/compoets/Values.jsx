import React from "react";
import Heading from "./Heading";
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";
import Basket from "../assets/basket-full-vegetables.png";

const Values = () => {
  const leftValue = valu.slice(0, 2).map((item) => {
    return (
      <div className="flex md:flex-row-reverse items-center gap-7">
        <div>
          <span className="flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full">
            {item.icon}
          </span>
        </div>
        <div className="md:text-right">
          <h3 className="text-zinc-800 text-3xl font-bold">{item.title}</h3>
          <p className="text-zinc-600 mt-2">{item.para}</p>
        </div>
      </div>
    );
  });

  //   rigth
  const rightValue = valu.slice(2).map((item) => {
    return (
      <div className="flex items-center gap-7">
        <div>
          <span className="flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full">
            {item.icon}
          </span>
        </div>
        <div>
          <h3 className="text-zinc-800 text-3xl font-bold">{item.title}</h3>
          <p className="text-zinc-600 mt-2">{item.para}</p>
        </div>
      </div>
    );
  });
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10">
        <Heading highlight="Our" heading="Values" />

        <div className="flex md:flex-row flex-col gap-15 md:gap-5 mt-15">
          {/* left values */}
          <div className="md:min-h-100 gap-15 flex flex-col justify-between">
            {leftValue}
          </div>
          <div className="md:flex w-1/2 hidden">
            <img src={Basket} />
          </div>
          {/* right vaues */}
          <div className="md:min-h-100 gap-15 flex flex-col justify-between">
            {rightValue}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;

const valu = [
  {
    id: 1,
    title: "trust",
    para: "It is a long established  fact  that a  reader will be distracted by the readable",
    icon: <FaHeart />,
  },
  {
    id: 2,
    title: "Always fresh",
    para: "It is a long established  fact  that a  reader will be distracted by the readable",
    icon: <FaLeaf />,
  },
  {
    id: 3,
    title: "food safety",
    para: "It is a long established  fact  that a  reader will be distracted by the readable",
    icon: <FaShieldAlt />,
  },
  {
    id: 4,
    title: "100% organic",
    para: "It is a long established  fact  that a  reader will be distracted by the readable",
    icon: <FaSeedling />,
  },
];
