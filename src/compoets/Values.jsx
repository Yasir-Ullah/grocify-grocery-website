import React from "react";
import Heading from "./Heading";
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";

const Values = () => {
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10">
        <Heading highlight="Our" heading="Values" />

        <div className="flex">
            <div>
                <img src={} />
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
