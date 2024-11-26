import coding2 from "../../assets/coding2.svg";
import netbook from "../../assets/netbook.svg";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const social = [
  { icon: <FaGithub />, href: "https://github.com/danielbeinat" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/daniel-beinat" },
];

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Sobre mí", href: "/#about" },
  { name: "Habilidades", href: "/#skills" },
  { name: "Proyectos", href: "/#projects" },
  { name: "Contacto", href: "/#contact" },
];

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 font-poppins transition-all duration-300 ${
        isScrolled ? "bg-[#06071B]/90 backdrop-blur-sm" : "bg-[#06071B]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex justify-between items-center py-4 md:py-8">
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2"
          >
            <img src={netbook} alt="key" className="w-8 h-8 md:w-10 md:h-10" />

            <h1 className="text-base text-white font-bold hover:text-[#0CFCA7] cursor-pointer transition duration-500">
              Daniel Beinat
            </h1>
          </div>
          <div className="hidden md:flex">
            <nav>
              <ul className="flex space-x-8">
                {links.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-white hover:text-[#0CFCA7] font-semibold text-sm lg:text-[15px] lg:font-semibold transition duration-300 pb-2 border-b-2 border-transparent hover:border-[#0CFCA7]"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="text-3xl hidden md:flex md:cursor-pointer md:pr-5 md:gap-5 md:items-center text-2xl">
            {social.map((item, index) => (
              <a
                key={index}
                className="inline-block text-white  transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-[#0CFCA7]"
                href={item.href}
                target="_blank"
              >
                {item.icon}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#0CFCA7] hover:text-[#0CFCA7]/80 transition duration-300"
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Menú móvil */}
      <div
        className={`md:hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <nav className="px-4 pt-2 pb-4 bg-[#06071B]/95 backdrop-blur-sm">
          <ul className="space-y-2">
            {links.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="block py-2 text-white hover:text-[#0CFCA7] font-semibold text-sm transition duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
