import ScrollReveal from "scrollreveal";

const sr = ScrollReveal();

const scroll = () => {
  sr.reveal(".nav-container", {
    duration: 2000,
    distance: "500px",
    origin: "bottom"
  });

  sr.reveal(".bubble", {
    duration: 1500,
    delay: 2000,
    origin: "left",
    distance: "100px",
    easing: "ease-out"
  });
  sr.reveal(".heading-1-js", {
    duration: 1500,
    delay: 2000,
    origin: "left",
    distance: "100px"
  });
  sr.reveal(".heading-2-js", {
    duration: 1500,
    delay: 2500,
    distance: "100px",
    origin: "left"
  });
  sr.reveal(".heading-3-js", {
    duration: 1500,
    delay: 3000,
    origin: "left"
  });

  sr.reveal(".js-image", {
    duration: 1000,
    // delay: 1000,
    // distance: "400px",
    // origin: "left",
    easing: "ease-in"
  });

  console.log("ScrollReveal loaded", ScrollReveal);
};

export default scroll;
