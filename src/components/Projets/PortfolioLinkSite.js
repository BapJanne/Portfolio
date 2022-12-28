import React from "react";
import "./PortfolioLinkSite.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

const PortfolioLinkSite = (props) => {
  return (
    <AnimationOnScroll
      animateIn="animate__fadeInUp"
      className="portfolioLinkContainer"
    >
      <a href={props.siteUrl}>
        <button className="portfolioLink" type="button">
          Lien vers
        </button>
      </a>
    </AnimationOnScroll>
  );
};

export default PortfolioLinkSite;
