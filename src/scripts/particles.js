import Particles from "particlesjs";

const particles = () => {
  Particles.init({
    selector: ".background-particles",
    color: "#666666",
    sizeVariations: 1,
    maxParticles: 300,
    speed: window.screen.width >= 960 ? 0.5 : 0.2
  });
};

export default particles;
