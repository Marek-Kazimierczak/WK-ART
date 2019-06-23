import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
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
    </>
  );
};

export default NavBar;
