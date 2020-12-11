import React from "react";
import './SectionTitle.css'

const SectionTitle = ({ titleName, text, textColor }) => {
  return (
    <div
      className={`row text-center ${
        textColor === "dark" ? "text-dark" : "text-light"
      }`}
    >
      <div className="col m-4">
        <h1 className="display-4 mb-4">{titleName}</h1>
        <div className="underline mb-4"></div>
        <p className="lead-text">{text}</p>
      </div>
    </div>
  );
};

export default SectionTitle;
