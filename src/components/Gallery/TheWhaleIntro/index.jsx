import React from "react";
import { Tween } from "react-gsap";

import "./TheWhaleIntro.scss";

const TheWhaleIntro = () => {
  return (
    <div className="whale-intro-wrapper">
      <p>
        20 meters long whale I pursued for a couple of years. The whale here
        personifies a journey, ecological issues, self-development and utopian
        idea. The series of paintings are oil paintings on canvas.
      </p>
      <Tween
        staggerFrom={{ y: "20px" }}
        stagger={0.5}
        duration={4}
        ease="Elastic.easeOut"
        repeat={-1}
      >
        <i className="whale-arrow material-icons">arrow_downward</i>
        <span className="scroll-down-txt">scroll down</span>
      </Tween>
    </div>
  );
};

export default TheWhaleIntro;
