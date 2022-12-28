import React from "react";
import "./PortfolioProjet.css";
import PortfolioTechno from "./PortfolioTechno";
import PortfolioLinkSite from "./PortfolioLinkSite";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

const PortfolioProjet = (props) => {
  return (
    <AnimationOnScroll
      animateIn="animate__fadeInUp"
      animateOnce="true"
      className="projetContainer"
    >
      <h2>{props.title}</h2>
      <div>
        <img src={props.imgUrl} alt={props.title} />
      </div>
      <p>{props.description}</p>
      <div className="portfolioProjet__techno">
        {props.techno.map((techno) => (
          <PortfolioTechno key={techno} technoTitle={techno} />
        ))}
      </div>
      {props.siteUrl ? <PortfolioLinkSite siteUrl={props.siteUrl} /> : ""}
    </AnimationOnScroll>
  );
};

export default PortfolioProjet;
