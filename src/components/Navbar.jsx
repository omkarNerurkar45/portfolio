import React, { useState } from "react";
import { Link } from "react-scroll";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 text-white bg-gradient-to-r from-[#090e12] to-[#190d22] h-[7vh] flex items-center justify-between px-6 md:justify-around">

      <div className="font-extrabold bg-gradient-to-r from-pink-300 to-teal-300 via-purple-300 bg-clip-text text-transparent text-lg md:text-xl">
        <button>Portfolio</button>
      </div>

      <div className="hidden md:flex gap-6">
        <button className="buttonsNav textBg">
          <Link to="Home" smooth={true} duration={700} offset={-80}>
            Home
          </Link>
        </button>
        <button className="buttonsNav textBg">
          <Link to="About" smooth={true} duration={700} offset={-80}>
            About
          </Link>
        </button>
        <button className="buttonsNav textBg">
          <Link to="Skills" smooth={true} duration={700} offset={-80}>
            Skills
          </Link>
        </button>
        <button className="buttonsNav textBg">
          <Link to="Projects" smooth={true} duration={700} offset={-80}>
            Projects
          </Link>
        </button>
        <button className="buttonsNav textBg">
          <Link to="Contacts" smooth={true} duration={700} offset={-80}>
            Contacts
          </Link>
        </button>
      </div>

      
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl focus:outline-none"
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      
      {isOpen && (
        <div
          className="absolute top-[7vh] rounded-b-4xl left-0 w-full h-[50vh] flex flex-col items-center justify-center gap-6 glassy-bg text-lg backdrop-blur-md"
          onClick={() => setIsOpen(false)} 
        >
          <Link to="Home" smooth={true} duration={700} offset={-80}>
            Home
          </Link>
          <Link to="About" smooth={true} duration={700} offset={-80}>
            About
          </Link>
          <Link to="Skills" smooth={true} duration={700} offset={-80}>
            Skills
          </Link>
          <Link to="Projects" smooth={true} duration={700} offset={-80}>
            Projects
          </Link>
          <Link to="Contacts" smooth={true} duration={700} offset={-80}>
            Contacts
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
