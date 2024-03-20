import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import {
  HomePage,
  ErrorPage,
  SkillsPage,
  ProjectsPage,
  ExperiencePage,
} from "../pages/index";
import RootLayout from "../root.layout";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="" element={<HomePage />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="skills" element={<SkillsPage />} />
      <Route path="projects" element={<ProjectsPage />} />
      <Route path="experience" element={<ExperiencePage />} />
    </Route>
  )
);
