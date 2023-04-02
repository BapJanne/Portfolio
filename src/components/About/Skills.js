import React from "react";
import SkillCard from "./SkillCard";
import "./Skills.css";

const skillsArray = [
  { id: 1, title: "React", url: require("../../img/react.png") },
  { id: 2, title: "Redux", url: require("../../img/redux.png") },
  { id: 3, title: "Typescript", url: require("../../img/typescript.png") },
  { id: 4, title: "Javascript", url: require("../../img/js.png") },
  { id: 5, title: "Git", url: require("../../img/gitLogo.png") },
  { id: 6, title: "HTML", url: require("../../img/html.png") },
  { id: 7, title: "CSS", url: require("../../img/css.png") },
  { id: 8, title: "SASS", url: require("../../img/sass.png") },
  { id: 9, title: "Wordpress", url: require("../../img/wordpress.png") },
];

const Skills = () => {
  return (
    <div>
      <h2>Compétences</h2>
      <div className="skills">
        {skillsArray.map((item) => (
          <SkillCard key={item.id} title={item.title} url={item.url} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
