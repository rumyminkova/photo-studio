import React from "react";

const Gallery = () => {
  return (
    <section class="py-5">
      <div class="container-fluid">
        <div class="row text-muted text-center">
          <div class="col m-4">
            <h1 class="display-4 mb-4">Gallery</h1>
            <div class="underline-dark mb-4"></div>
            <p class="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium inventore, sint quisquam fugiat pariatur culpa
              officia. Eveniet omnis quia tempora.
            </p>
          </div>
        </div>
        <ul class="list-inline text-center text-uppercase font-weight-bold my-4">
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
        </ul>
        <div class="container-fluid">
          <div class="d-flex flex-wrap justify-content-center">
            <div class="filter new">
              <img src="images/img1.jpeg" width="300" />
            </div>
            <div class="filter free">
              <img src="images/img2.jpeg" width="300" />
            </div>
            <div class="filter pro">
              <img src="images/img3.jpeg" width="300" />
            </div>
            <div class="filter new">
              <img src="images/img4.jpeg" width="300" />
            </div>
            <div class="filter pro">
              <img src="images/img5.jpeg" width="300" />
            </div>
            <div class="filter free">
              <img src="images/img6.jpeg" width="300" />
            </div>
            <div class="filter pro">
              <img src="images/img7.jpeg" width="300" />
            </div>
            <div class="filter free">
              <img src="images/img8.jpeg" width="300" />
            </div>
            <div class="filter new">
              <img src="images/img9.jpeg" width="300" />
            </div>
            <div class="filter pro">
              <img src="images/img10.jpeg" width="300" />
            </div>
            <div class="filter free">
              <img src="images/img11.jpeg" width="300" />
            </div>
            <div class="filter pro">
              <img src="images/img12.jpeg" width="300" />
            </div>
            <div class="filter new">
              <img src="images/img13.jpeg" width="300" />
            </div>
            <div class="filter free">
              <img src="images/img14.jpeg" width="300" />
            </div>
            <div class="filter new">
              <img src="images/img15.jpeg" width="300" />
            </div>
            <div class="filter pro">
              <img src="images/img16.jpeg" width="300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Gallery;
