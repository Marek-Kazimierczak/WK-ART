import React from "react";
import { Link } from "react-router-dom";

import { Tween, Timeline } from "react-gsap";
import data from "../../scripts/assetsData";

import "./MenuContent.scss";

const MenuContent = props => {
  const { isOpenMenu, setOpenMenu } = props;

  const aboutMeLink = { name: "About Me", path: "/about" };
  const sections = Object.values(data).map(section => ({
    name: section.type,
    path: section.path
  }));

  sections.push(aboutMeLink);

  const linkItems = sections.map((linkItem, index) => {
    const { name, path } = linkItem;

    return (
      <div
        key={name}
        className="menu-mobile-item"
        onClick={() => {
          setOpenMenu();
          document.body.classList.add("body-overflow");
        }}
      >
        <Link className="navlink-mobile" to={path}>
          <p className="contact-link-mobile">{name}</p>
        </Link>
      </div>
    );
  });

  return !isOpenMenu ? null : (
    <Timeline>
      <Tween duration={1} to={{ height: "100%" }} ease="Back.easeOut">
        <div className={`menu menu-js`}>
          <Tween
            staggerFrom={{ x: "50px", autoAlpha: 0 }}
            staggerTo={{ x: 0, autoAlpha: 1 }}
            stagger={0.2}
            duration={1}
            ease="Back.easeOut"
            wrapper={<div className="menu-content" />}
          >
            <div className="menu-logo">
              <img src="./assets/menu/LOGO.png" alt="logo" />
            </div>

            {linkItems}
          </Tween>
        </div>
      </Tween>
    </Timeline>
  );
};

export default MenuContent;
