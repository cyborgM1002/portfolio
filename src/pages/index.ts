import { PageUnderDevelopment, ImageCard } from "../components";
import getGitHubRepos from "../api/getGitHubRepos";
import web_card from "/images/web_ard.jpg";
import { CapitalizeFirstLetter } from "../utils/utils";
import { gitHubApiUrl, userSummary } from "../utils/environmentUtils";
import Wallpaper1 from "/icons/Wallpaper1.svg";
import { Notify, ReturnProperty } from "../utils/utils";
import SkillsPage from "./skills-page/SkillsPage";
import ProjectsPage from "./projects/ProjectsPage";
import HomePage from "./home/HomePage";
import ExperiencePage from "./experience-page/ExperiencePage";

export {
  web_card,
  Wallpaper1,
  userSummary,
  gitHubApiUrl,
  Notify,
  HomePage,
  ImageCard,
  SkillsPage,
  ProjectsPage,
  ExperiencePage,
  getGitHubRepos,
  ReturnProperty,
  CapitalizeFirstLetter,
  PageUnderDevelopment,
};
