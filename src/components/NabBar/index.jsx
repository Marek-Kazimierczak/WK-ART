import React from "react";
import { NavLink } from "react-router-dom";

import "./NavBar.scss";

const NavBar = () => {
  return (
    <>
      <div className="nav-menu">
        <NavLink className="navlink" exact activeClassName="active" to="/">
          {/* <p className="nav-txt nav-txt-installation">painting</p> */}
          {/* <div className="point" /> */}
          <p className="contact-link">painting</p>
        </NavLink>
        <NavLink className="navlink" clactiveClassName="active" to="/drawing">
          {/* <p className="nav-txt nav-txt-installation">drawing</p>
          <div className="point" /> */}
          <p className="contact-link">drawing</p>
        </NavLink>
        <NavLink
          className="navlink navlink-installation"
          activeClassName="active"
          to="/installation"
        >
          {/* <p className="nav-txt nav-txt-installation">installation</p> */}
          {/* <div className="point" /> */}
          <p className="contact-link">installation</p>
        </NavLink>
        <NavLink
          className="navlink navlink-installation"
          activeClassName="active"
          to="/installation"
        >
          {/* <p className="nav-txt nav-txt-installation">3d</p> */}
          {/* <div className="point" /> */}
          <p className="contact-link">3d</p>
        </NavLink>
      </div>
    </>
  );
};

export default NavBar;
