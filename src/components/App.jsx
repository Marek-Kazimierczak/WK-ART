import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { particles } from "../scripts/particles";
// import { logoPixi } from "../scripts/logoPixi";
// import { scroll } from "../scripts/scrollReveal";
// import { translate3DTimeOutset } from "../scripts/transform3dMenu";
import NavBar from "./navBar";
import Section from "./section";

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
    return <div>{this.props.children}</div>;
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <MainWrapper>
          <canvas className="background" />
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
                    <Route exact path="/" component={Painting} />
                    <Route path="/drawing" component={Drawing} />
                    <Route path="/installation" component={Installation} />
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
