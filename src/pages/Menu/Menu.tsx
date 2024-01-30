import "./menu.css";

import { useState } from "react";
import { Link } from "react-router-dom";
import rightArc from "../../static/icons/right-arc.svg";
import open from "../../static/icons/open.svg";
import close from "../../static/icons/close.svg";

export default function Menu() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <div className="menu-container">
      <div className="control-button">
        <img
          src={showMenu ? close : open}
          alt={showMenu ? "close" : "open"}
          onClick={toggleMenu}
        />
      </div>
      <div
        className={`content ${
          showMenu ? "content-active" : "content-inactive"
        }`}
      >
        <div className="text-container">
          <Link to="/" className="text-item" id="home" onClick={toggleMenu}>
            home
          </Link>
          <Link to="/work" className="text-item" id="work" onClick={toggleMenu}>
            work
          </Link>
          <Link
            to="/about"
            className="text-item"
            id="about"
            onClick={toggleMenu}
          >
            about
          </Link>
          <Link
            to="/contact"
            className="text-item"
            id="contact"
            onClick={toggleMenu}
          >
            contact
          </Link>
          <div className="links-container">
            <div className="links">
              <h2 className="links">linkedin</h2>
              <img className="links" src={rightArc} alt="right-arrow" />
            </div>
            <div className="links">
              <h2 className="links">github</h2>
              <img className="links" src={rightArc} alt="right-arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
