import React, { Component } from "react";
import aboutMeWindow from "../../scripts/aboutMeWindow";

import "./AboutMe.scss";

class AboutMe extends Component {
  render() {
    return (
      <div className="contact-window window-js">
        <div className="contact-wrapper">
          <div className="avatar" />
          <div className="info">
            <h1>Wojciech Kazimierczak</h1>
            <p>
              I am visual artist, soon will be graduated at the Academy of Fine
              Arts in Katowice. I used to focus my interest on traditional
              techniques mostly, turned to digital media in recent months
              though. Now I'm keen on 3D design and develop myself in this
              field. I'm a person with huge interest in world, so I'm fond of
              travelling and exploring. Above all I love outdoor activities so I
              run, swim and skateboard quite a bit.
            </p>
          </div>
        </div>
        <button
          className="btn exit-js"
          onClick={() =>
            document.body.classList.remove("body-overflow-contact")
          }
        >
          <span className="fas fa-times fa-4x" />
        </button>
      </div>
    );
  }

  componentDidMount() {
    aboutMeWindow();
  }
}

export default AboutMe;
