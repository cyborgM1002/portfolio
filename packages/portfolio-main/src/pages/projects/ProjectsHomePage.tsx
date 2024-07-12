import React from "react";
import { ProjectsType } from "../../types/types";
import { Outlet, useLocation } from "react-router-dom";
import ProjectCards from "./common/ProjectsCards";
import { projects } from "../../constants/projects.constants";

const ProjectsHomePage = () => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname === "/projects" ? (
        <div className='w-4/5 min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 py-20'>
          {projects?.map(({ id, name, link, description }: ProjectsType) => (
            <div key={id}>
              <ProjectCards name={name} description={description} link={link} />
            </div>
          ))}
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default ProjectsHomePage;
