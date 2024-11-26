export const NavLinks = () => {
  const link = [
    { name: "Inicio", href: "/" },
    { name: "Sobre mi", href: "/#about" },
    { name: "Habilidades", href: "/#skills" },
    { name: "Proyectos", href: "/#projects" },
    { name: "Contacto", href: "/#contact" },
  ];
  return (
    <>
      {link.map((item) => (
        <div key={item.name}>
          <div className="px-3 pb-5 md:pb-0 text-left md:cursor-pointer">
            <a
              onClick={() => (window.location.href = item.href)}
              // className="py-3 font-medium hover:text-sky-500 transition duration-500"
              className="text-white hover:text-[#0CFCA7] font-semibold text-sm lg:text-[15px] lg:font-semibold transition duration-300 pb-2 border-b-2 border-transparent hover:border-[#0CFCA7]"
            >
              {item.name}
            </a>
          </div>
        </div>
      ))}
    </>
  );
};
