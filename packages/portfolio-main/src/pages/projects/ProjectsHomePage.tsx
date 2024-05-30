import { ProjectsType } from "types/types";
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import ProjectCards from "./common/ProjectsCards";

const ProjectsHomePage = () => {
  const { pathname } = useLocation();

  const projectTypes: ProjectsType[] = [
    {
      id: 1,
      name: "Mega Projects",
      description: "description",
      link: "mega-projects",
    },
    {
      id: 2,
      name: "Mini React Projects",
      description: "description",
      link: "react-apps",
    },
    {
      id: 3,
      name: "Mini Vue Projects",
      description: "description",
      link: "vue-apps",
    },
  ];
  return (
    <>
      {pathname === "/projects" ? (
        <div className='w-4/5 min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 py-20'>
          {projectTypes?.map(({ id, name, link, description }: ProjectsType) => (
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
