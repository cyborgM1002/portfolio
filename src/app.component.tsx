import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about-page/AboutPage";
import ContactPage from "./pages/contact-page/ContactPage";
import ProjectsPage from "./pages/projects/ProjectsPage";
import FooterComponent from "./components/footer/FooterComponent";
import NavbarComponent from "./components/navbar/NavbarComponent";
import ErrorPage from "./components/error-page/ErrorPage";

function RootComponent() {
  return (
    <BrowserRouter>
      <div className="font-mono w-full min-h-screen">
        <NavbarComponent />
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
        <FooterComponent />
      </div>
    </BrowserRouter>
  );
}

export default RootComponent;
