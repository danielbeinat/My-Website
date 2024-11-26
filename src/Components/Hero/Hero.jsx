export const Hero = () => {
  return (
    <>
      <section className="hero font-poppins mt-[40px] md:mt-[120px] from-indigo-900 py-20 px-6 md:px-12">
        <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-center gap-12 ">
          <div className="text-center md:text-left flex flex-col gap-4 items-center justify-center">
            <div className="w-max">
              <h1 className="animate-typing bg-gradient-to-r from-[#1A91E8] via-[#1586BC] via-[#18B6DF] via-[#1287A5] via-[#14C9CF] via-[#13D0CA] via-[#10DEBE] to-[#0FEDB3] bg-clip-text text-transparent overflow-hidden whitespace-nowrap text-4xl text-center md:text-6xl font-bold  mb-4 border-r-4 border-r-white pr-5  font-bold">
                Daniel Beinat
              </h1>
            </div>

            <p className="text-[15px] md:text-xl text-white mb-8 font-medium text-center md:w-4/5">
              Desarrollador frontend especializado en crear interfaces web
              intuitivas y accesibles que brindan una excelente experiencia de
              usuario.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <a
                href="#projects"
                className="border-2 border-solid border-[#0CFCA7] hover:border-[#0CFCA7] text-[#0CFCA7] px-8 py-2 rounded-md text-lg "
              >
                Ver Proyectos
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
