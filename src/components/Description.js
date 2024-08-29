import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Collapse from "./Collapse";

const Description = ({
  title,
  description,
  host,
  rating,
  location,
  equipments,
  tags,
}) => {
  // Fonction pour créer les étoiles
  const renderStars = (rating) => {
    const totalStars = 5;
    let stars = [];
    for (let i = 1; i <= totalStars; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          className={`star ${i <= rating ? "filled" : ""}`}
        />
      );
    }
    return stars;
  };

   const splitName = (fullName) => {
     const [firstName, lastName] = fullName.split(" ");
     return { firstName, lastName };
   };

    const { firstName, lastName } = splitName(host.name);

  return (
    <div className="description-container">
      <div className="top-container">
        <div className="top-left-container">
          <h1>{title}</h1>
          <h2>{location}</h2>
          <div className="tags-container">
            <ul>
              {tags.map((tag, index) => (
                <li key={index} className="tag-item">
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="top-right-container">
          <div className="host-info">
            <div className="host-name">
              <p>{firstName}</p>
              <p>{lastName}</p>
            </div>
            <img src={host.picture} alt={`${host.name}'s profile`} />
          </div>
          <div className="rating-info">
            <div className="rating-stars">{renderStars(rating)}</div>
          </div>
        </div>
      </div>
      <div className="bottom-container">
        <Collapse title="Description" content={description} />
        <Collapse
          title="Équipements"
          content={
            <ul>
              {equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
};

export default Description;
