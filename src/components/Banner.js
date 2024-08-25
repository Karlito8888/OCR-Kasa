import React from "react";

const Banner = ({
  variant,
  showTitle,
  boxShadow,
  backgroundColor,
  marginTop,
  marginBottom,
}) => {
  return (
    <section
      id="banner"
      style={{
        marginBottom: marginBottom,
        marginTop: marginTop,
      }}
    >
      <div
        className={`banner-container banner-${variant}`}
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

export default Banner;
