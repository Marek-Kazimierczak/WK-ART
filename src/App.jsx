import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import particles from "./scripts/particles";
import data from "./scripts/assetsData";

import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import GoTopButton from "./components/GoTopButton";
import MenuIcon from "./components/MenuIcon";
import MenuContent from "./components/MenuContent";
import AboutMe from "./components/AboutMe";
import NavBar from "./components/NavBar";
import Section from "./components/Section";
import InstructionOverlay from "./components/InstructionOverlay";

import "./App.scss";

const App = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [instruction, setInstruction] = useState(true);

  useEffect(() => {
    particles();
    // setTimeout(() => {
    document.querySelector(".preloader").remove();
    // }, 5000);
  }, []);

  const handleMenuOpen = () => {
    setOpenMenu(!openMenu);
  };

  const routes = Object.values(data).map(section => {
    const { type, heading, path, assets } = section;
    return (
      <Route
        key={type}
        exact
        path={path}
        render={routeProps => (
          <Section
            {...routeProps}
            type={type}
            heading={heading}
            data={section}
            assets={assets}
          />
        )}
      />
    );
  });

  return (
    <Router>
      <h1 className="hidden-heading">Wojtek Kazimierczak WK-ART</h1>
      <canvas className="background-particles" />
      {instruction ? (
        <InstructionOverlay setInstruction={setInstruction} />
      ) : (
        <>
          <GoTopButton />
          <Header />
          <MenuIcon isOpenMenu={openMenu} setOpenMenu={handleMenuOpen} />
          <MenuContent isOpenMenu={openMenu} setOpenMenu={handleMenuOpen} />
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
                    <ScrollToTop>
                      {routes}
                      <Route
                        path="/about"
                        render={routeProps => <AboutMe {...routeProps} />}
                      />
                    </ScrollToTop>
                    }
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </>
      )}
    </Router>
  );
};

export default App;
