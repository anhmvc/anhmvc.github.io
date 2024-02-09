import "./card.css";

import { Pill } from "../";
import figma from "../../static/icons/figma.svg";
import github from "../../static/icons/github.svg";
import arrowUp from "../../static/icons/arrow-up.svg";
import { isMobile } from 'react-device-detect';

export default function Card(props: {
  title: string;
  subtitle: string;
  tech: Array<string>;
  backgroundColor: string;
  links: Map<string, string>;
  disabled?: Boolean;
}) {

  const outlinksComponent = (
    <div className={`logo-container ${props.disabled ? "disabled" : null}` }>
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
    </div>);
  
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
        {isMobile ? (null) : (outlinksComponent)}
      </div>
      <div style={{ display: "flex", flexDirection: "column"}}>
        <div className="categories-container">
          {props.tech.map((name) => {
            return <Pill name={name} />;
          })}
        </div>
        {props.disabled ?  (<h3 className="error-message">‼️ Demo is currently down ☹️ Rescue team is OTW 👷🚒 ‼️</h3>) : (null)}
        {isMobile ? (outlinksComponent) : (null) }
      </div>
    </div>
  );
}
