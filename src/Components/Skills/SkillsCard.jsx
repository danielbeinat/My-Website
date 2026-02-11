import React from "react";
import { motion, useInView } from "framer-motion";
import PropTypes from "prop-types";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const SkillsCard = ({ Card }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={cardVariants}
      className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto"
    >
      {Card.map((card) => (
        <motion.div
          key={card.id}
          whileHover={{ y: -5 }}
          className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#0CFCA7]/30 transition-all duration-300 hover:shadow-[#0CFCA7]/20"
        >
          <div className="flex flex-col gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="text-[#0CFCA7]">{card.rol}</div>
                <h2 className="text-2xl font-bold text-white">
                  {card.subtitle}
                </h2>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed opacity-80">
                {card.description}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-white font-semibold text-center">
                {card.text}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {card.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-[#0CFCA7]/50 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
                  >
                    <span className="text-white/80">{item.icon}</span>
                    <p className="text-white/90 text-sm font-medium">
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

SkillsCard.propTypes = {
  Card: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      subtitle: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      rol: PropTypes.node.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          icon: PropTypes.node.isRequired,
          name: PropTypes.string.isRequired,
        }),
      ).isRequired,
    }),
  ).isRequired,
};
