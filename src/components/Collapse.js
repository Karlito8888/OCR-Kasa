import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <div className="collapse">
      <button className="collapse-button" onClick={handleToggle}>
        {title}
          <FontAwesomeIcon
            icon={faChevronUp}
            className={`arrow-icon ${isOpen ? "open" : "closed"}`}
          />
      </button>
      <div
        className={`collapse-content ${isOpen ? "open" : "closed"}`}
      >
        {content}
      </div>
    </div>
  );
};

export default Collapse;
