import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import {
  Bubbles,
  ErrorPage,
  FooterComponent,
  NavbarComponent,
} from "./components/index";
import {
  ExperiencePage,
  HomePage,
  ProjectsPage,
  SkillsPage,
} from "./pages/index";

function RootComponent() {
  return (
    <BrowserRouter>
      <div className="font-mono w-full min-h-screen">
        <div className="fixed top-0 w-full bg-white z-50">
          <NavbarComponent />
        </div>
        <div className="w-full flex justify-center items-center mt-7 relative">
          <div className="w-full h-screen flex blur-sm absolute">
            <Bubbles />
          </div>
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
