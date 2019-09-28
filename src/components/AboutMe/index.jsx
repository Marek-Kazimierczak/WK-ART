import React, { useEffect } from "react";
import Scene3D from "./Scene3D";
import { Tween } from "react-gsap";

import "./AboutMe.scss";

const AboutMe = () => {
  useEffect(() => {
    document.body.classList.remove("body-overflow");
  }, []);
  return (
    <div className="contact-wrapper">
      <div className="contact-info">
        <h3 className="about-special-txt">About</h3>
        <h2 className="about-name">Wojtek Kazimierczak</h2>
        <Tween
          staggerFrom={{ x: "300px" }}
          stagger={0.5}
          duration={3}
          ease="Elastic.easeOut"
          repeat={-1}
        >
          <div className="about-divider" />
        </Tween>
        <p className="about-description">
          I am visual artist, I graduated at the Academy of Fine Arts in
          Katowice.
        </p>
        <p className="about-description">
          I used to focus my interest on traditional techniques mostly, turned
          to digital media in recent months though. I
        </p>
        <p className="about-description">
          Now I'm keen on 3D design and develop myself in this field.
        </p>
        <p className="about-description">
          I'm a person with huge interest in world, so I'm fond of travelling
          and exploring. Above all I love outdoor activities so I run, swim and
          skateboard quite a bit.
        </p>
        <h3 className="about-contact-header">E-mail:</h3>
        <p className="about-special-txt">w.kazimierczak@gmail.com</p>
        <h3 className="about-contact-header">Phone:</h3>
        <p className="about-special-txt">795 869 724</p>
      </div>
      <div className="about-scene-wrapper">
        <Scene3D />
      </div>
    </div>
  );
};

export default AboutMe;
