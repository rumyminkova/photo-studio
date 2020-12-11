import React from "react";

const Pricing = () => {
  return (
    <section class="bg-light text-center p-5">
      <div class="container-fluid">
        <div class="row text-muted text-center">
          <div class="col m-4">
            <h1 class="display-4 mb-4">Join Us</h1>
            <div class="underline-dark mb-4"></div>
            <p class="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium inventore, sint quisquam fugiat pariatur culpa
              officia. Eveniet omnis quia tempora.
            </p>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-lg-4">
            <div class="card card-1 text-light py-4 my-4 mx-auto">
              <div class="card-body">
                <h5 class="text-uppercase font-weight-bold mb-5">
                  Monthly Membership
                </h5>
                <h1 class="display-4">
                  <i class="fas fa-dollar-sign"></i> 19
                </h1>
                <ul class="list-unstyled">
                  <li class="font-weight-bold py-3 card-list-item">
                    Photoshop
                  </li>
                  <li class="font-weight-bold py-3 card-list-item">
                    After Effects
                  </li>
                  <li class="font-weight-bold py-3 card-list-item">
                    Graphic Design
                  </li>
                  <li class="font-weight-bold py-3 card-list-item border-0">
                    Video Montage
                  </li>
                </ul>
                <a
                  href="#"
                  class="btn p-2 text-uppercase font-weight-bold price-card-button text-light"
                >
                  sign-up!
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card card-2 text-light py-4 my-4 mx-auto">
              <div class="card-body">
                <h5 class="text-uppercase font-weight-bold mb-5">
                  Unlimited Access
                </h5>
                <h1 class="display-4">
                  <i class="fas fa-dollar-sign"></i> 499
                </h1>
                <ul class="list-unstyled">
                  <li class="font-weight-bold py-3 card-list-item">
                    Photoshop
                  </li>
                  <li class="font-weight-bold py-3 card-list-item">
                    After Effects
                  </li>
                  <li class="font-weight-bold py-3 card-list-item">
                    Graphic Design
                  </li>
                  <li class="font-weight-bold py-3 card-list-item ">
                    Video Montage
                  </li>
                  <li class="font-weight-bold py-3 card-list-item border-0">
                    Clip Making
                  </li>
                </ul>
                <a
                  href="#"
                  class="btn p-2 text-uppercase font-weight-bold price-card-button text-light"
                >
                  sign-up!
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card card-3 text-light py-4 my-4 mx-auto">
              <div class="card-body">
                <h5 class="text-uppercase font-weight-bold mb-5">
                  Annual Membership
                </h5>
                <h1 class="display-4">
                  <i class="fas fa-dollar-sign"></i> 199
                </h1>
                <ul class="list-unstyled">
                  <li class="font-weight-bold py-3 card-list-item">
                    Photoshop
                  </li>
                  <li class="font-weight-bold py-3 card-list-item">
                    After Effects
                  </li>
                  <li class="font-weight-bold py-3 card-list-item">
                    Graphic Design
                  </li>
                  <li class="font-weight-bold py-3 card-list-item border-0">
                    Video Montage
                  </li>
                </ul>
                <a
                  href="#"
                  class="btn p-2 text-uppercase font-weight-bold price-card-button text-light"
                >
                  sign-up!
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="my-5">
          <h2 class="text-muted mb-4">Thanks for being with us!</h2>
          <i class="fas fa-coffee fa-3x"></i>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
