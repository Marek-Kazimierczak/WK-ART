import React from "react";
import { withRouter } from "react-router-dom";
import "./MenuIcon.scss";

const MenuIcon = props => {
  const { isOpenMenu, setOpenMenu, history } = props;

  const handleMenuButton = () => {
    setOpenMenu();
    history.location === "/about" && history.goBack();
  };

  return (
    <div
      className={`menu-icon-wrapper ${isOpenMenu === true ? "active" : ""} `}
      onClick={() => handleMenuButton()}
    >
      <div className="bar top-bar" />
      <div className="bar middle-bar" />
      <div className="bar bottom-bar" />
    </div>
  );
};

export default withRouter(MenuIcon);
