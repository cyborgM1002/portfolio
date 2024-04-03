import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { NavbarComponent, Bubbles, FooterComponent } from "./components";
import React from "react";
import "./output.css";

function RootLayout() {
  return (
    <div className='font-mono w-full min-h-screen relative'>
      <div className='fixed top-0 w-full bg-white z-50'>
        <NavbarComponent />
      </div>
      <div className='w-full min-h-full flex blur-sm absolute'>
        <Bubbles />
      </div>
      <div className='w-full flex justify-center items-center mt-7 '>
        <Outlet />
      </div>
      <Toaster position='top-center' reverseOrder={true} />
      <FooterComponent />
    </div>
  );
}

export default RootLayout;
