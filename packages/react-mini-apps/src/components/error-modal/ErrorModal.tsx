import React from "react";
import { LuServerCrash } from "react-icons/lu";
import { ReactAppData } from "../../bugg-react-apps";
const ErrorModal = () => {
  return (
    <div className='w-full h-screen flex flex-col gap-10 justify-center items-center'>
      <div className='flex justify-center items-center flex-col z-10 gap-10 shadow-lg shadow-neutral-500 bg-blue-500 rounded-md w-authCard h-modalCard'>
        <span className='text-7xl'>
          <LuServerCrash />
        </span>
        <div className='flex flex-col gap-3 items-center justify-center'>
          <span className='text-3xl font-semibold'>
            {ReactAppData["passkey-app"]["error"]["modal"]["title"]}
          </span>
          <span className='text-xl text-center px-5 font-light'>
            {ReactAppData["passkey-app"]["error"]["modal"]["subtitle"]}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
