import HireMeLogo from "../HireMe/HireMeLogo";
import Logo from "./Logo";
import NavLink from "./NavLink";
import SocialMedIcon from "./SocialMedIcon";

function Navbar() {
  return (
    <nav className="flex items-center justify-between h-[70px] lg:h-24 w-full px-3 md:px-4 lg:px-8 xl:px-20 bg-slate-300">
      <div className="hidden lg:flex">
        <NavLink />
      </div>

      <div className="lg:hidden">menu</div>

      <Logo className="w-12 h-12 md:text-lg md:w-14 md:h-14 lg:w-16 lg:h-16" />

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
