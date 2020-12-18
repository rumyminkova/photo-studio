import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import "./Navigation.css";
export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="fixed-top nav-menu" expand="md">
        <NavbarBrand href="/" className="text-light">
          <span className="studio-title-nav">PhotoArt</span>
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
          <Nav className="p-1 ml-auto" navbar>
            <NavItem className="nav-item">
              <NavLink href="/" className="m-2 menu-item">
                Home
              </NavLink>
            </NavItem>
            <NavItem className="nav-item">
              <NavLink href="#mission" className="m-2 menu-item">
                Mission
              </NavLink>
            </NavItem>
            <NavItem className="nav-item">
              <NavLink href="#collection" className="m-2 menu-item">
                Collection
              </NavLink>
            </NavItem>
            <NavItem className="nav-item">
              <NavLink href="#gallery" className="m-2 menu-item">
                Gallery
              </NavLink>
            </NavItem>
            <NavItem className="nav-item">
              <NavLink href="#customers" className="m-2 menu-item">
                Customers
              </NavLink>
            </NavItem>
            <NavItem className="nav-item">
              <NavLink href="#membership" className="m-2 menu-item">
                Join
              </NavLink>
            </NavItem>
            <NavItem className="nav-item">
              <NavLink href="#contact" className="m-2 menu-item">
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
