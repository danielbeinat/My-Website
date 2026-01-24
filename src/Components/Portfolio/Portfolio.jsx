import { Projects } from "../../assets/MyProjects/Projects.js";
import { ProyectoAnimado } from "./ProyectoAnimado.jsx";

export const Portfolio = () => {
  return (
    <section id="projects" className="font-poppins relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0CFCA7]/5 to-transparent pointer-events-none" />

      <div className="container mx-auto flex flex-col gap-10 px-4 font-poppins relative z-10">
        <div className="flex items-center flex-col justify-center gap-9">
          <div className="text-center">
            <h1 className="md:text-4xl text-center text-gradient text-3xl font-bold uppercase mb-4">
              Proyectos
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#0CFCA7] to-[#1A91E8] mx-auto rounded-full" />
          </div>
          <p className="text-center text-white font-medium text-sm px-4 md:px-0 md:text-base opacity-80 max-w-2xl">
            Explora mis proyectos más recientes donde combino creatividad y
            tecnología para construir experiencias web excepcionales.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Projects.map((proyecto) => (
            <ProyectoAnimado key={proyecto.id} proyecto={proyecto} />
          ))}
        </div>
      </div>
    </section>
  );
};
