import Image from "next/image";
import Button from "../Reusable/Button";
import SpinLogoLight from "../../assets/image/LightSpinLogo.png";
import SpinLogoDark from "../../assets/image/DarkSpinLogo.png";

const HireMeLogo = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src={SpinLogoLight}
          alt="spin-logo"
          className="w-14 animate-spinSlow hidden dark:flex"
        />

        <Image
          src={SpinLogoDark}
          alt="spin-"
          className="w-14 animate-spinSlow dark:hidden flex"
        />

        <a href="mailto:1013marvinel@gmail.com">
          <Button className="absolute text-[10px] h-10 w-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full">
            Hire Me
          </Button>
        </a>
      </div>
    </div>
  );
};

export default HireMeLogo;
