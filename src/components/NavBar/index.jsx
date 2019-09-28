import React from "react";
import { NavLink } from "react-router-dom";
import data from "../../scripts/assetsData";

import "./NavBar.scss";

const NavBar = () => {
  const navLinks = Object.values(data).map(section => {
    const { type, path } = section;
    return (
      <NavLink
        key={type}
        className="navlink"
        exact
        activeClassName="active"
        to={path}
      >
        <p className="contact-link">{type}</p>
      </NavLink>
    );
  });
  return <div className="nav-menu">{navLinks}</div>;
};

export default NavBar;
