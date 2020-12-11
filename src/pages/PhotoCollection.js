import React from "react";
import SectionTitle from "../components/SectionTitle";

const PhotoCollection = () => {
  return (
    <section class="bg-secondary py-4">
      <div class="container-fluid">
        <SectionTitle
          titleName="Collection"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Accusantium inventore, sint quisquam fugiat pariatur culpa
          officia. Eveniet omnis quia tempora"
          textColor="light"
        />

        <div class="row">
          <div class="col-lg-4 col-sm-6 my-5">
            <div class="card border-0 card-shadow">
              <img src="images/nature.jpeg" class="card-img" />
              <div class="card-img-overlay">
                <h5 class="text-white text-uppercase font-weight-bold p-2 heading">
                  Nature Photography
                </h5>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 my-5">
            <div class="card border-0 card-shadow">
              <img src="images/wedding.jpeg" class="card-img" />
              <div class="card-img-overlay">
                <h5 class="text-white text-uppercase font-weight-bold p-2 heading">
                  Wedding Photography
                </h5>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 my-5">
            <div class="card border-0 card-shadow">
              <img src="images/party.jpeg" class="card-img" />
              <div class="card-img-overlay">
                <h5 class="text-white text-uppercase font-weight-bold p-2 heading">
                  Party Photography
                </h5>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 my-5">
            <div class="card border-0 card-shadow">
              <img src="images/business.jpeg" class="card-img" />
              <div class="card-img-overlay">
                <h5 class="text-white text-uppercase font-weight-bold p-2 heading">
                  Business Photography
                </h5>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 my-5">
            <div class="card border-0 card-shadow">
              <img src="images/fashion.jpeg" class="card-img" />
              <div class="card-img-overlay">
                <h5 class="text-white text-uppercase font-weight-bold p-2 heading">
                  Fashion Photography
                </h5>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 my-5">
            <div class="card border-0 card-shadow">
              <img src="images/family.jpeg" class="card-img" />
              <div class="card-img-overlay">
                <h5 class="text-white text-uppercase font-weight-bold p-2 heading">
                  Family Photography
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PhotoCollection;
