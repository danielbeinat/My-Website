import { motion } from "framer-motion";
import { ExternalLink, Mail } from "lucide-react";
import PropTypes from "prop-types";

function ActionButton({ href, children, icon }) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0CFCA7] to-[#1A91E8] text-white px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#0CFCA7]/30 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#0CFCA7]/50`}
    >
      {icon}
      {children}
    </motion.a>
  );
}

ActionButton.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  icon: PropTypes.node.isRequired,
};

export const Hero = () => {
  return (
    <section className="relative font-poppins mt-[40px] md:mt-[120px] py-20 px-6 md:px-12 bg-[#06071B] overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center md:text-left flex flex-col gap-4 items-center justify-center relative z-10">
          <div className="text-center">
            <h1
              className={`animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 font-bold bg-gradient-to-r from-[#1A91E8] via-[#1586BC] via-[#18B6DF] via-[#1287A5] via-[#14C9CF] via-[#13D0CA] via-[#10DEBE] to-[#0FEDB3] bg-clip-text text-transparent text-4xl md:text-6xl`}
            >
              Daniel Beinat
            </h1>
            <div className="text-xl md:text-2xl text-[#0CFCA7] font-medium mt-2 opacity-90">
              Fullstack Developer
            </div>
          </div>

          <p
            className={`text-[15px] md:text-xl text-white mb-8 font-medium text-center md:w-4/5 max-w-2xl mx-auto md:mx-0 leading-relaxed`}
          >
            Desarrollador fullstack especializado en crear interfaces web
            intuitivas y accesibles que brindan una excelente experiencia de
            usuario.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-4">
            <ActionButton
              href="#projects"
              icon={<ExternalLink className="w-5 h-5" />}
            >
              Ver Proyectos
            </ActionButton>
            <ActionButton href="#contact" icon={<Mail className="w-5 h-5" />}>
              Contactar
            </ActionButton>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#06071B]/30 pointer-events-none" />

      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(#0CFCA7_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-[#0CFCA7]/10 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1A91E8]/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
    </section>
  );
};
