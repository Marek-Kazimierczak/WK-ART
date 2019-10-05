import React from "react";
import { Tween } from "react-gsap";

import "./TheWhaleIntro.scss";

const TheWhaleIntro = () => {
  return (
    <div className="whale-intro-wrapper">
      <p className="intro-text-mobile">
        20 meters long whale I pursued for a couple of years. The whale here
        personifies a journey, ecological issues, self-development and utopian
        idea. The series of paintings are oil paintings on canvas.{" "}
      </p>
      <p className="intro-text-desktop">
        The whale here presented is a personification of a journey in general
        sense. The development of the project has been spanned in years. In this
        plot I wanted to bring up the whalery thread with a strong motive of an
        adventure. The whale embodies nature itself and casts light on
        exploitation of global resources.
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
