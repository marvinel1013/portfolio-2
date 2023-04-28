import React from "react";
import SkillsCards from "./SkillsCards";
import { SkillsTechData } from "./SkillsTechData";
import { motion } from "framer-motion";

function Skills() {
  return (
    <div className="mt-32 px-4 md:px-28">
      <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center font-bold dark:text-light text-dark">
        Skills
      </h1>

      <ul className="grid mt-12 md:mt-14 lg:mt-24 xl:mt-28  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-7">
        {SkillsTechData.map((data, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            viewport={{ once: true }}
          >
            <SkillsCards data={data} />
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
