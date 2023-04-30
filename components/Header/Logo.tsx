import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

type Props = {
  className: string;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const Logo = ({ className, setIsOpen }: Props) => {
  const router = useRouter();

  const handleNavigate = () => {
    setIsOpen(false);
    router.push("/");
  };

  return (
    <div className="flex items-center gap-2">
      <motion.div
        onClick={handleNavigate}
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
