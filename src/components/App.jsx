import React, { Component } from "react";
import SwipeableRoutes from "react-swipeable-routes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import particles from "../scripts/particles";
import scroll from "../scripts/scrollReveal";
import basicScrollTop from "../scripts/scrollTopButton";
import { scrollMagic } from "../scripts/galleryScrollMagic";

import Header from "./Header";
import AboutMe from "./AboutMe";
import NavBar from "./NabBar";
import Section from "./Section";

import "./App.scss";

class App extends Component {
  componentDidMount() {
    document.body.classList.add("body-overflow");
    particles();
    scroll();
    basicScrollTop();
    scrollMagic();
  }

  render() {
    return (
      <Router>
        <canvas className="background-particles" />
        <Header />
        <AboutMe />
        <NavBar />
        <button id="goTop">
          <i className="material-icons">keyboard_arrow_up</i>
        </button>
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                classNames="fade"
                timeout={1000}
              >
                <Switch>
                  <SwipeableRoutes>
                    <Route
                      exact
                      path="/"
                      render={routeProps => (
                        <Section
                          {...routeProps}
                          type="painting"
                          heading={["pa", "int", "ing"]}
                        />
                      )}
                    />
                    <Route
                      path="/drawing"
                      render={routeProps => (
                        <Section
                          {...routeProps}
                          type="drawing"
                          heading={["dr", "aw", "ing"]}
                        />
                      )}
                    />
                    <Route
                      path="/installation"
                      render={routeProps => (
                        <Section
                          {...routeProps}
                          type="installation"
                          heading={["insta", "llat", "ion"]}
                        />
                      )}
                    />
                  </SwipeableRoutes>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </Router>
    );
  }
}

export default App;
