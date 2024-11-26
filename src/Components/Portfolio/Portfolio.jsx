import { Projects } from "../../assets/MyProjects/Projects.js";

import React from "react";
import { motion, useInView } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProyectoAnimado = ({ proyecto: Projects }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={cardVariants}
      className="relative bg-[#121326] border-2 border-[#1F2032] rounded-lg overflow-hidden mb-8 pb-20 shadow-2xl"
    >
      <div className="p-5 flex flex-col gap-4">
        <img
          className="border-1 border-[#1F2032] rounded-lg shadow-2xl md:w-full md:h-[200px] w-full h-3/4 "
          src={Projects.image}
          loading="lazy"
        />
        <h2 className="text-[#0CFC9B] text-[20px] font-bold mb-2 text-white">
          {Projects.name}
        </h2>
        <p className="text-gray-400 mb-4">{Projects.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {Projects.Languages.map((tech, index) => (
            <img key={index} className="w-8 h-8" src={tech} loading="lazy" />
          ))}
        </div>
        <div className="flex justify-between items-center absolute bottom-0 w-full pr-12 pb-4 ">
          <a
            href={Projects.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition duration-700 ease-in-out  border-solid border-2 border-[#0CFCA7]  shadow-lg shadow-black rounded-lg shadow-black/50 text-white px-5 py-3 font-medium rounded-lg shadow-lg  shadow-black/50 transform hover:-translate-y-1 hover:scale-110"
          >
            Ver Proyecto
          </a>

          <a
            className="inline-block transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            href={Projects.github}
            target="_blank"
          >
            <svg
              viewBox="0 0 20 20"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns-xlink="http://www.w3.org/1999/xlink"
              fill="#000000"
              width="40"
              height="40"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>github [#acacb5142]</title>{" "}
                <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  {" "}
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-140.000000, -7559.000000)"
                    fill="#acacb5"
                  >
                    {" "}
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      {" "}
                      <path
                        d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                        id="github-[#acacb5142]"
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export const Portfolio = () => {
  return (
    <section id="projects" className="font-poppins">
      <div className="container mx-auto flex flex-col gap-10 px-4 py-12 font-poppins">
        <div className="flex items-center flex-col justify-center gap-9">
          //{" "}
          <h1
            className="md:text-4xl text-center bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 bg-clip-text text-transparent text-3xl  font-bold uppercase

"
          >
            Proyectos
          </h1>
          <p className="text-center text-white font-medium text-sm px-4 md:px-0 md:text-base opacity-80 mb-4">
            A continuación se muestran algunos de mis proyectos:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Projects.map((Projects) => (
            <ProyectoAnimado key={Projects.id} proyecto={Projects} />
          ))}
        </div>
      </div>
    </section>
  );
};
