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

const Experience = () => {
  const ref = useRef(null);
  const liRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  const scrollTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="my-32 xl:mt-60 md:mt-44 px-4">
      <h1 className="text-center text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-dark dark:text-light">
        Experience
      </h1>
      <div
        ref={ref}
        className="relative mx-auto w-full max-w-lg px-4 mt-12 md:mt-14 lg:mt-24"
      >
        <motion.div
          className="absolute xl:-left-20 lg:-left-5 md:-left-3 left-2 top-0 h-full w-[4px] origin-top bg-primary dark:bg-secondary"
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
              <h1 className="md:text-2xl xl:text-3xl text-xl font-bold text-primary dark:text-secondary">
                Freelancer
              </h1>
              <h2 className="mt-3 xl:text-2xl md:text-lg font-semibold text-dark dark:text-light">
                Front-End Web Developer
              </h2>
              <h2 className="mt-2 text-sm md:text-base lg:text-lg text-dark/70 dark:text-light/70">
                2022-Present
              </h2>
              <p className="mb-80 mt-2 text-sm md:text-base xl:text-lg text-dark dark:text-light">
                Worked on a team responsible for developing a new Web
                Application. Including designing and implementing a new user
                interface and developing the backend infrastructure to support
                the feature.
              </p>
            </motion.div>
          </li>
        </ul>
      </div>
      <div className="cursor-pointer text-right">
        <u onClick={scrollTop}>Back to Top</u>
      </div>
    </div>
  );
};

export default Experience;
