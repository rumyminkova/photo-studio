import React from "react";
import SectionTitle from "../components/SectionTitle";
import "./Mission.css";

const Mission = () => {
  return (
    <section className="p-5 mission" id="mission">
      <SectionTitle
        titleName="Our Mission"
        text="We strive to provide you with high quality images that you will love"
        textColor="light"
      />
      <div className="container-fluid my-5">
        <div className="row my-5">
          <div className="col-md-4 my-5 text-center">
            <h1 className="mb-3 subtitle-style">Creativity</h1>
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic
              perferendis dolor vitae sed.
            </p>
          </div>
          <div className="col-md-4 text-center my-5">
            <h1 className="subtitle-style mb-3">Quality</h1>
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic
              perferendis dolor vitae sed, quae officiis.
            </p>
          </div>
          <div className="col-md-4 text-center my-5">
            <h1 className="subtitle-style mb-3">Experience</h1>
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic
              perferendis dolor vitae.
            </p>
          </div>
        </div>
      </div>

      <div className="container my-5 py-5">
        <div className="row align-items-top">
          <div className="col-lg-5 text-center">
            <img
              src="images/camera.png"
              width="300"
              class="img-fluid camera-img"
            />
          </div>
          <div className="col-lg-7 text-lg-right text-center mission-text">
            <h1 className="subtitle-style">We know what we do</h1>
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              tempora itaque obcaecati voluptas? Perferendis voluptate
              accusantium eum sit deleniti harum, assumenda vitae! Cupiditate
              eos iusto ab rerum, voluptatum minima sed?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
