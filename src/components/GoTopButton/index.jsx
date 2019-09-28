import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import "./GoTopButton.scss";

const GoTopButton = props => {
  const { history } = props;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isVisible = () =>
      window.scrollY >= 300 ? setVisible(true) : setVisible(false);
    window.addEventListener("scroll", isVisible);
    return () => {
      window.removeEventListener("scroll", isVisible);
    };
  }, []);

  return (
    <button
      className={`go-to-top-btn ${visible ? "is-visible" : ""}`}
      onClick={() => {
        window.scrollTo(0, 0);
        history.location.pathname !== "/about" &&
          document.body.classList.add("body-overflow");
      }}
    >
      <i className="material-icons">keyboard_arrow_up</i>
    </button>
  );
};

export default withRouter(GoTopButton);
