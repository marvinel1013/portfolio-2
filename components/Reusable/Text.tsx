import { motion } from "framer-motion";

type Props = {
  children: string;
  className: string;
};

const h1Variant = {
  initial: {
    opacity: 1,
  },

  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const spanVariant = {
  initial: {
    opacity: 0,
    y: 50,
  },

  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const Text = ({ children, className }: Props) => {
  return (
    <div className="flex w-full items-center justify-center overflow-hidden py-2">
      <motion.h1
        className={` inline-block w-full font-bold capitalize ${className}`}
        variants={h1Variant}
        initial="initial"
        animate="animate"
      >
        {children.split(" ").map((word, index) => (
          <motion.span
            key={index}
            className="inline-block text-dark dark:text-light"
            variants={spanVariant}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default Text;
