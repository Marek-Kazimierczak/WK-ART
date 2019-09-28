import React from "react";
import { Link, withRouter } from "react-router-dom";

import "./Header.scss";

const Header = props => {
  const { history } = props;
  return (
    <header className="nav-contact">
      <div className="header-logo">
        <img src="./assets/menu/LOGO.png" alt="logo" />
      </div>
      <Link
        to="/about"
        className={`contact-link ${
          history.location.pathname === "/about" ? "contact-link-active" : ""
        }`}
        onClick={() => document.body.classList.add("body-overflow")}
      >
        <p>About me</p>
      </Link>
    </header>
  );
};

export default withRouter(Header);
