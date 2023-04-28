import { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import CircleIcon from "./CircleIcon";

const variant = {
  initial: {
    y: 50,
  },

  whileInView: {
    y: 0,
  },
};

const Education = () => {
  const ref = useRef(null);
  const liRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="mt-32 lg:mt-60 xl:mt-80 px-4 md:px-28">
      <h1 className="text-center text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold dark:text-light text-dark">
        Education
      </h1>
      <div
        ref={ref}
        className="relative mx-auto w-full max-w-lg px-4 mt-12 md:mt-14 lg:mt-24"
      >
        <motion.div
          className="absolute xl:-left-20 lg:-left-5 md:-left-3 left-2 top-0 h-full w-[4px] origin-top bg-primary dark:bg-secondary dark:shadow-md dark:shadow-secondary"
          style={{ scaleY: scrollYProgress }}
        />
        <ul>
          <li ref={liRef} className="ml-5">
            <CircleIcon reference={liRef} />
            <motion.div
              variants={variant}
              initial="initial"
              whileInView="whileInView"
              transition={{ duration: 1, type: "spring" }}
            >
              <h1 className="text-xl xl:text-3xl md:text-2xl font-bold text-primary dark:text-secondary">
                Bachelor of Science In Information Technology
              </h1>
              <h2 className="mt-3 xl:text-2xl md:text-lg font-semibold text-dark dark:text-light">
                ACLC College
              </h2>
              <h2 className="mt-3 md:text-lg xl:text-xl font-semibold text-dark dark:text-light">
                Gapan City, Nueva Ecija
              </h2>
              <h2 className="mb-28 text-sm md:text-base xl:text-lg mt-2 text-dark/70 dark:text-light/70">
                2011-2015
              </h2>
            </motion.div>
          </li>

          <li ref={liRef} className="ml-5">
            <CircleIcon reference={liRef} />

            <motion.div
              variants={variant}
              initial="initial"
              whileInView="whileInView"
              transition={{ duration: 1, type: "spring" }}
            >
              <h1 className="text-xl xl:text-3xl md:text-2xl font-bold text-primary dark:text-secondary">
                Self Taught
              </h1>
              <h2 className="mt-3 xl:text-2xl md:text-lg font-semibold text-dark dark:text-light">
                Online Course
              </h2>
              <h2 className="mt-3 md:text-lg xl:text-xl font-semibold text-dark dark:text-light">
                YouTube, FeeCodeCamp, W3 School
              </h2>
              <h2 className="mt-2 text-sm md:text-base lg:text-lg text-dark/70 dark:text-light/70">
                2022-2023
              </h2>
            </motion.div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Education;
