import React from "react";
import { IoMdHeart } from "react-icons/io";
import { HiMiniShoppingBag } from "react-icons/hi2";

const Navbar = () => {
  return (
    <header className="bg-white">
      <nav className="max-w[1400px] mx-auto px-10 h-[14vh]  flex justify-between items-center ">
        <a href="" className="text-3xl font-bold">
          Gr<span className="text-orange-500 uppercase">o</span>cify
        </a>
        <ul className="flex items-center gap-x-15">
          <li>
            <a
              href="#"
              className="font-semibold text-orange-500  tracking-wider"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold text-zinc-800  tracking-wider hover:text-orange-500"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold text-zinc-800  tracking-wider hover:text-orange-500"
            >
              Process
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold text-zinc-800  tracking-wider hover:text-orange-500"
            >
              Contact Us
            </a>
          </li>
        </ul>
        {/* nav Action */}
        <div className="flex items-center gap-x-5">
          {/* inpu filed */}
          <div>
            <input
              type="text"
              name="text"
              id=""
              placeholder="Search...."
              autoComplete="of"
            />
          </div>
          <a href="#" className="text-zinc-800 text-2xl">
            <IoMdHeart />
          </a>
          <a href="#" className="text-zinc-800 text-2xl">
            <HiMiniShoppingBag />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
