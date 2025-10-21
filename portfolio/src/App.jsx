import { Routes, Route, HashRouter } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import ProjectPage from "./pages/projectPage/ProjectPage";
import AllProjectsPage from "./pages/AllProjectsPage/allProjectsPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import GamePage from "./pages/gamePage/GamePage";
import ContactPage from "./pages/contactPage/ContactPage";
import "./index.css";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<AllProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
