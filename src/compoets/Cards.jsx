import React from "react";
import { FaHeart, FaPlus } from "react-icons/fa";
import Button from "./Button";

const Cards = () => {
  return (
    <div>
      {/* catd icons */}
      <div>
        <span>
          <FaHeart />
        </span>
        <button>
          <FaPlus />
        </button>
      </div>

      {/*card  img */}
      <div>
        <img src="" alt="" />
      </div>

      {/* card content */}
      <div>
        <h3>Titel</h3>
        <p>0.34</p>
        <Button content="Shop Now" />
      </div>
    </div>
  );
};

export default Cards;
