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
  links: Map<string, string>;
}) {
  return (
    <div
      className="card"
      style={{ backgroundColor: `var(--${props.backgroundColor})` }}
    >
      <div className="title-container">
        <div>
          <h1 className="card-title">{props.title}</h1>
          <h2 className="card-subtitle">{props.subtitle}</h2>
        </div>
        <div className="logo-container">
          {props.links.has("github") ? (
            <a
              href={props.links.get("github")}
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="github" className="logo" title="Github" />
            </a>
          ) : null}
          {props.links.has("figma") ? (
            <a href={props.links.get("figma")} target="_blank" rel="noreferrer">
              <img src={figma} alt="figma" className="logo" title="Figma" />
            </a>
          ) : null}
          {props.links.has("website") ? (
            <a
              href={props.links.get("website")}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={arrowUp}
                alt="arrowUp"
                className="logo"
                title="Website"
              />
            </a>
          ) : null}
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
