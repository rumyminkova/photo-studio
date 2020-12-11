import React from "react";

const Mission = () => {
  return (
    <section class="p-5 mission">
      <div class="container-fluid">
        <div class="row text-white text-center">
          <div class="col m-4">
            <h1 class="display-4 mb-4">Our Mission</h1>
            <div class="underline mb-4"></div>
            <p class="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium inventore, sint quisquam fugiat pariatur culpa
              officia. Eveniet omnis quia tempora.
            </p>
          </div>
        </div>

        <div class="row my-5">
          <div class="col-md-4 text-center">
            <i class="fas fa-cogs fa-5x text-danger mb-4"></i>
            <h1 class="text-white mb-3">Creativity</h1>
            <p class="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic
              perferendis dolor vitae sed, quae officiis exercitationem quaerat?
              Fugit excepturi exercitationem inventore, repellendus architecto
              illum!
            </p>
          </div>
          <div class="col-md-4 text-center">
            <i class="far fa-thumbs-up fa-5x text-danger mb-4"></i>
            <h1 class="text-white mb-3">Quality</h1>
            <p class="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic
              perferendis dolor vitae sed, quae officiis exercitationem quaerat?
              Fugit excepturi exercitationem inventore, repellendus architecto
              illum!
            </p>
          </div>
          <div class="col-md-4 text-center">
            <i class="far fa-handshake fa-5x text-danger mb-4"></i>
            <h1 class="text-white mb-3">Experience</h1>
            <p class="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic
              perferendis dolor vitae sed, quae officiis exercitationem quaerat?
              Fugit excepturi exercitationem inventore, repellendus architecto
              illum!
            </p>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-5 text-center">
            <img
              src="images/camera.png"
              width="350"
              class="img-fluid camera-img"
            />
          </div>
          <div class="col-lg-7 text-white text-lg-right text-center mission-text">
            <h1>We know what we do</h1>
            <p class="lead">
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
