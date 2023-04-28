import html from "../../../assets/tech_logo/html.png";
import css from "../../../assets/tech_logo/css.png";
import javascript from "../../../assets/tech_logo/javascript.png";
import reactjs from "../../../assets/tech_logo/react.png";
import tailwind from "../../../assets/tech_logo/tailwind.png";
import nextjs from "../../../assets/tech_logo/nextjs.png";
import typescript from "../../../assets/tech_logo/typescript.png";
import redux from "../../../assets/tech_logo/redux.png";
import reactquery from "../../../assets/tech_logo/reactquery.svg";
import firebase from "../../../assets/tech_logo/firebase.png";
import vite from "../../../assets/tech_logo/vite.png";
import github from "../../../assets/tech_logo/github.png";
import { StaticImageData } from "next/image";

type DataType =
  | {
      logo: any;
      title: string;
      bg?: undefined;
    }
  | {
      logo: StaticImageData;
      title: string;
      bg: string;
    };

export const SkillsTechData: DataType[] = [
  {
    logo: html,
    title: "HTML",
  },
  {
    logo: css,
    title: "CSS",
  },
  {
    logo: javascript,
    title: "JavaScript",
  },
  {
    logo: reactjs,
    title: "React JS",
  },
  {
    logo: tailwind,
    title: "Tailwind CSS",
  },
  {
    logo: nextjs,
    title: "Next JS",
  },
  {
    logo: typescript,
    title: "TypeScript",
  },
  {
    logo: redux,
    title: "Redux",
  },
  {
    logo: reactquery,
    title: "React Query",
  },
  {
    logo: firebase,
    title: "Firebase",
  },
  {
    logo: vite,
    title: "Vite",
  },
  {
    logo: github,
    title: "GitHub",
    bg: "bg-black",
  },
];
