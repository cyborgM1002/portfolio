import web_card from "../../public/images/web_ard.jpg";
import { CapitalizeFirstLetter } from "../utils/utils";
import Wallpaper1 from "../../public/icons/Wallpaper1.svg";
import { Notify, ReturnProperty } from "../utils/utils";
import SkillsPage from "./skills-page/SkillsPage";
import ProjectsPage from "./projects/ProjectsPage";
import HomePage from "./home/HomePage";
import ExperiencePage from "./experience-page/ExperiencePage";
import ImageCard from "../components/img-card/ImageCard";
import ErrorPage, { PageUnderDevelopment } from "../components/error-page/ErrorPage";
import { GITHUB_API_REPO_URL } from "../env";
export {
  web_card,
  Wallpaper1,
  GITHUB_API_REPO_URL,
  Notify,
  HomePage,
  ErrorPage,
  ImageCard,
  SkillsPage,
  ProjectsPage,
  ReturnProperty,
  ExperiencePage,
  CapitalizeFirstLetter,
  PageUnderDevelopment,
};
