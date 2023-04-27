import Head from "next/head";
import Image from "next/image";
import HeroImage from "../assets/image/hero-image.png";
import Text from "@/components/Reusable/Text";
import { Icon } from "@iconify/react";
import Button from "@/components/Reusable/Button";
import HireMe from "@/components/HireMe/HireMe";

const Home = () => {
  return (
    <main>
      <Head>
        <title>Marvinel Santos | Portfolio</title>
      </Head>
      <div className="min-h-screen w-full text-dark">
        <div className="h-full w-full items-center flex flex-col lg:flex-row lg:gap-10 xl:gap-20 px-3 xl:px-20 mt-5 lg:mt-12 xl:mt-24 md:mt-20">
          <Image
            src={HeroImage}
            alt="hero-image"
            priority
            className="w-[300px] lg:w-[400px] xl:w-[500px] lg:animate-float md:hidden lg:flex"
          />

          <div className="mt-5">
            <Text className="w-full text-4xl md:text-6xl lg:text-7xl xl:text-8xl xl:px-0 px-5 font-black tracking-tight lg:text-start text-center">
              Hi, I'm Marvinel A Front-End Web Developer
            </Text>

            <p className="text-center lg:text-start mt-4 xl:text-xl xl:mt-6">
              I love to work on web application using technologies like React,
              Next JS and Tailwind CSS and also I always looking forward to
              improve my skills and learn new technologies.
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-4 lg:gap-7">
              <Button className="mt-5 p-2 xl:p-3 rounded-lg h-fit">
                <span className="flex items-center gap-2 cursor-pointer">
                  <h3 className="text-sm md:text-base xl:text-lg">
                    Download CV
                  </h3>
                  <Icon
                    icon="line-md:download-loop"
                    className="text-lg md:text-xl lg:text-2xl xl:text-3xl"
                  />
                </span>
              </Button>

              <a
                href="mailto:1013marvinel@gmail.com"
                className=" mt-5 text-base xl:text-xl cursor-pointer underline"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
        <div className="hidden md:flex mt-20 lg:mt-24">
          <HireMe />
        </div>
      </div>
    </main>
  );
};

export default Home;
