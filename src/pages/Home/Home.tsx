import "./home.css";
import leftCircle from "../../static/icons/left-circle.svg";
import rightCircle from "../../static/icons/right-circle.svg";
// import noise from "../../static/images/noise.png";
import penguin from "../../static/images/penguin.mp4";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";

export default function Home() {
  const videoTopRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (videoTopRef.current) {
      videoTopRef.current.playbackRate = 0.8;
      videoTopRef.current.addEventListener("canplay", function () {
        setTimeout(function () {
          if (videoTopRef.current) {
            videoTopRef.current.play();
          }
        }, 20);
      });
    }
  }, [videoTopRef]);

  const videoBottomRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (videoBottomRef.current) {
      videoBottomRef.current.playbackRate = 0.8;
      videoBottomRef.current.addEventListener("canplay", function () {
        setTimeout(function () {
          if (videoBottomRef.current) {
            videoBottomRef.current.play();
          }
        });
      });
    }
  }, [videoBottomRef]);

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
          I'M A SOFTWARE ENGINEER, UX/UI DESIGNER, AND DIGITAL ARTIST.
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
      <div className="video-container top-left">
        <video
          ref={videoTopRef}
          muted
          loop
          preload="true"
          className="background-video top-left"
        >
          <source src={penguin} type="video/mp4" />
        </video>
      </div>
      <div className="video-container bottom-right">
        <video
          ref={videoBottomRef}
          muted
          loop
          preload="true"
          className="background-video bottom-right"
        >
          <source src={penguin} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
