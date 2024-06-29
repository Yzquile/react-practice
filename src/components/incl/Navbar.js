import React, { useState, useEffect } from "react";
import GithubIcon from "../icons/github-icon.svg";
import UpworkIcon from "../icons/upwork.svg";
import "../../App.css";

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
    <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <h2>John Atan</h2>
      <ul className="nav-links">
        <li>Home</li>
        <li>Tech Stacks</li>
        <li>Projects</li>
        <li>Contact</li>
        <li>
          <img className="nav-icons" src={GithubIcon} alt="github-icon" />
          <img className="nav-icons" src={UpworkIcon} alt="upwork-icon" />
        </li>
      </ul>
    </div>
  );
}

export default NavToolbar;
