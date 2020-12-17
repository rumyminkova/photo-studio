import React from "react";

import SectionTitle from "../components/SectionTitle";
import Gallery from "../components/Gallery";
import CustomForm from "../components/CustomForm/CustomForm";

const Contact = () => {
  return (
    <section className="contact p-5" id="contact">
      <SectionTitle
        titleName="Get In Touch"
        text="We would love to hear from you!"
        textColor="light"
      />
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-12 col-md-5 pb-4">
            <p className="display-4 mb-5 text-muted">Got Question?</p>
            <CustomForm />
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
