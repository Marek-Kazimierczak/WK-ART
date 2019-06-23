import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";

import { particles } from "../scripts/particles";
import { logoPixi } from "../scripts/logoPixi";
import { scroll } from "../scripts/scrollReveal";
import { translate3DTimeOutset } from "../scripts/transform3dMenu";

import Nav from "./nav";
import TestSlider from "./TestSlider";

class Section extends Component {
  render() {
    return (
      <>
        <Nav heading={this.props.heading} />

        <CSSTransition
          in={true}
          appear={true}
          timeout={1000}
          classNames="slide"
        >
          <TestSlider type={this.props.type} />
        </CSSTransition>
      </>
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
