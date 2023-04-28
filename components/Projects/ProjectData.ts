import { StaticImageData } from "next/image";
import TodoCoverPhoto from "../../assets/cover-photos/TodoCover.png";
import NotesCoverPhoto from "../../assets/cover-photos/NoteCover.png";
import MealRecipeCoverPhoto from "../../assets/cover-photos/MealRecipeCover.png";
import MovieCoverPhoto from "../../assets/cover-photos/MovieCover.png";
import LandingPageCoverPhoto from "../../assets/cover-photos/LandingPageCover.png";
import PortfolioCoverPhoto from "../../assets/cover-photos/PorfolioCover.png";

type ProjectDataTypes = {
  title: string;
  subtitle: string;
  description: string;
  demoLink: string;
  codeLink: string;
  coverPhoto: StaticImageData;
};

export const projectData: ProjectDataTypes[] = [
  {
    title: "TODO LIST APP",
    subtitle: "React JS / Tailwind / Redux",
    description:
      "In this project, I created a Complete Todo Application with all features. I do all the Create, Read, Update and Delete (CRUD) operations. I used React JS, Vite and Tailwind CSS and I used  Redux/Redux Toolkit to manage my states. Also I add simple animations using Framer Motion and I used localStorage to persist the data in the application. This Application is hosted in Vercel.",
    demoLink: "https://todoapp-by-marvinel.vercel.app/",
    codeLink: "https://github.com/marvinel1013/Todo-App",
    coverPhoto: TodoCoverPhoto,
  },

  {
    title: "NOTES APP",
    subtitle: "React JS / Tailwind / Firebase",
    description:
      "In this project, I created a Complete Notes Application and Firebase as my back end. I do all the Create, Read, Update and Delete (CRUD) operations in Firebase. I used React JS, Vite and Tailwind CSS and I used Firestore as my back end and data base. In this Application you can search for notes via title. You can create new Notes and choose the color of the notes and also you can update the color you want. This application is fully responsive. This application is hosted in Netlify.",
    demoLink: "https://notes-app-by-marvinel.netlify.app/",
    codeLink: "https://github.com/marvinel1013/Notes-App",
    coverPhoto: NotesCoverPhoto,
  },

  {
    title: "SIMPLE MOVIE APP",
    subtitle: " React JS / Tailwind / Material UI",
    description:
      "In this project, I created the Simple Movie Application in React JS plus Vite. I used Tailwind CSS for styling. I also used Material UI to the Pagination and Headless UI in the Modal component TMDb API as my API.In this Movie App you can see the Weekly Trending and also have a movies page, Tv Series page and a Search page. You can watch the trailer by clicking the See Details button in the Movie Card the modal will appear and click watch trailer button and the app will open the trailer via youtube in new tab of the browser. You can also change the Theme to Darkmode to Lightmode its Darkmode by default. This Application is hosted in Netlify.",
    demoLink: "https://simple-movie-app-by-marvinel.netlify.app/",
    codeLink: "https://github.com/marvinel1013/Movie-App",
    coverPhoto: MovieCoverPhoto,
  },

  {
    title: "MEAL RECIPE APP",
    subtitle: "React JS / Tailwind / React Query",
    description:
      "In this project, I created the Meal Recipe Application in React JS plus Vite. I used Tailwind CSS for styling. I also used React Query and Axios for fetching data from the TheMealDB API. In this Project you can search and choose from the badge the recipe of your favorite meals you will know the ingredients and procedure of the meals that you want. You can save your favorite meals and see it in the meals save page I used localStorage to persist the data. Since its a free API so that the recipe lists is limited and for the search meal as well. This Application is hosted in Netlify.",
    demoLink: "https://recipe-app-by-marvinel.netlify.app/",
    codeLink: "https://github.com/marvinel1013/Recipe-App",
    coverPhoto: MealRecipeCoverPhoto,
  },

  {
    title: "ANIMATED LANDING PAGE",
    subtitle: "React JS / Tailwind / AOS Library",
    description:
      " In this project, I created a Landing Page Application with smooth animation. I created it in React JS, Vite and Tailwind CSS as my CSS framework. This porject is only a UI Design with no functionality only the smooth scrool in every navlink and the animated on scroll this application is fully responsive. I created this project to enhance my skill in Tailwind CSS. This application is hosted in Vercel.",
    demoLink: "https://landing-page-by-marvinel.vercel.app/",
    codeLink: "https://github.com/marvinel1013/Landing-Page-App",
    coverPhoto: LandingPageCoverPhoto,
  },

  {
    title: "MY PORTFOLIO WEBSITE VERSION 1",
    subtitle: "React JS / Tailwind / React Router",
    description:
      " In this project, I created My Very Own Porfolio Website with smooth animation. I created it in React JS, Vite and Tailwind CSS as my CSS framework. I used React Router to handle my routing of pages. I used a library called AOS Animate on Scroll Library for the animation. This application is hosted in Vercel.",
    demoLink: "https://marvinel-santos.vercel.app/",
    codeLink: "https://github.com/marvinel1013/marvinelsantos-portfolio",
    coverPhoto: PortfolioCoverPhoto,
  },
];
