import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";

const Card = () => {
  const { data, loading, error } = useContext(DataContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error.message}</p>;

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
