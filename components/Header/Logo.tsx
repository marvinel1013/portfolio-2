import { motion } from "framer-motion";

type Props = {
  className: string;
};

const Logo = ({ className }: Props) => {
  return (
    <div className="flex items-center gap-2">
      <motion.div
        className={`${className} flex cursor-pointer items-center justify-center rounded-full dark:border-2 border-light bg-dark font-bold text-light`}
        whileHover={{
          backgroundColor: [
            "#000000",
            "#072ac8",
            "#8338ec",
            "#9d0208",
            "#008000",
            "#eebb04",
            "#c9184a",
            "#000000",
          ],
          transition: { duration: 2, repeat: Infinity },
        }}
      >
        MS
      </motion.div>
    </div>
  );
};

export default Logo;