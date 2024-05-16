import coding from "../../assets/coding.svg";
import { NavLinks } from "./NavLinks";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white font-poppins">
      <div className="flex items-center justify-between md:px-4 md:py-3">
        <div className="flex justify-between items-center z-50 p-5 md:w-auto w-full">
          <div className="flex items-center gap-2">
            <img src={coding} alt="key" className="w-12 h-12" />
            <h1 className="text-base font-bold hover:text-sky-500 cursor-pointer transition duration-500">
              Daniel Beinat
            </h1>
          </div>
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden items-center gap-3">
          <NavLinks />
        </ul>
        <div className="text-3xl hidden md:flex md:cursor-pointer md:pr-5 md:gap-5 md:items-center text-2xl">
          <a
            className="inline-block transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            href="https://github.com/danielbeinat"
            target="_blank"
          >
            <FaGithub />
          </a>
          <a
            className="inline-block transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            href="https://www.linkedin.com/in/daniel-beinat"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </div>
        <ul
          className={`md:hidden bg-white z-40 absolute w-full h-full bottom-0 py-24 pl-0 duration-500 ${
            open ? "left-0" : "left-[-100%]"
          }`}
        >
          <NavLinks />
        </ul>
      </div>
    </nav>
  );
};
