import React from "react";
import Card from "../components/Card";
import { useLocation } from "react-router-dom";

const Main = () => {
  const location = useLocation();
  const backgroundColor = location.pathname === "/" ? "#f6f6f6" : "transparent";

  return (
    <main>
      <div
        className="main-container"
        style={{ backgroundColor: backgroundColor }}
      >
        <Card />
      </div>
    </main>
  );
};

export default Main;
