import "./about.css";
import rightArc from "../../static/icons/right-arc.svg";
import meVector from "../../static/images/me-background.svg";
import me from "../../static/images/me.png";
import resume from "../../static/AnhMac_Resume.pdf";
import { motion as m } from "framer-motion";

export default function About() {
  return (
    <m.div
      className="about-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeIn" }}
    >
      <div className="inner-container">
        <div className="about-left">
          <div className="about-text-container">
            <h1 className="about-title">about</h1>
            <hr className="head-separator"></hr>
            <p className="paragraph">
              Hi, I'm Anh Mac! I'm a{" "}
              <strong>Software Engineer, Site Reliability @ Google</strong> by
              day and aspiring TikTok influencer by night based in{" "}
              <strong>San Francisco</strong>. I love all things creative, to
              which I have found the most joy working on UI design and
              implementation to deliver an exquisite user experience in a
              product. I am interested in exploring work involving new{" "}
              <strong>Generative AI</strong> technologies and{" "}
              <strong>LLMs</strong> to enhance a product for our everyday use.
            </p>
            <p className="paragraph">
              I have experience in generalist Software Engineering, with
              strength in <strong>Full Stack Web/Mobile</strong> development,
              and <strong>Product Design</strong> (as a plus!) through my work
              experience and treacherous journey in obtaining a{" "}
              <strong>B.S. in Computer Science @ UCLA</strong>. I'm constantly
              curious to learn more about new technologies to explore how I can
              push creativity through coding. Past 5 PM, I enjoy learning how to
              shuffle, doing renovations in my <s>rental</s> home, and going
              viral on the Internet.
            </p>
            <p className="paragraph">
              <strong>PROGRAMMING LANGUAGES:</strong> Javascript, Typescript,
              Python, Java, C/C++, Golang
              <br></br>
              <strong>TECHNOLOGIES:</strong> React.js, React Native, Node.js,
              Express.js, Colab/Jupyter Notebooks, Django, Dash, Pandas, NumPy,
              SQL, MongoDB, Docker, Angular, Figma
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
    </m.div>
  );
}
