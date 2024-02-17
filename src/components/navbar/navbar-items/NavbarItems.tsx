import { Link } from "react-router-dom";
import { CapitalizeFirstLetter } from "../../../utils/TextCapitalizer";
import { GrHomeRounded } from "react-icons/gr";
import { GiSkills } from "react-icons/gi";
import { FaAppStore } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

function NavbarIcon(value: string) {
  switch (value) {
    case "home":
      return <GrHomeRounded />;
    case "skills":
      return <GiSkills />;
    case "experience":
      return <FaCode />;
    case "projects":
      return <FaAppStore />;
  }
}

const NavbarItems = ({ title }: { title: string }) => {
  return (
    <Link
      className="hover:text-[rgb(0,223,192)]"
      to={title === "home" ? "/" : title}
    >
      {CapitalizeFirstLetter(title)}
    </Link>
  );
};

export const MobileNavbarItems = ({ title }: { title: string }) => {
  return <Link to={title === "home" ? "/" : title}>{NavbarIcon(title)}</Link>;
};

export default NavbarItems;
