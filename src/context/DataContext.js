import React, { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/db.json")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        preloadImages(json);
      })
      .catch((error) =>
        console.error("Erreur lors du fetch des données :", error)
      );
  }, []);

  // Fonction pour précharger les images `pictures`
  const preloadImages = (data) => {
    data.forEach((item) => {
      if (item.pictures) {
        item.pictures.forEach((imageUrl) => {
          const img = new Image(); 
          img.src = imageUrl;
        });
      }
    });
  };

  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
};
