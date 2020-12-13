import React from "react";
import SectionTitle from "../components/SectionTitle";
import { GALLERY_ITEMS } from "../data/data";

const Gallery = () => {
  return (
    <section class="py-5">
      <div class="container-fluid">
        <SectionTitle
          titleName="Gallery"
          text="Here are some of our best images"
          textColor="dark"
        />

        {/* <ul class="list-inline text-center text-uppercase font-weight-bold my-4">
          <li
            class="list-inline-item gallery-list-item active-item"
            data-filter="all"
          >
            All<span class="mx-md-5 mx-3 text-muted">/</span>
          </li>
          <li class="list-inline-item gallery-list-item" data-filter="new">
            New<span class="mx-md-5 mx-3 text-muted">/</span>
          </li>
          <li class="list-inline-item gallery-list-item" data-filter="free">
            Free<span class="mx-md-5 mx-3 text-muted">/</span>
          </li>
          <li class="list-inline-item gallery-list-item" data-filter="pro">
            Pro
          </li>
        </ul> */}

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
