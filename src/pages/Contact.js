import React from "react";
import SectionTitle from "../components/SectionTitle";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact p-5">
      <div className="container-fluid">
        <SectionTitle
          titleName="Get In Touch"
          text="We would love to hear from you!"
          textColor="light"
        />
        <div class="row">
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
          <div className="col-lg-7 text-center gallery">
            <img src="images/contact.jpg" className="gallery__img" />
            <img src="images/contact.jpg" className="img-fluid" width="100%" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
