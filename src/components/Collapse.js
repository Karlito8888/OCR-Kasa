import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setHeight(isOpen ? `${contentRef.current.scrollHeight + 30}px` : "0px");
  }, [isOpen]);

  return (
    <div className="collapse">
      <button className="collapse-button" onClick={handleToggle}>
        {title}
        <span className={`collapse-arrow ${isOpen ? "open" : "closed"}`}>
          <FontAwesomeIcon
            icon={faChevronUp}
            className={`arrow-icon ${isOpen ? "open" : "closed"}`}
            style={{ color: "#ffffff" }}
          />
        </span>
      </button>
      <div
        className={`collapse-content ${isOpen ? "open" : "closed"}`}
        style={{
          maxHeight: height,
        }}
        ref={contentRef}
      >
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Collapse;
