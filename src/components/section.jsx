import React, { Component, Fragment } from "react";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { particles } from "../scripts/particles";
import { logoPixi } from "../scripts/logoPixi";
import { scroll } from "../scripts/scrollReveal";
import { translate3DTimeOutset } from "../scripts/transform3dMenu";

import Nav from "./nav";
import TestSlider from "./TestSlider";

class Section extends Component {
  render() {
    // console.log(this.props.heading, ">>>>>");
    return (
      <Fragment>
        <Nav heading={this.props.heading} />

        <CSSTransition
          in={true}
          appear={true}
          timeout={1000}
          classNames="slide"
        >
          <TestSlider type={this.props.type} />
        </CSSTransition>
      </Fragment>
    );
  }

  componentDidMount() {
    particles();
    scroll();
    logoPixi();
    translate3DTimeOutset();
  }
}

export default Section;
