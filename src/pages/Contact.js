import React from "react";
import SectionTitle from "../components/SectionTitle";
import "./Contact.css";
import Gallery from "../components/Gallery";

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
          <div className="col-12 col-md-5 pb-4">
            <p className="display-5 mb-5 text-white">Got Question?</p>
            <form>
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
                  className="my-2 p-2 text-input"
                  placeholder="Email"
                />
                <label for="email" className="label">
                  Email Address
                </label>
              </div>
              <button
                type="submit"
                className="py-2 px-3 text-light text-uppercase submit-button"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="col-12 col-md-7 mx-auto my-5 p-3">
            <Gallery />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
