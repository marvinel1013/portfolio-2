import Link from "next/link";
import { usePathname } from "next/navigation";
import SocialMedIcon from "./SocialMedIcon";
import { motion } from "framer-motion";

type NavType = {
  title: string;
  href: string;
};

type IconType = {
  icon: JSX.Element;
  href: string;
};

type Props = {
  handleOpenMenu: any;
  open: boolean;
};

function MobileMenuSection({ handleOpenMenu, open }: Props) {
  const navLink: NavType[] = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];

  const pathName = usePathname();

  return (
    <motion.div
      className={`${
        open ? "flex" : "hidden"
      } lg:hidden min-w-[85vw] md:min-w-[70vw] z-30 flex flex-col items-center gap-10 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/40 rounded-lg backdrop-blur-md py-32`}
      initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
      whileInView={{ scale: 1, opacity: 1 }}
    >
      <ul className="gap-4 flex flex-col items-center">
        {navLink.map((link, index) => (
          <li
            onClick={handleOpenMenu}
            key={index}
            className="flex flex-col group text-light dark:text-black  dark:font-semibold font-extralight"
          >
            <Link href={link.href}>{link.title}</Link>
            <span
              className={`bg-light dark:bg-dark inline-block h-[1px] mt-[-2px] ${
                pathName === link.href ? "w-full" : "w-0"
              } group-hover:w-full ease duration-300`}
            >
              &nbsp;
            </span>
          </li>
        ))}
      </ul>

      <div>
        <SocialMedIcon />
      </div>
    </motion.div>
  );
}

export default MobileMenuSection;
