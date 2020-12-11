import React from "react";

export const Navigation = () => {
  return (
    <nav class="navbar navbar-expand-lg fixed-top nav-menu">
      <a href="#" class="navbar-brand text-light">
        <span class="h1 studio-title">PhotoArt</span>
      </a>
      <button
        class="navbar-toggler nav-button"
        type="button"
        data-toggle="collapse"
        data-target="#myNavbar"
      >
        <div class="bg-light line1"></div>
        <div class="bg-light line2"></div>
        <div class="bg-light line3"></div>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end text-uppercase font-weight-bold"
        id="myNavbar"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <a href="#" class="nav-link m-2 menu-item nav-active">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link m-2 menu-item">
              Mission
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link m-2 menu-item">
              Collection
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link m-2 menu-item">
              Gallery
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link m-2 menu-item">
              Customers
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link m-2 menu-item">
              Pricing
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link m-2 menu-item">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
