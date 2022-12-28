import React from "react";
import PortfolioProjet from "./PortfolioProjet";
import "./Portfolio.css";

const projets = [
  {
    id: 1,
    title: "Pokémon App",
    imgUrl: require("../../img/pokemonReact.png"),
    siteUrl: "https://earnest-cascaron-7327b9.netlify.app",
    techno: ["React", "UseContext", "Fetch", "Javascript", "Responsive Design"],
    description:
      "Application web réalisée avec React. Elle permet de créer son équipe de Pokémon avec ceux de la 1ère génération (qui est la meilleure), grâce à UseContext.",
  },
  {
    id: 2,
    title: "Weather app",
    imgUrl: require("../../img/weatherapp.png"),
    siteUrl: "https://jazzy-palmier-ad45fc.netlify.app/",
    techno: [
      "React",
      "Axios",
      "Javascript",
      "HTML/CSS",
      "Responsive Design",
      "localStorage",
    ],
    description:
      "Application web réalisée avec React. Elle permet de regarder la météo d'une ville en France. De plus, il est possible d'ajouter des villes dans le profil, grâce à localStorage.",
  },
  {
    id: 3,
    title: "Movie App",
    imgUrl: require("../../img/imgMovieApp.png"),
    siteUrl: "https://movie-app-70d77c.netlify.app/",
    techno: [
      "React",
      "Javascript",
      "SAAS",
      "HTML",
      "Responsive Design",
      "Axios",
    ],
    description:
      "Application réalisé avec React afin d'effectuer des recherches de film grâce à l'API fourni par IGDB.",
  },
  {
    id: 4,
    title: "Dessine avec canvas !",
    imgUrl: require("../../img/imgCanvas.png"),
    siteUrl: "https://quiet-pothos-e361a9.netlify.app",
    techno: ["Javascript", "HTML/CSS"],
    description:
      "Lors du 1er confinement, avec mes amis nous jouons beaucoup à skribble.io, un site qui se base sur le jeu pictionary. J'ai donc voulu reproduire le fait de pouvoir dessiner sur un site web pour m'entrainer à Javascript.",
  },
  {
    id: 5,
    title: "Reproduction du site du vin Delauney",
    imgUrl: require("../../img/vinCopie.png"),
    siteUrl: "https://rainbow-rabanadas-b084e7.netlify.app/",
    techno: ["Bootstrap", "HTML/CSS", "Responsive Design"],
    description:
      "Reproduction du site vin Delauney avec Bootstrap, effectué lors de mon DUT MMI.",
  },
  {
    id: 6,
    title: "CAM Vallée du Cher Controis",
    imgUrl: require("../../img/camValleeCopie.png"),
    siteUrl: "",
    techno: ["Wordpress", "Javascript", "Responsive Design", "HTML/CSS"],
    description:
      "Site de l'association du club d'athlétisme 'CAM Vallée du Cher Controis' effectué avec Wordpress.",
  },
  {
    id: 7,
    title: "Portfolio",
    imgUrl: require("../../img/portfolio.png"),
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
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
