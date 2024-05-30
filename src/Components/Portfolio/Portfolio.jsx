import { Projects } from "../../assets/MyProjects/Projects.js";
import github from "../../assets/SkillsLanguages/github.svg";

export const Portfolio = () => {
  return (
    <>
      <section
        id="projects"
        className="md:py-24 py-10 bg-gray-100 font-poppins"
      >
        <div className="flex flex-col gap-5">
          <h1
            className="md:text-4xl text-3xl font-bold text-center underline underline-offset-8 uppercase

"
          >
            Proyectos
          </h1>
          <p className="text-center font-medium text-sm px-4 md:px-0 md:text-base opacity-80 mb-4">
            A continuación se muestran algunos de mis proyectos:
          </p>
        </div>

        <div>
          {Projects.map((item) => {
            return (
              <div
                className="flex items-center md:justify-between flex-col md:flex-row justify-center gap-8 py-16 md:py-24 md:px-24 

                "
                key={item.id}
              >
                <img
                  className="border-2 shadow-2xl md:w-1/2 md:h-2/4 w-3/4 h-3/4 rounded-lg"
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                />

                <div className="flex flex-col md:gap-4 gap-6">
                  <h1 className="font-bold text-center md:text-left text-2xl">
                    {item.name}
                  </h1>
                  <div className="flex items-center justify-center md:justify-start gap-3">
                    {item.Languages.map((item) => {
                      return (
                        <img
                          key={item}
                          className="w-8 h-8"
                          src={item}
                          alt={item}
                          loading="lazy"
                        />
                      );
                    })}
                  </div>
                  <p className="md:text-justify text-center md:text-sm text-sm px-4 md:px-0 text-gray-600">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-center md:justify-start gap-6">
                    <a
                      href={item.url}
                      target="_blank"
                      className="inline-block transition duration-700 ease-in-out bg-black text-white px-5 py-3 font-medium rounded-lg shadow-lg shadow-black/50 transform hover:-translate-y-1 hover:scale-110"
                    >
                      Ver Online
                    </a>

                    <a
                      className="inline-block transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                      href={item.github}
                      target="_blank"
                    >
                      <img className="w-10 h-10" src={github} alt="github" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
