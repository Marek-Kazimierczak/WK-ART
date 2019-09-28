import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";

import "./ImageBottom.scss";

const ImageBottom = props => {
  const { picture, index } = props;

  return (
    <Controller>
      <Scene triggerHook="onLeave" duration="300%" pin>
        {progress => (
          <div id={`js-image-wrapper-${index}`} className={`image-bottom`}>
            <Tween
              from={{ y: "200%", autoAlpha: 0 }}
              to={{ y: "0%", autoAlpha: 1 }}
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

export default ImageBottom;
