import ScrollMagic from "scrollmagic";
import { TweenMax, Linear } from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

export const scrollMagic = () => {
  const images = document.querySelectorAll(".js-image-wrapper-scrollmagic");
  // console.log("images Node!!! ___", images);

  ScrollMagicPluginGsap(ScrollMagic, TweenMax);

  const controller = new ScrollMagic.Controller();

  images.forEach((image, index) => {
    console.log("picture Node!!! ___", index, image);

    const tween = TweenMax.from(image, 0.3, {
      // autoAlpha: 0,
      // scale: 0.6,
      x: 250,
      ease: Linear.easeNone
    });

    const scene = new ScrollMagic.Scene({
      triggerElement: image,
      duration: 400, // scroll distance
      offset: -250 // start this scene after scrolling for 50px
    })
      .setTween(tween)
      // .setPin(image) // pins the element for the the scene's duration
      // .addIndicators()
      .addTo(controller); // assign the scene to the controller

    // console.log(scene);
  });
};
