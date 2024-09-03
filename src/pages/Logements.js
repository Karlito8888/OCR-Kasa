import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import Main from "../sections/Main";
import { DataContext } from "../context/DataContext";

const Logements = () => {
  const { data } = useContext(DataContext);
  const location = useLocation();
  const navigate = useNavigate();
  const logementId = location.pathname.split("/").pop();
  const logementDetail = data.find((item) => item.id === logementId);

  // Redirection si aucun logement n'est trouvé pour l'ID
  useEffect(() => {
    if (
      location.pathname.startsWith("/fiche-logement") &&
      data.length > 0 &&
      !logementDetail
    ) {
      navigate("/not-found");
    }
  }, [logementDetail, data.length, location.pathname, navigate]);

  return (
    <>
      <Header />
      <Main logementDetail={logementDetail} />
      <Footer />
    </>
  );
};

export default Logements;
