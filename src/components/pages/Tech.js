import React from "react";
import "../../App.css";
import { Icon } from "@iconify/react";

const CustomIcon = ({ icon }) => {
  if (icon) {
    return <Icon icon={icon} max-width="120px" height="120px"/>;
  }
};

function Tech() {
  return (
    <div className="techstack">
      <h1>My Tech Stack</h1>
      <p>Technologies I've been working with recently</p>
      <ul>
        <li>
          <CustomIcon icon="vscode-icons:file-type-html" />
        </li>
        <li>
          <CustomIcon icon="vscode-icons:file-type-css" />
        </li>
        <li>
          <CustomIcon icon="vscode-icons:file-type-js-official" />
        </li>
        <li>
          <CustomIcon icon="logos:react" />
        </li>
        <li>
          <CustomIcon icon="skill-icons:bootstrap" />
        </li>
        <li>
          <CustomIcon icon="vscode-icons:file-type-sass" />
        </li>
      </ul>
      <ul>
        <li>
          <CustomIcon icon="vscode-icons:file-type-php2" />
        </li>
        <li>
          <CustomIcon icon="devicon:git" />
        </li>
        <li>
          <CustomIcon icon="vscode-icons:file-type-vscode" />
        </li>
        <li>
          <CustomIcon icon="akar-icons:github-fill" />
        </li>
        <li>
          <CustomIcon icon="devicon:figma" />
        </li>
        <li>
          <CustomIcon icon="skill-icons:photoshop" />
        </li>
      </ul>
    </div>
  );
}

export default Tech;
