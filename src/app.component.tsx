import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import ProjectsPage from "./pages/projects/ProjectsPage";
import FooterComponent from "./components/footer/FooterComponent";
import NavbarComponent from "./components/navbar/NavbarComponent";
import ErrorPage from "./components/error-page/ErrorPage";
import ExperiencePage from "./pages/experience-page/ExperiencePage";
import SkillsPage from "./pages/skills-page/SkillsPage";
import { Toaster } from "react-hot-toast";

function RootComponent() {
  return (
    <BrowserRouter>
      <div className="font-mono w-full min-h-screen">
        <div className="fixed top-0 w-full bg-white z-50">
          <NavbarComponent />
        </div>
        <div className="w-full flex justify-center items-center mt-7">
          <Routes>
            <Route path="*" element={<ErrorPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </div>
        <Toaster position="top-center" reverseOrder={true} />
        <FooterComponent />
      </div>
    </BrowserRouter>
  );
}

export default RootComponent;
