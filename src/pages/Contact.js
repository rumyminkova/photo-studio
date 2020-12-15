import React from "react";
import SectionTitle from "../components/SectionTitle";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact p-5" id="contact">
      <SectionTitle
        titleName="Get In Touch"
        text="We would love to hear from you!"
        textColor="light"
      />
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-5 pb-4">
            <h3 className="display-5 mb-5 text-white">Got Question?</h3>
            <form className="contact-form">
              <div className="form-group py-4">
                <input
                  type="text"
                  className="form-control my-2 p-2 input"
                  placeholder="Name"
                />
                <label for="name" className="label">
                  Name
                </label>
              </div>
              <div className="form-group py-4">
                <input
                  type="email"
                  className="form-control my-2 p-2 input"
                  placeholder="Email Address"
                />
                <label for="email" className="label">
                  Email Address
                </label>
              </div>
              <button
                type="submit"
                className="btn p-2 font-weight-bold text-uppercase submit-button"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="col col-md-7 mx-auto gallery">
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
        </div>
      </div>
    </section>
  );
};
export default Contact;
