import React, { Component } from "react";

class SingleImage extends Component {
  render() {
    const { picture } = this.props;
    return (
      <div
        id={`js-image-wrapper-${picture.index}`}
        className={`image-wrapper js-image-wrapper-scrollmagic`}
      >
        <img
          className={`js-image-scrollmagic js-image-${picture.index}`}
          src={picture.picture}
          alt={picture.id}
        />
      </div>
    );
  }
}

export default SingleImage;
