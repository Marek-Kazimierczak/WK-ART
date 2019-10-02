import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";

import "./ImageMobile.scss";

const ImageMobile = props => {
  const { picture, index } = props;

  return (
    <Controller>
      <Scene
        duration={600}
        triggerHook="0.8"
        triggerElement={`#js-image-wrapper-${index}`}
      >
        {progress => (
          <div
            id={`js-image-wrapper-${index}`}
            className={`image-wrapper js-image-wrapper-scrollmagic`}
          >
            <Tween
              from={{ css: { opacity: 0 } }}
              to={{ css: { opacity: 1 } }}
              duration={500}
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

export default ImageMobile;
