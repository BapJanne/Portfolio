import React from "react";
import PortfolioProjet from "./PortfolioProjet";
import "./Portfolio.css";

const projets = [
  {
    id: 1,
    title: "Wordle FR",
    imgUrl: require("../../img/wordle.png"),
    siteUrl: "https://helpful-twilight-38e2cb.netlify.app/",
    gitHubUrl: "https://github.com/BapJanne/react-ts-wordle",
    techno: ["React", "Redux", "Typescript", "Redux Toolkit", "Vite"],
    description:
      "Reproduction du célébre jeu Wordle du New York times avec des mots Français.",
  },
  {
    id: 2,
    title: "Ecommerce app",
    imgUrl: require("../../img/commerce.png"),
    siteUrl: "https://shiny-cactus-77a6c7.netlify.app/",
    gitHubUrl: "https://github.com/BapJanne/react-ecommerce",
    techno: ["React", "Redux", "Typescript", "Redux Toolkit"],
    description:
      "Création d'un shop fourni grâce à l'API de Fake Store Api avec React , Redux toolkit et Typescript.",
  },
  {
    id: 3,
    title: "Movie App v2",
    imgUrl: require("../../img/imgMovieApp.png"),
    siteUrl: "https://super-tanuki-2e4514.netlify.app/",
    gitHubUrl: "https://github.com/BapJanne/react-movie-v2",
    techno: ["React", "UseContext", "Javascript", "Responsive Design", "Axios"],
    description:
      "Application réalisé avec React afin d'effectuer des recherches de film grâce à l'API fourni par IGDB.",
  },
  {
    id: 4,
    title: "Pokémon App",
    imgUrl: require("../../img/pokemonReact.png"),
    siteUrl: "https://earnest-cascaron-7327b9.netlify.app",
    gitHubUrl: "https://github.com/BapJanne/ReactPokemon",
    techno: ["React", "UseContext", "Fetch", "Javascript", "Responsive Design"],
    description:
      "Application web réalisée avec React. Elle permet de créer son équipe de Pokémon avec ceux de la 1ère génération (qui est la meilleure), grâce à UseContext.",
  },
  {
    id: 5,
    title: "Weather app",
    imgUrl: require("../../img/weatherapp.png"),
    siteUrl: "https://jazzy-palmier-ad45fc.netlify.app/",
    gitHubUrl: "https://github.com/BapJanne/WeatherApp-react",
    techno: [
      "React",
      "Axios",
      "Javascript",
      "Responsive Design",
      "localStorage",
    ],
    description:
      "Application web réalisée avec React. Elle permet de regarder la météo d'une ville en France. De plus, il est possible d'ajouter des villes dans le profil, grâce à localStorage.",
  },
  {
    id: 6,
    title: "Portfolio",
    imgUrl: require("../../img/portfolio.png"),
    gitHubUrl: "https://github.com/BapJanne/Portfolio",
    techno: ["React", "Javascript", "HTML/CSS", "Responsive Design"],
    description:
      "Ce portfolio sur lequel vous vous trouvez à été fait avec React.",
  },
];

const Portfolio = () => {
  return (
    <div id="projets" className="projets">
      <h2>Quelques exemples de mon travail</h2>
      <div className="projetsContainer">
        {projets.map((projet) => (
          <PortfolioProjet
            key={projet.id}
            title={projet.title}
            imgUrl={projet.imgUrl}
            techno={projet.techno}
            description={projet.description}
            siteUrl={projet.siteUrl}
            gitHubUrl={projet.gitHubUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
