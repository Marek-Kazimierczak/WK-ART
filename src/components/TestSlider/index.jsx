import React, { Component } from "react";
import data from "../../scripts/assetsData";

import "./TestSlider.scss";

class testSlider extends Component {
  render() {
    const { type } = this.props;
    const gallery = data[type].map(picture => (
      <div className="image-gallery js-image" key={picture.index}>
        <img src={picture.picture} alt={picture.id} />
      </div>
    ));

    return <main className="gallery gallery-wrapper">{gallery}</main>;
  }
}

export default testSlider;
