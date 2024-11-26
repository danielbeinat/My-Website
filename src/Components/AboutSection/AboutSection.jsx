export const AboutSection = () => {
  return (
    <>
      <section id="about" className="pt-24 font-poppins flex flex-col">
        <div className="flex items-center flex-col justify-center gap-9">
          <h1 className="md:text-4xl text-center bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 bg-clip-text text-transparent text-3xl  font-bold uppercase">
            Sobre mí
          </h1>

          <div className="flex flex-col gap-9">
            <p className="md:w-4/5 w-4/5 mx-auto font-medium text-white text-left text-sm md:text-base md:text-justify opacity-80 ">
              Como Frontend Developer, me especializo en el diseño y desarrollo
              de interfaces de usuario atractivas, intuitivas y receptivas.
              Tengo un amplio conocimiento de las últimas tecnologías web, como
              HTML, CSS, JavaScript y frameworks populares como React. Esto me
              permite crear aplicaciones web modernas y escalables que cumplen
              con los más altos estándares de usabilidad y accesibilidad.
            </p>

            <p className="w-4/5 mx-auto font-medium text-white text-sm md:text-base text-left md:text-justify opacity-80">
              Además de mis habilidades técnicas, mi formación como Analista en
              Sistemas me ha brindado una sólida comprensión de los procesos de
              negocio y los requisitos del cliente. Esta perspectiva me permite
              trabajar en estrecha colaboración con los equipos de desarrollo y
              las partes interesadas para garantizar que las soluciones
              entregadas satisfagan plenamente las necesidades y expectativas
              del cliente.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
