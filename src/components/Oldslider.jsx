import React, { Component } from "react";
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

    this.setState({
      prevSlide: data[this.props.type][newPrevIndex],
      currSlide: data[this.props.type][newCurrIndex],
      nextSlide: data[this.props.type][newNextIndex]
    });
  };

  prevProperty = () => {
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

    this.setState({
      prevSlide: data[this.props.type][newPrevIndex],
      currSlide: data[this.props.type][newCurrIndex],
      nextSlide: data[this.props.type][newNextIndex]
    });
  };

  render() {
    const { currSlide, prevSlide, nextSlide } = this.state;

    return (
      <>
        <main>
          <button className="btn btn-top" onClick={this.scrollToNavigation}>
            <span className="fas fa-arrow-up fa-2x" />
          </button>
          <div onClick={this.prevProperty} className="btn-slide btn-prev" />
          <div onClick={this.nextProperty} className="btn-slide btn-next" />
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
      </>
    );
  }
}

export default Slider;
