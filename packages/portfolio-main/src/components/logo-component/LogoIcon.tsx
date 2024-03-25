import { Link } from "react-router-dom";
import { bug } from "../index";
import React from "react";

const LogoIcon = () => {
  return (
    <div>
      <Link to={"/"} className='flex justify-start items-center gap-2'>
        <div className='md:w-10 md:h-10 w-8 h-8 hover:animate-ping'>
          <img src={bug} />
        </div>
        <span className='md:text-3xl text-xl hover:animate-pulse md:pt-1.5 pt-1 font-semibold'>
          BUGG
        </span>
      </Link>
    </div>
  );
};

export default LogoIcon;
