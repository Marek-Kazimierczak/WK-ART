import React from "react";

import "./Preloader.scss";

const Preloader = () => {
  return (
    <div className="preloader">
      <div class="loading-letters-wrapper">
        <span className="loading-letter">L</span>
        <span className="loading-letter">O</span>
        <span className="loading-letter">A</span>
        <span className="loading-letter">D</span>
        <span className="loading-letter">I</span>
        <span className="loading-letter">N</span>
        <span className="loading-letter">G</span>
      </div>

      <div class="scenes-wrapper">
        <div class="scene">
          <div class="circle"></div>
        </div>
        <div class="scene">
          <div class="circle"></div>
        </div>
        <div class="scene">
          <div class="circle"></div>
        </div>
        <div class="scene">
          <div class="circle"></div>
        </div>
        <div class="scene">
          <div class="circle"></div>
        </div>
        <div class="scene">
          <div class="circle"></div>
        </div>
        <div class="scene">
          <div class="circle"></div>
        </div>
        <div class="scene">
          <div class="circle"></div>
        </div>
        <div class="scene">
          <div class="circle"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
