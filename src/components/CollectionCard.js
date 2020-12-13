import React from "react";
import "./CollectionCard.css";

const CollectionCard = ({ item }) => {
  return (
    <div className="col-lg-4 col-sm-6 my-5 collection-card">
      <div className="card border-0 card-shadow">
        <img src={item.image} className="card-img" />
        <div className="card-img-overlay">
          <h5 className="p-2 heading">
            {item.text}
          </h5>
        </div>
      </div>
    </div>
  );
};
export default CollectionCard;
