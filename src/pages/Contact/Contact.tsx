import "./contact.css";
import noise from "../../static/images/noise.png";

export default function Contact() {
  return (
    <div className="page-container contact">
      <h1 className="title contact-title" id="intro-name">
        contact
      </h1>
      <hr className="head-separator"></hr>
      <div className="contact-container">
        <div className="contact-left">
          <h1>mail</h1>
          <br></br>
          <h1>social medias</h1>
        </div>
        <div className="contact-right">
          <a href="mailto:anhmvc@g.ucla.edu" target="_blank" rel="noreferrer">
            <h1>anhmvc@g.ucla.edu</h1>
          </a>
          <br></br>
          <a
            href="https://www.linkedin.com/in/anhmvc/"
            target="_blank"
            rel="noreferrer"
          >
            <h1>↗ linkedin</h1>
          </a>
          <a href="https://github.com/anhmvc" target="_blank" rel="noreferrer">
            <h1>↗ github</h1>
          </a>
          <a
            href="https://www.instagram.com/anhmvc/"
            target="_blank"
            rel="noreferrer"
          >
            <h1>↗ instagram</h1>
          </a>
        </div>
      </div>
      <div className="noise" style={{ backgroundImage: `url(${noise})` }}></div>
    </div>
  );
}
