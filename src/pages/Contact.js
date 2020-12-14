import React from "react";
import SectionTitle from "../components/SectionTitle";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact p-5">
      <div className="container">
        <SectionTitle
          titleName="Get In Touch"
          text="We would love to hear from you!"
          textColor="light"
        />
        <div class="row mt-5">
          <div class="col-lg-5 pb-4">
            <h3 class="display-4 mb-5 text-white">Get In Touch</h3>
            <form class="contact-form">
              <div class="form-group py-4">
                <input
                  type="text"
                  class="form-control my-2 p-2 input"
                  placeholder="Name"
                />
                <label for="name" class="label">
                  Name
                </label>
              </div>
              <div class="form-group py-4">
                <input
                  type="email"
                  class="form-control my-2 p-2 input"
                  placeholder="Email Address"
                />
                <label for="email" class="label">
                  Email Address
                </label>
              </div>
              <div class="form-group py-4 my-4">
                <input type="checkbox" checked />
                <label for="check" class="text-white">
                  Send Announcemets
                </label>
              </div>
              <button
                type="submit"
                class="btn btn-block p-2 font-weight-bold text-uppercase submit-button"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="col col-md-7 mx-auto text-center gallery">
            <figure class="gallery__item--1">
              <img
                src="images/gallery/gal1.jpg"
                alt="Gallery 1"
                className="gallery__img"
              />
            </figure>
            <figure class="gallery__item--2">
              <img
                src="images/gallery/gal2.jpg"
                alt="Gallery 2"
                className="gallery__img"
              />
            </figure>
            <figure class="gallery__item--3">
              <img
                src="images/gallery/gal3.jpg"
                alt="Gallery 3"
                className="gallery__img"
              />
            </figure>
            <figure class="gallery__item--4">
              <img
                src="images/gallery/gal4.jpg"
                alt="Gallery 4"
                className="gallery__img"
              />
            </figure>
            <figure class="gallery__item--5">
              <img
                src="images/gallery/gal5.jpg"
                alt="Gallery 5"
                className="gallery__img"
              />
            </figure>
            <figure class="gallery__item--6">
              <img
                src="images/gallery/gal6.jpg"
                alt="Gallery 6"
                className="gallery__img"
              />
            </figure>
            <figure class="gallery__item--8">
              <img
                src="images/gallery/gal8.jpg"
                alt="Gallery 8"
                className="gallery__img"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
