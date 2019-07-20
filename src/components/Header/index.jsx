import React from "react";

import "./Header.scss";

const Header = props => {
  return (
    <div className="nav-contact">
      <p
        className="contact-link open-js"
        onClick={() => document.body.classList.add("body-overflow-contact")}
      >
        Contact
      </p>

      <a href="https://www.behance.net/wkazimierc8a74" target="_blank">
        <span className="fab fa-behance" />
      </a>
    </div>
  );
};

export default Header;
