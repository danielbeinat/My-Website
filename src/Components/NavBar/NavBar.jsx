import netbook from "../../assets/netbook.svg";
import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin } from "lucide-react";

const navigation = [
  { name: "Sobre mí", href: "/#about" },
  { name: "Habilidades", href: "/#skills" },
  { name: "Proyectos", href: "/#projects" },
  { name: "Contacto", href: "/#contact" },
];

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/danielbeinat",
    label: "GitHub Profile",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/daniel-beinat",
    label: "LinkedIn Profile",
  },
];

function useScroll() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isScrolled;
}

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isScrolled = useScroll();

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#06071B]/95 backdrop-blur-md shadow-lg shadow-[#0CFCA7]/10"
          : "bg-[#06071B]"
      }`}
    >
      <div className="max-w-7xl font-poppins mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group"
          >
            <div
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2"
            >
              <img
                src={netbook}
                alt="key"
                className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 group-hover:rotate-12"
              />

              <h1 className="text-base text-white font-bold hover:text-[#0CFCA7] cursor-pointer transition-all duration-500">
                Daniel Beinat
              </h1>
            </div>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex gap-6">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-white hover:text-[#0CFCA7] font-medium text-sm transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#0CFCA7] after:transition-all hover:after:w-full hover:scale-105"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4 border-l border-white/20 pl-6">
              {socialLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#0CFCA7] transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(12,252,167,0.5)]"
                  aria-label={item.label}
                >
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden rounded-md p-2 text-[#0CFCA7] hover:text-[#0CFCA7]/80 hover:bg-white/10 transition-all duration-300"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="border-t border-white/10 bg-[#06071B]/95 backdrop-blur-sm">
          <ul className="space-y-1 p-4">
            {navigation.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="block py-2 px-3 text-white hover:text-[#0CFCA7] hover:bg-white/5 rounded-md transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li className="pt-4 mt-4 border-t border-white/10">
              <div className="flex gap-4 px-3">
                {socialLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#0CFCA7] transition-all duration-300 hover:scale-110"
                    aria-label={item.label}
                  >
                    <item.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
