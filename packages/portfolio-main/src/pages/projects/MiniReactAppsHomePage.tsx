import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ProjectsType } from "types/types";
import ProjectCards from "./common/ProjectsCards";

const MiniReactAppsHomePage = () => {
  const { pathname } = useLocation();
  const MiniReactApps = [
    {
      id: 1,
      name: "Passkey App",
      description: "description",
      link: "passkey-app",
    },
    {
      id: 2,
      name: "Passkey App",
      description: "description",
      link: "passkey-app1",
    },
    {
      id: 3,
      name: "Passkey App",
      description: "description",
      link: "passkey-app2",
    },
    {
      id: 4,
      name: "Passkey App",
      description: "description",
      link: "passkey-app3",
    },
  ];
  return (
    <div className='w-full min-h-screen'>
      {pathname === "/projects/react-apps" ? (
        <div className='w-4/5 min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 py-20'>
          {MiniReactApps?.map(({ id, name, description, link }: ProjectsType) => (
            <div key={id}>
              <ProjectCards name={name} description={description} link={link} />
            </div>
          ))}
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
};

export default MiniReactAppsHomePage;
