import "./about.css";
import rightArc from "../../static/icons/right-arc.svg";
import meVector from "../../static/images/me-background.svg";
import me from "../../static/images/me.png";
import resume from "../../static/AnhMac_Resume.pdf";

export default function About() {
  return (
    <div className="page-container about">
      <div className="inner-container">
        <div className="about-left">
          <div className="about-text-container">
            <h1 className="about-title">about</h1>
            <hr className="head-separator"></hr>
            <p className="paragraph">
              Hi, I'm Anh Mac, pronounced <i>⋅æn mæk⋅</i>! Currently, I'm a
              Software Engineer, Site Reliability at Google by day and aspiring
              TikTok influencer by night. I love all things creative, to which I
              have found the most joy working on UI design and implementation to
              deliver an exquisite user experience in a product.
            </p>
            <p className="paragraph">
              I have experience in Web/Fullstack/Frontend development and
              Product Design through my work experience and treacherous journey in
              obtaining a B.S. Computer Science at UCLA. I have dabbled in 3D modeling 
              and graphic design here and there. I'm constantly curious to learn more 
              about new technologies to explore how I can push creativity through 
              coding. Past 5 PM, I enjoy learning how to shuffle, doing renovations 
              in my <s>rental</s> home, and going viral on the Internet.
            </p>
            <div className="links">
              <a
                className="links"
                href={resume}
                target="_blank"
                rel="noreferrer"
              >
                <h2 className="links">resume</h2>
                <img className="links" src={rightArc} alt="right-arrow" />
              </a>
            </div>
          </div>
        </div>
        <div className="about-right">
          <div className="circle"></div>
          <img
            src={meVector}
            alt="white-background"
            className="image-background"
          />
          <img src={me} alt="profile" className="image-me" />
        </div>
      </div>
    </div>
  );
}
