import { useEffect, useState } from "react";
import { IoMdHeart } from "react-icons/io";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { TbMenu2Filled } from "react-icons/tb";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isscrolled, setIscrolled] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const habdleScrol = () => {
      setIscrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", habdleScrol);
    return () => window.removeEventListener("scroll", habdleScrol);
  }, []);
  return (
    <header
      className={`bg-white fixed top-0 left-0 right-0 z-50 ${isscrolled ? "shadow-[0_4px_25px_rgba(0,0,0,0.08)]" : ""}`}
    >
      <nav className="max-w[1400px] mx-auto px-10 md:h-[14vh] h-[12vh] flex justify-between items-center ">
        <Link to="/" className="text-3xl font-bold">
          Gr<span className="text-orange-500 uppercase">o</span>cify
        </Link>
        {/* destop menu */}
        <ul className="md:flex items-center gap-x-15 hidden">
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
          <div className="md:flex p-1   border-2 border-orange-500 rounded-full hidden">
            <input
              type="text"
              name="text"
              id="text "
              placeholder="Search...."
              autoComplete="of"
              className="flex-1 h-[5vh] px-2 outline-none text-zinc-800 placeholder:text-zinc-400"
            />
            <button className="bg-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl">
              <IoIosSearch />
            </button>
          </div>
          <a href="#" className="text-zinc-800 text-2xl">
            <IoMdHeart />
          </a>
          <a href="#" className="text-zinc-800 text-2xl">
            <HiMiniShoppingBag />
          </a>
          {/* icon menu */}
          <a
            href=""
            className="text-zinc-800 text-3xl md:hidden"
            onClick={toggleMenu}
          >
            {/* <TbMenu2Filled /> */}
            {showMenu ? <RxCross1 /> : <TbMenu2Filled />}
          </a>
        </div>

        {/* mobile menu */}
        {/* destop menu */}
        <ul
          className={`flex flex-col gap-y-12 bg-orange-500/15 backdrop-blur-xl rounded-xl p-10 items-center gap-x-15 md:hidden absolute top-30 -left-full  transform -translate-x-1/2   ${showMenu ? "left-1/2" : ""}  `}
        >
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

          <li className="flex p-1   border-2 border-orange-500 rounded-full md:hidden">
            <input
              type="text"
              name="text"
              id="text "
              placeholder="Search...."
              autoComplete="of"
              className="flex-1 h-[5vh] px-2 outline-none text-zinc-800 placeholder:text-zinc-400"
            />
            <button className="bg-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl">
              <IoIosSearch />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
