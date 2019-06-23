import React, { Component, Fragment } from "react";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <div className="nav-menu">
          <NavLink className="navlink" exact activeClassName="active" to="/">
            <p className="nav-txt nav-txt-installation">painting</p>
            <div className="point" />
          </NavLink>
          <NavLink className="navlink" clactiveClassName="active" to="/drawing">
            <p className="nav-txt nav-txt-installation">drawing</p>
            <div className="point" />
          </NavLink>
          <NavLink
            className="navlink navlink-installation"
            activeClassName="active"
            to="/installation"
          >
            <p className="nav-txt nav-txt-installation">installation</p>
            <div className="point" />
          </NavLink>
        </div>
      </Fragment>
    );
  }
}

export default NavBar;
