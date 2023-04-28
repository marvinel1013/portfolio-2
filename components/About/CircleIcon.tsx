import { MutableRefObject } from "react";
import { useScroll, motion } from "framer-motion";

type Props = {
  reference: MutableRefObject<null>;
};

const CircleIcon = ({ reference }: Props) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
    layoutEffect: false,
  });

  return (
    <figure className="absolute -left-[28px] md:-left-[48px] lg:-left-[56px] xl:-left-[116px] stroke-primary dark:stroke-secondary">
      <svg className="-rotate-90" width="75" height="75" viewBox="0 0 100 100">
        <circle
          cx="75"
          cy="50"
          r="20"
          className="fill-none stroke-primary dark:stroke-secondary stroke-1"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className=" fill-light stroke-[5px]"
          style={{ pathLength: scrollYProgress }}
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className=" fill-primary dark:fill-secondary stroke-1"
        />
      </svg>
    </figure>
  );
};

export default CircleIcon;
