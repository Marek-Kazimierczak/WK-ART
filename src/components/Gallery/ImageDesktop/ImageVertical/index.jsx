import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";

import "./ImageVertical.scss";

const ImageVertical = props => {
  const { picture, index } = props;

  return (
    <Controller>
      <Scene triggerHook="onLeave" duration={"400%"} pin>
        {progress => (
          <div id={`js-image-wrapper-${index}`} className={`image-vertical`}>
            <Tween
              duration="5"
              from={{
                x: "100%"
              }}
              to={{
                x: "-170%"
              }}
              totalProgress={progress}
              paused
            >
              <img
                className={`image js-image-scrollmagic js-image-${index} `}
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

export default ImageVertical;
