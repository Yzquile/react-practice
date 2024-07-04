import React, { useEffect } from "react";
import "../../App.css";
import { Icon } from "@iconify/react";
import Aos from "aos";
import 'aos/dist/aos.css';

const Card = ({ image, title, description, techStack, liveLink, codeLink }) => {
  useEffect (() => {
    Aos.init();
  })
  return (
    <div className="card" data-aos="flip-right" data-aos-duration="1000">
      <img src={image} alt={title} className="card-img" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-tech">
          <span className="tech-title">Tech stack:</span> {techStack}
        </p>
        <div className="card-links">
          <div className="card-links-item">
            <Icon
              className="card-links-icon"
              icon="akar-icons:link-chain"
            />
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              Live Preview
            </a>
          </div>
          <div className="card-links-item">
            <Icon className="card-links-icon" icon="akar-icons:github-fill" />
            <a href={codeLink} target="_blank" rel="noopener noreferrer">
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

function Project() {
  const cards = [
    {
      image: "https://images.pexels.com/photos/459203/pexels-photo-459203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Project Title",
      description:
        "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content.",
      techStack: "HTML, JavaScript, SASS, React",
      liveLink: "#",
      codeLink: "#",
    },
    {
      image: "https://images.pexels.com/photos/15239/flower-roses-red-roses-bloom.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Project Title",
      description:
        "This is a sample project description. Random things are here in the description. This is a sample project lorem ipsum generator for dummy content.",
      techStack: "HTML, JavaScript, SASS, React",
      liveLink: "#",
      codeLink: "#",
    },
    {
      image: "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Project Title",
      description:
        "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content.",
      techStack: "HTML, JavaScript, CSS, React",
      liveLink: "#",
      codeLink: "#",
    },
    {
      image: "https://images.pexels.com/photos/1212693/pexels-photo-1212693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Project Title",
      description:
        "This is a sample project description. Random things are here in the description. This is a sample project lorem ipsum generator for dummy content.",
      techStack: "HTML, JavaScript, SASS, React",
      liveLink: "#",
      codeLink: "#",
    },
    {
      image: "https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Project Title",
      description:
        "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content.",
      techStack: "HTML, JavaScript, SASS, React",
      liveLink: "#",
      codeLink: "#",
    },
    {
      image: "https://images.pexels.com/photos/50594/sea-bay-waterfront-beach-50594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Project Title",
      description:
        "This is a sample project description. Random things are here in the description. This is a sample project lorem ipsum generator for dummy content.",
      techStack: "HTML, JavaScript, SASS, React",
      liveLink: "#",
      codeLink: "#",
    },
  ];

  return (
    <div className="project">
      <h1 data-aos="zoom-in" data-aos-duration="1000">Projects</h1>
      <p data-aos="zoom-in" data-aos-duration="1000">Things I’ve built so far</p>
      <div className="card-container">
        {cards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            techStack={card.techStack}
            liveLink={card.liveLink}
            codeLink={card.codeLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Project;
