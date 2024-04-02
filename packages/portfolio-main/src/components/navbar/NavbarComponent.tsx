import { useState } from "react";
import { PiBugDroidFill } from "react-icons/pi";
import { CapitalizeAllLetter, LogoIcon } from "../index";
import React from "react";
import { NavLink } from "react-router-dom";
import { ReturnProperty } from "../../pages";
import { IoIosArrowDown } from "react-icons/io";

const NavbarComponent = () => {
  const [showMobileNavbar, setShowMobileNavbar] = useState<boolean>(false);
  const [showProjectBar, setShowProjectBar] = useState<boolean>(false);

  const menuItems = [
    {
      title: "home",
      id: 1,
      to: "",
    },
    {
      title: "skills",
      id: 2,
      to: "skills",
    },
    {
      title: "experience",
      id: 3,
      to: "experience",
    },
  ];

  return (
    <div className='flex justify-between items-center px-6 py-2 border-b-2 border-gray-400 rounded font-mono box-border'>
      <LogoIcon />
      <div>
        <div className='text-xl md:flex gap-5 hidden '>
          {menuItems?.map(({ title, id, to }) => (
            <NavLink key={id} className='hover:text-[rgb(0,223,192)]' to={to}>
              {CapitalizeAllLetter(title)}
            </NavLink>
          ))}
          <NavLink
            onClick={() => setShowProjectBar(!showProjectBar)}
            className='flex items-center justify-center gap-1 hover:text-[rgb(0,223,192)] relative'
            to={"projects"}
          >
            {CapitalizeAllLetter("projects")}
            <IoIosArrowDown />
            {showProjectBar && (
              <div className='z-10 top-12 bg-white absolute rounded shadow w-40 dark:bg-gray-700'>
                <ul className='flex flex-col items-start justify-center gap-1 p-2 text-sm text-gray-700 dark:text-gray-200'>
                  <NavLink className='hover:text-[rgb(0,223,192)]' to={"react-apps"}>
                    {CapitalizeAllLetter("Mini React Apps")}
                  </NavLink>
                  <NavLink className='hover:text-[rgb(0,223,192)]' to={"vue-apps"}>
                    {CapitalizeAllLetter("Mini Vue Apps")}
                  </NavLink>
                </ul>
              </div>
            )}
          </NavLink>
        </div>
        <div
          onClick={() => setShowMobileNavbar(!showMobileNavbar)}
          className='text-3xl block gap-5 md:hidden'
        >
          <PiBugDroidFill />
        </div>
        <div
          className={`${ReturnProperty({
            condition: showMobileNavbar,
            trueValue: "w-0 -left-28",
            falseValue: "w-1/6",
          })} flex flex-col justify-center items-start gap-5 md:hidden rounded-br-3xl bg-[rgb(1,134,115)] absolute top-12 left-0 duration-500 py-5 px-2`}
        >
          {menuItems?.map(({ title, id, to }) => (
            <NavLink key={id} className='hover:text-[rgb(0,223,192)]' to={to}>
              {CapitalizeAllLetter(title)}
            </NavLink>
          ))}
          <NavLink className='hover:text-[rgb(0,223,192)]' to={"projects"}>
            {CapitalizeAllLetter("projects")}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
