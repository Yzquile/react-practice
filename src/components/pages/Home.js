import React from "react";
import "../../App.css";
import { Tech, Project, Footer } from "../incl/";

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
        <Footer />
      </div>
  );
}

export default Home;
