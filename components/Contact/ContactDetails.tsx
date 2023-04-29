import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Image from "next/image";
import ContactDetailsCover from "../../assets/image/ContactDetailsCover.png";

type IconType = {
  icon: JSX.Element;
  href: string;
};

const ContactDetails = () => {
  const icons: IconType[] = [
    {
      icon: <Icon icon="logos:linkedin-icon" />,
      href: "https://www.linkedin.com/in/marvinel-santos13/",
    },
    {
      icon: <Icon icon="logos:google-gmail" className="w-[28px]" />,
      href: "mailto:1013marvinel@gmail.com",
    },
    {
      icon: <Icon icon="bi:github" color="black" />,
      href: "https://github.com/marvinel1013",
    },
    {
      icon: <Icon icon="logos:facebook" />,
      href: "https://www.facebook.com/marvinel.santos/",
    },
  ];

  return (
    <div className="relative p-4 pb-7 rounded-2xl flex flex-col bg-light dark:bg-dark justify-between border-2 border-dark dark:border-light">
      <div className="absolute rounded-[2rem] rounded-br-2xl top-0 -right-3 md:-right-4 -z-10 bg-dark dark:bg-light w-[105%] h-[102%] md:h-[103%]" />
      <div>
        <Image
          src={ContactDetailsCover}
          alt="profile-pic"
          priority
          className="rounded-2xl border border-gray-500"
        />
        <h1 className="text-2xl md:text-3xl font-extrabold mt-5 text-primary dark:text-secondary">
          Marvinel Santos
        </h1>
        <h2 className="text-gray-700 md:text-lg dark:text-gray-400 mb-5">
          Front-End Developer
        </h2>
        <p className="md:text-lg text-dark dark:text-light">
          I am available for full-time positions. Contact me and let's talk.
        </p>
      </div>

      <div>
        <h1 className="font-bold text-xl md:text-2xl text-primary dark:text-secondary mt-10 mb-7">
          CONNECT WITH ME
        </h1>
        <ul className="flex items-center justify-between">
          {icons.map((data, index) => (
            <motion.li
              key={index}
              className="cursor-pointer text-2xl md:text-3xl"
              whileHover={{ y: -3 }}
            >
              <a href={data.href} target="_blank">
                {data.icon}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactDetails;
