import React from "react";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div className="gallery">
      <figure className="gallery__item--1">
        <img
          src="images/gallery/gal1.jpg"
          alt="Gallery 1"
          className="gallery__img"
        />
      </figure>
      <figure className="gallery__item--2">
        <img
          src="images/gallery/gal2.jpg"
          alt="Gallery 2"
          className="gallery__img"
        />
      </figure>
      <figure className="gallery__item--3">
        <img
          src="images/gallery/gal3.jpg"
          alt="Gallery 3"
          className="gallery__img"
        />
      </figure>
      <figure className="gallery__item--4">
        <img
          src="images/gallery/gal4.jpg"
          alt="Gallery 4"
          className="gallery__img"
        />
      </figure>
      <figure className="gallery__item--5">
        <img
          src="images/gallery/gal5.jpg"
          alt="Gallery 5"
          className="gallery__img"
        />
      </figure>
      <figure className="gallery__item--6">
        <img
          src="images/gallery/gal6.jpg"
          alt="Gallery 6"
          className="gallery__img"
        />
      </figure>
      <figure className="gallery__item--8">
        <img
          src="images/gallery/gal8.jpg"
          alt="Gallery 8"
          className="gallery__img"
        />
      </figure>
    </div>
  );
};
export default Gallery;
