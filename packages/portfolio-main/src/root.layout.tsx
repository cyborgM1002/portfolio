import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { NavbarComponent, Bubbles, FooterComponent } from "./components";
import React from "react";

function RootLayout() {
  return (
    <div className='font-mono w-full min-h-screen'>
      <div className='fixed top-0 w-full bg-white z-50'>
        <NavbarComponent />
      </div>
      <div className='w-full flex justify-center items-center mt-7 relative'>
        <div className='w-full h-screen flex blur-sm absolute'>
          <Bubbles />
        </div>
        <Outlet />
      </div>
      <Toaster position='top-center' reverseOrder={true} />
      <FooterComponent />
    </div>
  );
}

export default RootLayout;
