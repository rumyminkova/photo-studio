import React from "react";
import { ImCogs } from "react-icons/im";
import { FaThumbsUp, FaHandshake } from "react-icons/fa";
import { TiThumbsUp } from "react-icons/ti";

import SectionTitle from "../components/SectionTitle";
import "./Mission.css";

const Mission = () => {
  return (
    <section className="p-5 mission">
      <div className="container-fluid">
        <SectionTitle
          titleName="Our Mission"
          text="Capturing the moments that captivate your heart"
          textColor="dark"
        />

        <div className="row my-5">
          <div className="col-md-4 text-center my-5">
            <ImCogs className="icon-style mb-4" size="5rem" />
            <h1 className="mb-3 text-muted">Creativity</h1>
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic
              perferendis dolor vitae sed, quae officiis exercitationem quaerat?
              Fugit excepturi exercitationem inventore, repellendus architecto
              illum!
            </p>
          </div>
          <div className="col-md-4 text-center my-5">
            <TiThumbsUp className="icon-style mb-4" size="5rem" />
            <h1 className="text-muted mb-3">Quality</h1>
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic
              perferendis dolor vitae sed, quae officiis exercitationem quaerat?
              Fugit excepturi exercitationem inventore, repellendus architecto
              illum!
            </p>
          </div>
          <div className="col-md-4 text-center my-5">
            <FaHandshake className="icon-style mb-4" size="5rem" />
            <h1 className="text-muted mb-3">Experience</h1>
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic
              perferendis dolor vitae sed, quae officiis exercitationem quaerat?
              Fugit excepturi exercitationem inventore, repellendus architecto
              illum!
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 text-center">
            <img
              src="images/camera.png"
              width="350"
              class="img-fluid camera-img"
            />
          </div>
          <div className="col-lg-7 text-lg-right text-center mission-text">
            <h1>We know what we do</h1>
            <p>
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
