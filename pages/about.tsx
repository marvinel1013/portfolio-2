import Text from "@/components/Reusable/Text";
import Head from "next/head";
import MyPicture from "../assets/image/MyPicture.png";
import Image from "next/image";
import Skills from "@/components/About/Skills/Skills";
import Education from "@/components/About/Education";
import Experience from "@/components/About/Experience";

function About() {
  return (
    <main>
      <Head>
        <title>Marvinel Santos | About Page</title>
      </Head>
      <div className="min-h-screen w-full text-dark">
        <Text className="mt-5 md:mt-10 text-4xl md:text-6xl lg:text-7xl xl:text-8xl xl:px-52 lg:px-48 text-center font-extrabold">
          Passion Fuels Purpose!
        </Text>

        <div className="flex items-center flex-col lg:justify-between lg:flex-row-reverse px-4 md:px-10 lg:px-28 lg:gap-10">
          <div className="relative p-5 lg:p-6 xl:p-8 mt-14 md:mt-24 lg:mt-40 w-fit border-2 border-dark dark:border-light dark:bg-dark bg-light rounded-2xl">
            <div className="bg-dark dark:bg-light absolute top-0 -right-3 lg:-right-4 xl:-right-5 h-[103%] w-[106%] rounded-br-2xl rounded-[2rem] -z-10" />
            <div className=" overflow-hidden rounded-2xl">
              <Image
                src={MyPicture}
                alt="Picture of the author"
                priority
                className="w-[200px] lg:w-[250px] xl:w-[280px] rounded-2xl hover:scale-105 duration-300"
              />
            </div>
          </div>

          {/* About Section */}
          <div className="mt-10 lg:mt-40 text-center lg:text-start">
            <h2 className="text-lg lg:text-xl xl:text-2xl font-extrabold dark:text-light/70 text-dark/70">
              Who I Am
            </h2>

            <p className="mt-5 text-sm md:text-start lg:w-[500px] xl:w-[650px] lg:text-base">
              I am a graduate of Bachelor of Science in Information Technology
              and I am a self-taught Front-End Web Developer who is passionate
              about building beautiful and user-friendly websites. With a well
              known foundation in HTML , CSS and JavaScript. I have relevant
              working experience with React. Currently seeking a full-time
              position. I love to work on web application using technologies
              like React, NextJS, Tailwind and Firebase and also I always
              looking forward to improve my skills and learn new
              technologies.The more I learned, the more I realized that this is
              what I want to do for a living.
            </p>
            <br />
            <p className="text-sm md:text-start lg:w-[500px] xl:w-[650px] lg:text-base">
              What I love most about coding is the challenge of problem-solving.
              I find it deeply satisfying to tackle complex issues and come up
              with solutions that meet both the user's needs and the project's
              requirements. Some of my technical skills include experience with
              HTML, CSS, JavaScript, and frameworks like React and NextJS. I am
              also skilled in tools such as Redux/Redux Toolkit and have
              knowledge of UI libraries like Tailwind CSS, MUI and Framer
              Motion. I am always looking forward to learn new technologies and
              to achieve my dreams to become a Full Stack Web Developer.
            </p>
          </div>
        </div>
        <Skills />
        <Education />
        <Experience />
      </div>
    </main>
  );
}

export default About;
