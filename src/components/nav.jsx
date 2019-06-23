import React, { Component } from "react";
import Contact from "./contact";

class Nav extends Component {
  scrollToGallery = () => {
    document.querySelector("main").scrollIntoView({ behavior: "smooth" });
    document.body.classList.remove("body-overflow");
  };

  render() {
    return (
      <nav>
        <Contact />
        <div className="nav-contact">
          <p
            className="contact-link open-js"
            onClick={() => document.body.classList.add("body-overflow-contact")}
          >
            Contact
          </p>

          <a href="https://www.behance.net/wkazimierc8a74" target="_blank">
            <span className="fab fa-behance" />
          </a>
        </div>

        <div
          onClick={this.scrollToGallery}
          className="nav-frame wrapper target-js"
          style={{
            transform: "perspective(600px) rotateY(0deg) rotateX(0deg)"
          }}
        >
          <div className="bubble">
            <canvas id="canvas" />
          </div>
          <div className="frame">
            <h1 className="content">
              <span className="heading-1-js">{this.props.heading[0]}</span>
              <br />
              <span className="heading-2-js">{this.props.heading[1]}</span>
              <br />
              <span className="heading-3-js">{this.props.heading[2]}</span>
            </h1>
          </div>
        </div>
        <div onClick={this.scrollToGallery} className="link-gallery">
          Gallery
        </div>
      </nav>
    );
  }
}

export default Nav;
