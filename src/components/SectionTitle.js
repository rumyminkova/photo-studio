import React from "react";
import "./SectionTitle.css";

const SectionTitle = ({ titleName, text, textColor }) => {
  return (
    <div
      className={`row my-5 text-center ${
        textColor === "dark" ? "text-dark" : "text-light"
      }`}
    >
      <div className="col m-4 mx-auto">
        <h1 className="title-text mb-4">{titleName}</h1>
        <div className="underline mb-4"></div>
        <p className="lead-text my-2">{text}</p>
      </div>
    </div>
  );
};

export default SectionTitle;
