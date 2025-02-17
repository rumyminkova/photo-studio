import React from "react";
import "./MembershipCard.css";

const MembershipCard = ({ title, cost, itemsIncluded }) => {
  return (
    <div className="price-card py-4 my-4 mx-auto">
      <div className="card-body">
        <h5 className="card-title__text text-uppercase mb-5">{title}</h5>
        <h1 className="display-4 my-2 mb-2 text-light">${cost}</h1>
        <ul className="list-unstyled my-4">
          {itemsIncluded.map((el) => (
            <li className="py-3 card-list-item text-light">{el}</li>
          ))}
        </ul>
        <button className="p-2 text-uppercase card-button text-light mt-4">
          sign-up!
        </button>
      </div>
    </div>
  );
};

export default MembershipCard;
