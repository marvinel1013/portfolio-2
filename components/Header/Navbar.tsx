import HireMeLogo from "../HireMe/HireMeLogo";
import Logo from "./Logo";
import MobileMenuButton from "./MobileMenuButton";
import MobileMenuSection from "./MobileMenuSection";
import NavLink from "./NavLink";
import SocialMedIcon from "./SocialMedIcon";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleOpenMenu() {
    setIsOpen(!isOpen);
  }
  return (
    <nav className="flex items-center bg-light dark:bg-dark justify-between h-[70px] lg:h-24 w-full px-3 md:px-4 lg:px-8 xl:px-20">
      <div className="hidden lg:flex">
        <NavLink />
      </div>

      <div className="lg:hidden">
        <MobileMenuButton open={isOpen} handleOpenMenu={handleOpenMenu} />
      </div>

      <MobileMenuSection handleOpenMenu={handleOpenMenu} open={isOpen} />

      <Logo
        className="w-12 h-12 md:text-lg md:w-14 md:h-14 lg:w-16 lg:h-16"
        setIsOpen={setIsOpen}
      />

      <div className="md:invisible lg:hidden">
        <HireMeLogo />
      </div>

      <div className="hidden lg:flex">
        <SocialMedIcon />
      </div>
    </nav>
  );
}

export default Navbar;
