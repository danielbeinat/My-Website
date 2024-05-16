export const Hero = () => {
  return (
    <>
      <section className="hero font-poppins bg-gradient-to-tr to-blue-700 from-indigo-900 py-20 px-6 md:px-12">
        <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-center gap-12 ">
          <div className="text-center md:text-left flex flex-col gap-4 items-center justify-center">
            <div className="w-max">
              <h1 className="animate-typing overflow-hidden whitespace-nowrap text-4xl text-center md:text-6xl font-bold text-white mb-4 border-r-4 border-r-white pr-5  text-white font-bold">
                Daniel Beinat
              </h1>
            </div>

            <p className="text-lg md:text-xl text-white mb-8 font-medium text-center w-4/5">
              Desarrollador frontend especializado en crear interfaces web
              intuitivas y accesibles que brindan una excelente experiencia de
              usuario.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <a
                href="#projects"
                className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-md shadow-md hover:bg-blue-600 hover:text-white transition-colors duration-300"
              >
                Ver Proyectos
              </a>
              <a
                href="#contact"
                className="inline-block bg-transparent text-white font-semibold py-3 px-6 border border-white rounded-md hover:bg-white hover:text-blue-600 transition-colors duration-300"
              >
                Contáctame
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
