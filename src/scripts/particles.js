import Particles from "particlesjs";

const particles = () => {
  Particles.init({
    selector: ".background-particles",
    color: "#666666"
  });

  console.log("Particles loaded");
};

export { particles };
