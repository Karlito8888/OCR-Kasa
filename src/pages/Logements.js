import React, { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import { useNavigate, useParams } from "react-router-dom";
import Gallery from "../containers/Gallery";
import Description from "../containers/Description";

const Logements = () => {
  const { data } = useContext(DataContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const logementDetail = data.find((item) => item.id === id);

  useEffect(() => {
    if (!logementDetail) {
      navigate("/not-found");
    }
  }, [logementDetail, navigate]);

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
