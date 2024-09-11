import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Gallery = ({ images = [] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const hasImages = images.length > 0;
  const hasMultipleImages = images.length > 1;

  const changeSlide = (offset) => {
    setCurrentSlide(
      (prevSlide) => (prevSlide + offset + images.length) % images.length
    );
  };

  if (!hasImages) {
    return <p>Aucune image trouvée...</p>;
  }

  return (
    <div className="carousel-container">
      <img
        className="carousel-img"
        src={images[currentSlide]}
        alt="Slide"
      />
      {hasMultipleImages && (
        <div className="carousel-controls">
          <button className="arrow arrow-left" onClick={() => changeSlide(-1)}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="arrow arrow-right" onClick={() => changeSlide(1)}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      )}
      {hasMultipleImages && (
        <div className="pagination">
          {currentSlide + 1}/{images.length}
        </div>
      )}
    </div>
  );
};

export default Gallery;
