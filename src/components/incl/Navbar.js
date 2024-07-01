import React, { useState, useEffect } from "react";
import "../../App.css";
import { NavLink } from "react-router-dom";
import DarkMode from './DarkMode';

function NavToolbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav>
      <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <h2 className="nav-brand">
          John Atan
        </h2>
        <ul className="nav-links">
          <li>
            <NavLink to="/" className="nav-items">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/techstacks" className="nav-items">
              Tech Stacks
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className="nav-items">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav-items">
              Contact
            </NavLink>
          </li>
          <li>
            {/* <img className="nav-icons" src={GithubIcon} alt="github-icon" />
            <img className="nav-icons" src={UpworkIcon} alt="upwork-icon" /> */}
            <DarkMode />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavToolbar;
