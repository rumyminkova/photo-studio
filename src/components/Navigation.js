import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

export const Navigation1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="fixed-top nav-menu" expand="md">
        <NavbarBrand href="/" className="text-light">
          <span className="h1 studio-title">PhotoArt</span>
          <span className="studio-subtitle"> Studio</span>
        </NavbarBrand>

        <button
          className="navbar-toggler nav-button"
          type="button"
          onClick={toggle}
        >
          <div
            className={!isOpen ? "bg-light line1" : "bg-light change-line1"}
          ></div>
          <div
            className={!isOpen ? "bg-light line2" : "bg-light change-line2"}
          ></div>
          <div
            className={!isOpen ? "bg-light line3" : "bg-light change-line3"}
          ></div>
        </button>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="p-3 ml-auto" navbar>
            <NavItem className="nav-item">
              <NavLink href="/" className="m-2 menu-item nav-active">
                Home
              </NavLink>
            </NavItem>
            <NavItem className="nav-item">
              <NavLink href="/mission" className="m-2 menu-item">
                Mission
              </NavLink>
            </NavItem>
            <NavItem className="nav-item">
              <NavLink href="/Collection" className="m-2 menu-item">
                Collection
              </NavLink>
            </NavItem>
            <NavItem className="nav-item">
              <NavLink href="/Gallery" className="m-2 menu-item">
                Gallery
              </NavLink>
            </NavItem>
            <NavItem className="nav-item">
              <NavLink href="/Mambership" className="m-2 menu-item">
                Mambership
              </NavLink>
            </NavItem>
            <NavItem className="nav-item">
              <NavLink href="/Contact" className="m-2 menu-item">
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top nav-menu">
      <a href="#" className="navbar-brand text-light">
        <span className="h1 studio-title">PhotoArt</span>
        <span className="studio-subtitle"> Studio</span>
      </a>
      <button
        className="navbar-toggler nav-button"
        type="button"
        data-toggle="collapse"
        data-target="#myNavbar"
      >
        <div className="bg-light line1"></div>
        <div className="bg-light line2"></div>
        <div className="bg-light line3"></div>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end text-uppercase font-weight-bold"
        id="myNavbar"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#" className="nav-link m-2 menu-item nav-active">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link m-2 menu-item">
              Mission
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link m-2 menu-item">
              Collection
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link m-2 menu-item">
              Gallery
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link m-2 menu-item">
              Customers
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link m-2 menu-item">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link m-2 menu-item">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
