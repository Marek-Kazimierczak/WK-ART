import React, { Component } from "react";

import "./Logo.scss";

class Nav extends Component {
  scrollToGallery = () => {
    document.querySelector("main").scrollIntoView({ behavior: "smooth" });
    document.body.classList.remove("body-overflow");
  };

  render() {
    const { type, heading } = this.props;
    return (
      <nav className="nav-container">
        <div
          onClick={this.scrollToGallery}
          className="nav-frame-wrapper translate3D-wrapper target-js"
          style={{
            transform: "perspective(600px) rotateY(0deg) rotateX(0deg)"
          }}
        >
          <div className="frame">
            <div className="bubble">
              <canvas className="pixi-canvas" id="pixi-canvas" />
            </div>
            <h1
              className={`nav-heading ${type === "installation" &&
                "nav-heading-big"}`}
            >
              <span className="heading-1-js">{heading[0]}</span>
              <br />
              <span className="heading-2-js">{heading[1]}</span>
              <br />
              <span className="heading-3-js">{heading[2]}</span>
            </h1>
          </div>
          {/* </div> */}
        </div>
      </nav>
    );
  }
}

export default Nav;
