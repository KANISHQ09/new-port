import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import avatar from "../assets/avatar.jpeg";

export default function Card({ project, index, scrollYProgress, range, targetScale }) {
  const cardRef = useRef(null);

  const { scrollYProgress: cardScrollProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(cardScrollProgress, [0, 1], [2, 1]);
  const cardScale = useTransform(scrollYProgress, range, [1, targetScale]);

  const cardTop = `calc(-5vh + ${index * 25}px)`;

  return (
    <motion.div
      ref={cardRef}
      style={{
        top: cardTop,
        scale: cardScale,
      }}
      className="sticky mb-20 h-[550px] max-md:h-auto"
    >
      <div className="relative flex h-full flex-row overflow-hidden rounded-3xl border-2 border-white bg-black transition-all duration-300 max-md:flex-col max-md:items-center max-md:text-center max-md:p-5">
        
        {/* --- Left (Desktop) or Top (Mobile) --- */}
        <div className="flex w-1/2 flex-col justify-between p-8 text-white max-md:w-full max-md:p-0">
          <div className="max-md:flex max-md:flex-col max-md:items-center">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-extrabold text-4xl mb-4 max-md:text-xl"
            >
              {project.title}
            </motion.h3>

            {/* Image (Mobile placement) */}
            <div className="hidden max-md:block w-full mb-4">
              <motion.div
                style={{ scale: imageScale }}
                className="w-full h-56 rounded-xl overflow-hidden shadow-md"
              >
                <img
                  src={project.image || avatar}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[rgba(245,245,245,0.95)] bricolage-grotesque-500 text-[18px] leading-relaxed max-md:text-gray-300"
            >
              {project.description}
            </motion.p>
          </div>

          {/* Accent Bar */}
          <div
            className="h-2 w-full rounded-md mt-4 max-md:mt-5"
            style={{ backgroundColor: project.accentColor }}
          />
        </div>

        {/* --- Right (Image) --- */}
        <div className="relative w-1/2 overflow-hidden max-md:hidden">
          <motion.div style={{ scale: imageScale }} className="absolute inset-0">
            <img
              src={project.image || avatar}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
