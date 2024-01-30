import "./home.css";
import leftCircle from "../../static/icons/left-circle.svg";
import rightCircle from "../../static/icons/right-circle.svg";
import noise from "../../static/images/noise.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="homepage-container">
      <div className="intro-container">
        <div className="intro">
          <h1 className="intro" id="intro-text">
            hi there, i'm
          </h1>
          <h1 className="intro" id="intro-name">
            anh mac.
          </h1>
        </div>
        <h2 className="intro">
          I'M A SOFTWARE ENGINEER, UX/UI DESIGNER, AND GRAPHIC DESIGNER.
        </h2>
      </div>
      <div className="intro-links">
        <div className="intro-sublinks">
          <img src={leftCircle} alt="left-arrow" />
          <Link to="/about" style={{ textDecoration: "none", color: "black" }}>
            <h3 className="intro">
              read <b>about</b> me
            </h3>
          </Link>
        </div>
        <div className="intro-sublinks">
          <Link to="/work" style={{ textDecoration: "none", color: "black" }}>
            <h3 className="intro">
              see my <b>work</b>
            </h3>
          </Link>
          <img src={rightCircle} alt="right-arrow" />
        </div>
      </div>
      <div className="noise" style={{ backgroundImage: `url(${noise})` }}></div>
    </div>
  );
}
