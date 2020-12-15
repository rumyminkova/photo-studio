import React from "react";
import SectionTitle from "../components/SectionTitle";
import { GALLERY_ITEMS } from "../data/data";

const Gallery = () => {
  return (
    <section class="py-5" id="gallery">
      <SectionTitle
        titleName="Gallery"
        text="Here are some of our best images"
        textColor="dark"
      />
      <div class="container-fluid">
        <div class="container-fluid my-5">
          <div class="d-flex flex-wrap justify-content-center">
            {GALLERY_ITEMS.map((item) => (
              <div>
                {" "}
                <img
                  src={item.image}
                  width="300"
                  className="gallery-image p-2"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Gallery;
