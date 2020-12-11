import React from "react";
import SectionTitle from "../components/SectionTitle";
import "./PhotoCollection.css";
import { COLLECTION_ITEMS } from "../data/data";
import CollectionCard from "../components/CollectionCard";

const PhotoCollection = () => {
  return (
    <section class="collection-color py-4">
      <div class="container-fluid">
        <SectionTitle
          titleName="Collection"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Accusantium inventore, sint quisquam fugiat pariatur culpa
          officia. Eveniet omnis quia tempora"
          textColor="light"
        />

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
