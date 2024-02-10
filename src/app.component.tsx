import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about-page/AboutPage";
import ContactPage from "./pages/contact-page/ContactPage";
import ProjectsPage from "./pages/projects/ProjectsPage";
import FooterComponent from "./components/footer/FooterComponent";
import NavbarComponent from "./components/navbar/NavbarComponent";

function RootComponent() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default RootComponent;
