import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Moon from "../../assets/svg/moon.svg";
import Sun from "../../assets/svg/sun.svg";
import Image from "next/image";
import { useEffect, useState } from "react";

type IconType = {
  icon: JSX.Element;
  href: string;
};

const SocialMedIcon = () => {
  const [darkMode, setDarkMode] = useState(false);

  function handleColorMode() {
    setDarkMode(!darkMode);
  }

  useEffect(() => {
    const mode = localStorage.getItem("portfolio-theme");
    if (mode) {
      setDarkMode(JSON.parse(mode));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("portfolio-theme", JSON.stringify(darkMode));
    darkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [darkMode]);

  const icons: IconType[] = [
    {
      icon: <Icon icon="logos:linkedin-icon" />,
      href: "https://www.linkedin.com/in/marvinel-santos13/",
    },
    {
      icon: <Icon icon="logos:google-gmail" width={25} />,
      href: "mailto:1013marvinel@gmail.com",
    },
    {
      icon: <Icon icon="bi:github" color={darkMode ? "white" : "black"} />,
      href: "https://github.com/marvinel1013",
    },
    {
      icon: <Icon icon="logos:facebook" />,
      href: "https://www.facebook.com/marvinel.santos/",
    },
  ];

  return (
    <div className=" flex items-center gap-8">
      {icons.map((data, index) => (
        <motion.div
          key={index}
          className="cursor-pointer lg:text-xl xl:text-2xl"
          whileHover={{ y: -3 }}
        >
          <a href={data.href} target="_blank">
            {data.icon}
          </a>
        </motion.div>
      ))}
      <div>
        <button onClick={handleColorMode} className="bg-black p-1 rounded-full">
          {darkMode ? (
            <Image src={Sun} alt="moon-svg" priority className="w-4 xl:w-5" />
          ) : (
            <Image src={Moon} alt="moon-svg" priority className="w-4 xl:w-5" />
          )}
        </button>
      </div>
    </div>
  );
};

export default SocialMedIcon;
