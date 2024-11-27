import { Card } from "./Card";
import { SkillsCard } from "./SkillsCard";

export const Skills = () => {
  return (
    <>
      <section
        id="skills"
        className="font-poppins md:my-[40px] px-3 py-24 flex flex-col gap-10"
      >
        <div className="flex items-center flex-col justify-center gap-9">
          <h1 className="md:text-4xl text-center text-gradient text-3xl font-bold uppercase">
            Habilidades
          </h1>

          <p className="text-center font-medium text-white text-sm md:text-base opacity-80 ">
            Estas son las tecnologías y herramientas que utilizo para
            desarrollar proyectos web:
          </p>
        </div>

        <div className="flex justify-center gap-6">
          <SkillsCard Card={Card} />
        </div>
      </section>
    </>
  );
};
