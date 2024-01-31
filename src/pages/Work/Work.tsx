import React, { useState } from "react";
import "./work.css";

import { Card } from "../../components";

export default function Work() {
  const [isHover, setHover] = useState(false);
  const [hoverItem, setHoverItem] = useState(-1);

  const COLORS = ["Green", "Teal", "Purple", "Pink", "Yellow"];
  const PROJECTS = [
    {
      title: "Royce Hall Simulator",
      subtitle: "Computer Graphics, 3D Modeling",
      tech: ["Javascript", "three.js", "Blender"],
      backgroundColor: "Teal",
      links: new Map<string, string>([
        ["github", "https://github.com/anhmvc/royce-hall"],
      ]),
      img: "",
    },
    {
      title: "Keep Shopping For",
      subtitle: "Full Stack Development, Front-End Development",
      tech: ["Typescript", "React.js", "React Native", "API Development"],
      links: new Map<string, string>([]),
      img: "",
    },
    {
      title: "Twain",
      subtitle: "Chrome Web Extension, Full Stack Development",
      tech: ["Javascript", "React.js", "Web Development", "API Development"],
      links: new Map<string, string>([
        ["github", "https://github.com/ucladevx/twain-extension"],
      ]),
      img: "",
    },
    {
      title: "Saru Recycling",
      subtitle: "Web/Mobile Development, UX/UI Design",
      tech: ["Javascript", "React.js", "React Native", "Firebase", "Figma"],
      links: new Map<string, string>([
        [
          "figma",
          "https://www.figma.com/file/acMKWyawN9na4h0QR50ljS/Saru-Web-Development?type=design&node-id=0%3A1&mode=design&t=YPJclAjHmikwh1SZ-1",
        ],
      ]),
      img: "",
    },
    {
      title: "The MET Explorer",
      subtitle: "Data Science",
      tech: ["Python", "Jupyter Notebook", "Tableau"],
      links: new Map<string, string>([
        ["website", "https://dh101metexploration.humspace.ucla.edu/"],
      ]),
      img: "",
    },
    {
      title: "Code Connects",
      subtitle: "UX/UI Design",
      tech: ["Figma"],
      links: new Map<string, string>([
        [
          "figma",
          "https://www.figma.com/file/x9uSlKCqGt2z7yIVAuWQwq/CodeConnects-Student-Portal?type=design&mode=design&t=YPJclAjHmikwh1SZ-1",
        ],
      ]),
      img: "",
    },
    {
      title: "FLUX (Flipped UX)",
      subtitle: "UX/UI Design",
      tech: ["Figma"],
      links: new Map<string, string>([["figma", "figma"]]),
      img: "",
    },
  ];

  function handleHover(i: number) {
    setHover(i > -1 ? true : false);
    setHoverItem(i);
  }

  return (
    <div className="page-container">
      <h1 className="title work-title">work</h1>
      <div className="projects">
        <div className="cards-container">
          {PROJECTS.map((project, index) => {
            return (
              <div
                style={{ zIndex: index }}
                className="card-container"
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleHover(-1)}
              >
                <Card
                  title={project.title}
                  subtitle={project.subtitle}
                  tech={project.tech}
                  backgroundColor={COLORS[index % 5]}
                  links={project.links}
                />
              </div>
            );
          })}
          <div style={{ opacity: 0 }} className="card-container">
            <Card
              title=""
              subtitle=""
              tech={[""]}
              backgroundColor=""
              links={new Map<string, string>()}
            />
          </div>
        </div>
        <div className="project-images-container">
          {isHover ? (
            <div className="project-image">
              <img
                className="project-image"
                src={PROJECTS[hoverItem].img}
                alt={PROJECTS[hoverItem].title}
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
