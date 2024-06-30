import "./App.css";
import { Navbar, Tech, Project, Footer } from "./components/incl";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/techstacks" element={<Tech />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;
