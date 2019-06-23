import { TimelineMax, Power3 } from "gsap";

const contactWindow = () => {
  const open = document.querySelector(".open-js");
  const exit = document.querySelector(".exit-js");
  const window = document.querySelector(".window-js");
  const content = document.querySelector(".contact-wrapper");

  const tlOpen = new TimelineMax();
  const tlClose = new TimelineMax();

  open.addEventListener("click", () => {
    tlOpen
      .to(window, 1, { autoAlpha: 0.5, width: "40%", ease: Power3.easeOut })
      .to(window, 0.5, { autoAlpha: 1, ease: Power3.easeOut }, "-=0.5")
      .to(content, 1, { autoAlpha: 1, ease: Power3.easeOut }, "-=0.2")
      .to(exit, 0.5, { autoAlpha: 1, ease: Power3.easeOut }, "-=0.8");
  });

  exit.addEventListener("click", () => {
    tlClose
      .to(content, 1, { autoAlpha: 0, ease: Power3.easeOut })
      .to(window, 1, { autoAlpha: 0, width: 0, ease: Power3.easeOut }, "-=0.5")
      .to(exit, 0.5, { autoAlpha: 0, ease: Power3.easeOut }, "-=1.5");
  });
};

export default contactWindow;
