import React from "react";
import SectionTitle from "../components/SectionTitle";
import { COLLECTION_ITEMS } from "../data/data";
import CollectionCard from "../components/CollectionCard";

const PhotoCollection = () => {
  return (
    <section class="collection-color py-4">
      <SectionTitle
        titleName="Collection"
        text="We are a full service photography service"
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
