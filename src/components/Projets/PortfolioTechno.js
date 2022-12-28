import React from "react";
import "./PortfolioTechno.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

const PortfolioTechno = (props) => {
  return (
    <AnimationOnScroll
      animateIn="animate__fadeInUp"
      className="portfolioTechno"
    >
      {props.technoTitle}
    </AnimationOnScroll>
  );
};

export default PortfolioTechno;
