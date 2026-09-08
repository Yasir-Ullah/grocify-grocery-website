import React from "react";
import Grocery from "../assets/grocery.png";
import Button from "./Button";

const Hero = () => {
  return (
    <section>
      <div
        className=" min-h-screen max-w-[1400px] mx-auto px-10
       flex md:flex-row flex-col items-center md:pt-25 pt-35"
      >
        {/* hero content */}
        <div className="flex-1">
          <span className="bg-orange-100 text-orange-500 text-lg rounded-full px-5 py-2">
            Export best Quailty...
          </span>
          <h1 className="md:text-7xl/20 text-5xl/14 mt-4 font-bold ">
            Tasty Orangic <span className="text-orange-500">Fruits</span> &
            <span className="text-orange-500"> Veggies </span>IN Your City
          </h1>
          <p className="text-zinc-600 md:text-lg text-md max-w-[530px] mt-5 mb-10">
            Bread for a high content of beneficial substances.Our products are
            all fresh and healthy
          </p>
          <Button content="Shop Now" />
        </div>
        {/* hero img */}
        <div className="flex-1">
          <img src={Grocery} alt="hero img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
