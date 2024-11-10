import { skills } from "../../assets/SkillsLanguages/SkillsLanguages.js";

export const Skills = () => {
  return (
    <>
      <section id="skills" className="font-poppins py-24  flex flex-col gap-10">
        <h1
          className="md:text-4xl text-3xl text-center font-bold underline underline-offset-8 uppercase
"
        >
          Habilidades
        </h1>

        <p className="text-center font-medium text-sm md:text-base opacity-80 ">
          Estas son las tecnologías y herramientas que utilizo para desarrollar
          proyectos web:
        </p>
        <ul className="flex justify-center gap-14 text-center">
          <li className="grid grid-cols-3 md:grid-cols-6 md:gap-16 gap-5">
            {skills.map((item) => (
              <img
                key={item.name}
                src={item.icon}
                alt={item.name}
                className="md:w-20 md:h-20 w-12 h-12 cursor-pointer hover:scale-110 transition duration-500"
              />
            ))}
          </li>
        </ul>
      </section>
    </>
  );
};
