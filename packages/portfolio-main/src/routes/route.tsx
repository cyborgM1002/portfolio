import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import {
  HomePage,
  ErrorPage,
  SkillsPage,
  ProjectsHomePage,
  ExperiencePage,
  MajorProjectsHomePage,
} from "../pages/index";
import RootLayout from "../root.layout";
import React from "react";
import { PasskeyPage } from "../../../react-mini-apps/src/bugg-react-apps";
import ReactAppsHomePage from "../pages/projects/ReactAppsHomePage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route path='' element={<HomePage />} />
      <Route path='*' element={<ErrorPage />} />
      <Route path='skills' element={<SkillsPage />} />
      <Route path='projects' element={<ProjectsHomePage />}>
        <Route path='mega-projects' element={<MajorProjectsHomePage />} />
        <Route path='react-apps' element={<ReactAppsHomePage />}>
          <Route path='passkey-app' element={<PasskeyPage />} />
        </Route>
      </Route>
      <Route path='experience' element={<ExperiencePage />} />
    </Route>,
  ),
);
