import React, { useState, useEffect } from "react";
import GithubIcon from "../icons/github-icon.svg";
import UpworkIcon from "../icons/upwork.svg";
import "../../App.css";
import { Link } from "react-router-dom";

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
            <Link to="/" className="nav-items">
              Home
            </Link>
          </li>
          <li>
            <Link to="/techstacks" className="nav-items">
              Tech Stacks
            </Link>
          </li>
          <li>
            <Link to="/projects" className="nav-items">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-items">
              Contact
            </Link>
          </li>
          <li>
            <img className="nav-icons" src={GithubIcon} alt="github-icon" />
            <img className="nav-icons" src={UpworkIcon} alt="upwork-icon" />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavToolbar;
