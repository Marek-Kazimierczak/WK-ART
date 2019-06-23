import React from "react";

import data from "../scripts/assetsData";

const testSlider = props => {
  const { type } = props;
  const gallery = data[type].map(picture => (
    <div className="image-active js-image" key={picture.index}>
      <img src={picture.picture} alt={picture.id} />
    </div>
  ));

  return <main className="gallery gallery-wrapper">{gallery}</main>;
};

export default testSlider;
