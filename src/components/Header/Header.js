import React, { useEffect } from "react";
import "./Header.css";
import pdf from "../../img/Baptiste_Jannequin_CV.pdf";

const Header = () => {
  const firstName = ["B", "a", "p", "t", "i", "s", "t", "e"];
  const lastName = ["J", "a", "n", "n", "e", "q", "u", "i", "n"];

  useEffect(() => {
    const firstNameLetters = document.querySelectorAll(".letterFirst");
    let cptFirst = 0;
    const intervalFirst = setInterval(() => {
      if (cptFirst < firstNameLetters.length) {
        firstNameLetters[cptFirst].classList.add("downAnimation");
        cptFirst++;
      } else {
        clearInterval(intervalFirst);
      }
    }, 50);

    const lastNameLetters = document.querySelectorAll(".letterLast");
    let cptLast = 0;

    setTimeout(() => {
      const intervalLast = setInterval(() => {
        if (cptLast < lastNameLetters.length) {
          lastNameLetters[cptLast].classList.add("upAnimation");
          cptLast++;
        } else {
          clearInterval(intervalLast);
        }
      }, 50);
    }, 400);

    const jobLetters = document.querySelectorAll(".letterJob");
    let cptJob = 0;

    setTimeout(() => {
      const intervalJob = setInterval(() => {
        if (cptJob < jobLetters.length) {
          jobLetters[cptJob].classList.add("blurAnimation");
          cptJob++;
        } else {
          clearInterval(intervalJob);
        }
      }, 30);
    }, 800);

    const linksHeader = document.querySelectorAll(".linkButtonHeader");
    let cptLink = 0;

    setTimeout(() => {
      const intervalLink = setInterval(() => {
        if (cptLink < linksHeader.length) {
          linksHeader[cptLink].classList.add("blurAnimation");
          cptLink++;
        } else {
          clearInterval(intervalLink);
        }
      }, 100);
    }, 1600);

    const st0 = document.querySelector(".st0");
    const st1 = document.querySelector(".st1");

    setTimeout(() => {
      st0.classList.add("svgAnim");
    }, 2000);

    setTimeout(() => {
      st1.classList.add("upAnimationSvg");
    }, 2600);
  }, []);

  const displayName = (stringArray) => {
    return stringArray.map((letter) => {
      if (stringArray.join("") === "Baptiste") {
        return (
          <div key={Math.random()} className="hidden letterFirst">
            {letter}
          </div>
        );
      } else if (stringArray.join("") === "Jannequin") {
        return (
          <div key={Math.random()} className="hidden letterLast">
            {letter}
          </div>
        );
      } else {
        return (
          <div key={Math.random()} className="hidden letterJob">
            {letter}
          </div>
        );
      }
    });
  };

  return (
    <div className="header" id="accueil">
      <div className="containerAccueil">
        <div className="name firstName">{displayName(firstName)}</div>
        <div className="name firstName">{displayName(lastName)}</div>
        <div className="name jobContainer">
          {displayName("Développeur Front End React".split(""))}
        </div>
        <div>
          <ul className="buttonListHeader">
            <li className="linkButtonHeader">
              <a
                target="_blank"
                without
                rel="noreferrer"
                href={pdf}
                className="linkHeader"
              >
                Mon CV
              </a>
            </li>
            <li className="linkButtonHeader">
              <a className="linkHeader" href="https://github.com/BapJanne">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <svg
          version="1.1"
          id="Calque_3"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 1080"
          className="svg"
        >
          <path
            className="st0"
            d="M580.45,926.4c0,0,148.57,142.7,262.23-5.53c0,0,18.06-22.43,19.19-56.72c1.12-34.29,5.52-453.33,5.52-453.33
	s7.6-115.67,199.9-107.09c0,0,216.71,18.35,166.26,237.91c0,0-72.84,181.4-276.28,109.79l4.69-559.64"
          />
          <circle className="st1" cx="1137.36" cy="921.68" r="50.49" />
        </svg>
      </div>
    </div>
  );
};

export default Header;
