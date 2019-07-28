import React, { Component } from "react";
import data from "../../scripts/assetsData";
import SingleImage from "./SingleImage";

import "./TestSlider.scss";

class testSlider extends Component {
  render() {
    const { type } = this.props;

    const gallery = data[type].map(picture => (
      <SingleImage key={picture.index} picture={picture} />
    ));

    return <main className="gallery gallery-wrapper">{gallery}</main>;
  }
}

export default testSlider;
