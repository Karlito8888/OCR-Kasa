import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";

const Card = () => {
  const { data } = useContext(DataContext); 

  return (
    <ul className="cards-container">
      {data &&
        data.map((item) => (
          <li key={item.id} className="card-content">
            <Link to={`/details/${item.id}`}>
              <div
                className="card-cover"
                style={{ backgroundImage: `url(${item.cover})` }}
                aria-label={item.title}
              >
                <p className="card-title">{item.title}</p>
                <p className="card-location">{item.location}</p>
              </div>
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default Card;
