import React from "react";
import "./About.css";
import Presentation from "./Presentation";
import Skills from "./Skills";

const About = () => {
  return (
    <div id="about" className="about">
      <Presentation />
      <Skills />
    </div>
  );
};

export default About;
