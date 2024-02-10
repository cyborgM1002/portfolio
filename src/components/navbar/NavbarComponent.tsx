import { Navbar, NavbarBrand, NavbarToggle } from "flowbite-react";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <Navbar className="border-b-2 border-gray-400 rounded font-mono">
      <NavbarBrand>
        <Link to={"/"} className="flex justify-start items-center">
          <button className="mr-3 pt-1.5 w-12 h-12 rounded-full bg-g whitespace-nowrap text-3xl font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            CB
          </button>
          <span className="text-3xl pt-1.5 font-semibold">CodeBugg</span>
        </Link>
      </NavbarBrand>
      <NavbarToggle />
      <Navbar.Collapse>
        <Navbar.Link>
          <Link className="text-xl" to={"/"}>
            Home
          </Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link className="text-xl" to={"/about"}>
            About
          </Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link className="text-xl" to={"/contact"}>
            Contact
          </Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link className="text-xl" to={"/projects"}>
            Projects
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
