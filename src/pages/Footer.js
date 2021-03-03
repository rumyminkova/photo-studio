import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container px-5">
      <div className="container-fluid">
        <div className="row text-light py-4">
          <div className="col-lg-4 col-sm-6">
            <h4 className="pb-2">About Us</h4>
            <p className="footer-small-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
              nobis dicta molestiae id laboriosam natus repudiandae, ducimus
              illum veritatis perspiciatis possimus, at facere debitis
              accusantium?
            </p>
          </div>
          <div className="col-lg-4 col-sm-6">
            <h4 className="pb-2">Need Help?</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="footer-link text-uppercase">
                  Customer Service
                </a>
              </li>
              <li>
                <a href="#" className="footer-link text-uppercase">
                  Online Chat
                </a>
              </li>
              <li>
                <a href="#" className="footer-link text-uppercase">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="footer-email">
                  photoartstudio@email.com
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-sm-6">
            <h4 className="pb-2">Stay Connected</h4>
            <p className="footer-small-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              accusamus dolores iste praesentium assumenda est quia accusantium
              corrupti ipsam inventore.
            </p>
            <form className="mb-3">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email Address"
                />
                <div className="input-group-append">
                  <button
                    type="button"
                    className="btn bg-dark text-white text-uppercase font-weight-bold"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row mt-2 mb-4">
          <div className="col text-center">
            <ul className="list-inline">
              <li className="list-inline-item">
                <FaFacebookSquare size="2.7rem" className="social-icons" />
              </li>
              <li className="list-inline-item">
                <FaInstagramSquare size="2.7rem" className="social-icons" />
              </li>
              <li class="list-inline-item">
                <FaTwitterSquare size="2.7rem" className="social-icons" />
              </li>
              <li class="list-inline-item">
                <FaYoutubeSquare size="2.7rem" className="social-icons" />
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center border-top pt-1">
            <p className="footer-small-text">&copy; 2020, Rumyana Rupetsova</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
