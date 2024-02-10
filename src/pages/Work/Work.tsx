import { useState } from "react";
import "./work.css";

import { Card } from "../../components";
import { isMobile } from 'react-device-detect';

import royce from "../../static/images/royce-hall.gif";
import twain from "../../static/images/twain.png";
import met from "../../static/images/met.png";
import saru from "../../static/images/saru.png";
import solar from "../../static/images/solar.gif";
import flux from "../../static/images/flux.gif";
import code from "../../static/images/code-connects.png";
import amazon from "../../static/images/amazon.gif";
import penguin from "../../static/images/penguin.png";
import cl_studio from "../../static/images/cl-studio.png";

export default function Work() {
  const [isHover, setHover] = useState(false);
  const [hoverItem, setHoverItem] = useState(-1);

  const COLORS = ["Green", "Teal", "Purple", "Pink", "Yellow"];
  const PROJECTS = [
    {
      title: "Keep Shopping For",
      subtitle: "Full Stack Web/Mobile Development",
      tech: ["Typescript", "React.js", "React Native", "API Development"],
      links: new Map<string, string>([
        ["website", "https://www.amazon.com/"],
      ]),
      img: amazon,
    },
    {
      title: "Royce Hall Simulator",
      subtitle: "Computer Graphics, 3D Modeling",
      tech: ["Javascript", "tiny-graphics.js", "Blender"],
      links: new Map<string, string>([
        ["github", "https://github.com/anhmvc/royce-hall"],
        ["website", "https://www.youtube.com/watch?v=nm2oY81tV9s"],
      ]),
      img: royce,
    },
    {
      title: "Mr. Penguin",
      subtitle: "Computer Graphics, 3D Modeling, Animation",
      tech: ["Blender"],
      links: new Map<string, string>([]),
      img: penguin,
    },
    {
      title: "Twain",
      subtitle: "Chrome Web Extension, Full Stack Development",
      tech: ["Javascript", "React.js", "Web Development", "API Development"],
      links: new Map<string, string>([
        ["github", "https://github.com/ucladevx/twain-extension"],
      ]),
      img: twain,
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
      img: saru,
    },
    {
      title: "FLUX (Flipped UX)",
      subtitle: "UX/UI Design",
      tech: ["Figma"],
      links: new Map<string, string>([
        [
          "figma",
          "https://www.figma.com/file/WDWXIQHBTCNcrm7Uw0qSjO/FLUX-(Flipped-UX)?type=design&node-id=0%3A1&mode=design&t=JdtEayZGqwAj2kxU-1",
        ],
        [ "website", "https://medium.com/creative-labs/demo-day-spring-2019-db8d4f62282#1782"],
      ]),
      img: flux,
    },
    {
      title: "The MET Explorer",
      subtitle: "Data Science, Digital Humanities",
      tech: ["Python", "Jupyter Notebook", "Tableau"],
      links: new Map<string, string>([
        ["website", "https://dh101metexploration.humspace.ucla.edu/"],
      ]),
      img: met,
      disabled: true,
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
      img: code,
    },
    {
      title: "Solar System Simulation",
      subtitle: "Computer Graphics",
      tech: ["Javascript", "three.js"],
      links: new Map<string, string>([
        ["github", "https://github.com/anhmvc/solar-system"],
      ]),
      img: solar,
    },
    {
      title: "CL STUDIO",
      subtitle: "Photography",
      tech: ["Photoshop", "Lightroom"],
      links: new Map<string, string>([
        [ "website", "https://medium.com/creative-labs/demo-day-spring-2019-db8d4f62282#1a41"],
      ]),
      img: cl_studio,
    },
  ];

  function handleHover(i: number) {
    setHover(i > -1 ? true : false);
    setHoverItem(i);
  }

  return (
    <div className="work-container">
      <h1 className="work-title">work</h1>
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
                  disabled={project.disabled ? project.disabled : false}
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
        {isMobile ? (null) : ( <div className="project-images-container">
          {isHover ? (
            <div className="project-image">
              <img
                className="project-image"
                src={PROJECTS[hoverItem].img}
                alt={PROJECTS[hoverItem].title}
              />
            </div>
          ) : null}
        </div>)}
      </div>
    </div>
  );
}
