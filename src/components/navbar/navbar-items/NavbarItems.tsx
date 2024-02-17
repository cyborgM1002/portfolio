import { Link } from "react-router-dom";
import { CapitalizeFirstLetter } from "../../../utils/TextCapitalizer";
import { GrHomeRounded } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { SiOpenproject } from "react-icons/si";
import { FaProjectDiagram } from "react-icons/fa";

function NavbarIcon(value: string) {
  switch (value) {
    case "home":
      return <GrHomeRounded />;
    case "about":
      return <FaRegCircleUser />;
    case "contact":
      return <FaProjectDiagram />;
    case "projects":
      return <SiOpenproject />;
  }
}

const NavbarItems = ({ title }: { title: string }) => {
  return (
    <Link className="hover:text-blue-700" to={title === "home" ? "/" : title}>
      {CapitalizeFirstLetter(title)}
    </Link>
  );
};

export const MobileNavbarItems = ({ title }: { title: string }) => {
  return <Link to={title === "home" ? "/" : title}>{NavbarIcon(title)}</Link>;
};

export default NavbarItems;
