import React from "react";

import ImageMobile from "./ImageMobile";
import ImageFade from "./ImageDesktop/ImageFade";
import ImageBottom from "./ImageDesktop/ImageBottom";
import ImageSide from "./ImageDesktop/ImageSide";
import ImageSticky from "./ImageDesktop/ImageSticky";
import ImageVertical from "./ImageDesktop/ImageVertical";
import TheWhaleIntro from "./TheWhaleIntro";

import "./Gallery.scss";

const Gallery = props => {
  const { type, assets } = props;
  const isMobile = window.screen.width <= 600;

  const galleryDesktop = assets.map((picture, index) => {
    const { id, display, option, secondImageID } = picture;

    switch (display) {
      case "side":
        return (
          <ImageVertical
            key={id}
            picture={picture}
            index={index}
            side={display}
            option={option}
          />
        );
      case "sticky":
        return (
          <ImageSticky
            key={id}
            picture1={picture}
            picture2={assets.find(picture => picture.id === secondImageID)}
            index={index}
          />
        );
      case "bottom":
        return <ImageBottom key={id} picture={picture} index={index} />;

      case "right":
        return (
          <ImageSide key={id} picture={picture} index={index} side={display} />
        );

      case "left":
        return (
          <ImageSide key={id} picture={picture} index={index} side={display} />
        );

      case "ignore":
        return null;

      default:
        return <ImageFade key={id} picture={picture} index={index} />;
    }
  });

  const galleryMobile = assets.map((picture, index) => (
    <ImageMobile key={picture.index} picture={picture} index={index} />
  ));

  return (
    <main
      id="gallery"
      className={`gallery gallery-wrapper ${type === "the whale" &&
        "gallery-without-padding"}`}
    >
      {type === "the whale" && !isMobile && <TheWhaleIntro />}
      {isMobile ? galleryMobile : galleryDesktop}
    </main>
  );
};

export default Gallery;
