import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { useParams } from "react-router-dom";
import Gallery from "../containers/Gallery";
import Description from "../containers/Description";

const Logements = () => {
  const { data } = useContext(DataContext);
  const { id } = useParams();
  const logementDetail = data.find((item) => item.id === id);

  return (
    <div className="logements-main-container">
      {logementDetail ? (
        <>
          <Gallery images={logementDetail.pictures} />
          <Description
            title={logementDetail.title}
            description={logementDetail.description}
            host={logementDetail.host}
            rating={logementDetail.rating}
            location={logementDetail.location}
            equipments={logementDetail.equipments}
            tags={logementDetail.tags}
          />
        </>
      ) : (
        <p>Logement non trouvé.</p>
      )}
    </div>
  );
};

export default Logements;
