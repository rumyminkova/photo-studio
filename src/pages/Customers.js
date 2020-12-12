import React from "react";
import SectionTitle from "../components/SectionTitle";
import CustomersCarousel from "../components/CustomersCarousel";

const Customers = () => {
  return (
    <section className="p-5 customers">
      <div className="container-fluid">
        <SectionTitle
          titleName="Happy Customers"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          textColor="light"
        />
        <div class="row">
          <div class="col-md-6 mx-auto">
            <CustomersCarousel />
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 mx-auto">
            <div
              class="carousel slide"
              data-ride="carousel"
              id="customer-carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#customer-carousel"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li data-target="#customer-carousel" data-slide-to="1"></li>
                <li data-target="#customer-carousel" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active text-center">
                  <img
                    src="images/customer1.jpeg"
                    class="img-fluid rounded-circle m-5"
                    width="150"
                  />
                  <blockquote class="blockquote text-white">
                    <p class="mb-5">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Eum earum fuga natus veritatis minima voluptatibus? Quae
                      consequuntur beatae repudiandae aut!
                    </p>
                  </blockquote>
                  <h5 class="text-light text-uppercase font-weight-bold mb-3">
                    Monica
                  </h5>
                  <ul class="list-inline mb-5">
                    <li class="list-inline-item">
                      <i class="fas fa-star text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="fas fa-star text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="fas fa-star text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="fas fa-star text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="fas fa-star text-warning"></i>
                    </li>
                  </ul>
                </div>
                <div class="carousel-item text-center">
                  <img
                    src="images/customer2.jpeg"
                    class="img-fluid rounded-circle m-5"
                    width="150"
                  />
                  <blockquote class="blockquote text-white">
                    <p class="mb-5">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Eum earum fuga natus veritatis minima voluptatibus? Quae
                      consequuntur beatae repudiandae aut!
                    </p>
                  </blockquote>
                  <h5 class="text-light text-uppercase font-weight-bold mb-3">
                    Johnathan
                  </h5>
                  <ul class="list-inline mb-5">
                    <li class="list-inline-item">
                      <i class="fas fa-star text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="fas fa-star text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="fas fa-star text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="fas fa-star text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="fas fa-star text-warning"></i>
                    </li>
                  </ul>
                </div>
                <div class="carousel-item text-center">
                  <img
                    src="images/customer3.jpeg"
                    class="img-fluid rounded-circle m-5"
                    width="150"
                  />
                  <blockquote class="blockquote text-white">
                    <p class="mb-5">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Eum earum fuga natus veritatis minima voluptatibus? Quae
                      consequuntur beatae repudiandae aut!
                    </p>
                  </blockquote>
                  <h5 class="text-light text-uppercase font-weight-bold mb-3">
                    Helen
                  </h5>
                  <ul class="list-inline mb-5">
                    <li class="list-inline-item">
                      <i class="fas fa-star text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="fas fa-star text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="fas fa-star text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="fas fa-star text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="fas fa-star text-warning"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
