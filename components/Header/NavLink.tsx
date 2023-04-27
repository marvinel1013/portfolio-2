import Link from "next/link";
import { usePathname } from "next/navigation";

type NavType = {
  title: string;
  href: string;
};

const NavLink = () => {
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
    <ul className="hidden sm:flex gap-5 ">
      {navLink.map((link, index) => (
        <li
          key={index}
          className="flex flex-col group text-dark dark:text-light xl:text-lg"
        >
          <Link href={link.href}>{link.title}</Link>
          <span
            className={`bg-primary dark:bg-secondary h-[1px] mt-[-2px] ${
              pathName === link.href ? "w-full" : "w-0"
            } group-hover:w-full ease duration-300`}
          >
            &nbsp;
          </span>
        </li>
      ))}
    </ul>
  );
};

export default NavLink;
