import React, { useState } from "react";
import "./Nav.css";
import pdf from "../../img/Baptiste_Jannequin_CV.pdf";

const Nav = () => {
  const [menuOpen, setmenuOpen] = useState(false);

  const menuMobileHandler = () => {
    if (!menuOpen) {
      setmenuOpen(true);
    } else {
      setmenuOpen(false);
    }
  };
  return (
    <div className="nav">
      <div className="navMobile">
        <h1 className="navMobile__logo">
          <a href="#accueil">
            <img src={require("../../img/logo_rendu_final1.png")} alt="" />
          </a>
        </h1>
        <div
          className={`navMobile__burger ${menuOpen ? "active" : ""}`}
          onClick={menuMobileHandler}
        >
          <span></span>
        </div>
        <div className="navDesk">
          <ul className="navDesk__list">
            <li>
              <a href="#about">A propos de moi</a>
            </li>
            <li>
              <a href="#projets">Mes projets</a>
            </li>
            <li>
              <a href="#contact">Me contacter</a>
            </li>
            <li>
              <a
                target="_blank"
                without
                rel="noreferrer"
                href={pdf}
                className="link-nav"
              >
                Mon CV
              </a>
            </li>
            <li>
              <a className="link-nav" href="https://github.com/BapJanne">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="navMobile__menu"
        style={{
          transform: !menuOpen ? "translateY(-95px)" : "translateY(95px)",
        }}
      >
        <ul className="navMobile__list">
          <li>
            <a href="#about" onClick={menuMobileHandler}>
              A propos de moi
            </a>
          </li>
          <li>
            <a href="#projets" onClick={menuMobileHandler}>
              Mes projets
            </a>
          </li>
          <li>
            <a href="#contact" onClick={menuMobileHandler}>
              Me contacter
            </a>
          </li>
          <li className="linkNavMob">
            <a
              target="_blank"
              without
              rel="noreferrer"
              href={pdf}
              className="link-nav"
              onClick={menuMobileHandler}
            >
              Mon CV
            </a>
          </li>
          <li className="linkNavMob">
            <a
              className="link-nav"
              onClick={menuMobileHandler}
              href="https://github.com/BapJanne"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
