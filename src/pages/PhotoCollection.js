import React from "react";
import SectionTitle from "../components/SectionTitle";
import { COLLECTION_ITEMS } from "../data/data";
import CollectionCard from "../components/CollectionCard";

const PhotoCollection = () => {
  return (
    <section class="collection-color py-5" id="collection">
      <SectionTitle
        titleName="Services"
        text="We are a full service photography studio"
        textColor="dark"
      />
      <div class="container-fluid">
        <div class="row">
          {COLLECTION_ITEMS.map((item) => (
            <CollectionCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default PhotoCollection;
