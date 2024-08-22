import React from "react";

const Hero = ({
  variant,
  showTitle,
  boxShadow,
  backgroundColor,
}) => {
  return (
    <section id="hero">
      <div
        className={`hero-container hero-${variant}`} // Ajoute la classe correspondante
        style={{
          boxShadow: boxShadow,
          backgroundColor: backgroundColor,
        }}
      >
        {showTitle && (
          <h1>
            Chez vous, <span>partout et ailleurs</span>
          </h1>
        )}
      </div>
    </section>
  );
};

export default Hero;