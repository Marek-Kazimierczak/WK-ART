import { TimelineMax, Power3 } from "gsap";

const galleryLink = () => {
  const gallery = document.querySelector(".link-gallery");

  const tlGallery = new TimelineMax({ repeat: true });

  tlGallery
    .to(gallery, 5, { autoAlpha: 1, ease: Power3.easeOut })
    .to(gallery, 5, { autoAlpha: 0.3, ease: Power3.easeOut });

  console.log("Gallery-link loaded");
};

export { galleryLink };
