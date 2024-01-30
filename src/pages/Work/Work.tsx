import React from "react";
import "./work.css";

import { Card } from "../../components";

export default function Work() {
  const COLORS = ["Green", "Teal", "Purple", "Pink", "Yellow"];
  const PROJECTS = [
    {
      title: "Royce Hall Simulator",
      subtitle: "Computer Graphics, 3D Modeling",
      tech: ["Javascript", "three.js", "Blender"],
      backgroundColor: "Teal",
      links: ["github"],
    },
    {
      title: "Keep Shopping For",
      subtitle: "Full Stack Development, Front-End Development",
      tech: ["Typescript", "React.js", "React Native", "API Development"],
      links: [],
    },
    {
      title: "Twain",
      subtitle: "Chrome Web Extension, Full Stack Development",
      tech: ["Javascript", "React.js", "Web Development", "API Development"],
      links: ["github"],
    },
    {
      title: "Saru Recycling",
      subtitle: "Web/Mobile Development, UX/UI Design",
      tech: ["Javascript", "React.js", "React Native", "Firebase", "Figma"],
      links: ["github", "figma"],
    },
    {
      title: "The MET Explorer",
      subtitle: "Data Science",
      tech: ["Python", "Jupyter Notebook", "Tableau"],
      links: ["github"],
    },
    {
      title: "Code Connects",
      subtitle: "UX/UI Design",
      tech: ["Figma"],
      links: ["figma"],
    },
    {
      title: "FLUX (Flipped UX)",
      subtitle: "UX/UI Design",
      tech: ["Figma"],
      links: ["figma"],
    },
  ];
  return (
    <div className="page-container">
      <h1 className="title">work</h1>
      <div className="cards-container">
        {PROJECTS.map((project, index) => {
          return (
            <div style={{ zIndex: index }} className="card">
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
      </div>
    </div>
  );
}
