import React from "react";
import "../../App.css";


function Footer() {
  return (
    <footer>
      <div className="footer-below">
        <ul className="footer-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Tech Stacks</a>
          </li>
          <li>
            <a href="/">Projects</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
        <p className="footer-text">
          Built with{" "}
          <span className="love">&hearts;</span> & ☕ by John Atan 
        </p>
      </div>
    </footer>
  );
}

export default Footer;
