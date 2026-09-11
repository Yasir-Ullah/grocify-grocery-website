import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-zinc-100 py-20 ">
      <div className="flex flex-wrap   max-w-[1400px] mx-auto px-10  ">
        <div className="flex-1 basis-[300px]">
          {/* log */}
          <a href="" className="text-3xl font-bold">
            Gr<span className="text-orange-500 uppercase">o</span>cify
          </a>

          <p className="text-zinc-600 mt-6 max-w-[350px]">
            Bread for a high content of beneficial substances. Our produsts are
            all fresh and healthy.
          </p>
          <p className="text-zinc-800 mt-6">2026 &copy; all rights reserved</p>
        </div>
        {/* 1st ul */}
        <ul className="flex-1">
          <li>
            <h5 className="text-zinc-800 text-2xl font-bold">Company</h5>
          </li>
          <li className="mt-6">
            <a href="#" className="text-zinc-800 hover:text-orange-500">
              About
            </a>
          </li>
          <li className="mt-6">
            <a href="#" className="text-zinc-800 hover:text-orange-500">
              FAQ
            </a>
          </li>
        </ul>
        {/* 2st ul */}
        <ul className="flex-1">
          <li>
            <h5 className="text-zinc-800 text-2xl font-bold">Suppert</h5>
          </li>
          <li className="mt-6">
            <a href="#" className="text-zinc-800 hover:text-orange-500">
              Suppert center
            </a>
          </li>
          <li className="mt-6">
            <a href="#" className="text-zinc-800 hover:text-orange-500">
              Feadback
            </a>
          </li>
          <li className="mt-6">
            <a href="#" className="text-zinc-800 hover:text-orange-500">
              Contect Us
            </a>
          </li>
        </ul>
        <div className="">
          <h5 className="text-zinc-800 text-2xl font-bold">Stay Connected</h5>
          <p className="mt-6 text-zinc-600">
            Questions or feedbaks? <br />
            we'd love to hear from you.
          </p>
          <div className="bg-white p-1 rounded-lg mt-6">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Addres"
              autoComplete="off"
              className="Sh-[5vh]  pl-4 flex-1 focus:outline-none"
            />
            <button className="bg-gradient-to-b from-orange-400 to-orange-500 p-2 rounded-lg text-white text-2xl hover:to-orange-600 cursor-pointer ">
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
