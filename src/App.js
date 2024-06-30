import "./App.css";
import { Home, Navbar, Tech, Project, Contact } from "./components/incl";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DarkMode from "./components/incl/DarkMode";

function App() {
  return (
    <Router>
      <DarkMode />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/techstacks" element={<Tech />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
