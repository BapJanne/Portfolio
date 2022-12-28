import React from "react";
import "./SkillCard.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

const SkillCard = (props) => {
  return (
    <AnimationOnScroll
      animateIn="animate__fadeInUp"
      animateOnce="true"
      className="skillcard__container"
    >
      <div className="skillcard__imgContainer">
        <img className="skillcard__img" src={props.url} alt={props.title} />
      </div>
      <h3>{props.title}</h3>
    </AnimationOnScroll>
  );
};

export default SkillCard;
