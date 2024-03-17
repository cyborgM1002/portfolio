import LogoIcon from "./logo-component/LogoIcon";
import profile from "/images/profile.jpeg";
import { gitHubUrl } from "../utils/environmentUtils.ts";
import bug from "/svg-logo/bug.svg";
import { CapitalizeAllLetter } from "../utils/utils.ts";
import { menuItems } from "../Constants/navbar-items/navbarItems.ts";
import Bubbles from "./bubble-maker/Bubbles.tsx";
import ErrorPage, { PageUnderDevelopment } from "./error-page/ErrorPage.tsx";
import FooterComponent from "./footer/FooterComponent.tsx";
import NavbarComponent from "./navbar/NavbarComponent.tsx";
import ImageCard from "./img-card/ImageCard.tsx";
import NavbarItems, {
  MobileNavbarItems,
} from "./navbar/navbar-items/NavbarItems.tsx";

export {
  bug,
  profile,
  menuItems,
  gitHubUrl,
  Bubbles,
  LogoIcon,
  ErrorPage,
  ImageCard,
  NavbarItems,
  NavbarComponent,
  FooterComponent,
  MobileNavbarItems,
  CapitalizeAllLetter,
  PageUnderDevelopment,
};
