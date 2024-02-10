import "./home.css";
import leftCircle from "../../static/icons/left-circle.svg";
import rightCircle from "../../static/icons/right-circle.svg";
// import noise from "../../static/images/noise.png";
import penguin from "../../static/images/penguin.mp4";
import penguinGif from "../../static/images/penguin.gif";
import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { motion as m } from "framer-motion";

export default function Home() {
  // 0 is default, -1 is left, 1 is right
  const [moveDirection, setMoveDirection] = useState(0);

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
    <m.div
      initial={{ opacity: 0, x: "0%" }}
      animate={{ opacity: 1 }}
      transition={{
        opacity: { duration: 2, ease: "easeIn" },
        x: { duration: 0.3, ease: "easeOut" },
      }}
      exit={{ x: moveDirection > 0 ? "100%" : "-100%" }}
      className="homepage-container"
    >
      <m.div className="intro-container">
        <div className="intro">
          <h1 className="intro" id="intro-text">
            hi there, i'm
          </h1>
          <h1 className="intro" id="intro-name">
            anh mac.
          </h1>
        </div>
        <h2 className="intro" id="intro-description">
          I'M A SOFTWARE ENGINEER, UX/UI DESIGNER, AND DIGITAL ARTIST.
        </h2>
      </m.div>
      <div className="intro-links">
        <div
          className="intro-sublinks"
          onClick={() => {
            setMoveDirection(1);
          }}
        >
          <img className="arrow" src={leftCircle} alt="left-arrow" />
          <Link to="/about" style={{ textDecoration: "none", color: "black" }}>
            <h3 className="intro">
              read <b>about</b> me
            </h3>
          </Link>
        </div>
        <div
          className="intro-sublinks"
          onClick={() => {
            setMoveDirection(-1);
          }}
        >
          <Link to="/work" style={{ textDecoration: "none", color: "black" }}>
            <h3 className="intro">
              see my <b>work</b>
            </h3>
          </Link>
          <img className="arrow" src={rightCircle} alt="right-arrow" />
        </div>
      </div>
      <div className="video-container top-left">
        {isMobile ? (
          <img
            className="background-video top-left"
            src={penguinGif}
            alt="background-penguin"
          />
        ) : (
          <video
            ref={videoTopRef}
            muted
            loop
            playsInline
            preload="true"
            className="background-video top-left"
          >
            <source src={penguin} type="video/mp4" />
          </video>
        )}
      </div>
      <div className="video-container bottom-right">
        {isMobile ? (
          <img
            className="background-video bottom-right"
            src={penguinGif}
            alt="background-penguin"
          />
        ) : (
          <video
            ref={videoBottomRef}
            muted
            loop
            playsInline
            preload="true"
            className="background-video bottom-right"
          >
            <source src={penguin} type="video/mp4" />
          </video>
        )}
      </div>
    </m.div>
  );
}
