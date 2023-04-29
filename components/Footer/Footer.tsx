import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className="h-20 md:h-28 lg:h-36 w-full border-t-2 border-dark dark:border-light bg-light dark:bg-dark">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="flex items-center gap-1 text-sm md:text-base lg:text-lg xl:text-xl text-dark dark:text-light">
          Built with{" "}
          <span>
            <Icon icon="line-md:heart-filled" color="red" />
          </span>{" "}
          By <u>Marvinel Santos</u>
        </div>
        <div className=" font-light text-gray-700 text-xs md:text-sm lg:text-base xl:text-lg dark:text-gray-500 mt-2">
          2023 © All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
