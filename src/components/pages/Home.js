import React from "react";
import "../../App.css";
import { Tech, Project, Footer } from "../incl/";
import { Icon } from "@iconify/react";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hi, My name is <br /> <span className="banner-name">John Atan</span>{" "}
          <br /> I build things for web
        </p>
        <img
          src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
          className="App-logo"
          alt="logo"
        />
      </header>
      <Tech />
      <Project />
      <div className="pre-footer">
        <h2>John Atan</h2>
        <p>+63 952 3454 378</p>
        <p>info@example.com</p>
        <ul className="pre-footer-icons">
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
      <Footer />
    </div>
  );
}

export default Home;
