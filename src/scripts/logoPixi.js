import * as PIXI from "pixi.js";
import { TimelineMax, Sine } from "gsap";

const logoPixi = () => {
  const img = "./assets/bubble-1.png";
  const shape = "./assets/ripple.jpg";

  const app = new PIXI.Application({
    view: document.querySelector("#pixi-canvas"),
    width: 1200,
    height: 1000,
    transparent: true
  });

  const logo = PIXI.Sprite.fromImage(`${img}`);
  const ripple = PIXI.Sprite.fromImage(`${shape}`);
  const filter = new PIXI.filters.DisplacementFilter(ripple);

  logo.anchor.set(0.5);
  logo.position.set(450);

  ripple.anchor.set(0.5);
  ripple.scale.set(0.2);
  ripple.position.set(450);

  filter.scale.set(20);
  app.stage.filterArea = app.screen;
  app.stage.filters = [filter];
  app.stage.addChild(logo, ripple);

  const tl = new TimelineMax({ repeat: -1, repeatDelay: -2 }).to(
    ripple.scale,
    10,
    { x: 20, y: 20, ease: Sine.easeOut },
    "ripple"
  );

  console.log("logoPixi loaded");
};

export { logoPixi };
