import React, { useState } from "react";
import { Tween } from "react-gsap";

import "./InstructionOverlay.scss";

const InstructionOverlay = props => {
  const { setInstruction } = props;
  const [fadeOut, setFadeOut] = useState(false);

  const handleClick = () => {
    setFadeOut(true);
    setTimeout(() => {
      setInstruction(false);
    }, 500);
  };
  return (
    <div className={`instruction-wrapper ${fadeOut ? "fade-out" : ""}`}>
      <div id="instruction" className="instruction-overlay"></div>
      <div className="instruction-content">
        <div className="frame">
          <button className="instruction-btn" onClick={() => handleClick()}>
            Got it!
          </button>
        </div>
        <Tween
          staggerFrom={{ y: "10px" }}
          duration={3}
          ease="Elastic.easeOut"
          repeat={-1}
        >
          <i className=" arrow material-icons">arrow_upward</i>
        </Tween>
        <p className="instruction-text">press then scroll to explore.</p>
      </div>
    </div>
  );
};

export default InstructionOverlay;
