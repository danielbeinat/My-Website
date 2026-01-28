export const AboutSection = () => {
  return (
    <>
      <section id="about" className="pt-24 font-poppins flex flex-col relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0CFCA7]/5 to-transparent pointer-events-none" />

        <div className="flex items-center flex-col justify-center gap-9 relative z-10">
          <div className="text-center">
            <h1 className="md:text-4xl text-center text-gradient text-3xl font-bold uppercase mb-4">
              Sobre mí
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#0CFCA7] to-[#1A91E8] mx-auto rounded-full" />
          </div>

          <div className="flex flex-col gap-9 max-w-4xl mx-auto px-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-[#0CFCA7]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#0CFCA7]/10">
              <p className="font-medium text-white text-left text-sm md:text-base md:text-justify opacity-90 leading-relaxed">
                Como{" "}
                <span className="text-[#0CFCA7] font-semibold">
                  Fullstack Developer
                </span>
                , me especializo en el diseño y desarrollo de aplicaciones web
                integrales, desde interfaces atractivas e intuitivas hasta
                soluciones robustas en el servidor. Tengo un amplio
                conocimiento de las últimas tecnologías web, como HTML, CSS,
                JavaScript y frameworks populares como React, junto con Node.js
                y bases de datos. Esto me permite
                crear aplicaciones web modernas y escalables que cumplen con los
                más altos estándares de usabilidad y accesibilidad.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-[#0CFCA7]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#0CFCA7]/10">
              <p className="font-medium text-white text-sm md:text-base text-left md:text-justify opacity-90 leading-relaxed">
                Además de mis habilidades técnicas, mi formación como{" "}
                <span className="text-[#1A91E8] font-semibold">
                  Analista en Sistemas
                </span>{" "}
                me ha brindado una sólida comprensión de los procesos de negocio
                y los requisitos del cliente. Esta perspectiva me permite
                trabajar en estrecha colaboración con los equipos de desarrollo
                y las partes interesadas para garantizar que las soluciones
                entregadas satisfagan plenamente las necesidades y expectativas
                del cliente.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
