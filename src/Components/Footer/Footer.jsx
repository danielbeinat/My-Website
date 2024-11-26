import netbook from "../../assets/netbook.svg";
export const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] flex flex-col font-poppins gap-4 px-[56px] mt-[110px] pt-[60px] pb-[22px]">
      <div className="flex items-center justify-center gap-2">
        <img src={netbook} alt="key" className="w-8 h-8 md:w-10 md:h-10" />

        <h1 className="text-base text-white font-bold hover:text-[#0CFCA7] cursor-pointer transition duration-500">
          Daniel Beinat
        </h1>
      </div>
      <hr className="mt-[40px] border-white border-solid " />
      <p className="text-white text-[13px] text-center">
        © 2023 Daniel Beinat. Todos los derechos reservados.
      </p>
    </footer>
  );
};
