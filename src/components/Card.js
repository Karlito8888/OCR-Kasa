import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";

const Card = () => {
  const { data } = useContext(DataContext);

  return (
    <div className="cards-container">
      {data &&
        data.map((item) => (
          <Link
            key={item.id}
            to={`/fiche-logement/${item.id}`}
            className="card-content"
          >
            <div
              className="card-cover"
              style={{ backgroundImage: `url(${item.cover})` }}
              aria-label={item.title}
            >
              <p className="card-title">{item.title}</p>
              <p className="card-location">{item.location}</p>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Card;
