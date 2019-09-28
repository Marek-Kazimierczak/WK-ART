import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="./assets/menu/LOGO.png" alt="logo" />
        </div>
        <p className="footer-text">
          <span className="footer-brand">WK-ART</span> Copyright &copy; 2019
        </p>
      </div>
    </footer>
  );
};

export default Footer;
