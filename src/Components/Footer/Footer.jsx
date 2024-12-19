import netbook from "../../assets/netbook.svg";
export const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] flex flex-col items-center font-poppins gap-4 px-[56px] mt-[110px] pt-[60px] pb-[22px]">
      <div className="flex items-center justify-center gap-2">
        <img src={netbook} alt="key" className="w-8 h-8 md:w-10 md:h-10" />

        <h1 className="text-base text-white font-bold hover:text-[#0CFCA7] cursor-pointer transition duration-500">
          Daniel Beinat
        </h1>
      </div>

      <div className="w-full max-w-2xl h-px my-4 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <p
        className="
  text-white/80 text-sm text-center
  hover:text-white transition-colors
"
      >
        © 2023 Daniel Beinat. Todos los derechos reservados.
      </p>
    </footer>
  );
};
