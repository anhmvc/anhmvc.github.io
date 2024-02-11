import { useState } from "react";
import "./work.css";

import { Card } from "../../components";
import { isMobile } from "react-device-detect";
import { motion as m } from "framer-motion";

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
import face from "../../static/images/facial-recognition.png";
import digit from "../../static/images/digit-recognizer.png";

export default function Work() {
  const [isHover, setHover] = useState(false);
  const [hoverItem, setHoverItem] = useState(-1);
  const [isClicked, setClicked] = useState(false);
  const [clickedItem, setClickedItem] = useState(-1);

  const COLORS = ["Green", "Teal", "Purple", "Pink", "Yellow"];
  const PROJECTS = [
    {
      title: "Keep Shopping For",
      subtitle: "Full Stack Web/Mobile Development",
      tech: [
        "Typescript",
        "React.js",
        "Java",
        "React Native",
        "API Development",
      ],
      links: new Map<string, string>([["website", "https://www.amazon.com/"]]),
      img: amazon,
      description:
        "A full-stack feature implemented using Typescript(Web)/React Native(Mobile) frontend and Java backend. The feature is live on the Amazon mobile app and website!",
    },
    {
      title: "Mr. Penguin",
      subtitle: "Computer Graphics, 3D Modeling, Animation",
      tech: ["Blender"],
      links: new Map<string, string>([
        ["website", "https://www.tiktok.com/@mrpenguin.official"],
      ]),
      img: penguin,
      description:
        "A 3D object modeled after my favorite Penguin plushie that is showcase in this portfolio, created and animated using Blender. You can check him out at https://www.tiktok.com/@mrpenguin.official!",
    },
    {
      title: "Twain",
      subtitle: "Chrome Web Extension, Full Stack Development",
      tech: [
        "Javascript",
        "React.js",
        "Node.js",
        "Web Development",
        "API Development",
      ],
      links: new Map<string, string>([
        ["github", "https://github.com/ucladevx/twain-extension"],
      ]),
      img: twain,
      description:
        "A smart scheduling Chrome extension, built in React, that helps users optimize their to-do list by planning tasks around existing events in their Google Calendar. Implemented additional endpoints and extended existing API to handle 'Edit' function when a Task is changed.",
    },
    {
      title: "Facial Recognition",
      subtitle: "ML",
      tech: ["Python", "Colab", "Jupyter Notebooks"],
      links: new Map<string, string>([
        [
          "website",
          "https://colab.sandbox.google.com/drive/1zpO_kXDggX-W52WVoelO_GFHxDfr0m6I?usp=sharing",
        ],
      ]),
      img: face,
      description:
        "A ML model using PCA, k-means/k-medoids clustering methods to perform facial recognition on a dataset of 1867 images of 19 different people.",
    },
    {
      title: "Digit Recognizer",
      subtitle: "ML",
      tech: ["Python", "PyTorch", "TensorFlow", "Colab", "Jupyter Notebooks"],
      links: new Map<string, string>([
        [
          "website",
          "https://colab.research.google.com/drive/1RdVh0qq_m_wi8AwTckK_XyO-7SQxVdXr?usp=sharing",
        ],
      ]),
      img: digit,
      description:
        "A ML model using PyTorch Neural Networks to perform digit recognizing on a training dataset of pairs of 300 28x28 images displayed as binary vectors and corresponding digit labels. ",
    },
    {
      title: "Royce Hall Simulator",
      subtitle: "Computer Graphics, 3D Modeling",
      tech: ["Javascript", "tiny-graphics.js", "Blender"],
      links: new Map<string, string>([
        ["github", "https://github.com/anhmvc/royce-hall"],
        ["demo", "https://www.youtube.com/watch?v=nm2oY81tV9s"],
        ["website", "https://anhm.vc/royce-hall"],
      ]),
      img: royce,
      description:
        "A realistic model of Royce Hall, a landmark at UCLA, in changing seasons and weather built using OpenGL and tinygraphics.js library. Modeled the 3D-objects from scratch using Blender. Worked with a team of 4 to implement the idea, utilizing Scene Graphs and Collision Detection to animate objects and particles in the scene.",
    },
    {
      title: "Saru Recycling",
      subtitle: "Web/Mobile Development, UX/UI Design",
      tech: ["Javascript", "React.js", "React Native", "MongoDB", "Figma"],
      links: new Map<string, string>([
        [
          "figma",
          "https://www.figma.com/file/acMKWyawN9na4h0QR50ljS/Saru-Web-Development?type=design&node-id=0%3A1&mode=design&t=YPJclAjHmikwh1SZ-1",
        ],
      ]),
      img: saru,
      description:
        "A project for Saru Recyling, a student startup at UCR. Led a team of 4 to developed a React web app and a React Native mobile app that allow the firm to measure bin telemetry and for customers to interact with smart recycling bins.",
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
        [
          "website",
          "https://medium.com/creative-labs/demo-day-spring-2019-db8d4f62282#1782",
        ],
      ]),
      img: flux,
      description:
        "A social media web app that showcases the importance of design using visually aesthetic yet purposefully unintuitive UI/UX elements. Spearheaded the design process to design wireframes, user flows, style guides, and mockups. The app is intended to highlight that any app can have beautiful UI but distinctively horrible UX.",
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
      description:
        "A Digital Humanities project that analyzes the diversity, identity, and cultural sustainability of the Met collection using a dataset of the objects at the Met provided by Open Access. Collaborated with a team of 6 to research and write the narrative, told through data visualizations.",
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
        ["website", "https://codeconnects.org/"],
      ]),
      img: code,
      description:
        "A web application where students can access lesson plans, homeworks, and class resources for CodeConnects, an organization that provides 1:1 coding lessons and mentorship for middle and high school students. Designed the wireframes and style guides for the student portal from the ground up.",
    },
    {
      title: "Solar System Simulation",
      subtitle: "Computer Graphics",
      tech: ["Javascript", "tiny-graphics.js"],
      links: new Map<string, string>([
        ["github", "https://github.com/anhmvc/solar-system"],
        ["website", "https://anhm.vc/solar-system"],
      ]),
      img: solar,
      description:
        "A model of the solar system with planets styled by leveraging various shading techniques of Computer Graphics. The camera can attach to a planet in the scene's matrix to follow the movement of the object.",
    },
    {
      title: "CL STUDIO",
      subtitle: "Photography",
      tech: ["Photoshop", "Lightroom"],
      links: new Map<string, string>([
        [
          "website",
          "https://medium.com/creative-labs/demo-day-spring-2019-db8d4f62282#1a41",
        ],
      ]),
      img: cl_studio,
      description:
        "A creative photoshoot project for Creative Labs, a organization at UCLA that aims to bridge the intersection between art and technology. Ideated and executed a photoshoot for 3 project teams using LED projections of bright/vivid colors.",
    },
  ];

  function handleHover(i: number) {
    setHover(i > -1 ? true : false);
    setHoverItem(i);
  }

  function handleClick(i: number) {
    if (!isClicked) {
      // if nothing is clicked
      setClicked(true);
      setClickedItem(i);
    } else {
      // if clicked
      if (clickedItem === i) {
        // same item is clicked
        setClicked(false);
        setClickedItem(-1);
      } else {
        // different item is clicked
        setClickedItem(i);
      }
    }
  }

  return (
    <m.div
      className="work-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeIn" }}
    >
      <h1 className="work-title">work</h1>
      <div className="projects">
        <div className="cards-container">
          {PROJECTS.map((project, index) => {
            return (
              <m.div
                style={{ zIndex: index }}
                className="card-container"
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleHover(-1)}
                onClick={() => handleClick(index)}
                animate={{ y: clickedItem === index ? "-20%" : "0%" }}
              >
                <Card
                  title={project.title}
                  subtitle={project.subtitle}
                  tech={project.tech}
                  backgroundColor={COLORS[index % 5]}
                  links={project.links}
                  disabled={project.disabled ? project.disabled : false}
                  description={project.description ? project.description : ""}
                  expand={clickedItem === index ? true : false}
                />
              </m.div>
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
        {isMobile ? null : (
          <div className="project-images-container">
            {isHover ? (
              <m.div
                className="project-image"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeIn" }}
              >
                <img
                  className="project-image"
                  src={PROJECTS[hoverItem].img}
                  alt={PROJECTS[hoverItem].title}
                />
              </m.div>
            ) : null}
          </div>
        )}
      </div>
    </m.div>
  );
}
