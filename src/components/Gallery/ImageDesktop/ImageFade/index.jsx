import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";

import "./ImageFade.scss";

const ImageFade = props => {
  const { picture, index } = props;
  const isMobile = window.screen.width <= 900;
  return (
    <Controller>
      <Scene
        duration={1500}
        triggerHook="onLeave"
        offset={isMobile ? "50" : "-100"}
        triggerElement={`#js-image-wrapper-${index}`}
        pin
      >
        {progress => (
          <div
            id={`js-image-wrapper-${index}`}
            className={`image-fade-in js-image-wrapper-scrollmagic`}
          >
            <Tween
              from={{ scale: 1, autoAlpha: 0 }}
              to={{ scale: 2, autoAlpha: 1 }}
              duration={400}
              totalProgress={progress}
              paused
            >
              <img
                className={`image js-image-scrollmagic js-image-${index}`}
                src={picture.picture}
                alt={picture.id}
              />
            </Tween>
          </div>
        )}
      </Scene>
    </Controller>
  );
};

export default ImageFade;
