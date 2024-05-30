import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import RootLayout from "../root.layout";
import React from "react";
import MiniReactAppsHomePage from "../pages/projects/MiniReactAppsHomePage";
import { PasskeyPage } from "../../../react-mini-apps/src/bugg-react-apps";
import HomePage from "@pages/home/HomePage";
import ErrorPage from "@components/error-page/ErrorPage";
import SkillsPage from "@pages/skills-page/SkillsPage";
import ProjectsHomePage from "@pages/projects/ProjectsHomePage";
import ExperiencePage from "@pages/experience-page/ExperiencePage";
import MegaProjectsHomePage from "@pages/projects/MegaProjectsHomePage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route path='' element={<HomePage />} />
      <Route path='*' element={<ErrorPage />} />
      <Route path='skills' element={<SkillsPage />} />
      <Route path='projects' element={<ProjectsHomePage />}>
        <Route path='mega-projects' element={<MegaProjectsHomePage />} />
        <Route path='react-apps' element={<MiniReactAppsHomePage />}>
          <Route path='passkey-app' element={<PasskeyPage />} />
        </Route>
      </Route>
      <Route path='experience' element={<ExperiencePage />} />
    </Route>,
  ),
);
