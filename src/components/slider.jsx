import React, { Component, Fragment } from "react";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import data from "../assetsData";

class Slider extends Component {
  state = {
    prevSlide: data[this.props.type][data[this.props.type].length - 1],
    currSlide: data[this.props.type][0],
    nextSlide: data[this.props.type][1]
  };

  scrollToNavigation = () => {
    document.querySelector("nav").scrollIntoView({ behavior: "smooth" });
  };

  nextProperty = () => {
    console.log("next");
    let newPrevIndex = this.state.prevSlide.index;
    let newCurrIndex = this.state.currSlide.index;
    let newNextIndex = this.state.nextSlide.index;

    if (newCurrIndex > data[this.props.type].length - 2) {
      newPrevIndex++;
      newCurrIndex = 0;
      newNextIndex++;
    } else if (newPrevIndex > data[this.props.type].length - 2) {
      newPrevIndex = 0;
      newCurrIndex++;
      newNextIndex++;
    } else if (newNextIndex > data[this.props.type].length - 2) {
      newPrevIndex++;
      newNextIndex = 0;
      newCurrIndex++;
    } else {
      newPrevIndex++;
      newCurrIndex++;
      newNextIndex++;
    }

    console.log(
      "Prev",
      newPrevIndex,
      "Curr",
      newCurrIndex,
      "Next",
      newNextIndex
    );

    this.setState({
      prevSlide: data[this.props.type][newPrevIndex],
      currSlide: data[this.props.type][newCurrIndex],
      nextSlide: data[this.props.type][newNextIndex]
    });
  };

  prevProperty = () => {
    console.log("prev");

    let newPrevIndex = this.state.prevSlide.index;
    let newCurrIndex = this.state.currSlide.index;
    let newNextIndex = this.state.nextSlide.index;

    if (newCurrIndex < 1) {
      newPrevIndex--;
      newCurrIndex = data[this.props.type].length - 1;
      newNextIndex--;
    } else if (newPrevIndex < 1) {
      newPrevIndex = data[this.props.type].length - 1;
      newCurrIndex--;
      newNextIndex--;
    } else if (newNextIndex < 1) {
      newPrevIndex--;
      newCurrIndex--;
      newNextIndex = data[this.props.type].length - 1;
    } else {
      newPrevIndex--;
      newCurrIndex--;
      newNextIndex--;
    }

    console.log(
      "Prev",
      newPrevIndex,
      "Curr",
      newCurrIndex,
      "Next",
      newNextIndex
    );

    this.setState({
      prevSlide: data[this.props.type][newPrevIndex],
      currSlide: data[this.props.type][newCurrIndex],
      nextSlide: data[this.props.type][newNextIndex]
    });
  };

  render() {
    // console.log("Main", this.state.currSlide);

    const { currSlide, prevSlide, nextSlide } = this.state;

    return (
      <Fragment>
        <main>
          <button className="btn btn-top" onClick={this.scrollToNavigation}>
            <span className="fas fa-arrow-up fa-2x" />
          </button>
          <div onClick={this.prevProperty} className="btn-slide btn-prev">
            {/* <button className="btn" >
              <span className="fas fa-arrow-left fa-2x" />
            </button> */}
          </div>
          <div onClick={this.nextProperty} className="btn-slide btn-next">
            {/* <button className="btn" >
              <span className="fas fa-arrow-right fa-2x" />
            </button> */}
          </div>
          <div className="gallery gallery-wrapper">
            <div className="prev-wrapper">
              <TransitionGroup className="image-prev">
                <CSSTransition
                  key={currSlide.id}
                  timeout={1000}
                  classNames="slide"
                >
                  <div
                    key={currSlide.id}
                    style={{
                      backgroundImage: `url(${prevSlide.picture})`
                    }}
                    className="image-prev"
                  />
                </CSSTransition>
              </TransitionGroup>
            </div>
            <TransitionGroup className="image-active">
              <CSSTransition
                key={currSlide.id}
                timeout={1000}
                classNames="slide"
              >
                <div
                  key={currSlide.id}
                  style={{
                    backgroundImage: `url(${currSlide.picture})`
                  }}
                  className="image-active"
                />
              </CSSTransition>
            </TransitionGroup>

            <div className="prev-wrapper">
              <TransitionGroup className="image-next">
                <CSSTransition
                  key={nextSlide.id}
                  timeout={1000}
                  classNames="slide"
                >
                  <div
                    key={nextSlide.id}
                    style={{
                      backgroundImage: `url(${nextSlide.picture})`
                    }}
                    className="image-next"
                  />
                </CSSTransition>
              </TransitionGroup>
            </div>
          </div>
        </main>
      </Fragment>
    );
  }
}

export default Slider;
