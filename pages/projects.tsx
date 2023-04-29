import { projectData } from "@/components/Projects/ProjectData";
import ProjectsCards from "@/components/Projects/ProjectsCards";
import Text from "@/components/Reusable/Text";
import Head from "next/head";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/Effect/TransitionEffect";

const Projects = () => {
  return (
    <main>
      <Head>
        <title>Marvinel Santos | Projects Page</title>
      </Head>
      <TransitionEffect />
      <div className="min-h-screen w-full pb-20 text-dark dark:text-light">
        <Text className="mt-5 md:mt-10 text-4xl md:text-6xl lg:text-7xl xl:text-8xl xl:px-52 lg:px-48 text-center font-extrabold">
          Imagination Trumps Knowledge!
        </Text>

        <div className="mt-20 px-4 md:px-14 lg:px-24 xl:px-56 flex flex-col items-center">
          {projectData.map((data, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              viewport={{ once: true }}
            >
              <ProjectsCards data={data} />
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
