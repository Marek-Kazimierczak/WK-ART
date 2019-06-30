import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";

import { particles } from "../../scripts/particles";
import { logoPixi } from "../../scripts/logoPixi";
import { scroll } from "../../scripts/scrollReveal";
import { translate3DTimeOutset } from "../../scripts/transform3dMenu";

import Nav from "../Nav";
import TestSlider from "../TestSlider";
// import OldSlider from "./OldSlider";

class Section extends Component {
  componentDidMount() {
    particles();
    scroll();
    logoPixi();
    translate3DTimeOutset();
  }

  componentDidUpdate() {
    particles();
    scroll();
    logoPixi();
    translate3DTimeOutset();
  }

  render() {
    const { heading, type } = this.props;
    return (
      <>
        <Nav heading={heading} type={type} />

        <CSSTransition
          in={true}
          appear={true}
          timeout={1000}
          classNames="slide"
        >
          <TestSlider type={type} />
          {/* <OldSlider type={type} /> */}
        </CSSTransition>
      </>
    );
  }
}

export default Section;
