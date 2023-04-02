import React from "react";
import "./PortfolioLinkSite.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import gitHubLogo from "../../img/gitHub.png";

const PortfolioLinkSite = (props) => {
  return (
    <AnimationOnScroll
      animateIn="animate__fadeInUp"
      className="portfolioLinkContainer"
    >
      <a href={props.siteUrl ? props.siteUrl : props.gitHubUrl}>
        <button
          className={`portfolioLink ${props.gitHubUrl && "portfolioLinkGit"}`}
          type="button"
        >
          {props.gitHubUrl && (
            <img className="linkImg" src={gitHubLogo} alt="git logo" />
          )}
          {props.siteUrl && "Site live"}
        </button>
      </a>
    </AnimationOnScroll>
  );
};

export default PortfolioLinkSite;
