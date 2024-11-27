import React from "react";
import { motion, useInView } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const SkillsCard = ({ Card }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={cardVariants}
    >
      <div className="flex flex-col md:flex-row gap-4 mt-[100px]">
        {Card.map((card) => (
          <div
            key={card.id}
            className={`flex flex-col p-[25px] lg:w-[420px] w-[280px] rounded-xl gap-8 ${card.color}`}
          >
            <div className="flex flex-col text-center">
              <h1 className="text-white">{card.title}</h1>
              <div className="flex items-center justify-center gap-2">
                <span>{card.rol}</span>
                <h2 className="text-white font-semibold text-[25px]">
                  {card.subtitle}
                </h2>
              </div>
              <p className="text-[#ACACB0] text-left">{card.description}</p>
            </div>

            <div className="flex flex-col lg:w-[350px] w-[210px] gap-4">
              <h1 className="text-white">{card.text}</h1>
              <div className="flex flex-wrap gap-2">
                {card.items.map((item, index) => (
                  <div
                    key={index}
                    className={`flex lg:p-[10px] p-[5px] items-center max-w-max rounded-full gap-2 shadow-lg ${card.secondcolor}`}
                  >
                    <span className="">{item.icon}</span>
                    <p className="text-[#ACACB0]  ">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
