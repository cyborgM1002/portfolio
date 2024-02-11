import { menuItems } from "../../Constants/navbar-items/navbarItems";
import { CapitalizeFirstLetter } from "../../utils/text-capitalizer/TextCapitalizer";
import LogoIcon from "../logo-component/LogoIcon";
import NavbarItems, { MobileNavbarItems } from "./navbar-items/NavbarItems";

const NavbarComponent = () => {
  return (
    <div className="flex justify-between items-center px-6 py-2 border-b-2 border-gray-400 rounded font-mono box-border">
      <LogoIcon />
      <div>
        <div className="text-xl md:flex gap-5 hidden ">
          {menuItems?.map(({ title }, index: number) => {
            return (
              <div key={index}>
                <NavbarItems title={title} />
              </div>
            );
          })}
        </div>
        <div className="text-xl flex justify-center items-center gap-5 md:hidden bg-blue-500 absolute bottom-5 left-0 w-4/5 rounded-xl mx-10 py-3 px-5">
          {menuItems?.map(({ title }, index: number) => {
            return (
              <div className="flex flex-col gap-2 justify-center items-center">
                <div
                  key={index}
                  className="w-12 h-12 text-2xl font-bold bg-gray-50 flex flex-col justify-center items-center rounded-full"
                >
                  <MobileNavbarItems title={title} />
                </div>
                <span className="text-xs text-white">
                  {CapitalizeFirstLetter(title)}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;

/*   {showMenuName && (
                  <div className="absolute min-w-[100px] flex justify-center items-center p-1 bg-black/80 text-gray-50 rounded-md  text-xs">
                    {CapitalizeFirstLetter(title)}
                  </div>
                )} */
