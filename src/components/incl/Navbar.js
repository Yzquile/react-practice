import React, { useState, useEffect } from "react";
import "../../App.css";
import { NavLink } from "react-router-dom";
import DarkMode from "./DarkMode";

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

  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <nav>
      <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <h2 className="nav-brand">
          <NavLink to="/">John Atan</NavLink>
        </h2>

        <div className="menu" onClick={() => {
          setMenuOpen(!menuOpen);
        }}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={menuOpen ? "open" : ""}>
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
            <NavLink to="/about" className="nav-items">
              About
            </NavLink>
          </li>
          <li>
            <DarkMode />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavToolbar;
