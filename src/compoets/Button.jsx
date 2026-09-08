import React from "react";

const Button = (props) => {
  return (
    <button
      className="bg-gradient-to-b  from-orange-400 to-orange-500 
    px-8 py-3 text-white md:text-lg text-md  hover:scale-105 transition-all duration-300 rounded-lg "
    >
      {props.content}
    </button>
  );
};

export default Button;
