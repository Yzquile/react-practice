import React from "react";
import "../../App.css";
import { Icon } from "@iconify/react";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <h2>John Atan</h2>
        <p>+63 952 3454 378</p>
        <p>info@example.com</p>
        <ul className="footer-icons">
          <li>
            <a href="/">
              <Icon className="icon-footer" icon="akar-icons:github-fill" />
            </a>
          </li>
          <li>
            <a href="/">
              <Icon className="icon-footer" icon="akar-icons:facebook-fill" />
            </a>
          </li>
          <li>
            <a href="/">
              <Icon className="icon-footer" icon="foundation:social-linkedin" />
            </a>
          </li>
        </ul>
      </div>
      <hr className="hr-custom" />
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
