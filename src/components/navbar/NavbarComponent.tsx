import { useState } from "react";
import { menuItems } from "../../Constants/navbar-items/navbarItems";
import { CapitalizeFirstLetter } from "../../utils/utils";
import NavbarItems, { MobileNavbarItems } from "./navbar-items/NavbarItems";
import { PiBugDroidFill } from "react-icons/pi";
const NavbarComponent = () => {
  const [showMobileNavbar, setShowMobileNavbar] = useState<boolean>(false);
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
        <div
          onClick={() => setShowMobileNavbar(!showMobileNavbar)}
          className="text-3xl block gap-5 md:hidden"
        >
          <PiBugDroidFill />
        </div>
        <div
          className={`flex flex-col justify-center items-center gap-5 md:hidden rounded-br-3xl bg-[rgb(1,134,115)] absolute top-12 left-0 duration-500 py-4 px-3 ${
            showMobileNavbar ? "w-0 -left-10" : "w-1/5"
          }`}
        >
          {menuItems?.map(({ title }, index: number) => {
            return (
              <div
                key={index}
                className="flex flex-col gap-2 justify-center items-center"
              >
                <MobileNavbarItems title={title} />
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
