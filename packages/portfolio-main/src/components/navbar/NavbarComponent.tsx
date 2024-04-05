import { useState } from "react";
import { PiBugDroidFill } from "react-icons/pi";
import { CapitalizeAllLetter, LogoIcon } from "../index";
import React from "react";
import { NavLink } from "react-router-dom";
import { ReturnProperty } from "../../pages";

const NavbarComponent = () => {
  const [showMobileNavbar, setShowMobileNavbar] = useState<boolean>(false);

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
    {
      title: "projects",
      id: 4,
      to: "projects",
    },
  ];

  return (
    <div className='flex justify-between items-center px-6 py-2 border-b-2 border-gray-400 rounded font-mono box-border'>
      <LogoIcon />
      <div>
        <div className='text-xl md:flex gap-5 hidden '>
          {menuItems?.map(({ title, id, to }) => (
            <NavLink key={id} className='hover:text-brand' to={to}>
              {CapitalizeAllLetter(title)}
            </NavLink>
          ))}
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
            <NavLink key={id} className='hover:text-brand' to={to}>
              {CapitalizeAllLetter(title)}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
