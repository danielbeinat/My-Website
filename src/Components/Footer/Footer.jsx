import netbook from "../../assets/netbook.svg";
import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

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
    {
      icon: Mail,
      href: "mailto:danielbeinat@example.com",
      label: "Email",
    },
  ];

  return (
    <footer className="relative bg-[#06071B]/95 backdrop-blur-sm border-t border-white/10 mt-20">
      <div className="absolute inset-0 bg-gradient-to-t from-[#0CFCA7]/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="flex flex-col items-center gap-8">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-12 h-12 bg-gradient-to-r from-[#0CFCA7] to-[#1A91E8] rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-12">
              <img src={netbook} alt="logo" className="w-6 h-6" />
            </div>
            <h1 className="text-xl text-white font-bold group-hover:text-[#0CFCA7] transition-colors duration-300">
              Daniel Beinat
            </h1>
          </div>

          <div className="flex items-center gap-6">
            {socialLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#0CFCA7] transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                aria-label={item.label}
              >
                <item.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="text-center space-y-2">
            <p className="text-white/60 text-sm flex items-center justify-center gap-1">
              {currentYear} Daniel Beinat. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
