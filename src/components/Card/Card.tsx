import "./card.css";

import { Pill } from "../";
import figma from "../../static/icons/figma.svg";
import github from "../../static/icons/github.svg";
import arrowUp from "../../static/icons/arrow-up.svg";

export default function Card(props: {
  title: string;
  subtitle: string;
  tech: Array<string>;
  backgroundColor: string;
  links: Array<string>;
}) {
  return (
    <div
      className="card-container"
      // style={{ backgroundColor: props.backgroundColor }}
    >
      <div className="title-container">
        <div>
          <h1 className="card-title">{props.title}</h1>
          <h2 className="card-categories">{props.subtitle}</h2>
        </div>
        <div className="logo-container">
          {props.links.includes("github") ? (
            <img src={github} alt="github" />
          ) : null}
          {props.links.includes("figma") ? (
            <img src={figma} alt="figma" />
          ) : null}
          <img src={arrowUp} alt="arrowUp" />
        </div>
      </div>
      <div className="categories-container">
        {props.tech.map((name) => {
          return <Pill name={name} />;
        })}
      </div>
    </div>
  );
}
