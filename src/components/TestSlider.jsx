import React, { Component, Fragment } from "react";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import data from "../scripts/assetsData";

class testSlider extends Component {
  render() {
    console.log("testSlider props", this.props);
    const { type } = this.props;
    console.log(data[type]);
    const gallery = data[type].map(picture => (
      <div className="image-active js-image" key={picture.index}>
        <img src={picture.picture} alt={picture.id} />
      </div>
    ));

    return <main className="gallery gallery-wrapper">{gallery}</main>;
  }
}

export default testSlider;
