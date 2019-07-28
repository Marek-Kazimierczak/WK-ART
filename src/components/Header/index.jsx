import React from "react";

import "./Header.scss";

const Header = props => {
  return (
    <div className="nav-contact">
      <div className="header-logo">
        <img src="./assets/bubble-1.png" alt="wk-art logo" />
      </div>
      <div className="contact-links">
        <p
          className="contact-link open-js"
          onClick={() => document.body.classList.add("body-overflow-contact")}
        >
          Contact
        </p>

        <a
          href="https://www.behance.net/wkazimierc8a74"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="fab fa-behance" />
        </a>
      </div>
    </div>
  );
};

export default Header;
