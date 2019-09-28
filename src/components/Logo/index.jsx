import React, { useEffect } from "react";
import logoPixi from "../../scripts/logoPixi";
import { translate3D } from "../../scripts/transform3dMenu";
import scrollReveal from "../../scripts/scrollReveal";

import "./Logo.scss";

const Logo = props => {
  const { type, heading, data } = props;

  useEffect(() => {
    logoPixi(data.logo, data.filter);
    translate3D();
    scrollReveal();
  }, [data.logo, data.filter]);

  const scrollToGallery = () => {
    document.querySelector("main").children[0].scrollIntoView({
      behavior: "smooth",
      block: "end"
    });
    document.body.classList.remove("body-overflow");
  };

  return (
    <nav className="nav-container" onClick={scrollToGallery}>
      <div className="scroll-to-gallery-overlay" onClick={scrollToGallery} />
      <div
        className="nav-frame-wrapper translate3D-wrapper target-js"
        style={{
          transform: "perspective(600px) rotateY(0deg) rotateX(0deg)"
        }}
      >
        <div className="frame">
          <div
            className={`bubble ${type === "the whale" ? "bubble-whale" : ""}`}
          >
            <canvas className="pixi-canvas" id="pixi-canvas" />
          </div>
          <h1
            className={`nav-heading ${
              type === "installation" ? "nav-heading-big" : ""
            } ${type === "the whale" ? "nav-heading-whale" : ""}`}
          >
            <span className="heading-1-js">{heading[0]}</span>
            <br />
            <span className="heading-2-js">{heading[1]}</span>
            <br />
            <span className="heading-3-js">{heading[2]}</span>
          </h1>
        </div>
      </div>
    </nav>
  );
};

export default Logo;
