import React from "react";
import "./SectionTitle.css";

const SectionTitle = ({ titleName, text, textColor }) => {
  return (
    <div className="container-fluid my-5">
      <div
        className={`row my-5 text-center ${
          textColor === "dark" ? "text-dark" : "text-light"
        }`}
      >
        <div className="col m-4 mx-auto mb-5">
          <h1 className="title-text mb-4">{titleName}</h1>
          <div className="underline mb-4"></div>
          <p className="lead-text my-2">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
