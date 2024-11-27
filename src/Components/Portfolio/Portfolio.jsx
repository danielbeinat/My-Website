import { Projects } from "../../assets/MyProjects/Projects.js";
import { ProyectoAnimado } from "./ProyectoAnimado.jsx";

export const Portfolio = () => {
  return (
    <section id="projects" className="font-poppins">
      <div className="container mx-auto flex flex-col gap-10 px-4 py-12 font-poppins">
        <div className="flex items-center flex-col justify-center gap-9">
          //{" "}
          <h1
            className="md:text-4xl text-center text-gradient text-3xl font-bold uppercase

"
          >
            Proyectos
          </h1>
          <p className="text-center text-white font-medium text-sm px-4 md:px-0 md:text-base opacity-80 mb-4">
            A continuación se muestran algunos de mis proyectos:
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
