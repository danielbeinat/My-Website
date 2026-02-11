import { motion, useInView } from "framer-motion";
import React from "react";
import { Github, ExternalLink } from "lucide-react";
import PropTypes from "prop-types";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const ProyectoAnimado = ({ proyecto }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={cardVariants}
      whileHover={{ y: -5 }}
      className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-[#0CFCA7]/20 transition-all duration-300 hover:border-[#0CFCA7]/30 h-full flex flex-col"
    >
      <div className="relative overflow-hidden aspect-video bg-white/5">
        <img
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
          src={proyecto.image}
          alt={proyecto.name}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06071B]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6 flex flex-col gap-4 flex-1">
        <div className="flex-1">
          <h2 className="text-xl font-bold text-white mb-2 group-hover:text-[#0CFCA7] transition-colors duration-300">
            {proyecto.name}
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed opacity-80">
            {proyecto.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {proyecto.Languages.map((tech, index) => (
            <div
              key={index}
              className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
            >
              <img className="w-5 h-5" src={tech} alt="tech" loading="lazy" />
            </div>
          ))}
        </div>

        <div className="flex gap-3 pt-2">
          <a
            href={proyecto.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0CFCA7] to-[#1A91E8] text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-all duration-300 hover:scale-105"
          >
            <ExternalLink className="w-4 h-4" />
            <span className="text-sm">Ver Proyecto</span>
          </a>

          <a
            href={proyecto.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-10 h-10 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 hover:border-[#0CFCA7]/50 hover:text-[#0CFCA7] transition-all duration-300 hover:scale-110"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

ProyectoAnimado.propTypes = {
  proyecto: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    Languages: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
