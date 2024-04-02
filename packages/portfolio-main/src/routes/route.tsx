import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import {
  HomePage,
  ErrorPage,
  SkillsPage,
  ProjectsHomePage,
  ExperiencePage,
  MegaProjectsHomePage,
} from "../pages/index";
import RootLayout from "../root.layout";
import React from "react";
import MiniReactAppsHomePage from "../pages/projects/mini-react-apps-home-page/MiniReactAppsHomePage";
import { PasskeyPage } from "../../../react-mini-apps/src/bugg-react-apps";

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
