import React from "react";
import "./work.css";

import { Card } from "../../components";

export default function Work() {
  const PROJECTS = [
    {
      title: "Royce Hall Simulator",
      subtitle: "Computer Graphics, 3D Modeling",
      tech: ["Javascript", "three.js", "Blender"],
      backgroundColor: "Teal",
      links: ["github"],
    },
    {
      title: "Twain",
      subtitle: "Chrome Web Extension, Full Stack Development",
      tech: ["Javascript", "React.js", "Web Development", "API Development"],
      backgroundColor: "Teal",
      links: ["github"],
    },
    {
      title: "Saru Recycling",
      subtitle: "Web/Mobile Development, UX/UI Design",
      tech: ["Javascript", "React.js", "React Native", "Firebase", "Figma"],
      backgroundColor: "Teal",
      links: ["github", "figma"],
    },
    {
      title: "The MET Explorer",
      subtitle: "Data Science",
      tech: ["Python", "Jupyter Notebook", "Tableau"],
      backgroundColor: "Teal",
      links: ["github"],
    },
    {
      title: "Code Connects",
      subtitle: "UX/UI Design",
      tech: ["Figma"],
      backgroundColor: "Teal",
      links: ["figma"],
    },
    {
      title: "FLUX",
      subtitle: "UX/UI Design",
      tech: ["Figma"],
      backgroundColor: "Teal",
      links: ["figma"],
    },
  ];
  return (
    <div className="page-container">
      <h1 className="title">work</h1>
      {PROJECTS.map((project) => {
        return (
          <Card
            title={project.title}
            subtitle={project.subtitle}
            tech={project.tech}
            backgroundColor={project.backgroundColor}
            links={project.links}
          />
        );
      })}
    </div>
  );
}
