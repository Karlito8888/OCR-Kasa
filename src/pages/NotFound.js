import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="not-found-main-container">
          <h1>404</h1>
          <p>
            Oups! La page que <span>vous demandez n'existe pas.</span>
          </p>
          <Link to="/" className="home-link">
            Retourner sur la page d’accueil
          </Link>
      </div>
    </>
  );
};

export default NotFound;
