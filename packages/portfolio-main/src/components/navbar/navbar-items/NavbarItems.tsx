import { Link } from "react-router-dom";
import { CapitalizeAllLetter } from "../../../utils/utils";
import React from "react";
import { ProjectsIcon, HomeIcon, SkillIcon, ExperienceIcon } from "../../index";

function NavbarIcon(value: string) {
  switch (value) {
    case "home":
      return HomeIcon;
    case "skills":
      return SkillIcon;
    case "experience":
      return ExperienceIcon;
    case "projects":
      return ProjectsIcon;
  }
}

const NavbarItems = ({ title }: { title: string }) => {
  return (
    <Link className='hover:text-[rgb(0,223,192)]' to={title === "home" ? "/" : title}>
      {CapitalizeAllLetter(title)}
    </Link>
  );
};

export const MobileNavbarItems = ({ title }: { title: string }) => {
  return (
    <Link to={title === "home" ? "/" : title}>
      <img className='md:w-14 md:h-14 w-10 h-10' src={NavbarIcon(title)} alt='' />
    </Link>
  );
};

export default NavbarItems;
