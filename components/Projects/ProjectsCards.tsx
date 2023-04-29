import Image, { StaticImageData } from "next/image";
import { Icon } from "@iconify/react";
import Button from "../Reusable/Button";
import { motion } from "framer-motion";

type Props = {
  data: {
    title: string;
    subtitle: string;
    description: string;
    demoLink: string;
    codeLink: string;
    coverPhoto: StaticImageData;
  };
};

const ProjectsCards = ({ data }: Props) => {
  return (
    <div className="relative bg-white dark:bg-dark flex items-center lg:gap-7 justify-between lg:flex-row flex-col border-2 border-dark dark:border-light md:p-6 p-4 rounded-xl mb-16">
      <div className="absolute top-0 -right-3 md:-right-4 -z-10 md:w-[102%] w-[103%] h-[103%] lg:h-[105%] rounded-xl rounded-tr-3xl rounded-bl-3xl bg-dark dark:bg-light" />
      <Image
        src={data.coverPhoto}
        alt="cover-photo"
        className="border border-gray-500 rounded-xl w-full lg:w-[350px] xl:w-[500px]"
        priority
      />

      <div>
        <h1 className="mt-2 text-primary dark:text-secondary md:text-xl font-bold">
          {data.title}
        </h1>
        <h2 className="text-gray-500 text-sm md:text-base mb-4">
          {data.subtitle}
        </h2>
        <p className="text-xs md:text-sm">{data.description}</p>

        <div className="flex items-center justify-center lg:justify-start gap-5 mt-5">
          <motion.a href={data.codeLink} target="_blank" whileHover={{ y: -3 }}>
            <Button className="flex items-center gap-2 rounded p-1 lg:p-2">
              <span className="text-sm lg:text-base">Code</span>
              <span className="">
                <Icon icon="ion:code-slash" />
              </span>
            </Button>
          </motion.a>
          <motion.a href={data.demoLink} target="_blank" whileHover={{ y: -3 }}>
            <Button className="flex items-center gap-2 rounded p-1 lg:p-2">
              <span className="text-sm lg:text-base">Demo</span>
              <span className="">
                <Icon icon="ion:globe-outline" />
              </span>
            </Button>
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCards;
