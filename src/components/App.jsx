import React, { Component } from "react";
import SwipeableRoutes from "react-swipeable-routes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { particles } from "../scripts/particles";
import Header from "./Header";
import AboutMe from "./AboutMe";
import NavBar from "./NabBar";
import Section from "./Section";

class Painting extends Component {
  render() {
    return <Section heading={["pa", "int", "ing"]} type="painting" />;
  }
}
class Drawing extends Component {
  render() {
    return <Section heading={["dr", "aw", "ing"]} type="drawing" />;
  }
}
class Installation extends Component {
  render() {
    return <Section heading={["insta", "llat", "ion"]} type="installation" />;
  }
}

class MainWrapper extends Component {
  componentDidMount() {
    document.body.classList.add("body-overflow");
    particles();
  }
  render() {
    return <>{this.props.children}</>;
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <MainWrapper>
          <canvas className="background-particles" />
          <Header />
          <AboutMe />
          <NavBar />
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
                      <Route exact path="/" component={Painting} />
                      <Route path="/drawing" component={Drawing} />
                      <Route path="/installation" component={Installation} />
                    </SwipeableRoutes>
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </MainWrapper>
      </Router>
    );
  }
}

export default App;
