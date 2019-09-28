import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import "./ImageSticky.scss";

const ImageSticky = props => {
  const { picture1, picture2, index } = props;

  return (
    <Controller>
      <Scene triggerHook="onLeave" duration={3000} pin>
        {progress => (
          <div className="sticky">
            <Timeline duration={3000} totalProgress={progress} paused>
              <Tween
                from={{ y: "-100%", autoAlpha: 0 }}
                to={{ y: "0%", autoAlpha: 1 }}
              >
                <div className="animation">
                  <img
                    className={`image js-image-scrollmagic js-image-${index}`}
                    src={picture1.picture}
                    alt={picture1.id}
                  />
                </div>
              </Tween>
              <Tween
                from={{ scale: 0.5, autoAlpha: 0 }}
                to={{ scale: 1, autoAlpha: 1 }}
              >
                <div className="animation">
                  <img
                    className={`image js-image-scrollmagic js-image-${index}`}
                    src={picture2.picture}
                    alt={picture2.id}
                  />
                </div>
              </Tween>
            </Timeline>
          </div>
        )}
      </Scene>
    </Controller>
  );
};

export default ImageSticky;
