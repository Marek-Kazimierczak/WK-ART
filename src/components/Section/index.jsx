import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import logoPixi from "../../scripts/logoPixi";
import Logo from "../Logo";
import TestSlider from "../TestSlider";
// import OldSlider from "./OldSlider";

class Section extends Component {
  componentDidMount() {
    logoPixi();
  }

  render() {
    const { heading, type } = this.props;
    return (
      <>
        <Logo heading={heading} type={type} />

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