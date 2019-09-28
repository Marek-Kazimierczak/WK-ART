import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";

import "./ImageSide.scss";

const ImageSide = props => {
  const { picture, index, side } = props;

  return (
    <Controller>
      <Scene triggerHook="onLeave" duration="400%" pin>
        {progress => (
          <div id={`js-image-wrapper-${index}`} className={`image-side`}>
            <Tween
              from={{
                x: side === "right" ? "170%" : "-150%"
              }}
              to={{
                x: side === "right" ? "0%" : "10%"
              }}
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

export default ImageSide;
