import Image from "next/image";
import Button from "../Reusable/Button";
import SpinLogoLight from "../../assets/image/LightSpinLogo.png";
import SpinLogoDark from "../../assets/image/DarkSpinLogo.png";
import Idea from "../../assets/image/Idea.png";

const HireMe = () => {
  return (
    <div className="mb-5 flex w-full items-center justify-between px-10">
      <div className="relative">
        <Image
          src={SpinLogoLight}
          alt="spin-logo"
          className="w-28 lg:w-32 xl:w-44 animate-spinSlow hidden dark:flex"
        />

        <Image
          src={SpinLogoDark}
          alt="spin-"
          className="w-28 lg:w-32 xl:w-44 animate-spinSlow dark:hidden flex"
        />

        <a href="mailto:1013marvinel@gmail.com">
          <Button className="absolute left-1/2 top-1/2 h-[80px] w-[80px] lg:w-[90px] lg:h-[90px] xl:w-[115px] xl:h-[115px] -translate-x-1/2 -translate-y-1/2 rounded-full text-sm lg:text-base xl:text-xl">
            Hire Me
          </Button>
        </a>
      </div>
      <div>
        <Image
          src={Idea}
          alt="idea"
          className="w-16 lg:w-20 xl:w-24 duration-300 hover:scale-110"
        />
      </div>
    </div>
  );
};

export default HireMe;
