import React, { useEffect } from "react";
import "../../App.css";
import { Icon } from "@iconify/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { SectionHeading } from "../incl";

const CustomIcon = ({ icon }) => {
  if (icon) {
    return <Icon icon={icon} max-width="120px" height="120px" />;
  }
};

function Tech() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div
      className="techstack"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <SectionHeading
        title="My Tech Stack"
        subtitle="Technologies I've been working with recently"
      />
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
