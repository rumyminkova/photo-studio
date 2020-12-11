import React from "react";

const Footer = () => {
  return (
    <footer class="bg-dark px-5">
      <div class="container-fluid">
        <div class="row text-light py-4">
          <div class="col-lg-4 col-sm-6">
            <h5 class="pb-3">About Us</h5>
            <p class="small">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
              nobis dicta molestiae id laboriosam natus repudiandae, ducimus
              illum veritatis perspiciatis possimus, at facere debitis
              accusantium?
            </p>
          </div>
          <div class="col-lg-2 col-sm-6">
            <h5 class="pb-3">Visit Us</h5>
            <ul class="list-unstyled">
              <li>
                <a href="#" class="footer-link">
                  Home
                </a>
              </li>
              <li>
                <a href="#" class="footer-link">
                  Mission
                </a>
              </li>
              <li>
                <a href="#" class="footer-link">
                  Collection
                </a>
              </li>
              <li>
                <a href="#" class="footer-link">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#" class="footer-link">
                  Customers
                </a>
              </li>
              <li>
                <a href="#" class="footer-link">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" class="footer-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div class="col-lg-2 col-sm-6">
            <h5 class="pb-3">Need Help?</h5>
            <ul class="list-unstyled">
              <li>
                <a href="#" class="footer-link text-uppercase">
                  Customer Service
                </a>
              </li>
              <li>
                <a href="#" class="footer-link text-uppercase">
                  Online Chat
                </a>
              </li>
              <li>
                <a href="#" class="footer-link text-uppercase">
                  Support
                </a>
              </li>
              <li>
                <a href="#" class="text-info">
                  photox@email.com
                </a>
              </li>
            </ul>
          </div>
          <div class="col-lg-4 col-sm-6">
            <h5 class="pb-3">Stay Connected</h5>
            <p class="small">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              accusamus dolores iste praesentium assumenda est quia accusantium
              corrupti ipsam inventore.
            </p>
            <form class="mb-3">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Email Address"
                />
                <div class="input-group-append">
                  <button
                    type="button"
                    class="btn bg-danger text-white text-uppercase font-weight-bold"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
            <ul class="list-inline">
              <li class="list-inline-item">
                <i class="fab fa-facebook-square fa-2x text-primary"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-google-plus fa-2x text-danger"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-instagram fa-2x text-danger"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-twitter fa-2x text-info"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-youtube fa-2x text-danger"></i>
              </li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col text-center text-light border-top pt-3">
            <p>&copy; 2018 Copyright, All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
