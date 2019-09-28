import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";

const ImageFade = props => {
  const { picture, index } = props;

  return (
    <Controller>
      <Scene
        duration={1000}
        triggerHook="0.2"
        offset="100"
        triggerElement={`#js-image-wrapper-${index}`}
        pin
      >
        {progress => (
          <div
            id={`js-image-wrapper-${index}`}
            className={`image-wrapper js-image-wrapper-scrollmagic`}
          >
            <Tween
              from={{ scale: 1, autoAlpha: 0 }}
              to={{ scale: 1.6, autoAlpha: 1 }}
              duration={300}
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
