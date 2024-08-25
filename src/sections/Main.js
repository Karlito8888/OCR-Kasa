import React, { useContext } from "react";
import Card from "../components/Card";
import Gallery from "../components/Gallery";
import { useLocation } from "react-router-dom";
import { DataContext } from "../context/DataContext"; // Import the context
import Collapse from "../components/Collapse";

const Main = () => {
  const { data } = useContext(DataContext); // Access the data from the context
  const location = useLocation();
  const logementId = location.pathname.split("/").pop();
  const logementDetail = data.find((item) => item.id === logementId);

  return (
    <main>
      {location.pathname === "/" && (
        <div className="home-main-container">
          <Card />
        </div>
      )}
      {location.pathname.startsWith("/fiche-logement") && (
        <div className="logements-main-container">
          {logementDetail ? (
            <Gallery images={logementDetail.pictures} />
          ) : (
            <p>No detail found</p>
          )}
        </div>
      )}
      {location.pathname === "/about" && (
        <div className="about-main-container">
          <Collapse
            title="Fiabilité"
            content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
          />
          <Collapse
            title="Respect"
            content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
          <Collapse
            title="Service"
            content="La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."
          />
          <Collapse
            title="Sécurité"
            content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          />
        </div>
      )}
    </main>
  );
};

export default Main;
